import Sektion, { Rubrik } from './Sektion';
import { kund } from '../config/kund';
import { ikoner } from '../lib/ikoner';

/**
 * Tjänsterna som en lista med hårda linjer, inte som svävande kort
 * med skuggor. En hantverkares tjänsteutbud ÄR en lista — det är så
 * den står på deras faktura och i deras offert.
 */
export default function Tjanster() {
  const { rubrik, ingress, lista } = kund.tjanster;

  return (
    <Sektion id="tjanster" ton="papper">
      <Rubrik etikett="Tjänster" ingress={ingress}>
        {rubrik}
      </Rubrik>

      <div className="grid border-l-2 border-t-2 border-blyerts sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((tjanst) => {
          const Ikon = ikoner[tjanst.ikon];

          return (
            <article
              key={tjanst.titel}
              className="group relative border-b-2 border-r-2 border-blyerts p-7 transition-colors hover:bg-kalk"
            >
              {tjanst.akut && (
                <span className="absolute right-0 top-0 bg-jour px-2 py-1 font-display text-[0.65rem] uppercase tracking-skylt text-papper">
                  Jour
                </span>
              )}

              <Ikon className="h-7 w-7 text-accent" strokeWidth={1.75} />

              <h3 className="mt-5 text-lg">{tjanst.titel}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-grafit">
                {tjanst.beskrivning}
              </p>
            </article>
          );
        })}
      </div>
    </Sektion>
  );
}
