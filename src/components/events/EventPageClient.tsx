'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Clock, ChevronRight, Star, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data - would come from API in real implementation
const getEventData = (slug: string) => ({
  title: `Immigration Seminar 2024: ${slug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`,
  date: 'March 30, 2024',
  time: '10:00 AM - 1:00 PM',
  location: 'Virtual Event',
  description: 'Join our comprehensive immigration seminar where expert consultants will guide you through the latest immigration pathways, visa requirements, and success strategies for your migration journey. This interactive session will provide you with actionable insights and personalized advice to navigate the complex immigration landscape.',
  highlights: [
    'Latest immigration policies and updates for 2024',
    'Interactive Q&A session with immigration experts',
    'Success stories from recent immigrants',
    'Exclusive resources and materials',
    'Networking opportunities with industry professionals'
  ],
  speakers: [
    {
      name: 'Sarah Johnson',
      role: 'Senior Immigration Consultant',
      image: '/images/speakers/sarah.jpg',
      bio: 'With over 15 years of experience, Sarah has helped thousands of families successfully navigate the immigration process. She specializes in family reunification visas.',
      social: '@sarahimmigration'
    },
    {
      name: 'Michael Chen',
      role: 'Visa Processing Expert',
      image: '/images/speakers/michael.jpg',
      bio: 'Former government visa officer with insider knowledge of application processing. Michael has a 98% success rate for his clients.',
      social: '@michaelchenvisa'
    }
  ],
  stats: [
    { value: '500+', label: 'Participants' },
    { value: '98%', label: 'Success Rate' },
    { value: '20+', label: 'Countries Covered' }
  ]
});

const testimonials = [
  {
    id: 1,
    name: 'Rahul Patel',
    role: 'Software Engineer',
    content: 'The seminar clarified so many questions I had about the work visa process. The experts were incredibly knowledgeable and the materials provided were comprehensive.',
    rating: 5
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    role: 'Medical Professional',
    content: 'As someone with a complex case, I found the one-on-one consultation option extremely valuable. The team went above and beyond to address my specific situation.',
    rating: 5
  },
  {
    id: 3,
    name: 'David Kim',
    role: 'International Student',
    content: 'The pathways explained for post-study work visas were game-changing for my career planning. Highly recommend to any student considering immigration options.',
    rating: 4
  }
];

interface EventPageClientProps {
  slug: string;
}

export default function EventPageClient({ slug }: EventPageClientProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const event = getEventData(slug);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with gradient background */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <span className="text-sm font-medium">Limited Seats Available</span>
              </div>
              <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">{event.title}</h1>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">{event.description}</p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-blue-100">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-200" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-200" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-200" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                {event.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                  >
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-2xl border border-white/20"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Secure Your Spot</h3>
                  <p className="text-gray-600 mb-6">Register now for this exclusive event</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (___) ___-____"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    Register Now <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Your information is secure. We&apos;ll never share your details.
                  </p>
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration Confirmed!</h3>
                  <p className="text-gray-600 mb-6">We&apos;ve sent the event details to your email.</p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">What&apos;s Next?</h4>
                    <ul className="text-sm text-blue-700 space-y-1 text-left">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Check your email for confirmation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Add the event to your calendar</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Prepare your questions for our Q&A session</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 relative">
                <span className="relative inline-block">
                  Event Details
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 opacity-30"></span>
                </span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{event.description}</p>
              
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Key Highlights</h3>
              <ul className="space-y-4">
                {event.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who Should Attend?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Professionals seeking work visas",
                    "Students exploring study options",
                    "Families pursuing reunification",
                    "Entrepreneurs considering business immigration",
                    "Individuals seeking asylum or refugee status",
                    "Anyone exploring permanent residency options"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600">
                          <Check className="w-3 h-3" />
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-8 relative">
                <span className="relative inline-block">
                  Our Experts
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 opacity-30"></span>
                </span>
              </h3>
              <div className="space-y-8">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-800">{speaker.name}</h4>
                        <p className="text-blue-600 font-medium mb-2">{speaker.role}</p>
                        <p className="text-gray-600 text-sm mb-3">{speaker.bio}</p>
                        <p className="text-sm text-gray-500">Follow: {speaker.social}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-lg mb-4">Event Schedule</h4>
                <div className="space-y-4">
                  {[
                    { time: '10:00 AM', title: 'Welcome & Introduction' },
                    { time: '10:30 AM', title: 'Immigration Pathways Overview' },
                    { time: '11:15 AM', title: 'Visa Processing Deep Dive' },
                    { time: '12:00 PM', title: 'Success Stories Panel' },
                    { time: '12:45 PM', title: 'Q&A Session' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium">
                        {item.time}
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-800 font-medium">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Hear From Our Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what past attendees have to say about our events.</p>
          </motion.div>
          
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === currentTestimonial && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 right-0 bg-white p-8 rounded-xl shadow-md border border-gray-100"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-400">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-500">{testimonial.rating}.0 rating</span>
                        </div>
                        <blockquote className="text-lg text-gray-700 mb-6">
                          &ldquo;{testimonial.content}&rdquo;
                        </blockquote>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join hundreds of others who have successfully navigated their immigration journey with our guidance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
                if (isSubmitted) setIsSubmitted(false);
              }}
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 