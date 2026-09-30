'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#FCFAF7]">
      {/* Scenic Alpine Hero Image Container */}
      <div className="relative w-full h-[540px] sm:h-[620px] md:h-[720px] lg:h-[780px]">
        {/* Landscape photo via next/image for automatic basePath resolution */}
        <Image
          src="/alpine-hero.jpg"
          alt="Tranquil alpine landscape"
          fill
          priority
          className="object-cover object-center scale-100"
        />

        {/* Ambient atmospheric tint */}
        <div className="absolute inset-0 bg-stone-900/15" />

        {/* Hero Content Overlay */}
        <div className="relative z-10 h-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center pt-8 pb-32">
          
          {/* Centered Editorial Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-serif font-medium text-white tracking-tight leading-[1.12] drop-shadow-md max-w-4xl"
          >
            Healthier Recoveries<br />
            Start With Attentive<br />
            Care
          </motion.h1>

          {/* White Pill Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <Link
              href="#plans"
              className="inline-flex items-center space-x-2 bg-white/95 hover:bg-white text-stone-900 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <span>Explore More</span>
              <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-stone-800">
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Seamless Soft Fade at the Bottom into Cream Page Canvas */}
        <div className="absolute bottom-0 inset-x-0 h-44 sm:h-56 md:h-72 bg-gradient-to-t from-[#FCFAF7] via-[#FCFAF7]/85 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
