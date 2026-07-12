import { useState } from 'react';
import { Send, CheckCircle2, Phone } from 'lucide-react';
import Sektion, { SektionsRubrik } from './Sektion';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';

/**
 * Offertformulär.
 *
 * OBS: Detta är en mall — formuläret skickar ingenting. handleSkicka
 * visar bara kvittensvyn. När du sätter upp en riktig kund kopplar du
 * in en formulärtjänst (Formspree, Web3Forms, Netlify Forms) här nere
 * i handleSkicka. Allt annat är redan på plats.
 *
 * Fälten är medvetet få. Varje extra fält kostar ifyllda formulär, och
 * hantverkaren ringer ändå upp — då behövs varken adress eller
 * detaljerad projektbeskrivning i det här steget. Namn och telefon
 * räcker för att ta kontakt. Resten är valfritt.
 */
export default function Offert() {
  const [skickat, setSkickat] = useState(false);

  const { rubrik, ingress } = kund.offert;
  const { telefon } = kund.kontakt;
  const jobbtyper = kund.tjanster.lista.map((t) => t.titel);

  function handleSkicka(e: React.FormEvent) {
    e.preventDefault();
    // ── Koppla in formulärtjänsten här ──
    setSkickat(true);
  }

  if (skickat) {
    return (
      <Sektion id="offert">
        <div className="mx-auto max-w-md py-8 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
            <CheckCircle2 className="h-7 w-7 text-accent" strokeWidth={2.25} />
          </div>
          <h2 className="text-2xl font-extrabold text-white">Tack — vi hörde dig</h2>
          <p className="mt-3 leading-relaxed text-sten-ljus">
            Vi återkommer med en offert inom ett dygn. Är det bråttom, ring så tar vi
            det direkt.
          </p>
          <a
            href={telHref(telefon)}
            className="knapp mt-7 bg-jour text-white hover:bg-jour-hover"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            <span className="nummer">{telefon}</span>
          </a>
        </div>
      </Sektion>
    );
  }

  return (
    <Sektion id="offert">
      <div className="mx-auto max-w-xl">
        <SektionsRubrik
          ogonbryn="Kostnadsfri offert"
          rubrik={rubrik}
          ingress={ingress}
          justering="center"
        />

        <form onSubmit={handleSkicka} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Falt id="namn" etikett="Namn" placeholder="Ditt namn" obligatorisk />
            <Falt
              id="telefon"
              etikett="Telefon"
              typ="tel"
              placeholder="070-123 45 67"
              obligatorisk
            />
          </div>

          <div>
            <Etikett htmlFor="jobbtyp">Vad gäller det?</Etikett>
            <select
              id="jobbtyp"
              required
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-white/10 bg-ink-800 px-4 py-3.5 text-white transition-colors focus:border-accent"
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
          </div>

          <div>
            <Etikett htmlFor="meddelande" valfritt>
              Kort om jobbet
            </Etikett>
            <textarea
              id="meddelande"
              rows={3}
              placeholder="Beskriv gärna kort vad du behöver hjälp med."
              className="w-full resize-none rounded-xl border border-white/10 bg-ink-800 px-4 py-3.5 text-white placeholder-sten transition-colors focus:border-accent"
            />
          </div>

          <div>
            <Etikett htmlFor="epost" valfritt>
              E-post
            </Etikett>
            <input
              id="epost"
              type="email"
              placeholder="din@epost.se"
              className="w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3.5 text-white placeholder-sten transition-colors focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="knapp w-full bg-accent text-white hover:bg-accent-hover sm:text-lg"
          >
            <Send className="h-5 w-5" strokeWidth={2.5} />
            Skicka förfrågan
          </button>

          <p className="text-center text-sm text-sten">
            Har du bråttom?{' '}
            <a
              href={telHref(telefon)}
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              Ring {telefon} istället
            </a>
          </p>
        </form>
      </div>
    </Sektion>
  );
}

/* ── Små byggstenar, bara för det här formuläret ─────────────────── */

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
      className="mb-2 block text-sm font-semibold text-sten-ljus"
    >
      {children}
      {valfritt && <span className="ml-1.5 font-normal text-sten">(valfritt)</span>}
    </label>
  );
}

function Falt({
  id,
  etikett,
  typ = 'text',
  placeholder,
  obligatorisk,
}: {
  id: string;
  etikett: string;
  typ?: string;
  placeholder?: string;
  obligatorisk?: boolean;
}) {
  return (
    <div>
      <Etikett htmlFor={id}>{etikett}</Etikett>
      <input
        id={id}
        type={typ}
        required={obligatorisk}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3.5 text-white placeholder-sten transition-colors focus:border-accent"
      />
    </div>
  );
}
