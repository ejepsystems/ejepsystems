# EJEP Systems Platform

EJEP Systems is building a reusable technology platform for creating, operating, and scaling its digital projects.

This repository is the high-level EJEP Systems platform repository. It contains the EJEP corporate web presence, the internal EJEP platform administration surface, shared platform foundations, infrastructure definitions, and the reusable project foundation used when a new EJEP project begins.

> **Intelligent Systems. Global Possibilities.**

## Repository Role

This repository is **not a product repository**.

It is the reusable EJEP Systems foundation from which EJEP can operate its own platform and establish new project repositories without rebuilding the same engineering structure from scratch.

The platform is designed around a simple principle:

**Build the foundation once. Reuse it consistently. Customize the project where it needs to differ.**

A new project should normally require:

- project and product identity
- brand name and visual identity
- project-specific content
- project-specific business/domain logic
- configuration and integrations required by that project
- additions for capabilities not present in the foundation
- removal or disabling of foundation capabilities the project does not need

The underlying engineering conventions, application structure, UI foundations, security boundaries, development tooling, and operational patterns should remain consistent unless a project has a documented reason to diverge.

---

## Platform Architecture

The repository is intended to evolve toward the following structure:

```text
ejepsystems/ejepsystems
│
├── apps/
│   ├── web/                  # EJEP public/corporate website
│   └── admin/                # EJEP internal platform control surface
│
├── packages/
│   ├── ui/                   # Shared EJEP design system
│   ├── config/               # Shared configuration
│   ├── platform/             # Platform primitives
│   ├── agent-runtime/        # Agent/platform interfaces
│   └── project-foundation/   # Reusable project foundation
│
├── infrastructure/
│   ├── openshell/            # EJEP-owned OpenShell foundation
│   ├── policies/             # Shared security/policy definitions
│   ├── environments/         # Environment definitions
│   └── deployment/           # Platform deployment configuration
│
├── templates/
│   └── project/
│       ├── apps/
│       │   ├── web/          # Project public experience
│       │   ├── app/          # Project application
│       │   ├── admin/        # Project administration
│       │   └── api/          # Optional project API
│       ├── packages/
│       ├── infrastructure/
│       └── docs/
│
└── docs/
```

The exact implementation may evolve as the platform is built. The architectural responsibilities should not be mixed merely to make the tree look complete.

---

## Reusable Project Foundation

Every new EJEP project should be able to start from the same foundation.

### Standard project applications

A project template provides:

- **web** — public website, marketing, corporate/product presentation, or other public experience
- **app** — primary authenticated or interactive product application when required
- **admin** — restricted project administration and operating surfaces
- **api** — optional backend/API surface for projects that require one

The API is deliberately optional. Projects that do not require a separate API should not carry unnecessary infrastructure.

A project may also add workers, jobs, services, mobile clients, or other applications when the project actually requires them.

### Project customization

After the foundation is created, the expected work is primarily:

1. Replace the project identity.
2. Apply the project's approved brand system.
3. Configure typography, imagery, copy, navigation, and product terminology.
4. Configure project-specific domains and environments.
5. Add the project's domain logic and integrations.
6. Enable capabilities required by the project.
7. Remove or disable capabilities that are not required.
8. Preserve the shared engineering, accessibility, security, and UI conventions wherever they still apply.

Changing a project's brand should **not** require redesigning the entire foundation.

The goal is consistency without forcing every project to become identical.

---

## Project Lifecycle

A new EJEP project should follow this general lifecycle:

```text
EJEP Platform
      │
      ▼
Create Project
      │
      ▼
Instantiate Project Foundation
      │
      ├── web
      ├── app
      ├── admin
      └── api (when required)
      │
      ▼
Apply Project Identity
      │
      ▼
Add / Remove Project Capabilities
      │
      ▼
Attach Project Infrastructure
      │
      ▼
OpenShell Workspace
      │
      ▼
Vercel / Supabase / Other Required Services
      │
      ▼
Project Engineering
```

The platform should eventually make this lifecycle repeatable rather than requiring a manual reconstruction for every project.

---

## EJEP OpenShell Control Plane

OpenShell belongs to **EJEP Systems**, not to an individual project.

EJEP should establish the OpenShell infrastructure once and provide isolated project workspaces from that shared control plane.

```text
EJEP Systems
└── OpenShell Control Plane
    ├── Workspace: emperor-armani
    ├── Workspace: quincestone
    └── Workspace: clesla
```

Only projects whose builds have actually started should receive an active project workspace.

Each project remains isolated with its own:

- workspace
- policies
- repository access
- credentials and provider permissions
- agents
- build environments
- audit boundaries

The shared platform should provide the reusable control plane without giving one project unnecessary access to another.

---

## Parallel Engineering

The platform is intended to support multiple engineering tasks running at the same time.

For example, one project may have independent work lanes for:

- architecture
- web
- application
- administration
- API/backend
- database
- testing
- security
- documentation

Parallel work must remain isolated and reviewable.

The preferred flow is:

```text
Task
  ↓
Project workspace
  ↓
Dedicated agent/sandbox
  ↓
Dedicated branch or worktree
  ↓
Implementation
  ↓
Tests / typecheck / lint / verification
  ↓
Commit
  ↓
Pull request
  ↓
Review / integration
```

Agents should not casually share one mutable working directory or overwrite another agent's work.

---

## Project Domains

The platform should support a consistent project domain model.

For example:

```text
<project>.ejepsystems.com
```

Possible projects include:

```text
emperor-armani.ejepsystems.com
quincestone.ejepsystems.com
clesla.ejepsystems.com
```

The actual production domain configuration is established only when a project is ready for it.

Development and preview environments may use provider-generated domains such as Vercel preview URLs.

---

## Current Corporate Website

The existing `apps/web` surface represents the public EJEP Systems corporate website.

It is the digital corporate headquarters of EJEP Systems.

It is **not a product application**.

The corporate website must not introduce:

- user authentication
- sign-up
- sign-in
- customer dashboards
- subscription billing
- product checkout
- customer accounts
- unverified company claims
- claims that planned platforms are already operational

Future EJEP platforms and products may be presented only with accurate development-stage labels such as:

- Concept
- Research
- Architecture
- Engineering
- Validation
- Pilot
- Public Launch

Public claims must remain factual, restrained, and approved.

---

## Current Project Scope

The first active project being connected to this platform is **Emperor Armani**.

The platform foundation itself is broader than Emperor Armani, but future project workspaces should only be activated when their builds actually begin.

Current project references should remain limited to the approved EJEP build scope.

---

## Technology Direction

The platform may use technologies appropriate to its responsibilities, including:

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub
- Vercel
- Supabase when database capabilities are required
- OpenShell for controlled agent execution
- additional infrastructure services when a project requires them

Technology choices should be made according to actual project requirements rather than added merely because they are available.

---

## Security and Access

Security is a platform responsibility.

The platform must:

- isolate projects from one another
- use least-privilege access
- keep secrets out of repositories
- scope credentials to the project and capability that needs them
- preserve database security and row-level security where Supabase is used
- avoid broad anonymous write access
- separate development, preview, and production environments
- require explicit authorization before activating production payment systems or other high-impact integrations
- maintain auditable project and infrastructure changes

OpenShell policies should be restrictive by default and expanded only when a legitimate project capability requires additional access.

---

## Repository and Change Discipline

Changes should be small, reviewable, and attributable to a specific responsibility.

General rules:

- domain logic belongs in the owning package/application
- database changes use migrations
- infrastructure changes are version-controlled
- shared behavior belongs in shared packages when it is genuinely shared
- project-specific behavior stays in the project
- production deployment must correspond to a verified Git revision
- do not introduce speculative product functionality into the platform
- do not copy project-specific business logic into the reusable foundation

---

## Template Philosophy

The project template is a **starting foundation, not a permanent restriction**.

A project can:

- keep everything in the foundation
- customize the existing implementation
- remove unnecessary applications or capabilities
- add new applications or services
- introduce project-specific infrastructure

The template exists to eliminate repeated setup work, not to prevent legitimate engineering decisions.

The desired outcome is:

```text
New EJEP Project
      │
      ▼
Foundation already exists
      │
      ▼
Brand + product configuration
      │
      ▼
Project-specific engineering
      │
      ▼
Ready for its own lifecycle
```

This lets EJEP move quickly while retaining recognizable engineering quality and consistency across projects.

---

## Authoritative Documentation

As the repository grows, authoritative documentation should define:

- platform architecture
- project-template rules
- application boundaries
- OpenShell policies
- environment strategy
- deployment strategy
- security requirements
- project creation and lifecycle
- branding/customization rules
- contribution and change discipline

Documentation must describe what is actually implemented. Planned capabilities must not be represented as operational capabilities.

---

## Build Principle

**Build the EJEP foundation once.**

**Let projects inherit the foundation.**

**Customize identity and product behavior without repeatedly rebuilding the platform.**

**Add only what the project needs. Remove what it does not. Preserve consistency everywhere else.**
