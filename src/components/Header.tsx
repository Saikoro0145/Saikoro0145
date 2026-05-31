const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#projects" aria-label="Projects section">
        <span className="brand-title">Portfolio</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
