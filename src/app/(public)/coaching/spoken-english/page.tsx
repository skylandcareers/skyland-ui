'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Check, Globe, Award, ChevronRight } from 'lucide-react';

const courseModules = [
  {
    category: 'Pronunciation & Fluency',
    topics: [
      { name: 'Accent Training', description: 'Master natural English pronunciation' },
      { name: 'Speech Rhythm', description: 'Stress, intonation, and connected speech' },
      { name: 'Fluency Building', description: 'Techniques for smooth, natural speaking' }
    ]
  },
  {
    category: 'Conversation Skills',
    topics: [
      { name: 'Daily Conversations', description: 'Common situations and small talk' },
      { name: 'Discussion Skills', description: 'Express opinions and participate in debates' },
      { name: 'Active Listening', description: 'Understanding native speakers effectively' }
    ]
  },
  {
    category: 'Practical Applications',
    topics: [
      { name: 'Interview Skills', description: 'Job interviews and professional conversations' },
      { name: 'Public Speaking', description: 'Presentations and speeches' },
      { name: 'Social Interactions', description: 'Cultural awareness and social etiquette' }
    ]
  }
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: 'Interactive Learning',
    description: 'Regular speaking practice and role-plays'
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: 'Native Trainers',
    description: 'Learn from experienced English speakers'
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: 'Personalized Feedback',
    description: 'Individual attention to your speaking style'
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: 'Global English',
    description: 'Exposure to different English accents'
  }
];

const testimonials = [
  {
    name: 'Yuki Sato',
    improvement: 'Fluent Speaker',
    background: 'Started as Beginner',
    content: 'The pronunciation drills and daily conversation practice transformed my speaking ability.'
  },
  {
    name: 'Miguel Torres',
    improvement: 'Confident Presenter',
    background: 'Started as Intermediate',
    content: 'Now I can confidently give presentations and handle client meetings in English.'
  },
  {
    name: 'Lin Wei',
    improvement: 'Natural Communicator',
    background: 'Started as Pre-Intermediate',
    content: 'The accent training and cultural lessons helped me sound more natural.'
  }
];

export default function SpokenEnglishPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
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
                Master Spoken English with Confidence
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your English speaking skills with personalized training focused on fluency and natural communication.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">97%</div>
                  <div className="text-blue-100">Success Rate</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">10K+</div>
                  <div className="text-blue-100">Students Trained</div>
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Start Your Speaking Journey</h3>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Learning Purpose</label>
                    <select
                      name="purpose"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.purpose}
                      onChange={handleChange}
                    >
                      <option value="">Select your purpose</option>
                      <option value="Career">Career Development</option>
                      <option value="Academic">Academic Studies</option>
                      <option value="Social">Social Interaction</option>
                      <option value="Travel">Travel & Tourism</option>
                      <option value="Business">Business Communication</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Speaking Level</label>
                    <select
                      name="currentLevel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={formData.currentLevel}
                      onChange={handleChange}
                    >
                      <option value="">Select your level</option>
                      <option value="Beginner">Beginner - Basic Words</option>
                      <option value="Elementary">Elementary - Simple Sentences</option>
                      <option value="Intermediate">Intermediate - Basic Conversations</option>
                      <option value="Advanced">Advanced - Fluent with Accent</option>
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We&apos;ll contact you within 24 hours to schedule your free consultation.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Spoken English Program?</h2>
            <p className="text-lg text-gray-600">Comprehensive training for natural English communication</p>
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

      {/* Course Modules Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Modules</h2>
            <p className="text-lg text-gray-600">Comprehensive speaking skills development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseModules.map((module, index) => (
              <motion.div
                key={module.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.category}</h3>
                <div className="space-y-4">
                  {module.topics.map((topic) => (
                    <div key={topic.name} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{topic.name}</div>
                        <div className="text-sm text-gray-600">{topic.description}</div>
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
            <p className="text-lg text-gray-600">Our students share their transformation journey</p>
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
                    <div className="text-sm text-gray-600">{testimonial.improvement}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">&quot;{testimonial.content}&quot;</p>
                <div className="text-sm text-blue-600">{testimonial.background}</div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your English Speaking?</h2>
            <p className="text-xl text-blue-100 mb-8">Join thousands of successful students who gained speaking confidence</p>
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