'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function FormSection() {
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
        <p className="mt-4 text-lg">Hire trained medical attendants to assist your loved ones at hospitals or homes — by the hour, day, or month.</p>
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
          {[
            { title: "Hourly Care", note: "Ideal for hospital visits or temporary support", rate: "₹XYZ/hour" },
            { title: "6-Hour Care", note: "Perfect for morning/evening routine assistance", rate: "+20% premium of daily rate" },
            { title: "Half-Day & Full-Day", note: "Great for full hospital coverage", rate: "Market Rate (MRP)" },
            { title: "Monthly & Long-Term", note: "15 Days: 10–15% Off\n30 Days: Up to 20% Off", rate: "Discounted Plans" },
          ].map((s, idx) => (
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
        className="bg-gray-50 p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">How It Works</h2>
        <ol className="max-w-xl mx-auto list-decimal list-inside space-y-3 text-gray-700">
          <li>Choose a plan (Hourly, Daily, Monthly)</li>
          <li>Share patient details (non-medical)</li>
          <li>We assign a trained attendant</li>
          <li>Real-time support, guaranteed replacement if needed</li>
        </ol>
      </motion.section>

      {/* About Us */}
      <motion.section
        className="p-8 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">About AttendAssist</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          AttendAssist bridges the gap between hospitals and homes by providing reliable, verified, and compassionate attendants — from medical students to trained caregivers.
        </p>
        <ul className="mt-4 max-w-xl mx-auto text-sm text-gray-600 space-y-1">
          <li>• Built by doctors & caregivers</li>
          <li>• Personalized training & soft skills</li>
          <li>• Direct access to AIIMS/nursing student volunteers</li>
          <li>• Legal framework with non-medical responsibilities</li>
        </ul>
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
}