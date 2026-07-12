import { Phone } from 'lucide-react';
import { kund } from '../config/kund';
import { telHref } from '../lib/telefon';

export default function RingKnapp() {
  const { telefon } = kund.kontakt;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="h-6 bg-gradient-to-t from-ink/90 to-transparent" />

      <div className="bg-ink/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md">
        <a
          href={telHref(telefon)}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-jour py-4 font-display text-lg font-extrabold text-white shadow-lg shadow-jour/30 transition-transform active:scale-[0.98]"
        >
          <Phone className="h-5 w-5 shrink-0" strokeWidth={2.5} />
          <span className="nummer">{telefon}</span>
        </a>
      </div>
    </div>
  );
}
