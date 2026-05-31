import React, { useState } from 'react';

const features = [
  {
    title: 'No Competition With Cards',
    description: 'FlowPoint adds a new payment channel. It doesn\'t replace or compete with your existing credit card processing. It runs alongside it.',
    bullets: [
      'Your existing card terminal stays exactly as-is',
      'Customers choose crypto at checkout. You never have to push it',
      'Two revenue streams, one seamless experience',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Zero Processing Fees',
    description: 'Unlike traditional processors that charge 2–4% per transaction, FlowPoint charges merchants nothing. The small fee is absorbed by the customer at checkout.',
    bullets: [
      'Merchants keep 100% of every transaction',
      'No monthly fees, no hidden charges',
      'Avg. merchant saves $2,400/year vs. card processors',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Setup Under 24 Hours',
    description: 'From application to first transaction in less than a day. Our onboarding team handles configuration so you can focus on running your business.',
    bullets: [
      'Submit your application and go live same day',
      'Dedicated onboarding team does the heavy lifting',
      'No technical knowledge required from your staff',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Instant USD Conversion',
    description: 'Crypto payments are automatically converted to USD and deposited into your account. No volatility risk, no crypto wallets to manage.',
    bullets: [
      'Conversion happens at the moment of sale',
      'USD hits your bank account directly, with no crypto wallet required',
      'Bitcoin price swings never affect your bottom line',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>
    ),
  },
  {
    title: 'Use Your Existing Devices',
    description: 'No new hardware required. FlowPoint integrates with your current POS system, tablet, or phone. Keep the setup you already know.',
    bullets: [
      'Works with most major POS systems out of the box',
      'Staff training takes minutes, not days',
      'No costly hardware upgrades or vendor lock-in',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'Referral Income Opportunity',
    description: 'Earn rewards by referring other merchants to FlowPoint. Our partner program lets you build passive income while helping fellow businesses save.',
    bullets: [
      'Earn for every merchant you successfully refer',
      'Payouts are recurring, not one-time',
      'No cap on how many businesses you can refer',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-2.956 9.054 9.054 0 00-3.741-2.956M18 18.72a9.094 9.094 0 01-3.741-2.956m0 0a9.054 9.054 0 00-3.741 2.956M14.259 15.764a9.055 9.055 0 00-4.518 0M9.741 18.72A9.094 9.094 0 016 15.764m0 0a9.054 9.054 0 013.741-2.956m0 0a5.25 5.25 0 10-7.482 0M15 9.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function WhyFlowPoint() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const handleSelect = (i) => {
    if (i === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(i);
      setFading(false);
    }, 150);
  };

  const active = features[activeIndex];

  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-navy">
            Everything merchants hate about crypto. We already solved it.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: feature list */}
          <div className="overflow-hidden">
            {features.map((feature, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={feature.title}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left flex items-center gap-4 px-6 py-5 transition-all duration-200 border-b border-gray-100 last:border-b-0 relative ${
                    isActive ? 'bg-gold/5' : 'hover:bg-gray-50'
                  }`}
                >
                  {/* Active bar */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r transition-all duration-200 ${
                      isActive ? 'bg-gold' : 'bg-transparent'
                    }`}
                  />
                  <span
                    className={`font-dm text-sm transition-all duration-200 ${
                      isActive
                        ? 'text-navy font-semibold'
                        : 'text-gray-400 font-normal'
                    }`}
                  >
                    {feature.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div
            className="lg:sticky lg:top-28"
            style={{
              opacity: fading ? 0 : 1,
              transition: 'opacity 150ms ease',
            }}
          >
            <div className="text-gold mb-6">
              {React.cloneElement(active.icon, { className: 'w-12 h-12' })}
            </div>
            <h3 className="font-syne font-bold text-2xl text-navy mb-4">{active.title}</h3>
            <p className="font-dm text-base text-gray-500 leading-relaxed mb-6">{active.description}</p>
            <ul className="space-y-3">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-dm text-sm text-gray-600">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}