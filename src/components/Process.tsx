'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaComments, FaCheckCircle, FaPlaneArrival } from 'react-icons/fa';

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <FaComments className="text-yellow-400 w-8 h-8" />,
    title: 'Free Consultation',
    description: 'Discuss your goals with our experts to choose the best visa option.',
  },
  {
    id: 2,
    icon: <FaFileAlt className="text-yellow-400 w-8 h-8" />,
    title: 'Document Preparation',
    description: 'We help you prepare and review all necessary documents carefully.',
  },
  {
    id: 3,
    icon: <FaCheckCircle className="text-yellow-400 w-8 h-8" />,
    title: 'Application Submission',
    description: 'Submit your application with confidence, guided by our team.',
  },
  {
    id: 4,
    icon: <FaPlaneArrival className="text-yellow-400 w-8 h-8" />,
    title: 'Post Visa Arrival & Support',
    description: 'We assist you post-approval with settlement and local resources.',
  },
];

const Process = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Process</h2>
        <div className="relative">
          {/* Connector line for large screens */}
          <div className="hidden lg:block absolute top-12 left-1/2 transform -translate-x-1/2 h-px w-full max-w-5xl bg-gray-200 z-0" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map(({ id, icon, title, description }) => (
              <motion.div
                key={id}
                className="flex flex-col items-center bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition-shadow hover:scale-105 duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: id * 0.15 }}
              >
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-white rounded-full border-2 border-yellow-400 flex items-center justify-center text-sm font-bold text-yellow-500 shadow">
                    {id}
                  </div>
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
