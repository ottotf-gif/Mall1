import { Phone } from 'lucide-react';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';

export default function RingKnapp() {
  const { telefon } = kund.kontakt;

  return (
    <a
      href={telHref(telefon)}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-3 border-t-2 border-blyerts bg-jour py-4 pb-[max(1rem,env(safe-area-inset-bottom))] font-display uppercase tracking-skylt text-papper active:bg-jour-mork md:hidden"
    >
      <Phone className="h-5 w-5 shrink-0" strokeWidth={2.5} />
      <span className="nummer text-lg">{telefon}</span>
    </a>
  );
}
