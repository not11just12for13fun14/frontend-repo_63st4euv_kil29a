import React from 'react';

const items = [
  {
    title: 'YouTube Playlist',
    url: 'https://www.youtube.com/embed?listType=playlist&list=PLbQqE0iP0eN3j6mS8Hq3qJjXjBLaDemo',
    type: 'youtube',
  },
  {
    title: 'Spotify Artist',
    url: 'https://open.spotify.com/embed/artist/31vH6kq3Qdemo',
    type: 'spotify',
  },
  {
    title: 'YouTube Track',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'youtube',
  },
];

export default function Music() {
  return (
    <section id="music" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900/90">Our Music</h2>
        <p className="mt-2 text-gray-700/90">Selections from our channels and platforms.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/60 bg-white/60 p-3 backdrop-blur-xl shadow-[0_10px_40px_rgba(168,139,235,0.22)] transition-transform hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                {item.type === 'youtube' ? (
                  <iframe
                    className="h-full w-full"
                    src={item.url}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <iframe
                    className="h-full w-full"
                    src={item.url}
                    title={item.title}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  />
                )}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800/90">{item.title}</span>
                <span className="text-xs text-[#A88BEB] group-hover:text-[#F8CEEC] transition-colors">Play</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <a
            href="https://linktr.ee/anjaneyamusicstudio"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#A88BEB] hover:text-[#F8CEEC] underline underline-offset-4"
          >
            Explore more on Linktree
          </a>
        </div>
      </div>
    </section>
  );
}
