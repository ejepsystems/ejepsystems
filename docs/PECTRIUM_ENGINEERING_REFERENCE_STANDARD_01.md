# Pectrium Engineering Reference Standard 01

Status: Approved reference direction; implementation subject to rendered review.

## Three reference authorities
1. **Vercel** — frontend engineering and design-system quality: Geist typography, reusable tokens and components, responsive behavior, performance, accessibility, automated quality gates.
2. **Stripe** — multi-page corporate information architecture and precise, credible communication. Use as structural inspiration, not as a license to make unverified company claims.
3. **Linear** — focused specifications, small controlled changes, iterative design-engineering review and explicit acceptance gates.

References are benchmarks, not copied assets, trademarks, or proprietary implementation.

## Pectrium information architecture
- `/` — Home: concise company entry point, direct routes to dedicated pages.
- `/company` — Company purpose, principles, verified status.
- `/technology` — engineering interests, foundations, non-operational claims qualified.
- `/ventures` — Quincestone, Emperor Armani, Clesla only; project details and stages require verification.
- `/insights` — honest empty state until content is approved.
- `/contact` — no invented contact details or non-functional form.

## Mobile-first acceptance requirements
- Test widths 320, 375, 390, 768, 1024 and 1440 CSS px.
- No horizontal overflow, truncated primary content, or inaccessible navigation.
- Menu opens/closes via pointer and keyboard; focus remains visible; touch targets >= 44px.
- Each page has unique H1, useful title/description, working navigation, clear hierarchy.
- Body 15–16px; restrained heading sizes; Geist and Geist Mono.
- Verify light/dark text contrast against WCAG AA; respect reduced motion.
- No fake links, invented metrics, claims or contact details.
- No production promotion, domain rename, or merge without approval.
- Browser screenshots and interaction evidence required before final acceptance.

## Release constraints
Draft PR #5 remains the review vehicle. Preserve EJEP Systems as legal entity and existing project brand identities. Current pre-release metadata uses noindex, to be reviewed before authorized public launch.
