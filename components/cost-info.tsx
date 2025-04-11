'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function CostInfo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3"
        >
          <Card className="h-full bg-black text-white">
            <CardHeader className="text-white">
              <CardTitle className="text-white">Basic Plan</CardTitle>
              <CardDescription className="text-white">For occasional assistance</CardDescription>
            </CardHeader>
            <CardContent className="text-white">
              <p className="text-3xl font-bold mb-4 text-white">Rs 5000<span className="text-sm text-white">/month</span></p>
              <ul className="space-y-2 text-white">
                <li className="flex items-center text-white">✓ 24/7 Support</li>
                <li className="flex items-center text-white">✓ Basic Training</li>
                <li className="flex items-center text-white">✓ Up to 10 hours/week</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/3"
        >
          <Card className="h-full bg-black text-white">
            <CardHeader className="text-white">
              <CardTitle className="text-white">Standard Plan</CardTitle>
              <CardDescription className="text-white">Most popular choice</CardDescription>
            </CardHeader>
            <CardContent className="text-white">
              <p className="text-3xl font-bold mb-4 text-white">Rs 9999<span className="text-sm text-white">/month</span></p>
              <ul className="space-y-2 text-white">
                <li className="flex items-center text-white">✓ 24/7 Support</li>
                <li className="flex items-center text-white">✓ Advanced Training</li>
                <li className="flex items-center text-white">✓ Up to 20 hours/week</li>
                <li className="flex items-center text-white">✓ Medical Coordination</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/3"
        >
          <Card className="h-full bg-black text-white">
            <CardHeader className="text-white">
              <CardTitle className="text-white">Premium Plan</CardTitle>
              <CardDescription className="text-white">Full-service care</CardDescription>
            </CardHeader>
            <CardContent className="text-white">
              <p className="text-3xl font-bold mb-4 text-white">Rs 11999<span className="text-sm text-white">/month</span></p>
              <ul className="space-y-2 text-white">
                <div>
                <li className="flex items-center ">✓ 24/7 Support</li>
                <li className="flex items-center ">✓ Specialized Training</li>
                <li className="flex items-center ">✓ Unlimited hours</li>
                <li className="flex items-center ">✓ Medical Coordination</li>
                <li className="flex items-center ">✓ Family Support Services</li>

                </div>
                
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
    </div>
  );
}