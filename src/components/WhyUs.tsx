import { MapPin, Zap, FileCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: MapPin,
    title: 'Lokalt företag',
    description:
      'Vi bor och verkar i [Stad]. Du får alltid en lokal kontakt som känner till området och är snabbt på plats.',
  },
  {
    icon: Zap,
    title: 'Snabb utryckning',
    description:
      'Akut problem? Vi prioriterar jour-uppdrag och är oftast på plats inom en timme i hela [Stad] med omnejd.',
  },
  {
    icon: FileCheck,
    title: 'Kostnadsfri offert',
    description:
      'Kontakta oss för en kostnadsfri och förutsättningslös offert. Vi ger dig ett fast pris innan arbetet påbörjas.',
  },
];

export default function WhyUs() {
  return (
    <section id="om-oss" className="bg-brand-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Varför oss
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Vi gör det enkelt för dig
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-2xl mb-6">
                <point.icon className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {point.title}
              </h3>
              <p className="text-brand-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
