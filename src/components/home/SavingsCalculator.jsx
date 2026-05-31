import React, { useState, useMemo } from 'react'; // useMemo still used for tier, annualSavings, traditionalMonthly
import { useNavigate } from 'react-router-dom';

const feeOptions = [2, 3, 4, 5];

function getTier(revenue) {
  if (revenue < 10000) return 'FlowPoint Start';
  if (revenue <= 25000) return 'FlowPoint Grow';
  if (revenue <= 75000) return 'FlowPoint Pro';
  return 'FlowPoint Enterprise';
}

const formatCurrency = (val) => {
  if (val >= 1000) {
    return '$' + val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  return '$' + val.toFixed(0);
};

export default function SavingsCalculator() {
  const navigate = useNavigate();
  const [revenue, setRevenue] = useState(10000);
  const [feePercent, setFeePercent] = useState(3);

  const traditionalMonthly = useMemo(() => revenue * (feePercent / 100), [revenue, feePercent]);
  const monthlySavings = traditionalMonthly;
  const annualSavings = useMemo(() => monthlySavings * 12, [monthlySavings]);
  const tier = useMemo(() => getTier(revenue), [revenue]);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-navy">
            How much are you losing to processing fees?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left - Inputs */}
            <div>
              <label className="block font-dm text-sm font-medium text-gray-500 mb-3">
                Monthly Revenue
              </label>
              <p className="font-syne font-bold text-3xl text-navy mb-6">
                {formatCurrency(revenue)}
              </p>
              <input
                type="range"
                min={1000}
                max={100000}
                step={1000}
                value={revenue}
                onChange={e => setRevenue(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-gray-200 accent-gold"
                style={{
                  background: `linear-gradient(to right, #B38A4A ${((revenue - 1000) / 99000) * 100}%, #e5e7eb ${((revenue - 1000) / 99000) * 100}%)`
                }}
              />
              <div className="flex justify-between mt-2">
                <span className="font-dm text-xs text-gray-400">$1,000</span>
                <span className="font-dm text-xs text-gray-400">$100,000</span>
              </div>

              {/* Fee Percent Pills */}
              <div className="mt-8">
                <label className="block font-dm text-sm font-medium text-gray-500 mb-3">
                  Current Processing Fee
                </label>
                <div className="flex gap-2">
                  {feeOptions.map(fee => (
                    <button
                      key={fee}
                      onClick={() => setFeePercent(fee)}
                      className={`font-dm text-sm px-5 py-2 rounded-full transition-all ${
                        feePercent === fee
                          ? 'bg-navy text-white font-medium'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {fee}%
                    </button>
                  ))}
                </div>
              </div>


            </div>

            {/* Right - Results */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="font-dm text-sm text-gray-500">Monthly fees with traditional processing</span>
                <span className="font-syne font-bold text-lg text-red-500">{formatCurrency(traditionalMonthly)}</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="font-dm text-sm text-gray-500">Monthly fees with FlowPoint</span>
                <span className="font-syne font-bold text-lg text-gold">$0</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="font-dm text-sm text-gray-500">Monthly savings</span>
                <span className="font-syne font-bold text-lg" style={{ color: '#22C55E' }}>{formatCurrency(monthlySavings)}</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="font-dm text-sm text-gray-500">Annual savings</span>
                <span className="font-syne font-bold text-xl text-navy">{formatCurrency(annualSavings)}</span>
              </div>

              {/* Tier recommendation */}
              <div className="flex items-center gap-3 py-3">
                <span className="font-dm text-sm text-gray-400">Recommended for you:</span>
                <span className="bg-gold text-white font-dm text-xs font-semibold px-3 py-1 rounded-full">{tier}</span>
              </div>

              {/* Highlight Block */}
              <div className="bg-navy rounded-xl p-6 mt-2 border-2 border-gold/60" style={{ boxShadow: '0 0 40px rgba(179,138,74,0.5), 0 0 80px rgba(179,138,74,0.2)' }}>
                <p className="font-dm text-xs text-white/50 uppercase tracking-wider mb-1">Estimated Annual Savings With FlowPoint</p>
                <p className="font-syne font-bold text-2xl lg:text-3xl text-gold">{formatCurrency(annualSavings)}</p>
                <p className="font-dm text-xs text-white/40 mt-1">per year</p>
              </div>

              <button
                onClick={() => navigate('/get-started')}
                className="w-full bg-gold text-white font-dm font-semibold text-sm py-3.5 rounded-lg hover:bg-gold/90 transition-colors mt-4"
              >
                Apply for Merchant Onboarding
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}