import { useState } from 'react';
import { Check, Phone } from 'lucide-react';
import Sektion, { Rubrik } from './Sektion';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';

export default function Offert() {
  const [skickat, setSkickat] = useState(false);

  const { rubrik, ingress } = kund.offert;
  const { telefon } = kund.kontakt;
  const jobbtyper = kund.tjanster.lista.map((t) => t.titel);

  function handleSkicka(e: React.FormEvent) {
    e.preventDefault();
    setSkickat(true);
  }

  if (skickat) {
    return (
      <Sektion id="offert" ton="blyerts">
        <div className="max-w-lg border-2 border-papper p-8 sm:p-10">
          <Check className="h-8 w-8 text-papper" strokeWidth={2.5} />
          <h2 className="mt-5 text-2xl sm:text-3xl">Tack — vi hörde dig</h2>
          <p className="mt-4 leading-relaxed text-grafit-ljus">
            Vi återkommer med en offert inom ett dygn. Är det bråttom, ring så tar vi
            det direkt.
          </p>
          <a
            href={telHref(telefon)}
            className="knapp mt-7 bg-jour text-papper hover:bg-jour-mork"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            <span className="nummer">{telefon}</span>
          </a>
        </div>
      </Sektion>
    );
  }

  return (
    <Sektion id="offert" ton="blyerts">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Rubrik etikett="Kostnadsfri offert" ingress={ingress} mork>
          {rubrik}
        </Rubrik>

        <form onSubmit={handleSkicka} className="border-t-2 border-papper">
          <div className="grid sm:grid-cols-2">
            <Falt id="namn" etikett="Namn" placeholder="Ditt namn" obligatorisk />
            <Falt
              id="telefon"
              etikett="Telefon"
              typ="tel"
              placeholder="070-123 45 67"
              obligatorisk
              className="sm:border-l-2 sm:border-papper/20"
            />
          </div>

          <Rad>
            <Etikett htmlFor="jobbtyp">Vad gäller det?</Etikett>
            <select
              id="jobbtyp"
              required
              defaultValue=""
              className="w-full appearance-none bg-transparent py-1 font-semibold text-papper focus:outline-none [&>option]:bg-blyerts"
            >
              <option value="" disabled>
                Välj typ av jobb …
              </option>
              {jobbtyper.map((typ) => (
                <option key={typ} value={typ}>
                  {typ}
                </option>
              ))}
              <option value="Annat">Annat</option>
            </select>
          </Rad>

          <Rad>
            <Etikett htmlFor="meddelande" valfritt>
              Kort om jobbet
            </Etikett>
            <textarea
              id="meddelande"
              rows={3}
              placeholder="Beskriv gärna kort vad du behöver hjälp med."
              className="w-full resize-none bg-transparent py-1 font-semibold text-papper placeholder-grafit focus:outline-none"
            />
          </Rad>

          <Falt id="epost" etikett="E-post" typ="email" placeholder="din@epost.se" valfritt />

          <button
            type="submit"
            className="knapp mt-8 w-full bg-papper text-blyerts hover:bg-white sm:w-auto sm:px-10"
          >
            Skicka förfrågan
          </button>

          <p className="mt-6 text-sm text-grafit-ljus">
            Har du bråttom?{' '}
            <a
              href={telHref(telefon)}
              className="font-semibold text-papper underline underline-offset-4"
            >
              Ring {telefon} istället
            </a>
          </p>
        </form>
      </div>
    </Sektion>
  );
}

function Rad({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`border-b-2 border-papper/20 px-1 py-4 ${className}`}>{children}</div>;
}

function Etikett({
  htmlFor,
  valfritt,
  children,
}: {
  htmlFor: string;
  valfritt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block font-display text-[0.7rem] uppercase tracking-skylt text-grafit-ljus"
    >
      {children}
      {valfritt && <span className="ml-1.5 normal-case tracking-normal">(valfritt)</span>}
    </label>
  );
}

function Falt({
  id,
  etikett,
  typ = 'text',
  placeholder,
  obligatorisk,
  valfritt,
  className = '',
}: {
  id: string;
  etikett: string;
  typ?: string;
  placeholder?: string;
  obligatorisk?: boolean;
  valfritt?: boolean;
  className?: string;
}) {
  return (
    <Rad className={className}>
      <Etikett htmlFor={id} valfritt={valfritt}>
        {etikett}
      </Etikett>
      <input
        id={id}
        type={typ}
        required={obligatorisk}
        placeholder={placeholder}
        className="w-full bg-transparent py-1 font-semibold text-papper placeholder-grafit focus:outline-none"
      />
    </Rad>
  );
}
