import React from 'react';
import HeroSquiggles from '../components/layout/HeroSquiggles';

const values = [
  {
    title: 'Transparency',
    description: 'We believe merchants deserve to know exactly what they\'re paying. With FlowPoint, the answer is nothing. No hidden fees, no fine print, no surprises.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Speed',
    description: 'Time is money, and we take that seriously. Our under-24-hour setup and instant USD settlement mean merchants never wait for their revenue.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Accessibility',
    description: 'Crypto payments shouldn\'t require a crypto education. We make it simple for any merchant to accept digital currency from day one.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <HeroSquiggles />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Meet the Founder
          </h1>
          <p className="font-syne font-semibold text-xl text-gold mb-3">Yusef Nahshon</p>
          <p className="font-dm text-base text-white/60 max-w-lg mx-auto">
            Empowering entrepreneurs to embrace the future of payments without leaving behind the systems that already work.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo Placeholder */}
            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full rounded-2xl bg-offwhite border border-gray-100 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-navy/5" />
              <div className="text-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-navy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="font-syne font-semibold text-sm text-navy/40">Yusef Nahshon</p>
                <p className="font-dm text-xs text-gray-400">Founder & CEO</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="font-syne font-bold text-2xl md:text-3xl text-navy">Our Mission</h2>
              <p className="font-dm text-base text-gray-500 leading-relaxed">
                FlowPoint Systems was founded to redefine how brick-and-mortar businesses move money. We saw an industry where merchants were losing thousands every year to processing fees, alongside a technology (crypto) that could eliminate those fees entirely. The problem was that no one had made it simple enough for everyday businesses to use.
              </p>
              <p className="font-dm text-base text-gray-500 leading-relaxed">
                Security and transparency are at the core of everything we build. Every transaction is processed through bank-grade infrastructure with 256-bit encryption and multi-signature wallets. Merchants see exactly what's happening with their money at every step.
              </p>
              <p className="font-dm text-base text-gray-500 leading-relaxed">
                We're building the infrastructure to power the next generation of digital commerce, starting with the businesses that serve their communities face to face, every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-navy">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(val => (
              <div key={val.title} className="bg-white rounded-xl p-7 border border-gray-100">
                <div className="text-gold mb-4">{val.icon}</div>
                <h3 className="font-syne font-semibold text-base text-navy mb-2">{val.title}</h3>
                <p className="font-dm text-sm text-gray-500 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}