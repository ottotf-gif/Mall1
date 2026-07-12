import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';
import { navLankar } from '../lib/navigering';

export default function Header() {
  const [oppen, setOppen] = useState(false);
  const [scrollad, setScrollad] = useState(false);

  const { namn, initialer } = kund.foretag;
  const { telefon } = kund.kontakt;

  useEffect(() => {
    const vidScroll = () => setScrollad(window.scrollY > 24);
    vidScroll();
    window.addEventListener('scroll', vidScroll, { passive: true });
    return () => window.removeEventListener('scroll', vidScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = oppen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [oppen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrollad || oppen
          ? 'border-b border-white/10 bg-ink/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-sida px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a href="#" className="flex items-center gap-2.5" onClick={() => setOppen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-sm font-extrabold text-white">
              {initialer}
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-white">
              {namn}
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLankar.map((lank) => (
              <a
                key={lank.href}
                href={lank.href}
                className="text-sm font-medium text-sten-ljus transition-colors hover:text-white"
              >
                {lank.text}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref(telefon)}
              className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-display text-sm font-bold text-white transition-colors hover:bg-accent-hover md:inline-flex"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              <span className="nummer">{telefon}</span>
            </a>

            <button
              onClick={() => setOppen(!oppen)}
              className="p-2 text-white md:hidden"
              aria-label={oppen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={oppen}
            >
              {oppen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {oppen && (
        <nav className="border-t border-white/10 bg-ink md:hidden">
          <div className="mx-auto max-w-sida px-5 py-3">
            {navLankar.map((lank) => (
              <a
                key={lank.href}
                href={lank.href}
                onClick={() => setOppen(false)}
                className="block border-b border-white/5 py-4 font-display text-lg font-bold text-white last:border-0"
              >
                {lank.text}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
