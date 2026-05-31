import React from 'react';

const badges = [
  '256-bit Encryption',
  'Multi-Sig Wallets',
  'SOC 2 Compliant',
  'Bank-Grade Security',
];

const stats = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '<24hrs', label: 'Setup Time' },
  { value: '$2,400', label: 'Average Monthly Fee Savings' },
  { value: '+15%', label: 'Customer Growth' },
];

export default function SecuritySection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-navy">
            Built on bank-grade infrastructure
          </h2>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {badges.map(badge => (
            <div
              key={badge}
              className="flex items-center gap-2 bg-offwhite border border-gray-100 rounded-full px-5 py-2.5"
            >
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="font-dm text-sm font-medium text-navy">{badge}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-syne font-bold text-2xl lg:text-3xl text-gold">{stat.value}</p>
              <p className="font-dm text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}