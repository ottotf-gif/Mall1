import Sektion, { Rubrik } from './Sektion';
import { kund } from '../config/kund';

export default function Referenser() {
  const { rubrik, ingress, lista } = kund.referenser;

  return (
    <Sektion id="referenser" ton="papper">
      <Rubrik etikett="Referenser" ingress={ingress}>
        {rubrik}
      </Rubrik>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((referens) => (
          <figure key={referens.titel + referens.ort} className="group">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-blyerts bg-kalk">
              <img
                src={referens.bild}
                alt={`${referens.titel}, ${referens.ort}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-b-2 border-blyerts pb-3">
              <div>
                <h3 className="text-base">{referens.titel}</h3>
                <p className="mt-1 text-sm font-semibold text-grafit">{referens.ort}</p>
              </div>
              {referens.detalj && (
                <p className="shrink-0 text-right text-xs font-semibold uppercase tracking-wide text-grafit">
                  {referens.detalj}
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </Sektion>
  );
}
