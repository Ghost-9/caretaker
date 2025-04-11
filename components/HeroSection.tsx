'use client';

import React from 'react';
import { motion } from 'framer-motion';


const HeroSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative text-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="../public/hero-image.jpg"
          alt="Senior man doing yoga in a greenhouse environment" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>
      </div>
      <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Information */}
        <div className="w-full md:w-3/5 mb-16 md:mb-0">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Recovery, Our Priority
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Compassionate Hospital Attendants - Just a Tap Away
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Book trained medical attendants or caretaker for your loved ones, at home or in hospitals -
            available hourly, daily, or monthly. We also offer specialized senior wellness programs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
            <motion.button 
              className="border-2 border-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
        
        {/* Right side - Floating card or element */}
        <motion.div 
          className="w-full md:w-2/5 pl-0 md:pl-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-6">Our professional attendants are available 24/7 to assist with your recovery needs and senior wellness.</p>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <p className="font-medium">24/7 Support</p>
                <p className="text-sm text-gray-500">Always available</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <p className="font-medium">Certified Professionals</p>
                <p className="text-sm text-gray-500">Trained & experienced</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <p className="font-medium">Wellness Programs</p>
                <p className="text-sm text-gray-500">Yoga & senior fitness</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;