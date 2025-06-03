'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaPassport, FaUniversity, FaMoneyBillWave, FaCertificate, FaLanguage, FaCheckCircle, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';
import { Globe, Calendar } from 'lucide-react';

const countries = [
  {
    name: "Canada",
    flag: "🇨🇦",
    documents: [
      { name: "Valid Passport", icon: <FaPassport /> },
      { name: "Letter of Acceptance from DLI", icon: <FaUniversity /> },
      { name: "Proof of Financial Support", icon: <FaMoneyBillWave /> },
      { name: "Academic Transcripts", icon: <FaFileAlt /> },
      { name: "IELTS/TOEFL Scores", icon: <FaLanguage /> },
      { name: "Statement of Purpose", icon: <FaFileAlt /> },
      { name: "Medical Examination Report", icon: <FaFileAlt /> }
    ],
    processingTime: "8-12 weeks",
    visaType: "Study Permit"
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    documents: [
      { name: "Valid Passport", icon: <FaPassport /> },
      { name: "CAS from University", icon: <FaUniversity /> },
      { name: "Financial Evidence", icon: <FaMoneyBillWave /> },
      { name: "Academic Certificates", icon: <FaCertificate /> },
      { name: "IELTS/PTE Scores", icon: <FaLanguage /> },
      { name: "TB Test Results", icon: <FaFileAlt /> },
      { name: "ATAS Certificate (if required)", icon: <FaFileAlt /> }
    ],
    processingTime: "3-4 weeks",
    visaType: "Student Visa (Tier 4)"
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    documents: [
      { name: "Valid Passport", icon: <FaPassport /> },
      { name: "University Admission Letter", icon: <FaUniversity /> },
      { name: "Blocked Account Proof", icon: <FaMoneyBillWave /> },
      { name: "Academic Certificates", icon: <FaCertificate /> },
      { name: "German Language Certificate", icon: <FaLanguage /> },
      { name: "Curriculum Vitae", icon: <FaFileAlt /> },
      { name: "Health Insurance Proof", icon: <FaFileAlt /> }
    ],
    processingTime: "4-8 weeks",
    visaType: "National Visa (D)"
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    documents: [
      { name: "Valid Passport", icon: <FaPassport /> },
      { name: "eCoE from Institution", icon: <FaUniversity /> },
      { name: "Financial Capacity Proof", icon: <FaMoneyBillWave /> },
      { name: "Academic Transcripts", icon: <FaFileAlt /> },
      { name: "IELTS/TOEFL Scores", icon: <FaLanguage /> },
      { name: "GTE Statement", icon: <FaFileAlt /> },
      { name: "Overseas Student Health Cover", icon: <FaFileAlt /> }
    ],
    processingTime: "4-6 weeks",
    visaType: "Student Visa (Subclass 500)"
  }
];

const documentTips = [
  {
    icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
    title: "Document Authenticity",
    details: "Ensure all documents are original or notarized copies"
  },
  {
    icon: <FaFileAlt className="text-blue-600 text-2xl" />,
    title: "Translations",
    details: "Get certified translations for non-English documents"
  },
  {
    icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
    title: "Timeline",
    details: "Start collecting documents 3-4 months before application"
  },
  {
    icon: <FaInfoCircle className="text-blue-600 text-2xl" />,
    title: "Format Requirements",
    details: "Follow specific format and size requirements for each document"
  },
  {
    icon: <FaPassport className="text-blue-600 text-2xl" />,
    title: "Passport Validity",
    details: "Ensure passport is valid for at least 6 months beyond planned stay"
  },
  {
    icon: <FaMoneyBillWave className="text-blue-600 text-2xl" />,
    title: "Financial Documents",
    details: "Recent bank statements and financial sponsorship letters"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Document Collection",
    description: "Gather all required documents from various sources"
  },
  {
    step: 2,
    title: "Document Verification",
    description: "Get documents verified and authenticated by authorities"
  },
  {
    step: 3,
    title: "Translation",
    description: "Translate documents to required language if needed"
  },
  {
    step: 4,
    title: "Document Review",
    description: "Expert review to ensure compliance with requirements"
  },
  {
    step: 5,
    title: "Application Submission",
    description: "Submit documents with visa application"
  }
];

export default function DocumentsRequiredPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Documents Required for Study Abroad
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Complete guide to documentation requirements for international student visas
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Country-specific requirements
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Expert guidance available
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <motion.section
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Country-Specific Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                className="border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-800">{country.name}</h3>
                  <span className="text-2xl">{country.flag}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {country.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-blue-600 mr-2">{doc.icon}</span>
                      {doc.name}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Processing Time</span>
                    <p className="font-semibold">{country.processingTime}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Visa Type</span>
                    <p className="font-semibold">{country.visaType}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Document Tips Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Important Document Guidelines
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTips.map((tip, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {tip.icon}
                  <h3 className="text-lg font-semibold ml-3">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Document Processing Steps
          </motion.h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Need Help with Your Documents?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get expert assistance with document preparation and verification
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition font-semibold text-lg"
            >
              Call Now: +91 98765 43210
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}