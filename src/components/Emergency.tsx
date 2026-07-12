import { AlertTriangle, Phone } from 'lucide-react';

const PHONE_NUMBER = '070-XXX XX XX';
const PHONE_HREF = 'tel:070XXXXXXX';

export default function Emergency() {
  return (
    <section className="relative bg-brand-accent overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoLTJ2LTZoMnptMC0yMHY2aC0ydi02aDJ6bTE2IDE2djJoLTZ2LTJoNnptLTIwIDB2Mmgtfnv2LTJoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl sm:text-2xl">
                Akut vattenläcka eller stopp?
              </h2>
              <p className="text-white/90 text-sm sm:text-base mt-1">
                Ring direkt — vi rycker ut dygnet runt, alla dagar.
              </p>
            </div>
          </div>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-white text-brand-accent font-bold text-lg sm:text-xl px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
}
