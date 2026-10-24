# Pectrium cinematic review

Isolated static review app. Source is in `apps/cinematic` within `ejepsystems/ejepsystems`. Do not merge or promote without approval.

## Required approved assets

Place these exact files beside `index.html` before treating the preview as complete:

- `scene-01-approved.jpg`
- `scene-02-approved.jpg`
- `scene-03-approved.jpg`
- `scene-04-approved.jpg`
- `pectrium-four-scenes-mobile-motion-preview.mp4`

The approved assets exist in the ChatGPT working environment, but **are not yet in this Git branch**. The UI warns if the MP4 is missing. Do not claim the film is deployed until the asset URL responds 200 and playback is verified.

## Vercel

Create a separate Vercel project from the **same GitHub repository** with Root Directory `apps/cinematic`, Framework Preset `Other`, Output Directory `.`, and preview authentication enabled. Keep `pectrium-web` untouched. Deploy the feature branch as preview. No production alias, no merge, no indexable page.

## Review gates

1. Add original approved binary assets.
2. Check MP4 response and browser playback on mobile and desktop.
3. Verify poster and all four chapters.
4. Keep deployment protected and obtain user approval before production integration.
