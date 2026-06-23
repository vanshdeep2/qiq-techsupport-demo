export const AGENT_ORDER = [
  'sipho-ndlovu', 'zanele-mokoena', 'ruan-pretorius', 'nompumelelo-dube', 'andile-khumalo',
  'mariska-joubert', 'thabo-mahlangu', 'kefilwe-sithole', 'jaco-steyn', 'aisha-osman',
]

export const AGENTS = {
  'sipho-ndlovu': {
    name: 'Sipho Ndlovu', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 94.5, qa_w1: 94.0, pa: 93.0, rr: 86.0, cf: 0,
    qa_series: [94.0, 94.2, 94.8, 94.5, 95.0, 94.8, 94.5, 94.5], status: 'Benchmark',
    insight: 'Sipho is the POS triage benchmark on the Helix team - 86% FCR on POS Hardware with consistent remote resolution before dispatch. His calls are used as peer coaching reference material.',
    coaching: [
      { topic: 'Best Practice - POS Remote Triage', type: 'strength',
        content: 'Sipho, your POS handling is genuinely the standard this team is working toward. You consistently complete the reboot checklist, confirm network status, and document the ticket before close on every POS contact without rushing the store manager. That combination is why your POS FCR has held above 85% across the full eight-week period. Lebogang is sharing your approach with the squad this week as peer coaching reference material. Thank you for agreeing to support Aisha on Thursday - your triage workflow is exactly what new agents need to see in practice.',
        evidence: '"I have confirmed the terminal is back online after the reboot and network check - ticket HL-TK-48291 is resolved remotely." - benchmark close on every POS call.',
        lms: null },
    ],
    notes: [
      { from: 'Lebogang van Wyk', role: 'Team Lead', date: '2026-05-28', message: 'Sipho - thank you for agreeing to peer coach Aisha on Thursday. Your POS triage workflow is exactly what we need the team emulating.' },
    ],
  },
  'zanele-mokoena': {
    name: 'Zanele Mokoena', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 88.5, qa_w1: 58.8, pa: 83.0, rr: 81.0, cf: 0,
    qa_series: [58.8, 55.5, 53.2, 54.8, 63.0, 79.0, 86.0, 88.5], status: 'On Track',
    insight: 'Zanele showed dramatic improvement after W5 formal coaching on escalation discipline. POS FCR moved from 28% in W1-W4 to 81% by W8. Micro coaching triggers have dropped from daily to twice weekly.',
    coaching: [
      { topic: 'Remote Triage Before Dispatch', type: 'development',
        content: 'Zanele, your communication on POS calls has improved noticeably and store managers are responding well to your tone - that is a real strength and you should feel good about the progress since week 1. The one habit that will take your FCR from good to great is completing the full remote triage checklist before any L3 dispatch request, even when the store is under pressure. Before you escalate, use the script: confirm reboot, check cable seating, verify store network status, and document each step on the ticket. You skipped the checklist on 2 contacts today, which is down from last week and shows the W5 formal session is working. Keep applying the checklist on every POS call this week - you are very close to locking this in.',
        evidence: '2 POS contacts escalated to dispatch without completing remote triage checklist today.',
        lms: 'POS Remote Triage - Helix L1 Protocol' },
      { topic: 'Post-Coaching Improvement', type: 'strength',
        content: 'Your W5 formal session outcomes are showing clearly in the data and that is down to the effort you put in after a difficult start to the period. POS FCR is up 53 points since week 1 and micro coaching triggers have dropped from daily to twice weekly - that is meaningful behaviour change in a short window. Stores that get a full remote fix from you are not calling back, which protects both CSAT and SLA performance. Keep using the triage checklist on every call. The trajectory you are on now is exactly what we were aiming for when we scheduled the formal session.',
        evidence: 'POS FCR 28% W1-W4 → 81% W7-W8.',
        lms: null },
    ],
    notes: [
      { from: 'Lebogang van Wyk', role: 'Team Lead', date: '2026-05-06', message: 'Zanele - formal coaching session today at 2pm. Focus: remote triage before dispatch. This follows 9 consecutive days of micro coaching on the same trigger.' },
      { from: 'Zanele Mokoena', role: 'Agent', date: '2026-05-06', message: 'Understood. I have reviewed the POS triage module and will apply the checklist on every call from today.' },
      { from: 'Lebogang van Wyk', role: 'Team Lead', date: '2026-05-22', message: 'Checked your POS calls this week - strong improvement. FCR at 81%. Keep it going.' },
    ],
  },
  'andile-khumalo': {
    name: 'Andile Khumalo', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 87.8, qa_w1: 62.0, pa: 86.0, rr: 80.0, cf: 1,
    qa_series: [62.0, 59.5, 56.8, 58.2, 66.0, 81.0, 86.0, 87.8], status: 'On Track',
    insight: 'Andile had a critical failure in W2 for dispatching a technician before completing network diagnostics (policy requires remote fix attempt first). Formal coaching at W5 corrected this - zero premature dispatches since W6.',
    coaching: [
      { topic: 'Escalation Threshold Discipline', type: 'development',
        content: 'Andile, the turnaround in your quality scores since week 5 has been one of the strongest on the team - from 62.0 to 87.8 is real improvement and it shows in how confidently you are handling POS calls now. Helix policy requires a full remote triage attempt before any L3 dispatch, and you have held that standard with zero premature dispatches since week 6. Keep the escalation threshold card visible at your workstation and reference it before requesting on-site support. When you explain the next step to the store manager, follow it immediately with the SLA clock and ticket reference so they hear both the action and the timeline. You have already proven you can do this consistently - the focus now is making it automatic on every POS contact.',
        evidence: 'W2 critical failure: L3 dispatch requested before network check. Zero premature dispatches W6-W8.',
        lms: 'Helix Escalation Threshold - L1 to L3 Protocol' },
    ],
    notes: [
      { from: 'Lebogang van Wyk', role: 'Team Lead', date: '2026-05-07', message: 'Andile - formal coaching logged. Outcome: escalation threshold protocol committed. Review HL-TK-CF0001 as reference for what not to do.' },
    ],
  },
  'nompumelelo-dube': {
    name: 'Nompumelelo Dube', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 80.2, qa_w1: 65.0, pa: 70.0, rr: 60.0, cf: 1,
    qa_series: [65.0, 63.5, 62.0, 62.5, 64.0, 73.0, 77.5, 80.2], status: 'Watch',
    insight: 'Nompumelelo improved after W5 formal coaching but ticket documentation on repeat contacts still lags. Remote resolution confirmation is better; case notes remain the gap.',
    coaching: [
      { topic: 'Ticket Notes Before Close', type: 'development',
        content: 'Nompumelelo, your resolution confirmation on POS calls has improved since the W5 formal session and store managers are getting clearer answers from you - that progress is real and worth recognising. The area that will lift your documentation pillar and reduce repeat contacts is linking the prior ticket before you close on any repeat interaction. When a store calls back on the same terminal issue, open the previous ticket first, reference what was tried, and note what you did differently today. You closed 2 contacts without ticket documentation today, which triggered your third micro nudge this week on documentation. Try the five-second checklist before every close: issue, action taken, next step, ticket linked. You are improving week on week - tightening documentation is the next step to move from Watch to On Track.',
        evidence: 'Repeat contact on ticket HL-TK-10482 - no link to prior ticket notes.',
        lms: 'Documentation Accuracy - Ticket Notes Protocol' },
    ],
    notes: [
      { from: 'Lebogang van Wyk', role: 'Team Lead', date: '2026-05-08', message: 'Nompumelelo - formal session outcome: in progress. FCR improving but documentation pillar still at 64%. Weekly check-in continues.' },
    ],
  },
  'mariska-joubert': {
    name: 'Mariska Joubert', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 86.0, qa_w1: 56.5, pa: 82.0, rr: 79.0, cf: 0,
    qa_series: [56.5, 54.0, 51.5, 54.5, 61.0, 79.0, 84.0, 86.0], status: 'On Track',
    insight: 'Mariska closed a POS ticket in W4 without starting the SLA clock (critical failure). W5 formal coaching on SLA clock management produced 100% compliance W7-W8 and POS FCR of 79%.',
    coaching: [
      { topic: 'SLA Clock Management', type: 'development',
        content: 'Mariska, your recovery since the W4 critical failure has been outstanding - SLA clock started on all 6 POS calls today and POS FCR at 79% is well above where you started this period. That kind of turnaround does not happen without deliberate practice and you should be proud of it. The standard now is to start the SLA clock and give the store manager a clear ETA before closing any ticket, every time, even when the issue appears resolved quickly. State the ticket number, the SLA tier, and the expected resolution window before you end the call - it takes under a minute and it protects both the client SLA and your quality score. Share your SLA checklist approach with Jaco when you can; it is working. Keep this discipline on every call through week 8 and beyond.',
        evidence: '100% SLA clock compliance W7-W8.',
        lms: 'SLA Clock Management - Helix Service Desk' },
    ],
    notes: [
      { from: 'Lebogang van Wyk', role: 'Team Lead', date: '2026-05-09', message: 'Mariska - formal coaching outcome: passed. SLA clock compliance excellent this week. Share your checklist approach with Jaco.' },
    ],
  },
  'ruan-pretorius': {
    name: 'Ruan Pretorius', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 87.0, qa_w1: 73.5, pa: 80.0, rr: 73.0, cf: 0,
    qa_series: [73.5, 75.0, 77.0, 78.5, 80.0, 83.5, 85.5, 87.0], status: 'On Track',
    insight: 'Ruan improved steadily on ticket documentation for repeat contacts. Micro coaching on linking prior tickets is producing measurable repeat rate reduction.',
    coaching: [
      { topic: 'Documentation on Repeat Contacts', type: 'development',
        content: 'Ruan, your steady improvement across the eight-week period is exactly what we want to see - QA score from 73.5 to 87.0 shows consistent effort, not a one-week spike. You linked the prior ticket correctly on 4 of 5 repeat calls today, which is strong progress on a pillar that was dragging your documentation score earlier in the period. On the one miss - a network outage callback - the store had called two days earlier and the prior notes would have shortened the call and improved their experience. Before resolving any repeat contact, pause and search the store ID for open tickets. Say to the store manager: "I can see your previous contact on [date] - let me pick up from there." That small habit reduces repeat rate and builds trust. You are on track; one more week of consistency will show in the team metrics.',
        evidence: '4/5 repeat contacts had prior ticket linked today.',
        lms: 'Documentation Accuracy - Repeat Contact Protocol' },
    ],
    notes: [],
  },
  'kefilwe-sithole': {
    name: 'Kefilwe Sithole', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 69.0, qa_w1: 72.0, pa: 44.0, rr: 36.0, cf: 3,
    qa_series: [72.0, 69.5, 67.0, 64.5, 62.0, 65.5, 67.5, 69.0], status: 'Action Needed',
    insight: 'Kefilwe has 3 critical failures including escalation avoidance that led to a third contact from the same store. POS FCR remains at 36% - below team minimum. Second formal session scheduled.',
    coaching: [
      { topic: 'Escalation Criteria', type: 'development',
        content: 'Kefilwe, I want to be direct with you because this matters for your development and for the stores waiting on resolution. You care about getting answers for people and that comes through on your calls - but when a store has contacted three times on the same POS issue, Helix policy requires immediate escalation to L3, not another remote attempt from L1. Two contacts today met escalation criteria and were not escalated, which puts you and the client at risk of a fourth contact and a critical failure flag. Before our second formal session, review HL-TK-CF0004 and the escalation criteria module. When criteria are met, say clearly: "I am escalating this to our on-site team now - a technician will be dispatched within 4 hours." You can get this right - the session next Tuesday is about making escalation feel as natural as remote resolution.',
        evidence: 'HL-TK-CF0004: third contact - escalation criteria met but not escalated.',
        lms: 'Escalation Criteria - POS Hardware Queue' },
    ],
    notes: [
      { from: 'Lebogang van Wyk', role: 'Team Lead', date: '2026-05-20', message: 'Kefilwe - second formal session scheduled for next Tuesday. Escalation avoidance is the priority. Review HL-TK-CF0004 before the session.' },
    ],
  },
  'thabo-mahlangu': {
    name: 'Thabo Mahlangu', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 83.0, qa_w1: 77.0, pa: 76.0, rr: 70.0, cf: 0,
    qa_series: [77.0, 77.5, 79.0, 79.5, 80.5, 81.5, 82.0, 83.0], status: 'On Track',
    insight: 'Thabo is reducing AHT on printer troubleshooting contacts through structured workflow coaching. Steady improvement across the 8-week period.',
    coaching: [
      { topic: 'Handle Efficiency on Printer Issues', type: 'development',
        content: 'Thabo, your printer troubleshooting AHT dropped 50 seconds this week while your accuracy held steady - that is exactly the balance we are coaching toward and it is good work. You are using the printer diagnostic workflow to close in fewer steps without skipping driver checks or network verification, which is why your QA score has climbed steadily from 77.0 to 83.0 across the period. On your next printer calls, keep the workflow visible and work through it in order: confirm power, check USB/network connection, restart spooler, test print. If you hit a driver exception, note it in the ticket before placing the store on hold. The efficiency gains you are showing this week are sustainable if you keep the structure. Well done on the consistent week-on-week improvement.',
        evidence: 'Printer AHT 520s → 470s over 3 weeks.',
        lms: 'Printer Diagnostics - Structured Workflow' },
    ],
    notes: [],
  },
  'jaco-steyn': {
    name: 'Jaco Steyn', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 78.0, qa_w1: 71.5, pa: 68.0, rr: 64.0, cf: 0,
    qa_series: [71.5, 72.0, 73.0, 73.5, 74.5, 75.5, 77.0, 78.0], status: 'Watch',
    insight: 'Jaco is improving on software install errors but remains below team average on POS FCR. Monitoring through W8.',
    coaching: [
      { topic: 'Software Install Troubleshooting', type: 'development',
        content: 'Jaco, you are building momentum on software install errors and the data shows it - POS FCR is climbing week on week even though you are still below team average. You used the install diagnostic tool on 3 of 4 software calls today, which is the right instinct. The one miss led to a store callback because the manual reinstall did not match Helix\'s deployment package version. On every software install error, open the diagnostic tool first, confirm the package version and prerequisites, and read the result back to the store manager before processing. It takes less time than fixing a callback. You are closer to On Track than the Watch label suggests - locking in the diagnostic tool on every software call this week will get you there.',
        evidence: 'Software install error - manual reinstall instead of diagnostic tool.',
        lms: 'Software Install Diagnostic - Helix Tools' },
    ],
    notes: [],
  },
  'aisha-osman': {
    name: 'Aisha Osman', role: 'Help Desk Agent', team: 'Lebogang van Wyk',
    qa_w5: 76.0, qa_w1: 69.0, pa: 62.0, rr: 58.0, cf: 0,
    qa_series: [69.0, 70.0, 71.5, 72.0, 73.0, 74.5, 75.0, 76.0], status: 'On Track',
    insight: 'Aisha is new to the POS queue and improving steadily with daily micro coaching. Below benchmark but trending in the right direction.',
    coaching: [
      { topic: 'POS Triage Checklist', type: 'development',
        content: 'Aisha, settling into the POS queue is not easy and you should recognise the steady improvement in your QA score from 69.0 to 76.0 over eight weeks - that trend matters more than being below benchmark today. The habit that will accelerate your progress is completing the remote triage checklist on every POS call, not only when the store manager asks. You did this on 2 of 5 calls today; the peer session with Sipho Ndlovu on Thursday will show you how he weaves the checklist into the natural flow of the call. Before you close any POS ticket, confirm: reboot completed, network status checked, ticket documented. Small addition, big impact on FCR and store confidence. You are trending in the right direction - keep going.',
        evidence: '2/5 POS calls included full remote triage checklist.',
        lms: 'POS Queue Onboarding - Week 1-4 Module' },
    ],
    notes: [
      { from: 'Lebogang van Wyk', role: 'Team Lead', date: '2026-05-21', message: 'Aisha - peer session with Sipho confirmed for Thursday 10am. Focus on POS triage and ticket close.' },
    ],
  },
}

export const WK_LABELS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']
export const COACHING_WEEK_INDEX = 4
export const DEFAULT_SLUG = 'zanele-mokoena'

export const SPARK_PREVIEW_SLUGS = ['zanele-mokoena', 'mariska-joubert', 'kefilwe-sithole', 'sipho-ndlovu']

export const SPARK_DATA = AGENT_ORDER.map((slug) => {
  const series = AGENTS[slug].qa_series
  return {
    slug,
    name: AGENTS[slug].name,
    series,
    w5: series[series.length - 1],
  }
})
