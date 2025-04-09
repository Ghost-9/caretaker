'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  
  // Handle scroll effect
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled for shadow effect
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Determine visibility based on scroll direction
      // Show header immediately on any upward scroll
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Scrolling down - hide header
      } else if (currentScrollY < lastScrollY) {
        setVisible(true); // Scrolling up - show header immediately
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when screen size changes to desktop
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
    <motion.div 
      className={`header fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-center p-3 ${scrolled ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent'} transition-all duration-300`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Logo */}
      <div className="logo mb-3 md:mb-0">
        <img src="/logo.webp" alt="Company Logo" className="h-6 md:h-8" />
      </div>
      
      {/* Navigation */}
      <div className="nav-links hidden md:flex space-x-6 text-gray-800 font-medium">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">Book</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Story</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
      </div>
      
      {/* Contact Button */}
      <div className="contact hidden md:block mt-3 md:mt-0">
        <motion.button 
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-3 right-3">
        <button 
          className="text-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-14 left-0 right-0 bg-white bg-opacity-95 shadow-md py-3 px-6 flex flex-col space-y-3 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#" className="hover:text-white transition-colors py-1.5 font-medium">Home</a>
            <a href="#" className="hover:text-white transition-colors py-1.5 font-medium">Book</a>
            <a href="#" className="hover:text-white transition-colors py-1.5 font-medium">About</a>
            <a href="#" className="hover:text-white transition-colors py-1.5 font-medium">Story</a>
            <a href="#" className="hover:text-white transition-colors py-1.5 font-medium">Pricing</a>
            <motion.button 
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg w-full mt-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Header