import Link from "next/link";

const links = [
  { href: "#company", label: "Company" },
  { href: "#technology", label: "Technology" },
  { href: "#foundation", label: "Foundation" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Jeclazon home">
          Jeclazon
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="header-link" href="#status">
          Company status
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
