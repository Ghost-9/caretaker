'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const HealthcareSection: React.FC = () => {
  const supportImages = [
    { src: '/health-image1.jpg', alt: 'Happy patient with helper' },
    { src: '/health-image2.jpg', alt: 'Healthcare professional' },
  ];

  // Combined variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut",
        delay: i * 0.2
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      transition: { duration: 0.3 }
    }
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.5 }
    }
  };

  // Profile image animation variants
  const profileVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="bg-blue-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="grid grid-rows-2 gap-8 h-full">
            {/* First Card */}
            <motion.div
              className="bg-black text-white p-8 rounded-xl shadow-lg h-96"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Trust Expertise in Healthcare</h2>
              <p className="text-blue-300 mb-2">Dedicated support for your recovery journey.</p>
              <p className="text-white mb-4">
                We provide skilled helpers to assist you during hospitalization, ensuring you receive
                personalized care 24/7. From medication management to emotional support, our team is with
                you every step of the way.
              </p>
              <div className="mt-auto pt-4">
                <span className="text-4xl font-bold text-blue-300">80%</span>
                <p className="text-blue-300">Higher patient recovery rates with our helpers</p>
              </div>
            </motion.div>

            {/* Image Card - With animation but no overlay */}
            <motion.div
              className="relative rounded-xl shadow-lg overflow-hidden h-96"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Image
                src="/healthcare-image1.jpg"
                alt="Healthcare team assisting patient"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-8 h-full">
            {/* Second Card */}
            <motion.div
              className="bg-white text-black p-8 rounded-xl shadow-lg border-l-4 border-blue-500 h-96"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Health Professionals You Can Trust</h2>
              <p className="text-blue-600 mb-2">Set goals and achieve them with us.</p>
              <p className="text-gray-800 mb-4">
                Our certified helpers reduce hospital stress by 30%, offering companionship and
                assistance. Benefit from tailored care plans and expert guidance for a smoother recovery.
              </p>
              <div className="mt-auto pt-4 flex items-center space-x-4">
                <motion.div 
                  className="w-20 h-20 relative"
                  variants={profileVariants}
                  whileHover="hover"
                >
                  <Image
                    src="/handshake.jpg"
                    alt="Handshake symbolizing trust"
                    fill
                    className="rounded-full object-cover"
                    sizes="80px"
                  />
                </motion.div>
                <div>
                  <p className="font-medium">Old Age Caring Team</p>
                  <p className="text-sm">Over 500 satisfied families served</p>
                </div>
              </div>
            </motion.div>

            {/* Third Card */}
            <motion.div
              className="bg-blue-600 text-white p-8 rounded-xl shadow-lg h-96"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Empowering Your Health</h2>
              <p className="text-blue-100 mb-2">Uplifting your life with expert care.</p>
              <p className="text-white mb-4">
                Our helpers assist with daily needs during hospitalization, leading to a 25% faster
                recovery time. Join thousands of patients who've regained independence with our support.
              </p>
              <div className="flex space-x-4 mt-4">
                {supportImages.map((img, i) => (
                  <motion.div 
                    key={i} 
                    className="w-20 h-20 relative"
                    variants={profileVariants}
                    whileHover="hover"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="rounded-full object-cover"
                      sizes="80px"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contact"
                className="mt-6 inline-block px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get Help Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;