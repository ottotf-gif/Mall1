import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';
import { navLankar } from '../lib/navigering';

export default function Header() {
  const [oppen, setOppen] = useState(false);

  const { namn, initialer } = kund.foretag;
  const { telefon } = kund.kontakt;

  useEffect(() => {
    document.body.style.overflow = oppen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [oppen]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-blyerts bg-papper">
      <div className="mx-auto max-w-sida px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between sm:h-[4.5rem]">
          <a href="#" className="flex items-center gap-3" onClick={() => setOppen(false)}>
            <span className="flex h-9 w-9 items-center justify-center bg-accent font-display text-sm text-papper">
              {initialer}
            </span>
            <span className="font-display text-lg uppercase tracking-skylt">{namn}</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLankar.map((lank) => (
              <a
                key={lank.href}
                href={lank.href}
                className="border-b-2 border-transparent pb-0.5 text-sm font-semibold text-grafit transition-colors hover:border-accent hover:text-blyerts"
              >
                {lank.text}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <a
              href={telHref(telefon)}
              className="hidden items-center gap-2 bg-jour px-4 py-2.5 font-display text-sm uppercase tracking-skylt text-papper transition-colors hover:bg-jour-mork md:inline-flex"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              <span className="nummer">{telefon}</span>
            </a>

            <button
              onClick={() => setOppen(!oppen)}
              className="-mr-2 p-2 md:hidden"
              aria-label={oppen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={oppen}
            >
              {oppen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {oppen && (
        <nav className="border-t-2 border-blyerts bg-papper md:hidden">
          {navLankar.map((lank) => (
            <a
              key={lank.href}
              href={lank.href}
              onClick={() => setOppen(false)}
              className="block border-b border-blyerts/10 px-5 py-4 font-display text-lg uppercase tracking-skylt last:border-0"
            >
              {lank.text}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
