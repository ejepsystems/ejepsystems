# Pectrium Phase 04 — Acceptance Register

## Authority and scope
PR #5 stays draft and unmerged. Corporate mobile visual acceptance is independent of generated starter engineering acceptance. No production deployment or domain change is authorized.

## Gate A — Generator and independent starter
- [x] Generator tests: naming, branding, route creation, overwrite refusal and path validation.
- [x] GitHub CI run #16 on SHA 8c5609faf1c1188881850c88fcf70dc778560def: generated starter installed, linted, typechecked and built successfully.
- [ ] Fresh-head CI after adding Studio smoke coverage.
- [ ] Authenticated browser screenshots of a generated starter at 320, 375, 390, 768, 1024 and 1440 CSS px.
- [ ] Keyboard navigation, focus states, contrast and overflow inspection.
- [ ] Protected preview deployment for a separately configured generated project.

## Gate B — Private Template Studio
- [x] Local-only Studio UI and generation endpoint implemented.
- [x] Name, slug, color, corporate template and illustrative brand/file tree preview.
- [ ] Studio endpoint smoke tests passing on fresh-head CI.
- [ ] Real-browser interaction and accessibility checks.
- [ ] Hosted Studio authentication, authorization and request isolation: NOT IMPLEMENTED; do not host publicly.

## Gate C — Future capabilities (not part of current acceptance)
Commerce, SaaS, fintech and mobile templates; selectable app/admin/API/auth/payments modules; automatic GitHub repo creation; managed deployment and production release. These remain future work and must not be described as operational.

## Reference engineering principles
Vercel: responsive and accessible component engineering, build/release rigor.
Stripe: clear corporate content hierarchy and dedicated information architecture.
Linear: small changes, exact-head verification, explicit review and acceptance gates.
