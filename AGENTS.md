# Repository execution rules

Read docs/00_JECLAZON_MASTER_BRAND_COMPANY_ARCHITECTURE.md, docs/01_JECLAZON_CORPORATE_WEB_DESIGN_SYSTEM.md, and docs/02_JECLAZON_INFORMATION_ARCHITECTURE_COMMUNICATION.md in order, then docs/03_SHARED_FOUNDATION_STANDARD.md before implementation.

- Jeclazon is the public company brand. EJEP Systems is the underlying corporate entity.
- Preserve independent product brands, deployment credentials, and data boundaries.
- apps/web is a corporate website. Do not add sign-in, checkout, subscriptions, or customer accounts there.
- Never claim architecture, scaffolding, or policy files are deployed infrastructure.
- Use semantic design tokens; keep business logic out of shared UI.
- Work on a branch and open a reviewable PR. Production promotion is a separate action.
- Run node scripts/build-starter.mjs, then node --test scripts/*.test.mjs and node scripts/check-foundation.mjs for foundation changes. Run existing web lint, typecheck, and build for web changes when dependencies are available. Report blocked checks accurately.
- Do not commit secrets, production data, or unverified legal wording.
- Do not scaffold speculative service integrations or bypass deny-by-default policies.
