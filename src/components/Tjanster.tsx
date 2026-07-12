import Sektion, { SektionsRubrik } from './Sektion';
import { kund } from '../config/kund';
import { ikoner } from '../lib/ikoner';

export default function Tjanster() {
  const { rubrik, ingress, lista } = kund.tjanster;

  return (
    <Sektion id="tjanster" ton="ljus">
      <SektionsRubrik
        ogonbryn="Våra tjänster"
        rubrik={rubrik}
        ingress={ingress}
        ton="ljus"
      />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {lista.map((tjanst) => {
          const Ikon = ikoner[tjanst.ikon];

          return (
            <article
              key={tjanst.titel}
              className="group relative rounded-2xl border border-ink/8 bg-paper-100 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-ink/5"
            >
              {tjanst.akut && (
                <span className="absolute right-5 top-5 rounded-md bg-jour/10 px-2 py-1 font-display text-[0.65rem] font-extrabold uppercase tracking-wider text-jour">
                  Jour
                </span>
              )}

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent">
                <Ikon
                  className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-white"
                  strokeWidth={2}
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-ink">{tjanst.titel}</h3>
              <p className="text-[0.95rem] leading-relaxed text-sten">
                {tjanst.beskrivning}
              </p>
            </article>
          );
        })}
      </div>
    </Sektion>
  );
}
