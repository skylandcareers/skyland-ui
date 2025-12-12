'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaMoneyBillWave, FaPassport, FaHome, FaMedkit, FaBriefcase } from 'react-icons/fa';
import { Globe, Users, BookOpen } from 'lucide-react';

const countries = [
  {
    name: "Canada",
    flag: "🇨🇦",
    description: "A welcoming multicultural environment with world-class education and post-study work opportunities.",
    keyFeatures: [
      { title: "Education Quality", icon: <FaGraduationCap />, description: "Globally recognized institutions" },
      { title: "Work Rights", icon: <FaBriefcase />, description: "20 hours/week during studies" },
      { title: "Post-Study", icon: <FaUniversity />, description: "Up to 3 years work permit" },
      { title: "Healthcare", icon: <FaMedkit />, description: "Universal healthcare access" }
    ],
    livingCosts: "$15,000-25,000/year",
    popularCities: ["Toronto", "Vancouver", "Montreal"],
    visaSuccess: "85%",
    image: "/images/canada-placeholder.jpg"
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    description: "High-quality education combined with an excellent lifestyle and diverse opportunities.",
    keyFeatures: [
      { title: "Education System", icon: <FaGraduationCap />, description: "Practice-based learning" },
      { title: "Work Rights", icon: <FaBriefcase />, description: "40 hours/fortnight" },
      { title: "Post-Study", icon: <FaUniversity />, description: "2-4 years work visa" },
      { title: "Lifestyle", icon: <FaHome />, description: "High living standard" }
    ],
    livingCosts: "$20,000-30,000/year",
    popularCities: ["Sydney", "Melbourne", "Brisbane"],
    visaSuccess: "90%",
    image: "/images/australia-placeholder.jpg"
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Rich academic heritage with modern innovation and multicultural experience.",
    keyFeatures: [
      { title: "Education Quality", icon: <FaGraduationCap />, description: "Historic universities" },
      { title: "Work Rights", icon: <FaBriefcase />, description: "20 hours/week" },
      { title: "Post-Study", icon: <FaUniversity />, description: "2 years work visa" },
      { title: "Healthcare", icon: <FaMedkit />, description: "NHS access" }
    ],
    livingCosts: "£12,000-15,000/year",
    popularCities: ["London", "Manchester", "Edinburgh"],
    visaSuccess: "92%",
    image: "/images/uk-placeholder.jpg"
  },
  {
    name: "United States",
    flag: "🇺🇸",
    description: "Leading research institutions and diverse academic opportunities.",
    keyFeatures: [
      { title: "Education System", icon: <FaGraduationCap />, description: "World-ranked universities" },
      { title: "Work Rights", icon: <FaBriefcase />, description: "On-campus employment" },
      { title: "Post-Study", icon: <FaUniversity />, description: "OPT up to 3 years" },
      { title: "Research", icon: <BookOpen />, description: "Cutting-edge facilities" }
    ],
    livingCosts: "$18,000-30,000/year",
    popularCities: ["New York", "Boston", "San Francisco"],
    visaSuccess: "80%",
    image: "/images/usa-placeholder.jpg"
  }
];

const countryFeatures = [
  {
    icon: <FaGraduationCap className="text-blue-600 text-2xl" />,
    title: "Education System",
    details: "Compare education quality, teaching methods, and university rankings"
  },
  {
    icon: <FaMoneyBillWave className="text-blue-600 text-2xl" />,
    title: "Living Costs",
    details: "Detailed breakdown of accommodation, food, and daily expenses"
  },
  {
    icon: <FaPassport className="text-blue-600 text-2xl" />,
    title: "Visa Process",
    details: "Step-by-step visa application guidance and requirements"
  },
  {
    icon: <FaBriefcase className="text-blue-600 text-2xl" />,
    title: "Work Rights",
    details: "Part-time work during study and post-graduation opportunities"
  },
  {
    icon: <FaHome className="text-blue-600 text-2xl" />,
    title: "Accommodation",
    details: "Housing options from university halls to private rentals"
  },
  {
    icon: <FaMedkit className="text-blue-600 text-2xl" />,
    title: "Healthcare",
    details: "Medical insurance requirements and healthcare systems"
  }
];

const comparisonSteps = [
  {
    step: 1,
    title: "Education System",
    description: "Compare teaching methods and academic standards"
  },
  {
    step: 2,
    title: "Cost Analysis",
    description: "Evaluate tuition fees and living expenses"
  },
  {
    step: 3,
    title: "Visa Requirements",
    description: "Check eligibility and documentation needs"
  },
  {
    step: 4,
    title: "Work Opportunities",
    description: "Research part-time and post-study work options"
  },
  {
    step: 5,
    title: "Lifestyle & Culture",
    description: "Understand local culture and student life"
  }
];

export default function CountryGuidesPage() {
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
            Country Guides
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive guides to help you choose the perfect study destination
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Top study destinations
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Student experiences
            </div>
          </motion.div>
  </div>
      </section>

      {/* Countries Grid */}
      <motion.section
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Popular Study Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                className="border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-800">{country.name}</h3>
                  <span className="text-2xl">{country.flag}</span>
                </div>
                <p className="text-gray-600 mb-4">{country.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {country.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">{feature.icon}</span>
                      <div>
                        <h4 className="text-sm font-semibold">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
      </div>
    </div>
        ))}
      </div>
                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Living Costs</span>
                    <p className="font-semibold">{country.livingCosts}</p>
                  </div>
        <div>
                    <span className="text-sm font-medium text-gray-500">Visa Success Rate</span>
                    <p className="font-semibold">{country.visaSuccess}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Country Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What to Compare
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Steps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How to Compare Countries
          </motion.h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {comparisonSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  {step.step}
      </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
        ))}
      </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get personalized guidance on choosing the right study destination
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition font-semibold text-lg"
            >
              Call Now: +91 98765 43210
            </a>
          </motion.div>
      </div>
      </section>
    </div>
  );
}