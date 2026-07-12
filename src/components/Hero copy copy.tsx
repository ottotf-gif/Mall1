import type { ReactNode } from 'react';

type Ton = 'papper' | 'kalk' | 'blyerts';

const bakgrunder: Record<Ton, string> = {
  papper: 'bg-papper text-blyerts',
  kalk: 'bg-kalk text-blyerts',
  blyerts: 'bg-blyerts text-papper',
};

/**
 * Gemensamt sektionsskal. Håller sidbredd och vertikal rytm
 * konsekvent så att inte varje komponent uppfinner sin egen padding.
 */
export default function Sektion({
  id,
  ton = 'papper',
  children,
  className = '',
}: {
  id?: string;
  ton?: Ton;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${bakgrunder[ton]} py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-sida px-5 sm:px-8">{children}</div>
    </section>
  );
}

/**
 * Rubrikblock. Etiketten sitter som en liten tryckt skylt ovanför
 * rubriken — inte som ett svävande versalord med luft mellan bokstäverna.
 *
 * Vänsterställt som standard. Centrerad text är svårare att läsa och
 * signalerar "broschyr". Det här ska signalera "arbetsorder".
 */
export function Rubrik({
  etikett,
  children,
  ingress,
  mork = false,
}: {
  etikett?: string;
  children: string;
  ingress?: string;
  mork?: boolean;
}) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      {etikett && (
        <p
          className={`etikett mb-5 ${mork ? 'bg-papper text-blyerts' : 'bg-blyerts text-papper'}`}
        >
          {etikett}
        </p>
      )}
      <h2 className="text-3xl leading-[1.05] sm:text-[2.75rem]">{children}</h2>
      {ingress && (
        <p
          className={`mt-5 text-lg leading-relaxed ${mork ? 'text-grafit-ljus' : 'text-grafit'}`}
        >
          {ingress}
        </p>
      )}
    </div>
  );
}
