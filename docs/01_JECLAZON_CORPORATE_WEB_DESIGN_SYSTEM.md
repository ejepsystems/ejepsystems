# Jeclazon Corporate Web & Design System Authority

**Status:** Architecture  
**Scope:** Jeclazon company website and reusable company-level design language.

## Design objective

Jeclazon should feel like a serious technology company with a durable identity: precise, calm, technically credible, visually distinctive, and capable of presenting a growing portfolio without becoming noisy.

The design must be original. Reference companies are used to study principles, not to clone visual assets, copy, layouts, trademarks, or distinctive expression.

## Reference synthesis

### Apple — visual discipline
Adopt the discipline: decisive hierarchy, generous space, strong typography, progressive disclosure, high-quality imagery, and ruthless removal of nonessential elements.

Do not imitate Apple's product imagery, exact layouts, typography, navigation, or black/white aesthetic.

### Stripe — communication
Adopt the communication quality: explain sophisticated technology clearly, pair concise headlines with useful supporting copy, connect company narrative to products and technical depth, and make paths for technical readers obvious.

Do not inherit payments-specific language or Stripe's visual identity.

### NVIDIA — technology-company hierarchy
Adopt the architectural lesson: one strong company identity can sit above many technologies, products, audiences, developer resources, and research areas.

Avoid dense navigation until Jeclazon has enough real content to justify it.

### Vercel — digital interaction
Adopt the interaction standard: fast, responsive, technically expressive interfaces; purposeful motion; demonstrations when they convey real functionality; polished responsive behavior.

Avoid motion as decoration and avoid making Jeclazon look like a developer-tool startup.

### Cloudflare — scalable discovery
Adopt the portfolio lesson: as the product catalog grows, provide clear categorization, audience paths, product discovery, documentation connections, and scalable navigation.

Do not expose empty taxonomies merely to imply scale.

## Jeclazon design principles

1. **Company before catalog.** The homepage establishes Jeclazon before asking visitors to understand products.
2. **One idea per viewport.** Major sections should have a dominant message rather than competing cards and CTAs.
3. **Evidence over adjectives.** Prefer demonstrable technology, products, engineering work, or documentation over claims like “leading,” “revolutionary,” or “world-class.”
4. **Space is structural.** Whitespace separates concepts and establishes hierarchy.
5. **Typography carries the interface.** Type scale and rhythm should do more work than decorative containers.
6. **Motion explains.** Animation should clarify transitions, systems, relationships, or state.
7. **Products remain independent.** The company design system must not erase product identities.
8. **Accessibility is foundational.** Contrast, keyboard behavior, focus visibility, semantic structure, reduced motion, and readable type are design requirements.
9. **Responsive by composition.** Mobile must be intentionally composed, not a collapsed desktop.
10. **Truth is a design constraint.** Empty statistics, fake logos, fictional testimonials, invented maps, and unsupported “global” visual claims are prohibited.

## Visual system direction

### Color
Start with a restrained company-neutral foundation. Define semantic tokens rather than scattering raw color values:
- canvas / surface / elevated surface
- primary and secondary text
- subtle and strong borders
- brand accent
- interactive accent
- success / warning / danger / information

The final signature palette must be selected as Jeclazon identity work, not copied from a reference company.

### Typography
Use a compact type system with explicit roles:
- display
- page title
- section title
- subsection title
- body large
- body
- label
- metadata / code

Headlines should be short enough to remain typographically strong. Body text should prioritize comprehension over marketing density.

### Grid and spacing
Use a consistent responsive grid, predictable content widths, and a spacing scale. Large company-story sections may break the content grid intentionally; utility and legal content should favor readability.

### Shape and borders
Use radius, borders, shadows, and glass effects sparingly. Containers exist to communicate grouping or interaction—not because every piece of content needs a card.

### Imagery
Prioritize real product interfaces, original diagrams, engineering visuals, approved company imagery, and purposeful abstract systems. Do not use generic “AI” stock imagery to imply capabilities.

### Iconography
Use one coherent icon family with consistent stroke/geometry. Icons should support scanning and controls, not replace understandable labels.

## Interaction system

Define consistent states for links, buttons, navigation, menus, cards, accordions, tabs, dialogs, forms, and product discovery.

Motion should:
- respect `prefers-reduced-motion`
- remain performant
- never block navigation
- avoid excessive scroll hijacking
- have a communicative purpose

## Component hierarchy

Company-level primitives should eventually include:
- global header and responsive navigation
- announcement/status strip when justified
- hero systems
- editorial content sections
- technology/product feature sections
- product discovery
- media/diagram frames
- proof/evidence modules
- developer/documentation gateways
- company footer
- legal attribution
- accessible interactive primitives

Do not build components solely to fill this list. Implement them when real content requires them.

## Product relationship

Jeclazon's corporate design system governs the company experience. A Jeclazon product may inherit shared accessibility, engineering, typography primitives, or components while maintaining a distinct product identity.

Company consistency must not become forced visual sameness across every product.

## Quality gate

A Jeclazon public page is not design-complete unless it passes:
- clear hierarchy at a glance
- truthful claims
- keyboard navigation
- visible focus
- responsive composition
- reduced-motion behavior
- semantic headings/landmarks
- readable line lengths
- intentional loading/error states where applicable
- performance review
- no reference-company visual copying
- no empty corporate theater
