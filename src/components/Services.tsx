import {
  Droplets,
  Bath,
  Flame,
  CircleDot,
  Wrench,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Rörinstallation',
    description:
      'Nyinstallation och omläggning av vatten- och avloppsrör. Vi arbetar med alla typer av material och dimensioner.',
  },
  {
    icon: Bath,
    title: 'Badrumsrenovering',
    description:
      'Komplett badrumsrenovering från golv till tak. Vi hanterar allt VVS-arbete och koordinerar med övriga hantverkare.',
  },
  {
    icon: Flame,
    title: 'Värme & värmepump',
    description:
      'Installation och service av värmepumpar, golvvärme och radiatorsystem. Energieffektiva lösningar för ditt hem.',
  },
  {
    icon: CircleDot,
    title: 'Avloppsrensning',
    description:
      'Stopp i avloppet? Vi löser det snabbt med professionell spolning och kamerainspektion av ledningar.',
  },
  {
    icon: Wrench,
    title: 'Vattenläckor',
    description:
      'Akut utryckning vid vattenläckor. Vi lokaliserar, åtgärdar och förebygger framtida skador.',
  },
  {
    icon: ShieldCheck,
    title: 'Service & underhåll',
    description:
      'Regelbunden service av VVS-system, värmepannor och varmvattenberedare. Förebygg problem innan de uppstår.',
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="bg-brand-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Våra tjänster
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Allt inom VVS & rör
          </h2>
          <p className="mt-4 text-brand-muted text-lg">
            Från akuta utryckningar till planerade renoveringar — vi har kompetensen
            och erfarenheten att lösa alla typer av VVS-uppdrag.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-brand-navy/50 border border-white/5 rounded-2xl p-8 hover:border-brand-accent/30 hover:bg-brand-navy/80 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-brand-accent" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
