# Pectrium Human Systems Film — production handoff

## Creative authority
Original 12-second, seamless, silent, cinematic film about a real person interacting with useful technology. Do not reproduce Mercuryo's sailboat footage, branded interface or visual motifs. The narrative: person enters workspace → operates laptop and meaningful digital tool → wider collaboration and connected modern environment → human movement across connected places. Editorial realism, controlled camera movement, sophisticated contrast, warm human highlights, restrained palette. Avoid synthetic floating holograms, fake product screens, unverified claims, stock-looking scenes or identifiable third-party brands.

## Deliverables
- `apps/web/public/media/pectrium/hero/human-systems-mobile.webm` — 9:16 portrait, optimized
- `apps/web/public/media/pectrium/hero/human-systems-mobile.mp4` — H.264 fallback
- `apps/web/public/media/pectrium/hero/human-systems-desktop.webm` — 16:9 landscape
- `apps/web/public/media/pectrium/hero/human-systems-desktop.mp4` — H.264 fallback
- `apps/web/public/media/pectrium/hero/human-systems-poster.webp` — still frame poster

Video: 12 seconds, silent, seamless loop, no embedded text/logo/CTA, 24–30 fps. Compose subject away from headline safe zone on desktop. On mobile, film can be a separate dominant media panel; preserve legibility and no horizontal overflow. Optimize for real-world network constraints. Include a static fallback.

## Integration
`apps/web/components/hero-media.tsx` renders existing illustrated fallback by default. The approved files must exist and be inspected before enabling `NEXT_PUBLIC_PECTRIUM_HERO_VIDEO_ENABLED=true` on a review deployment. Do not set this flag without all assets. White HTML headline and CTA remain live DOM content. Reduced-motion preference hides video and reveals existing static background.

## Release gates
Confirm rights to all footage and music (silent preferred). Review mobile 320/375/390/428px and desktop 768/1024/1440px. Test autoplay mute/inline, looping, dark overlay readability, first-frame load, reduced-motion, media failure, mobile bandwidth and contrast. Pass GitHub lint, typecheck, build and CI. Keep PR #5 draft and production unchanged until explicit release approval.

## Film-generation connection
Figma Weave account link currently required. Generate only after user approves any quoted credit cost. No cinematic footage has yet been generated or installed.
