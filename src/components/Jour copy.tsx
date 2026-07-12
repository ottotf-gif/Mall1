import { kund } from '../config/kund';
import { navLankar } from '../lib/navigering';

export default function Footer() {
  const { namn, initialer, orgnr, certifieringar } = kund.foretag;
  const ar = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-blyerts bg-blyerts text-papper">
      <div className="mx-auto max-w-sida px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center bg-accent font-display text-xs">
                {initialer}
              </span>
              <span className="font-display text-lg uppercase tracking-skylt">{namn}</span>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {certifieringar.map((cert) => (
                <li
                  key={cert}
                  className="border border-papper/25 px-2.5 py-1 text-xs font-semibold text-grafit-ljus"
                >
                  {cert}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-grafit">Org.nr {orgnr}</p>
          </div>

          <nav>
            <p className="mb-4 font-display text-[0.7rem] uppercase tracking-skylt text-grafit">
              Genvägar
            </p>
            <ul className="space-y-2">
              {navLankar.map((lank) => (
                <li key={lank.href}>
                  <a
                    href={lank.href}
                    className="text-sm font-semibold text-grafit-ljus transition-colors hover:text-papper"
                  >
                    {lank.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* pb-24 på mobil så den fasta ringknappen inte täcker bylinen */}
        <div className="mt-12 flex flex-col gap-2 border-t border-papper/20 pb-24 pt-6 sm:flex-row sm:items-center sm:justify-between md:pb-0">
          <p className="text-sm text-grafit">
            © {ar} {namn}
          </p>
          <p className="text-sm text-grafit">
            Drivs av{' '}
            <a
              href="https://ottoniq.se"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-grafit-ljus transition-colors hover:text-papper"
            >
              Ottoniq.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
