import { formatAht } from '../utils/format'

export const WK_LABELS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']
export const COACHING_WEEK_INDEX = 4
export const AHT_ACTUAL = 570
export const AHT_TARGET = 420
export const TREND = {
  aht: [598, 612, 625, 638, 635, 558, 548, 552],
  nps: [-8, -5, -12, -15, -18, -2, 4, 6],
  fcr: [66.2, 68.5, 69.1, 68.8, 67.5, 78.4, 76.2, 74.8],
  csat: [3.82, 3.76, 3.71, 3.68, 3.62, 3.85, 3.84, 3.80],
  er: [14.5, 15.8, 17.2, 19.1, 20.5, 16.8, 15.2, 14.6],
}
export const POS_AHT = [612, 628, 645, 668, 672, 558, 542, 535]
export const POS_FCR = [62.0, 48.5, 46.2, 44.0, 52.0, 72.5, 74.0, 71.5]
export const T1_RESOLUTION = POS_FCR
export const COACHING_DEPLOYMENT = [0, 0, 0, 0, 100, 80, 60, 40]
export const FORMAL_COACHING_AGENTS = [0, 0, 0, 0, 4, 4, 3, 2]
export const MICRO_COACHING_TRIGGERS = [28, 31, 34, 36, 24, 14, 9, 6]
export const CF_WEEKLY = [77, 82, 105, 123, 59, 45, 32, 41]
export const CF_BAR_COLORS = ['#c0392b', '#c0392b', '#c0392b', '#c0392b', '#d97706', '#1a7a4a', '#1a7a4a', '#1a7a4a']

export const COACHING_HEALTH_STATS = [
  { label: 'Deployed', value: '52', valueClass: '', sub: 'Formal + micro sessions generated' },
  { label: 'Taken up', value: '38', valueClass: 'val-green', sub: '73% of deployed' },
  { label: 'In progress', value: '8', valueClass: 'val-amber', sub: '15% of deployed' },
  { label: 'Not touched', value: '2', valueClass: 'val-red', sub: '4% of deployed' },
]

export const HERO_CHIPS = [
  { text: 'POS Hardware queue · worst across all KPIs', className: 'chip-red', dotColor: '#fca5a5' },
  { text: 'W5 formal coaching · 4 agents flagged', className: 'chip-amber', dotColor: '#fbbf24' },
  { text: 'POS FCR +20pts · W5 to W8', className: 'chip-green', dotColor: '#4ade80' },
]

export const HERO_STATS = [
  { value: '32%', label: 'POS repeat contact rate' },
  { value: '4', label: 'Agents on formal coaching' },
  { value: '20pts', label: 'POS FCR lift post-W5' },
  { value: 'Daily', label: 'Micro coaching cadence' },
  { value: '3 of 4', label: 'Coached agents improving' },
]

export const QUALITY_SUMMARY = [
  { value: 'Zanele Mokoena: 28% to 81% POS FCR', label: 'Biggest coached-agent FCR improvement' },
  { value: 'Mariska Joubert: 35% to 79% POS FCR', label: 'Strongest post-formal recovery arc' },
  { value: 'Sipho Ndlovu: 86% POS FCR all period', label: 'POS benchmark performer' },
  { value: 'Kefilwe Sithole: 36% POS FCR · 3 critical failures', label: 'Highest-risk agent on queue' },
]

export const AHT_WASTE = {
  items: [
    { label: 'Week 1 weekly waste', value: '$312/week', valueClass: 'val-red' },
    { label: 'Week 8 weekly waste', value: '$168/week', valueClass: 'val-red' },
    { label: '8-week total', value: '$1,890', valueClass: 'val-red' },
    { label: 'Annualised projection', value: '$12,285', valueClass: 'val-red' },
  ],
  delta: 'Down $144/week from week 1 - coaching-driven efficiency on POS contacts',
}

export const COACHING_LEDGER_ROWS = [
  { agent: 'Zanele Mokoena', issue: 'W1-W4 · Premature L3 dispatch on 72% of POS calls', topic: 'Remote Triage Before Dispatch', deployed: 'Week 5 · Formal TL session', outcome: 'POS FCR 28% → 81% by W8; micro coaching triggers down 70%', badges: [{ text: 'Improving', className: 'badge badge-green' }] },
  { agent: 'Andile Khumalo', issue: 'W1-W4 · L3 dispatch before network diagnostics completed', topic: 'Escalation Threshold Discipline', deployed: 'Week 5 · Formal TL session', outcome: 'Zero premature dispatches W6-W8; FCR up 48pts on POS', badges: [{ text: 'Improving', className: 'badge badge-green' }] },
  { agent: 'Nompumelelo Dube', issue: 'W1-W4 · 7+ days micro coaching on ticket close without notes', topic: 'Ticket Documentation', deployed: 'Week 5 · Formal TL session', outcome: 'FCR improving; still monitoring documentation accuracy', badges: [{ text: 'In Progress', className: 'badge badge-amber' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Mariska Joubert', issue: 'W1-W4 · SLA clock not started on POS tickets', topic: 'SLA Clock Management', deployed: 'Week 5 · Formal TL session', outcome: 'SLA compliance 100% W7-W8; POS FCR 35% → 79%', badges: [{ text: 'Improving', className: 'badge badge-green' }] },
  { agent: 'Kefilwe Sithole', issue: 'W1-W4 · 3 critical failures · escalation avoidance', topic: 'Escalation Criteria', deployed: 'Week 6 · Escalation protocol', outcome: 'Still below target - formal follow-up scheduled', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Sipho Ndlovu', issue: 'No coaching needed', topic: 'Benchmark', deployed: '-', outcome: '86% POS FCR consistently - peer coaching source', badges: [{ text: 'Benchmark', className: 'badge badge-trophy' }] },
  { agent: 'Ruan Pretorius', issue: 'W2-W3 · Ticket notes gaps on repeat contacts', topic: 'Documentation Accuracy', deployed: 'Week 4 · Micro coaching reinforced', outcome: 'Repeat contacts down; documentation scores improving', badges: [{ text: 'Improving', className: 'badge badge-green' }] },
  { agent: 'Thabo Mahlangu', issue: 'W3 · High AHT on printer troubleshooting', topic: 'Handle Efficiency', deployed: 'Week 5 · Structured workflow', outcome: 'AHT reducing on printer contacts', badges: [{ text: 'Improving', className: 'badge badge-green' }] },
  { agent: 'Jaco Steyn', issue: 'W4 · Software install errors mishandled', topic: 'Software Install Diagnostic', deployed: 'Week 6 · Process coaching', outcome: 'Monitoring - early improvement visible', badges: [{ text: 'Monitor', className: 'badge badge-amber' }] },
  { agent: 'Aisha Osman', issue: 'W1 · New to POS queue', topic: 'POS Onboarding', deployed: 'Week 3 · Micro coaching daily', outcome: 'Steady improvement; below benchmark but trending up', badges: [{ text: 'On Track', className: 'badge badge-green' }] },
]

export const COACHING_LEDGER_SUMMARY = [
  { text: '10 agents tracked', className: 'summary-chip' },
  { text: '5 improving', className: 'summary-chip summary-chip-green' },
  { text: '2 in progress', className: 'summary-chip summary-chip-amber' },
  { text: '1 action needed', className: 'summary-chip summary-chip-amber' },
  { text: '1 benchmark', className: 'summary-chip summary-chip-trophy' },
]

export const PATTERN_CARDS = [
  { variant: 'red', title: 'POS Queue Performance Gap', level: 'Queue level', body: 'POS Hardware is the worst-performing queue on every KPI: 58% FCR vs 82% on Account Access, 612s AHT vs 385s, 32% repeat contact rate, and lowest CSAT at 3.2. Triage Accuracy and Escalation Discipline are the weakest quality pillars.', tags: [{ text: 'FCR -24%', className: 'tag tag-red' }, { text: 'AHT +227s', className: 'tag tag-red' }, { text: 'RCR +18pts', className: 'tag tag-red' }, { text: 'CSAT -0.6', className: 'tag tag-red' }] },
  { variant: 'amber', title: 'Micro Coaching Without Remote Triage', level: 'Agent level', body: 'Daily QiQ micro coaching fired on POS agents throughout W1-W4 but behaviour did not improve - agents continued escalating before completing the remote triage checklist. This pattern triggered formal coaching for 4 agents at W5.', tags: [{ text: 'Micro daily W1-W4', className: 'tag tag-amber' }, { text: 'No behaviour change', className: 'tag tag-amber' }, { text: '4 formal flags W5', className: 'tag tag-amber' }] },
  { variant: 'green', title: 'Formal Coaching Drives POS Recovery', level: 'Team level', body: 'After W5 formal TL-led sessions on the four flagged agents, POS queue FCR rose from 52% to 72% by W8. CSAT partially recovered and repeat contact rate dropped. Micro coaching frequency on coached agents fell as behaviours stabilised.', tags: [{ text: 'FCR +20pts', className: 'tag tag-green' }, { text: 'CSAT +0.2', className: 'tag tag-green' }, { text: 'RCR -6pts', className: 'tag tag-green' }] },
  { variant: 'red', title: 'Critical Failure Cluster on POS', level: 'Quality level', body: 'Five critical failure types cluster on POS contacts: SLA misquote, skipped triage, no SLA clock, no ticket notes, and escalation avoidance. 387 critical failures in W1–W4 vs 118 in W6–W8.', tags: [{ text: 'CF 387 → 118', className: 'tag tag-green' }, { text: '5 failure types', className: 'tag tag-red' }, { text: 'POS queue', className: 'tag tag-red' }] },
]

export const QUEUE_COMPARISON = [
  { queue: 'POS Hardware', fcr: '58%', aht: '10m 12s', rcr: '32%', csat: '3.2', highlight: true },
  { queue: 'Software & Connectivity', fcr: '82%', aht: '6m 25s', rcr: '14%', csat: '3.9', highlight: false },
  { queue: 'Billing & Contracts', fcr: '76%', aht: '6m 48s', rcr: '16%', csat: '3.8', highlight: false },
]

export const BEST_PRACTICE_CARDS = [
  { title: 'Complete remote triage before any L3 dispatch', evidence: 'Evidence: FCR +32pts on coached agents · RCR -10pts · CSAT +0.3 on POS contacts', agents: 'Agents: Zanele Mokoena, Mariska Joubert (W6-W8)', rec: 'Recommendation: Mandate remote triage checklist on all POS contacts. Reinforce via micro coaching until behaviour is consistent.' },
  { title: 'Start SLA clock and give clear ETA on every ticket', evidence: 'Evidence: Zero SLA clock CFs post-coaching · FCR +44pts on Mariska Joubert', agents: 'Agents: Sipho Ndlovu (benchmark), Mariska Joubert (post-coaching)', rec: 'Recommendation: Make the SLA clock protocol standard on all POS contacts. Use Sipho Ndlovu calls as coaching reference material.' },
]

export function getMetricsDrawerSections() {
  return [
    { id: 'kpi-aht-drawer', label: 'Average Handle Time', value: formatAht(AHT_ACTUAL), valueClass: 'val-amber', sub: `Target: ${formatAht(AHT_TARGET)}`, change: '+35.7% vs target', changeClass: 'chg-amber', dataKey: 'aht', color: '#d97706', note: 'AHT elevated on POS queue - improving post-W5 coaching on triage efficiency' },
    { id: 'kpi-nps', label: 'Net Promoter Score', value: '6', valueClass: 'val-amber', sub: 'Target: 40', change: '-85% vs target', changeClass: 'chg-amber', dataKey: 'nps', color: '#1a7a4a', note: 'NPS recovering in W6-W8 as POS CSAT partially rebounds after formal coaching' },
    { id: 'kpi-fcr-drawer', label: 'First Contact Resolution', value: '72.0%', valueClass: 'val-amber', sub: 'Target: 85%', change: '-15.3% vs target', changeClass: 'chg-amber', dataKey: 'fcr', color: '#1a7a4a', note: 'FCR trough at W5; recovery visible W6-W8 driven by POS coaching intervention' },
    { id: 'kpi-csat', label: 'Customer Satisfaction Score', value: '3.80', valueClass: 'val-amber', sub: 'Target: 4.2', change: '-9.5% vs target', changeClass: 'chg-amber', dataKey: 'csat', color: '#d97706', note: 'CSAT declined W1-W5 on POS contacts; partial recovery W6-W8' },
  ]
}
