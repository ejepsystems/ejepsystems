# PECTRIUM-FOUNDATION-01 — Reusable Platform Engineering Authority

**Status:** Implemented v0.1 corporate starter + generator; remaining template families and platform modules are **planned**, not operational.

## Purpose
Pectrium's corporate website is one application, not a starter. The reusable foundation is a separately maintained source of project templates, shared standards and safe generation workflows. A generated project must have its own brand, content, dependency lifecycle, infrastructure, credentials and deployment approval.

## Reference authorities
- **Vercel** — design system engineering: Geist typography, semantic tokens, accessible interaction, responsive component composition, deployment quality and automated verification. Benchmark principles; do not copy proprietary assets.
- **Stripe** — corporate information architecture: clear multi-page navigation, layered company/service communication, content accuracy and meaningful disclosure.
- **Linear** — execution discipline: scoped issues, small reviewable PRs, explicit acceptance criteria, iterative validation and traceable release decisions.

## Architecture boundaries
- `apps/web`: Pectrium's own corporate website, never the cloned product.
- `packages/ui`: Pectrium corporate UI tokens; cross-product UI exports require stable APIs and documented customization.
- `templates/corporate`: independent Next.js starter with replaceable name, slug and accent, four pages and accessible basics.
- `tooling/create-platform.mjs`: dependency-free, offline, no-overwrite corporate generator.
- `modules/`: **future** optional auth/admin/API/payments integrations; none shipped in v0.1.
- Other templates (commerce, SaaS, fintech, mobile): **future**, gated by real requirements and certification.

## Generate a project
```sh
corepack pnpm create:platform --name "Example Company" --slug example-company --color "#243B53"
cd generated/example-company
corepack pnpm install
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm build
```
The generator defaults to `generated/<slug>` and refuses overwrites. It only creates source; it does **not** create a GitHub repository, provision a database, deploy to Vercel, activate payments, or create a customer account.

## Quality and isolation gates
1. **Identity:** no inherited Pectrium company copy or unverified product claims.
2. **Accessibility:** keyboard navigation, visible focus, 44px targets where feasible, WCAG 2.2 AA contrast, reduced motion.
3. **Responsive:** inspect 320, 375, 390, 768, 1024, 1440px for overflow and content clipping.
4. **Security:** no secrets in source, no insecure default authentication or payments; isolated environment variables.
5. **Engineering:** generator unit tests, generated app lint/typecheck/build, protected preview and approval.
6. **Release:** separate repository and project configuration, verified environment, explicit production authorization.
7. **Design:** color customization must retain text/CTA contrast; a six-digit hex value alone is **not** a contrast guarantee.

## Acceptance status
- Corporate generator implementation: present in draft PR #5, pending CI and generated-project verification.
- Corporate template: functional source, not yet certified through a generated-project build or real-browser acceptance.
- Advanced design templates, service/module picker, project generator UI, admin, API, app, auth, payments: not implemented.
- PR #5: DRAFT / HOLD MERGE. No production promotion or domain rename.
