import { Phone, FileText } from 'lucide-react';

const PHONE_NUMBER = '070-XXX XX XX';
const PHONE_HREF = 'tel:070XXXXXXX';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-dark pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-2xl">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-4">
            VVS & Rör i [Stad/Område]
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight text-balance">
            FIRMANAMN — din lokala{' '}
            <span className="text-brand-accent">rörmokare</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-muted leading-relaxed max-w-xl">
            Vi utför alla typer av VVS-arbeten i [Stad] med omnejd. Snabb utryckning,
            fast pris och alltid garanti på vårt arbete.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-lg font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-accent/25"
            >
              <Phone className="w-5 h-5" />
              Ring oss: {PHONE_NUMBER}
            </a>
            <a
              href="#offert"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white/40 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              <FileText className="w-5 h-5" />
              Begär offert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
