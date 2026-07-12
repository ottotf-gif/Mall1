import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const jobTypes = [
  'Välj typ av jobb...',
  'Rörinstallation',
  'Badrumsrenovering',
  'Värme & värmepump',
  'Avloppsrensning',
  'Vattenläcka (akut)',
  'Service & underhåll',
  'Annat',
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="offert" className="bg-brand-navy/30 py-20 sm:py-28">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Tack för din förfrågan!</h2>
          <p className="text-brand-muted text-lg">
            Vi återkommer inom kort med en offert. Har du bråttom? Ring oss direkt.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="offert" className="bg-brand-navy/30 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Offertformulär
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Begär kostnadsfri offert
            </h2>
            <p className="mt-4 text-brand-muted text-lg">
              Beskriv ditt ärende så återkommer vi med en offert inom 24 timmar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-muted mb-2">
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Ditt namn"
                  className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-muted mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="070-XXX XX XX"
                  className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-muted mb-2">
                E-post
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="din@epost.se"
                className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="jobType" className="block text-sm font-medium text-brand-muted mb-2">
                Typ av jobb
              </label>
              <select
                id="jobType"
                required
                defaultValue=""
                className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-colors appearance-none"
              >
                <option value="" disabled>
                  Välj typ av jobb...
                </option>
                {jobTypes.slice(1).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-muted mb-2">
                Meddelande
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Beskriv kort vad du behöver hjälp med..."
                className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-5 h-5" />
              Skicka förfrågan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
