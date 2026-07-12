import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Sektion, { Rubrik } from './Sektion';
import { kund } from '../config/kund';
import { telHref, epostHref } from '../lib/telefon';

export default function Kontakt() {
  const { telefon, epost, ort, omrade, adress, oppettider, jourtider } = kund.kontakt;
  const heltOmrade = [ort, ...omrade].join(' · ');

  return (
    <Sektion id="kontakt" ton="papper">
      <Rubrik etikett="Kontakt">Hör av dig</Rubrik>

      <dl className="grid border-l-2 border-t-2 border-blyerts sm:grid-cols-2 lg:grid-cols-4">
        <Post ikon={Phone} term="Telefon">
          <a href={telHref(telefon)} className="nummer text-xl hover:text-jour">
            {telefon}
          </a>
          <p className="mt-1.5 text-sm text-grafit">{oppettider}</p>
        </Post>

        <Post ikon={Clock} term="Jour">
          <p className="font-semibold">{jourtider}</p>
          <p className="mt-1.5 text-sm text-grafit">Ring så rycker vi ut.</p>
        </Post>

        <Post ikon={Mail} term="E-post">
          <a href={epostHref(epost)} className="break-all font-semibold hover:text-jour">
            {epost}
          </a>
        </Post>

        <Post ikon={MapPin} term="Vi jobbar i">
          <p className="font-semibold">{heltOmrade}</p>
          {adress && <p className="mt-1.5 text-sm text-grafit">{adress}</p>}
        </Post>
      </dl>
    </Sektion>
  );
}

function Post({
  ikon: Ikon,
  term,
  children,
}: {
  ikon: typeof Phone;
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b-2 border-r-2 border-blyerts p-6">
      <dt className="mb-4 flex items-center gap-2 font-display text-[0.7rem] uppercase tracking-skylt text-grafit">
        <Ikon className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
        {term}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}
