'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  School,
  Award,
  BookOpen as Book,
  DollarSign,
  Calendar,
  Users,
  MapPin,
  Timer,
  Euro,
  ArrowRight,
  Phone,
  Clock,
  Mail,
  Home,
} from 'lucide-react';
import {
  irelandStudyVisaContent,
  IrelandStudyVisaContent,
  Benefit,
  VisaType,
  University,
  ApplicationStep,
  FAQ,
  FAQSection
} from './content';
import LeadForm from '@/components/LeadForm';

const contactInfo = {
  phone: "+91-9032420000",
  email: "saiteja.b@skylandcareers.com",
  hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT"
};
const IrelandStudyVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('general');
  const content = irelandStudyVisaContent as IrelandStudyVisaContent;


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
            <motion.div
              className="space-y-4 md:space-y-7 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Study in <span className="text-yellow-300">Ireland</span> - Your Gateway to European Education
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Get comprehensive guidance for your Irish student visa application with our 98% success rate.
                Includes post-study work opportunities and PR pathways.
              </p>
              <div className="space-y-4 bg-blue-500 p-5 rounded-xl">
                {content.mainBenefits.map((benefit: Benefit, index: number) => (
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
                <a href="#universities" className="text-yellow-300 font-medium hover:text-yellow-200 transition-colors text-base">
                  View Universities
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm"
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Quick Stats */}
        <section className="py-8 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <motion.div
              className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-blue-600 mb-3"><Timer className="w-6 h-6" /></div>
              <p className="text-sm text-gray-600 mb-1">Processing Time</p>
              <p className="text-lg font-semibold text-gray-900">4-8 weeks</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-blue-600 mb-3"><Euro className="w-6 h-6" /></div>
              <p className="text-sm text-gray-600 mb-1">Visa Fee</p>
              <p className="text-lg font-semibold text-gray-900">€60</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-blue-600 mb-3"><Calendar className="w-6 h-6" /></div>
              <p className="text-sm text-gray-600 mb-1">Stay Duration</p>
              <p className="text-lg font-semibold text-gray-900">Course Duration + 24 months</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-blue-600 mb-3"><Users className="w-6 h-6" /></div>
              <p className="text-sm text-gray-600 mb-1">Work Rights</p>
              <p className="text-lg font-semibold text-gray-900">20 hrs/week (40 hrs in holidays)</p>
            </motion.div>
          </div>
        </section>

        {/* Visa Types */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Ireland Study Visa Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(content.visaTypes).map(([key, visa]: [string, VisaType], index: number) => (
              <motion.div
                key={key}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-3">{visa.title}</h3>
                <p className="text-gray-600 mb-4">{visa.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {visa.requirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {visa.benefits.map((benefit: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Universities */}
        <section id="universities" className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Irish Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.universities.map((university: University, index: number) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <School className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {university.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {university.ranking}
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-gray-700 mb-1">Specialties:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {university.specialties.map((specialty: string, i: number) => (
                        <li key={i}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Costs Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Cost Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Book className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tuition Fees</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-700">Undergraduate</p>
                  <p className="text-gray-600">{content.costs.tuitionFees.undergraduate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Postgraduate</p>
                  <p className="text-gray-600">{content.costs.tuitionFees.postgraduate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">PhD</p>
                  <p className="text-gray-600">{content.costs.tuitionFees.phd}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Home className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Living Expenses</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-700">Dublin</p>
                  <p className="text-gray-600">{content.costs.livingExpenses.dublin}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Other Cities</p>
                  <p className="text-gray-600">{content.costs.livingExpenses.otherCities}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visa Fees</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-700">Application Fee</p>
                  <p className="text-gray-600">{content.costs.visaFees.application}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">GNIB Registration</p>
                  <p className="text-gray-600">{content.costs.visaFees.registration}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

          {/* FAQ Tabs */}
          <div className="flex flex-wrap gap-4 mb-6">
            {Object.keys(content.faqs).map((tab: string) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {content.faqs[activeTab as keyof FAQSection].map((faq: FAQ, index: number) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow"
                initial={false}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="py-8 md:py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {content.applicationProcess.map((step: ApplicationStep, index: number) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
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

export default IrelandStudyVisaPage;