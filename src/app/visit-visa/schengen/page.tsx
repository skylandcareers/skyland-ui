'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Phone, 
  Mail,
  Clock,
  ChevronDown,
  FileText,
  DollarSign,
  Globe,
  Timer,
  GraduationCap,
  Home,
  AlertCircle,
  Calendar,
  MapPin,
  Plane,
  Building2,
  BadgeCheck,
  XCircle,
  Info,
  Folder,
  User,
  CreditCard
} from 'lucide-react';
import { 
  schengenVisaContent,
  schengenVisaCities,
  schengenVisaFAQs
} from './content';
import LeadForm from '@/components/LeadForm';
import { ArrowRight } from 'lucide-react';
import { TimelineStep } from './types';

// Type definitions
interface Service {
  icon: React.ReactNode;
  title: string;
  services: string[];
}

interface ContactInfo {
  phone: string;
  email: string;
  hours: string;
}

interface QuickStat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

// Data constants
const supportServices: Service[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Documentation Services",
    services: ["Document Translation", "Application Form Assistance", "Interview Preparation"]
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Travel Services",
    services: ["Hotel Booking", "Travel Insurance", "Itinerary Planning"]
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Support Channels",
    services: ["24/7 Helpline", "Online Chat Support", "Email Assistance"]
  }
];

const contactInfo: ContactInfo = {
  phone: "+1 XXX XXX XXXX",
  email: "info@schengenvisahelp.com",
  hours: "Mon-Fri: 9:00 AM - 5:30 PM CET"
};

const quickStats: QuickStat[] = [
  { 
    icon: <Timer className="w-6 h-6" />, 
    label: "Processing Time", 
    value: "15 calendar days" 
  },
  { 
    icon: <DollarSign className="w-6 h-6" />, 
    label: "Visa Fee", 
    value: "€80" 
  },
  { 
    icon: <Globe className="w-6 h-6" />, 
    label: "Countries", 
    value: "27" 
  },
  { 
    icon: <FileText className="w-6 h-6" />, 
    label: "Entry Type", 
    value: "Single/Multiple" 
  }
];

// Expanded Timeline Data
const schengenVisaTimeline: TimelineStep[] = [
  {
    step: 1,
    title: "Determine Visa Type",
    description: "Identify the correct visa category based on your travel purpose (tourism, business, etc.)",
    duration: "Before application",
    icon: FileText
  },
  {
    step: 2,
    title: "Complete Application Form",
    description: "Fill out the Schengen visa application form accurately",
    duration: "Day 1",
    icon: FileText
  },
  {
    step: 3,
    title: "Gather Required Documents",
    description: "Collect all necessary documents including passport, photos, insurance, and financial proofs",
    duration: "Day 2-3",
    icon: Folder
  },
  {
    step: 4,
    title: "Schedule Appointment",
    description: "Book an appointment at the visa application center or embassy",
    duration: "Day 4-5",
    icon: Calendar
  },
  {
    step: 5,
    title: "Submit Application",
    description: "Attend your appointment and submit your application with all documents",
    duration: "Day 6",
    icon: CreditCard
  },
  {
    step: 6,
    title: "Biometrics Collection",
    description: "Provide fingerprints and facial image (if not previously given)",
    duration: "Day 6",
    icon: User
  },
  {
    step: 7,
    title: "Processing",
    description: "Your application undergoes verification and assessment",
    duration: "Day 7-20",
    icon: Clock
  },
  {
    step: 8,
    title: "Decision & Passport Return",
    description: "Receive notification of decision and collect your passport with visa (if approved)",
    duration: "Day 21-25",
    icon: Mail
  },
  {
    step: 9,
    title: "Travel Preparation",
    description: "Finalize your travel arrangements and ensure you have all required documents",
    duration: "Before departure",
    icon: Plane
  }
];

const SchengenVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredFaqs = schengenVisaFAQs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with improved mobile responsiveness */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
            <motion.div 
              className="space-y-4 md:space-y-7 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Your Journey to{' '}
                <span className="text-yellow-400">Schengen Visa</span>{' '}
                Starts Here
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Expert guidance on Schengen visa applications, document preparation, and interview success. 
                98% success rate with personalized support throughout your application process.
              </p>
              <div className="space-y-4 bg-blue-500/30 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Comprehensive visa assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Expert interview preparation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">End-to-end application support</span>
                </div>
              </div>
              <div className="flex items-center gap-5 pt-3">
                <button 
                  className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors text-base"
                >
                  Calculate Points
                <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="#timeline" 
                  className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors text-base"
                >
                  View Process Timeline
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
        {/* Quick Stats Section */}
        <section className="py-8 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-blue-600 mb-3">{stat.icon}</div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Visa Types Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Schengen Visa Types</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(schengenVisaContent.visaTypes).map(([key, visa]) => (
              <motion.div
                key={key}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="border-b border-gray-100 pb-4 mb-4">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{visa.title}</h3>
                  <p className="text-gray-600">{visa.description}</p>
                </div>

                {visa.permittedActivities && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Permitted Activities
                    </h4>
                    <ul className="space-y-2">
                      {visa.permittedActivities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {visa.prohibitedActivities && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Prohibited Activities
                    </h4>
                    <ul className="space-y-2">
                      {visa.prohibitedActivities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                          <span className="text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {visa.benefits && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-blue-500" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {visa.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interview Preparation Guide */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Visa Interview Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Common Interview Questions</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Purpose of Visit</p>
                    <p className="text-gray-600">Be clear and specific about your travel plans</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Ties to Home Country</p>
                    <p className="text-gray-600">Demonstrate strong reasons to return</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Financial Capability</p>
                    <p className="text-gray-600">Show ability to fund your entire trip</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Interview Tips</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Professional Appearance</p>
                    <p className="text-gray-600">Dress formally and maintain good posture</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Document Organization</p>
                    <p className="text-gray-600">Keep documents well-organized and easily accessible</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Clear Communication</p>
                    <p className="text-gray-600">Answer questions directly and truthfully</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Document Checklist */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Essential Documents</h3>
              <ul className="space-y-3">
                {schengenVisaContent.eligibility.documentation.mandatory.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Supporting Documents</h3>
              <ul className="space-y-3">
                {schengenVisaContent.eligibility.documentation.recommended.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Financial Documents</h3>
              <ul className="space-y-3">
                {schengenVisaContent.eligibility.financial.proofRequirements.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Special Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Minors</h3>
              <ul className="space-y-3">
                {schengenVisaContent.eligibility.specialCases.minors.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Business Travelers</h3>
              <ul className="space-y-3">
                {schengenVisaContent.eligibility.specialCases.business.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Visiting Family/Friends</h3>
              <ul className="space-y-3">
                {schengenVisaContent.eligibility.specialCases.visitingFamily.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Processing Timeline */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Processing Timeline</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Standard Processing</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700">Duration: {schengenVisaContent.application.processing.standard}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">Affecting Factors:</p>
                    <ul className="space-y-2">
                      {schengenVisaContent.application.processing.factors.map((factor, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-gray-700">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Maximum Processing Time</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Timer className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Duration: {schengenVisaContent.application.processing.maximum}</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      Processing may take longer during peak seasons or if additional documents are required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Process</h2>
          <div className="space-y-4">
            {schengenVisaContent.application.steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-sm flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.details}</p>
                  {step.tips && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Tips:</h4>
                      <ul className="space-y-2">
                        {step.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1" />
                            <span className="text-blue-800">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about Schengen visa applications
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="grid gap-8">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-600">
                  No FAQs found matching your search. Try different keywords.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto bg-white">
          <h2 className="text-3xl font-bold text-center mb-12">Application Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            
            <div className="space-y-12 pl-12">
              {schengenVisaTimeline.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={item.step}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="text-blue-600">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                            <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                              {item.duration}
                            </span>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Services Section */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Support Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-3">{service.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-3">{service.title}</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links and Emergency Contacts */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Important Links</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <a href="https://www.schengenvisainfo.com" className="text-blue-600 hover:underline">
                    Schengen Visa Information Portal
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <a href="https://ec.europa.eu/immigration" className="text-blue-600 hover:underline">
                    EU Immigration Portal
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  <a href="https://www.schengenvisainfo.com/embassies/" className="text-blue-600 hover:underline">
                    Find Schengen Embassies
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Emergency Contacts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">European Emergency Number</p>
                    <p className="text-gray-600">112 (Police, Medical, Fire)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Consular Assistance</p>
                    <p className="text-gray-600">Contact your country&apos;s embassy</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visa Fee Structure */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Visa Fee Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Basic Fees</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Visa Application Fee (Adults)</span>
                  <span className="font-semibold">€80</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Children (6-12 years)</span>
                  <span className="font-semibold">€40</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Additional Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Visa Center Service Fee</span>
                  <span className="font-semibold">€20-40</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Courier Service</span>
                  <span className="font-semibold">€15-30</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Payment Methods</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Cash (local currency)</span>
                </li>
                <li className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Credit/Debit Cards</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Reasons for Rejection */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Reasons for Visa Rejection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Application Issues</h3>
              <ul className="space-y-4">
                {[
                  "Incomplete application form",
                  "Missing or invalid supporting documents",
                  "Insufficient financial proof",
                  "No travel medical insurance"
                ].map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Interview Issues</h3>
              <ul className="space-y-4">
                {[
                  "Weak ties to home country",
                  "Unclear purpose of visit",
                  "Inconsistent information",
                  "Previous Schengen violations"
                ].map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Travel Planning */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Travel Planning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Before Departure</h3>
              <ul className="space-y-3">
                {schengenVisaContent.travelTips.beforeTravel.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Plane className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">{tip.title}</p>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">During Stay</h3>
              <ul className="space-y-3">
                {schengenVisaContent.travelTips.duringStay.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">{tip.title}</p>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Customs Guide</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-green-600 mb-2">Allowed Items</p>
                  <ul className="space-y-2">
                    {schengenVisaContent.travelTips.customs.allowed.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-600 mb-2">Restricted Items</p>
                  <ul className="space-y-2">
                    {schengenVisaContent.travelTips.customs.restricted.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Schengen Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schengenVisaCities.map((city, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-blue-600">{city.name}</h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{city.country}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="space-y-2">
                    {city.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Travel Tip:</h4>
                  <p className="text-blue-700 text-sm">{city.travelTips}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SchengenVisaPage;