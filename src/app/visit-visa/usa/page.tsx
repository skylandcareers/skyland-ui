'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Phone, 
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
  X,
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
  Info
} from 'lucide-react';
import { 
  usaVisitVisaContent
} from './content';
import LeadForm from '@/components/LeadForm';
import { ArrowRight } from 'lucide-react';

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

interface FAQ {
  question: string;
  answer: string;
}

interface QuickStat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface VisaType {
  title: string;
  description: string;
  permittedActivities?: string[];
  prohibitedActivities?: string[];
  benefits?: string[];
}

// Type assertions with unknown first for safety
const visaContent = usaVisitVisaContent;
const visaFAQs = usaVisitVisaContent.faqs;

// Data constants
const supportServices: Service[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Documentation Services",
    services: ["Document Translation", "Form DS-160 Assistance", "Interview Preparation"]
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Travel Services",
    services: ["Hotel Booking", "Travel Insurance", "Airport Pickup"]
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Support Channels",
    services: ["24/7 Helpline", "Online Chat Support", "Email Assistance"]
  }
];

const contactInfo: ContactInfo = {
  phone: "+1 XXX XXX XXXX",
  email: "info@skylandjune.com",
  hours: "Mon-Fri: 9:00 AM - 5:30 PM EST"
};

const quickStats: QuickStat[] = [
  { 
    icon: <Timer className="w-6 h-6" />, 
    label: "Processing Time", 
    value: "3-5 weeks" 
  },
  { 
    icon: <DollarSign className="w-6 h-6" />, 
    label: "Visa Fee", 
    value: "$185" 
  },
  { 
    icon: <Globe className="w-6 h-6" />, 
    label: "Validity", 
    value: "10 years" 
  },
  { 
    icon: <FileText className="w-6 h-6" />, 
    label: "Entry Type", 
    value: "Multiple" 
  }
];

// Add type checking for visa types
const renderVisaTypeContent = (visa: VisaType) => {
  return (
    <>
      <h3 className="text-xl font-bold text-blue-600 mb-3">{visa.title}</h3>
      <p className="text-gray-600 mb-4">{visa.description}</p>
      
      {visa.permittedActivities && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Permitted Activities:</h4>
          <ul className="space-y-2">
            {visa.permittedActivities.map((activity: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                <span className="text-gray-600">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {visa.prohibitedActivities && (
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Prohibited Activities:</h4>
          <ul className="space-y-2">
            {visa.prohibitedActivities.map((activity: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 mt-1" />
                <span className="text-gray-600">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const USVisitVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
                <span className="text-yellow-400">USA Visit Visa</span>{' '}
                Starts Here
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Expert guidance on B1/B2 visa applications, document preparation, and interview success. 
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">USA Visa Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(visaContent.visaTypes).map(([key, visa], index) => (
              <motion.div
                key={key}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {renderVisaTypeContent(visa as VisaType)}
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
                {visaContent.eligibility.documentation.mandatory.map((doc, index) => (
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
                {visaContent.eligibility.documentation.recommended.map((doc, index) => (
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
                {visaContent.eligibility.financial.proofRequirements.map((doc, index) => (
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
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Students</h3>
              <ul className="space-y-3">
                {visaContent.eligibility.specialCases.students.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Medical Visitors</h3>
              <ul className="space-y-3">
                {visaContent.eligibility.specialCases.medical.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Retirees</h3>
              <ul className="space-y-3">
                {visaContent.eligibility.specialCases.retirees.requirements.map((req, index) => (
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
                    <span className="text-gray-700">Duration: {visaContent.application.processing.standard}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">Affecting Factors:</p>
                    <ul className="space-y-2">
                      {visaContent.application.processing.factors.map((factor, index) => (
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
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Expedited Processing</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Timer className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Duration: {visaContent.application.processing.expedited}</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      Expedited processing is available for an additional fee and requires proof of urgent travel need.
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
            {visaContent.application.steps.map((step, index) => (
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
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {Object.entries(visaFAQs).map(([category, faqs]: [string, FAQ[]], categoryIndex) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">{category}</h3>
                <div className="space-y-3">
                  {faqs.map((faq: FAQ, index: number) => (
                    <motion.div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (categoryIndex + index) * 0.1 }}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(categoryIndex * 100 + index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {openFaqIndex === (categoryIndex * 100 + index) ? (
                          <ChevronUp className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-blue-600" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === (categoryIndex * 100 + index) && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
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
                  <a href="https://ceac.state.gov/genniv" className="text-blue-600 hover:underline">
                    DS-160 Form Online Application
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <a href="https://ais.usvisa-info.com" className="text-blue-600 hover:underline">
                    Visa Appointment Scheduling
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  <a href="https://www.usembassy.gov" className="text-blue-600 hover:underline">
                    Find US Embassy/Consulate
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-blue-500" />
                  <a href="https://www.ustraveldocs.com/in/en/fee-calculator" className="text-blue-600 hover:underline">
                    Visa Fee Calculator
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
                    <p className="font-medium text-gray-900">US Embassy Emergency</p>
                    <p className="text-gray-600">+1-202-501-4444</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Visa Services Support</p>
                    <p className="text-gray-600">+1-703-665-1000</p>
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
                  <span className="text-gray-700">Visa Application (MRV)</span>
                  <span className="font-semibold">$160</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Reciprocity Fee</span>
                  <span className="font-semibold">Varies by country</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Additional Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Expedited Processing</span>
                  <span className="font-semibold">$2,500</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Courier Service</span>
                  <span className="font-semibold">$20-40</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Payment Methods</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Credit/Debit Cards</span>
                </li>
                <li className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Bank Transfer</span>
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
                  "Incomplete or incorrect information in DS-160",
                  "Missing or invalid supporting documents",
                  "Insufficient financial proof",
                  "Inconsistent travel history"
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
                  "Communication problems during interview",
                  "Previous visa violations"
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
                {visaContent.travelTips.beforeTravel.map((tip, index) => (
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
                {visaContent.travelTips.duringStay.map((tip, index) => (
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
                    {visaContent.travelTips.customs.allowed.map((item, index) => (
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
                    {visaContent.travelTips.customs.restricted.map((item, index) => (
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

        {/* Port of Entry Process */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Port of Entry Process</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Entry Steps</h3>
                <ul className="space-y-4">
                  {visaContent.portOfEntry.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-semibold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{step.step}</p>
                        <p className="text-gray-600">{step.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Required Documents</h3>
                <ul className="space-y-3">
                  {visaContent.portOfEntry.requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Important Tips</h4>
                  <ul className="space-y-2">
                    {visaContent.portOfEntry.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-blue-500 mt-1" />
                        <span className="text-blue-800">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default USVisitVisaPage;
