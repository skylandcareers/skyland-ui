'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMoneyBillWave, FaGlobeAmericas, FaUserTie, FaFileAlt } from 'react-icons/fa';
import { Globe, Calendar } from 'lucide-react';

// Define types for Country data
interface CountryData {
  slug: string;
  name: string;
  flag: string;
  description: string;
  keyBenefits: string[];
  processingTime: string;
  costEstimate: string;
  popularPrograms: string[];
  image: string;
}

const countryDetails: CountryData[] = [
  {
    slug: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    description:
      'Study in Canada, known for its world-class universities, welcoming environment, and post-graduation work opportunities.',
    keyBenefits: [
      'Post-Graduation Work Permit (PGWP) up to 3 years',
      'High-quality education with affordable tuition',
      'Pathway to permanent residency',
      'Multicultural and safe environment',
    ],
    processingTime: '3-6 months',
    costEstimate: 'CAD 150-500 (visa fees) + tuition',
    popularPrograms: ['Computer Science', 'Business Administration', 'Engineering', 'Health Sciences'],
    image: '/images/canada-placeholder.jpg',
  },
  {
    slug: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    description:
      'Pursue your dreams in the USA, home to top-ranked universities and cutting-edge research opportunities.',
    keyBenefits: [
      'Optional Practical Training (OPT) for up to 3 years',
      'Diverse academic programs and institutions',
      'Global career opportunities',
      'Vibrant campus life',
    ],
    processingTime: '2-5 months',
    costEstimate: 'USD 185 (visa fees) + tuition',
    popularPrograms: ['STEM Fields', 'MBA', 'Law', 'Arts and Media'],
    image: '/images/usa-placeholder.jpg',
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    description:
      'Experience world-renowned education in the UK, with historic universities and a rich cultural heritage.',
    keyBenefits: [
      'Graduate Route visa for 2-3 years post-study',
      'Shorter course durations',
      'Globally recognized degrees',
      'Access to NHS healthcare',
    ],
    processingTime: '3-8 weeks',
    costEstimate: 'GBP 475 (visa fees) + tuition',
    popularPrograms: ['Business', 'Law', 'Medicine', 'Engineering'],
    image: '/images/uk-placeholder.jpg',
  },
  {
    slug: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    description:
      'Study in Australia, offering a perfect blend of quality education and a relaxed lifestyle.',
    keyBenefits: [
      'Temporary Graduate Visa (subclass 485) for 2-4 years',
      'High employability of graduates',
      'World-class research facilities',
      'Sunny climate and vibrant cities',
    ],
    processingTime: '4-8 months',
    costEstimate: 'AUD 710 (visa fees) + tuition',
    popularPrograms: ['Information Technology', 'Nursing', 'Education', 'Hospitality'],
    image: '/images/australia-placeholder.jpg',
  },
  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    description:
      'Benefit from tuition-free or low-cost education in Germany, a hub for innovation and engineering.',
    keyBenefits: [
      'Free or low tuition at public universities',
      '18-month post-study work visa',
      'Strong economy with job opportunities',
      'Rich cultural and historical experience',
    ],
    processingTime: '6-12 weeks',
    costEstimate: 'EUR 75-150 (visa fees) + living costs',
    popularPrograms: ['Engineering', 'Automotive', 'Computer Science', 'Economics'],
    image: '/images/germany-placeholder.jpg',
  },
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    description:
      'Study in New Zealand, known for its stunning landscapes and high-quality, student-focused education.',
    keyBenefits: [
      'Post-Study Work Visa for up to 3 years',
      'Safe and friendly environment',
      'Globally recognized qualifications',
      'Supportive international student policies',
    ],
    processingTime: '2-4 months',
    costEstimate: 'NZD 375 (visa fees) + tuition',
    popularPrograms: ['Agriculture', 'Tourism', 'IT', 'Environmental Sciences'],
    image: '/images/new-zealand-placeholder.jpg',
  },
];

const requirements = [
  {
    icon: <FaFileAlt className="text-blue-600 text-2xl" />,
    title: "Academic Documents",
    details: "Transcripts, degrees, and standardized test scores (IELTS/TOEFL)"
  },
  {
    icon: <FaMoneyBillWave className="text-blue-600 text-2xl" />,
    title: "Financial Proof",
    details: "Bank statements showing sufficient funds for tuition and living expenses"
  },
  {
    icon: <FaGraduationCap className="text-blue-600 text-2xl" />,
    title: "University Acceptance",
    details: "Offer letter from an approved educational institution"
  },
  {
    icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
    title: "Study Plan",
    details: "Detailed letter explaining your educational goals and future plans"
  },
  {
    icon: <FaGlobeAmericas className="text-blue-600 text-2xl" />,
    title: "Language Proficiency",
    details: "IELTS, TOEFL, or other language test scores as required"
  },
  {
    icon: <FaUserTie className="text-blue-600 text-2xl" />,
    title: "Work Experience",
    details: "Resume and work certificates (if applicable)"
  }
];

const processSteps = [
  {
    step: 1,
    title: "University Selection",
    description: "We help you choose the right university and program based on your profile"
  },
  {
    step: 2,
    title: "Application Submission",
    description: "Our experts assist with university applications and required documents"
  },
  {
    step: 3,
    title: "Visa Documentation",
    description: "Complete assistance with visa application and supporting documents"
  },
  {
    step: 4,
    title: "Interview Preparation",
    description: "Mock interviews and guidance for visa interview success"
  },
  {
    step: 5,
    title: "Pre-Departure Support",
    description: "Comprehensive briefing on travel, accommodation, and student life"
  }
];

export default function StudyVisaPage() {
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
            Study Visa Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Expert guidance for international education and student visas to top study destinations worldwide
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Fast-track applications
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Global universities
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16 max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {countryDetails.map((country) => (
          <a
            key={country.slug}
            href={`/study-visa/${country.slug}`}
            className="border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition bg-blue-50"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-800">{country.name}</h3>
              <span className="text-2xl">{country.flag}</span>
            </div>
            <p className="text-gray-700 text-sm mb-3">{country.description}</p>
            <div className="text-sm text-gray-600">
              <p>Processing: {country.processingTime}</p>
              <p>Popular: {country.popularPrograms[0]}, {country.popularPrograms[1]}</p>
            </div>
          </a>
        ))}
      </motion.section>

      {/* Requirements Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Study Visa Requirements
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {req.icon}
                  <h3 className="text-lg font-semibold ml-3">{req.title}</h3>
                </div>
                <p className="text-gray-600">{req.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
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
            Ready to Start Your Educational Journey?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Book a free consultation with our education experts today!
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