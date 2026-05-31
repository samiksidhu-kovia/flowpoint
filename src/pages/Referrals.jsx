import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSquiggles from '../components/layout/HeroSquiggles';

const bullets = [
  'Refer merchants in your network to FlowPoint Systems',
  'For every merchant you refer who activates and begins processing, you earn a share of their processing account revenue for the first 6 months',
  'The more merchants you refer, the more you earn',
  'Ideal for agencies, business consultants, merchant networks, and community organizations',
];

const stats = [
  { value: '6 Months', label: 'Referral Window' },
  { value: '24hrs', label: 'Average Setup' },
];

const referrerTypes = [
  {
    title: 'Agencies and Consultants',
    description: 'If you advise businesses on operations, payments, or technology, refer them to FlowPoint and earn revenue share for their first 6 months of processing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
  {
    title: 'Business Networks',
    description: 'Chambers of commerce, BNI groups, and merchant associations can help their members save money and earn referral rewards in the process.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-2.956 9.054 9.054 0 00-3.741-2.956M18 18.72a9.094 9.094 0 01-3.741-2.956m0 0a9.054 9.054 0 00-3.741 2.956M14.259 15.764a9.055 9.055 0 00-4.518 0M9.741 18.72A9.094 9.094 0 016 15.764m0 0a9.054 9.054 0 013.741-2.956m0 0a5.25 5.25 0 10-7.482 0M15 9.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Existing Merchants',
    description: 'Already using FlowPoint? Refer other business owners you know. When they onboard, you earn revenue share for their first 6 months of processing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
];

export default function Referrals() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <HeroSquiggles />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="font-dm text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Partner Program
          </span>
          <h1 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-4">
            Earn Rewards by Referring Merchants
          </h1>
          <p className="font-dm text-base text-white/60 max-w-xl mx-auto">
            Help businesses eliminate processing fees and earn revenue share for every merchant you bring to FlowPoint.
          </p>
        </div>
      </section>

      {/* Main Referrals Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Bullets */}
            <div>
              <h2 className="font-syne font-bold text-2xl md:text-3xl text-navy mb-8">
                How the Referral Program Works
              </h2>
              <ul className="space-y-5">
                {bullets.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-dm text-base text-gray-600 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Card */}
            <div className="bg-offwhite border border-gray-100 rounded-2xl p-8">
              <h3 className="font-syne font-bold text-lg text-navy mb-3">Partner With FlowPoint</h3>
              <p className="font-dm text-sm text-gray-500 leading-relaxed mb-6">Help other businesses stop paying processing fees and earn revenue share from every merchant you bring to FlowPoint for their first 6 months of processing.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map(stat => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                    <p className="font-syne font-bold text-lg text-navy">{stat.value}</p>
                    <p className="font-dm text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/get-started')}
                className="w-full bg-gold text-white font-dm font-semibold text-sm py-3.5 rounded-lg hover:bg-gold/90 transition-colors"
              >
                Ask About Referrals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Refer */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-navy">
              Who Can Refer
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {referrerTypes.map(type => (
              <div key={type.title} className="bg-white rounded-xl p-7 border border-gray-100">
                <div className="text-gold mb-4">{type.icon}</div>
                <h3 className="font-syne font-semibold text-base text-navy mb-2">{type.title}</h3>
                <p className="font-dm text-sm text-gray-500 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}