# Infrastructure readiness and release evidence

Baseline inspected: main at 493293d7f5633564acd6aa51b1841f1b243509ed (2026-10-20).

The repository already has a Next.js corporate web implementation and shared CSS tokens. The old README described these as future architecture; this ledger corrects that distinction. No hosting, database, secrets, or provider accounts have been configured in this change.

| Capability | State in this change | Evidence / next acceptance |
| --- | --- | --- |
| Company/brand authority | Existing | docs/00 through docs/02 |
| Corporate web source | Existing | apps/web; live deployment not audited |
| Shared design roles | Implemented, proposed | packages/ui/src/tokens.css; automated contrast pairs |
| Product manifest contract | Implemented | packages/project-foundation/src/manifest.mjs |
| Runnable local module export | Implemented | Shared browser/CLI generator; ZIP round-trip and runtime tests |
| Internal starter interface | Implemented | apps/starter; private hosted source synchronized separately |
| Environment policy declarations | Implemented | infrastructure/environments/policy.json; not provider enforcement |
| Foundation CI definition | Implemented | .github/workflows/foundation-quality.yml; remote outcome recorded in PR |
| Reproducible full web dependencies | Implemented and locally verified | pnpm-lock.yaml; pnpm 10.16.1 frozen install passed |
| Production admin, customer app, dedicated API | Not implemented here | Export includes local development shells only; product features and authorization required |
| Hosting access and preview protection | Unverified | Verify per deployment; do not treat robots rules as protection |
| Required branch checks | Pending | Baseline main reports protected=false; configure repository rules |
| Credentials and secret rotation | Pending | Populate provider secret stores; no secrets in source |
| Data isolation and authorization | Pending where needed | Separate resource inventory and authorization tests |
| Observability and alert routing | Pending | Sanitized logs, request IDs, owner, delivered test alert |
| Backup and restore | Pending where needed | Successful timed restore drill with evidence |
| Production release and rollback | Pending | Revision, checks, owner, health probe, rollback rehearsal |
| Sandbox/agent execution | Not provisioned | Install and verify runtime and least-privilege policy when needed |

## Release record template

Record project, environment, accountable owner, Git revision, dependency lock revision, check URLs, resource IDs (never secrets), access test, migration assessment, health probe, prior known-good revision, rollback steps, restore evidence when applicable, authorization, and release time. An omitted required field blocks production readiness.

## Validation in this change — 2026-10-20

- Passed: manifest rejection tests, all 15 valid module combinations, overwrite prevention, repository and symlink destination guards.
- Passed: environment policy declarations and 12 selected light/dark contrast pairs (all >=4.5:1).
- Passed: pnpm 10.16.1 frozen install, web lint, TypeScript, and optimized production build. Local Node was 24.19.0; the workflows target Node 22 and their remote results must be checked independently.
- Design specimen: docs/shared-design-specimen.html; syntax checked. Browser rendering/interaction QA remains unverified because the Chromium download failed in this environment. This is a proposed design specimen, not a published website.
- No production deployment, provider configuration, or database migration was performed.

## Starter update — 2026-10-21

The private configurator is connected to the repository manifest and generator. ZIPs contain runnable local shells with separate localhost ports, shared styles and browser behavior, optional read-only API endpoints, and setup documentation. App/admin have no authentication and cannot be called production-ready. The configuration/structure/file/README previews operate entirely in the browser; draft storage stays on the current device.

Passed: all 15 module combinations, form adapter validation, local import integrity, ZIP checksums and Unicode round-trip, generated server and browser syntax, running web/app/admin shells, API responses, rejection of source-file exposure, write-method rejection, and existing foundation policy/contrast checks. Browser rendering, keyboard interaction, and viewport QA remain unverified because the required control-browser capability is unavailable in this managed environment.
