/**
 * Helix Tech B2B POS support — conversation seed templates per L2 driver.
 * Use {ticket} for support ticket references (e.g. HT-TKT-12345).
 */
export const DRIVER_ISSUE_TEMPLATES = {
  'Terminal Failures': {
    customerOpen: 'Our main checkout terminal on ticket {ticket} will not boot — the screen stays black and we cannot process card payments.',
    customerFollow: 'We have three lanes open and this is our busiest register. Every minute offline is lost revenue.',
    agentFinding: 'I can see the terminal heartbeat dropped on our monitoring dashboard about 40 minutes ago.',
    agentResolve: 'I have queued a remote diagnostics session and escalated for on-site support. Under your contract SLA, critical terminal replacement is within 4 hours — I have confirmed the dispatch window with the field team.',
  },
  'Hardware Replacement': {
    customerOpen: 'We need an emergency swap for the terminal tied to ticket {ticket} — it failed completely during the lunch rush.',
    customerFollow: 'The store manager asked whether a replacement unit can be on-site today.',
    agentFinding: 'Your account shows an active hardware support tier with critical replacement coverage.',
    agentResolve: 'A replacement terminal is scheduled for delivery and install within the 4-hour critical SLA. I have sent the RMA label for the faulty unit and documented ticket {ticket} for tracking.',
  },
  'Receipt Printer Issues': {
    customerOpen: 'The receipt printer paired to ticket {ticket} keeps jamming and customers are leaving without printed receipts.',
    customerFollow: 'We tried new paper rolls and a power cycle but it errors out after every second print.',
    agentFinding: 'Remote diagnostics show a firmware mismatch between the terminal and the Epson TM-T88 printer.',
    agentResolve: 'I have pushed a compatible printer driver bundle to that terminal. Please reboot once — receipts should print normally within 10 minutes. I have noted the fix on ticket {ticket}.',
  },
  'Card Reader Faults': {
    customerOpen: 'The card reader on ticket {ticket} is declining every tap and chip insert — cashiers are having to turn customers away.',
    customerFollow: 'It started after last night\'s firmware push. Contactless lights flash red on every attempt.',
    agentFinding: 'I can see a certificate handshake failure between the reader and our payment gateway.',
    agentResolve: 'I have rolled back the reader security profile and triggered a key refresh. Please run one test transaction — I am staying on the line until a $1.00 auth clears successfully.',
  },
  'Peripheral Setup': {
    customerOpen: 'We received a new barcode scanner and cash drawer for ticket {ticket} but cannot get them recognised by the POS.',
    customerFollow: 'USB ports are active — the terminal just does not list the peripherals in device settings.',
    agentFinding: 'The peripherals are on the approved list but need pairing through the Helix merchant portal first.',
    agentResolve: 'I have enabled the devices on your account and pushed the pairing profile to the terminal. After a restart, both peripherals should appear under Connected Devices on ticket {ticket}.',
  },
  'App Crashes': {
    customerOpen: 'The Helix POS app on ticket {ticket} crashes to a white screen every time we open the settlement report.',
    customerFollow: 'It has happened six times this morning and we are rebooting between every crash.',
    agentFinding: 'Crash logs show an out-of-memory fault tied to a corrupted local cache on that terminal.',
    agentResolve: 'I have cleared the app cache remotely and pinned a stable build. Please relaunch the POS app — settlement reports should load without crashing. I have logged the fix on ticket {ticket}.',
  },
  'Firmware Update Issues': {
    customerOpen: 'A firmware update on ticket {ticket} stalled at 87% and now the terminal shows an update-failed warning.',
    customerFollow: 'We are afraid to reboot in case it bricks the device.',
    agentFinding: 'The OTA package partially downloaded — the terminal is in safe mode and can accept a clean reflash.',
    agentResolve: 'I have queued a verified firmware image and started a controlled reflash. The terminal will restart once — allow 15 minutes. I will call back when the update completes on ticket {ticket}.',
  },
  'POS Configuration': {
    customerOpen: 'Our tax rates and tender types on ticket {ticket} are wrong after we cloned settings from another store.',
    customerFollow: 'Card payments work but the wrong sales tax is being applied on every transaction.',
    agentFinding: 'I can see the terminal is pointing at a template from a different merchant location.',
    agentResolve: 'I have reassigned the correct store profile and synced tax tables from your master account. Please run one test sale — totals should match your configured rates. Ticket {ticket} is updated.',
  },
  'Reporting Errors': {
    customerOpen: 'End-of-day Z-report on ticket {ticket} shows $4,200 less than our transaction log — managers cannot close the register.',
    customerFollow: 'This is the second night in a row the variance report will not reconcile.',
    agentFinding: 'Two offline batches from yesterday were not uploaded before the report ran.',
    agentResolve: 'I have forced a batch sync and regenerated the Z-report. The variance should clear once you refresh reporting — I have emailed the corrected PDF and closed the loop on ticket {ticket}.',
  },
  'Network Connectivity Issues': {
    customerOpen: 'All terminals on ticket {ticket} lost connectivity to Helix cloud — we can ring sales but nothing authorises.',
    customerFollow: 'Our ISP says the line is up; the issue seems to be between the router and your gateway.',
    agentFinding: 'Ping tests from our side show packet loss on the merchant WAN IP starting around 09:15.',
    agentResolve: 'I have opened a connectivity bridge ticket with our network team and enabled extended offline tolerance for 24 hours. Please keep terminals in offline mode until we confirm stable gateway reachability on ticket {ticket}.',
  },
  'Offline Mode Failures': {
    customerOpen: 'Offline mode on ticket {ticket} is not storing transactions — staff see an error every time connectivity drops.',
    customerFollow: 'We had a 20-minute outage and lost three card sales that never synced back.',
    agentFinding: 'The offline transaction vault on that terminal is full because prior batches were never uploaded.',
    agentResolve: 'I have cleared the stuck queue and expanded the offline storage limit. Please reconnect to ethernet and run Manual Batch Upload — I will verify all three missing transactions post to settlement on ticket {ticket}.',
  },
  'Gateway Timeouts': {
    customerOpen: 'Card authorisations on ticket {ticket} time out after 30 seconds — customers think the payment failed and leave.',
    customerFollow: 'Retries sometimes double-charge, so cashiers have stopped attempting second swipes.',
    agentFinding: 'Our payment gateway is returning HTTP 504 on that merchant MID during peak authorisation volume.',
    agentResolve: 'I have routed your MID to a secondary gateway endpoint and extended the auth timeout to 45 seconds. Please test one live transaction — I am monitoring gateway latency on ticket {ticket} in real time.',
  },
  'Wi-Fi/Ethernet Setup': {
    customerOpen: 'We moved the counter and need help reconfiguring Wi-Fi on ticket {ticket} — ethernet is not an option at the new position.',
    customerFollow: 'The terminal sees the SSID but will not obtain an IP address.',
    agentFinding: 'The store Wi-Fi is on a guest VLAN that blocks POS MAC addresses.',
    agentResolve: 'I have whitelisted the terminal MAC on your Helix account and sent the static IP profile. After reconnecting to the merchant SSID, cloud sync should resume within 5 minutes. Steps are documented on ticket {ticket}.',
  },
  'Failed Transactions': {
    customerOpen: 'Multiple card transactions on ticket {ticket} are failing with a generic decline code even though customers confirm funds are available.',
    customerFollow: 'We are estimating $1,800 in lost sales since opening — this is unacceptable.',
    agentFinding: 'The acquirer flagged an AVS mismatch rule after a recent MID configuration change.',
    agentResolve: 'I have adjusted the AVS rule set for card-present transactions and released the held authorisations. Please retry the last failed sale — I will confirm settlement once the batch closes on ticket {ticket}.',
  },
  'Settlement Delays': {
    customerOpen: 'Yesterday\'s card batch on ticket {ticket} still shows pending settlement — our finance team expected funds this morning.',
    customerFollow: 'We have payroll tied to weekend takings and need clarity on the deposit timeline.',
    agentFinding: 'The batch uploaded successfully but the acquirer held it for a routine fraud review on high-volume weekend activity.',
    agentResolve: 'I have spoken with the settlement desk — funds of $24,650 will deposit by 6:00 AM tomorrow. I have emailed the release confirmation and updated ticket {ticket} for your finance contact.',
  },
  'Chargeback Queries': {
    customerOpen: 'We received a chargeback notice linked to ticket {ticket} for a $312.50 transaction we believe was valid.',
    customerFollow: 'The customer signed the receipt — we need to know what evidence to submit and the deadline.',
    agentFinding: 'The chargeback reason code is 10.4 — counterfeit card — and the response window closes in 8 days.',
    agentResolve: 'I have opened a chargeback defence case and listed the required documents: signed receipt, EMV cryptogram log, and terminal photo. Upload via the merchant portal under ticket {ticket} and our disputes team will file the representment.',
  },
  'Refund Processing Errors': {
    customerOpen: 'A refund for ticket {ticket} failed twice — the customer is still showing a $89.99 charge on their statement.',
    customerFollow: 'The original sale was contactless and the refund screen says issuer timeout.',
    agentFinding: 'The original auth cleared but the refund request was sent to a closed batch on the wrong terminal ID.',
    agentResolve: 'I have reissued the refund against the correct batch and obtained a host reference number. The customer should see $89.99 credit within 3–5 business days. Confirmation is on ticket {ticket}.',
  },
  'Contract Billing': {
    customerOpen: 'Our monthly Helix invoice on ticket {ticket} includes a $450 hardware maintenance line we do not recognise.',
    customerFollow: 'We were quoted a flat per-terminal fee — this looks like a duplicate charge from the store rollout.',
    agentFinding: 'Billing shows two active maintenance SKUs for the same terminal serial numbers after the Q1 expansion.',
    agentResolve: 'I have identified the duplicate SKU and submitted a $450 credit against next month\'s invoice. Revised contract billing is reflected on ticket {ticket} and I have emailed the updated statement.',
  },
  'Invoice Requests': {
    customerOpen: 'Accounts payable needs a consolidated invoice for ticket {ticket} covering all four store locations this quarter.',
    customerFollow: 'The portal only lets us download one location at a time and AP will not accept that format.',
    agentFinding: 'Your account is on multi-site billing — consolidated PDFs require a finance-tier export.',
    agentResolve: 'I have generated a consolidated invoice for Q1 totalling $18,240 and emailed it to your AP contact. The download link is also attached to ticket {ticket} for 30 days.',
  },
  'Plan Changes': {
    customerOpen: 'We want to upgrade from the standard plan to premium support on ticket {ticket} before our peak season.',
    customerFollow: 'Two new terminals go live next month — we need the faster SLA tier on those units.',
    agentFinding: 'Your current contract allows a mid-term plan change with 30 days\' notice — premium adds 4-hour critical hardware SLA.',
    agentResolve: 'I have submitted the plan change effective the first of next month. Premium support and the 4-hour critical replacement SLA will apply to all terminals on ticket {ticket}. Renewal paperwork is on its way.',
  },
  'SLA Queries': {
    customerOpen: 'I need clarity on the hardware replacement SLA on ticket {ticket} — our ops lead said 24 hours but the contract may say otherwise.',
    customerFollow: 'We had a terminal down for six hours last week and want to know if that breached SLA.',
    agentFinding: 'Your signed agreement specifies a 4-hour critical terminal replacement SLA for tier-one hardware failures.',
    agentResolve: 'Critical terminal replacement is covered within 4 hours, not 24. Last week\'s incident qualified — I have logged an SLA credit of one month\'s maintenance fee and documented the policy on ticket {ticket}.',
  },
  'Early Termination': {
    customerOpen: 'We are evaluating early termination of our Helix contract referenced on ticket {ticket} as we consolidate POS vendors.',
    customerFollow: 'Legal needs the exit fees and hardware return process before they sign off.',
    agentFinding: 'Your agreement has 14 months remaining with an early termination fee equal to 50% of outstanding contract value.',
    agentResolve: 'I have emailed the early termination schedule, RMA process for leased terminals, and a fee estimate of $36,000. All documents are attached to ticket {ticket} for your legal review.',
  },
  'Portal Access Issues': {
    customerOpen: 'I cannot log into the Helix merchant portal to view ticket {ticket} — password reset emails never arrive.',
    customerFollow: 'Our IT team whitelisted your domain but the issue persists for three admin users.',
    agentFinding: 'The admin accounts are active but reset messages were blocked by a typo in the notification email domain.',
    agentResolve: 'I have corrected the contact email, triggered fresh reset links, and confirmed delivery in our mail logs. You should reach the portal within 15 minutes to review ticket {ticket}.',
  },
  'User Management': {
    customerOpen: 'We need to add two store managers to ticket {ticket} with refund permissions but the portal will not let us assign roles.',
    customerFollow: 'Only the primary admin can log in — that person left the company last month.',
    agentFinding: 'Account ownership transfer was never completed when the primary admin departed.',
    agentResolve: 'I have verified your authority as billing contact and promoted you to primary admin. You can now invite the two managers with refund-tier roles. Steps are documented on ticket {ticket}.',
  },
  'Training Requests': {
    customerOpen: 'We have eight new cashiers starting Monday and need training on offline mode and settlement for ticket {ticket}.',
    customerFollow: 'Last turnover we had batch errors because staff were never shown the end-of-day workflow.',
    agentFinding: 'Your support plan includes two virtual training sessions per quarter.',
    agentResolve: 'I have booked a 60-minute Helix POS training session for Friday at 10:00 AM and sent calendar invites. The recording and quick-reference guide will be linked to ticket {ticket} afterward.',
  },
  'Complaints': {
    customerOpen: 'I want to file a formal complaint about ticket {ticket} — we have had three unresolved terminal outages this month.',
    customerFollow: 'Each time we were told 24-hour replacement when our contract promises faster response.',
    agentFinding: 'I can see three prior escalations and notes where agents quoted a 24-hour SLA instead of the contracted 4-hour critical window.',
    agentResolve: 'I have logged your complaint with our client relations team and applied SLA credits for each incident. A account manager will contact you within 2 business days with a written response on ticket {ticket}.',
  },
  'Follow-up Calls': {
    customerOpen: 'I am calling back about ticket {ticket} — your colleague said the replacement terminal would arrive by noon.',
    customerFollow: 'It is after 2 PM and our field team has not heard from the courier.',
    agentFinding: 'I can see the dispatch was confirmed but the courier missed the 4-hour SLA window by 90 minutes.',
    agentResolve: 'I have escalated with the logistics partner — the replacement terminal is now en route with ETA 45 minutes. I have applied an SLA credit and will stay on ticket {ticket} until install is confirmed.',
  },
}

export function fillTemplate(text, ticket) {
  return text.replace(/\{ticket\}/g, ticket)
}
