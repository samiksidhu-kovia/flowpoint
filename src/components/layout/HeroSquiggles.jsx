import React from 'react';

export default function HeroSquiggles() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 400"
      style={{ transform: 'rotate(-35deg)', transformOrigin: 'center' }}
    >
      {/* Line 1 — long sweeping curve, top-left to right */}
      <path
        d="M-100,80 C200,20 400,160 700,90 C950,30 1100,140 1540,60"
        fill="none"
        stroke="rgba(179,138,74,0.10)"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      {/* Line 2 — mid-section soft S-curve */}
      <path
        d="M-60,200 C150,150 350,270 600,210 C830,155 1020,280 1300,200 C1380,178 1430,190 1540,175"
        fill="none"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth="2.2"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      {/* Line 3 — lower gentle wave */}
      <path
        d="M0,320 C250,280 450,360 750,310 C1000,265 1200,340 1540,295"
        fill="none"
        stroke="rgba(179,138,74,0.07)"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      {/* Line 4 — short accent near top-right */}
      <path
        d="M900,30 C1000,10 1150,70 1300,40 C1400,20 1480,50 1540,35"
        fill="none"
        stroke="rgba(255,255,255,0.03)"
        strokeWidth="1.8"
        strokeLinecap="round"
        filter="url(#glow)"
      />

      <defs>
        <filter id="glow" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}