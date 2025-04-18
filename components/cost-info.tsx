'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function CostInfo() {
  // Card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        mass: 1,
        delay: i * 0.15
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {[
          {
            title: "Basic Plan",
            description: "For occasional assistance",
            price: "Rs 5000",
            features: [
              "24/7 Support",
              "Basic Training",
              "Up to 10 hours/week"
            ],
            index: 0
          },
          {
            title: "Standard Plan",
            description: "Most popular choice",
            price: "Rs 9999",
            features: [
              "24/7 Support",
              "Advanced Training",
              "Up to 20 hours/week",
              "Medical Coordination"
            ],
            index: 1
          },
          {
            title: "Premium Plan",
            description: "Full-service care",
            price: "Rs 11999",
            features: [
              "24/7 Support",
              "Specialized Training",
              "Unlimited hours",
              "Medical Coordination",
              "Family Support Services"
            ],
            index: 2
          }
        ].map((plan, index) => (
          <motion.div
            key={plan.title}
            custom={plan.index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            className="w-full md:w-1/3"
          >
            <Card className="h-full bg-black text-white overflow-hidden border border-gray-800">
              <CardHeader className="text-white">
                <CardTitle className="text-white text-xl">{plan.title}</CardTitle>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.p 
                    variants={itemVariants}
                    className="text-3xl font-bold mb-4 text-white"
                  >
                    {plan.price}<span className="text-sm text-gray-300">/month</span>
                  </motion.p>
                  <ul className="space-y-2 text-white">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        className="flex items-center text-white"
                      >
                        <span className="mr-2 text-green-400">✓</span> {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}