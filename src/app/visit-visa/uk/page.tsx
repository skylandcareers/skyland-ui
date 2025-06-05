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
  Info,
  AlertCircle,
  PoundSterling,
  Stethoscope,
  Building,
  AlertOctagon,
  Plane,
  MapPin,
  Train,
  Fingerprint,
  ClipboardCheck
} from 'lucide-react';
import { 
  ukVisitVisaContent
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
const visaContent = ukVisitVisaContent;
const visaFAQs = ukVisitVisaContent.faqs;

// Data constants
const supportServices: Service[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Documentation Services",
    services: ["Document Translation", "Visa Application Assistance", "Interview Preparation"]
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
  phone: "+91-9032420000",
  email: "info@skylandjune.com",
  hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT"
};

const quickStats: QuickStat[] = [
  { 
    icon: <Timer className="w-6 h-6" />, 
    label: "Processing Time", 
    value: "3 weeks" 
  },
  { 
    icon: <DollarSign className="w-6 h-6" />, 
    label: "Visa Fee", 
    value: "£100" 
  },
  { 
    icon: <Globe className="w-6 h-6" />, 
    label: "Stay Duration", 
    value: "6 months" 
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

const UKVisitVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('identity');

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
                <span className="text-yellow-400">UK Visit Visa</span>{' '}
                Starts Here
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Expert guidance on UK Standard Visitor visa applications, document preparation, and application success. 
                98% success rate with personalized support throughout your application process.
              </p>
              <div className="space-y-4 bg-blue-500/30 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Comprehensive visa assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Expert application guidance</span>
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
                  Get Started
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">UK Visa Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(visaContent.visaTypes).map(([key, visa], index) => (
              <motion.div
                key={key}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {renderVisaTypeContent(visa)}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Visa Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">General Requirements</h3>
              <ul className="space-y-3">
                {Object.entries(visaContent.eligibility.general).map(([key, value]) => (
                  <li key={key} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Financial Requirements</h3>
              <ul className="space-y-3">
                {visaContent.eligibility.financial.proofRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Process</h2>
          <div className="space-y-6">
            {visaContent.application.steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.details}</p>
                    {step.tips && (
                      <ul className="space-y-2">
                        {step.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Info className="w-4 h-4 text-blue-500 mt-1" />
                            <span className="text-gray-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Document Requirements Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Document Requirements</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex gap-4 mb-6 overflow-x-auto">
              {visaContent.documentRequirements.map((category) => (
                <button
                  key={category.category.toLowerCase().replace(/\s+/g, '')}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                    activeTab === category.category.toLowerCase().replace(/\s+/g, '') 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(category.category.toLowerCase().replace(/\s+/g, ''))}
                >
                  {category.category}
                </button>
              ))}
            </div>
            <div className="space-y-6">
              {visaContent.documentRequirements.map((category) => (
                <div
                  key={category.category}
                  className={activeTab === category.category.toLowerCase().replace(/\s+/g, '') ? 'block' : 'hidden'}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.documents.map((doc) => (
                      <div key={doc.name} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 ${doc.required ? 'text-red-500' : 'text-blue-500'}`}>
                            {doc.required ? <AlertCircle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{doc.name}</h3>
                            <p className="text-gray-600 text-sm mt-1">{doc.description}</p>
                            {doc.required && (
                              <span className="inline-block mt-2 text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                                Required
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa Costs Section */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Visa Costs & Processing Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaContent.visaCosts.map((cost) => (
              <div key={`${cost.type}-${cost.duration}`} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <PoundSterling className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{cost.type}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-gray-900">{cost.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fee:</span>
                    <span className="font-medium text-gray-900">{cost.fee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Processing:</span>
                    <span className="font-medium text-gray-900">{cost.processingTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Mistakes to Avoid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visaContent.commonMistakes.map((mistake) => (
              <div key={mistake.mistake} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <AlertOctagon className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{mistake.mistake}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Solution:</h4>
                    <p className="text-gray-600">{mistake.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-red-700 mb-2">Potential Impact:</h4>
                    <p className="text-red-600">{mistake.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Healthcare Requirements Section */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Healthcare Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Insurance</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-medium">Required Coverage:</span> {visaContent.healthcare.insurance.minimumCoverage}
                </p>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Recommended Providers:</h4>
                  <ul className="space-y-2">
                    {visaContent.healthcare.insurance.recommendedProviders.map((provider) => (
                      <li key={provider} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">{provider}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Vaccinations</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Recommended:</h4>
                  <ul className="space-y-2">
                    {visaContent.healthcare.vaccinations.recommended.map((vaccination) => (
                      <li key={vaccination} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">{vaccination}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Emergency Contacts</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-medium">Emergency:</span> {visaContent.healthcare.emergencyInfo.emergencyNumber}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">NHS Helpline:</span> {visaContent.healthcare.emergencyInfo.nhsHelpline}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Hospitals:</span> {visaContent.healthcare.emergencyInfo.nearestHospitals}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Accommodation Guidelines</h2>
          
          {/* Accommodation Types */}
          <div className="flex flex-col gap-8">
            {visaContent.accommodation.types.map((type) => (
              <div key={type.type} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Main Info */}
                  <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">{type.type}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    
                    {/* Essential Requirements */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3">Essential Requirements</h4>
                      <ul className="space-y-2">
                        {type.requirements.essential.map((req) => (
                          <li key={req} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional Requirements */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Additional Documents</h4>
                      <ul className="space-y-2">
                        {type.requirements.additional.map((req) => (
                          <li key={req} className="flex items-start gap-2">
                            <Info className="w-4 h-4 text-blue-500 mt-1" />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tips and Verification */}
                  <div className="flex-1 p-6 bg-gray-50">
                    {/* Tips */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3">Helpful Tips</h4>
                      <ul className="space-y-2">
                        {type.tips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-blue-600 mt-1" />
                            <span className="text-gray-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Verification Process */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Verification Process</h4>
                      <ul className="space-y-2">
                        {type.verificationProcess.map((process) => (
                          <li key={process} className="flex items-start gap-2">
                            <ClipboardCheck className="w-4 h-4 text-blue-600 mt-1" />
                            <span className="text-gray-600">{process}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Requirements and Safety */}
          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">General Requirements</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Documentation</h4>
                  <ul className="space-y-2">
                    {visaContent.accommodation.generalRequirements.documentation.map((doc) => (
                      <li key={doc} className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-blue-600 mt-1" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Safety Standards</h4>
                  <ul className="space-y-2">
                    {visaContent.accommodation.generalRequirements.safetyStandards.map((standard) => (
                      <li key={standard} className="flex items-start gap-2">
                        <AlertOctagon className="w-4 h-4 text-red-500 mt-1" />
                        <span className="text-gray-600">{standard}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Location Details</h4>
                  <ul className="space-y-2">
                    {visaContent.accommodation.generalRequirements.locationDetails.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Emergency Information */}
            <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Emergency Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Important Contacts</h4>
                  <ul className="space-y-2">
                    {visaContent.accommodation.emergencyInfo.contacts.map((contact) => (
                      <li key={contact} className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-blue-600 mt-1" />
                        <span className="text-gray-600">{contact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Emergency Procedures</h4>
                  <ul className="space-y-2">
                    {visaContent.accommodation.emergencyInfo.procedures.map((procedure) => (
                      <li key={procedure} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 mt-1" />
                        <span className="text-gray-600">{procedure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Essential Travel Tips</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-6">
              <h3 className="text-xl font-bold text-blue-600">Before Travel</h3>
              {visaContent.travelTips.beforeTravel.map((tip) => (
                <div key={tip.title} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <Plane className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">{tip.title}</h4>
                      <p className="text-gray-600 mt-1">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-xl font-bold text-blue-600">During Stay</h3>
              {visaContent.travelTips.duringStay.map((tip) => (
                <div key={tip.title} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">{tip.title}</h4>
                      <p className="text-gray-600 mt-1">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-xl font-bold text-blue-600">Cultural Tips</h3>
              {visaContent.travelTips.culturalAwareness.map((tip) => (
                <div key={tip.title} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">{tip.title}</h4>
                      <p className="text-gray-600 mt-1">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Biometric Information Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Biometric Information</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <Fingerprint className="w-8 h-8 text-blue-600" />
              <p className="text-gray-700">{visaContent.biometrics.requirement}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Locations</h3>
                <ul className="space-y-3">
                  {visaContent.biometrics.locations.map((location) => (
                    <li key={location} className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <span className="text-gray-600">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Process Steps</h3>
                <ul className="space-y-3">
                  {visaContent.biometrics.process.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                <span className="font-medium">Cost:</span> {visaContent.biometrics.cost}
              </p>
            </div>
          </div>
        </section>

        {/* Visa Extension Section */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Visa Extension Information</h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-6">
            <div className="flex-1 min-w-[300px] bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">{visaContent.visaExtension.conditions.title}</h3>
              </div>
              <ul className="space-y-3">
                {visaContent.visaExtension.conditions.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 min-w-[300px] bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <AlertOctagon className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold text-gray-900">{visaContent.visaExtension.restrictions.title}</h3>
              </div>
              <ul className="space-y-3">
                {visaContent.visaExtension.restrictions.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 min-w-[300px] bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">{visaContent.visaExtension.process.title}</h3>
              </div>
              <ul className="space-y-3">
                {visaContent.visaExtension.process.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 min-w-[300px] bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <PoundSterling className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Extension Costs</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Application Fee</span>
                  <span className="font-medium text-gray-900">{visaContent.visaExtension.costs.applicationFee}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Priority Service</span>
                  <span className="font-medium text-gray-900">{visaContent.visaExtension.costs.priorityService}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Super Priority Service</span>
                  <span className="font-medium text-gray-900">{visaContent.visaExtension.costs.superPriorityService}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Information Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore the UK</h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-6">
            {Object.entries(visaContent.regionalInfo).map(([region, info]) => (
              <div key={region} className="flex-1 min-w-[300px] bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 capitalize mb-6">{region}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Major Cities</h4>
                    <div className="flex flex-wrap gap-2">
                      {info.majorCities.map((city) => (
                        <span key={city} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Popular Attractions</h4>
                    <ul className="space-y-2">
                      {info.attractions.map((attraction) => (
                        <li key={attraction} className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                          <span className="text-gray-600">{attraction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-start gap-2">
                    <Train className="w-5 h-5 text-blue-600 mt-1" />
                    <p className="text-gray-600">{info.transport}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {Object.entries(visaFAQs).map(([category, questions], categoryIndex) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 capitalize mb-4">{category}</h3>
                {questions.map((faq) => {
                  const faqIndex = questions.indexOf(faq);
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <motion.div
                      key={`${category}-${faqIndex}`}
                      className="bg-white rounded-xl shadow-lg overflow-hidden"
                      initial={false}
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between"
                        onClick={() => setOpenFaqIndex(globalIndex)}
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {openFaqIndex === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === globalIndex && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 bg-gray-50">
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* Support Services */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8 md:py-14">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h2>
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

export default UKVisitVisaPage;

