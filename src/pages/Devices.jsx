import React, { useState, useRef } from 'react';
import HeroSquiggles from '../components/layout/HeroSquiggles';

const devices = [
  {
    id: 'standard',
    name: 'Standard Crypto Only Terminal',
    price: '$230',
    image: 'https://media.base44.com/images/public/6a1a86055c171c0a5efc82d4/be19b1d96_image.png',
    bestFor: ['Pop-ups', 'Mobile vendors', 'Farmers markets', 'Small merchants', 'Crypto-only locations'],
    features: [
      'Basic crypto payment terminal',
      'WiFi / Bluetooth / 4G SIM capability',
      '3200mAh battery',
      'No receipt printer',
    ],
  },
  {
    id: 'nexgo-n82',
    name: 'NexGo N82',
    price: '$382',
    image: 'https://media.base44.com/images/public/6a1a86055c171c0a5efc82d4/2619497ba_image.png',
    bestFor: ['Convenience stores', 'Restaurants', 'Smoke and vape shops', 'Retail stores', 'Merchants needing printed receipts'],
    features: [
      'Built-in receipt printer',
      '5200mAh battery',
      'Smart POS functionality',
    ],
  },
  {
    id: 'pax-a920max',
    name: 'PAX A920MAX',
    price: '$507',
    image: 'https://media.base44.com/images/public/6a1a86055c171c0a5efc82d4/6733b809c_image.png',
    bestFor: ['High-volume merchants', 'Premium checkout environments', 'Retail counters', 'Full card-present capability'],
    features: [
      '6-inch touchscreen',
      '4G, WiFi, Bluetooth',
      'Contactless, Chip, Swipe',
      'Built-in printer',
      '2500mAh battery',
    ],
  },
  {
    id: 'pax-a6630',
    name: 'PAX A6630',
    price: '$497',
    image: 'https://media.base44.com/images/public/6a1a86055c171c0a5efc82d4/d4bf13e31_image.png',
    bestFor: ['Flexible smart terminal needs', 'Card-present support', 'Mid to high-volume merchants'],
    features: [
      '6.5-inch screen',
      'No receipt printer',
      'Chip, Contactless NFC, Swipe',
      '6000mAh battery',
      'SIM, GPS, WiFi, Bluetooth',
    ],
  },
  {
    id: 'nexgo-n6',
    name: 'NexGo N6',
    price: '$382',
    image: 'https://media.base44.com/images/public/6a1a86055c171c0a5efc82d4/b0dd6d6b4_image.png',
    bestFor: ['Compact checkout setups', 'Mobile merchants', 'Small counters', 'No receipt printing needed'],
    features: [
      '5-inch screen',
      'No receipt printer',
      '3000mAh battery',
      'Chip, Swipe, Contactless',
      'WiFi, GPS, Bluetooth, Cellular',
    ],
  },
];

const tierTable = [
  { tier: 'FlowPoint Start', devices: 'Compatible phone or app setup / Standard Crypto Only Terminal' },
  { tier: 'FlowPoint Grow', devices: 'NexGo N82 / NexGo N6' },
  { tier: 'FlowPoint Pro', devices: 'PAX A920MAX / PAX A6630' },
  { tier: 'FlowPoint Enterprise', devices: 'Custom device recommendation based on location count, volume, and checkout structure' },
];

export default function Devices() {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ fullName: '', businessName: '', email: '', phone: '', device: '', quantity: 1, notes: '' });
  const formRef = useRef(null);

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSelectDevice = (deviceName) => {
    setSelectedDevice(deviceName);
    setForm(prev => ({ ...prev, device: deviceName }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <HeroSquiggles />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="font-dm text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Payment Hardware
          </span>
          <h1 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-4">
            Need Dedicated Payment Hardware?
          </h1>
          <p className="font-dm text-base text-white/60 max-w-2xl mx-auto">
            Many merchants can start with a compatible phone or app-based setup. For businesses that need dedicated checkout hardware, receipt printing, countertop use, or multiple devices, FlowPoint offers payment device options designed for different business environments.
          </p>
        </div>
      </section>

      {/* Device Cards */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-dm text-xs font-medium tracking-[0.2em] text-gold uppercase">Available Devices</span>
            <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-navy mt-3">
              Choose the Right Device for Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.map(device => (
              <div key={device.id} className="bg-white border border-gray-100 rounded-[10px] p-7 flex flex-col">
                {/* Device image */}
                <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center mb-5 overflow-hidden">
                  <img src={device.image} alt={device.name} className="h-full w-full object-contain" />
                </div>

                <h3 className="font-dm font-bold text-lg text-navy mb-3">{device.name}</h3>

                <div className="mb-3">
                  <span className="font-dm text-[11px] font-medium tracking-[0.15em] text-gold uppercase">Best for:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {device.bestFor.map(tag => (
                      <span key={tag} className="font-dm text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>

                <hr className="border-gray-100 my-3" />

                <ul className="space-y-2 mb-5 flex-1">
                  {device.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      <span className="font-dm text-[13px] text-gray-500">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <p className="font-dm text-xs text-gray-400">Starting at</p>
                  <p className="font-syne font-bold text-[22px] text-navy">{device.price}</p>
                </div>

                <button
                  onClick={() => handleSelectDevice(device.name)}
                  className="w-full bg-gold text-white font-dm font-semibold text-sm py-2.5 rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Select This Device
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Table */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-dm text-xs font-medium tracking-[0.2em] text-gold uppercase">Device Recommendations</span>
            <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-navy mt-3">
              Which Device Fits Your Setup Tier?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {tierTable.map((row, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-5">
                <span className="font-dm font-bold text-sm text-navy min-w-[180px]">{row.tier}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="font-dm text-sm text-gray-500">{row.devices}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Request Form */}
      <section className="bg-offwhite py-20 lg:py-28" ref={formRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-dm text-xs font-medium tracking-[0.2em] text-gold uppercase">Request a Device</span>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-navy mt-3 mb-3">
              Submit Your Device Request
            </h2>
            <p className="font-dm text-sm text-gray-500 max-w-xl mx-auto">
              Select your device and submit your request below. Our team will confirm availability, pricing, and setup requirements and follow up within one business day. Payment and fulfillment details will be confirmed directly by the FlowPoint team.
            </p>
          </div>

          <div className="max-w-[640px] mx-auto bg-white border border-gray-100 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-dm text-sm text-gray-600 leading-relaxed">
                  Request received. Our team will be in touch within one business day to confirm your device details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormField label="Full Name" required>
                  <FormInput value={form.fullName} onChange={v => update('fullName', v)} required />
                </FormField>
                <FormField label="Business Name" required>
                  <FormInput value={form.businessName} onChange={v => update('businessName', v)} required />
                </FormField>
                <FormField label="Email" required>
                  <FormInput type="email" value={form.email} onChange={v => update('email', v)} required />
                </FormField>
                <FormField label="Phone" required>
                  <FormInput type="tel" value={form.phone} onChange={v => update('phone', v)} required />
                </FormField>
                <FormField label="Device Selection" required>
                  <select
                    value={form.device}
                    onChange={e => update('device', e.target.value)}
                    required
                    className="w-full font-dm text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all bg-white"
                  >
                    <option value="">Select a device...</option>
                    {devices.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                  </select>
                </FormField>
                <FormField label="Quantity">
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={form.quantity}
                    onChange={e => update('quantity', e.target.value)}
                    className="w-full font-dm text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                  />
                </FormField>
                <FormField label="Additional Notes">
                  <textarea
                    value={form.notes}
                    onChange={e => update('notes', e.target.value)}
                    rows={3}
                    className="w-full font-dm text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                  />
                </FormField>
                <p className="font-dm text-xs text-gray-400 leading-relaxed">
                  Submitting this form does not complete a purchase. Our team will contact you to confirm device availability, pricing, and payment details.
                </p>
                <button
                  type="submit"
                  className="w-full bg-gold text-white font-dm font-semibold text-sm py-3.5 rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Submit Device Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({ label, required, children }) {
  return (
    <div>
      <label className="block font-dm text-xs font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
    </div>
  );
}

function FormInput({ value, onChange, type = 'text', required }) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
      className="w-full font-dm text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
    />
  );
}