import { Phone, Check } from 'lucide-react';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';

/**
 * Jour-sektionen.
 *
 * Sidans viktigaste konverteringspunkt, och därför den enda platsen
 * där vi tar i på riktigt. Ligger direkt under hero — den som söker
 * "vattenläcka [ort]" ska se numret nästan utan att scrolla.
 *
 * Två medvetna val:
 *
 * 1. Telefonnumret sätts som display-typografi, inte som en knapptext.
 *    Numret ÄR erbjudandet. Det ska läsas som skylten på en servicebil,
 *    inte som en länk i en meny.
 *
 * 2. Färgen kommer från tema.jour, inte tema.accent. Även om kunden har
 *    en lugn blå profilfärg ska jour-bandet signalera akut. Varumärke
 *    och larm är två olika jobb.
 */
export default function Jour() {
  const { rubrik, text, loften } = kund.jour;
  const { telefon, jourtider } = kund.kontakt;

  return (
    <section className="relative overflow-hidden bg-jour">
      {/* Diagonala varningsränder — låg opacitet, bara en antydan */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent 0 14px, #000 14px 28px)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-sida px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Vänster: budskapet */}
          <div>
            {/* Levande jourindikator */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-black/20 px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-puls rounded-full bg-white" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
                Jour · {jourtider}
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-[2.75rem]">
              {rubrik}
            </h2>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/85">{text}</p>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
              {loften.map((lofte) => (
                <li
                  key={lofte}
                  className="flex items-center gap-2 text-sm font-semibold text-white"
                >
                  <Check className="h-4 w-4 shrink-0 text-white/70" strokeWidth={3} />
                  {lofte}
                </li>
              ))}
            </ul>
          </div>

          {/* Höger: numret. Hela ytan är klickbar. */}
          <a
            href={telHref(telefon)}
            className="group block rounded-3xl bg-white p-7 shadow-2xl shadow-black/25 transition-transform duration-200 hover:-translate-y-1 active:scale-[0.99] sm:p-9"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-jour" strokeWidth={3} />
              <span className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-jour">
                Ring nu
              </span>
            </div>

            <p className="nummer mt-3 text-nummer font-extrabold text-ink">{telefon}</p>

            <p className="mt-4 border-t border-ink/10 pt-4 text-sm font-medium text-sten">
              Vi svarar direkt. Ingen växel, ingen kö — du pratar med hantverkaren.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
