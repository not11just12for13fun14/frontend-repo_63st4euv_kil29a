import React from 'react';
import { Youtube, Spotify, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#A88BEB]/20 via-[#F8CEEC]/10 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-8 md:p-10 backdrop-blur-2xl shadow-[0_10px_50px_rgba(168,139,235,0.28)]">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900/90">Contact</h2>
          <p className="mt-2 text-gray-700/90">Stay in touch and follow our journey.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Social href="https://www.youtube.com/@anjaneyamusicstudio" label="YouTube">
              <Youtube className="h-5 w-5" />
            </Social>
            <Social href="https://open.spotify.com" label="Spotify">
              <Spotify className="h-5 w-5" />
            </Social>
            <Social href="https://www.instagram.com/anjaneyamusicstudio" label="Instagram">
              <Instagram className="h-5 w-5" />
            </Social>
            <Social href="mailto:contact@anjaneyax.com" label="Email">
              <Mail className="h-5 w-5" />
            </Social>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white/60 p-4 text-gray-900/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(168,139,235,0.22)] hover:shadow-[0_12px_45px_rgba(248,206,236,0.45)] transition-all"
      aria-label={label}
    >
      <span className="relative">
        <span className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#A88BEB]/40 to-[#F8CEEC]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#A88BEB] to-[#F8CEEC]">
          {children}
        </span>
      </span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
