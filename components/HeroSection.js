'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-forest-200/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sand-200 border border-stone-300/80 text-xs font-semibold text-stone-700 uppercase tracking-wider"
            >
              <ShieldCheck size={14} className="text-forest-700" />
              <span>Certified Hospital Bedside Attendants</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold tracking-tight text-forest-950 leading-[1.12]"
            >
              Human presence at the bedside when family cannot be there.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl text-balance"
            >
              CareTaker coordinates vetted hospital attendants, nursing scholars, and compassionate caregivers for surgical recovery, elder observation, and home convalescence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="#inquire"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-forest-900 text-sand-50 font-medium text-base hover:bg-forest-800 transition-all duration-200 shadow-premium hover:shadow-elevated group"
              >
                <span>Request an Attendant</span>
                <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#disciplines"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-stone-800 font-medium text-base border border-stone-300 hover:border-stone-400 hover:bg-sand-50 transition-all duration-200"
              >
                Explore Care Disciplines
              </Link>
            </motion.div>

            {/* Agency Trust Pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-stone-300/60 grid grid-cols-3 gap-6"
            >
              <div>
                <div className="text-2xl font-bold font-editorial text-forest-900">45 Min</div>
                <div className="text-xs text-stone-500 font-medium mt-0.5">Average Hospital Dispatch</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-editorial text-forest-900">100%</div>
                <div className="text-xs text-stone-500 font-medium mt-0.5">Vetted & Police Verified</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-editorial text-forest-900">500+</div>
                <div className="text-xs text-stone-500 font-medium mt-0.5">Families Supported</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border border-stone-200/80 bg-stone-100">
                <Image
                  src="/hero-image.jpg"
                  alt="Dignified patient care and bedside observation"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                
                {/* Floating Bottom Card Inside Image */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-dark text-sand-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-sand-300">
                      Active Shift Protocol
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Continuous Care
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug">
                    Vitals logging, mobility assistance, medication adherence, and compassionate bedside reassurance.
                  </p>
                </div>
              </div>

              {/* Floating Satellite Card */}
              <div className="hidden sm:flex absolute -top-6 -left-6 items-center space-x-3 p-4 rounded-2xl glass-panel shadow-premium">
                <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center text-forest-800">
                  <Award size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Hospital Approved</div>
                  <div className="text-[11px] text-stone-500">AIIMS & State Medical Networks</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
