'use client';

import { motion } from 'framer-motion';
import { PlayCircle, ChevronRight, Clock, Users, Shield, Star, Award } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const WellnessSection: React.FC = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    hover: { 
      y: -10,
      boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const statIconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.5, duration: 0.3 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative px-6 py-16 bg-blue-50 text-gray-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 opacity-40 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 opacity-50 rounded-full filter blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Your Trusted Partner in <span className="text-blue-600">Wellness</span></h2>
          <p className="text-gray-700 max-w-xl mx-auto text-lg">
            Take control of your health journey with personalized support from our expert team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-8">
            <motion.div
              className="space-y-6"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold text-blue-700">Personalized Care</h3>
              <p className="text-gray-700">
                We offer skilled helpers to assist you during hospitalization, ensuring comfort and care
                for you and your family while building a healthier community.
              </p>
              
              <motion.div 
                className="flex items-center space-x-6 bg-white p-5 rounded-xl border border-gray-100 shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 relative flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center"
                  variants={statIconVariants}
                >
                  <Users size={28} className="text-white" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">1 in 5</h3>
                  <p className="text-gray-700">Patients recover faster with our helper support</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.a
              href="#video"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              whileTap="tap"
            >
              <PlayCircle size={22} className="mr-2" />
              Watch Our Helper Demo
            </motion.a>
            <motion.div
              className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 } }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Our Care Ratings</h3>
                <Shield className="text-blue-600" size={24} />
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="font-medium text-gray-800">Patient Satisfaction</p>
                    <div className="flex items-center mt-1">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} size={16} className="text-blue-500 fill-blue-500" />
                      ))}
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">98%</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="font-medium text-gray-800">Recovery Success</p>
                    <div className="flex items-center mt-1">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} size={16} className={i < 4 ? "text-blue-500 fill-blue-500" : "text-blue-300 fill-blue-300"} />
                      ))}
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">92%</span>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <Award size={18} className="text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Certified Excellence</span>
                </div>
                <ChevronRight size={18} className="text-blue-600" />
              </motion.div>
            </motion.div>
          </div>

    
          <div className="md:col-span-7 space-y-6">
            <motion.div
              className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-lg overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
              
              <h2 className="text-3xl font-bold mb-4 relative z-10 text-gray-900">Trusted Wellness Services</h2>
              <p className="text-blue-600 mb-2 font-medium relative z-10">Dedicated departments for your care</p>
              <p className="text-gray-700 mb-6 relative z-10">
                Our helpers improve mental health by 40% during hospitalization, offering personalized
                support and reducing family stress.
              </p>
              
              <motion.div 
                className="flex justify-between items-center mt-4 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-medium text-gray-900">24+ Departments</span>
                  <ChevronRight size={20} className="text-blue-600" />
                </div>
                <div className="w-20 h-20 relative">
                  <Image
                    src="/wellness-image1.jpg"
                    alt="Wellness department"
                    fill
                    className="rounded-full object-cover ring-2 ring-blue-500 shadow-md"
                    sizes="(max-width: 768px) 100vw, 80px"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-lg overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              transition={{ delay: 0.2 }}
            >
            
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
              
              <h2 className="text-3xl font-bold mb-4 relative z-10 text-gray-900">Wishing You a Healthy Life</h2>
              <p className="text-blue-600 mb-2 font-medium relative z-10">Conquer your goals with expert help</p>
              <p className="text-gray-700 mb-6 relative z-10">
                With our helpers, 90% of users report better family support during recovery. Available
                6AM - 6PM for your convenience.
              </p>
              
              <motion.div 
                className="flex justify-between items-center mt-4 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2">
                  <Clock size={20} className="text-blue-600" />
                  <span className="text-xl font-medium text-gray-900">6AM - 6PM</span>
                </div>
                <div className="w-20 h-20 relative">
                  <Image
                    src="/wellness-image2.jpg"
                    alt="Healthy lifestyle"
                    fill
                    className="rounded-full object-cover ring-2 ring-blue-500 shadow-md"
                    sizes="(max-width: 768px) 100vw, 80px"
                  />
                </div>
              </motion.div>

              <motion.a
                href="#contact"
                className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Wellness Program
                <ChevronRight size={18} className="ml-1" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;