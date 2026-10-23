# Design Family 02 — Acceptance register

Candidate branch: `docs/pectrium-phase-02-brand-authority`, draft PR #5. Approved direction: precision monochrome, Geist Sans/Mono, compact mobile.

## Implemented in source
- [x] Authoritative design specification in `docs/PECTRIUM_DESIGN_FAMILY_02.md`.
- [x] Geist typography retained in root layout; monochrome semantic tokens updated.
- [x] Corporate homepage copy and CTA lead toward solutions and company.
- [x] Dedicated `/solutions` route added with four technology directions and explicit availability boundaries.
- [x] Header and footer include Solutions and use Initiatives label; mobile menu closes on Escape.
- [x] Company, Technology, Initiatives, Insights and Contact content aligned to company-first voice.
- [x] Mobile headline, section headings, cards, navigation, button and gutter styling refined.
- [x] No approved independent symbol invented; wordmark remains `pectrium.`.
- [x] Existing `noindex` metadata retained for private review.

## Required verification before visual acceptance
- [ ] Latest exact-HEAD CI: lint, typecheck, build, starter validation.
- [ ] Real browser at 320, 375, 390, 768, 1024, 1440px; inspect clipping, wrapping and overflow.
- [ ] Mobile menu tap/keyboard/Escape; active page, focus and screen reader labels.
- [ ] Contrast WCAG AA, reduced motion and 44px touch targets.
- [ ] Verify all six public page paths plus /solutions and cross-page links.
- [ ] Check protected preview shows the new candidate, not an older deployment.
- [ ] Check visual consistency of footer, navigation, headings, cards and empty states.
- [ ] Distinctive company logo symbol / favicon remains separately subject to approval.

## Release restrictions
No merge, no production alias, no domain migration, no public deployment, no unsupported claims or contact channels. Automated build success is not visual certification. Record any blocked browser/protected preview steps as **UNVERIFIED**.
