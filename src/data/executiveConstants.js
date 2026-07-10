export const ACTUAL_AHT = 570
export const REPEAT_CONTACTS = 462
export const UNNECESSARY_ESCALATIONS = 396
export const PAYMENT_CONTACTS = 0
export const MERCHANT_CHURN_PROXY = 0
export const PERIOD_WEEKS = 8

export const FCR = 72.0
export const CSAT = 3.8
export const ESC_RATE = 18.0
export const TR_RATE = 11.2
export const RCR_RATE = 21.0
export const ER_TARGET = 8
export const TR_TARGET = 6
export const RCR_TARGET = 10

export const DEFAULTS = {
  targetAht: 420,
  costPerMin: 0.42,
  escMultiplier: 2.2,
  weeklyCalls: 275,
}

export const WK8 = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']
export const WK5 = WK8

export const TREND = {
  aht: [598, 612, 625, 638, 635, 558, 548, 552],
  fcr: [66.2, 68.5, 69.1, 68.8, 67.5, 78.4, 76.2, 74.8],
  esc: [14.5, 15.8, 17.2, 19.1, 20.5, 16.8, 15.2, 14.6],
  csat: [3.82, 3.76, 3.71, 3.68, 3.62, 3.85, 3.84, 3.80],
  tr: [9.8, 10.5, 11.0, 12.2, 13.0, 10.8, 10.2, 9.6],
  rcr: [16.5, 18.2, 19.8, 22.5, 24.0, 19.5, 17.8, 16.2],
}

export const DRIVER_ROWS = [
  { name: 'POS terminal not connecting', volume: 616, share: 28.0, fcr: 58, aht: 612, esc: 22.5 },
  { name: 'Network outage reported', volume: 418, share: 19.0, fcr: 64, aht: 585, esc: 18.2 },
  { name: 'Printer offline at store', volume: 308, share: 14.0, fcr: 71, aht: 498, esc: 12.4 },
  { name: 'Password / account access', volume: 264, share: 12.0, fcr: 82, aht: 385, esc: 6.8 },
  { name: 'Software install error', volume: 220, share: 10.0, fcr: 68, aht: 542, esc: 15.5 },
]

export const CROSS_KPI_PATTERNS = [
  {
    id: 'exec-ckp-1',
    accent: 'red',
    label: 'Cross-KPI Pattern 1',
    headline: 'Premature L3 dispatch on POS tickets drives repeat contacts and SLA cost',
    body: 'Agents escalating POS hardware tickets to on-site dispatch before completing the remote triage checklist are generating a 32% repeat contact rate on the POS Hardware queue - nearly triple the Account Access queue. Triage Accuracy and Escalation Discipline are the two lowest-scoring quality pillars on POS contacts.',
  },
  {
    id: 'exec-ckp-2',
    accent: 'red',
    label: 'Cross-KPI Pattern 2',
    headline: 'Skipped reboot and network checks create unnecessary dispatch cost',
    body: 'Multiple agents dispatched technicians for POS connectivity issues without confirming terminal reboot, cable seating, or store network status. These premature dispatches cluster in weeks 1-4 and map directly to critical failure flags and CSAT scores below 3.',
  },
  {
    id: 'exec-ckp-3',
    accent: 'green',
    label: 'Cross-KPI Pattern 3',
    headline: 'Formal coaching at W5 breaks the POS escalation slide',
    body: 'Four agents flagged after 7+ consecutive days of micro coaching on unresolved remote triage received formal TL-led sessions in week 5. POS queue FCR moved from 52% at W5 to 74% by W8; micro coaching frequency on those agents dropped sharply.',
  },
  {
    id: 'exec-ckp-4',
    accent: 'amber',
    label: 'Cross-KPI Pattern 4',
    headline: 'Agent variance on POS triage is real and coachable',
    body: 'POS FCR ranges from above 85% for top performers to below 45% for struggling agents on the same queue. Post-coaching improvement on the four flagged agents validates that structured intervention - not queue reassignment - is the lever.',
  },
]

export const LIVE_LABEL = 'Live · May 2026'
export const CALLS_PILL = '10,000 contacts analysed · 8 weeks'
