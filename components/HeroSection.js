'use client'
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';


export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gradient-to-b from-white to-gray-100">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Elegant mission<br />to wellness
        </h1>
        <p className="text-gray-600">
          Before we dive into the list of health ideas, let’s go over some essential tips.
        </p>
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
        <div className="flex items-center space-x-4 mt-4">
          <img src="/trainer1.jpg" alt="Trainer" className="w-10 h-10 rounded-full" />
          <img src="/trainer2.jpg" alt="Trainer" className="w-10 h-10 rounded-full" />
          <span className="text-sm text-gray-500">Become a trainer</span>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="/hero-image.jpg" alt="Elderly exercising" className="rounded-lg shadow-lg" />
        <div className="mt-4 text-center text-yellow-500 bg-yellow-100 p-2 rounded-full">
          $12 Subscription
        </div>
      </div>
    </section>
  );
}