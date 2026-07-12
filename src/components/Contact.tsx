import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const PHONE_NUMBER = '070-XXX XX XX';
const PHONE_HREF = 'tel:070XXXXXXX';

export default function Contact() {
  return (
    <section id="kontakt" className="bg-brand-dark py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Hör av dig
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/10 rounded-xl mb-4">
              <Phone className="w-5 h-5 text-brand-accent" />
            </div>
            <h3 className="text-white font-semibold mb-2">Telefon</h3>
            <a
              href={PHONE_HREF}
              className="text-brand-muted hover:text-brand-accent transition-colors"
            >
              {PHONE_NUMBER}
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/10 rounded-xl mb-4">
              <Mail className="w-5 h-5 text-brand-accent" />
            </div>
            <h3 className="text-white font-semibold mb-2">E-post</h3>
            <a
              href="mailto:info@firmanamn.se"
              className="text-brand-muted hover:text-brand-accent transition-colors"
            >
              info@firmanamn.se
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/10 rounded-xl mb-4">
              <MapPin className="w-5 h-5 text-brand-accent" />
            </div>
            <h3 className="text-white font-semibold mb-2">Område</h3>
            <p className="text-brand-muted">[Stad] med omnejd</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/10 rounded-xl mb-4">
              <Clock className="w-5 h-5 text-brand-accent" />
            </div>
            <h3 className="text-white font-semibold mb-2">Öppettider</h3>
            <p className="text-brand-muted">
              Mån–Fre: 07:00–17:00
              <br />
              Jour: Dygnet runt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
