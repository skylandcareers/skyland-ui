'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How long does the visa application process take?',
    answer:
      'Processing times vary by country and visa type, but typically range from a few weeks to several months.',
  },
  {
    question: 'What documents are required for my application?',
    answer:
      'Common documents include passport, educational certificates, proof of funds, medical reports, and application forms. Requirements vary by visa.',
  },
  {
    question: 'Can I track my application status online?',
    answer:
      'Yes, we provide real-time tracking and regular updates through your personalized dashboard.',
  },
  {
    question: 'Do you offer consultation services before I apply?',
    answer:
      'Absolutely! We provide free initial consultations to assess your eligibility and guide you on next steps.',
  },
  {
    question: 'What if my visa application gets rejected?',
    answer:
      'Our experts analyze the reasons for rejection and help you prepare a strong reapplication or appeal if applicable.',
  },
  {
    question: 'Can I bring my family with me on the same visa?',
    answer:
      'Many visa types allow for dependents such as spouses and children to accompany you. We’ll help assess your options.',
  },
  {
    question: 'Do you handle student visa applications?',
    answer:
      'Yes, we specialize in student visa guidance, university selection support, SOP editing, and interview preparation.',
  },
  {
    question: 'How much do your services cost?',
    answer:
      'Our fees vary based on visa category and support level. We offer transparent pricing after your initial consultation.',
  },
  {
    question: 'Is there a success guarantee?',
    answer:
      'While we cannot guarantee visa approval, our high success rate reflects our deep expertise and rigorous documentation checks.',
  },
  {
    question: 'Which countries do you support?',
    answer:
      'We assist with immigration to Canada, Australia, UK, USA, Germany, and more. Each country has its own dedicated experts.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Frequently Asked <span className="text-yellow-500">Questions</span>
      </h2>
      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-4 cursor-pointer transition-all"
            onClick={() => toggleIndex(index)}
            aria-expanded={openIndex === index}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              <span className="text-2xl text-yellow-400 font-bold">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="mt-2 text-gray-700 text-left"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
