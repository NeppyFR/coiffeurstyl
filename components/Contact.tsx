import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-900 border-t border-zinc-800 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-white mb-6">COIFFEUR STYL</h3>
            <p className="text-zinc-400 mb-6">
              Perfektion ist unser Standard. Wir bringen das traditionelle Barbier-Handwerk in die Moderne.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="text-gold-500 shrink-0" size={20} />
                <span>
                  Albisstrasse 110<br />
                  8038 Wollishofen
                </span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="text-gold-500 shrink-0" size={20} />
                <a href="tel:+41441234567" className="hover:text-white transition-colors">
                  +41 44 123 45 67
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Öffnungszeiten</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Mo - Fr</span>
                <span className="text-white">09:00 - 19:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Samstag</span>
                <span className="text-white">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sonntag</span>
                <span className="text-gold-500">Geschlossen</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-48 rounded-lg overflow-hidden bg-zinc-800 relative">
             <iframe 
                src="https://maps.google.com/maps?q=Albisstrasse%20110%2C%208038%20Wollishofen&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy"
                className="filter grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity"
            ></iframe>
            <div className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-md pointer-events-none">
              Hier finden
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; 2024 Coiffeur Styl. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;