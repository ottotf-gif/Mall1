import { Phone } from 'lucide-react';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';

/**
 * Jour-sektionen. Sidans signaturelement.
 *
 * Det här är en varningsskylt, inte en webbsektion. Platt röd yta,
 * varningstejp i kanten, och telefonnumret satt som text på en
 * servicebil — inte som en knappetikett.
 *
 * Två saker som spelar roll:
 *
 * 1. Numret är det största på hela sidan. Det ÄR erbjudandet. En rubrik
 *    som är större än numret vore fel prioritering.
 *
 * 2. Färgen kommer från tema.jour, aldrig tema.accent. Även om kunden har
 *    en röd logotyp ska accenten vara något annat, så att det här blocket
 *    bryter mot resten av sidan. Smälter det in är det dött.
 */
export default function Jour() {
  const { rubrik, text, loften } = kund.jour;
  const { telefon, jourtider } = kund.kontakt;

  return (
    <section className="bg-jour text-papper">
      <div className="tejp h-3 bg-jour" aria-hidden="true" />

      <div className="mx-auto max-w-sida px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <p className="etikett mb-6 bg-papper text-jour">Jour · {jourtider}</p>

            <h2 className="text-3xl leading-[1.05] sm:text-[2.5rem]">{rubrik}</h2>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-papper/85">{text}</p>

            {/* Löftena som en stämplad lista, inte som chips med ikoner */}
            <ul className="mt-8 border-t border-papper/25">
              {loften.map((lofte) => (
                <li
                  key={lofte}
                  className="border-b border-papper/25 py-3 font-display text-sm uppercase tracking-skylt"
                >
                  {lofte}
                </li>
              ))}
            </ul>
          </div>

          {/* Numret. Hela plattan är klickbar. */}
          <a
            href={telHref(telefon)}
            className="block bg-papper text-blyerts transition-colors hover:bg-white"
          >
            <div className="flex items-center gap-2.5 border-b-2 border-blyerts px-6 py-4 sm:px-8">
              <Phone className="h-4 w-4 text-jour" strokeWidth={3} />
              <span className="font-display text-xs uppercase tracking-skylt">
                Ring nu — vi svarar
              </span>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="nummer text-nummer">{telefon}</p>
            </div>

            <p className="border-t-2 border-blyerts px-6 py-4 text-sm font-semibold text-grafit sm:px-8">
              Ingen växel, ingen kö. Du pratar med hantverkaren.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
