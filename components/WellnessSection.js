'use client';

import { motion } from 'framer-motion';
import { HeartPulse, BedDouble, Home, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const disciplines = [
  {
    icon: BedDouble,
    tag: 'Hospital In-Patient',
    title: 'Bedside Hospital Guardianship',
    description: 'Continuous attentive presence in recovery wards and private rooms. Our attendants track hydration, facilitate comfortable repositioning, assist with bathroom mobility, and advocate during doctor rounds.',
    inclusions: ['24/7 post-surgical alert monitoring', 'Fluid & meal intake logging', 'Direct liaison with ward nursing staff'],
    image: '/care-image1.jpg',
  },
  {
    icon: Home,
    tag: 'Home Convalescence',
    title: 'Transitional Home Recovery',
    description: 'Bridging the vulnerable 2-3 weeks post-discharge. Attendants maintain patient hygiene, guide physio exercises, ensure strict medication adherence, and prevent accidental falls at home.',
    inclusions: ['Safe mobility & transfer assistance', 'Strict medication reminders', 'Companionship & family peace of mind'],
    image: '/wellness-image1.jpg',
  },
  {
    icon: HeartPulse,
    tag: 'Elderly Care',
    title: 'Specialized Senior Companionship',
    description: 'Dignified, unhurried care for seniors living with chronic conditions, mobility restrictions, or cognitive decline. Focused on mental wellness, daily walks, and cheerful bedside company.',
    inclusions: ['Patience-first cognitive reassurance', 'Daily routine structure & hygiene', 'Active emergency escalation protocol'],
    image: '/wellness-image2.jpg',
  },
];

export default function WellnessSection() {
  return (
    <section id="disciplines" className="py-24 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-forest-700">
            Care Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-stone-900 mt-2 tracking-tight">
            Tailored bedside care across every stage of healing.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-4 font-normal leading-relaxed">
            Every clinical situation requires unique attentiveness. Our care coordinators pair patients with attendants matched to their mobility requirements, ward environment, and emotional needs.
          </p>
        </div>

        {/* Disciplines Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {disciplines.map((disc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-sand-50 border border-stone-200/80 p-8 flex flex-col justify-between hover:border-forest-700/30 hover:shadow-premium transition-all duration-300"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-stone-200">
                  <Image
                    src={disc.image}
                    alt={disc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-panel text-[11px] font-semibold tracking-wide uppercase text-stone-800">
                    {disc.tag}
                  </div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-forest-900 text-sand-50 flex items-center justify-center mb-4">
                  <disc.icon size={20} />
                </div>

                <h3 className="text-xl font-bold font-editorial text-stone-900 tracking-tight">
                  {disc.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed mt-3">
                  {disc.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/80 space-y-2.5">
                {disc.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-stone-700 font-medium">
                    <CheckCircle2 size={14} className="text-forest-700 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
