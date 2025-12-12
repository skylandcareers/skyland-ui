'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LeadForm from '@/components/LeadForm';
import {
  CheckCircle2,
  Timer,
  DollarSign,
  ArrowRight,
  Phone,
  Clock,
  Mail,
  Briefcase,
  GraduationCap,
  Building2
} from 'lucide-react';
import { singaporeStudyVisaContent } from './content';
import type { SingaporeStudyVisaContent } from './content.d';

const contactInfo = {
  phone: "+91-9032420000",
  email: "info@skylandimmigration.com",
  hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT"
};

const SingaporeStudyVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('general');
  const content = singaporeStudyVisaContent as SingaporeStudyVisaContent;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Study in <span className="text-yellow-300">Singapore</span> with Guaranteed Internship
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Get a 1-year diploma with paid internship opportunity after 6 months. 
                Fast-track your career with practical industry experience in Singapore.
              </p>
              <div className="space-y-4 bg-blue-500 p-5 rounded-xl">
                {content.mainBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span className="text-blue-50 text-base">{benefit.description}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-5 pt-3">
                <button className="inline-flex items-center gap-2 bg-yellow-300 text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-200 transition-colors text-base">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-2.5 rounded-lg font-medium hover:bg-white/10 transition-colors text-base">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Quick Stats */}
        <section className="py-8 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-blue-600 mb-3"><Timer className="w-6 h-6" /></div>
              <p className="text-sm text-gray-600 mb-1">Course Duration</p>
              <p className="text-lg font-semibold text-gray-900">1 Year</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-blue-600 mb-3"><Briefcase className="w-6 h-6" /></div>
              <p className="text-sm text-gray-600 mb-1">Internship Start</p>
              <p className="text-lg font-semibold text-gray-900">After 6 Months</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-blue-600 mb-3"><DollarSign className="w-6 h-6" /></div>
              <p className="text-sm text-gray-600 mb-1">Internship Salary</p>
              <p className="text-lg font-semibold text-gray-900">SGD 800-1,500/month</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-blue-600 mb-3"><GraduationCap className="w-6 h-6" /></div>
              <p className="text-sm text-gray-600 mb-1">Success Rate</p>
              <p className="text-lg font-semibold text-gray-900">90% Visa Approval</p>
            </motion.div>
          </div>
        </section>

        {/* Internship Highlights */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Internship Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Eligibility Criteria</h3>
              <ul className="space-y-3">
                {content.internshipHighlights.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {content.internshipHighlights.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Top Industries */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Industries for Internship</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.internshipHighlights.industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {content.applicationProcess.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-4 mb-6">
              {['general', 'internship', 'financial'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            {content.faqs[activeTab as keyof typeof content.faqs].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaqIndex === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8 md:py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingaporeStudyVisaPage;