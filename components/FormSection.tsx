'use client';

import { motion } from 'framer-motion';
import React from 'react';

const FormSection: React.FC = () => {
  const services = [
    { title: "Hourly Care", note: "Ideal for hospital visits or temporary support", rate: "₹XYZ/hour" },
    { title: "6-Hour Care", note: "Perfect for morning/evening routine assistance", rate: "+20% premium of daily rate" },
    { title: "Half-Day & Full-Day", note: "Great for full hospital coverage", rate: "Market Rate (MRP)" },
    { title: "Monthly & Long-Term", note: "15 Days: 10–15% Off\n30 Days: Up to 20% Off", rate: "Discounted Plans" },
  ];

  const steps = [
    { number: "01", title: "Choose", description: "Choose a plan (Hourly, Daily, Monthly)" },
    { number: "02", title: "Share", description: "Share patient details (non-medical)" },
    { number: "03", title: "Assign", description: "We assign a trained attendant" },
    { number: "04", title: "Support", description: "Real-time support, guaranteed replacement if needed" }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section
  className="bg-blue-50 py-12 px-8 text-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.7 }}
    className="max-w-4xl mx-auto"
  >
    <h1 className="text-5xl font-bold text-black leading-tight">
      Compassionate Hospital Attendants, 
      <span className="block mt-2">Just a Click Away</span>
    </h1>
    
    <div className="h-1 w-24 bg-black mx-auto my-6"></div>
    
    <p className="mt-6 text-xl text-black leading-relaxed max-w-3xl mx-auto">
      Hire trained medical attendants to assist your loved ones at hospitals or homes — 
      by the hour, day, or month.
    </p>
  </motion.div>
  
  <div className="mt-10 flex flex-wrap justify-center gap-4">
    <motion.button
      className="bg-black text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-300 font-medium shadow-md"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      Book a Caregiver
    </motion.button>
    <motion.button
      className="bg-black text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-300 font-medium shadow-md"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" 
      }}
      whileTap={{ scale: 0.95 }}
    >
      Request a Callback
    </motion.button>
  </div>
  
  <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
    <motion.div 
      className="flex items-center bg-white px-5 py-2 rounded-full shadow-sm text-black font-medium"
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <span className="text-green-500 mr-2 text-lg">✓</span>
      Verified Attendants
    </motion.div>
    
    <motion.div 
      className="flex items-center bg-white px-5 py-2 rounded-full shadow-sm text-black font-medium"
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <span className="text-green-500 mr-2 text-lg">✓</span>
      Flexible Plans
    </motion.div>
    
    <motion.div 
      className="flex items-center bg-white px-5 py-2 rounded-full shadow-sm text-black font-medium"
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <span className="text-green-500 mr-2 text-lg">✓</span>
      Trusted by Families
    </motion.div>
    
    <motion.div 
      className="flex items-center bg-white px-5 py-2 rounded-full shadow-sm text-black font-medium"
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <span className="text-green-500 mr-2 text-lg">✓</span>
      Fast Replacements
    </motion.div>
  </div>
</motion.section>

      {/* Services Section */}
      <motion.section
        className="p-8 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Tailored Care, Trusted Attendants</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              className="border rounded-2xl p-4 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-blue-700">{s.title}</h3>
              <p className="text-sm mt-2">💡 {s.note}</p>
              <p className="text-md font-semibold mt-2">💰 {s.rate}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How it Works */}
      <motion.section
        className="p-8 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* First div with heading and description */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 max-w-6xl mx-auto">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-5xl font-bold text-black leading-tight">How It <br /> Works</h2>
            <div className="h-1 w-16 bg-blue-500 mt-4"></div>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700 text-lg" style={{width: '83%'}}>
              Choose a plan that suits your needs, share the patient details, and we'll assign a trained attendant. 
              We provide real-time support and guarantee replacement if needed, ensuring quality care for your loved ones.
            </p>
          </div>
        </div>
        
        {/* Second div with 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-black text-white rounded-xl p-6 relative shadow-md border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              <div className="bg-blue-200 rounded-full w-14 h-14 flex items-center justify-center font-bold text-black mb-6 shadow-md">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-b-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Us */}
      <motion.section
        className="p-12 bg-black text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Story & Commitment</h2>
            <div className="h-1 w-32 bg-blue-500 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
              At AttendAssist, we believe everyone deserves dignified care. Founded by healthcare professionals 
              who witnessed firsthand the challenges families face in finding reliable attendants, 
              we've built a compassionate solution that transforms patient care experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div 
              className="bg-gray-900 p-8 rounded-xl border-l-4 border-blue-500 shadow-xl"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="text-blue-400 text-3xl mr-3">❖</span>
                Our Mission
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To bridge the healthcare gap by providing verified, compassionate caregivers who treat 
                patients with dignity and give families peace of mind during challenging times.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Built by doctors & healthcare experts with real-world experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Comprehensive training in medical assistance & emotional support</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gray-900 p-8 rounded-xl border-l-4 border-blue-500 shadow-xl"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="text-blue-400 text-3xl mr-3">❖</span>
                Why Choose Us
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our unique approach blends healthcare expertise with compassionate human connection, creating a 
                support system that goes beyond basic caregiving to enhance healing and comfort.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Access to specialized AIIMS/nursing student volunteers with medical knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Clear legal framework ensuring proper boundaries of care responsibilities</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-16 gap-6">
            <motion.button
              className="bg-black text-white border-2 border-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Standards
            </motion.button>
            <motion.button
              className="bg-black text-white border-2 border-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Mission
            </motion.button>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl font-light italic text-gray-400">
              "We don't just provide attendants — we provide peace of mind when families need it most."
            </p>
          </div>
        </div>
      </motion.section>

      {/* Booking Form */}
      <motion.section
  className="p-12 bg-gradient-to-b from-blue-100 to-white"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="max-w-xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-center mb-8"
    >
      <h2 className="text-4xl font-bold text-black">Book a Caregiver</h2>
      <div className="h-1 w-20 bg-blue-500 mx-auto mt-3 mb-4 rounded-full"></div>
      <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours</p>
    </motion.div>
    
    <motion.form 
      className="bg-white p-8 rounded-2xl shadow-lg grid gap-5 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="space-y-1">
        <label htmlFor="fullname" className="text-sm font-medium text-gray-700 block">Full Name</label>
        <motion.input 
          whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
          transition={{ duration: 0.2 }}
          type="text" 
          id="fullname"
          placeholder="Enter your full name" 
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none" 
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700 block">Phone Number</label>
        <motion.input 
          whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
          transition={{ duration: 0.2 }}
          type="tel" 
          id="phone"
          placeholder="Enter your contact number" 
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none" 
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="condition" className="text-sm font-medium text-gray-700 block">Patient Type / Condition</label>
        <motion.input 
          whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
          transition={{ duration: 0.2 }}
          type="text" 
          id="condition"
          placeholder="Describe patient's condition briefly" 
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none" 
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="plan" className="text-sm font-medium text-gray-700 block">Select Plan</label>
        <motion.select 
          whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
          transition={{ duration: 0.2 }}
          id="plan"
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none appearance-none bg-white" 
          onChange={(e) => {
            const timeContainer = document.getElementById('timeSelectionContainer');
            if (timeContainer && (e.target.value === 'hourly' || e.target.value === '6hour')) {
              timeContainer.classList.remove('hidden');
            } else if (timeContainer) {
              timeContainer.classList.add('hidden');
            }
          }}
        >
          <option value="">Select your care plan</option>
          <option value="hourly">Hourly</option>
          <option value="6hour">6-Hour</option>
          <option value="fullday">Full-Day</option>
          <option value="monthly">Monthly</option>
          <option value="custom">Custom</option>
        </motion.select>
      </div>
      
      {/* Time selection that appears only for hourly and 6-hour options */}
      <motion.div 
        id="timeSelectionContainer"
        className="space-y-1 hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label htmlFor="startTime" className="text-sm font-medium text-gray-700 block">Preferred Time</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <motion.input 
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
              transition={{ duration: 0.2 }}
              type="time" 
              id="startTime"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none" 
            />
            <p className="text-xs text-gray-500 mt-1">Start Time</p>
          </div>
          <div>
            <motion.input 
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
              transition={{ duration: 0.2 }}
              type="time" 
              id="endTime"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none" 
            />
            <p className="text-xs text-gray-500 mt-1">End Time</p>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="startdate" className="text-sm font-medium text-gray-700 block">Start Date</label>
          <motion.input 
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
            transition={{ duration: 0.2 }}
            type="date" 
            id="startdate"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none" 
          />
        </div>
        
        <div className="space-y-1">
          <label htmlFor="enddate" className="text-sm font-medium text-gray-700 block">End Date</label>
          <motion.input 
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
            transition={{ duration: 0.2 }}
            type="date" 
            id="enddate"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none" 
          />
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="notes" className="text-sm font-medium text-gray-700 block">Special Instructions (Optional)</label>
        <motion.textarea
          whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
          transition={{ duration: 0.2 }}
          id="notes"
          rows={3}
          placeholder="Any additional information we should know?"
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none resize-none" 
        />
      </div>
      
      <div className="pt-4">
        <motion.button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full py-4 rounded-xl font-medium text-lg"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.98 }}
        >
          Book Your Caregiver
        </motion.button>
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-2">
        By submitting, you agree to our <span className="text-blue-600 hover:underline cursor-pointer">Terms of Service</span>
      </p>
    </motion.form>
  </div>
</motion.section>

      {/* Contact Section */}
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
    </main>
  );
};

export default FormSection;