import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-gold-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>
      <Contact />
    </div>
  );
}

export default App;