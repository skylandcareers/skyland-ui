'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

const WhyChoose = () => {
  const features: FeatureItem[] = [
    {
      icon: '✅',
      title: '10,000+ Clients Trusted',
      desc: 'Proven track record across Canada, UK, Australia, and more.',
    },
    {
      icon: '👨‍⚖️',
      title: 'Certified Immigration Experts',
      desc: 'Licensed professionals guiding you with accurate legal advice.',
    },
    {
      icon: '🕒',
      title: 'Fast Processing & Updates',
      desc: 'Real-time tracking, proactive updates, and zero guesswork.',
    },
    {
      icon: '💬',
      title: 'Free Consultation',
      desc: 'Get clarity with a no-obligation assessment by our experts.',
    },
    {
      icon: '🌐',
      title: 'Global Visa Expertise',
      desc: 'Study, Work, PR, Tourist — we have mastered it all.',
    },
    {
      icon: '📞',
      title: '24/7 Support Team',
      desc: 'We’re always just a call, chat, or email away.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Why Choose Skyland Immigration?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 sm:mb-16">
          We&apos;re not just another visa agency - we&apos;re your trusted partners through every step of your global journey.
        </p>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-500">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
