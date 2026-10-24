# Pectrium Human Systems in Motion — approved media integration

## Approved 24-second edit
Eight user-supplied images, animated into a silent 24-second editorial motion film. This is an animated-image edit, not newly filmed footage. Four chapters, each six seconds:
- 00:00–00:06 Focus
- 00:06–00:12 Interaction
- 00:12–00:18 Connection
- 00:18–00:24 Possibility

Approved copy: **Technology built around real needs.**
Approved CTA: **Discover our products** → `/products`.

## Required media installation
Place the three approved media files in `apps/web/public/media/pectrium/hero/`:

- `human-systems-mobile.mp4` (540 × 960, 24 seconds)
- `human-systems-desktop.mp4` (960 × 540, 24 seconds)
- `human-systems-poster.webp`

The review package `pectrium-approved-media.zip` contains these exact names under `media/pectrium/hero/` (the package paths are relative to `apps/web/public/`).

The GitHub connector used for the source edits only writes UTF-8 text, so binary MP4 files were **not** committed to the repository. Do not activate video until those files are uploaded.

After assets are present, set `NEXT_PUBLIC_PECTRIUM_HERO_VIDEO_ENABLED=true` for a **preview** build and redeploy. The code currently keeps this feature disabled by default, so no missing video is requested. Keep production unchanged pending graphical QA.

## Implementation
`apps/web/components/hero-media.tsx` contains a single video player with four chapter indicators and play/pause control. The homepage places the media above a separate dark editorial headline panel on mobile. Desktop retains the dark editorial overlay. `prefers-reduced-motion` hides moving video, leaving a static background; inspect that background and poster in a real browser before launch.

## Acceptance
Verify exact asset responses 200, both mobile and desktop source selection, muted inline autoplay, chapter seek controls, six-second progress indicators, play/pause, loop, fallback, accessible labels, reduced motion, typography and CTA at 320/375/390/428/768/1024/1440 widths, and CI/build. Keep PR #5 draft and do not promote production without explicit release approval.
