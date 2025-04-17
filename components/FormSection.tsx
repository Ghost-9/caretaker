'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Shield, Heart, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';



const FormSection: React.FC = () => {
  const services = [
    { title: "Hourly Care", note: "Ideal for hospital visits or temporary support", rate: "₹XYZ/hour" },
    { title: "6-Hour Care", note: "Perfect for morning/evening routine assistance", rate: "+20% premium of daily rate" },
    { title: "Half-Day & Full-Day", note: "Great for full hospital coverage", rate: "Market Rate (MRP)" },
    { title: "Monthly & Long-Term", note: "15 Days: 10-15% Off\n30 Days: Up to 20% Off", rate: "Discounted Plans" },
  ];

  const steps = [
    { number: "01", title: "Choose", description: "Choose a plan (Hourly, Daily, Monthly)" },
    { number: "02", title: "Share", description: "Share patient details (non-medical)" },
    { number: "03", title: "Assign", description: "We assign a trained attendant" },
    { number: "04", title: "Support", description: "Real-time support, guaranteed replacement if needed" }
  ];

  const service = [
    {
      title: "Personal Care Assistance",
      note: "Compassionate help with daily activities including bathing, dressing, and mobility support",
      rate: "Starting at $25/hour",
      icon: <Heart className="text-rose-500" />
    },
    {
      title: "Medication Management",
      note: "Reliable reminders and assistance with prescribed medications and treatments",
      rate: "Starting at $30/hour",
      icon: <Clock className="text-emerald-500" />
    },
    {
      title: "Specialized Memory Care",
      note: "Trained support for individuals with Alzheimer's and other memory-related conditions",
      rate: "Starting at $35/hour",
      icon: <Shield className="text-purple-500" />
    },
    {
      title: "Respite Care Services",
      note: "Temporary relief for family caregivers with the same professional standards",
      rate: "Starting at $28/hour",
      icon: <Award className="text-amber-500" />
    }
  ];

  // New state for custom dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isConditionDropdownOpen, setIsConditionDropdownOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState("");

  
  const planOptions = [
    { value: "hourly", label: "Hourly Care", description: "Flexible support for short-term needs" },
    { value: "6hour", label: "6-Hour Care", description: "Perfect for morning/evening assistance" },
    { value: "fullday", label: "Full-Day Care", description: "Complete coverage for the entire day" },
    { value: "monthly", label: "Monthly Care", description: "Long-term care with discounted rates" },
    { value: "custom", label: "Custom Plan", description: "Tailored to your specific requirements" }
  ];

  const handlePlanSelection = (value: string, label: string) => {
    setSelectedPlan(value);
    setIsDropdownOpen(false);
    
    // Show/hide time selection based on plan
    const timeContainer = document.getElementById('timeSelectionContainer');
    if (timeContainer && (value === 'hourly' || value === '6hour')) {
      timeContainer.classList.remove('hidden');
    } else if (timeContainer) {
      timeContainer.classList.add('hidden');
    }
  };
  const conditionOptions = [
    { value: "general", label: "General Care", description: "Basic assistance with daily activities and monitoring" },
    { value: "intensive", label: "Intensive Care", description: "Higher level of medical monitoring and assistance" },
    { value: "paralysis", label: "Paralysis Care", description: "Specialized care for patients with mobility limitations" }
  ];
  
  const handleConditionSelection = (value: string, label: string) => {
    setSelectedCondition(value);
    setIsConditionDropdownOpen(false);
  };

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
        className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl max-w-6xl mx-auto my-12 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-blue-800 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tailored Care, Trusted Attendants
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional care services personalized to meet your unique needs with compassion and expertise
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {service.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 bg-blue-50 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{card.note}</p>
              <div className="bg-blue-50 py-3 px-4 rounded-xl text-blue-800 font-semibold mt-2">
                {card.rate}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            Schedule a Consultation
          </button>
        </motion.div>
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
  <div className="relative">
    <motion.div 
      className="bg-white border border-gray-300 rounded-lg p-3 flex justify-between items-center cursor-pointer relative"
      onClick={() => setIsConditionDropdownOpen(!isConditionDropdownOpen)}
      whileHover={{ boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
      transition={{ duration: 0.2 }}
    >
      <span className={selectedCondition ? "text-gray-800" : "text-gray-400"}>
        {selectedCondition ? conditionOptions.find(option => option.value === selectedCondition)?.label : "Select patient condition"}
      </span>
      <motion.div
        animate={{ rotate: isConditionDropdownOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="text-gray-500" size={20} />
      </motion.div>
    </motion.div>
    
    {/* Dropdown options */}
    <motion.div 
      className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden"
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: isConditionDropdownOpen ? 1 : 0,
        height: isConditionDropdownOpen ? 'auto' : 0,
        scale: isConditionDropdownOpen ? 1 : 0.95,
        transition: {
          opacity: { duration: 0.2 },
          height: { duration: 0.3 },
          scale: { duration: 0.2 }
        }
      }}
      exit={{ opacity: 0, height: 0 }}
    >
      {conditionOptions.map((option, idx) => (
        <motion.div
          key={option.value}
          className="cursor-pointer p-3 rounded-md bg-white hover:bg-[#F2F8FF] transition-colors duration-200 border-b border-gray-100 last:border-b-0"
          onClick={() => handleConditionSelection(option.value, option.label)}
          whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * idx, duration: 0.2 }}
        >
          <div className="font-medium text-gray-800">{option.label}</div>
          <div className="text-xs text-gray-500 mt-1">{option.description}</div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>
      
      {/* Enhanced animated dropdown */}
      <div className="space-y-1">
        <label htmlFor="plan" className="text-sm font-medium text-gray-700 block">Select Plan</label>
        <div className="relative">
          <motion.div 
            className="bg-white border border-gray-300 rounded-lg p-3 flex justify-between items-center cursor-pointer relative"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            whileHover={{ boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            <span className={selectedPlan ? "text-gray-800" : "text-gray-400"}>
              {selectedPlan ? planOptions.find(option => option.value === selectedPlan)?.label : "Select your care plan"}
            </span>
            <motion.div
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-gray-500" size={20} />
            </motion.div>
          </motion.div>
          
          {/* Dropdown options */}
          <motion.div 
            className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isDropdownOpen ? 1 : 0,
              height: isDropdownOpen ? 'auto' : 0,
              scale: isDropdownOpen ? 1 : 0.95,
              transition: {
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
                scale: { duration: 0.2 }
              }
            }}
            exit={{ opacity: 0, height: 0 }}
          >
            {planOptions.map((option, idx) => (
              <motion.div
                key={option.value}
                className="cursor-pointer p-3 rounded-md bg-white hover:bg-[#F2F8FF] transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                onClick={() => handlePlanSelection(option.value, option.label)}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.2 }}
              >
                <div className="font-medium text-gray-800">{option.label}</div>
                <div className="text-xs text-gray-500 mt-1">{option.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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

     
  </main>
  );
};

export default FormSection;