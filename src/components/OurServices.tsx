'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineClipboardCheck,
  HiOutlineDocumentText,
  HiOutlineMailOpen,
  HiOutlineSearch,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
} from 'react-icons/hi';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <HiOutlineClipboardCheck />,
    title: 'Visa Consultation',
    description: 'Personalized guidance based on your profile and country of interest.',
  },
  {
    icon: <HiOutlineDocumentText />,
    title: 'Document Preparation',
    description: 'We help organize, review, and verify all your visa documents.',
  },
  {
    icon: <HiOutlineMailOpen />,
    title: 'Application Submission',
    description: 'We ensure your application is submitted accurately and on time.',
  },
  {
    icon: <HiOutlineSearch />,
    title: 'Follow-ups & Updates',
    description: 'Stay informed with real-time application tracking and alerts.',
  },
  {
    icon: <HiOutlineAcademicCap />,
    title: 'Student Visa Services',
    description: 'Expert help with admission, visa, and travel for studying abroad.',
  },
  {
    icon: <HiOutlineUserGroup />,
    title: 'Family & Spouse Visas',
    description: 'We handle reunification and dependent visa cases with care.',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const OurServices: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 bg-white text-center overflow-hidden">
      {/* Background Accent Shapes */}
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-full opacity-20 filter blur-3xl animate-blob animation-delay-3000"></div>

      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 relative z-10">
        Our Services
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-12 relative z-10">
        From visa consultations to document preparation and application follow-ups, we cover everything to ensure your success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group cursor-default"
          >
            <div className="text-yellow-500 text-5xl mb-5 group-hover:text-yellow-600 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -40px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default OurServices;
