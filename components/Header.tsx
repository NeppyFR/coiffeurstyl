import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Static Div, not a button */}
        <div className="flex items-center gap-2 select-none">
          <div className="bg-gold-500 p-2 rounded-lg text-black">
            <Scissors size={24} />
          </div>
          <span className="font-display text-2xl tracking-wider text-white">COIFFEUR STYL</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm uppercase tracking-widest font-semibold text-zinc-400 hover:text-gold-500 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-2 px-6 rounded-sm uppercase tracking-wider text-sm transition-transform hover:scale-105 cursor-pointer"
          >
            Termin Buchen
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-display tracking-wide text-zinc-300 hover:text-gold-500 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
           <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-gold-500 text-center text-black font-bold py-3 rounded-sm uppercase tracking-wider cursor-pointer"
          >
            Termin Buchen
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;