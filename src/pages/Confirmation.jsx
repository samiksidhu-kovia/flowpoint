import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <section className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* Gold checkmark icon */}
        <div className="flex justify-center mb-8">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" stroke="#B38A4A" strokeWidth="2.5" />
            <path d="M20 33l9 9 16-17" stroke="#B38A4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">
          Your FlowPoint Setup Request Has Been Received.
        </h1>
        <p className="font-dm text-base text-white/60 leading-relaxed mb-10">
          Our onboarding team will review your information and contact you to verify details, confirm eligibility, and begin activation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gold text-white font-dm font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-gold/90 transition-colors"
          >
            Return Home
          </Link>
          <Link
            to="/referrals"
            className="border border-white/30 text-white font-dm font-medium text-sm px-8 py-3.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            Refer Another Business
          </Link>
        </div>
      </div>
    </section>
  );
}