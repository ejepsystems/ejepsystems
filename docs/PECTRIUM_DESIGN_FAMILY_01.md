# PECTRIUM DESIGN FAMILY 01 — Corporate Visual Authority

**Status:** Design-family specification implemented in source on draft PR #5; visual acceptance pending. **Scope:** Pectrium corporate website, not an automatic identity for independent project templates.

## Identity and communication
Pectrium is a technology company. Public hierarchy: company → solutions → technology → initiatives → insights → contact. Explain relevant problems, focus areas and intended solutions; do not lead with repository architecture, generator features, establishment process or internal engineering standards. No unverified services, operating scale, partners, statistics or claims. Engineering Foundation and Template Studio are separate internal tools.

## Reference interpretation
- **Apple:** restraint, compact but readable hierarchy, disciplined whitespace, meaningful product/service story.
- **Stripe:** solutions-oriented navigation, progressive disclosure, clear capability categories and accessible interaction.
- **Vercel:** Geist typography, semantic tokens, responsive component contracts, high-quality UI implementation.
- **Linear:** consistent spacing, precision, predictable interactions, release quality.
Do not copy trademarks, layouts, illustrations or proprietary visual assets.

## Typography (locked)
- Primary: Geist, via Next.js `next/font/google`. Fallback Arial, sans-serif.
- Technical labels only: Geist Mono. No monospace hero paragraphs.
- Weights: 400 body; 450–500 display; 550–600 subheads; 600 wordmark; 500 links.
- Mobile ≤560px / desktop ≥1024px:
  - H1: clamp(36px, 4.3vw, 66px), mobile 36–42px; line-height 1.08; tracking -0.045em; max-width 14ch for hero.
  - H2: clamp(27px, 3.3vw, 44px), mobile 27–32px; line-height 1.15; tracking -0.035em.
  - H3: clamp(19px, 2vw, 26px); line-height 1.22; tracking -0.025em.
  - Lead: 16px mobile, 18px desktop; line-height 1.55; max-width 56ch.
  - Body: 15px mobile, 16px desktop; line-height 1.65.
  - UI/navigation: 13–14px; min-height 44px interactive targets.
  - Eyebrow/metadata: 10–11px mono, letter-spacing .06em; max 2 lines.
- Use sentence case. Avoid giant words, arbitrary manual line breaks, all-caps paragraphs, and wide letterspacing in headlines.

## Color (locked corporate family)
- Canvas `#F7F7F5`; paper `#FFFFFF`; alternate surface `#E8E8E5`.
- Ink `#0B0B0C`; muted `#626265`; border `#D4D4D1`.
- Inverse `#0B0B0C` with foreground `#F7F7F5`.
- No gradients, rainbow accents, metallic treatments, glass effects or ornamental shadows in corporate UI.
- Semantic success/warning/error permitted for meaningful system feedback, not decorative branding.
- Check WCAG 2.2 AA contrast for every state; don't assume neutral gray is safe on every background.

## Logo and wordmark
- Authoritative wordmark: lowercase **pectrium.** with final dot. Geist 600, tracking -0.05em, 19px mobile / 21px desktop. Do not substitute a decorative symbol for the wordmark.
- A distinct abstract Pectrium symbol is **not yet approved**. Do not invent a permanent mark, rotate/distort wordmark, or use a generic letter P as an approved symbol.
- Interim favicon: text-safe minimal monogram only if clearly marked provisional. No unapproved logo artwork.
- Minimum clear space around wordmark: 0.5× its cap height; no stretching or shadows.

## Layout and component rules
- Mobile-first container: 20px gutters at ≤560px, 24px tablet, 32px desktop; max content 1200px.
- Header: 60px mobile, 68px desktop. Mobile menu icon 20px; accessible label, 44×44px target.
- Section spacing: 64–80px mobile; 96–128px desktop. Hero top 56–72px mobile; no forced full-screen blank space.
- Buttons: 44px minimum height, 6px radius, 13–14px type, primary black-on-white inverse or ink background with light text. Avoid oversized full-width buttons unless content needs it.
- Cards: flat surfaces, 1px border, 6–8px radius; no heavy drop shadows. Grid 1 column mobile, 2 tablet, up to 3 desktop.
- Icons: Lucide-style stroke, 18–20px, 1.75–2px stroke, semantic and sparing. Decorative arrows aria-hidden.
- Images: use purposeful, approved product/technology visuals with alt text; no generic architecture diagrams as hero substitutes.
- Motion: subtle ≤200ms transitions; respect prefers-reduced-motion.
- Footer: compact, semantic company navigation, accurate disclosure, no empty legal or social placeholders.

## Acceptance
- Check 320, 375, 390, 768, 1024, 1440px; no horizontal overflow or clipped typography.
- Check real browser mobile navigation, keyboard tab/escape, focus visible, accessible names, contrast and reduced motion.
- Verify copy communicates solutions before implementation method; verify no unproven operational promises.
- Automated lint/typecheck/build and protected preview; do not merge or promote production without explicit approval.
- This specification does not mean the visual system is fully accepted until real-browser verification.
