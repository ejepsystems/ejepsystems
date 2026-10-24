# Pectrium Product and Solution Architecture 06 — Proposed

Status: strategy proposal, not approved product roadmap or live product catalog. Keep under draft PR #5. No claims of operating products, customers, payments, partners, metrics or certifications.

## Reference: Mercuryo
Mercuryo's primary market is web3 payment infrastructure. Its listed product categories include On-Ramp (fiat-to-crypto), Off-Ramp (crypto-to-fiat), Spend (crypto-linked spending card), Pro (business-size deposits/withdrawals), DCA (recurring purchases), NFT Checkout and customized integration experiences. Its solutions span onboarding, cash-in/out, wallet/DEX integrations, global payment methods, token/chain compatibility, KYC/KYB and developer API/SDK integrations. These are Mercuryo reference offerings only.

## Pectrium distinctive domain
Human-centered intelligent digital systems: build dependable tools that simplify workflows, information and interactions for people and organizations. Differentiation: an integrated stack of experience, intelligence, orchestration and secure infrastructure, not cryptocurrency services or a generic web agency.

## Product candidates — require discovery and validation
1. **Pectrium Flow** (workflow orchestration): multi-step forms, approvals, notifications and business process coordination. Initial use cases: intake, onboarding, service requests. Stage: Concept.
2. **Pectrium Assist** (contextual AI assistance): search, summarize and guide users through permitted tasks with sources, permissions and human review. Stage: Concept.
3. **Pectrium Connect** (integration layer): securely link authorized systems and data sources, with event flows, access controls and observability. Stage: Concept.
4. **Pectrium Insight** (operational intelligence): dashboards, data quality, reporting and decision support using verified data. Stage: Concept.
5. **Pectrium Studio** (internal product engineering system): reusable project scaffolding, design tokens and governance for Pectrium's own builds; the existing local Studio prototype must not be described as a public SaaS product. Stage: Internal Engineering.

These are **working descriptive names**, not trademark-cleared product brands. Do not expose a product catalog on the corporate website until user approval and substantiated stages.

## Solution categories, separated from technology
- Simplify fragmented workflows -> Flow + Assist
- Help people find and act on reliable information -> Assist + Insight
- Connect disconnected digital services -> Connect + Flow
- Build dependable digital experiences -> Studio engineering practices + application engineering
- Make organizational decisions clearer -> Insight + approved data connections

Technology disciplines underpinning all solutions: product engineering, applied AI, data systems, cloud/security infrastructure. These are capabilities or research areas, not evidence of active paid services.

## Recommended sequence
Phase 0: research specific user group and workflow; interview potential users; document alternatives and success criteria.
Phase 1: validate one narrow workflow, preferably Flow plus lightweight Assist, without building five standalone platforms.
Phase 2: establish common permissions, integration and telemetry foundations; add Connect only where a validated use case requires it.
Phase 3: develop Insight from actual customer/user information needs; defer broad platform promises.
Phase 4: publish real case studies, customer evidence and product availability when verified.

## Homepage 06
Approved hero uses one original Human Systems in Motion illustration, concise message and single CTA. No second editorial card repeating the headline before solution categories. Preserve responsive header, accessible controls, draft/noindex preview and no production promotion.

## QA gates
- GitHub exact-head CI: lint/typecheck/build.
- Protected Vercel preview matches current head.
- Mobile widths 320, 375, 390 and tablet 768; desktop 1024/1440.
- Check no overflow of symbol + wordmark + Explore + menu.
- Check image focal crop, contrast, accessible image description, keyboard and motion settings.
- User visually approves before merge or production.
