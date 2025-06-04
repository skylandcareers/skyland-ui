'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  FileText,
  DollarSign,
  Globe,
  Timer,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Car,
  Factory,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { 
  slovakiaContent, 
  slovakiaFAQs, 
  prVisaTimeline,
  cityComparisons,
  additionalResources
} from './content';
import LeadForm from '@/components/LeadForm';

const SlovakiaWorkVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const quickStats = [
    { 
      icon: <Timer className="w-6 h-6" />, 
      label: "Processing Time", 
      value: "90 days" 
    },
    { 
      icon: <DollarSign className="w-6 h-6" />, 
      label: "Visa Cost", 
      value: "€165.50" 
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      label: "Success Rate", 
      value: "95%" 
    },
    { 
      icon: <FileText className="w-6 h-6" />, 
      label: "Validity", 
      value: "2 years" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-0 bg-white shadow-md z-30">
        <div className="flex overflow-x-auto no-scrollbar">
          {['overview', 'requirements', 'automotive', 'cities', 'lifestyle'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] py-3 px-4 text-sm font-medium ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
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
                Work in{' '}
                <span className="text-yellow-400">Slovakia&apos;s Automotive Industry</span>{' '}
                with TRC Visa
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Join Europe&apos;s automotive manufacturing hub. Get expert guidance on TRC visa, job opportunities, 
                and settling in Slovakia. 95% success rate with personalized support.
              </p>
              <div className="space-y-4 bg-blue-500/30 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Major automotive manufacturers present</span>
                </div>
                <div className="flex items-center gap-3">
                  <Factory className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Over 177,000 automotive sector jobs</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Strategic location in Central Europe</span>
                </div>
              </div>
              <div className="flex items-center gap-5 pt-3">
                <button 
                  className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors text-base"
                >
                  Apply Now
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

        {/* About Slovakia Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">About Slovakia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Location</h3>
                <p className="text-gray-600">
                  Slovakia&apos;s central position in Europe makes it a prime location for automotive manufacturing, 
                  with excellent connectivity to major European markets. The country&apos;s strategic location 
                  has attracted significant investment from global automotive companies.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Economic Growth</h3>
                <p className="text-gray-600">
                  As a member of the EU and Eurozone, Slovakia offers a stable economic environment with 
                  continuous growth. The automotive sector contributes significantly to the country&apos;s GDP 
                  and provides numerous employment opportunities.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality of Life</h3>
                <p className="text-gray-600">
                  Slovakia offers an excellent quality of life with affordable living costs, beautiful nature, 
                  rich cultural heritage, and modern infrastructure. The country combines traditional values 
                  with contemporary European lifestyle.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Hub</h3>
                <p className="text-gray-600">
                  The country is emerging as an innovation hub in automotive manufacturing, with companies 
                  investing in R&D, automation, and Industry 4.0 technologies. This creates opportunities 
                  for skilled professionals in various technical fields.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRC Benefits Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">TRC Card Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(slovakiaContent.trcBenefits).map(([key, benefit], index) => (
              <motion.div
                key={key}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Automotive Career Profiles */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Automotive Career Opportunities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {slovakiaContent.carManufacturing.profiles.map((profile, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{profile.role}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Salary Range</p>
                    <p className="text-gray-900">{profile.averageSalary}</p>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Requirements</p>
                    <ul className="space-y-2">
                      {profile.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Benefits</p>
                    <ul className="space-y-2">
                      {profile.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium mb-2">Top Employers</p>
                    <ul className="space-y-2">
                      {profile.companies.map((company, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <Factory className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{company}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Industry Statistics */}
          <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Industry Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(slovakiaContent.carManufacturing.industryStats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-2">{value}</p>
                  <p className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Comparisons */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Automotive Manufacturing Cities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(cityComparisons).map((city, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                    <p className="text-gray-600">{city.region}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Population</p>
                    <p className="font-medium text-gray-900">{city.population}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Average Housing</p>
                    <p className="font-medium text-gray-900">{city.medianHousePrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Average Salary</p>
                    <p className="font-medium text-gray-900">{city.averageSalary}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      {city.keyIndustries.map((industry, i) => (
                        <span key={i} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Lifestyle Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {city.lifestyle.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-600">
                          <span className="text-blue-600">•</span>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {city.carManufacturers && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Automotive Companies</h4>
                      <div className="space-y-1">
                        {city.carManufacturers.map((company, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600">
                            <Factory className="w-4 h-4 text-blue-600" />
                            <span className="text-sm">{company}</span>
                          </div>
                        ))}
                      </div>
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
          <div className="space-y-3">
            {slovakiaFAQs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
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
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Timeline</h2>
          <div className="space-y-6">
            {Object.entries(prVisaTimeline).map(([phase, data], index) => (
              <motion.div
                key={phase}
                className="bg-white rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{data.title}</h3>
                    <p className="text-blue-600">{data.duration}</p>
                  </div>
                </div>
                <ul className="space-y-3 ml-16">
                  {data.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Useful Links</h3>
              <div className="space-y-4">
                {additionalResources.usefulLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-medium text-blue-600 mb-1">{link.title}</h4>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Contacts</h3>
              <div className="space-y-4">
                {Object.entries(additionalResources.emergencyContacts).map(([name, number], index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{name}</span>
                    <span className="font-medium text-blue-600">{number}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Processing Tools</h3>
              <div className="space-y-4">
                {Object.entries(additionalResources.processingTools).map(([name, url], index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-blue-600 capitalize">
                      {name.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates Section - Moving this up as it's more time-sensitive */}
        <section className="py-10 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Latest Updates</h2>
                <p className="text-gray-600 mt-1">Stay informed about Slovakia&apos;s automotive industry</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    const slider = document.getElementById('updates-slider');
                    if (slider) slider.scrollBy({ left: -320, behavior: 'smooth' });
                  }}
                  className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  onClick={() => {
                    const slider = document.getElementById('updates-slider');
                    if (slider) slider.scrollBy({ left: 320, behavior: 'smooth' });
                  }}
                  className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  id="updates-slider"
                  className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {[
                    {
                      id: 'update1',
                      date: "March 15, 2024",
                      title: "New Fast-Track Process Explained",
                      description: "Detailed guide on the new 30-day processing system for automotive professionals",
                      type: "Visa Update",
                      videoTitle: "Fast-Track Visa Process Guide"
                    },
                    {
                      id: 'update2',
                      date: "March 1, 2024",
                      title: "VW Slovakia Expansion Coverage",
                      description: "Inside look at the new electric vehicle production facility",
                      type: "Industry News",
                      videoTitle: "VW Slovakia Expansion News"
                    },
                    {
                      id: 'update3',
                      date: "February 20, 2024",
                      title: "2024 Salary Requirements Guide",
                      description: "Complete breakdown of new salary thresholds by position",
                      type: "Guidelines",
                      videoTitle: "2024 Salary Requirements Explained"
                    },
                    {
                      id: 'update4',
                      date: "February 10, 2024",
                      title: "Slovakia's EV Future",
                      description: "New investments in electric vehicle infrastructure",
                      type: "Industry News",
                      videoTitle: "Slovakia EV Industry Update"
                    }
                  ].map((update, index) => (
                    <div key={index} className="min-w-[300px] snap-start">
                      <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="aspect-video w-full relative">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${update.id}`}
                            title={update.videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="border-0"
                          ></iframe>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-blue-600 font-medium">{update.type}</span>
                            <span className="text-sm text-gray-500">{update.date}</span>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1">{update.title}</h3>
                          <p className="text-gray-600 text-sm">{update.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Slovakia Section - Key benefits before diving into success stories */}
        <div className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Slovakia?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <Factory className="w-8 h-8" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Strong Industry Presence</h4>
                  <p className="text-gray-600 text-sm">
                    Home to major automotive manufacturers and extensive supplier network.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Central Location</h4>
                  <p className="text-gray-600 text-sm">
                    Strategic position in Europe with excellent logistics infrastructure.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">EU Benefits</h4>
                  <p className="text-gray-600 text-sm">
                    Access to EU single market and Schengen area travel.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Quality of Life</h4>
                  <p className="text-gray-600 text-sm">
                    High living standards with affordable costs and rich culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Section - Real experiences after benefits */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Success Stories</h2>
                <p className="text-gray-600 mt-1">Real experiences from automotive professionals</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    const slider = document.getElementById('success-stories-slider');
                    if (slider) slider.scrollBy({ left: -320, behavior: 'smooth' });
                  }}
                  className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  onClick={() => {
                    const slider = document.getElementById('success-stories-slider');
                    if (slider) slider.scrollBy({ left: 320, behavior: 'smooth' });
                  }}
                  className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  id="success-stories-slider"
                  className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {[
                    {
                      id: 'example1',
                      title: "John's Journey to VW Slovakia",
                      role: "Production Line Manager",
                      location: "Bratislava",
                      company: "Volkswagen",
                      description: "From UK to Production Line Manager at Volkswagen Bratislava",
                      videoTitle: "Success Story - John from UK"
                    },
                    {
                      id: 'example2',
                      title: "Maria's Quality Control Career",
                      role: "Quality Control Lead",
                      location: "Nitra",
                      company: "Jaguar Land Rover",
                      description: "Spanish engineer thriving at Jaguar Land Rover Nitra",
                      videoTitle: "Success Story - Maria from Spain"
                    },
                    {
                      id: 'example3',
                      title: "Alex's Automation Journey",
                      role: "Automation Engineer",
                      location: "Žilina",
                      company: "Kia Motors",
                      description: "Canadian automation expert at Kia Motors Žilina",
                      videoTitle: "Success Story - Alex from Canada"
                    },
                    {
                      id: 'example4',
                      title: "Sarah's EV Innovation Story",
                      role: "R&D Engineer",
                      location: "Trnava",
                      company: "Stellantis",
                      description: "Leading electric vehicle innovations at Stellantis",
                      videoTitle: "Success Story - Sarah from Germany"
                    }
                  ].map((story, index) => (
                    <div key={index} className="min-w-[300px] snap-start">
                      <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="aspect-video w-full relative">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${story.id}`}
                            title={story.videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="border-0"
                          ></iframe>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1">{story.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{story.description}</p>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-gray-500">
                              <Factory className="w-4 h-4" />
                              <span>{story.company}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500">
                              <MapPin className="w-4 h-4" />
                              <span>{story.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Natural endpoint after seeing updates, benefits, and stories */}
        <section className="py-10 bg-gray-50 rounded-xl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get personalized guidance on your Slovakia work visa application. Our experts will help you navigate the process and find the best opportunities in the automotive sector.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SlovakiaWorkVisaPage; 