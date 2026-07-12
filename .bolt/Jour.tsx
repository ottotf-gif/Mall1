import { kund } from '../config/kund';
import { navLankar } from '../lib/navigering';

export default function Footer() {
  const { namn, initialer, orgnr, certifieringar } = kund.foretag;
  const ar = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-800">
      <div className="mx-auto max-w-sida px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          {/* Företaget */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-display text-xs font-extrabold text-white">
                {initialer}
              </span>
              <span className="font-display font-extrabold text-white">{namn}</span>
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {certifieringar.map((cert) => (
                <li
                  key={cert}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-sten-ljus"
                >
                  {cert}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-sten">Org.nr {orgnr}</p>
          </div>

          {/* Navigering */}
          <nav>
            <h2 className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-sten">
              Genvägar
            </h2>
            <ul className="space-y-2.5">
              {navLankar.map((lank) => (
                <li key={lank.href}>
                  <a
                    href={lank.href}
                    className="text-sm text-sten-ljus transition-colors hover:text-white"
                  >
                    {lank.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Botten. Extra bottenmarginal på mobil så den fasta
            ringknappen inte täcker byline. */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-sten">
            © {ar} {namn}
          </p>
          <p className="pb-20 text-sm text-sten md:pb-0">
            Drivs av{' '}
            <a
              href="https://ottoniq.se"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sten-ljus transition-colors hover:text-accent"
            >
              Ottoniq.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
