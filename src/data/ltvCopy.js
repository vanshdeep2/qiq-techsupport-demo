export const LTV_DEFAULT_ASSUMPTION_TEXT =
  'Helix client account LTV is $720,000 over a 3-year contract ($240,000/year) based on mid-market retail chain managed services benchmarks. Annualised contact volume is 65,000 (10,000 contacts in the 8-week period × 6.5). Dissatisfied contacts (CSAT below 3) are 16% of volume = 10,400 annually. Client non-renewal risk for dissatisfied accounts is 28%. Dissatisfied contract revenue at risk = $4.69M annualised. Repeat contact waste $180K and unnecessary dispatch premium $298K bring total annualised revenue at risk to $5.17M. Coaching-protected contract value $1.80M and CSAT recovery value $950K total $2.75M protected annually. All figures are estimates.'

export const RISK_LINES = [
  {
    key: 'dissatisfiedRisk',
    annualKey: 'dissatisfiedRiskAnnual',
    title: 'Dissatisfied Contacts (CSAT < 3)',
    label: '10,400 annually · 16% of 65,000 contacts · 28% non-renewal risk',
    description:
      'Retail clients rating their support experience below 3 are significantly more likely to non-renew. At Helix\'s $720,000 3-year contract LTV, dissatisfied contacts represent the largest client retention exposure on the helpdesk floor.',
    legendLabel: 'Dissatisfied contacts',
    dotColor: '#c0392b',
  },
  {
    key: 'repeatRisk',
    annualKey: 'repeatRiskAnnual',
    title: 'Repeat Contacts',
    label: 'Repeat contact waste · $180K annualised',
    description:
      'Stores contacting support multiple times on the same issue show elevated non-renewal risk. The POS Hardware queue drives the majority of repeat contacts in this period.',
    legendLabel: 'Repeat contacts',
    dotColor: '#d9534f',
  },
  {
    key: 'unresolvedRisk',
    annualKey: 'unresolvedRiskAnnual',
    title: 'Unnecessary L3 Dispatches',
    label: 'Unnecessary dispatch premium · $298K annualised',
    description:
      'Contacts ending with premature on-site dispatch carry a cost premium beyond the dissatisfied-contact baseline. Each unnecessary dispatch costs approximately $450 in travel and technician time.',
    legendLabel: 'Unnecessary dispatches',
    dotColor: '#e8806f',
  },
]

export const PROTECTED_LINES = [
  {
    key: 'coachingProtected',
    annualKey: 'coachingProtectedAnnual',
    title: 'Coaching-Protected Contract Value',
    label: 'POS FCR +20pts W5 to W8 · formal coaching on four agents',
    description:
      'Formal coaching on four flagged POS agents recovered first-call resolution and reduced unnecessary dispatches - protecting client relationships and contract value.',
    legendLabel: 'Coaching-protected LTV',
    dotColor: '#1a7a4a',
  },
  {
    key: 'csatProtected',
    annualKey: 'csatProtectedAnnual',
    title: 'CSAT Recovery Value',
    label: 'CSAT partial recovery W6-W8 post-intervention',
    description:
      'Client satisfaction partially recovered in W6-W8 as POS handling improved. Further coaching can close the gap to the 4.2 target.',
    legendLabel: 'CSAT recovery',
    dotColor: '#228b5a',
  },
]
