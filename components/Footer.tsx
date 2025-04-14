'use client'

import { motion } from 'framer-motion'
import React from 'react'
 
 const Footer = () => {
   return (
    <motion.footer
    className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Column 1: About */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-2 sm:text-xl">Attend Assist</h3>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            Providing compassionate and reliable caregiving services to those who need it most. Available 24/7 for your care needs.
          </p>
          <div className="flex space-x-4 mt-2">
            {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label={`${platform} link`}
              >
                <svg
                  className="w-6 h-6 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {/* Simplified placeholder for SVG paths */}
                  <path
                    fillRule="evenodd"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm..."
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>
  
        {/* Column 2: Services */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-2 sm:text-xl">Our Services</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {['Home Care', 'Elderly Care', 'Mental Health Support', 'Specialized Care'].map(
              (service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>
  
        {/* Column 3: Quick Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-2 sm:text-xl">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {['About Us', 'Our Team', 'Careers', 'Blog', 'FAQs'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
  
        {/* Column 4: Contact */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-2 sm:text-xl">Contact Us</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mt-0.5 mr-2 text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-300">Jodhpur, India</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mt-0.5 mr-2 text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-300">hello@attendassist.in</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mt-0.5 mr-2 text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-gray-300">+91-XXXXXXXXXX</span>
            </li>
          </ul>
  
          {/* Newsletter Subscription */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2 sm:text-base">Join Our Newsletter</h4>
            <div className="flex border border-blue-400 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800 bg-white text-sm sm:text-base"
              />
              <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-3 py-2 border-l border-blue-600">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
  
      {/* Divider */}
      <div className="border-t border-blue-700 my-6"></div>
  
      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center text-sm sm:text-base">
        <motion.div
          className="mb-4 sm:mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300">© {new Date().getFullYear()} AttendAssist. All rights reserved.</p>
        </motion.div>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Terms of Service
          </a>
        </motion.div>
      </div>
    </div>
  </motion.footer>
    
   )
 }
 
 export default Footer