import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SystemVisual } from "@/components/system-visual";

const disciplines = [
  "Software systems",
  "Artificial intelligence",
  "Cloud infrastructure",
  "Developer technology",
  "Data systems",
  "Digital infrastructure",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Technology company · Establishment stage</p>
            <h1 id="hero-title">
              Building technology
              <span>with room to evolve.</span>
            </h1>
            <p className="hero-deck">
              Jeclazon is being established as a technology company for independently
              identifiable products, platforms, and future technology initiatives.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#company">
                Understand Jeclazon <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="#status">
                View current state <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <SystemVisual />
        </section>

        <section className="statement" id="company" aria-labelledby="company-title">
          <div className="shell statement-grid">
            <p className="section-index">01 / Company</p>
            <div>
              <h2 id="company-title">One company identity. Space for many technologies.</h2>
              <p>
                Jeclazon is the public technology-company identity. It is designed to sit
                above a portfolio without forcing every product to share the company name,
                visual identity, domain, or product experience.
              </p>
            </div>
          </div>
        </section>

        <section className="technology shell" id="technology" aria-labelledby="technology-title">
          <div className="section-heading">
            <p className="section-index">02 / Technology</p>
            <h2 id="technology-title">Broad by architecture. Precise in what we claim.</h2>
            <p>
              The company architecture can support multiple technology disciplines over
              time. These areas describe design capacity, not a claim that products are
              currently operating in each category.
            </p>
          </div>
          <ol className="discipline-list">
            {disciplines.map((discipline, index) => (
              <li key={discipline}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{discipline}</strong>
                <span aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="foundation" id="foundation" aria-labelledby="foundation-title">
          <div className="shell foundation-grid">
            <div>
              <p className="section-index">03 / Foundation</p>
              <h2 id="foundation-title">Shared where useful. Independent where necessary.</h2>
            </div>
            <div className="foundation-copy">
              <p>
                Jeclazon can develop reusable engineering, security, design, deployment,
                and developer foundations while allowing products to evolve according to
                their own requirements.
              </p>
              <div className="principle">
                <span>Company layer</span>
                <strong>Standards · Foundations · Governance</strong>
              </div>
              <div className="principle">
                <span>Product layer</span>
                <strong>Identity · Experience · Domain logic</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="status shell" id="status" aria-labelledby="status-title">
          <div className="status-panel">
            <div>
              <p className="eyebrow">Current state</p>
              <h2 id="status-title">Architecture → Engineering</h2>
            </div>
            <p>
              Jeclazon is being established and architected. This site does not represent
              planned products, market presence, customers, partnerships, or infrastructure
              as operational before evidence supports those claims.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
