import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Tagline */}
          <div>
            <img src="https://media.base44.com/images/public/6a1a86055c171c0a5efc82d4/32c439de0_80657b57-5c37-4413-a1a7-b83de8bd0428.png" alt="FlowPoint Systems" className="h-12 w-auto mb-4" />
            <p className="font-dm text-sm text-white/60 leading-relaxed max-w-xs">
              Enabling brick-and-mortar merchants to accept crypto payments with zero processing fees.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-syne font-semibold text-sm tracking-wide mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Devices', path: '/devices' },
                { label: 'Referrals', path: '/referrals' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="font-dm text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-semibold text-sm tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3 font-dm text-sm text-white/60">
              <li>
                <a href="mailto:crypto@flowpointsys.com" className="hover:text-gold transition-colors">
                  crypto@flowpointsys.com
                </a>
              </li>
              <li className="leading-relaxed">
                Sheridan, WY 82801
              </li>
            </ul>
          </div>

          {/* Support Hours */}
          <div>
            <h4 className="font-syne font-semibold text-sm tracking-wide mb-4">Support Hours</h4>
            <p className="font-dm text-sm text-white/60 leading-relaxed">
              Monday–Friday<br />
              9AM–5PM EST
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-xs text-white/40">
            © {new Date().getFullYear()} FlowPoint Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-dm text-xs text-white/40 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="font-dm text-xs text-white/40 hover:text-gold transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}