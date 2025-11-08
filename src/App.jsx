import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Subtle page background with airy glass vibe */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(248,206,236,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_100%_10%,rgba(168,139,235,0.18),transparent_60%)]" />
      </div>

      <header className="sticky top-0 z-50 mx-auto w-full bg-white/50 backdrop-blur-xl border-b border-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-[#A88BEB] to-[#F8CEEC]" />
            <span className="font-semibold tracking-tight">Anjaneya Music Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700/90">
            <a href="#about" className="hover:text-[#A88BEB]">About</a>
            <a href="#music" className="hover:text-[#A88BEB]">Music</a>
            <a href="#gallery" className="hover:text-[#A88BEB]">Gallery</a>
            <a href="#contact" className="hover:text-[#A88BEB]">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <About />
        <Music />
        <Gallery />
        <Contact />
      </main>

      <footer className="relative border-t border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} AnjaneyaX • Anjaneya Music Studio
        </div>
      </footer>
    </div>
  );
}

export default App;
