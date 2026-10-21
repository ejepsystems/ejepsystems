# Pectrium Phase 02 — Repository Audit and Controlled Migration Plan

**Branch:** docs/pectrium-phase-02-brand-authority  
**Baseline examined:** 493293d7f5633564acd6aa51b1841f1b243509ed  
**Status:** Partial audit / implementation deferred  
**Production:** No changes authorized

## Confirmed references and impacts
| Path | Observed Jeclazon usage | Proposed action |
| --- | --- | --- |
| README.md | Title, identity diagram, build principle, documentation links, app/web description | Update active authority and point to Pectrium; retain historical references only as provenance |
| docs/00_JECLAZON_MASTER_BRAND_COMPANY_ARCHITECTURE.md | Prior master-brand directive | Preserve as superseded historical authority; do not silently delete |
| docs/01_JECLAZON_CORPORATE_WEB_DESIGN_SYSTEM.md | Design system and company terminology | Preserve pending approved Pectrium successor |
| docs/02_JECLAZON_INFORMATION_ARCHITECTURE_COMMUNICATION.md | Site copy, CTA, company language | Preserve pending approved Pectrium successor |
| package.json | pnpm scripts target @jeclazon/web | Technical identifier: migration must be coordinated with workspace package and lockfile |
| apps/web/package.json | Workspace package named @jeclazon/web | Technical identifier: do not rename independently |
| apps/web/app/page.tsx | Public company copy, hero, CTAs and status | Replace in separate implementation commit with rendered review |

## Audit coverage and limitations
Repository metadata confirms main as default and public visibility. Source inspection confirms an actual Next.js web app and pnpm workspace. The older README claim that only documentation exists is stale. GitHub code search returned no Jeclazon matches despite known matches in fetched files, so search results are **not an exhaustive reference inventory**. A complete recursive source scan is required before implementation.

## Required complete inventory
Run a recursive tracked-file search including case variants: Jeclazon, jeclazon, JECLAZON, @jeclazon, domains, canonical URLs, image alt text, OpenGraph metadata, manifests, environment variable names, package lockfile references, CI and deployment settings. Check public assets, imports, tests, docs and generated output separately. Do not replace historical evidence, third-party names, or technical identifiers blindly.

## Controlled implementation sequence
1. Freeze baseline and inventory actual tree and refs.
2. Approve public copy and Pectrium design system.
3. Replace user-visible branding in apps/web and relevant metadata; preserve existing product brands.
4. Migrate package scopes only with coordinated root scripts, dependency references, lockfile regeneration and CI validation.
5. Validate build, lint, typecheck, tests, link integrity, SEO, accessibility and responsive render.
6. Create private preview only when separately authorized; confirm protection and no production alias.
7. Present evidence and diff for review. No merge or public deployment without explicit approval.

## Invariants
EJEP Systems remains legal/corporate entity; Pectrium is the approved public brand; Jeclazon is retired. Quincestone, Emperor Armani and Clesla are unchanged. No fabricated ownership or operational claims.

## Rollback
Keep baseline SHA and branch history; revert individual commits if verification fails. Do not force-push main, rotate domains, or alter legal filings.

## Staged implementation (2026-10-21)
- Updated apps/web homepage, header, footer, architecture illustration, and SEO metadata to Pectrium.
- Updated workspace names in package.json, apps/web/package.json and packages/ui/package.json to @pectrium/*.
- Renamed CSS token namespace from --jz-* to --pct-* consistently in apps/web/app/globals.css and packages/ui/src/tokens.css without changing token values.
- Added pull-request validation workflow for legacy source references, pnpm lint, typecheck, and build.
- Historical Jeclazon authority documents remain unchanged. EJEP Systems legal identity and project brands remain unchanged.
- GitHub search indexing did not provide a complete repository tree or exhaustive recursive inventory; the workflow's tracked-file git grep will provide broader coverage when it runs.
- At the time of reporting, no GitHub Actions workflow run was returned for the feature-branch head. The Vercel commit status was **failure** with a build-rate-limit upgrade URL; this is not evidence of a failed application build.
- Build, lint, typecheck, and browser validation are **NOT VERIFIED**. No production deployment or merge has occurred.
