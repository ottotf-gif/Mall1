const navLinks = [
  { label: 'Tjänster', href: '#tjanster' },
  { label: 'Om oss', href: '#om-oss' },
  { label: 'Referenser', href: '#referenser' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">F</span>
            </div>
            <span className="text-white font-bold">FIRMANAMN</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-brand-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-brand-muted/60 text-sm">
            Drivs av{' '}
            <a
              href="https://ottoniq.se"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition-colors"
            >
              Ottoniq.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
