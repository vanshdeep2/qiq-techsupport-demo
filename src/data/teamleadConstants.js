export const TEAM_HEALTH_STATS = [
  { label: 'Team QA Score', value: '81.2', valueClass: 'val-amber', sub: 'Avg quality score · Week 8' },
  { label: 'Critical Failures', value: '8', valueClass: 'val-amber', sub: 'This week · Down from 24 in week 4' },
  { label: 'Agents Improving', value: '7/10', valueClass: 'val-green', sub: 'POS FCR up vs week 1' },
  { label: 'TL Action Required', value: '2', valueClass: 'val-amber', sub: 'Formal coaching follow-ups open' },
]

export const MATRIX_ROWS = [
  { slug: 'sipho-ndlovu', name: 'Sipho Ndlovu', qaW5: 94.5, qaW1: 94.0, delta: 0.5, deltaClass: 'delta-pos', pa: '93.0%', rr: '86.0%', topic: 'Benchmark', status: 'Benchmark', badgeClass: 'badge-navy' },
  { slug: 'ruan-pretorius', name: 'Ruan Pretorius', qaW5: 87.0, qaW1: 73.5, delta: 13.5, deltaClass: 'delta-pos', pa: '80.0%', rr: '73.0%', topic: 'Documentation Accuracy', status: 'On Track', badgeClass: 'badge-green' },
  { slug: 'zanele-mokoena', name: 'Zanele Mokoena', qaW5: 88.5, qaW1: 58.8, delta: 29.7, deltaClass: 'delta-pos', pa: '83.0%', rr: '81.0%', topic: 'Remote Triage', status: 'On Track', badgeClass: 'badge-green' },
  { slug: 'andile-khumalo', name: 'Andile Khumalo', qaW5: 87.8, qaW1: 62.0, delta: 25.8, deltaClass: 'delta-pos', pa: '86.0%', rr: '80.0%', topic: 'Escalation Threshold', status: 'On Track', badgeClass: 'badge-green' },
  { slug: 'nompumelelo-dube', name: 'Nompumelelo Dube', qaW5: 80.2, qaW1: 65.0, delta: 15.2, deltaClass: 'delta-pos', pa: '70.0%', rr: '60.0%', topic: 'Ticket Documentation', status: 'Watch', badgeClass: 'badge-amber' },
  { slug: 'mariska-joubert', name: 'Mariska Joubert', qaW5: 86.0, qaW1: 56.5, delta: 29.5, deltaClass: 'delta-pos', pa: '82.0%', rr: '79.0%', topic: 'SLA Clock Management', status: 'On Track', badgeClass: 'badge-green' },
  { slug: 'kefilwe-sithole', name: 'Kefilwe Sithole', qaW5: 69.0, qaW1: 72.0, delta: -3.0, deltaClass: 'delta-neg', pa: '44.0%', rr: '36.0%', topic: 'Escalation Criteria', status: 'Action Needed', badgeClass: 'badge-red' },
  { slug: 'thabo-mahlangu', name: 'Thabo Mahlangu', qaW5: 83.0, qaW1: 77.0, delta: 6.0, deltaClass: 'delta-pos', pa: '76.0%', rr: '70.0%', topic: 'Handle Efficiency', status: 'On Track', badgeClass: 'badge-green' },
  { slug: 'jaco-steyn', name: 'Jaco Steyn', qaW5: 78.0, qaW1: 71.5, delta: 6.5, deltaClass: 'delta-pos', pa: '68.0%', rr: '64.0%', topic: 'Software Install', status: 'Watch', badgeClass: 'badge-amber' },
  { slug: 'aisha-osman', name: 'Aisha Osman', qaW5: 76.0, qaW1: 69.0, delta: 7.0, deltaClass: 'delta-pos', pa: '62.0%', rr: '58.0%', topic: 'POS Onboarding', status: 'On Track', badgeClass: 'badge-green' },
]

export const ALERT_AGENTS = [
  {
    slug: 'kefilwe-sithole',
    name: 'Kefilwe Sithole',
    status: 'Action Needed',
    badgeClass: 'badge-red',
    metrics: 'POS FCR: 36% · PA: 44% · CF total: 3 · RCR: 26%',
    insight: 'Three critical failures in W1-W4 including escalation avoidance leading to third contacts. POS FCR remains below 40% despite micro coaching.',
    action: 'Second formal coaching session on escalation criteria. Pair with Sipho Ndlovu for POS call shadowing. Target: FCR above 55% within 3 weeks.',
  },
  {
    slug: 'nompumelelo-dube',
    name: 'Nompumelelo Dube',
    status: 'Watch',
    badgeClass: 'badge-amber',
    metrics: 'POS FCR: 60% · PA: 70% · CF total: 1 · RCR: 20%',
    insight: 'Formal coaching at W5 improved resolution confirmation but ticket documentation gaps persist on repeat contacts.',
    action: 'Continue formal coaching check-ins weekly. Focus on ticket notes before close. Target: documentation pillar above 75%.',
  },
  {
    slug: 'zanele-mokoena',
    name: 'Zanele Mokoena',
    status: 'On Track',
    badgeClass: 'badge-green',
    metrics: 'POS FCR: 81% · PA: 83% · CF total: 0 · RCR: 11%',
    insight: 'Strong post-coaching recovery after W5 formal session. Micro coaching triggers down from daily to twice weekly.',
    action: 'Maintain current trajectory. Consider for peer coaching support role on remote triage protocol.',
  },
  {
    slug: 'mariska-joubert',
    name: 'Mariska Joubert',
    status: 'On Track',
    badgeClass: 'badge-green',
    metrics: 'POS FCR: 79% · PA: 82% · CF total: 0 · RCR: 13%',
    insight: 'SLA clock compliance improved dramatically after W5 formal coaching. POS handling now above team average.',
    action: 'Share SLA checklist workflow with Jaco Steyn in peer session.',
  },
]

export const MICRO_COACHING_QUEUE = [
  { agent: 'Zanele Mokoena', topic: 'Remote triage before dispatch', trigger: 'QiQ · 3 calls today without triage checklist', date: 'Today', status: 'Acknowledged', badgeClass: 'badge-green', outcome: 'Down from daily triggers - formal coaching holding' },
  { agent: 'Andile Khumalo', topic: 'Escalation threshold discipline', trigger: 'QiQ · Threshold card review', date: 'Today', status: 'Completed', badgeClass: 'badge-green', outcome: 'Zero premature dispatches this week' },
  { agent: 'Nompumelelo Dube', topic: 'Ticket notes before close', trigger: 'QiQ · 2 contacts closed without documentation', date: 'Today', status: 'New', badgeClass: 'badge-amber', outcome: 'Micro nudge sent - awaiting acknowledgement' },
  { agent: 'Mariska Joubert', topic: 'SLA clock on POS tickets', trigger: 'QiQ · SLA checklist', date: 'Yesterday', status: 'Completed', badgeClass: 'badge-green', outcome: '100% SLA clock compliance this week' },
  { agent: 'Kefilwe Sithole', topic: 'Escalation criteria met', trigger: 'QiQ · 2 contacts should have escalated to L3', date: 'Today', status: 'New', badgeClass: 'badge-red', outcome: 'Third micro trigger this week - TL review' },
  { agent: 'Aisha Osman', topic: 'POS triage checklist', trigger: 'QiQ · Confirm reboot and network check', date: 'Today', status: 'In Progress', badgeClass: 'badge-amber', outcome: 'Improving - 2 of 5 calls met standard' },
  { agent: 'Ruan Pretorius', topic: 'Documentation on repeat contacts', trigger: 'QiQ · Link prior ticket before resolving', date: 'Yesterday', status: 'Completed', badgeClass: 'badge-green', outcome: 'Repeat contacts down 7% this week' },
  { agent: 'Jaco Steyn', topic: 'Software install diagnostic', trigger: 'QiQ · Use install diagnostic tool', date: 'Today', status: 'In Progress', badgeClass: 'badge-amber', outcome: 'Early improvement on software calls' },
]

export const MICRO_COACHING_SUMMARY = [
  { text: '8 micro sessions today', className: 'summary-chip' },
  { text: '4 completed', className: 'summary-chip summary-chip-green' },
  { text: '3 in progress', className: 'summary-chip summary-chip-amber' },
  { text: '1 TL escalation', className: 'summary-chip summary-chip-amber' },
]

export const COACHING_QUEUE = [
  { agent: 'Zanele Mokoena', topic: 'Remote Triage Before Dispatch', source: '7+ days micro coaching · premature L3 dispatch', deployed: 'Week 5', status: 'Completed', badgeClass: 'badge-green', outcome: 'POS FCR 28% → 81% by W8; formal session logged with positive outcome' },
  { agent: 'Andile Khumalo', topic: 'Escalation Threshold Discipline', source: '7+ days micro · premature dispatch pattern', deployed: 'Week 5', status: 'Completed', badgeClass: 'badge-green', outcome: 'Zero premature dispatches W6-W8; formal outcome: behaviours corrected' },
  { agent: 'Nompumelelo Dube', topic: 'Ticket Documentation', source: '7+ days micro · ticket closed without notes', deployed: 'Week 5', status: 'In Progress', badgeClass: 'badge-amber', outcome: 'FCR improving; still monitoring documentation accuracy' },
  { agent: 'Mariska Joubert', topic: 'SLA Clock Management', source: '7+ days micro · SLA clock not started', deployed: 'Week 5', status: 'Completed', badgeClass: 'badge-green', outcome: 'SLA compliance 100% W7-W8; formal outcome: passed' },
  { agent: 'Kefilwe Sithole', topic: 'Escalation Criteria', source: 'Critical failure · escalation avoidance', deployed: 'Week 6', status: 'Open', badgeClass: 'badge-red', outcome: 'Second formal session scheduled - FCR still below 40%' },
  { agent: 'Thabo Mahlangu', topic: 'Handle Efficiency on Printer Issues', source: 'Ops cluster · AHT 520s on printer queue', deployed: 'Week 5', status: 'In Progress', badgeClass: 'badge-amber', outcome: 'AHT reducing week on week' },
  { agent: 'Sipho Ndlovu', topic: 'Benchmark', source: '-', deployed: '-', status: 'Benchmark', badgeClass: 'badge-navy', outcome: '86% POS FCR - peer coaching source' },
]

export const COACHING_QUEUE_SUMMARY = [
  { text: '7 formal sessions', className: 'summary-chip' },
  { text: '3 completed', className: 'summary-chip summary-chip-green' },
  { text: '2 in progress', className: 'summary-chip summary-chip-amber' },
  { text: '1 open', className: 'summary-chip summary-chip-amber' },
  { text: '1 benchmark', className: 'summary-chip summary-chip-muted' },
]

export const FLAGGED_CALLS = [
  { callId: 'HL-TK-CF0001', agent: 'Andile Khumalo', date: '2026-04-14', category: 'POS Hardware', flagReason: 'Critical failure · Premature dispatch · L3 requested before network check', flagClass: 'flag-badge-critical', qaScore: '0', qaClass: 'val-red' },
  { callId: 'HL-TK-CF0002', agent: 'Zanele Mokoena', date: '2026-04-22', category: 'POS Hardware', flagReason: 'Critical failure · Skipped triage · Reboot and network check not completed', flagClass: 'flag-badge-critical', qaScore: '0', qaClass: 'val-red' },
  { callId: 'HL-TK-CF0003', agent: 'Mariska Joubert', date: '2026-05-01', category: 'POS Hardware', flagReason: 'Critical failure · SLA clock not started · Ticket closed without ETA', flagClass: 'flag-badge-critical', qaScore: '0', qaClass: 'val-red' },
  { callId: 'HL-TK-CF0004', agent: 'Kefilwe Sithole', date: '2026-05-08', category: 'POS Hardware', flagReason: 'Critical failure · Escalation avoidance · Third contact from same store', flagClass: 'flag-badge-critical', qaScore: '0', qaClass: 'val-red' },
  { callId: 'HL-TK-CF0005', agent: 'Nompumelelo Dube', date: '2026-04-18', category: 'POS Hardware', flagReason: 'Critical failure · No ticket notes · Repeat contact with no prior documentation', flagClass: 'flag-badge-critical', qaScore: '0', qaClass: 'val-red' },
]
