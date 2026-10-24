# PECTRIUM DESIGN FAMILY 02 — APPROVED CORPORATE AUTHORITY

**Approval:** Precision monochrome · Geist Sans and Geist Mono · compact/readable mobile-first. **Implementation scope:** draft PR #5 only. **Release state:** no merge, production promotion, or public launch. **Precedence:** this authority supersedes conflicting visual and communication rules in Design Family 01 for the Pectrium corporate website. Independent initiatives keep independent brands.

## 1. Reference translation
Apple: restrained typography, hierarchy, meaningful whitespace, direct communication. Stripe: solutions-first architecture and useful paths to explore. Vercel: Geist, semantic tokens, consistent responsive components. Linear: precise alignment, compact controls and quiet interactions. Cloudflare: clear separation of solutions, technology and company. These are design principles, not copied assets or unverified endorsements.

## 2. Company-first information architecture
Navigation: **Solutions / Technology / Company / Initiatives / Insights / Contact**. Each public page leads with visitor value and concrete focus, not internal engineering architecture. **Solutions** describes problems and intended applications without implying commercial availability. **Technology** describes focus and capabilities without asserting deployed offerings. **Company** explains identity and principles. **Initiatives** names only Quincestone, Emperor Armani, Clesla; roles, ownership, launch stages and links require verification. **Insights** shows an honest empty state until publications are approved. **Contact** never fabricates addresses, emails or form endpoints.

## 3. Locked typography
Geist Sans for wordmark, display, body, controls. Geist Mono only for eyebrows, numbers and technical metadata. Font weights: display 500, section 500, card 550, body 400, navigation 500, wordmark 600. Sentence case; never use mono for large paragraphs.
- Hero H1: mobile 36–40px, desktop 60–68px, line height 1.08, tracking -0.045em.
- Interior H1: mobile 34–38px, desktop 52–60px.
- Section H2: mobile 27–30px, desktop 38–44px, line height 1.15.
- Card H3: mobile 19–21px, desktop 22–26px.
- Lead: mobile 16px, desktop 18px, line height 1.55.
- Body: 15–16px mobile, 16px desktop, line height 1.65.
- Nav: 13–14px. Eyebrow: 10–11px, tracking .06em.
- Wordmark: lowercase **pectrium.**, mobile 20px, desktop 22px, weight 600, tracking -.05em. The final dot is part of the mark.
Headlines must wrap naturally without clipping or `overflow-wrap:anywhere`; target three lines on common mobile widths where copy permits. Use max-width measured in characters and avoid artificial line breaks.

## 4. Palette and surfaces
Ink #0B0B0C, canvas #F7F7F5, paper #FFFFFF, muted #626265, alternate #E8E8E5, divider #D4D4D1. Light-first; inverse ink sections selectively. Flat cards with 1px dividers and 6–8px radii. No gradients, metallic finishes, decorative drop shadows or imitation brand graphics. Semantic status colors only when meaning requires them. Verify WCAG 2.2 AA contrast.

## 5. Layout and components
- Mobile page gutters 20px, tablet 24px, desktop 32px; max content 1200px.
- Header 60px mobile, 68px desktop; wordmark left, simple 44px menu trigger right; desktop navigation compact. Menu has accessible label, expanded state, Escape dismissal, and visible focus.
- Hero mobile padding top 56–64px, bottom 64–72px; do not use full viewport height. Lead paragraph max 56ch.
- Section vertical padding mobile 64–80px, desktop 96–128px.
- Buttons min-height 44px, padding 12–18px, 6px radius; links have descriptive labels.
- Outline icon set: consistent 18–20px, stroke 1.75–2px, decorative arrows hidden from screen readers. No permanent Pectrium symbol is approved. Do not promote generic icons to official logo.
- Card grid 1 column on mobile, 2 on tablet, up to 3 desktop where content warrants. Reduce decorative borders.
- Footer compact with navigation and verified company information only; no fabricated social/legal links.
- Motion ≤200ms; respect prefers-reduced-motion.
- Responsive breakpoint acceptance: 320, 375, 390, 768, 1024, 1440px.

## 6. Brand / engineering boundaries
The corporate site presents technology solutions, company information and selected initiatives. Repository architecture, starter generator, Studio, shared tooling and internal standards are separate engineering infrastructure. Reuse accessibility, layout and engineering rules; do not force Pectrium's monochrome branding onto independent project templates.

## 7. Release gates
CI lint, typecheck, build and starter tests must pass at exact HEAD. Real browser viewport, menu keyboard/touch, no overflow, focus, contrast, links and metadata must be inspected before visual acceptance. Protected preview must be validated; a build passing does not equal visual certification. Draft PR only; no merge, public promotion or domain changes. Any absent checks remain explicitly **UNVERIFIED**.
