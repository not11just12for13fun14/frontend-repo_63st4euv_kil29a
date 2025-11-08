import React from 'react';

const photos = Array.from({ length: 6 }).map((_, i) => ({ id: i }));

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(248,206,236,0.35),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900/90">Studio Gallery</h2>
        <p className="mt-2 text-gray-700/90">A glimpse into our bright, glassy creative space.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/50 backdrop-blur-2xl shadow-[0_10px_40px_rgba(168,139,235,0.22)]">
              <div className="aspect-[4/3] w-full">
                <div className="h-full w-full bg-gradient-to-br from-[#A88BEB]/50 via-white/60 to-[#F8CEEC]/50" />
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
