import { kund } from '../config/kund';
import { ikoner } from '../lib/ikoner';

/**
 * Egen bakgrund (paper-200) istället för Sektion-skalet, så att
 * den läser som ett eget band mellan tjänster och referenser
 * utan att bryta den ljusa blocket i två.
 */
export default function Varfor() {
  const { rubrik, lista } = kund.varfor;

  return (
    <section id="om-oss" className="border-y border-ink/8 bg-paper-200 py-16 sm:py-20">
      <div className="mx-auto max-w-sida px-5 sm:px-8">
        <h2 className="mb-10 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-sten">
          {rubrik}
        </h2>

        <div className="grid gap-10 sm:gap-8 md:grid-cols-3">
          {lista.map((fordel) => {
            const Ikon = ikoner[fordel.ikon];

            return (
              <div key={fordel.titel} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink">
                  <Ikon className="h-5 w-5 text-accent" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-bold text-ink">{fordel.titel}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-sten">
                    {fordel.beskrivning}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
