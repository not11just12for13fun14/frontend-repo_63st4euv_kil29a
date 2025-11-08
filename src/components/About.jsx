import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      {/* flowing gradient/soundwave backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#A88BEB]/30 via-[#F8CEEC]/30 to-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(90deg,transparent_0%,rgba(168,139,235,0.2)_20%,rgba(248,206,236,0.25)_50%,transparent_80%)] animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/60 p-8 md:p-12 backdrop-blur-2xl shadow-[0_10px_50px_rgba(168,139,235,0.28)]">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900/90">About Us</h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700/90">
            Anjaneya Music Studio is the musical extension of AnjaneyaX — where creativity, sound, and emotion come together through world-class production, mixing, and mastering.
          </p>
          <div className="mt-6 h-24 w-full rounded-xl bg-gradient-to-r from-[#A88BEB]/40 via-[#F8CEEC]/40 to-white/30 backdrop-blur-xl">
            <div className="h-full w-full animate-[wave_6s_ease-in-out_infinite] rounded-xl bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.6)_30%,transparent_60%)]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
