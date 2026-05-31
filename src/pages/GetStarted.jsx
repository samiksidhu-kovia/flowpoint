import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSquiggles from '../components/layout/HeroSquiggles';

const TOTAL_STEPS = 5;

const stepLabels = [
  'Business Information',
  'Location Details',
  'Business Profile',
  'Payment Goals',
  'Almost Done',
];

const industryOptions = [
  'Restaurant / Food Service',
  'Retail Store',
  'Convenience Store',
  'Smoke or Vape Shop',
  'Service Business',
  'Healthcare',
  'E-commerce',
  'Mobile or Pop-up Vendor',
  'Other',
];

const revenueOptions = [
  'Under $5,000',
  '$5,000 to $10,000',
  '$10,000 to $25,000',
  '$25,000 to $50,000',
  '$50,000 to $100,000',
  'Over $100,000',
];

const locationOptions = ['1', '2-3', '4-10', '10+'];

const goalOptions = [
  'Add crypto payments',
  'Reduce or eliminate processing fees',
  'Add card processing support',
  'Interested in a payment device later',
];

function StepIndicator({ current }) {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < current;
        const isActive = stepNum === current;
        return (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-dm font-semibold transition-all ${
                  isCompleted
                    ? 'bg-gold text-white'
                    : isActive
                    ? 'bg-gold text-white ring-4 ring-gold/20'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span className={`font-dm text-[10px] mt-1.5 hidden sm:block ${isActive ? 'text-gold font-medium' : 'text-gray-400'}`}>
                {stepLabels[i]}
              </span>
            </div>
            {i < TOTAL_STEPS - 1 && (
              <div className={`flex-1 h-px mx-2 mb-5 sm:mb-0 ${i + 1 < current ? 'bg-gold' : 'bg-gray-200'}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block font-dm text-xs font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
    </div>
  );
}

function TextInput({ value, onChange, placeholder, type = 'text', error }) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full font-dm text-sm border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all ${error ? 'border-red-400' : 'border-gray-200'}`}
    />
  );
}

function SelectInput({ value, onChange, options, placeholder, error }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className={`w-full font-dm text-sm border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all bg-white ${error ? 'border-red-400' : 'border-gray-200'}`}
    >
      <option value="">{placeholder || 'Select...'}</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  );
}

export default function GetStarted() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    // Step 1
    businessName: '', legalEntityName: '', contactName: '', phone: '', email: '',
    // Step 2
    address: '', city: '', state: '', zip: '', numLocations: '', hours: '',
    // Step 3
    industry: '', revenue: '', pos: '', processor: '',
    // Step 4
    goals: [], cryptoUsage: '',
    // Step 5
    cannabis: '', ack1: false, ack2: false, ack3: false,
  });

  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: false }));
  };

  const toggleGoal = (goal) => {
    setForm(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!form.contactName) newErrors.contactName = true;
      if (!form.phone) newErrors.phone = true;
      if (!form.email) newErrors.email = true;
    }
    if (step === 2) {
      if (!form.address) newErrors.address = true;
      if (!form.city) newErrors.city = true;
      if (!form.state) newErrors.state = true;
      if (!form.zip) newErrors.zip = true;
    }
    if (step === 3) {
      if (!form.industry) newErrors.industry = true;
      if (!form.revenue) newErrors.revenue = true;
    }
    if (step === 5) {
      if (!form.cannabis) newErrors.cannabis = true;
      if (!form.ack1) newErrors.ack1 = true;
      if (!form.ack2) newErrors.ack2 = true;
      if (!form.ack3) newErrors.ack3 = true;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validateStep()) return;
    if (step < TOTAL_STEPS) {
      setStep(s => s + 1);
    } else {
      navigate('/confirmation');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <HeroSquiggles />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-3">
            Start Your FlowPoint Setup
          </h1>
          <p className="font-dm text-base text-white/60 max-w-lg mx-auto">
            Complete the form below and our onboarding team will review your information and be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-offwhite py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10">
            <StepIndicator current={step} />

            <h2 className="font-syne font-bold text-xl text-navy mb-6">{stepLabels[step - 1]}</h2>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <Field label="Business Name">
                  <TextInput value={form.businessName} onChange={v => update('businessName', v)} />
                </Field>
                <Field label="Legal Entity Name">
                  <TextInput value={form.legalEntityName} onChange={v => update('legalEntityName', v)} />
                </Field>
                <Field label="Owner or Contact Name" required>
                  <TextInput value={form.contactName} onChange={v => update('contactName', v)} error={errors.contactName} />
                </Field>
                <Field label="Phone Number" required>
                  <TextInput value={form.phone} onChange={v => update('phone', v)} type="tel" error={errors.phone} />
                </Field>
                <Field label="Email Address" required>
                  <TextInput value={form.email} onChange={v => update('email', v)} type="email" error={errors.email} />
                </Field>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-4">
                <Field label="Business Address" required>
                  <TextInput value={form.address} onChange={v => update('address', v)} error={errors.address} />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="City" required>
                    <TextInput value={form.city} onChange={v => update('city', v)} error={errors.city} />
                  </Field>
                  <Field label="State" required>
                    <TextInput value={form.state} onChange={v => update('state', v)} error={errors.state} />
                  </Field>
                </div>
                <Field label="ZIP Code" required>
                  <TextInput value={form.zip} onChange={v => update('zip', v)} error={errors.zip} />
                </Field>
                <Field label="Number of Locations">
                  <SelectInput value={form.numLocations} onChange={v => update('numLocations', v)} options={locationOptions} />
                </Field>
                <Field label="Hours of Operation">
                  <TextInput value={form.hours} onChange={v => update('hours', v)} placeholder="e.g. Mon-Fri 9am-6pm" />
                </Field>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4">
                <Field label="Industry" required>
                  <SelectInput value={form.industry} onChange={v => update('industry', v)} options={industryOptions} error={errors.industry} />
                </Field>
                <Field label="Estimated Monthly Revenue" required>
                  <SelectInput value={form.revenue} onChange={v => update('revenue', v)} options={revenueOptions} error={errors.revenue} />
                </Field>
                <Field label="Current POS System">
                  <TextInput value={form.pos} onChange={v => update('pos', v)} placeholder="e.g. Square, Clover, Toast" />
                </Field>
                <Field label="Current Payment Processor (if known)">
                  <TextInput value={form.processor} onChange={v => update('processor', v)} placeholder="Optional" />
                </Field>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div>
                <p className="font-dm text-sm text-gray-500 mb-5">Select all that apply</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {goalOptions.map(goal => {
                    const selected = form.goals.includes(goal);
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => toggleGoal(goal)}
                        className={`text-left px-5 py-4 rounded-xl border-2 transition-all font-dm text-sm leading-snug ${
                          selected
                            ? 'border-gold bg-gold/5 text-navy font-medium'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {goal}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <p className="font-dm text-xs font-medium text-gray-700 mb-1">Estimated Crypto Payment Usage</p>
                  <p className="font-dm text-xs text-gray-400 mb-3">Roughly what percentage of your customers do you think would pay with crypto?</p>
                  <div className="flex gap-2">
                    {['10%', '25%', '50%', '75%'].map(pct => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => update('cryptoUsage', form.cryptoUsage === pct ? '' : pct)}
                        className={`font-dm text-sm px-5 py-2 rounded-full transition-all ${
                          form.cryptoUsage === pct
                            ? 'border-gold bg-gold/5 text-navy font-medium border-2'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300 border-2'
                        }`}
                      >
                        {pct}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5 */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <p className="font-dm text-sm font-medium text-gray-700 mb-3">Do you sell cannabis or THC products? <span className="text-gold">*</span></p>
                  <div className="flex gap-3">
                    {['Yes', 'No'].map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => { update('cannabis', opt); }}
                        className={`flex-1 py-3 rounded-xl border-2 font-dm text-sm font-medium transition-all ${
                          form.cannabis === opt
                            ? 'border-gold bg-gold/5 text-navy'
                            : errors.cannabis
                            ? 'border-red-300 text-gray-500'
                            : 'border-gray-200 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {errors.cannabis && <p className="font-dm text-xs text-red-500 mt-1">Please select an option</p>}
                </div>

                <div className="space-y-4 pt-2">
                  {[
                    { key: 'ack1', text: 'I understand that customers pay the transaction fee at checkout under the FlowPoint model' },
                    { key: 'ack2', text: 'I understand that approval depends on processor and compliance review' },
                    { key: 'ack3', text: 'I understand that FlowPoint provides instant USD conversion and works with my existing POS' },
                  ].map(({ key, text }) => (
                    <label key={key} className={`flex items-start gap-3 cursor-pointer p-3 rounded-lg border transition-all ${errors[key] ? 'border-red-300 bg-red-50/50' : 'border-transparent'}`}>
                      <input
                        type="checkbox"
                        checked={form[key]}
                        onChange={e => update(key, e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold shrink-0"
                      />
                      <span className="font-dm text-sm text-gray-600 leading-relaxed">{text}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className={`flex gap-3 mt-8 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(s => s - 1)}
                  className="font-dm text-sm text-gray-500 px-6 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={handleContinue}
                className="bg-gold text-white font-dm font-semibold text-sm px-8 py-2.5 rounded-lg hover:bg-gold/90 transition-colors"
              >
                {step === TOTAL_STEPS ? 'Start My FlowPoint Setup' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}