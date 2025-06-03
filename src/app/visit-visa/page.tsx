'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPassport, FaCalendarAlt, FaMoneyBillWave, FaGlobeAmericas, FaUserTie, FaFileAlt, FaHeadset } from 'react-icons/fa';

const countries = [
    {
      name: 'Canada',
      slug: 'canada',
      flag: '🇨🇦',
      description: 'Tourist visa, parent visitor visa, and super visa support for Canada.',
    },
    {
      name: 'United States',
      slug: 'usa',
      flag: '🇺🇸',
      description: 'Visitor visa for family, tourism, or business (B1/B2).',
    },
    {
      name: 'United Kingdom',
      slug: 'uk',
      flag: '🇬🇧',
      description: 'Short-term visit visas for family, tourism, and medical reasons.',
    },
    {
      name: 'Australia',
      slug: 'australia',
      flag: '🇦🇺',
      description: 'Tourist and sponsored family visitor visas.',
    },
    {
      name: 'Schengen Area',
      slug: 'schengen',
      flag: '🇪🇺',
      description: 'Multiple-country travel in Europe with a single visa.',
    },
    {
      name: 'Singapore',
      slug: 'singapore',
      flag: '🇸🇬',
      description: 'Fast-track tourist visa support for Singapore.',
    },
  ];

const VisitVisaPage = () => {
  const visaTypes = [
    {
      name: "Tourist Visa",
      description: "For leisure travel, sightseeing, and visiting friends/family",
      duration: "1 month to 10 years (varies by country)",
      processingTime: "5-15 working days",
      keyFeatures: [
        "Single or multiple entries",
        "No work permitted",
        "Proof of return ticket required",
        "Hotel bookings or invitation letter needed"
      ]
    },
    {
      name: "Business Visa",
      description: "For attending meetings, conferences, or short-term business activities",
      duration: "1 month to 5 years",
      processingTime: "7-20 working days",
      keyFeatures: [
        "Requires invitation from host company",
        "No local employment",
        "Cover letter from employer needed",
        "Conference registration proof if applicable"
      ]
    },
    {
      name: "Family Visit Visa",
      description: "For visiting relatives residing in foreign countries",
      duration: "3 months to 1 year",
      processingTime: "10-25 working days",
      keyFeatures: [
        "Invitation letter from family member required",
        "Proof of relationship needed",
        "Host's residency proof mandatory",
        "Financial sponsorship documents"
      ]
    },
    {
      name: "Medical Visa",
      description: "For seeking medical treatment abroad",
      duration: "Duration of treatment + 1 month",
      processingTime: "3-10 working days (priority processing)",
      keyFeatures: [
        "Medical appointment confirmation required",
        "Doctor's referral letter",
        "Hospital admission guarantee",
        "Detailed treatment cost estimate"
      ]
    }
  ];

  const requirements = [
    {
      icon: <FaPassport className="text-blue-600 text-2xl" />,
      title: "Passport",
      details: "Valid for at least 6 months beyond travel date with 2 blank pages"
    },
    {
      icon: <FaFileAlt className="text-blue-600 text-2xl" />,
      title: "Application Form",
      details: "Completed and signed visa application form"
    },
    {
      icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
      title: "Travel Itinerary",
      details: "Confirmed flight bookings and day-by-day travel plan"
    },
    {
      icon: <FaMoneyBillWave className="text-blue-600 text-2xl" />,
      title: "Financial Proof",
      details: "Bank statements (last 3-6 months) showing sufficient funds"
    },
    {
      icon: <FaUserTie className="text-blue-600 text-2xl" />,
      title: "Employment Proof",
      details: "Leave letter from employer or business registration documents"
    },
    {
      icon: <FaGlobeAmericas className="text-blue-600 text-2xl" />,
      title: "Travel Insurance",
      details: "Coverage of €30,000+ for Schengen countries, varies by destination"
    }
  ];

  const popularDestinations = [
    { name: "Schengen Area", processingTime: "15-30 days", validity: "Up to 90 days", fee: "€80" },
    { name: "United Kingdom", processingTime: "15 working days", validity: "6 months-10 years", fee: "£95-£822" },
    { name: "United States", processingTime: "3-5 weeks", validity: "10 years (B1/B2)", fee: "$160" },
    { name: "Canada", processingTime: "14-30 days", validity: "Up to 10 years", fee: "CAD$100" },
    { name: "Australia", processingTime: "18-30 days", validity: "1-10 years", fee: "AUD$145" },
    { name: "Japan", processingTime: "5 working days", validity: "15-90 days", fee: "¥3,000" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Document Preparation",
      description: "We help you compile all required documents and verify their completeness"
    },
    {
      step: 2,
      title: "Application Submission",
      description: "Our experts complete and submit your application to the appropriate embassy/consulate"
    },
    {
      step: 3,
      title: "Biometrics Appointment",
      description: "We schedule and prepare you for your visa interview and biometrics collection"
    },
    {
      step: 4,
      title: "Visa Processing",
      description: "We track your application status and communicate updates regularly"
    },
    {
      step: 5,
      title: "Passport Collection",
      description: "Receive your passport with visa stamp and detailed entry requirements briefing"
    }
  ];

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
            Visit Visa Assistance
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Expert guidance for tourist, business, family visit, and medical visas to countries worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
      {/* Countries Grid */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {countries.map((country) => (
          <a
            key={country.slug}
            href={`/visit-visa/${country.slug}`}
            className="border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition bg-blue-50"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-800">{country.name}</h3>
              <span className="text-2xl">{country.flag}</span>
            </div>
            <p className="text-gray-700 text-sm">{country.description}</p>
          </a>
        ))}
      </motion.section>

      {/* Visa Types */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-blue-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Types of Visit Visas We Process
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-700">{visa.name}</h3>
              <p className="text-gray-600 mb-4">{visa.description}</p>
              <div className="mb-4">
                <p className="font-semibold">Duration: <span className="font-normal">{visa.duration}</span></p>
                <p className="font-semibold">Processing: <span className="font-normal">{visa.processingTime}</span></p>
              </div>
              <ul className="space-y-2">
                {visa.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      

      {/* Requirements */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            General Visa Requirements
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {requirements.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Additional Notes:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                <span>Requirements vary significantly by destination country and visa type</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                <span>Some countries require visa interviews at their embassy/consulate</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                <span>Processing times may increase during peak travel seasons</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-blue-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Popular Visa Destinations
        </motion.h2>
        
        <div className="overflow-x-auto">
          <motion.table 
            className="w-full bg-white rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Country/Region</th>
                <th className="py-3 px-4 text-left">Processing Time</th>
                <th className="py-3 px-4 text-left">Typical Validity</th>
                <th className="py-3 px-4 text-left">Visa Fee</th>
              </tr>
            </thead>
            <tbody>
              {popularDestinations.map((destination, index) => (
                <motion.tr 
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'} hover:bg-blue-100 transition`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <td className="py-3 px-4 font-medium">{destination.name}</td>
                  <td className="py-3 px-4">{destination.processingTime}</td>
                  <td className="py-3 px-4">{destination.validity}</td>
                  <td className="py-3 px-4">{destination.fee}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
        
        <motion.p 
          className="mt-6 text-gray-600 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          *Fees are approximate and subject to change. Processing times are averages and may vary.
        </motion.p>
      </section>
      

      {/* Our Process */}
      <section className="py-16 px-4 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Visa Application Process
          </motion.h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-6 lg:mb-0`}>
                    <div className="flex items-center lg:hidden mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-blue-100">{step.description}</p>
                  </div>
                  
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="hidden lg:flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white font-bold text-2xl">
                      {step.step}
                    </div>
                    <div className="lg:hidden w-full border-t-2 border-blue-600 pt-6">
                      <h3 className="text-xl font-semibold text-center">{step.title}</h3>
                    </div>
                  </div>
                  
                  <div className={`hidden lg:block lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-blue-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Our Visa Services?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">98% Success Rate</h3>
            <p className="text-gray-600">Our meticulous document checking and application review ensures high approval rates</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Processing</h3>
            <p className="text-gray-600">Priority processing options available for urgent travel needs</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Transparent Tracking</h3>
            <p className="text-gray-600">Real-time application status updates through our client portal</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
            <p className="text-gray-600">10+ years experience consultants for complex cases</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Document Checklist</h3>
            <p className="text-gray-600">Personalized checklist for your specific visa type and destination</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              <FaHeadset className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-600">Dedicated support team available for all your queries</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Begin Your Visa Application?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contact us today for a free consultation and document assessment
          </motion.p>
          
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="mb-2">+91 98765 43210</p>
              <p>+91 98765 43211</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p>visa@yourcompany.com</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p>123 Visa Lane, Financial District, Hyderabad</p>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="/contact-form" 
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-lg"
            >
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VisitVisaPage;