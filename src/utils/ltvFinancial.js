export const LTV_DEFAULTS = {
  avgDispatchCost: 450,
  clientContractValue: 240000,
  contractYears: 3,
  dissatisfiedPct: 16,
  churnBenchmark: 28,
  totalContacts: 2200,
}

const PERIOD_WEEKS = 8
const ANNUALISATION = 52 / PERIOD_WEEKS

const PERIOD_RISK = {
  dissatisfiedRisk: 485_000,
  repeatRisk: 198_000,
  unresolvedRisk: 312_000,
  totalRisk: 995_000,
}

const PERIOD_PROTECTED = {
  coachingProtected: 342_000,
  csatProtected: 178_000,
  totalProtected: 520_000,
}

const ANNUAL_RISK = {
  dissatisfiedRiskAnnual: 3_152_500,
  repeatRiskAnnual: 1_287_000,
  unresolvedRiskAnnual: 2_028_000,
  totalRiskAnnual: 6_467_500,
}

const ANNUAL_PROTECTED = {
  coachingProtectedAnnual: 2_223_000,
  csatProtectedAnnual: 1_157_000,
  totalProtectedAnnual: 3_380_000,
}

export function computeLtvFinancials(assumptions) {
  const { clientContractValue, contractYears, dissatisfiedPct, churnBenchmark, totalContacts } = assumptions

  const clientLtv = clientContractValue * contractYears
  const annualContacts = Math.round(totalContacts * ANNUALISATION)
  const dissatisfiedAnnual = Math.round(annualContacts * (dissatisfiedPct / 100))

  return {
    ltvPerClient: clientLtv,
    annualContacts,
    dissatisfiedAnnual,
    churnRate: churnBenchmark,
    ...PERIOD_RISK,
    ...PERIOD_PROTECTED,
    ...ANNUAL_RISK,
    ...ANNUAL_PROTECTED,
    totalSurfacedPeriod: PERIOD_RISK.totalRisk + PERIOD_PROTECTED.totalProtected,
    totalSurfacedAnnual: 9_847_500,
  }
}
