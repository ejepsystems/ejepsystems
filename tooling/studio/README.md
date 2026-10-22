# Pectrium Template Studio v0.1 (local only)

Run from repository root:

```sh
corepack pnpm studio
```

Open `http://127.0.0.1:4317`. This is a local-only private development utility. It binds to loopback, creates source under `generated/<slug>`, and refuses overwrites. It is **not** deployed or publicly accessible. Do not expose this server to the internet or proxy it into production; it has no authentication or rate limiting.

Only the corporate starter is implemented. The UI previews brand name and color, not a live rendering of the generated Next.js app. The generated app requires its own install, lint, typecheck, build and viewport review.
