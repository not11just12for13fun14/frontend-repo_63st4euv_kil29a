import React from 'react';
import Spline from '@splinetool/react-spline';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* 3D cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient glow overlay so Spline blends with the palette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-[#F8CEEC]/25 to-white/70 mix-blend-screen" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
        {/* Logo proxy (replace with actual lion + headphones image if available) */}
        <div className="mb-8 rounded-3xl border border-white/60 bg-white/50 p-2 backdrop-blur-xl shadow-[0_10px_50px_rgba(168,139,235,0.35)]">
          <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-[#A88BEB] to-[#F8CEEC] shadow-inner" />
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900/90">
          Anjaneya Music Studio
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-700/90">
          Where Sound Meets Soul
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://linktr.ee/anjaneyamusicstudio"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-6 py-3 text-sm font-medium text-gray-900/90 backdrop-blur-xl shadow-[0_12px_45px_rgba(248,206,236,0.55)] transition-all hover:scale-[1.02]"
            aria-label="Listen now on YouTube and Spotify"
          >
            <span className="relative">
              <span className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#A88BEB]/40 to-[#F8CEEC]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <PlayCircle className="relative z-10 h-5 w-5 text-[#A88BEB]" />
            </span>
            <span className="relative z-10">Listen Now</span>
          </a>
        </div>
      </div>

      <FloatingParticles />
    </section>
  );
}

function FloatingParticles() {
  const items = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((_, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{
            left: `${(i * 57) % 100}%`,
            top: `${(i * 31) % 100}%`,
            background: 'radial-gradient(circle at 30% 30%, #F8CEEC, #A88BEB)',
            filter: 'blur(0.5px)',
            opacity: 0.5,
            animation: `floatY ${9 + (i % 5)}s ease-in-out ${(i % 7) * 0.6}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatY {
          0%,100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-16px) translateX(8px); }
        }
      `}</style>
    </div>
  );
}
