'use client';

import { motion } from 'framer-motion';

export default function HealthcareSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 bg-gray-100">
      {/* Left Column: Trust Expertise and Helper Service */}
      <div className="space-y-8">
        <motion.div
          className="bg-green-900 text-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Trust Expertise in Healthcare</h2>
          <p className="text-yellow-300 mb-2">Dedicated support for your recovery journey.</p>
          <p className="text-white mb-4">
            We provide skilled helpers to assist you during hospitalization, ensuring you receive
            personalized care 24/7. From medication management to emotional support, our team is with
            you every step of the way.
          </p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-yellow-300">80%</span>
            <p className="text-yellow-300">Higher patient recovery rates with our helpers</p>
          </div>
        </motion.div>
        <motion.img
          src="/healthcare-image1.jpg"
          alt="Healthcare team assisting patient"
          className="w-full rounded-lg shadow-lg object-cover h-64 md:h-80"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Right Column: Professional Trust and Empowerment */}
      <div className="space-y-8">
        <motion.div
          className="bg-yellow-300 text-green-900 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Health Professionals You Can Trust</h2>
          <p className="text-green-800 mb-2">Set goals and achieve them with us.</p>
          <p className="text-green-800 mb-4">
            Our certified helpers reduce hospital stress by 30%, offering companionship and
            assistance. Benefit from tailored care plans and expert guidance for a smoother recovery.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <img
              src="/handshake.jpg"
              alt="Handshake symbolizing trust"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">Old Age Caring Team</p>
              <p className="text-sm">Over 500 satisfied families served</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-yellow-200 text-green-900 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Empowering Your Health</h2>
          <p className="text-green-800 mb-2">Uplifting your life with expert care.</p>
          <p className="text-green-800 mb-4">
            Our helpers assist with daily needs during hospitalization, leading to a 25% faster
            recovery time. Join thousands of patients who’ve regained independence with our support.
          </p>
          <div className="flex space-x-4 mt-4">
            <img
              src="/health-image1.jpg"
              alt="Happy patient with helper"
              className="w-20 h-20 rounded-full object-cover"
            />
            <img
              src="/health-image2.jpg"
              alt="Healthcare professional"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <motion.a
            href="#contact"
            className="mt-6 inline-block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Help Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}