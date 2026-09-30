'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import StarburstIcon from './StarburstIcon';

export default function EditorialHeadlineSection() {
  return (
    <section className="relative bg-[#FCFAF7] pt-8 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Headline with Embedded Capsules and Starburst Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-serif font-normal text-stone-900 leading-[1.3] tracking-tight max-w-5xl mx-auto">
            <span>Nourishing</span>{' '}
            <span className="inline-flex items-center align-middle mx-1.5 md:mx-3 h-8 sm:h-10 md:h-12 w-16 sm:w-20 md:w-24 rounded-full overflow-hidden border border-stone-300 shadow-sm relative -top-0.5">
              <Image 
                src="/care-image1.jpg" 
                alt="Compassionate care"
                width={96}
                height={48}
                className="w-full h-full object-cover"
              />
            </span>{' '}
            <span>Healthier Living</span>
            <br className="hidden sm:inline" />
            <span className="inline-flex items-center align-middle mx-1.5 md:mx-3 text-[#FB7185] relative -top-0.5">
              <StarburstIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" fill="#FB7185" />
            </span>
            <span>Through Attentive</span>{' '}
            <span className="inline-flex items-center align-middle mx-1.5 md:mx-3 h-8 sm:h-10 md:h-12 w-16 sm:w-20 md:w-24 rounded-full overflow-hidden border border-stone-300 shadow-sm relative -top-0.5">
              <Image 
                src="/wellness-image1.jpg" 
                alt="Bedside presence"
                width={96}
                height={48}
                className="w-full h-full object-cover"
              />
            </span>{' '}
            <span>Support and</span>
            <br className="hidden sm:inline" />
            <span>Responsible Caregiving</span>{' '}
            <span className="inline-flex items-center align-middle mx-1.5 md:mx-3 text-[#F59E0B] relative -top-0.5">
              <StarburstIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" fill="#F59E0B" />
            </span>
          </h2>

          {/* Understated Upper-Case Manifesto */}
          <p className="mt-8 text-center text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-stone-500 max-w-3xl mx-auto leading-relaxed font-medium">
            At CareTaker, we believe patient wellbeing starts with balanced, dignified care. Our certified concierge protocols support recovery and promote sustainable wellness for every family.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
