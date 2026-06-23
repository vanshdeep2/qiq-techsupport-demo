/**
 * Generates Helix Tech Support IT helpdesk contact dataset (2,200 records, 8 weeks).
 * Run: node scripts/generate-helixtech-dataset.mjs
 */
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { randomUUID } from 'crypto'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT = join(ROOT, 'public', 'data', 'contact_search_data.json')
const STATS_OUT = join(ROOT, 'scripts', 'dataset-stats.json')

const TOTAL = 2200
const WEEKS = 8
const PER_WEEK = TOTAL / WEEKS

const WEEK_BOUNDARIES = [
  { start: '2026-04-06', end: '2026-04-12', label: 'W1' },
  { start: '2026-04-13', end: '2026-04-19', label: 'W2' },
  { start: '2026-04-20', end: '2026-04-26', label: 'W3' },
  { start: '2026-04-27', end: '2026-05-03', label: 'W4' },
  { start: '2026-05-04', end: '2026-05-10', label: 'W5' },
  { start: '2026-05-11', end: '2026-05-17', label: 'W6' },
  { start: '2026-05-18', end: '2026-05-24', label: 'W7' },
  { start: '2026-05-25', end: '2026-05-31', label: 'W8' },
]

const QUEUES = ['POS Hardware', 'Network & Connectivity', 'Printer & Peripherals', 'Account Access', 'Software Support']
const QUEUE_WEIGHTS = [0.28, 0.19, 0.14, 0.12, 0.27]
const CHANNELS = ['voice', 'email', 'chat']
const CHANNEL_WEIGHTS = [0.65, 0.22, 0.13]

const FEATURED_AGENTS = [
  'Sipho Ndlovu',
  'Zanele Mokoena',
  'Ruan Pretorius',
  'Nompumelelo Dube',
  'Andile Khumalo',
  'Mariska Joubert',
  'Thabo Mahlangu',
  'Kefilwe Sithole',
  'Jaco Steyn',
  'Aisha Osman',
]

const COACHED_AGENTS = ['Zanele Mokoena', 'Andile Khumalo', 'Nompumelelo Dube', 'Mariska Joubert']

const EXTRA_AGENTS = [
  'Andile Zulu', 'Bongani Ngcobo', 'Candice Pretorius', 'Dumisani Mthembu', 'Elize Steyn',
  'Fikile Xaba', 'Gugu Mhlongo', 'Hendrik Kruger', 'Ingrid Bothma', 'Jabulani Sithole',
  'Karabo Molefe', 'Lungile Cele', 'Mandla Dube', 'Naledi Mokoena', 'Oscar Viljoen',
  'Palesa Radebe', 'Quinton Fourie', 'Refilwe Modise', 'Sibusiso Gumede', 'Themba Nkuna',
  'Unathi Qwabe', 'Vuyisile Mabaso', 'Willem de Klerk', 'Xolani Mbatha', 'Yolanda Swart',
  'Zinhle Buthelezi', 'Amahle Nkomo', 'Bheki Zondi', 'Chantelle van Wyk', 'Dineo Kgosana',
  'Ebrahim Patel', 'Fatima Osman', 'Gert van Heerden', 'Hlengiwe Shange', 'Isaac Mnguni',
  'Johan Erasmus', 'Kgomotso Seboko', 'Lerato Mabena', 'Mpho Tshabalala', 'Nhlanhla Mkhize',
  'Olwethu Dlamini', 'Phumzile Nxumalo', 'Riaan Louw', 'Sello Mahlangu', 'Thandiwe Maseko',
  'Ulrich van Niekerk', 'Vusi Ndaba', 'Wandile Khoza', 'Xoliswa Mthethwa', 'Yusuf Adams',
  'Zodwa Maphumulo', 'Anathi Bhengu', 'Brenton Jacobs', 'Cebile Mkhwanazi', 'Daniel Mokoena',
  'Elsabe Venter', 'Fanie Coetzee', 'Gcinile Mabaso', 'Hermanus du Plessis', 'Itumeleng Moloi',
  'Jaco van Zyl', 'Keabetswe Modise', 'Lindiwe Nkabinde', 'Marius Steenkamp', 'Nokuthula Zungu',
  'Oupa Moleko', 'Petra van der Berg', 'Qinisile Mthembu', 'Rethabile Mokoena', 'Stefan Nel',
  'Tshepo Molefe', 'Unathi Mabena', 'Vernon Pieterse', 'Winnie Mabaso', 'Xander van Rooyen',
]

const ALL_AGENTS = [...FEATURED_AGENTS, ...EXTRA_AGENTS].slice(0, 85)

const CF_TYPES = [
  { id: 'premature_dispatch', label: 'Premature dispatch: L3 on-site requested before remote triage completed', pillar: 'Escalation' },
  { id: 'skipped_triage', label: 'Skipped triage: reboot and network check not completed before escalation', pillar: 'Diagnosis' },
  { id: 'no_sla_clock', label: 'No SLA clock: ticket closed without starting SLA timer or giving ETA', pillar: 'Expectation Setting' },
  { id: 'no_ticket_notes', label: 'No ticket notes: repeat contact where prior interaction had no documentation', pillar: 'Documentation Accuracy' },
  { id: 'escalation_avoidance', label: 'Escalation avoidance: criteria met but not escalated, third contact from same store', pillar: 'Escalation' },
]

const POS_SUBCATEGORIES = [
  'POS Not Connecting', 'Terminal Reboot Required', 'Card Reader Failure',
  'POS Software Crash', 'Receipt Printer Jam', 'Cash Drawer Malfunction',
  'POS Login Failure', 'Payment Processing Error',
]

const NETWORK_SUBCATEGORIES = [
  'Store Network Outage', 'WiFi Down at Location', 'VPN Connection Failure',
  'Router Offline', 'Internet Speed Degraded', 'Firewall Blocking Access',
  'DNS Resolution Failure',
]

const PRINTER_SUBCATEGORIES = [
  'Receipt Printer Offline', 'Label Printer Jam', 'Driver Install Required',
  'Print Queue Stuck', 'Wrong Printer Selected',
]

const ACCOUNT_SUBCATEGORIES = [
  'Password Reset', 'Account Locked', 'New User Setup',
  'Permissions Change', 'SSO Login Failure',
]

const SOFTWARE_SUBCATEGORIES = [
  'Software Install Error', 'Application Update Failed', 'License Activation',
  'Inventory App Crash', 'POS Software Update',
]

const FIRST_NAMES = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Jamie', 'Avery', 'Quinn', 'Blake', 'Drew', 'Skyler', 'Cameron', 'Reese', 'Parker']
const LAST_NAMES = ['Miller', 'Davis', 'Wilson', 'Brown', 'Garcia', 'Martinez', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Robinson', 'Clark']

const REPEAT_CLUSTERS = Array.from({ length: 45 }, (_, i) => ({
  order: `HL-STR-${10000 + i}`,
  customer: `Store ${1200 + i} - ${['Sandton', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'][i % 5]}`,
  contacts: 2 + (i % 3),
}))

let seed = 42
function rand() {
  seed = (seed * 16807) % 2147483647
  return (seed - 1) / 2147483646
}

function pickWeighted(items, weights) {
  const r = rand()
  let acc = 0
  for (let i = 0; i < items.length; i++) {
    acc += weights[i]
    if (r < acc) return items[i]
  }
  return items[items.length - 1]
}

function pick(arr) {
  return arr[Math.floor(rand() * arr.length)]
}

function dateInWeek(weekIdx) {
  const w = WEEK_BOUNDARIES[weekIdx]
  const start = new Date(w.start)
  const end = new Date(w.end)
  const days = Math.floor((end - start) / 86400000)
  const d = new Date(start)
  d.setDate(d.getDate() + Math.floor(rand() * (days + 1)))
  const h = 8 + Math.floor(rand() * 10)
  const m = Math.floor(rand() * 60)
  const s = Math.floor(rand() * 60)
  return {
    date: d.toISOString().slice(0, 10),
    time: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`,
  }
}

function weekParams(weekIdx, queue, agentName) {
  const phase = weekIdx < 4 ? 'decline' : weekIdx === 4 ? 'intervention' : 'recovery'
  const isPOS = queue === 'POS Hardware'
  const isCoached = COACHED_AGENTS.includes(agentName)

  let fcrBase = isPOS ? 0.55 : queue === 'Network & Connectivity' ? 0.64 : queue === 'Account Access' ? 0.82 : 0.72
  let ahtBase = isPOS ? 580 : queue === 'Network & Connectivity' ? 560 : queue === 'Printer & Peripherals' ? 480 : 380
  let csatBase = isPOS ? 3.3 : 3.9
  let escProb = isPOS ? 0.20 : 0.10
  let trProb = isPOS ? 0.14 : 0.08
  let repeatProb = isPOS ? 0.26 : 0.12
  let cfProb = isPOS ? 0.04 : 0.01

  if (phase === 'decline' && isPOS) {
    fcrBase -= 0.02 * weekIdx
    ahtBase += 15 * weekIdx
    csatBase -= 0.08 * weekIdx
    repeatProb += 0.03 * weekIdx
    cfProb += 0.008 * weekIdx
  } else if (phase === 'intervention' && isPOS) {
    fcrBase -= 0.05
    ahtBase += 55
    csatBase -= 0.15
    repeatProb += 0.05
    cfProb += 0.01
  } else if (phase === 'recovery' && isPOS) {
    const recoveryWeek = weekIdx - 5
    fcrBase += 0.06 + recoveryWeek * 0.04
    ahtBase -= 20 + recoveryWeek * 12
    csatBase += 0.1 + recoveryWeek * 0.08
    repeatProb -= 0.04 + recoveryWeek * 0.03
    cfProb -= 0.015
  }

  if (isCoached && isPOS) {
    if (phase === 'decline' || phase === 'intervention') {
      fcrBase -= 0.12
      ahtBase += 40
      csatBase -= 0.25
      repeatProb += 0.08
      cfProb += 0.02
    } else {
      fcrBase += 0.15 + (weekIdx - 5) * 0.05
      ahtBase -= 30
      csatBase += 0.2
      repeatProb -= 0.1
      cfProb -= 0.02
    }
  }

  // High performers on returns
  if (agentName === 'Sipho Ndlovu' && isPOS) {
    fcrBase = Math.max(fcrBase, 0.82)
    csatBase = Math.max(csatBase, 4.1)
    cfProb *= 0.2
  }
  if (agentName === 'Kefilwe Sithole' && isPOS && phase !== 'recovery') {
    fcrBase = Math.min(fcrBase, 0.35)
    csatBase = Math.min(csatBase, 2.5)
    cfProb += 0.03
  }

  return { fcrBase, ahtBase, csatBase, escProb, trProb, repeatProb, cfProb, phase }
}

function makeQuestionEvals(qaScore, cfType) {
  const metCount = Math.round((qaScore / 100) * 10)
  const evals = []
  for (let i = 1; i <= 14; i++) {
    const qid = `q${i}`
    const applicable = i !== 3 && i !== 10
    let awarded = applicable && i <= metCount ? 1 : applicable ? 0 : null
    if (cfType === 'premature_dispatch' && qid === 'q5') awarded = 0
    if (cfType === 'skipped_triage' && qid === 'q2') awarded = 0
    if (cfType === 'no_ticket_notes' && qid === 'q11') awarded = 0
    if (cfType === 'no_sla_clock' && qid === 'q6') awarded = 0
    evals.push({
      na_reason: applicable ? null : 'Not applicable for this contact type.',
      reasoning: applicable ? 'Evaluated from transcript.' : 'N/A',
      applicable,
      question_id: qid,
      requires_crm: qid === 'q3',
      llm_score_awarded: awarded,
      structured_evidence: [],
      policy_score_awarded: awarded ?? 1,
      effective_earned_weight: applicable ? (awarded ? 8 : 0) : 0,
    })
  }
  return evals
}

function sectionScores(queue, qaScore, cfType) {
  const isPOS = queue === 'POS Hardware'
  const doc = isPOS ? Math.min(qaScore - 15, 55) : qaScore - 5
  const resolution = isPOS ? Math.min(qaScore - 10, 60) : qaScore
  const policy = cfType === 'premature_dispatch' ? 20 : qaScore
  const experience = qaScore + 5
  return [
    { section: 'Customer Experience', score_pct: Math.min(100, experience), earned_weight: 26, applicable_weight: 34 },
    { section: 'Policy and Compliance', score_pct: Math.min(100, policy), earned_weight: 12, applicable_weight: 12 },
    { section: 'Documentation Accuracy', score_pct: Math.max(20, doc), earned_weight: 25, applicable_weight: 34 },
    { section: 'Resolution & Close', score_pct: Math.max(15, resolution), earned_weight: 20, applicable_weight: 20 },
  ]
}

function agentLine(agent, text) {
  return `Agent (${agent}): ${text}`
}

function customerLine(text) {
  return `Customer: ${text}`
}

const SUBCATEGORY_ISSUES = {
  'POS Not Connecting': {
    customerOpen: 'Our POS terminal at store {order} is not connecting to the network. We cannot process any sales.',
    customerFollow: 'We have already tried turning it off and on once but it still shows offline.',
    agentFinding: 'I am pulling up store {order} in our monitoring dashboard now.',
    agentResolve: 'I have confirmed the terminal is back online after the reboot and network check. Ticket is resolved remotely - no dispatch needed.',
  },
  'Terminal Reboot Required': {
    customerOpen: 'The POS screen is frozen on the login page at store {order}.',
    customerFollow: 'We have customers waiting in line.',
    agentFinding: 'I can see the terminal status shows unresponsive in our system.',
    agentResolve: 'Please hold the power button for 10 seconds to reboot. I will stay on the line while it restarts. Terminal should be back within 2 minutes.',
  },
  'Card Reader Failure': {
    customerOpen: 'The card reader on our main register is not reading any cards at store {order}.',
    customerFollow: 'We have tried two different cards and both failed.',
    agentFinding: 'I can see the card reader showing a connection error in device management.',
    agentResolve: 'I have reset the card reader driver remotely. Please test with a card now - it should process normally.',
  },
  'Store Network Outage': {
    customerOpen: 'Our entire store network is down at location {order}. Nothing can connect.',
    customerFollow: 'All registers and the back office are offline.',
    agentFinding: 'I can see a network outage alert for your store region.',
    agentResolve: 'I have identified the issue as a router failure. I am dispatching a technician - ETA within 4 hours. SLA clock started on ticket {order}.',
  },
  'WiFi Down at Location': {
    customerOpen: 'WiFi is down at store {order} and our mobile POS devices cannot connect.',
    customerFollow: 'The wired registers work but handhelds are offline.',
    agentFinding: 'I can see the access point is not responding in our monitoring tool.',
    agentResolve: 'I have remotely restarted the access point. WiFi should be back within 5 minutes. I will confirm once devices reconnect.',
  },
  'Receipt Printer Offline': {
    customerOpen: 'The receipt printer at store {order} shows offline and we cannot print receipts.',
    customerFollow: 'We checked the power and USB cable - both look fine.',
    agentFinding: 'I can see the printer spooler is stuck in our remote management console.',
    agentResolve: 'I have cleared the print queue and restarted the spooler service. Please try a test print now.',
  },
  'Password Reset': {
    customerOpen: 'I need a password reset for the store manager account at location {order}.',
    customerFollow: 'The account is locked after too many failed attempts.',
    agentFinding: 'I can see the account lockout flag in active directory.',
    agentResolve: 'I have unlocked the account and sent a password reset link to the registered email. You should receive it within 5 minutes.',
  },
  'Account Locked': {
    customerOpen: 'My Helix portal account is locked and I cannot access store tickets for {order}.',
    customerFollow: 'I need to check on an open dispatch ticket.',
    agentFinding: 'I can see three failed login attempts triggered the lockout.',
    agentResolve: 'Account is unlocked. I have sent a new login link. Please use the reset password option on first login.',
  },
  'Software Install Error': {
    customerOpen: 'The inventory management app failed to install on the back-office PC at store {order}.',
    customerFollow: 'It shows error code 0x80070643 every time we try.',
    agentFinding: 'I can see a previous incomplete install is blocking the new deployment.',
    agentResolve: 'I have cleared the failed install package remotely. Please retry the install - it should complete within 10 minutes.',
  },
  'POS Software Crash': {
    customerOpen: 'The POS application keeps crashing at store {order} every time we try to complete a sale.',
    customerFollow: 'It happens on multiple registers.',
    agentFinding: 'I can see a memory leak pattern in the application logs.',
    agentResolve: 'I have pushed a patch to your terminals remotely. Please restart the POS application and test a transaction.',
  },
}

function fillTemplate(text, order) {
  return text.replace(/\{order\}/g, order)
}

function buildTranscript({
  agent,
  order,
  subcategory,
  queue,
  cfType,
  channel,
  phase,
  isRepeat,
  fcr,
  escalated,
}) {
  const issue = SUBCATEGORY_ISSUES[subcategory] || {
    customerOpen: `I need help with ${subcategory.toLowerCase()} on order {order}.`,
    customerFollow: 'I have the order details ready if you need them.',
    agentFinding: `Let me pull up order {order} in the system.`,
    agentResolve: `I have taken care of your ${subcategory.toLowerCase()} request and documented everything on the case.`,
  }

  const isBenchmark = agent === 'Sipho Ndlovu'
  const isCoached = COACHED_AGENTS.includes(agent)
  const coachedBadPhase = isCoached && (phase === 'decline' || phase === 'intervention')
  const kefilweEscalationMiss = agent === 'Kefilwe Sithole' && phase !== 'recovery' && (isRepeat || cfType === 'escalation_avoidance')

  const lines = []

  if (channel === 'email') {
    lines.push('Email thread - Helix Tech Support')
    lines.push(customerLine(`Re: store ${order} - ${subcategory.toLowerCase()}.`))
    lines.push(agentLine(agent, 'Thank you for contacting Helix Tech Support.'))
  } else if (channel === 'chat') {
    lines.push('Chat - Helix Tech Support')
    lines.push(agentLine(agent, 'Hi, thanks for contacting Helix Tech Support. How can I help you today?'))
  } else {
    lines.push(agentLine(agent, `Thank you for calling Helix Tech Support, this is ${agent}. How can I help you today?`))
  }

  if (cfType !== 'no_sla_clock' && !coachedBadPhase) {
    lines.push(agentLine(agent, 'For verification, can I confirm the store ID and location?'))
    lines.push(customerLine(`Store ${order}, and the location should be on file from our account setup.`))
  } else if (cfType === 'no_sla_clock') {
    lines.push(agentLine(agent, 'I can look into that issue for you right away.'))
    lines.push(customerLine(fillTemplate(issue.customerOpen, order)))
  } else {
    lines.push(agentLine(agent, 'Can I get your store ID to get started?'))
    lines.push(customerLine(`It is ${order}.`))
  }

  if (isRepeat && !cfType) {
    lines.push(customerLine(`This is my third time contacting Helix about ${subcategory.toLowerCase()} at store ${order}.`))
  } else {
    lines.push(customerLine(fillTemplate(issue.customerOpen, order)))
  }

  lines.push(agentLine(agent, fillTemplate(issue.agentFinding, order)))

  lines.push(customerLine(fillTemplate(issue.customerFollow, order)))

  if (cfType === 'premature_dispatch') {
    lines.push(agentLine(agent, 'I am going to request an on-site technician right away without running further remote checks.'))
    lines.push(customerLine('Have you tried rebooting the terminal and checking the network first?'))
    lines.push(agentLine(agent, 'A technician visit is the fastest path. I am submitting the dispatch request now.'))
  } else if (cfType === 'escalation_avoidance' || kefilweEscalationMiss) {
    lines.push(agentLine(agent, 'I understand this is frustrating. Let me try one more remote fix from my side.'))
    lines.push(customerLine('We have already spoken to two other agents. We need a technician on-site.'))
    lines.push(agentLine(agent, 'I am sure we can sort this without dispatching. I will refresh the terminal status now.'))
    lines.push(customerLine('That is what we were told last time. The register is still down.'))
    lines.push(agentLine(agent, 'I have updated the notes. Please allow 24 hours and call back if the terminal is still offline.'))
  } else if (cfType === 'skipped_triage') {
    lines.push(agentLine(agent, 'I will escalate this to our on-site team without running the standard reboot checklist.'))
    lines.push(customerLine('Did you check if a reboot would fix it first?'))
    lines.push(agentLine(agent, 'Dispatch is already submitted. A technician will arrive within 4 hours.'))
  } else if (cfType === 'no_sla_clock' || (coachedBadPhase && queue === 'POS Hardware' && !isBenchmark)) {
    lines.push(agentLine(agent, 'I have started working on the terminal issue in the system.'))
    lines.push(customerLine('When will this be fixed? We have customers waiting.'))
    lines.push(agentLine(agent, 'It should be resolved soon. Is there anything else I can help with today?'))
    lines.push(customerLine('So you cannot give us a timeline or ticket reference?'))
    lines.push(agentLine(agent, 'The system will update automatically once processing completes. Thank you for calling Helix Tech Support.'))
  } else if (escalated) {
    lines.push(agentLine(agent, 'This needs our on-site technician team. I am escalating now with full notes on store ' + order + '.'))
    lines.push(customerLine('How long until someone arrives?'))
    lines.push(agentLine(agent, 'A technician will be on-site within 4 hours. Your dispatch reference is on the ticket.'))
  } else {
    const triageLine = queue === 'POS Hardware'
      ? 'Helix policy requires a full remote triage before any on-site dispatch.'
      : ''
    if (triageLine && subcategory !== 'Terminal Reboot Required') {
      lines.push(agentLine(agent, triageLine))
    }
    lines.push(agentLine(agent, fillTemplate(issue.agentResolve, order)))
    if (isBenchmark && queue === 'POS Hardware') {
      lines.push(agentLine(agent, 'To recap: terminal is back online, ticket is resolved remotely, and I have documented all steps on the ticket for store ' + order + '.'))
    }
  }

  const skipCaseNotes = cfType === 'no_ticket_notes' || (coachedBadPhase && !isBenchmark && rand() < 0.6)
  if (!skipCaseNotes && fcr && cfType !== 'skipped_triage' && cfType !== 'escalation_avoidance' && !kefilweEscalationMiss) {
    lines.push(agentLine(agent, 'I have documented today\'s resolution and next steps on your ticket for any future contacts.'))
  }

  if (fcr && cfType !== 'skipped_triage' && !kefilweEscalationMiss && cfType !== 'escalation_avoidance') {
    lines.push(agentLine(agent, 'Is there anything else I can help you with today?'))
    lines.push(customerLine('No, that covers it. Thank you.'))
    lines.push(agentLine(agent, 'Thank you for contacting Helix Tech Support. Have a great day.'))
  } else if (!fcr) {
    lines.push(customerLine('We may need to call back if this is not resolved.'))
    lines.push(agentLine(agent, 'Please use the same ticket reference if you contact us again so we can pick up where we left off.'))
  }

  return lines.join('\n')
}

function buildRecord(id, weekIdx, opts = {}) {
  const queue = opts.queue || pickWeighted(QUEUES, QUEUE_WEIGHTS)
  const channel = opts.channel || pickWeighted(CHANNELS, CHANNEL_WEIGHTS)
  const agent = opts.agent || pick(ALL_AGENTS)
  const subcats = queue === 'POS Hardware' ? POS_SUBCATEGORIES
    : queue === 'Network & Connectivity' ? NETWORK_SUBCATEGORIES
      : queue === 'Printer & Peripherals' ? PRINTER_SUBCATEGORIES
        : queue === 'Account Access' ? ACCOUNT_SUBCATEGORIES : SOFTWARE_SUBCATEGORIES
  const subcategory = opts.subcategory || pick(subcats)

  const cluster = opts.cluster || (rand() < 0.35 && queue === 'POS Hardware' ? pick(REPEAT_CLUSTERS) : null)
  const customer = cluster ? cluster.customer : `Store ${1200 + Math.floor(rand() * 800)} - ${pick(['Sandton', 'Cape Town', 'Durban', 'Pretoria'])}`
  const order = cluster ? cluster.order : `HL-STR-${20000 + Math.floor(rand() * 8000)}`

  const params = weekParams(weekIdx, queue, agent)
  const { date, time } = dateInWeek(weekIdx)

  const fcr = opts.fcr ?? (rand() < params.fcrBase)
  const escalated = opts.escalated ?? (rand() < params.escProb)
  const transferred = opts.transferred ?? (!escalated && rand() < params.trProb)
  const isRepeat = opts.isRepeat ?? (rand() < params.repeatProb)

  let cfType = opts.cfType ?? null
  let critical = false
  if (!cfType && rand() < params.cfProb) {
    cfType = pick(CF_TYPES).id
    critical = true
  }
  if (opts.forceCritical) {
    critical = true
    cfType = opts.cfType || pick(CF_TYPES).id
  }

  let csat = params.csatBase + (rand() - 0.5) * 0.8
  if (!fcr) csat -= 0.6
  if (critical) csat -= 1.2
  if (fcr && !critical) csat += 0.3
  csat = Math.max(1, Math.min(5, Math.round(csat * 10) / 10))

  const aht = Math.round(params.ahtBase + (rand() - 0.5) * 60 + (channel === 'email' ? -40 : channel === 'chat' ? -20 : 0))

  let qaScore = 70 + (csat - 3) * 12 + (fcr ? 8 : -10) - (critical ? 40 : 0)
  qaScore = Math.max(0, Math.min(100, Math.round(qaScore * 10) / 10))
  const qaPass = !critical && qaScore >= 70

  const cfLabel = critical ? CF_TYPES.find((c) => c.id === cfType)?.label : null
  const prefix = critical ? 'HL-TK-CF' : 'HL-TK-'
  const callId = opts.callId || `${prefix}${String(id).padStart(6, '0')}`

  const transcript = buildTranscript({
    agent,
    order,
    subcategory,
    queue,
    cfType: critical ? cfType : null,
    channel,
    phase: params.phase,
    isRepeat,
    fcr,
    escalated,
  })
  const summary = `Contact regarding store ${order} (${subcategory}) via ${channel}. `
    + (critical ? `Critical failure flagged: ${cfLabel}. ` : '')
    + (isRepeat ? 'This is a repeat contact on the same issue. ' : '')
    + (fcr ? 'Issue resolved on first contact.' : 'Issue not fully resolved; follow-up may be required.')

  return {
    call_id: callId,
    full_uuid: randomUUID(),
    agent_name: agent,
    call_date: date,
    call_time: time,
    call_category: queue,
    call_subcategory: subcategory,
    merchant_name: customer,
    merchant_contact: order,
    channel,
    order_number: order,
    call_handling_time: aht,
    transcript,
    narrative_summary: summary,
    fcr_resolved: fcr,
    predicted_csat_score: csat,
    predicted_csat_label: csat >= 4.5 ? 'Very Satisfied' : csat >= 4 ? 'Satisfied' : csat >= 3 ? 'Neutral' : csat >= 2 ? 'Dissatisfied' : 'Very Dissatisfied',
    predicted_nps_score: Math.round(csat * 2 - 1),
    critical_failure: critical,
    critical_failure_category: cfType,
    escalated,
    transferred,
    is_repeat_contact: isRepeat,
    qa_score: critical ? 0 : qaScore,
    qa_pass: qaPass,
    auto_fail_reasons: critical ? [cfLabel] : [],
    key_strengths: fcr ? ['Clear communication on Helix support protocol.'] : [],
    key_gaps: critical ? [cfLabel] : !fcr ? ['Resolution not confirmed at close.'] : [],
    questions_met: Math.floor(qaScore / 10),
    questions_not_met: 14 - Math.floor(qaScore / 10),
    section_scores: sectionScores(queue, qaScore, cfType),
    question_evaluations: makeQuestionEvals(qaScore, cfType),
  }
}

// --- Generate ---
const records = []
let id = 1
let cfCounter = 1

for (let w = 0; w < WEEKS; w++) {
  const weekCount = w === WEEKS - 1 ? TOTAL - records.length : PER_WEEK
  const cfTarget = w < 4 ? 12 + w * 2 : w < 6 ? 6 - (w - 4) * 2 : 2

  const cfSlots = new Set()
  while (cfSlots.size < cfTarget && cfSlots.size < weekCount) {
    cfSlots.add(Math.floor(rand() * weekCount))
  }

  for (let i = 0; i < weekCount; i++) {
    const isCf = cfSlots.has(i)
    const cfType = isCf ? CF_TYPES[cfCounter % CF_TYPES.length].id : null
  const record = buildRecord(id++, w, {
      forceCritical: isCf,
      cfType,
      callId: isCf ? `HL-TK-CF${String(cfCounter++).padStart(4, '0')}` : undefined,
      agent: isCf && w < 5 ? pick([...COACHED_AGENTS, 'Kefilwe Sithole']) : undefined,
      queue: isCf ? 'POS Hardware' : undefined,
    })
    records.push(record)
  }
}

// Add dense repeat clusters for returns search
for (const cluster of REPEAT_CLUSTERS.slice(0, 30)) {
  for (let c = 0; c < cluster.contacts; c++) {
    if (records.length >= TOTAL + 50) break
    const w = c === 0 ? Math.floor(rand() * 4) : Math.min(7, Math.floor(rand() * 4) + c)
    records.push(buildRecord(id++, w, {
      cluster,
      queue: 'POS Hardware',
      subcategory: pick(['POS Not Connecting', 'Terminal Reboot Required', 'Card Reader Failure']),
      isRepeat: c > 0,
      agent: pick(COACHED_AGENTS),
      fcr: c === cluster.contacts - 1 ? false : false,
      forceCritical: c === cluster.contacts - 1 && rand() < 0.4,
      cfType: c === cluster.contacts - 1 ? 'no_ticket_notes' : null,
    }))
  }
}

// Trim or pad to exactly TOTAL (replace tail if over)
while (records.length > TOTAL) records.pop()
while (records.length < TOTAL) {
  records.push(buildRecord(id++, 7, { queue: 'Account Access' }))
}

// Force ~18% CSAT < 3 (calibrate)
const lowCsatTarget = Math.round(TOTAL * 0.18)
let lowIndices = records
  .map((r, i) => ({ i, csat: r.predicted_csat_score }))
  .filter((x) => x.csat < 3)
  .map((x) => x.i)

// Raise excess low-CSAT records above 3
if (lowIndices.length > lowCsatTarget) {
  const toRaise = lowIndices
    .filter((i) => records[i].call_category !== 'POS Hardware' || rand() > 0.5)
    .slice(0, lowIndices.length - lowCsatTarget)
  for (const i of toRaise) {
    records[i].predicted_csat_score = Math.round((3.1 + rand() * 0.8) * 10) / 10
    records[i].predicted_csat_label = 'Neutral'
  }
}

lowIndices = records.map((r, i) => (r.predicted_csat_score < 3 ? i : -1)).filter((i) => i >= 0)
for (const i of records.map((_, idx) => idx)) {
  if (lowIndices.length >= lowCsatTarget) break
  if (records[i].predicted_csat_score >= 3 && records[i].call_category === 'POS Hardware') {
    records[i].predicted_csat_score = Math.round((2 + rand() * 0.9) * 10) / 10
    records[i].predicted_csat_label = records[i].predicted_csat_score < 2.5 ? 'Very Dissatisfied' : 'Dissatisfied'
    lowIndices.push(i)
  }
}

// Calibrate AHT toward 348s period average
const currentAht = records.reduce((s, r) => s + r.call_handling_time, 0) / records.length
const ahtScale = 570 / currentAht
for (const r of records) {
  r.call_handling_time = Math.round(r.call_handling_time * ahtScale)
  if (r.call_category === 'POS Hardware') {
    r.call_handling_time = Math.round(r.call_handling_time * 1.08)
  }
}

// Calibrate repeat rate toward 23%
const repeatTarget = Math.round(TOTAL * 0.21)
let repeatCount = records.filter((r) => r.is_repeat_contact).length
if (repeatCount < repeatTarget) {
  const candidates = records
    .filter((r) => !r.is_repeat_contact && r.call_category === 'POS Hardware')
    .sort(() => rand() - 0.5)
  for (const r of candidates.slice(0, repeatTarget - repeatCount)) {
    r.is_repeat_contact = true
  }
}

// Boost coached agents W7-W8 returns FCR
for (const r of records) {
  if (COACHED_AGENTS.includes(r.agent_name) && r.call_category === 'POS Hardware' && r.call_date >= '2026-05-18') {
    if (rand() < 0.75) {
      r.fcr_resolved = true
      r.predicted_csat_score = Math.round(Math.max(r.predicted_csat_score, 3.5) * 10) / 10
    }
  }
}

// Nudge period FCR to ~61%
const fcrCount = records.filter((r) => r.fcr_resolved).length
const targetFcr = Math.round(TOTAL * 0.72)
if (fcrCount > targetFcr) {
  const toFlip = records.filter((r) => r.fcr_resolved && r.call_category === 'Account Access').slice(0, fcrCount - targetFcr)
  for (const r of toFlip) r.fcr_resolved = false
} else if (fcrCount < targetFcr) {
  const toFlip = records.filter((r) => !r.fcr_resolved && r.call_category === 'Account Access').slice(0, targetFcr - fcrCount)
  for (const r of toFlip) r.fcr_resolved = true
}

// --- Stats ---
function aggregate(data) {
  const n = data.length
  const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length
  const aht = avg(data.map((r) => r.call_handling_time))
  const fcr = (data.filter((r) => r.fcr_resolved).length / n) * 100
  const csat = avg(data.map((r) => r.predicted_csat_score))
  const rcr = (data.filter((r) => r.is_repeat_contact).length / n) * 100
  const er = (data.filter((r) => r.escalated).length / n) * 100
  const tr = (data.filter((r) => r.transferred).length / n) * 100
  const csatLow = (data.filter((r) => r.predicted_csat_score < 3).length / n) * 100

  const byQueue = {}
  for (const q of QUEUES) {
    const subset = data.filter((r) => r.call_category === q)
    byQueue[q] = {
      count: subset.length,
      aht: avg(subset.map((r) => r.call_handling_time)),
      fcr: (subset.filter((r) => r.fcr_resolved).length / subset.length) * 100,
      csat: avg(subset.map((r) => r.predicted_csat_score)),
      rcr: (subset.filter((r) => r.is_repeat_contact).length / subset.length) * 100,
    }
  }

  const byWeek = WEEK_BOUNDARIES.map((w, wi) => {
    const subset = data.filter((r) => r.call_date >= w.start && r.call_date <= w.end)
    const pos = subset.filter((r) => r.call_category === 'POS Hardware')
    return {
      week: w.label,
      aht: avg(subset.map((r) => r.call_handling_time)),
      fcr: (subset.filter((r) => r.fcr_resolved).length / subset.length) * 100,
      csat: avg(subset.map((r) => r.predicted_csat_score)),
      cf: subset.filter((r) => r.critical_failure).length,
      posAht: pos.length ? avg(pos.map((r) => r.call_handling_time)) : 0,
      posFcr: pos.length ? (pos.filter((r) => r.fcr_resolved).length / pos.length) * 100 : 0,
    }
  })

  const byChannel = {}
  for (const ch of CHANNELS) {
    byChannel[ch] = data.filter((r) => r.channel === ch).length / n
  }

  const coachedPosFcr = {}
  for (const agent of COACHED_AGENTS) {
    const early = data.filter((r) => r.agent_name === agent && r.call_category === 'POS Hardware' && r.call_date <= '2026-05-03')
    const late = data.filter((r) => r.agent_name === agent && r.call_category === 'POS Hardware' && r.call_date >= '2026-05-18')
    coachedPosFcr[agent] = {
      w1w4: early.length ? (early.filter((r) => r.fcr_resolved).length / early.length) * 100 : 0,
      w7w8: late.length ? (late.filter((r) => r.fcr_resolved).length / late.length) * 100 : 0,
    }
  }

  return { n, aht, fcr, csat, rcr, er, tr, csatLow, byQueue, byWeek, byChannel, coachedPosFcr }
}

const stats = aggregate(records)

// Validation
const errors = []
if (records.length !== TOTAL) errors.push(`Count ${records.length} !== ${TOTAL}`)
if (Math.abs(stats.csatLow - 18) > 3) errors.push(`CSAT<3 ${stats.csatLow.toFixed(1)}% not ~18%`)
if (stats.byQueue['POS Hardware'].fcr >= stats.byQueue['Account Access'].fcr) {
  errors.push('POS FCR should be worst')
}
for (const agent of COACHED_AGENTS) {
  const c = stats.coachedPosFcr[agent]
  if (c.w7w8 <= c.w1w4) errors.push(`${agent} FCR not improved W7-W8 vs W1-W4`)
}

console.log('Dataset stats:', JSON.stringify(stats, null, 2))
if (errors.length) {
  console.warn('Validation warnings:', errors)
} else {
  console.log('Validation passed.')
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, JSON.stringify(records, null, 2))
writeFileSync(STATS_OUT, JSON.stringify(stats, null, 2))
console.log(`Wrote ${records.length} records to ${OUT}`)
