import { motion } from 'framer-motion';

export default function HealthcareSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 bg-gray-100">
      <div className="space-y-6">
        <div className="bg-green-900 text-white p-6 rounded-lg">
          <h2 className="text-4xl font-bold">Trust expertise healthcare service</h2>
          <p className="text-yellow-300">Before we dive into the list of essential tips.</p>
          <div className="mt-4">
            <span className="text-4xl font-bold">80%</span>
            <p className="text-yellow-300">Patient recovery rates</p>
          </div>
        </div>
        <img src="/healthcare-image1.jpg" alt="Healthcare" className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="space-y-6">
        <div className="bg-yellow-300 text-green-900 p-6 rounded-lg">
          <h2 className="text-4xl font-bold">Health professional you can trust</h2>
          <p className="text-green-800">Set goals</p>
          <div className="mt-4 flex items-center space-x-4">
            <img src="/handshake.jpg" alt="Handshake" className="w-20 h-20 rounded-full" />
            <div>
              <p>Old age caring team</p>
              <p>Health is well mind</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-200 text-green-900 p-6 rounded-lg">
          <h2 className="text-4xl font-bold">Empowering your health uplifting your life</h2>
          <p className="text-green-800">Before we dive into the list of health</p>
          <div className="flex space-x-4 mt-4">
            <img src="/health-image1.jpg" alt="Health" className="w-20 h-20 rounded-full" />
            <img src="/health-image2.jpg" alt="Health" className="w-20 h-20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}