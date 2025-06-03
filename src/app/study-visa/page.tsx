'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Calendar, DollarSign, BookOpen } from 'lucide-react';

// Define types for Country data
interface CountryData {
  slug: string;
  name: string;
  description: string;
  keyBenefits: string[];
  processingTime: string;
  costEstimate: string;
  popularPrograms: string[];
  image: string; // Placeholder for image URL or path
}

// Map country slugs to CountryData
const countryDetails: CountryData[] = [
  {
    slug: 'canada',
    name: 'Canada',
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

export default function StudyVisaPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Study Visa Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
            Unlock your global education journey with our expert study visa services. We guide you through every step to study in your dream country.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Fast-track your application
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Multiple destinations
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <Globe className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Personalized support for visa applications.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <DollarSign className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Affordable Services</h3>
            <p className="text-gray-600">Transparent fees with no hidden costs.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <BookOpen className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">University Support</h3>
            <p className="text-gray-600">Assistance with university admissions.</p>
          </div>
        </div>

        {/* Countries List */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 flex items-center">
            <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-5a3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3zm0-2a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Explore Study Destinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryDetails.map((country, index) => (
              <motion.div
                key={country.slug}
                className="bg-white p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{country.name}</h3>
                <p className="text-gray-600 mb-4">{country.description}</p>
                <ul className="space-y-2 mb-4">
                  {country.keyBenefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <a
                    href={`/study-visa/${country.slug}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="mb-12 bg-blue-50 p-6 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 flex items-center">
            <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            Why Choose Our Visa Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '98% visa success rate with expert consultants',
              'End-to-end support from application to arrival',
              'Personalized counseling for university and program selection',
              'Fast and accurate document preparation',
              'Mock visa interviews to boost confidence',
              'Transparent process with regular updates',
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition"
              >
                <div className="text-blue-600 mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-medium text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Enrollment CTA */}
        <motion.section
          id="enroll"
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Study Abroad?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Start your journey today with our expert visa consultants. Limited consultation slots available!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
            >
              Book a Free Consultation
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition font-semibold text-lg"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}