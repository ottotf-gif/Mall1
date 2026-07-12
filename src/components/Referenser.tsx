import Sektion, { SektionsRubrik } from './Sektion';
import { kund } from '../config/kund';

export default function Referenser() {
  const { rubrik, ingress, lista } = kund.referenser;

  return (
    <Sektion id="referenser" ton="ljus" className="!pt-16 sm:!pt-20">
      <SektionsRubrik
        ogonbryn="Referenser"
        rubrik={rubrik}
        ingress={ingress}
        ton="ljus"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((referens) => (
          <figure
            key={referens.titel + referens.ort}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink"
          >
            <img
              src={referens.bild}
              alt={`${referens.titel}, ${referens.ort}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-85"
              aria-hidden="true"
            />

            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              {referens.detalj && (
                <p className="mb-1 font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-accent">
                  {referens.detalj}
                </p>
              )}
              <h3 className="text-lg font-bold leading-tight text-white">
                {referens.titel}
              </h3>
              <p className="mt-0.5 text-sm text-white/60">{referens.ort}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Sektion>
  );
}
