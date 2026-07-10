/** Helix Tech — B2B POS & payments contact driver taxonomy */

export const DRIVER_TAXONOMY = {
  'POS Hardware': [
    'Terminal Failures',
    'Hardware Replacement',
    'Receipt Printer Issues',
    'Card Reader Faults',
    'Peripheral Setup',
  ],
  'Software & Updates': [
    'App Crashes',
    'Firmware Update Issues',
    'POS Configuration',
    'Reporting Errors',
  ],
  'Connectivity & Network': [
    'Network Connectivity Issues',
    'Offline Mode Failures',
    'Gateway Timeouts',
    'Wi-Fi/Ethernet Setup',
  ],
  'Payments & Transactions': [
    'Failed Transactions',
    'Settlement Delays',
    'Chargeback Queries',
    'Refund Processing Errors',
  ],
  'Billing & Contracts': [
    'Contract Billing',
    'Invoice Requests',
    'Plan Changes',
    'SLA Queries',
    'Early Termination',
  ],
  'Account & General': [
    'Portal Access Issues',
    'User Management',
    'Training Requests',
    'Complaints',
    'Follow-up Calls',
  ],
}

export const L1_CATEGORIES = Object.keys(DRIVER_TAXONOMY)

/** Narrative-weighted L1 distribution (~32% POS hardware cluster) */
export const L1_WEIGHTS = {
  'POS Hardware': 0.32,
  'Software & Updates': 0.18,
  'Connectivity & Network': 0.16,
  'Payments & Transactions': 0.16,
  'Billing & Contracts': 0.10,
  'Account & General': 0.08,
}

/** L2 weights within each L1 — terminal and hardware drivers weighted higher */
export const L2_WEIGHTS = {
  'POS Hardware': {
    'Terminal Failures': 0.35,
    'Hardware Replacement': 0.25,
    'Card Reader Faults': 0.20,
    'Receipt Printer Issues': 0.12,
    'Peripheral Setup': 0.08,
  },
  'Software & Updates': {
    'App Crashes': 0.35,
    'Firmware Update Issues': 0.30,
    'POS Configuration': 0.20,
    'Reporting Errors': 0.15,
  },
  'Connectivity & Network': {
    'Network Connectivity Issues': 0.35,
    'Offline Mode Failures': 0.30,
    'Gateway Timeouts': 0.20,
    'Wi-Fi/Ethernet Setup': 0.15,
  },
  'Payments & Transactions': {
    'Failed Transactions': 0.35,
    'Settlement Delays': 0.30,
    'Chargeback Queries': 0.20,
    'Refund Processing Errors': 0.15,
  },
  'Billing & Contracts': {
    'Contract Billing': 0.30,
    'Invoice Requests': 0.22,
    'Plan Changes': 0.18,
    'SLA Queries': 0.18,
    'Early Termination': 0.12,
  },
  'Account & General': {
    'Portal Access Issues': 0.30,
    'User Management': 0.25,
    'Training Requests': 0.15,
    'Complaints': 0.18,
    'Follow-up Calls': 0.12,
  },
}

export const HIGH_RISK_L2 = new Set([
  'Terminal Failures',
  'Hardware Replacement',
  'Card Reader Faults',
  'Receipt Printer Issues',
])

export const HIGH_RISK_L1 = new Set(['POS Hardware'])

export const ALL_L2_DRIVERS = L1_CATEGORIES.flatMap((l1) =>
  DRIVER_TAXONOMY[l1].map((l2) => ({ l1, l2 })),
)

export function isHighRiskDriver(l1, l2) {
  return HIGH_RISK_L1.has(l1) && HIGH_RISK_L2.has(l2)
}

export function pickWeightedDriver(randFn) {
  const l1Items = L1_CATEGORIES
  const l1Weights = l1Items.map((l1) => L1_WEIGHTS[l1])
  const l1 = pickWeightedItem(l1Items, l1Weights, randFn)
  const l2Items = DRIVER_TAXONOMY[l1]
  const weights = L2_WEIGHTS[l1]
  const l2Weights = l2Items.map((l2) => weights[l2] ?? 1 / l2Items.length)
  const l2 = pickWeightedItem(l2Items, l2Weights, randFn)
  return { l1, l2 }
}

function pickWeightedItem(items, weights, randFn) {
  const r = randFn()
  let acc = 0
  for (let i = 0; i < items.length; i++) {
    acc += weights[i]
    if (r < acc) return items[i]
  }
  return items[items.length - 1]
}
