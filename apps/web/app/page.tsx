import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SystemVisual } from "@/components/system-visual";

const disciplines = ["Software systems", "Artificial intelligence", "Cloud infrastructure", "Developer technology", "Data systems", "Digital infrastructure"];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Technology company · Establishment stage</p>
            <h1 id="hero-title">Intelligent systems.<span>Global possibilities.</span></h1>
            <p className="hero-deck">Architecting software, technology foundations, and intelligent systems for what comes next.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#company">Explore the company <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#status">Current state <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <SystemVisual />
        </section>

        <section className="statement" id="company" aria-labelledby="company-title">
          <div className="shell statement-grid">
            <p className="section-index">01 / Company</p>
            <div>
              <h2 id="company-title">Technology built with purpose.</h2>
              <p>Pectrium is being established to develop thoughtful technology systems and independent digital ventures. Each initiative retains its own identity and direction.</p>
            </div>
          </div>
        </section>

        <section className="technology shell" id="technology" aria-labelledby="technology-title">
          <div className="section-heading">
            <p className="section-index">02 / Technology</p>
            <h2 id="technology-title">Systems for what comes next.</h2>
            <p>Areas of architectural focus. These are not claims that products or services are currently operational in each discipline.</p>
          </div>
          <ol className="discipline-list">
            {disciplines.map((discipline, index) => <li key={discipline}><span>{String(index + 1).padStart(2, "0")}</span><strong>{discipline}</strong></li>)}
          </ol>
        </section>

        <section className="foundation" id="foundation" aria-labelledby="foundation-title">
          <div className="shell foundation-grid">
            <div><p className="section-index">03 / Foundation</p><h2 id="foundation-title">Foundations that travel.</h2></div>
            <div className="foundation-copy">
              <p>Shared standards where they add value. Independent products where they matter.</p>
              <div className="principle"><span>Shared foundation</span><strong>Engineering · Security · Design</strong></div>
              <div className="principle"><span>Independent initiatives</span><strong>Identity · Experience · Domain logic</strong></div>
            </div>
          </div>
        </section>

        <section className="status shell" id="status" aria-labelledby="status-title">
          <div className="status-panel">
            <div><p className="eyebrow">Current state</p><h2 id="status-title">Architecture & engineering.</h2></div>
            <p>Pectrium is being established. Planned products, partnerships, infrastructure, and market presence are not represented as operational without supporting evidence.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
