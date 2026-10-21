# Shared foundation standard — proposal v1

Status: Engineering. Design values are proposed defaults. Existing brand authorities remain governing.

## Ownership and boundaries

EJEP Systems owns this repository foundation; Jeclazon is the public company identity. Products inherit useful standards while retaining their own identity, domain logic, deployment resources, and release schedule. Quincestone, Emperor Armani, and Clesla are permitted portfolio names, not declarations of launch or current development state.

| Layer | Share | Keep independent |
| --- | --- | --- |
| Brand | Token vocabulary, typography roles, accessibility | Name, wordmark, imagery, accent, voice |
| UI | Focus, spacing, controls, state contracts | Page composition, customer journeys |
| Engineering | Strict TypeScript, workspace conventions, verification | Business logic and integrations |
| Security | Least privilege, redaction, incident process | Credentials, databases, sessions, authorization |
| Delivery | Review and release evidence formats | Deployments, rollback, product release cadence |

## Proposed design specification

Evolve the existing warm canvas and blue accent rather than replacing the current identity. The corporate expression is editorial: strong typography, generous space, thin rules, sparse containers, and evidence-led content. App and admin experiences use denser spacing with the same semantic roles. Product themes override tokens within their own root.

| Role | Default |
| --- | --- |
| Canvas / surface / ink | #F4F4F0 / #FFFFFF / #0A0B0D |
| Secondary text / primary action | #5D6168 / #335CFF |
| Positive / caution / critical | #177A4B / #9B6414 / #B83232 |
| Sans | Geist (existing corporate web font), then Arial, sans-serif |
| Mono | Geist Mono (existing corporate web font), then ui-monospace, monospace |
| Display | Fluid 48–112px, 1.0 line height, weight 500 |
| Page / section / subsection | 48 / 36 / 24px desktop; fluid down to 36 / 28 / 22px |
| Lead / body / label / metadata | 20 / 16 / 14 / 12px; body line height 1.6 |
| Grid | 12 columns desktop, 8 tablet, 4 mobile |
| Width | 1440px overall; 72ch prose; 16–48px side gutters |
| Spacing | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px |
| Shape | 8px controls, 12px panels; pill only for intentional editorial CTA |
| Controls | 44px minimum primary control height; visible labels |
| Motion | 120ms feedback, 200ms transition, 320ms structural change |
| Icons | One coherent 24px outline family; decorative icons hidden from assistive technology |

Tokens live in packages/ui/src/tokens.css. Dark tokens are available only for a scoped data-theme="dark" surface. They do not automatically change the existing corporate site. Proposed font roles use licensed, available fallbacks; no unlicensed font assets or new external font calls are introduced.

### Component acceptance contract

Implement a component when a real consumer needs it. Each component must specify applicable default, hover, focus-visible, active, disabled, loading, empty, error, and success states. Buttons use native button elements; navigation uses links. Forms have persistent labels, helpful errors tied through aria-describedby, and no color-only status. Dialogs require accessible naming, focus containment, Escape dismissal when safe, and focus return. Tables retain semantic headers and announce sorting. Pending destructive actions show the affected object before confirmation.

Prefer generous public web sections, focused app workspaces, and compact admin tables. Do not impose corporate page layouts on independent products.

## Accessibility and performance acceptance

Target WCAG 2.2 AA. Normal text contrast at least 4.5:1; large text at least 3:1; interactive boundaries/focus at least 3:1 where required. Primary controls target 44px; WCAG minimum target sizing and its exceptions still apply. Support keyboard use, visible unobscured focus, landmarks, logical headings, 200% text resizing, 320px reflow, reduced motion, and non-hover access. Automated contrast tests are useful checks, not a conformance certificate.

Performance targets for real field data: LCP <=2.5s, INP <=200ms, CLS <=0.1 at the 75th percentile. Measure before claiming compliance. Keep client-side JavaScript limited to interactions; avoid large decorative media and scroll interception.

## Engineering standards

Keep the existing pnpm workspace and Next.js/React stack. Use strict TypeScript for application code and dependency-free ESM for repository utilities. Introduce a dedicated API only when a project needs an independent service boundary. Use UTC for stored timestamps, locale-aware display, explicit currencies, server-side input validation, and structured errors with request IDs. Never return stack traces to public clients. Paginate collection endpoints; validate authorization per resource; define idempotency for retryable writes.

Do not introduce a shared database or shared customer session by default. Shared packages must not import application code. Avoid adding cache, queue, agent runtime, or orchestration dependencies until a verified use case requires them. Any future OpenShell integration requires a tested sandbox policy and external installation; its name in a policy document does not establish execution capability.

## Project contract and reuse

Use templates/project/project.json as the editable input. Run:

```sh
node scripts/create-project.mjs --config templates/project/project.json --out /absolute/path/outside-this-repository
```

The generator validates the project slug, brand, hex accent, and explicit web/app/admin/api selection. It writes a portable project manifest, shared brand/UI assets, working module shells, a Node development runtime, a README per selected module, and an implementation checklist. It refuses existing destinations and destinations inside the foundation repository. Selected modules run on separate localhost ports (web 3100, app 3101, admin 3102, API 3103). App provides a browser-local checklist; admin provides a browser-local theme inspector; the optional API exposes read-only health and project metadata. The output has no credentials, auth provider, billing, database, or deployment attached. Completing production product functionality remains product-specific engineering. The portable export deliberately uses built-in Node HTTP and browser modules with no installation step; this local starting point does not change the corporate site’s Next.js/React stack. Adopt the product’s production framework, authorization, tests, and infrastructure during implementation.

The internal apps/starter tool uses this same generator in the browser, previews the exact files, and downloads a ZIP. Build it with node scripts/build-starter.mjs. No account integrations or secrets are needed for generation.

Copied projects retain foundationVersion. Upgrade by reviewing versioned changes and rerunning checks; never silently overwrite product customizations. Shared packages are currently private workspace source, not a published package registry.

## Infrastructure standard

infrastructure/environments/policy.json defines development, preview, and production controls; scripts/check-foundation.mjs checks those declarations. External enforcement must be installed and tested separately. Development and preview must never receive production credentials. Preview access must be protected at the hosting layer before sharing confidential content; noindex is not access control.

Per product and environment: separate credentials, data stores, storage buckets, allowed origins, callback URLs, service accounts, and deployment access. Share the standards and management process. Centralize inventory and sanitized telemetry only where justified; never grant products blanket access to one another.

Production requires an owner, verified revision, successful checks, environment schema, protected access where applicable, explicit release authorization, health verification, and a known rollback revision. Migrations need compatibility review; restore capability must be exercised before relying on backup claims. Proposed initial recovery objectives are RPO 24h and RTO 4h, subject to product requirements and a demonstrated restore drill.

## Release and truth gates

Use docs/04_INFRASTRUCTURE_READINESS.md as the implementation ledger. The foundation workflow validates manifests, isolation policy declarations, color pairs, and generator safety. The existing Web Quality workflow still checks the site separately. Required branch protections are an external repository setting and are not enabled by adding workflow YAML.

Before calling this foundation production-ready: maintain the verified lockfile and web checks, configure required checks and preview protection, assign owners, verify secrets and environments, and rehearse rollback/restore. Keep live infrastructure status tied to evidence rather than completion language.

## References

- https://www.w3.org/TR/WCAG22/
- https://pnpm.io/cli/install
- https://docs.github.com/en/actions/reference/security/secure-use
