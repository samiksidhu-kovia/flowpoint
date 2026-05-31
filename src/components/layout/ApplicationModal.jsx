import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const revenueOptions = [
  'Under $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000 – $250,000',
  '$250,000+',
];

const businessTypes = [
  'Restaurant / Café',
  'Retail Store',
  'Professional Services',
  'Health & Wellness',
  'Hospitality',
  'Automotive',
  'Other',
];

const processors = [
  'Square',
  'Clover',
  'Toast',
  'Stripe',
  'PayPal / Venmo',
  'Other',
  'Not sure',
];

export default function ApplicationModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    revenue: '',
    businessType: '',
    processor: '',
    feePercent: '',
    acknowledge: false,
  });

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const canSubmit = form.phone && form.email && form.revenue && form.businessType && form.processor && form.feePercent && form.acknowledge;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        businessName: '', contactName: '', phone: '', email: '',
        revenue: '', businessType: '', processor: '', feePercent: '', acknowledge: false,
      });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="bg-navy px-6 py-6 rounded-t-2xl">
              <button onClick={handleClose} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              <h2 className="font-syne font-bold text-xl text-white">Start Accepting Crypto Today</h2>
              <p className="font-dm text-sm text-white/60 mt-1">Complete the form below and our team will contact you within 24 hours.</p>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-syne font-bold text-lg text-navy mb-2">Application Received</h3>
                  <p className="font-dm text-sm text-gray-500 max-w-xs mx-auto">
                    Thank you for your interest in FlowPoint Systems. Our onboarding team will reach out within 24 hours.
                  </p>
                  <button onClick={handleClose} className="mt-6 bg-gold text-white font-dm font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-gold/90 transition-colors">
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <InputField label="Business Name" value={form.businessName} onChange={v => update('businessName', v)} />
                  <InputField label="Contact Name" value={form.contactName} onChange={v => update('contactName', v)} />
                  <InputField label="Phone Number" value={form.phone} onChange={v => update('phone', v)} required />
                  <InputField label="Business Email" type="email" value={form.email} onChange={v => update('email', v)} required />
                  <SelectField label="Monthly Revenue Range" value={form.revenue} onChange={v => update('revenue', v)} options={revenueOptions} required />
                  <SelectField label="Business Type" value={form.businessType} onChange={v => update('businessType', v)} options={businessTypes} required />
                  <SelectField label="Current Payment Processor" value={form.processor} onChange={v => update('processor', v)} options={processors} required />
                  <InputField label="Current Processing Fee %" value={form.feePercent} onChange={v => update('feePercent', v)} placeholder="e.g. 2.9" required />

                  <label className="flex items-start gap-3 pt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.acknowledge}
                      onChange={e => update('acknowledge', e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold"
                    />
                    <span className="font-dm text-xs text-gray-500 leading-relaxed">
                      I acknowledge that by submitting this application, I consent to being contacted by FlowPoint Systems regarding merchant onboarding services.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full bg-gold text-white font-dm font-semibold text-sm py-3 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                  >
                    SUBMIT APPLICATION
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function InputField({ label, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block font-dm text-xs font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full font-dm text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options, required }) {
  return (
    <div>
      <label className="block font-dm text-xs font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full font-dm text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all bg-white"
      >
        <option value="">Select...</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}