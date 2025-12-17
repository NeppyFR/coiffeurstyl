import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          alt="Barber Shop Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="block text-gold-500 font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Wollishofen
        </span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-6 animate-fade-in-up delay-100">
          Meister<span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">Klasse</span>
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in-up delay-200">
          Mehr als nur ein Haarschnitt. Wir definieren deinen Style neu mit Präzision, Leidenschaft und erstklassigem Handwerk.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a 
            href="#services"
            onClick={(e) => scrollToSection(e, '#services')}
            className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded-sm uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] cursor-pointer"
          >
            Unsere Preise
          </a>
        </div>
      </div>

      <a 
        href="#services" 
        onClick={(e) => scrollToSection(e, '#services')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold-500 transition-colors animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;