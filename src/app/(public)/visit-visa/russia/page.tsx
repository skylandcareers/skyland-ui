'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import LeadForm from '@/components/LeadForm';

const RussiaVisitVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const visaTypes = [
    {
      title: "Tourist Visa",
      description: "For leisure travel, sightseeing, and visiting friends/family",
      duration: "Up to 30 days",
      requirements: [
        "Valid passport",
        "Visa application form",
        "Travel insurance",
        "Hotel bookings",
        "Return tickets"
      ]
    },
    {
      title: "Business Visa",
      description: "For business meetings, conferences, and negotiations",
      duration: "Up to 90 days",
      requirements: [
        "Business invitation",
        "Company letter",
        "Valid passport",
        "Visa application form",
        "Travel insurance"
      ]
    }
  ];

  const requirements = [
    "Valid passport with at least 6 months validity",
    "Completed visa application form",
    "Recent passport-size photographs",
    "Travel insurance",
    "Hotel reservations",
    "Return flight tickets",
    "Bank statements for the last 3 months",
    "Employment verification letter"
  ];

  const faqs = [
    {
      question: "How long does it take to process a Russian visa?",
      answer: "Standard processing time is 10-20 working days. Express service is available for an additional fee."
    },
    {
      question: "What is the visa fee?",
      answer: "The standard tourist visa fee is approximately ₽4,800 (fees may vary based on nationality and visa type)."
    },
    {
      question: "Do I need travel insurance?",
      answer: "Yes, travel insurance is mandatory for all visa applications. It must cover your entire stay in Russia."
    },
    {
      question: "Can I extend my visa while in Russia?",
      answer: "Visa extensions are possible in exceptional circumstances through the local immigration office."
    }
  ];

  const contactInfo = {
    phone: "+91-9032420000",
    email: "saiteja.b@skylandcareers.com",
    hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl font-bold">
                Russia Visit Visa Services
              </h1>
              <p className="text-xl text-blue-100">
                Expert guidance for your Russian visa application with a 95% success rate.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  <span>Fast & reliable processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  <span>Complete documentation support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  <span>Expert application guidance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Visa Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Visa Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visaTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <p className="text-gray-700 mb-4">Duration: {type.duration}</p>
                <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                <ul className="space-y-2">
                  {type.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">General Requirements</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section>
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

export default RussiaVisitVisaPage;