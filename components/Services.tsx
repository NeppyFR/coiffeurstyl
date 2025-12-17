import React from 'react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  {
    name: "Haarschnitt Premium",
    price: "35 CHF",
    duration: "45 Min",
    description: "Waschen, Beratung, Schnitt, Styling & Nackenrasur."
  },
  {
    name: "Bartrasur Royal",
    price: "25 CHF",
    duration: "30 Min",
    description: "Heiße Kompresse, Rasur mit Klinge, Pflegeöl."
  },
  {
    name: "Coiffeur Styl Paket",
    price: "55 CHF",
    duration: "75 Min",
    description: "Die volle Erfahrung: Haarschnitt & Bartpflege inkl. Gesichtsmassage."
  },
  {
    name: "Maschinen-Schnitt",
    price: "20 CHF",
    duration: "20 Min",
    description: "Einheitliche Länge, Konturen & Nacken."
  },
  {
    name: "Kinderhaarschnitt",
    price: "25 CHF",
    duration: "30 Min",
    description: "Für unsere kleinen Gäste bis 12 Jahre."
  },
  {
    name: "Graukaschierung",
    price: "20 CHF",
    duration: "20 Min",
    description: "Dezente Tönung für Haar oder Bart."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">Preisliste</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="mt-4 text-zinc-400">Transparente Preise für erstklassigen Service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="group p-6 border border-zinc-800 bg-zinc-900/50 hover:border-gold-500/50 transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white font-display tracking-wide">{service.name}</h3>
                <span className="text-gold-500 font-bold text-xl">{service.price}</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                 <span className="text-xs font-semibold bg-zinc-800 text-zinc-300 px-2 py-1 rounded">{service.duration}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;