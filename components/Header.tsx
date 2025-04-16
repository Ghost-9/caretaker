'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);
      setVisible(currentScrollY < lastScrollY);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-center px-5 py-4 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      } transition-all duration-300`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Logo */}
      <div className="logo mb-3 md:mb-0 flex items-center">
        <img src="/logo.webp" alt="Company Logo" className="h-7 md:h-9" />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
        {['Home', 'Book', 'About', 'Story', 'Pricing'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Contact Button */}
      <div className="hidden md:block mt-3 md:mt-0">
        <motion.button
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-lg font-medium shadow-md"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-4 right-4">
        <motion.button
          className="text-gray-800 focus:outline-none p-1 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-xl rounded-b-lg py-4 px-6 flex flex-col space-y-3 text-gray-800"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {['Home', 'Book', 'About', 'Story', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="hover:text-blue-600 transition-colors py-2 font-medium border-b border-gray-100 last:border-0"
              >
                {item}
              </a>
            ))}
            <motion.button
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg w-full mt-4 font-medium shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;