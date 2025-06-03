'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaUserCheck, FaThumbsUp, FaStamp } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUserCheck className="w-8 h-8 text-yellow-500" />,
    label: 'Clients Served',
    value: '10,000+',
  },
  {
    icon: <FaStamp className="w-8 h-8 text-yellow-500" />,
    label: 'Visas Approved',
    value: '8,500+',
  },
  {
    icon: <FaGlobe className="w-8 h-8 text-yellow-500" />,
    label: 'Countries Covered',
    value: '20+',
  },
  {
    icon: <FaThumbsUp className="w-8 h-8 text-yellow-500" />,
    label: 'Approval Rate',
    value: '98%',
  },
];

const ImpactStats = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Our <span className="text-yellow-500">Impact</span> in Numbers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
