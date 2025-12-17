import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop", // Barber cutting hair
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop", // Beard trim detail
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop", // Man with haircut
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop", // Barber tools
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=800&auto=format&fit=crop", // BW Barber working
    "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=800&auto=format&fit=crop"  // Lifestyle portrait
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">Galerie</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="mt-4 text-zinc-400">Einblicke in unsere Arbeit.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-sm aspect-square">
              <img 
                src={src} 
                alt={`Haircut style ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;