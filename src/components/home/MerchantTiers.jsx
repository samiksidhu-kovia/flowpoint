import React from 'react';
import { useNavigate } from 'react-router-dom';

const tiers = [
  {
    name: 'FlowPoint Start',
    tag: 'SMALL BUSINESS',
    description: 'For small businesses, pop-ups, mobile vendors, and solo operators.',
    features: ['Crypto payment acceptance', 'Customer-paid transaction model', 'App-first setup', 'Standard onboarding'],
    featured: false,
  },
  {
    name: 'FlowPoint Grow',
    tag: 'ESTABLISHED',
    description: 'For established businesses processing consistent volume.',
    features: ['Everything in Start', 'Guided onboarding', 'Existing POS compatibility support', 'Crypto and card processing optimization', 'Referral eligibility'],
    featured: true,
  },
  {
    name: 'FlowPoint Pro',
    tag: 'HIGH-VOLUME',
    description: 'For high-volume businesses.',
    features: ['Everything in Grow', 'Priority onboarding', 'Multi-device planning', 'Dedicated setup coordination', 'Payment setup guidance'],
    featured: false,
  },
  {
    name: 'FlowPoint Enterprise',
    tag: 'MULTI-LOCATION',
    description: 'For multi-location or strategic accounts.',
    features: ['Custom onboarding', 'Multi-location planning', 'Flexible deployment strategy', 'Direct FlowPoint coordination'],
    featured: false,
  },
];

export default function MerchantTiers() {
  const navigate = useNavigate();

  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-navy">
            Choose the right tier for your business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map(tier => (
            <div
              key={tier.name}
              className={`rounded-xl p-6 flex flex-col ${
                tier.featured
                  ? 'bg-navy text-white relative'
                  : 'bg-white border border-gray-100'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gold text-white font-dm text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <span className={`font-dm text-[10px] font-medium uppercase tracking-wider mb-1 ${tier.featured ? 'text-gold mt-2' : 'text-gray-400'}`}>
                {tier.tag}
              </span>

              <h3 className={`font-syne font-bold text-base mb-2 ${tier.featured ? 'text-white' : 'text-navy'}`}>
                {tier.name}
              </h3>
              <p className={`font-dm text-sm leading-relaxed mb-6 ${tier.featured ? 'text-white/60' : 'text-gray-500'}`}>
                {tier.description}
              </p>

              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`font-dm text-sm ${tier.featured ? 'text-white/80' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/get-started')}
                className={`w-full font-dm font-medium text-sm py-2.5 rounded-lg transition-colors ${
                  tier.featured
                    ? 'bg-gold text-white hover:bg-gold/90'
                    : 'bg-gray-50 text-navy hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}