export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <p className="wordmark">pectrium<span aria-hidden="true">.</span></p>
          <p className="footer-note">Intelligent systems. Global possibilities.</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-nav">
          <p className="footer-label">Explore</p>
          <a href="#company">Company</a>
          <a href="#technology">Technology</a>
          <a href="#foundation">Foundation</a>
          <a href="#status">Current state</a>
        </nav>
        <div>
          <p className="footer-label">Legal</p>
          <p className="footer-note">EJEP Systems is the underlying legal/corporate entity. Formal disclosures remain subject to verified registration details.</p>
        </div>
      </div>
      <div className="shell footer-bottom"><span>Pectrium · Establishment stage</span><a href="#main">Back to top ↑</a></div>
    </footer>
  );
}
