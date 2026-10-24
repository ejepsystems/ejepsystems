# Pectrium Navigation and Footer 07 — Review

Status: implemented in draft PR #5; not merged or deployed to production by this change.

## Information architecture
Primary corporate destinations:
- Products → `/products` with independent expandable mobile submenu for Flow, Assist, Connect, Insight and Studio. These link to product anchors.
- Solutions → `/solutions` with independent expandable mobile submenu for Digital workflows, Information clarity, Connected operations and Data intelligence. These link to named section anchors.
- Company → `/company`
- Technology → `/technology`
- Initiatives → `/ventures`
- Insights → `/insights`
- Contact → `/contact`

No dead-end links, invented email addresses, social links or legal-policy URLs. Desktop navigation remains direct-link for clarity. Mobile menu supports separate page-link and disclosure button for each expandable group; only one group expanded at a time. Escape closes and returns focus to menu toggle. Route changes close the menu. Closed navigation is inert.

## Footer
Premium dark editorial CTA band: “Technology built around real needs.” and “Meet Pectrium Flow” linking to `/products#flow`. Beneath: Pectrium brand and four groups: Products, Solutions, Explore and Pectrium. Final strip: current copyright year, company positioning and back-to-top link. No unsupported badges, awards, social accounts, offices, press or policies.

## Responsive QA checklist
- 320, 375, 390, 428, 768, 1024 and 1440px.
- Open/close menu; expand Products and Solutions; follow submenu anchors; navigate via direct top-level links.
- Keyboard focus, Enter/Space disclosure, Escape closure, focus return, reduced motion and screen reader names.
- Ensure no horizontal overflow or hidden CTA/wordmark at 320px.
- Footer columns stack to 2 at small mobile widths; CTA remains touch-friendly.
- Verify current preview commit, GitHub CI and Vercel deployment before merge/production.
- Keep draft PR #5 until browser certification and user approval.

## Product communication
Public navigation and footer confidently communicate Pectrium's chosen product and solution families. Product pages must not falsely state that a product can currently be purchased or used if it cannot. The site need not publish internal evidence files or product engineering reports.
