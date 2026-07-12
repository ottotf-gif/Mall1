import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const PHONE_NUMBER = '070-XXX XX XX';
const PHONE_HREF = 'tel:070XXXXXXX';

const navLinks = [
  { label: 'Tjänster', href: '#tjanster' },
  { label: 'Om oss', href: '#om-oss' },
  { label: 'Referenser', href: '#referenser' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-darker/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">FIRMANAMN</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Ring oss</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2"
              aria-label="Meny"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-brand-darker border-t border-white/5">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-brand-muted hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 flex items-center justify-center gap-2 bg-brand-accent text-white font-semibold px-4 py-3 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
