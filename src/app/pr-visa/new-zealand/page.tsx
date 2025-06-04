'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2,
  ArrowRight,
  X,
  Calculator,
  Building,
  Activity,
  GraduationCap,
  FileText,
  Clock,
  Briefcase,
  Calendar,
  Languages,
  ChevronUp,
  ChevronDown,
  Book,
  Home,
  Users,
  Heart,
  Laptop,
} from 'lucide-react';
import { 
  newZealandPRContent, 
  newZealandPRFAQs, 
  cityComparisons,
  jobMarketStats,
  lifestyleGuide,
  prVisaTimeline,
  additionalResources,
  pointsSystem
} from './content';
import LeadForm from '@/components/LeadForm';

// Additional content sections
const lifestyleContent = [
  {
    icon: <Home className="w-5 h-5" />,
    title: "Housing",
    description: "Find your ideal home in New Zealand's diverse housing market, from urban apartments to lifestyle blocks."
  },
  {
    icon: <Building className="w-5 h-5" />,
    title: "Work Culture",
    description: "Experience New Zealand's balanced work environment with excellent work-life integration."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community",
    description: "Join New Zealand's welcoming society with strong community values and Maori culture."
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Healthcare",
    description: "Access New Zealand's comprehensive public healthcare system (ACC) with universal coverage."
  },
  {
    icon: <Book className="w-5 h-5" />,
    title: "Education",
    description: "Benefit from New Zealand's world-renowned education system at all levels."
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: "Technology",
    description: "Be part of New Zealand's innovative tech sector and digital economy."
  }
];

const NewZealandPRPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showPointsCalculator, setShowPointsCalculator] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-0 bg-white shadow-md z-30">
        <div className="flex overflow-x-auto no-scrollbar">
          {['overview', 'requirements', 'process', 'cities', 'lifestyle', 'benefits'].map((tab) => (
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
                Your Journey to{' '}
                <span className="text-blue-200">New Zealand Permanent Residency</span>{' '}
                Starts Here
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Get expert guidance on Express Entry, CRS calculator, and visa requirements. 
                98% success rate with personalized support throughout your application process.
              </p>
              <div className="space-y-4 bg-blue-500/30 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Express Entry profile optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-blue-50 text-base">CRS score maximization strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-blue-50 text-base">End-to-end application support</span>
                </div>
              </div>
              <div className="flex items-center gap-5 pt-3">
                <button 
                  onClick={() => setShowPointsCalculator(true)}
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors text-base"
                >
                  Calculate CRS Score
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="#timeline" 
                  className="text-blue-200 font-medium hover:text-blue-100 transition-colors text-base"
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-14 px-4 max-w-7xl mx-auto">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-14 px-4">
          {/* Eligibility Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(newZealandPRContent.visaRequirements).map(([key, requirement], index) => (
                <motion.div 
                  key={key}
                  className="bg-white rounded-lg p-4 shadow-lg hover:shadow transition-shadow border border-gray-200 hover:border-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-blue-600 mb-3">
                    {key === 'ageLimit' && <Calendar className="w-6 h-6" />}
                    {key === 'englishProficiency' && <Languages className="w-6 h-6" />}
                    {key === 'skillAssessment' && <GraduationCap className="w-6 h-6" />}
                    {key === 'workExperience' && <Briefcase className="w-6 h-6" />}
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">{requirement.title}</h3>
                  <p className="text-sm text-gray-600">{requirement.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process Steps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
            <div className="space-y-4">
              {newZealandPRContent.applicationProcess.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200 hover:border-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* City Comparison Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Cities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(cityComparisons).map((city, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
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
                      <p className="text-sm text-gray-500">Median House Price</p>
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

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Universities</h4>
                      <div className="space-y-1">
                        {city.universities.map((uni, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600">
                            <span className="text-sm">{uni}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Job Market Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Job Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobMarketStats.highDemandSectors.map((sector, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.sector}</h3>
                  <div className="flex items-center gap-2 text-green-600 mb-4">
                    <Activity className="w-5 h-5" />
                    <span className="font-medium">Growth: {sector.growth}</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Top Roles</h4>
                      <div className="space-y-1">
                        {sector.topRoles.map((role, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600">
                            <span className="text-blue-600">•</span>
                            <span className="text-sm">{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Salary Ranges</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Entry Level</span>
                          <span className="font-medium text-gray-900">{sector.averageSalaries.entry}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Mid Level</span>
                          <span className="font-medium text-gray-900">{sector.averageSalaries.mid}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Senior Level</span>
                          <span className="font-medium text-gray-900">{sector.averageSalaries.senior}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Lifestyle Guide Section */}
          <section className="py-8 md:py-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Life in New Zealand Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifestyleContent.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all shadow-lg hover:shadow-blue-50 border-2 border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-600 text-lg mb-2 hover:text-blue-700">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Housing Section */}
            <div className="mt-12 bg-white rounded-lg p-6 shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Housing Guide</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Housing Types</h4>
                  <div className="space-y-2">
                    {lifestyleGuide.housing.types.map((type, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <span className="text-blue-600">•</span>
                        <span className="text-sm">{type}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="font-medium text-gray-900 mt-6 mb-4">Market Overview</h4>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-gray-900">Rental Market: </span>
                      {lifestyleGuide.housing.markets.rental}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-gray-900">Purchase Market: </span>
                      {lifestyleGuide.housing.markets.purchase}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">City Comparison</h4>
                  <div className="space-y-4">
                    {Object.entries(lifestyleGuide.housing.regions).map(([city, rent], i) => (
                      <div key={i} className="border-l-4 border-blue-600 pl-3">
                        <p className="text-sm text-gray-600 capitalize">{city}</p>
                        <p className="font-medium text-gray-900">{rent}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare Section */}
            <div className="mt-12 bg-white rounded-lg p-6 shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Healthcare System</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Coverage</h4>
                  <div className="space-y-2">
                    {lifestyleGuide.healthcare.coverage.map((service: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Key Information</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-3">
                      <p className="text-sm text-gray-600">System Type</p>
                      <p className="font-medium text-gray-900">{lifestyleGuide.healthcare.system}</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-3">
                      <p className="text-sm text-gray-600">Waiting Period</p>
                      <p className="font-medium text-gray-900">{lifestyleGuide.healthcare.waiting}</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-3">
                      <p className="text-sm text-gray-600">Private Insurance</p>
                      <p className="font-medium text-gray-900">{lifestyleGuide.healthcare.private}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="mt-12 bg-white rounded-lg p-6 shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">PR Application Timeline</h3>
              </div>

              <div className="space-y-8">
                {Object.entries(prVisaTimeline).map(([phase, details], index) => (
                  <div key={phase} className="relative pl-8 pb-8 last:pb-0">
                    {/* Timeline line */}
                    {index !== Object.entries(prVisaTimeline).length - 1 && (
                      <div className="absolute left-[11px] top-[30px] bottom-0 w-0.5 bg-blue-200"></div>
                    )}
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full bg-blue-600 border-4 border-blue-100"></div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{details.title}</h4>
                        <span className="text-sm text-blue-600 font-medium">{details.duration}</span>
                      </div>
                      <div className="space-y-2">
                        {details.tasks.map((task, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            <span className="text-sm">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Section */}
            <div className="mt-12 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {newZealandPRFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-4">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex justify-between items-start text-left"
                    >
                      <span className="text-base font-medium text-gray-900">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 mt-1" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600 mt-1" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Employment Trends Section */}
            <div className="mt-12 bg-white rounded-lg p-6 shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Employment Trends</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Remote Work */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Remote Work Trends</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-3">
                      <p className="text-sm text-gray-600">Current Remote Workforce</p>
                      <p className="font-medium text-gray-900">{jobMarketStats.employmentTrends.remoteWork.percentage}</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-3">
                      <p className="text-sm text-gray-600">Growth Rate</p>
                      <p className="font-medium text-gray-900">{jobMarketStats.employmentTrends.remoteWork.growthRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Popular Industries for Remote Work</p>
                      <div className="flex flex-wrap gap-2">
                        {jobMarketStats.employmentTrends.remoteWork.popularIndustries.map((industry, i) => (
                          <span key={i} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contract Work */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Contract Work Trends</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-3">
                      <p className="text-sm text-gray-600">Contract Positions</p>
                      <p className="font-medium text-gray-900">{jobMarketStats.employmentTrends.contractWork.percentage}</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-3">
                      <p className="text-sm text-gray-600">Annual Growth</p>
                      <p className="font-medium text-gray-900">{jobMarketStats.employmentTrends.contractWork.growthRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Benefits of Contract Work</p>
                      <div className="space-y-2">
                        {jobMarketStats.employmentTrends.contractWork.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Resources Section */}
            <div className="mt-12 bg-white rounded-lg p-6 shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Additional Resources</h3>
              </div>

              <div className="space-y-8">
                {/* Useful Links */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Official Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {additionalResources.usefulLinks.map((link: { title: string; url: string; description: string }, i: number) => (
                      <a 
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <h5 className="font-medium text-blue-600 mb-1">{link.title}</h5>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Emergency Contacts */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Emergency Contacts</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {(Object.entries(additionalResources.emergencyContacts) as [string, string][]).map(([name, number], i) => (
                      <div key={i} className="border-l-4 border-blue-600 pl-3">
                        <p className="text-sm text-gray-600">{name}</p>
                        <p className="font-medium text-gray-900">{number}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Processing Tools */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Application Processing Tools</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(Object.entries(additionalResources.processingTools) as [string, string][]).map(([name, url], i) => (
                      <a 
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <FileText className="w-5 h-5" />
                        <span className="capitalize">{name.replace(/([A-Z])/g, ' $1').trim()}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-8">
          {/* CTA Card */}
          <motion.div 
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 shadow-lg hover:shadow-md"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-3">Ready to Start Your Journey?</h3>
            <p className="text-base text-blue-100 mb-4">Get expert guidance on your New Zealand PR visa application</p>
            <button 
              onClick={() => setShowPointsCalculator(true)}
              className="w-full bg-white text-blue-600 font-medium py-2.5 px-4 rounded-lg text-base hover:bg-blue-50 transition-colors"
            >
              Book a Consultation
            </button>
          </motion.div>

          {/* Points Calculator Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">CRS Points Calculator</h3>
            <div className="space-y-4">
              {pointsSystem.categories.map((category, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{category.category}</span>
                    <span className="text-blue-600 font-medium">Max {category.maxPoints} points</span>
                  </div>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowPointsCalculator(true)}
              className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Calculate Your Points
            </button>
          </div>

          {/* Benefits Card */}
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Benefits of New Zealand PR</h3>
            <div className="space-y-5">
              {newZealandPRContent.mainBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-medium text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Updates Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Updates</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-3">
                <p className="text-sm text-gray-600">Latest CRS Score Cut-off</p>
                <p className="font-medium text-gray-900">489 points (Latest Draw)</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-3">
                <p className="text-sm text-gray-600">Next Draw Expected</p>
                <p className="font-medium text-gray-900">Every 2 weeks</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-3">
                <p className="text-sm text-gray-600">Total Invitations</p>
                <p className="font-medium text-gray-900">4,750 (Latest Draw)</p>
              </div>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="#requirements" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <FileText className="w-5 h-5" />
                <span>Document Requirements</span>
              </a>
              <a href="#timeline" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <Clock className="w-5 h-5" />
                <span>Processing Timeline</span>
              </a>
              <a href="#cities" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <Building className="w-5 h-5" />
                <span>City Comparison</span>
              </a>
              <a href="#jobs" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <Briefcase className="w-5 h-5" />
                <span>Job Market</span>
              </a>
            </div>
          </div>

          {/* Need Help Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">Get expert guidance for your PR application</p>
            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact an Expert
            </button>
          </div>
        </div>
      </div>

      {/* Selected Benefit Modal */}
      <AnimatePresence>
        {selectedBenefit && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
              onClick={() => setSelectedBenefit(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              className="fixed inset-x-0 bottom-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-white rounded-t-lg md:rounded-lg p-6 shadow-lg z-50"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">{selectedBenefit}</h3>
                <button
                  onClick={() => setSelectedBenefit(null)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="prose prose-blue max-w-none">
                {newZealandPRContent.mainBenefits.find(b => b.title === selectedBenefit)?.description}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Points Calculator Modal */}
      <AnimatePresence>
        {showPointsCalculator && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
              onClick={() => setShowPointsCalculator(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              className="fixed inset-x-0 bottom-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-white rounded-t-lg md:rounded-lg p-6 shadow-lg z-50"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">CRS Points Calculator</h3>
                <button
                  onClick={() => setShowPointsCalculator(false)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-5">
                {pointsSystem.categories.map((category, index) => (
                  <div key={index} className="border-b border-gray-200 pb-5">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-base font-medium text-gray-900">{category.category}</h4>
                      <span className="text-base text-blue-600 font-medium">Max {category.maxPoints} points</span>
                    </div>
                    <p className="text-base text-gray-600">{category.description}</p>
                  </div>
                ))}
                <div className="bg-blue-50 p-5 rounded-lg">
                  <p className="text-base text-blue-800">
                    {pointsSystem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Button for Mobile */}
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg lg:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPointsCalculator(true)}
      >
        <Calculator className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default NewZealandPRPage;