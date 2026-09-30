'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, RefreshCw, Smartphone, Stethoscope } from 'lucide-react';
import Image from 'next/image';

const protocolSteps = [
  {
    step: '01',
    icon: Stethoscope,
    title: 'Clinical Ward Triage',
    desc: 'Our nursing supervisor speaks with the family to assess mobility level, post-surgical precautions, ward restrictions, and shifts needed.',
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Attendant Credentialing',
    desc: 'We assign a dedicated caregiver from our vetted pool—trained in aseptic hygiene, wheelchair handling, bedside dignity, and patient safety.',
  },
  {
    step: '03',
    icon: Smartphone,
    title: 'Digital Family Updates',
    desc: 'Receive shift check-in notifications, vitals logs, and doctor round summaries directly via WhatsApp so family members can rest with complete confidence.',
  },
  {
    step: '04',
    icon: RefreshCw,
    title: 'Guaranteed Continuity',
    desc: 'In the rare event an attendant falls ill or has a personal conflict, our reserve coordination network deploys a qualified replacement within 2 hours.',
  },
];

export default function HealthcareSection() {
  return (
    <section id="protocol" className="py-24 bg-sand-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Protocol Content */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-forest-700">
                The Care Protocol
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-stone-900 mt-2 tracking-tight">
                Setting the highest standard for bedside assistance.
              </h2>
              <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
                Hospital stays can be overwhelming for families managing jobs, children, and emotional distress. CareTaker replaces anxiety with structured, clinical-grade companionship.
              </p>
            </div>

            {/* Protocol Steps List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {protocolSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-subtle hover:border-forest-700/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-forest-700 bg-forest-50 px-2 py-1 rounded">
                      {item.step}
                    </span>
                    <item.icon size={18} className="text-stone-400" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-forest-900 text-sand-50">
              <ShieldCheck size={28} className="text-sand-300 shrink-0" />
              <p className="text-xs font-medium text-sand-100">
                All CareTaker attendants undergo rigorous background verification, police clearance, and medical health screening prior to hospital deployment.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Composite */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              
              {/* Primary Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated border border-stone-200 bg-stone-100">
                <Image
                  src="/healthcare-image1.jpg"
                  alt="Clinical care and attendant support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Offset Overlapping Badge Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 sm:-mt-12 sm:ml-12 relative p-6 rounded-3xl glass-panel shadow-premium max-w-sm"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-forest-800 text-sand-100 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-stone-900">Hospital Approved Protocol</h5>
                    <p className="text-[11px] text-stone-500">Adhering to Indian Medical Guidelines</p>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Attendants provide dedicated personal support, non-clinical patient mobility, and nourishment assistance—respecting physician and nursing autonomy.
                </p>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
