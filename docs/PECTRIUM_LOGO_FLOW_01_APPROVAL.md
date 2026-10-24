# Pectrium Flow Mark 01 — Final approval candidate

**Status:** PROPOSAL ONLY. User selected Concept 01 for refinement, not final publication. Assets live under `apps/web/public/brand/proposals/` on draft PR #5. Do **not** wire into header, root favicon, Open Graph, production, social profiles or legal documents until explicit final approval.

## Symbol geometry
Coordinate system: 64 × 64. Two continuous leaf-like geometric forms meeting at (30,32); top-right form is a controlled upward sweep, lower-left form a mirrored downward sweep. Two filled paths, no strokes, no shadows, no gradients, no effects, no enclosing badge in primary usage.
- Upper: `M30 32C30 17 40 10 58 10C58 24 48 32 30 32Z`
- Lower: `M30 32C15 32 8 42 8 58C22 58 30 48 30 32Z`
- Keep exact path proportions, orientation and point of contact. Never rotate, reflect or reshape in implementations.
- This geometry is **not** an ownership or trademark clearance finding; perform similarity screening before public registration.

## Wordmark and lockup
Wordmark is exact lowercase `pectrium.` with final period. Intended production typography: Geist Sans SemiBold (600), tracking approx -0.05em subject to visual optical adjustment. Horizontal lockup symbol to left of wordmark; align optical center; spacing approximately 0.26 × symbol width. SVG lockup examples use live `<text>` with Geist/Arial fallback; they are **not** outlined production masters and must be checked with actual Geist installed or converted to verified outlines after final approval.

## Color
- Primary ink #0B0B0C on warm canvas #F7F7F5
- Inverse #FFFFFF on #0B0B0C
- Transparent monochrome symbol variants
No accent colors in identity. Social icons may use solid black background; the icon's rounded square is an application surface, not part of the master mark.

## Deliverables in this proposal
- `flow-symbol-ink.svg`, `flow-symbol-inverse.svg`
- `flow-symbol-transparent.svg`, `flow-symbol-white.svg`
- `flow-lockup-dark.svg`, `flow-lockup-light.svg` (font-dependent preview SVGs)
- `flow-favicon.svg` (proposal; not mapped to root icon)
- `flow-social-square.svg`, `flow-social-circle.svg` (1024 viewBox social candidates)

## Scale and clearance
- Primary symbol viewBox 64 × 64. Preserve at least 8 units clearance from neighboring content, excluding intentional app icon background.
- Test at 16, 24, 32, 48 and 64 CSS px. The 16px rendition may require a distinct hinting variant if visual testing reveals lost separation.
- Horizontal lockup minimum **proposed** width: 120 CSS px desktop, 100 CSS px mobile, subject to actual raster tests. Header icon + wordmark should not force mobile nav or Explore CTA off-screen.
- Screen reader: single `aria-label="Pectrium home"` on home link; SVG decorative when adjacent to text wordmark. No duplicate announcement.

## Before final approval / public use
- [ ] Inspect actual vectors on light and dark backgrounds.
- [ ] Verify Geist text rendering, kerning and optical alignment; create outlined master if necessary.
- [ ] Test small-size favicon and social avatar in real browsers/platform crop masks.
- [ ] Check against existing brand trademarks and near-matches; this is a design proposal, not clearance.
- [ ] User approves the symbol geometry and final lockup.
- [ ] Only after approval, integrate header/footer/favicon/OG/social; verify responsive and accessibility; run CI; explicitly authorize public production promotion.

No PR merge, production deployment or domain promotion authorized.
