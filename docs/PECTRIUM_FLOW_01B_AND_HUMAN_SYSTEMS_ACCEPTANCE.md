# Pectrium Flow Mark 01B + Human Systems in Motion — Implementation & QA

**Authorization:** User approved Flow Mark 01B and the Human Systems in Motion direction, for implementation in draft PR #5 only. No merge, no production promotion, no public release.

## Implemented
- `apps/web/components/flow-mark.tsx`: approved separated two-form 01B geometry.
- `apps/web/components/site-header.tsx` and `site-footer.tsx`: accessible symbol + `pectrium.` Geist wordmark. Home link has one accessible name.
- `apps/web/app/icon.svg`: monochrome mark favicon.
- `apps/web/public/brand/human-systems-in-motion.svg`: original illustrative editorial artwork showing a human-scale civic plaza, workplaces and moving people. **Illustration, not a photograph or evidence of a Pectrium facility, workforce or customer.**
- `apps/web/app/page.tsx`: feature art replaced; informative image accessible label.
- `apps/web/app/globals.css`: removed old boardwalk gradient treatment, replaced with original scene and responsive crop, refined logo spacing.

## Visual source and IP
Mercuryo's yacht/curved boardwalk imagery and visual treatment are no longer used in the active editorial panel. The replacement SVG is authored specifically for Pectrium. The generated cinematic concept board is a visual direction reference, **not** the deployed asset; do not publish its invented people, places, metrics or venture labels as facts. A photorealistic cinematic production image would require a separately approved original asset and review.

## Test matrix (pending)
- [ ] Exact-head CI: web lint/typecheck/build and starter validation.
- [ ] Verify deployed preview references the current commit.
- [ ] Inspect 320/375/390/768/1024/1440 layouts, mobile wordmark + CTA + menu fit, cropping and overflow.
- [ ] Test mobile menu keyboard/Escape, focus and 44px targets.
- [ ] Inspect SVG icon at 16/24/32/48px, social masks and light/dark legibility.
- [ ] Check browser favicon and social avatar; production social profile upload not authorized.
- [ ] Check SVG image text alternatives, contrast, performance and reduced-motion.
- [ ] Trademark similarity screening and final visual acceptance before production release.

## Release boundary
PR #5 remains draft and unmerged. Branded Vercel preview is not a public production promotion. No branch-to-main merge, production alias, indexing change or Vercel production deployment is authorized by this approval.
