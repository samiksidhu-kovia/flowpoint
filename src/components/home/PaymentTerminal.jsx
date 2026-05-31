import React from 'react';

export default function PaymentTerminal() {
  return (
    <div className="relative">
      {/* Main Terminal Card */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden w-full max-w-[340px] mx-auto">
        {/* Terminal Header */}
        <div className="bg-navy px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="font-dm text-xs text-white/70">Live Transaction</span>
          </div>
          <span className="font-dm text-[10px] text-white/40 tracking-wider uppercase">FlowPoint POS</span>
        </div>

        {/* Merchant Info */}
        <div className="px-5 pt-5 pb-3 border-b border-gray-100">
          <p className="font-dm text-xs text-gray-400 uppercase tracking-wider">Merchant</p>
          <p className="font-syne font-semibold text-navy text-sm mt-0.5">Mesa Coffee Co.</p>
        </div>

        {/* Amount */}
        <div className="px-5 py-5 text-center border-b border-gray-100">
          <p className="font-dm text-xs text-gray-400 mb-1">Transaction Amount</p>
          <p className="font-syne font-bold text-3xl text-navy">$47.50</p>
          <p className="font-dm text-xs text-gray-400 mt-2">
            ≈ 0.00072 BTC <span className="text-gray-300 mx-1">·</span> at $65,972.22
          </p>
        </div>

        {/* Settlement Details */}
        <div className="px-5 py-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-dm text-xs text-gray-400">Settlement</span>
            <span className="font-dm text-xs font-medium text-navy flex items-center gap-1.5">
              <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              USD (instant)
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-dm text-xs text-gray-400">Processing Fee</span>
            <span className="font-dm text-xs font-semibold text-green-600">0.00%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-dm text-xs text-gray-400">You Receive</span>
            <span className="font-syne font-bold text-sm text-navy">$47.50</span>
          </div>
        </div>

        {/* Confirmation Button */}
        <div className="px-5 pb-5">
          <div className="bg-green-500 text-white font-dm font-medium text-sm py-3 px-6 rounded-xl text-center flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Customer Payment Confirmed
          </div>
        </div>
      </div>

      {/* Floating Settlement Card */}
      <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-xl shadow-lg shadow-black/10 px-4 py-3 flex items-center gap-3 border border-gray-100">
        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-dm text-xs font-semibold text-green-600">+$47.50 USD Deposited</p>
          <p className="font-dm text-[10px] text-gray-400">Settled to your account</p>
        </div>
      </div>
    </div>
  );
}