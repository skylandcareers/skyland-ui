'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaCalendarAlt, FaBook, FaChartLine, FaLanguage, FaGlobeAmericas } from 'react-icons/fa';

export default function CoachingPage() {
  const testPrepCourses = [
    { name: 'IELTS', description: 'Comprehensive training for all modules (Listening, Reading, Writing, Speaking)' },
    { name: 'TOEFL', description: 'Strategies for internet-based test with full-length practice tests' },
    { name: 'PTE', description: 'Computer-based test preparation with AI scoring practice' },
    { name: 'French (TEF/TCF)', description: 'Preparation for Canadian immigration language tests' },
    { name: 'German (Goethe/TestDaF)', description: 'A1-C2 levels for study/work in Germany' },
    { name: 'Spanish (DELE)', description: 'Official diploma preparation for Spanish proficiency' },
    { name: 'Duolingo English Test', description: 'Test-taking strategies for this computer-adaptive exam' }
  ];

  const spokenLanguages = [
    { name: 'English for Telugu Speakers', description: 'Fluency development with focus on common challenges' },
    { name: 'English for Tamil Speakers', description: 'Accent reduction and conversational practice' },
    { name: 'English for Hindi Speakers', description: 'Grammar fundamentals and pronunciation correction' },
    { name: 'French for Beginners', description: 'A1-A2 level with focus on immigration requirements' },
    { name: 'French Intermediate', description: 'B1-B2 level for professional communication' },
    { name: 'Business English', description: 'Corporate communication and professional vocabulary' }
  ];

  const benefits = [
    { icon: <FaChalkboardTeacher className="text-blue-600 text-xl" />, title: 'Certified Trainers', description: 'Native-level instructors with 10+ years experience' },
    { icon: <FaCalendarAlt className="text-blue-600 text-xl" />, title: 'Flexible Schedule', description: 'Morning/evening/weekend batches available' },
    { icon: <FaBook className="text-blue-600 text-xl" />, title: 'Custom Materials', description: 'Tailored study plans based on your level' },
    { icon: <FaChartLine className="text-blue-600 text-xl" />, title: 'Proven Results', description: '85% students achieve target scores' },
    { icon: <FaLanguage className="text-blue-600 text-xl" />, title: 'Visa Focus', description: 'Test strategies aligned with immigration requirements' },
    { icon: <FaGlobeAmericas className="text-blue-600 text-xl" />, title: 'Cultural Training', description: 'Learn language within cultural context' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Master <span className="text-blue-600">Language Tests</span> & <span className="text-blue-600">Spoken Skills</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          World-class coaching to help you ace language requirements for study, work, and immigration worldwide.
        </p>
      </motion.div>

      {/* Test Preparation Courses */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          <span className="bg-blue-100 px-4 py-2 rounded-lg">📝 Test Preparation Programs</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testPrepCourses.map((course, i) => (
            <motion.div
              key={course.name}
              className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Mock Tests</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Personal Feedback</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Score Guarantee</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spoken Language Courses */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-500 mb-8">
          <span className="bg-blue-100 px-4 py-2 rounded-lg">🗣️ Spoken Language Programs</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spokenLanguages.map((course, i) => (
            <motion.div
              key={course.name}
              className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Conversation Practice</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Accent Training</span>
                {course.name.includes('French') && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Immigration Focus</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose <span className="text-blue-600">Skyland Language Coaching</span>?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stats */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Our Students&apos; Success</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Achieved Target Scores</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Language Journey?</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Book a free level assessment and consultation with our language experts today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Book Free Assessment
          </a>
          <a
            href="tel:+919999999999"
            className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition"
          >
            Call for Details
          </a>
        </div>
      </motion.div>
    </div>
  );
}