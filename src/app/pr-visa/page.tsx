'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPassport, FaGlobe, FaChartLine, FaUserTie, FaGraduationCap, FaFileAlt, FaCheckCircle, FaArrowRight, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Users, Briefcase, Award, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const prCategories = [
  {
    title: "Skilled Worker PR",
    icon: <FaUserTie className="w-8 h-8" />,
    description: "For professionals with work experience",
    benefits: [
      "Fast track processing",
      "Family inclusion",
      "Access to social benefits",
      "Career mobility"
    ]
  },
  {
    title: "Business Immigration",
    icon: <Briefcase className="w-8 h-8" />,
    description: "For entrepreneurs and investors",
    benefits: [
      "Business ownership",
      "Investment opportunities",
      "Economic mobility",
      "Market access"
    ]
  },
  {
    title: "Family Sponsorship",
    icon: <Users className="w-8 h-8" />,
    description: "For family reunification",
    benefits: [
      "Family unity",
      "Dependent coverage",
      "Extended family benefits",
      "Social integration"
    ]
  }
];

const eligibilityCriteria = [
  {
    title: "Work Experience",
    icon: <FaUserTie className="w-6 h-6" />,
    points: "Up to 40 points",
    requirements: [
      "Minimum 3 years experience",
      "Skilled occupation",
      "Recent employment"
    ]
  },
  {
    title: "Education",
    icon: <FaGraduationCap className="w-6 h-6" />,
    points: "Up to 30 points",
    requirements: [
      "Bachelor's degree or higher",
      "Accredited institution",
      "Education assessment"
    ]
  },
  {
    title: "Language Proficiency",
    icon: <FaGlobe className="w-6 h-6" />,
    points: "Up to 20 points",
    requirements: [
      "IELTS score 7+",
      "Speaking and Writing",
      "Reading and Listening"
    ]
  },
  {
    title: "Age Factor",
    icon: <FaClock className="w-6 h-6" />,
    points: "Up to 10 points",
    requirements: [
      "18-35 years: max points",
      "36-45: moderate points",
      "46+: reduced points"
    ]
  }
];

const processingSteps = [
  {
    step: 1,
    title: "Eligibility Assessment",
    description: "Evaluate your qualifications and points score",
    duration: "1-2 weeks",
    icon: <FaCheckCircle className="w-6 h-6" />
  },
  {
    step: 2,
    title: "Document Preparation",
    description: "Gather and authenticate required documents",
    duration: "2-4 weeks",
    icon: <FaFileAlt className="w-6 h-6" />
  },
  {
    step: 3,
    title: "Application Submission",
    description: "Submit application with supporting documents",
    duration: "1 week",
    icon: <FaPassport className="w-6 h-6" />
  },
  {
    step: 4,
    title: "Processing Time",
    description: "Application review and verification",
    duration: "6-12 months",
    icon: <Clock className="w-6 h-6" />
  }
];

const countryOptions = [
  {
    country: "Canada",
    program: "Express Entry",
    processingTime: "6-8 months",
    minPoints: "67 points",
    image: "/images/canada-flag.jpg"
  },
  {
    country: "Australia",
    program: "SkillSelect",
    processingTime: "8-10 months",
    minPoints: "65 points",
    image: "/images/australia-flag.jpg"
  },
  {
    country: "New Zealand",
    program: "Skilled Migrant",
    processingTime: "7-9 months",
    minPoints: "160 points",
    image: "/images/newzealand-flag.jpg"
  }
];

const commonDocuments = [
  {
    title: "Identity Documents",
    items: [
      "Valid passport",
      "Birth certificate",
      "National ID",
      "Recent photographs"
    ]
  },
  {
    title: "Educational Documents",
    items: [
      "Degree certificates",
      "Transcripts",
      "Education assessment",
      "Professional certifications"
    ]
  },
  {
    title: "Work Documents",
    items: [
      "Experience letters",
      "Employment contracts",
      "Salary statements",
      "Reference letters"
    ]
  },
  {
    title: "Financial Documents",
    items: [
      "Bank statements",
      "Income tax returns",
      "Asset documents",
      "Investment proofs"
    ]
  }
];

export default function PRVisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Path to Permanent Residence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your temporary stay into a permanent home with our comprehensive PR visa services
            </p>
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
              Start Your PR Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* PR Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            PR Visa Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Eligibility Points System
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibilityCriteria.map((criteria, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-4">
                  {criteria.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{criteria.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{criteria.points}</p>
                <ul className="space-y-2">
                  {criteria.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Application Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processingSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </div>
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="w-4 h-4 mr-2" />
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Options */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Popular PR Destinations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countryOptions.map((country, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={country.image}
                    alt={`${country.country} Flag`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{country.country}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      {country.program}
                    </p>
                    <p className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {country.processingTime}
                    </p>
                    <p className="flex items-center">
                      <FaChartLine className="w-4 h-4 mr-2" />
                      Min: {country.minPoints}
                    </p>
                  </div>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 flex items-center">
                    Learn More
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Required Documents
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonDocuments.map((docType, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">{docType.title}</h3>
                <ul className="space-y-2">
                  {docType.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your PR Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our immigration experts are here to guide you through every step of your PR visa application
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
                Book Free Consultation
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition font-semibold text-lg">
                Download PR Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
