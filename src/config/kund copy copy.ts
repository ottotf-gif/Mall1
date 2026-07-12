import { Phone, ArrowRight } from 'lucide-react';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';

/**
 * Hero.
 *
 * Fotot står för sig självt, i full skärpa. Bredvid ligger ett solitt
 * textblock med hård kant — som en vinyldekal på en skåpbil, inte som
 * en uttoning över en bild. Bilden dränks inte, den beskärs.
 *
 * Ingen toning någonstans på den här sidan. Det är hela poängen.
 */

/** '*ord*' i configen blir markerat. Låter dig styra det utan att skriva JSX. */
function Rubriktext({ text }: { text: string }) {
  return (
    <h1 className="text-[2.5rem] leading-[1] sm:text-6xl lg:text-[4rem]">
      {text.split('*').map((del, i) =>
        i % 2 === 1 ? (
          <span key={i} className="bg-jour box-decoration-clone px-2 text-papper">
            {del}
          </span>
        ) : (
          <span key={i}>{del}</span>
        ),
      )}
    </h1>
  );
}

const fakta: [string, string][] = [
  ['Fast pris', 'innan vi börjar'],
  ['Garanti', 'på allt arbete'],
  ['Jour', 'dygnet runt'],
];

export default function Hero() {
  const { etikett, rubrik, ingress, bakgrundsbild } = kund.hero;
  const { telefon, ort } = kund.kontakt;

  return (
    <section className="bg-papper">
      <div className="mx-auto grid max-w-sida lg:grid-cols-[1.05fr_1fr]">
        {/* Text */}
        <div className="order-2 px-5 py-14 sm:px-8 sm:py-20 lg:order-1 lg:border-r-2 lg:border-blyerts lg:py-24 lg:pr-14">
          <p className="etikett mb-6">{etikett}</p>

          <Rubriktext text={rubrik} />

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-grafit">{ingress}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={telHref(telefon)} className="knapp bg-jour text-papper hover:bg-jour-mork">
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              <span className="nummer">{telefon}</span>
            </a>
            <a
              href="#offert"
              className="knapp border-2 border-blyerts hover:bg-blyerts hover:text-papper"
            >
              Begär offert
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Faktaruta. Hårda linjer — ett stämpelfält på en blankett,
              inte tre svävande punkter med ikoner. */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 border-2 border-blyerts">
            {fakta.map(([term, forklaring], i) => (
              <div
                key={term}
                className={`px-3 py-4 sm:px-4 ${i < fakta.length - 1 ? 'border-r-2 border-blyerts' : ''}`}
              >
                <dt className="font-display text-xs uppercase tracking-skylt sm:text-sm">
                  {term}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-grafit sm:text-sm">
                  {forklaring}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm font-semibold text-grafit">{ort} med omnejd</p>
        </div>

        {/* Foto — full skärpa, hård kant */}
        <div className="relative order-1 min-h-[15rem] sm:min-h-[20rem] lg:order-2 lg:min-h-[40rem]">
          <img
            src={bakgrundsbild}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Varningstejp längs underkanten. Sidans enda dekoration. */}
          <div
            className="tejp absolute inset-x-0 bottom-0 h-2.5 bg-papper"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
