'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Hourly Relief',
    subtitle: 'Diagnostic visits & family errands',
    idealFor: 'OPD consults, chemotherapy, dialysis, or temporary family relief.',
    commitment: 'Minimum 3 hours',
    rate: 'Flexible Hourly',
    features: [
      'Immediate hospital or clinic accompaniment',
      'Wheelchair handling & queue navigation',
      'Medical report handling & summary',
      'Door-to-door transport escort',
    ],
    highlight: false,
  },
  {
    name: '12-Hour Shift',
    subtitle: 'Dedicated Day or Night shift',
    idealFor: 'Intensive overnight monitoring or full-day hospital bedside support.',
    commitment: 'Day (8am - 8pm) or Night (8pm - 8am)',
    rate: 'Most Popular',
    features: [
      'Continuous bedside observation',
      'Assisted bathroom & hygiene mobility',
      'Medication administration logging',
      'Real-time WhatsApp updates for family',
      'Nurse call coordination',
    ],
    highlight: true,
  },
  {
    name: '24/7 Full Recovery',
    subtitle: 'Round-the-clock care rotation',
    idealFor: 'ICU step-down, joint replacement recovery, or post-stroke rehabilitation.',
    commitment: '2 attendants on 12h rotation',
    rate: 'Comprehensive',
    features: [
      'Unbroken 24-hour bedside presence',
      'Zero attendant fatigue (fresh 12h shifts)',
      'Bedbound turning & pressure sore prevention',
      'Daily nursing supervisor check-in',
      'Priority emergency attendant replacement',
    ],
    highlight: false,
  },
];

export default function PlansSection({ onSelectPlan }) {
  return (
    <section id="plans" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-forest-700">
            Transparent Concierge Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-stone-900 mt-2 tracking-tight">
            Predictable care commitments with zero hidden fees.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
            Choose the attendance schedule that best fits your loved one&apos;s medical needs. All plans include vetted attendants, supervisor oversight, and seamless replacement guarantees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                p.highlight
                  ? 'bg-forest-900 text-sand-50 shadow-elevated border-2 border-forest-700'
                  : 'bg-sand-50 text-stone-900 border border-stone-200/80 hover:shadow-premium'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-sand-200 text-forest-950 font-bold text-[11px] tracking-wider uppercase border border-sand-300">
                  Recommended for Hospital Stays
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-editorial font-bold tracking-tight">
                    {p.name}
                  </h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold uppercase ${
                    p.highlight ? 'bg-forest-800 text-sand-200' : 'bg-stone-200 text-stone-700'
                  }`}>
                    {p.rate}
                  </span>
                </div>

                <p className={`text-xs mb-6 ${p.highlight ? 'text-sand-300' : 'text-stone-500'}`}>
                  {p.subtitle}
                </p>

                <p className={`text-sm mb-6 pb-6 border-b leading-relaxed ${
                  p.highlight ? 'border-forest-800 text-sand-200' : 'border-stone-200 text-stone-600'
                }`}>
                  {p.idealFor}
                </p>

                <div className="space-y-3 mb-8">
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs">
                      <Check size={16} className={`shrink-0 mt-0.5 ${p.highlight ? 'text-sand-300' : 'text-forest-700'}`} />
                      <span className={p.highlight ? 'text-sand-100' : 'text-stone-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className={`text-xs font-medium mb-4 ${p.highlight ? 'text-sand-300' : 'text-stone-500'}`}>
                  Shift: <span className="font-semibold">{p.commitment}</span>
                </div>

                <a
                  href="#inquire"
                  onClick={() => onSelectPlan && onSelectPlan(p.name)}
                  className={`w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full font-medium text-sm transition-all duration-200 ${
                    p.highlight
                      ? 'bg-sand-50 text-forest-950 hover:bg-white shadow-premium'
                      : 'bg-forest-900 text-sand-50 hover:bg-forest-800'
                  }`}
                >
                  <span>Select {p.name}</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
