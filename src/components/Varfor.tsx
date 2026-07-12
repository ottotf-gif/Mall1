import { kund } from '../config/kund';
import { ikoner } from '../lib/ikoner';

export default function Varfor() {
  const { rubrik, lista } = kund.varfor;

  return (
    <section id="om-oss" className="border-y-2 border-blyerts bg-kalk py-16 sm:py-20">
      <div className="mx-auto max-w-sida px-5 sm:px-8">
        <p className="etikett mb-10">{rubrik}</p>

        <div className="grid gap-px bg-blyerts sm:grid-cols-3">
          {lista.map((fordel) => {
            const Ikon = ikoner[fordel.ikon];

            return (
              <div key={fordel.titel} className="bg-kalk pr-6 pt-6 sm:px-6 sm:pb-6">
                <Ikon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-4 text-lg">{fordel.titel}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-grafit">
                  {fordel.beskrivning}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
