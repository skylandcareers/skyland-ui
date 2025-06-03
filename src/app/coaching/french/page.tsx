'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Check, Globe, Award, ChevronRight } from 'lucide-react';

const countryRequirements = [
  {
    country: 'Canada',
    tests: [
      { name: 'TEF Canada', requirement: 'Level 7 in all skills' },
      { name: 'TCF Canada', requirement: 'Level 7 in all skills' }
    ]
  },
  {
    country: 'Quebec',
    tests: [
      { name: 'TEF Quebec', requirement: 'Level 7 in all skills' },
      { name: 'TCF Quebec', requirement: 'Level 7 in all skills' }
    ]
  },
  {
    country: 'France',
    tests: [
      { name: 'TEF', requirement: 'B2 Level (CEFR)' },
      { name: 'TCF', requirement: 'B2 Level (CEFR)' }
    ]
  }
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: 'Comprehensive Coverage',
    description: 'Preparation for both TEF and TCF exams'
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: 'Native Instructors',
    description: 'Learn from experienced French teachers'
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: 'Immigration Focus',
    description: 'Specialized training for visa requirements'
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: 'Official Test Center',
    description: 'Authorized center for TEF/TCF exams'
  }
];

const testimonials = [
  {
    name: 'Jean Pierre',
    level: 'C1',
    destination: 'Quebec',
    content: 'The focused immigration vocabulary training was exactly what I needed.'
  },
  {
    name: 'Maria Garcia',
    level: 'B2',
    destination: 'France',
    content: 'Excellent preparation for both written and oral components.'
  },
  {
    name: 'Ahmed Hassan',
    level: 'B2',
    destination: 'Canada',
    content: 'The practice tests were very similar to the actual exam.'
  }
];

export default function FrenchPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetCountry: '',
    currentLevel: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-8 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Master French for Immigration Success
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Specialized TEF/TCF preparation for Canada, Quebec, and France immigration requirements.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">97%</div>
                  <div className="text-blue-100">Success Rate</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">B2+</div>
                  <div className="text-blue-100">Average Level</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Your Study Plan</h3>
                  <p className="text-gray-600 mb-6">Free consultation and level assessment</p>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Country</label>
                    <select
                      name="targetCountry"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.targetCountry}
                      onChange={handleChange}
                    >
                      <option value="">Select a country</option>
                      <option value="Canada">Canada</option>
                      <option value="Quebec">Quebec</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current French Level (if any)</label>
                    <select
                      name="currentLevel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.currentLevel}
                      onChange={handleChange}
                    >
                      <option value="">Select your level</option>
                      <option value="Beginner">Beginner (A1)</option>
                      <option value="Elementary">Elementary (A2)</option>
                      <option value="Intermediate">Intermediate (B1)</option>
                      <option value="Upper Intermediate">Upper Intermediate (B2)</option>
                      <option value="Advanced">Advanced (C1)</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                  >
                    Get Free Consultation
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Merci!</h3>
                  <p className="text-gray-600">We&apos;ll contact you within 24 hours with your personalized study plan.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our French Program?</h2>
            <p className="text-lg text-gray-600">Specialized training for immigration success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Test Requirements Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">French Test Requirements</h2>
            <p className="text-lg text-gray-600">Official requirements for immigration to different regions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryRequirements.map((country, index) => (
              <motion.div
                key={country.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{country.country}</h3>
                <div className="space-y-4">
                  {country.tests.map((test) => (
                    <div key={test.name} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{test.name}</div>
                        <div className="text-sm text-gray-600">Required: {test.requirement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Our students share their journey to success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">Level: {testimonial.level}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">&quot;{testimonial.content}&quot;</p>
                <div className="text-sm text-blue-600">Immigrating to {testimonial.destination}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your French Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">Join thousands of successful students who achieved their immigration goals</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 