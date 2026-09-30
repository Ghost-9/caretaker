'use client';

import { assetPath } from "@/lib/utils";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import StarburstIcon from './StarburstIcon';

export default function BentoShowcaseSection({ onSelectPlan }) {
  const handleChoose = (planName) => {
    if (onSelectPlan) onSelectPlan(planName);
    const formEl = document.getElementById('inquire');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plans" className="relative bg-[#FCFAF7] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Bento Grid Layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Large Dominant Card - CareTaker Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-[#FDF6E2] border border-[#F6E7B9] rounded-[36px] p-8 sm:p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[580px] sm:min-h-[640px] shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center space-x-2 text-amber-700/80 mb-3">
                <StarburstIcon className="w-5 h-5" fill="#D97706" />
                <span className="text-[11px] font-bold tracking-widest uppercase">Essential Foundation</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
                CareTaker<br />Starter
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-stone-700 max-w-sm leading-relaxed uppercase tracking-wider font-medium">
                Essential personal bedside care, morning and evening routine assistance, medication compliance, and daily vitality check-ins.
              </p>

              <button
                onClick={() => handleChoose('Starter (4-Hour)')}
                className="mt-6 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-amber-800 hover:border-amber-800 transition-colors"
              >
                <span>Explore Protocol</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Packaging Mockup */}
            <div className="relative mt-8 sm:mt-12 flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-80 md:w-88 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={assetPath("/caretaker-starter-pouch.jpg")}
                  alt="CareTaker Starter Apothecary Formulation"
                  width={380}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Stack of 3 Distinct Pastel Cards */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Card 2: CareTaker Balance (Stone Container) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F5F5F4] border border-stone-200/90 rounded-[36px] p-8 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-stone-500 mb-2">
                  <StarburstIcon className="w-4 h-4" fill="#78716C" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Daily Sustained Protocol</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
                  CareTaker Balance
                </h3>
                <p className="mt-3 text-xs text-stone-600 leading-relaxed uppercase tracking-wider font-medium max-w-xs">
                  Dedicated 12-hour continuous bedside presence with mobility support, dietary oversight, and clinical communication.
                </p>
                <button
                  onClick={() => handleChoose('12-Hour Shift')}
                  className="mt-5 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 transition-colors"
                >
                  <span>Explore Protocol</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>

              <div className="w-44 sm:w-48 shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={assetPath("/caretaker-balance-pouch.jpg")}
                  alt="CareTaker Balance Formula"
                  width={240}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Card 3: CareTaker Performance (Pale Sage Container) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#E8F1E5] border border-[#D2E2CF] rounded-[36px] p-8 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-emerald-800/80 mb-2">
                  <StarburstIcon className="w-4 h-4" fill="#047857" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Advanced Recovery</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
                  CareTaker Performance
                </h3>
                <p className="mt-3 text-xs text-stone-700 leading-relaxed uppercase tracking-wider font-medium max-w-xs">
                  Post-operative rehabilitation, physical therapy assistance, and acute clinical recovery coordination.
                </p>
                <button
                  onClick={() => handleChoose('Post-Op Convalescence')}
                  className="mt-5 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 transition-colors"
                >
                  <span>Explore Protocol</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>

              <div className="w-44 sm:w-48 shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={assetPath("/caretaker-performance-pouch.jpg")}
                  alt="CareTaker Performance Formula"
                  width={240}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Card 4: Built to Thrive Feature with Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#FAF7F2] border border-stone-200/80 rounded-[36px] p-8 sm:p-10 relative overflow-hidden shadow-sm"
            >
              <div className="max-w-md">
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight leading-tight">
                  CareTaker Premier<br />Built to Thrive
                </h3>
                
                <p className="mt-3 text-xs text-stone-600 leading-relaxed uppercase tracking-wider font-medium">
                  Support comprehensive health with a dedicated 24/7 nursing protocol to improve recovery outcomes and strengthen independence.
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => handleChoose('24-Hour Continuous Care')}
                    className="bg-stone-950 text-white rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-all shadow"
                  >
                    Our Products
                  </button>
                </div>
              </div>

              {/* Floating Feature Card with Starburst Badge */}
              <div className="mt-8 sm:mt-10 pt-6 border-t border-stone-200/60 relative">
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-stone-100 max-w-sm relative">
                  <div className="pr-8">
                    <h4 className="text-base font-serif font-bold text-stone-900">
                      Whole Person Care
                    </h4>
                    <p className="mt-1 text-[11px] text-stone-500 uppercase tracking-wider font-medium leading-relaxed">
                      A personalized, clinical protocol designed for daily comfort, vitality, and recovery excellence.
                    </p>
                  </div>
                  
                  {/* Floating Yellow Starburst on Top Right */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shadow-md animate-pulse">
                    <StarburstIcon className="w-6 h-6 text-amber-500" fill="#F59E0B" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
