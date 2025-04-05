import { motion } from 'framer-motion';
// import { PlayCircle } from 'react-icons/play-circle';
import { PlayCircle } from 'lucide-react';

export default function WellnessSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 bg-gray-50">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Your trusted partner in healthcare</h2>
        <p className="text-gray-600">Take control, make health your goal</p>
        <p className="text-gray-600">Caring for your family like our own building a healthier community.</p>
        <div className="flex items-center space-x-4">
          <img src="/care-image1.jpg" alt="Care" className="w-32 h-32 rounded-lg" />
          <div>
            <h3 className="text-2xl font-semibold">1 in 5</h3>
            <p className="text-gray-600">Before we dive into the list of health, let’s go.</p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-green-800 text-white p-6 rounded-lg">
          <h2 className="text-4xl font-bold">Trusted Wellness</h2>
          <p className="text-yellow-300">Dedicated departments</p>
          <div className="flex justify-between mt-4">
            <span>24+</span>
            <img src="/wellness-image1.jpg" alt="Wellness" className="w-20 h-20 rounded-full" />
          </div>
        </div>
        <div className="bg-green-700 text-white p-6 rounded-lg">
          <h2 className="text-4xl font-bold">Wishing you a healthy happy life</h2>
          <p className="text-yellow-300">Conquer your health goals, one step at a time</p>
          <div className="flex justify-between mt-4">
            <span>6AM - 6PM</span>
            <img src="/wellness-image2.jpg" alt="Wellness" className="w-20 h-20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}