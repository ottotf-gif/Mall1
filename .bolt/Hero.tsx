import type { ReactNode } from 'react';

type Props = {
  id?: string;
  /** Bakgrundston. 'ljus' = paper, 'mork' = ink. */
  ton?: 'ljus' | 'mork';
  children: ReactNode;
  className?: string;
};

/**
 * Gemensamt sektionsskal. Håller vertikal rytm och sidbredd
 * konsekvent så att inte varje komponent uppfinner sin egen padding.
 */
export default function Sektion({ id, ton = 'mork', children, className = '' }: Props) {
  const bakgrund = ton === 'ljus' ? 'bg-paper' : 'bg-ink';

  return (
    <section id={id} className={`${bakgrund} py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-sida px-5 sm:px-8">{children}</div>
    </section>
  );
}

type RubrikProps = {
  ogonbryn?: string;
  rubrik: string;
  ingress?: string;
  ton?: 'ljus' | 'mork';
  justering?: 'vanster' | 'center';
};

export function SektionsRubrik({
  ogonbryn,
  rubrik,
  ingress,
  ton = 'mork',
  justering = 'vanster',
}: RubrikProps) {
  const rubrikFarg = ton === 'ljus' ? 'text-ink' : 'text-white';
  const ingressFarg = ton === 'ljus' ? 'text-sten' : 'text-sten-ljus';
  const layout = justering === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl';

  return (
    <div className={`mb-12 sm:mb-16 ${layout}`}>
      {ogonbryn && (
        <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-accent">
          {ogonbryn}
        </p>
      )}
      <h2 className={`text-3xl font-extrabold sm:text-4xl ${rubrikFarg}`}>{rubrik}</h2>
      {ingress && <p className={`mt-4 text-lg leading-relaxed ${ingressFarg}`}>{ingress}</p>}
    </div>
  );
}
