'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaTicketAlt, FaClock, FaClipboardList } from 'react-icons/fa';
import { Calendar, Globe } from 'lucide-react';

// Define types for Event data
interface EventData {
  slug: string;
  name: string;
  date: string;
  location: string;
  description: string;
  keyHighlights: string[];
  duration: string;
  capacity: string;
  category: string;
  image: string;
}

const eventDetails: EventData[] = [
  {
    slug: 'canada-education-fair',
    name: 'Canada Education Fair 2024',
    date: 'March 15-16, 2024',
    location: 'Mumbai, India',
    description:
      'Meet representatives from top Canadian universities and explore study opportunities.',
    keyHighlights: [
      'One-on-one counseling sessions',
      'On-spot admissions',
      'Scholarship opportunities',
      'Visa guidance workshops',
    ],
    duration: '2 days',
    capacity: '1000+ students',
    category: 'Education Fair',
    image: '/images/canada-fair.jpg',
  },
  {
    slug: 'uk-university-expo',
    name: 'UK University Expo',
    date: 'April 5-6, 2024',
    location: 'Delhi, India',
    description:
      'Comprehensive expo featuring UK universities and educational institutions.',
    keyHighlights: [
      'University presentations',
      'Alumni interactions',
      'Application workshops',
      'IELTS preparation tips',
    ],
    duration: '2 days',
    capacity: '800+ students',
    category: 'Education Expo',
    image: '/images/uk-expo.jpg',
  },
  {
    slug: 'australia-admissions-day',
    name: 'Australia Admissions Day',
    date: 'May 10, 2024',
    location: 'Bangalore, India',
    description:
      'Special one-day event for direct interactions with Australian university representatives.',
    keyHighlights: [
      'Direct university applications',
      'Visa process guidance',
      'Accommodation info sessions',
      'Student life presentations',
    ],
    duration: '1 day',
    capacity: '500+ students',
    category: 'Admissions Event',
    image: '/images/australia-admissions.jpg',
  },
  {
    slug: 'global-education-summit',
    name: 'Global Education Summit',
    date: 'June 20-22, 2024',
    location: 'Chennai, India',
    description:
      'Comprehensive summit covering education opportunities worldwide.',
    keyHighlights: [
      'Multiple country representations',
      'Career counseling sessions',
      'Financial planning workshops',
      'Parent information sessions',
    ],
    duration: '3 days',
    capacity: '1500+ visitors',
    category: 'Education Summit',
    image: '/images/global-summit.jpg',
  },
];

const requirements = [
  {
    icon: <FaTicketAlt className="text-blue-600 text-2xl" />,
    title: "Registration",
    details: "Pre-register online to secure your spot and avoid queues"
  },
  {
    icon: <FaClipboardList className="text-blue-600 text-2xl" />,
    title: "Documents",
    details: "Bring academic transcripts and passport for on-spot assessments"
  },
  {
    icon: <FaUsers className="text-blue-600 text-2xl" />,
    title: "Attendance",
    details: "Students and parents both welcome to attend sessions"
  },
  {
    icon: <FaClock className="text-blue-600 text-2xl" />,
    title: "Timing",
    details: "Plan to spend at least 3-4 hours to cover all sessions"
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-600 text-2xl" />,
    title: "Venue",
    details: "Check specific venue details and parking arrangements"
  },
  {
    icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
    title: "Schedule",
    details: "Review the session schedule to plan your attendance"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Choose Event",
    description: "Select the event that matches your study abroad goals"
  },
  {
    step: 2,
    title: "Register Online",
    description: "Complete the registration form and secure your spot"
  },
  {
    step: 3,
    title: "Document Preparation",
    description: "Gather required documents for on-spot assessments"
  },
  {
    step: 4,
    title: "Attend Event",
    description: "Participate in sessions and meet university representatives"
  },
  {
    step: 5,
    title: "Follow-up Support",
    description: "Get continued assistance for applications and admissions"
  }
];

export default function EventsPage() {
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
            Education Events & Fairs
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join our educational events and fairs to explore international study opportunities and meet university representatives
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming Events
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Multiple Locations
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16 max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {eventDetails.map((event) => (
          <a
            key={event.slug}
            href={`/events/${event.slug}`}
            className="border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition bg-blue-50"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-800">{event.name}</h3>
              <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded">
                {event.category}
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-3">{event.description}</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p className="flex items-center">
                <FaCalendarAlt className="mr-2" /> {event.date}
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> {event.location}
              </p>
              <p className="flex items-center">
                <FaUsers className="mr-2" /> {event.capacity}
              </p>
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
            Event Requirements
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
            How to Participate
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
            Ready to Join Our Next Event?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Register now to secure your spot at our upcoming education events!
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
              Register Now
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