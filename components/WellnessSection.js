'use client';

import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

export default function WellnessSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 bg-gray-50">
      {/* Left Column */}
      <div className="space-y-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Your Trusted Partner in Wellness</h2>
          <p className="text-gray-600">
            Take control of your health and make wellness your goal with our dedicated support.
          </p>
          <p className="text-gray-600">
            We offer skilled helpers to assist you during hospitalization, ensuring comfort and care
            for you and your family while building a healthier community.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center space-x-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-32 relative">
            <Image
              src="/care-image1.avif"
              alt="Care team with patient"
              fill
              className="rounded-lg object-cover shadow-md"
              sizes="(max-width: 768px) 100vw, 128px"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">1 in 5</h3>
            <p className="text-gray-600">Patients recover faster with our helper support.</p>
          </div>
        </motion.div>

        <motion.a
          href="#video"
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PlayCircle size={20} className="mr-2" />
          Watch Our Helper Demo
        </motion.a>
      </div>

      {/* Right Column */}
      <div className="space-y-8">
        <motion.div
          className="bg-green-800 text-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Trusted Wellness Services</h2>
          <p className="text-yellow-300 mb-2">Dedicated departments for your care.</p>
          <p className="text-white mb-4">
            Our helpers improve mental health by 40% during hospitalization, offering personalized
            support and reducing family stress.
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-medium">24+ Departments</span>
            <div className="w-20 h-20 relative">
              <Image
                src="/wellness-image1.avif"
                alt="Wellness department"
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 100vw, 80px"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-green-700 text-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Wishing You a Healthy Life</h2>
          <p className="text-yellow-300 mb-2">Conquer your goals with expert help.</p>
          <p className="text-white mb-4">
            With our helpers, 90% of users report better family support during recovery. Available
            6AM - 6PM for your convenience.
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-medium">6AM - 6PM</span>
            <div className="w-20 h-20 relative">
              <Image
                src="/wellness-image2.avif"
                alt="Healthy lifestyle"
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 100vw, 80px"
              />
            </div>
          </div>

          <motion.a
            href="#contact"
            className="mt-6 inline-block px-6 py-2 bg-yellow-300 text-green-900 rounded-full hover:bg-yellow-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Wellness Program
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}