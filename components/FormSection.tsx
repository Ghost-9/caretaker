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
        className="bg-blue-50 p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-blue-800">Compassionate Hospital Attendants, Just a Click Away</h1>
        <p className="mt-4 text-lg">
          Hire trained medical attendants to assist your loved ones at hospitals or homes — by the hour, day, or month.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <motion.button
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Caregiver
          </motion.button>
          <motion.button
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Callback
          </motion.button>
        </div>
        <div className="mt-6 flex justify-center gap-4 text-sm text-gray-600">
          <span>✅ Verified Attendants</span>
          <span>✅ Flexible Plans</span>
          <span>✅ Trusted by Families</span>
          <span>✅ Fast Replacements</span>
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
        className="p-8 bg-blue-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Book a Caregiver</h2>
        <form className="max-w-md mx-auto grid gap-4">
          <input type="text" placeholder="Full Name" className="p-2 border rounded-md" />
          <input type="tel" placeholder="Phone Number" className="p-2 border rounded-md" />
          <input type="text" placeholder="Patient Type / Condition" className="p-2 border rounded-md" />
          <select className="p-2 border rounded-md">
            <option>Select Plan</option>
            <option>Hourly</option>
            <option>6-Hour</option>
            <option>Full-Day</option>
            <option>Monthly</option>
          </select>
          <motion.button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Booking
          </motion.button>
        </form>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="p-8 bg-gray-100 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-2">Need care now?</h2>
        <p>📞 Call or WhatsApp: <strong>+91-XXXXXXXXXX</strong></p>
        <p>📩 Email: <strong>hello@attendassist.in</strong></p>
        <p>📍 Location: <strong>Jodhpur, Rajasthan</strong></p>
      </motion.section>
    </main>
  );
};

export default FormSection;