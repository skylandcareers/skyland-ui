'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Briefcase, 
  Clock, 
  DollarSign, 
  CheckCircle2,
  Building,
  Utensils,
  Users,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  Thermometer,
  Bus,
  Heart,
  Phone,
  AlertCircle,
  CreditCard,
  Home,
  Train,
  Scale,
  Globe,
  Mail,
  PhoneCall,
  MapPin,
  Shield,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { russiaWorkContent } from './content';
import LeadForm from '@/components/LeadForm';

const RussiaWorkVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const quickStats = [
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Processing Time",
      value: "2-3 months"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "Maximum Salary",
      value: "₹1,00,000/month"
    },
    {
      icon: <Building className="w-6 h-6" />,
      label: "Visa Validity",
      value: "1 year"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: "Industries",
      value: "2 Sectors"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <button className="slick-prev"><ChevronLeft className="w-6 h-6 text-blue-600" /></button>,
    nextArrow: <button className="slick-next"><ChevronRight className="w-6 h-6 text-blue-600" /></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const jobRoles = [
    {
      title: "Warehouse Worker",
      category: "Warehouse",
      icon: <Building className="w-8 h-8" />,
      salary: "₹60,000 - ₹80,000 per month",
      workingHours: "8-12 hours per day, 6 days per week",
      requirements: [
        "Age: 18-45 years",
        "Good physical fitness",
        "Basic Russian language skills",
        "Ability to work in shifts"
      ],
      benefits: [
        "Overtime opportunities",
        "Free accommodation",
        "Medical insurance",
        "Transportation provided"
      ]
    },
    {
      title: "Forklift Operator",
      category: "Warehouse",
      icon: <Building className="w-8 h-8" />,
      salary: "₹70,000 - ₹90,000 per month",
      workingHours: "8-10 hours per day, 6 days per week",
      requirements: [
        "Forklift operation certification",
        "Previous experience preferred",
        "Basic Russian language skills",
        "Safety awareness"
      ],
      benefits: [
        "Higher salary package",
        "Free accommodation",
        "Medical insurance",
        "Transportation provided"
      ]
    },
    {
      title: "Loading Staff",
      category: "Warehouse",
      icon: <Building className="w-8 h-8" />,
      salary: "₹60,000 - ₹75,000 per month",
      workingHours: "8-12 hours per day, 6 days per week",
      requirements: [
        "Physical strength",
        "Team working ability",
        "Basic Russian language",
        "Loading/unloading experience"
      ],
      benefits: [
        "Regular overtime",
        "Free accommodation",
        "Medical coverage",
        "Transport provided"
      ]
    },
    {
      title: "Kitchen Helper",
      category: "Restaurant",
      icon: <Utensils className="w-8 h-8" />,
      salary: "₹70,000 - ₹85,000 per month",
      workingHours: "8-10 hours per day, 6 days per week",
      requirements: [
        "Basic cooking skills",
        "Food handling certification",
        "Basic Russian language",
        "Kitchen experience preferred"
      ],
      benefits: [
        "Free meals during shifts",
        "Shared accommodation",
        "Health insurance",
        "Staff transport"
      ]
    },
    {
      title: "Cook",
      category: "Restaurant",
      icon: <Utensils className="w-8 h-8" />,
      salary: "₹85,000 - ₹1,00,000 per month",
      workingHours: "8-10 hours per day, 6 days per week",
      requirements: [
        "Professional cooking experience",
        "Food safety certification",
        "Basic Russian language",
        "Menu planning skills"
      ],
      benefits: [
        "Higher salary package",
        "Free meals",
        "Accommodation provided",
        "Career growth opportunities"
      ]
    },
    {
      title: "Waiter/Waitress",
      category: "Restaurant",
      icon: <Utensils className="w-8 h-8" />,
      salary: "₹75,000 - ₹90,000 per month",
      workingHours: "8-10 hours per day, 6 days per week",
      requirements: [
        "Customer service skills",
        "Basic Russian language",
        "Previous service experience",
        "Well-groomed appearance"
      ],
      benefits: [
        "Tips additional to salary",
        "Free meals during shift",
        "Accommodation provided",
        "Transport facility"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Work in <span className="text-yellow-400">Russia</span> - Warehouse & Restaurant Jobs
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                High-paying job opportunities with earnings up to ₹1,00,000 per month
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-medium">Quick Process</h3>
                  <p className="text-sm text-blue-100">2-3 months processing</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <DollarSign className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-medium">High Salary</h3>
                  <p className="text-sm text-blue-100">Up to ₹1L per month</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Building className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-medium">Free Housing</h3>
                  <p className="text-sm text-blue-100">Accommodation provided</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Users className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-medium">Job Security</h3>
                  <p className="text-sm text-blue-100">Long-term opportunities</p>
                </div>
              </div>
            </motion.div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="text-blue-600 mb-3">{stat.icon}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-lg font-semibold">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Available Job Positions</h2>
          <div className="relative job-slider-container">
            <style jsx>{`
              .job-slider-container {
                margin: 0 -15px;
                padding: 0 20px;
              }
              .job-slider-container :global(.slick-slide) {
                padding: 15px;
              }
              .job-slider-container :global(.slick-prev),
              .job-slider-container :global(.slick-next) {
                width: 40px;
                height: 40px;
                background: #FCD34D;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                z-index: 10;
                transition: all 0.3s ease;
                display: flex !important;
                align-items: center;
                justify-content: center;
              }
              .job-slider-container :global(.slick-prev:hover),
              .job-slider-container :global(.slick-next:hover) {
                background: #FBBF24;
              }
              .job-slider-container :global(.slick-prev) {
                left: -5px;
              }
              .job-slider-container :global(.slick-next) {
                right: -5px;
              }
              .job-slider-container :global(.slick-dots) {
                bottom: -30px;
              }
              .job-slider-container :global(.slick-dots li) {
                margin: 0 4px;
              }
              .job-slider-container :global(.slick-dots li button:before) {
                color: #2563EB;
                opacity: 0.3;
                font-size: 8px;
              }
              .job-slider-container :global(.slick-dots li.slick-active button:before) {
                color: #2563EB;
                opacity: 1;
              }
              .job-slider-container :global(.slick-prev:before),
              .job-slider-container :global(.slick-next:before) {
                display: none;
              }
            `}</style>
            <Slider {...sliderSettings}>
              {jobRoles.map((job, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg h-full"
                  >
                    <div className="text-blue-600 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        {job.icon}
                      </div>
                      <span className="text-sm font-medium text-blue-500">{job.category}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{job.title}</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-600 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                              <span className="text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-600 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 gap-3 bg-blue-50 rounded-lg p-4">
                        <div>
                          <p className="text-sm text-gray-500">Salary Range</p>
                          <p className="font-semibold text-blue-600">{job.salary}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Working Hours</p>
                          <p className="font-semibold text-blue-600">{job.workingHours}</p>
                        </div>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Visa Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Required Documents</h3>
              <ul className="space-y-3">
                {russiaWorkContent.requirements.documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Medical Requirements</h3>
              <ul className="space-y-3">
                {russiaWorkContent.requirements.medical.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Language Requirements</h3>
              <ul className="space-y-3">
                {russiaWorkContent.requirements.language.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visa Process Steps */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Visa Process Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {russiaWorkContent.visaProcessSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-blue-600">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Duration: {step.duration}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="space-y-2">
                    {step.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
        
        </div>
      </section>

      {/* Living in Russia */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Living in Russia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(russiaWorkContent.livingInRussia).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="text-blue-600 mb-3">
                  {key === 'climate' && <Thermometer className="w-6 h-6" />}
                  {key === 'transportation' && <Bus className="w-6 h-6" />}
                  {key === 'food' && <Utensils className="w-6 h-6" />}
                  {key === 'healthcare' && <Heart className="w-6 h-6" />}
                  {key === 'communication' && <Phone className="w-6 h-6" />}
                  {key === 'community' && <Users className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-medium capitalize mb-2">{key}</h3>
                <p className="text-gray-600">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Adjustment Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Cultural Adjustment Guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(russiaWorkContent.culturalAdjustment).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold capitalize mb-4">{category}</h3>
                <ul className="space-y-3">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking and Finance Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Banking & Finance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Account Types</h3>
              <ul className="space-y-3">
                {russiaWorkContent.bankingAndFinance.accountTypes.map((type, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{type}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Required Documents</h3>
              <ul className="space-y-3">
                {russiaWorkContent.bankingAndFinance.requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Remittance Information</h3>
              <ul className="space-y-3">
                {russiaWorkContent.bankingAndFinance.remittanceInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{info}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Tax Information</h3>
              <ul className="space-y-3">
                {russiaWorkContent.bankingAndFinance.taxInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{info}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Emergency Support</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Emergency Numbers</h3>
              <div className="space-y-3">
                {Object.entries(russiaWorkContent.emergencySupport.helplineNumbers).map(([service, number], index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{service}</span>
                    <span className="font-medium text-blue-600">{number}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Indian Embassy</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">{russiaWorkContent.emergencySupport.indianEmbassy.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">{russiaWorkContent.emergencySupport.indianEmbassy.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">{russiaWorkContent.emergencySupport.indianEmbassy.email}</span>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Services</h4>
                  <ul className="space-y-2">
                    {russiaWorkContent.emergencySupport.indianEmbassy.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Useful Contacts</h3>
              <div className="space-y-3">
                {Object.entries(russiaWorkContent.emergencySupport.usefulContacts).map(([service, number], index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{service}</span>
                    <span className="font-medium text-blue-600">{number}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accommodation Guide Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Home className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Accommodation Guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Types of Accommodation</h3>
              <div className="space-y-4">
                {Object.entries(russiaWorkContent.accommodationGuide.types).map(([type, description], index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <h4 className="font-medium text-blue-600">{type}</h4>
                    <p className="text-gray-600 text-sm mt-1">{description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Average Costs</h3>
              <div className="space-y-3">
                {Object.entries(russiaWorkContent.accommodationGuide.averageCost).map(([type, cost], index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{type}</span>
                    <span className="font-medium text-blue-600">{cost}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Recommended Locations</h3>
              <ul className="space-y-2">
                {russiaWorkContent.accommodationGuide.locations.map((location, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{location}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Train className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Transportation Guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Public Transport</h3>
              <ul className="space-y-2">
                {russiaWorkContent.transportationInfo.public.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Private Transport</h3>
              <ul className="space-y-2">
                {russiaWorkContent.transportationInfo.private.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Transport Costs</h3>
              <div className="space-y-3">
                {Object.entries(russiaWorkContent.transportationInfo.costs).map(([type, cost], index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{type}</span>
                    <span className="font-medium text-blue-600">{cost}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Travel Tips</h3>
              <ul className="space-y-2">
                {russiaWorkContent.transportationInfo.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Culture Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Russian Work Culture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{russiaWorkContent.workCulture.businessEtiquette.title}</h3>
              <ul className="space-y-3">
                {russiaWorkContent.workCulture.businessEtiquette.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{russiaWorkContent.workCulture.communication.title}</h3>
              <ul className="space-y-3">
                {russiaWorkContent.workCulture.communication.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{russiaWorkContent.workCulture.dressCode.title}</h3>
              <ul className="space-y-3">
                {russiaWorkContent.workCulture.dressCode.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{russiaWorkContent.workCulture.meetings.title}</h3>
              <ul className="space-y-3">
                {russiaWorkContent.workCulture.meetings.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workplace Rights Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Workplace Rights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Legal Rights</h3>
              <ul className="space-y-2">
                {russiaWorkContent.workplaceRights.legalRights.map((right, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{right}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Working Conditions</h3>
              <ul className="space-y-2">
                {russiaWorkContent.workplaceRights.workingConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{condition}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Grievance Process</h3>
              <ul className="space-y-2">
                {russiaWorkContent.workplaceRights.grievanceProcess.map((process, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{process}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Union Information</h3>
              <ul className="space-y-2">
                {russiaWorkContent.workplaceRights.unionInformation.map((info, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{info}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {russiaWorkContent.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(index)}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert guidance on Russian work visas and job opportunities. Our team will help you navigate the application process and find the right position.
          </p>
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default RussiaWorkVisaPage; 