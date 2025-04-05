'use client';

import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gradient-to-b from-white to-gray-100">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Elegant mission<br />to wellness
        </h1>
        <p className="text-gray-600">
          Before we dive into the list of health ideas, let’s go over some essential tips.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Book Schedule
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 px-4 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-50 transition"
          >
            <PlayCircle size={20} />
            <span>See a Demo</span>
          </motion.button>
        </div>

        {/* Trainer Avatars */}
        <div className="flex items-center space-x-4 mt-4">
          {['trainer1.jpg', 'trainer2.jpg'].map((src, i) => (
            <div key={i} className="w-10 h-10 relative">
              <Image
                src={`/${src}`}
                alt="Trainer"
                fill
                className="rounded-full object-cover"
                sizes="40px"
              />
            </div>
          ))}
          <span className="text-sm text-gray-500">Become a trainer</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="relative w-full h-64 md:h-96 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/hero-image.jpg"
            alt="Elderly exercising"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="mt-4 text-center text-yellow-500 bg-yellow-100 p-2 rounded-full">
          $12 Subscription
        </div>
      </div>
    </section>
  );
}