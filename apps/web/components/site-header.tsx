import Link from "next/link";

const links = [
  { href: "#company", label: "Company" },
  { href: "#technology", label: "Technology" },
  { href: "#foundation", label: "Foundation" },
  { href: "#status", label: "Current state" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Pectrium home">pectrium<span aria-hidden="true">.</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-list">
            {links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
          </ul>
        </nav>
        <Link className="header-link" href="#status">Company status <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span className="menu-label">Menu</span><span aria-hidden="true" className="menu-icon">☰</span></summary>
          <nav aria-label="Mobile navigation">
            <ul>{links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
