import React from 'react';
import { useNavigate } from 'react-router-dom';

const bullets = [
  'Limited onboarding spots available each month',
  'Setup completed within 24 hours',
  'Zero hidden fees of any kind',
  'Keep your existing payment system',
];

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-10">
          Ready to stop paying processing fees?
        </h2>

        <div className="bg-white/5 border border-gold/60 rounded-2xl p-8 lg:p-10 mb-8 shadow-[0_0_30px_rgba(179,138,74,0.2)]">
          <ul className="space-y-4 text-left max-w-md mx-auto">
            {bullets.map(b => (
              <li key={b} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-dm text-sm text-white/80">{b}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate('/get-started')}
            className="mt-8 bg-gold text-white font-dm font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-gold/90 transition-colors"
          >
            Get Started
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {['No setup fees', 'No monthly fees', 'No long-term contracts'].map(line => (
            <span key={line} className="font-dm text-xs text-white/40">{line}</span>
          ))}
        </div>
      </div>
    </section>
  );
}