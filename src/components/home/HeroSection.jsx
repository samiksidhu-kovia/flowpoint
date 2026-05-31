import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PaymentTerminal from './PaymentTerminal';

const stats = [
  { value: '500+', label: 'Merchants Onboarded' },
  { value: '$2M+', label: 'Processed Monthly' },
  { value: '<24hr', label: 'Average Setup' },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden" style={{
      backgroundImage: 'url(https://media.base44.com/images/public/6a1a86055c171c0a5efc82d4/4cac66102_image.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/75" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6">
              <span className="font-dm text-xs font-medium tracking-[0.2em] text-gold uppercase">
                Merchant Payment Solutions
              </span>
            </div>
            <h1 className="font-syne font-bold text-3xl md:text-4xl lg:text-[44px] text-white leading-[1.15] mb-5">
              Stop Paying Processing Fees.
            </h1>
            <p className="font-dm text-base text-white/60 leading-relaxed mb-8 max-w-lg">
              Accept crypto and card payments while your customers cover the transaction cost. FlowPoint works alongside your existing POS system — nothing changes on your end.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <button
                onClick={() => navigate('/get-started')}
                className="bg-gold text-white font-dm font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-gold/90 transition-colors"
              >
                Get Started
              </button>
              <Link
                to="/how-it-works"
                className="border border-white/20 text-white font-dm font-medium text-sm px-7 py-3.5 rounded-lg hover:bg-white/5 transition-colors text-center"
              >
                See How It Works
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map(stat => (
                <div key={stat.label}>
                  <p className="font-syne font-bold text-xl lg:text-2xl text-gold">{stat.value}</p>
                  <p className="font-dm text-xs text-white/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Terminal */}
          <div className="flex justify-center lg:justify-end">
            <PaymentTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}