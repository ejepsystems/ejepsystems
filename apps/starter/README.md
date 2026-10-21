# EJEP Project Starter

Internal project configuration tool, separate from the Jeclazon corporate website.

Build from repository root:

```sh
node scripts/build-starter.mjs
```

Deploy apps/starter/dist to a protected static host. The build copies the shared manifest and generator into the output; there is one maintained implementation. No framework, build dependency, remote API, or credential is needed by this interface.

Users configure their project and brand, select modules, inspect the exact files and README, and download a ZIP. All configuration and archive generation happen in the browser. Draft storage is local to that browser. Reset restores the defaults. The exported project requires Node 22+ and starts with npm run dev, without installing dependencies.

The export is a set of working local development shells, not completed product features or a provisioned environment. App/admin are unprotected local interfaces. A dedicated API is optional. This intentionally portable export uses built-in Node HTTP and browser modules; the existing corporate site remains on Next.js/React. Products should select their production framework and controls when implementing their requirements.

The private hosted copy is synchronized from this source with Sites; hosting identity belongs to that checkout, not this public repository. Never deploy this tool as an unprotected corporate route.
