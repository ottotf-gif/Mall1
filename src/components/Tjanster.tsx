import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Sektion, { SektionsRubrik } from './Sektion';
import { kund } from '../config/kund';
import { telHref, epostHref } from '../lib/telefon';

export default function Kontakt() {
  const { telefon, epost, ort, omrade, adress, oppettider, jourtider } = kund.kontakt;
  const heltOmrade = [ort, ...omrade].join(' · ');

  return (
    <Sektion id="kontakt" className="border-t border-white/10 !pt-16 sm:!pt-20">
      <SektionsRubrik ogonbryn="Kontakt" rubrik="Hör av dig" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Kort ikon={Phone} rubrik="Telefon">
          <a
            href={telHref(telefon)}
            className="nummer text-lg font-bold text-white transition-colors hover:text-accent"
          >
            {telefon}
          </a>
          <p className="mt-1 text-sm text-sten">{oppettider}</p>
        </Kort>

        <Kort ikon={Mail} rubrik="E-post">
          <a
            href={epostHref(epost)}
            className="break-all text-sten-ljus transition-colors hover:text-accent"
          >
            {epost}
          </a>
        </Kort>

        <Kort ikon={MapPin} rubrik="Vi jobbar i">
          <p className="text-sten-ljus">{heltOmrade}</p>
          {adress && <p className="mt-1 text-sm text-sten">{adress}</p>}
        </Kort>

        <Kort ikon={Clock} rubrik="Jour">
          <p className="text-sten-ljus">{jourtider}</p>
          <p className="mt-1 text-sm text-sten">Ring så rycker vi ut.</p>
        </Kort>
      </div>
    </Sektion>
  );
}

function Kort({
  ikon: Ikon,
  rubrik,
  children,
}: {
  ikon: typeof Phone;
  rubrik: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
        <Ikon className="h-5 w-5 text-accent" strokeWidth={2.25} />
      </div>
      <h3 className="mb-2 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-sten">
        {rubrik}
      </h3>
      {children}
    </div>
  );
}
