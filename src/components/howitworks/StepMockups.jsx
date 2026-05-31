import React from 'react';

export function CustomerCheckoutMockup() {
  return (
    <div className="bg-white rounded-xl shadow-lg shadow-black/5 border border-gray-100 overflow-hidden w-full max-w-[260px] mx-auto">
      <div className="bg-navy px-6 py-3">
        <p className="font-dm text-xs text-white/60">Customer Checkout</p>
      </div>
      <div className="p-6 space-y-3">
        <MockInput label="Payment Method" value="Crypto" />
        <MockInput label="Transaction Fee" value="Customer Pays" />
        <MockInput label="Status" value="Processing" />
        <div className="pt-2">
          <div className="bg-gold text-white font-dm text-xs font-medium py-2.5 rounded-lg text-center">
            Confirm Payment
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConfigPanelMockup() {
  return (
    <div className="bg-white rounded-xl shadow-lg shadow-black/5 border border-gray-100 overflow-hidden max-w-[320px] mx-auto">
      <div className="bg-navy px-5 py-3">
        <p className="font-dm text-xs text-white/60">Payment Configuration</p>
      </div>
      <div className="p-5 space-y-4">
        <ToggleRow label="Customer Fee Coverage" active />
        <ToggleRow label="USD Auto-Settlement" active />
        <div className="border-t border-gray-100 pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-dm text-xs text-gray-400">Merchant Processing Cost</span>
            <span className="font-dm text-xs font-medium text-navy bg-offwhite px-3 py-1 rounded">$0.00</span>
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-dm text-xs text-green-700">Configuration complete</span>
        </div>
      </div>
    </div>
  );
}

function MockInput({ label, value }) {
  return (
    <div>
      <p className="font-dm text-[10px] text-gray-400 mb-1">{label}</p>
      <div className="border border-gray-200 rounded-lg px-3 py-2">
        <p className="font-dm text-xs text-navy">{value}</p>
      </div>
    </div>
  );
}

function ToggleRow({ label, active }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-dm text-xs text-gray-600">{label}</span>
      <div className={`w-9 h-5 rounded-full relative transition-colors ${active ? 'bg-gold' : 'bg-gray-200'}`}>
        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${active ? 'left-[18px]' : 'left-0.5'}`} />
      </div>
    </div>
  );
}