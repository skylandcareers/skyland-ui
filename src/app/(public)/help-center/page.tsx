'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaPassport, FaMoneyBillWave, FaPlane, FaFileAlt, FaHome, FaArrowRight, FaVideo, FaBook, FaGlobe, FaUserGraduate, FaLightbulb, FaChartLine, FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import { Search, MessageCircle, Mail, Phone, Star, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    title: "Visa Application",
    icon: <FaPassport className="text-3xl" />,
    description: "Everything about student visa applications",
    articles: [
      "How to apply for a student visa",
      "Required documents checklist",
      "Visa interview tips",
      "Common visa rejection reasons"
    ]
  },
  {
    title: "Study Programs",
    icon: <FaGraduationCap className="text-3xl" />,
    description: "Information about courses and universities",
    articles: [
      "Choosing the right course",
      "University admission process",
      "Scholarship opportunities",
      "Program requirements"
    ]
  },
  {
    title: "Financial Guidance",
    icon: <FaMoneyBillWave className="text-3xl" />,
    description: "Financial planning and requirements",
    articles: [
      "Tuition fee structure",
      "Living cost estimates",
      "Banking and forex",
      "Financial documentation"
    ]
  },
  {
    title: "Travel & Stay",
    icon: <FaPlane className="text-3xl" />,
    description: "Travel and accommodation guidance",
    articles: [
      "Pre-departure checklist",
      "Accommodation options",
      "Travel insurance",
      "Airport pickup services"
    ]
  },
  {
    title: "Documentation",
    icon: <FaFileAlt className="text-3xl" />,
    description: "Document preparation and verification",
    articles: [
      "Required certificates",
      "Document attestation",
      "Translation services",
      "Format guidelines"
    ]
  },
  {
    title: "Settlement",
    icon: <FaHome className="text-3xl" />,
    description: "Settling in your new country",
    articles: [
      "First week guide",
      "Local transportation",
      "Healthcare system",
      "Student communities"
    ]
  }
];

const popularFAQs = [
  {
    question: "What are the basic requirements for a student visa?",
    answer: "The basic requirements typically include acceptance from an educational institution, proof of sufficient funds, valid passport, academic transcripts, and language proficiency test scores. Specific requirements vary by country."
  },
  {
    question: "How long does the visa process take?",
    answer: "Visa processing times vary by country, ranging from 2-12 weeks. It's recommended to apply at least 3 months before your course start date to allow for any delays."
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Most countries allow international students to work part-time during their studies. The permitted hours usually range from 20-40 hours per week, depending on the country and visa type."
  },
  {
    question: "What is the cost of studying abroad?",
    answer: "Costs vary significantly by country and city. You'll need to consider tuition fees ($10,000-$50,000/year), living expenses ($8,000-$30,000/year), and other costs like insurance and travel."
  }
];

const supportChannels = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone Support",
    description: "Get immediate assistance",
    action: "Call now",
    link: "tel:+919876543210"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Support",
    description: "24/7 email support",
    action: "Send email",
    link: "mailto:support@skylandjune.com"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Live Chat",
    description: "Chat with our experts",
    action: "Start chat",
    link: "#"
  }
];

const quickGuides = [
  {
    title: "Pre-Application Guide",
    icon: <FaLightbulb className="w-8 h-8" />,
    description: "Essential steps before applying",
    link: "/guides/pre-application"
  },
  {
    title: "Document Checklist",
    icon: <FaFileAlt className="w-8 h-8" />,
    description: "Complete documentation guide",
    link: "/guides/documents"
  },
  {
    title: "Interview Preparation",
    icon: <FaUserGraduate className="w-8 h-8" />,
    description: "Visa interview tips and tricks",
    link: "/guides/interview"
  },
  {
    title: "Financial Planning",
    icon: <FaChartLine className="w-8 h-8" />,
    description: "Budget and funding guidance",
    link: "/guides/financial"
  }
];

const videoTutorials = [
  {
    title: "Visa Application Process",
    thumbnail: "/images/visa-tutorial.jpg",
    duration: "15:30",
    views: "2.5K",
    link: "#"
  },
  {
    title: "Document Preparation Guide",
    thumbnail: "/images/docs-tutorial.jpg",
    duration: "12:45",
    views: "1.8K",
    link: "#"
  },
  {
    title: "Interview Success Tips",
    thumbnail: "/images/interview-tutorial.jpg",
    duration: "18:20",
    views: "3.2K",
    link: "#"
  },
  {
    title: "University Selection Guide",
    thumbnail: "/images/university-tutorial.jpg",
    duration: "14:15",
    views: "2.1K",
    link: "#"
  }
];

const resources = [
  {
    title: "Student Handbook",
    icon: <FaBook className="w-6 h-6" />,
    format: "PDF",
    size: "2.4 MB",
    link: "#"
  },
  {
    title: "Country Comparison Guide",
    icon: <FaGlobe className="w-6 h-6" />,
    format: "PDF",
    size: "1.8 MB",
    link: "#"
  },
  {
    title: "Cost Calculator",
    icon: <FaMoneyBillWave className="w-6 h-6" />,
    format: "Excel",
    size: "980 KB",
    link: "#"
  },
  {
    title: "Application Timeline",
    icon: <FaCalendarAlt className="w-6 h-6" />,
    format: "PDF",
    size: "1.2 MB",
    link: "#"
  }
];

const upcomingWebinars = [
  {
    title: "Study in Canada - 2024 Intake",
    date: "March 15, 2024",
    time: "2:00 PM IST",
    host: "Sarah Johnson",
    registration: "Open"
  },
  {
    title: "UK Student Visa Updates",
    date: "March 20, 2024",
    time: "3:30 PM IST",
    host: "David Wilson",
    registration: "Open"
  },
  {
    title: "Scholarship Opportunities Abroad",
    date: "March 25, 2024",
    time: "4:00 PM IST",
    host: "Emily Brown",
    registration: "Open"
  }
];

const successStories = [
  {
    name: "Rahul Sharma",
    university: "University of Toronto",
    course: "Masters in Computer Science",
    image: "/images/student1.jpg",
    quote: "The guidance I received made my application process smooth and successful."
  },
  {
    name: "Priya Patel",
    university: "University of Melbourne",
    course: "Bachelor of Business",
    image: "/images/student2.jpg",
    quote: "From visa application to university selection, every step was well-guided."
  },
  {
    name: "Amit Kumar",
    university: "Imperial College London",
    course: "MSc in Engineering",
    image: "/images/student3.jpg",
    quote: "The team's support was crucial in achieving my study abroad dreams."
  }
];

const partnerUniversities = [
  {
    name: "University of Toronto",
    country: "Canada",
    programs: 150,
    ranking: "Top 20",
    logo: "/images/uoft-logo.png"
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    programs: 120,
    ranking: "Top 30",
    logo: "/images/unimelb-logo.png"
  },
  {
    name: "Imperial College London",
    country: "UK",
    programs: 140,
    ranking: "Top 10",
    logo: "/images/imperial-logo.png"
  }
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section with Search */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How can we help you?
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Find answers to your questions about studying abroad
          </motion.p>
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
          <div className="relative">
            <input
              type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 rounded-lg text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Guides Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Quick Start Guides
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickGuides.map((guide, index) => (
              <motion.a
                href={guide.link}
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {guide.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                <p className="text-gray-600 text-sm">{guide.description}</p>
                <span className="mt-4 inline-block text-blue-600 group-hover:text-blue-800">
                  Learn More →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Browse by Category
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4 text-blue-600">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
                      <FaArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-sm">{article}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Video Tutorials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTutorials.map((video, index) => (
              <motion.a
                href={video.link}
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <Image 
                    src={video.thumbnail} 
                    alt={video.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaVideo className="w-12 h-12 text-white" />
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold group-hover:text-blue-600">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.views} views</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {popularFAQs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-blue-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Downloadable Resources
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.a
                href={resource.link}
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600">
                    {resource.icon}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold group-hover:text-blue-600">{resource.title}</h3>
                    <p className="text-sm text-gray-500">{resource.format} • {resource.size}</p>
                        </div>
                      </div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                  <Download className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Download</span>
                </div>
              </motion.a>
            ))}
                </div>
              </div>
      </section>

      {/* Upcoming Webinars Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Upcoming Webinars
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-3">{webinar.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    {webinar.date}
                  </p>
                  <p className="flex items-center">
                    <FaUserGraduate className="w-4 h-4 mr-2" />
                    {webinar.host}
                  </p>
                  <p className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    {webinar.time}
                  </p>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Register Now
              </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Student Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.university}</p>
                    <p className="text-sm text-gray-600">{story.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{story.quote}&rdquo;</p>
              </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Partner Universities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerUniversities.map((university, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={university.logo}
                  alt={university.name}
                  width={200}
                  height={64}
                  className="h-16 object-contain mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">{university.name}</h3>
                <div className="space-y-1 text-gray-600">
                  <p className="flex items-center">
                    <FaGlobe className="w-4 h-4 mr-2" />
                    {university.country}
                  </p>
                  <p className="flex items-center">
                    <FaUniversity className="w-4 h-4 mr-2" />
                    {university.programs}+ Programs
                  </p>
                  <p className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    {university.ranking} Globally
                  </p>
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 flex items-center">
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Need More Help?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supportChannels.map((channel, index) => (
              <motion.a
                href={channel.link}
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {channel.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                  {channel.action} →
                </span>
              </motion.a>
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
            Still Have Questions?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our education experts are here to help you with personalized guidance
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