import { Phone, FileText } from 'lucide-react';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';

/**
 * Delar rubriken på *stjärnor* och färgar det inramade ordet.
 * Låter dig styra accentmarkeringen från kund.ts utan att skriva JSX:
 *   'Din lokala *rörmokare* i Uddevalla'
 */
function Rubrik({ text }: { text: string }) {
  const delar = text.split('*');

  return (
    <h1 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
      {delar.map((del, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-accent">
            {del}
          </span>
        ) : (
          <span key={i}>{del}</span>
        ),
      )}
    </h1>
  );
}

export default function Hero() {
  const { ogonbryn, rubrik, ingress, bakgrundsbild } = kund.hero;
  const { telefon, ort } = kund.kontakt;

  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink pt-24 sm:min-h-[92svh] sm:items-center">
      {/* Bakgrundsbild */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bakgrundsbild})` }}
        aria-hidden="true"
      />
      {/* Två toningar: en uppifrån för headern, en från vänster för texten.
          Bilden får synas i högerkanten istället för att dränkas helt. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-sida px-5 pb-16 pt-10 sm:px-8 sm:py-28">
        <div className="max-w-2xl animate-upp">
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.18em] text-accent">
            {ogonbryn}
          </p>

          <Rubrik text={rubrik} />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sten-ljus sm:text-xl">
            {ingress}
          </p>

          {/* Knappar. På mobil ligger den fasta ringknappen redan i botten,
              så här behöver vi inte upprepa numret — men vi låter ändå
              ring-knappen vara primär för den som scrollat hit direkt. */}
          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href={telHref(telefon)}
              className="knapp bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-hover sm:text-lg"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              <span className="nummer">{telefon}</span>
            </a>
            <a
              href="#offert"
              className="knapp border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 sm:text-lg"
            >
              <FileText className="h-5 w-5" strokeWidth={2.5} />
              Begär offert
            </a>
          </div>

          <p className="mt-6 text-sm text-sten">
            Kostnadsfri offert · Fast pris · Garanti · {ort} med omnejd
          </p>
        </div>
      </div>
    </section>
  );
}
