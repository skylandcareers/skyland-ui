'use client';

import { useState } from 'react'; 
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

interface Testimonial {
    id: number;
    name: string;
    country: string;
    role: string;
    avatarUrl: string;
    quote: string;
    videoUrl: string;
    rating: number;
    timeline: string;
  }
  

const testimonials = [
  {
    id: 1,
    name: 'Amit Patel',
    country: 'Canada',
    role: 'Software Engineer at Shopify',
    avatarUrl: '/images/testimonials/amit.jpg',
    quote: 'Skyland Immigration guided me from day one. I got my Canadian work permit in record time! The team was incredibly professional and made the complex process feel simple.',
    videoUrl: 'https://www.youtube.com/embed/uIb37qvroI0',
    rating: 5,
    timeline: 'Process completed in 4 months'
  },
  {
    id: 2,
    name: 'Sara Khan',
    country: 'Germany',
    role: 'Masters Student at TU Berlin',
    avatarUrl: '/images/testimonials/sara.jpg',
    quote: 'Thanks to Skyland\'s IELTS coaching and visa support, I\'m now pursuing my Master\'s in Berlin. Their personalized approach made all the difference in my application.',
    videoUrl: '',
    rating: 5,
    timeline: 'Visa approved in 3 weeks'
  },
  {
    id: 3,
    name: 'John Fernandes',
    country: 'UK',
    role: 'Healthcare Professional at NHS',
    avatarUrl: '/images/testimonials/john.jpg',
    quote: 'I thought moving abroad would be tough—Skyland made it simple and stress-free. Their attention to detail ensured my work visa was approved without any issues.',
    videoUrl: '',
    rating: 4,
    timeline: 'Relocated within 2 months'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    country: 'Australia',
    role: 'Marketing Manager in Sydney',
    avatarUrl: '/images/testimonials/priya.jpg',
    quote: 'From skills assessment to permanent residency, Skyland handled everything perfectly. I couldn\'t be happier with my new life down under!',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 5,
    timeline: 'PR granted in 9 months'
  },
  {
    id: 5,
    name: 'Rajiv Mehta',
    country: 'Canada',
    role: 'Restaurant Owner in Toronto',
    avatarUrl: '/images/testimonials/rajiv.jpg',
    quote: 'As a business owner, the immigration process seemed daunting. Skyland\'s business immigration experts made it smooth and predictable.',
    videoUrl: '',
    rating: 5,
    timeline: 'Business visa in 5 months'
  },
  {
    id: 6,
    name: 'Neha Gupta',
    country: 'USA',
    role: 'Research Scientist at MIT',
    avatarUrl: '/images/testimonials/neha.jpg',
    quote: 'The O-1 visa process is extremely complex, but Skyland\'s attorneys navigated it flawlessly. Their expertise was worth every penny.',
    videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
    rating: 4,
    timeline: 'Premium processing in 15 days'
  }
];

const SuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.country.toLowerCase() === activeFilter.toLowerCase());

  const countries = [...new Set(testimonials.map(t => t.country))];

  const openModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
            Client Success
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Stories, <span className="text-blue-600">Real Success</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands who achieved their dreams with Skyland Immigration&apos;s expert guidance
          </p>
        </motion.div>

        {/* Country Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'all' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
          >
            All Countries
          </button>
          {countries.map(country => (
            <button
              key={country}
              onClick={() => setActiveFilter(country)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === country ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
            >
              {country}
            </button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {testimonial.videoUrl ? (
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => openModal(testimonial)}
                >
                  <div className="relative pb-[56.25%] bg-gray-900 overflow-hidden">
                    <Image
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      fill
                      className="object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-all">
                        <FaPlay className="text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <Image
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover border-2 border-blue-100"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-blue-600 text-sm">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({testimonial.rating}.0)</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="absolute -top-2 left-0 text-blue-100 text-3xl" />
                    <p className="text-gray-600 pl-8 relative z-10">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">
                        {testimonial.country}
                      </span>
                      <span className="text-xs text-gray-500">{testimonial.timeline}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Join our community of successful immigrants. Let&apos;s make your dream a reality with personalized guidance every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Free Assessment
              <FaArrowRight className="ml-2" />
            </a>
            <a
              href="/success-stories"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              View More Stories
            </a>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition"
              >
                &times;
              </button>
              <div className="relative pb-[56.25%]">
                <iframe
                  src={selectedTestimonial.videoUrl}
                  title={selectedTestimonial.name + ' testimonial video'}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{selectedTestimonial.name}</h3>
                <p className="text-blue-600 mb-2">{selectedTestimonial.role}</p>
                <p className="text-gray-700">{selectedTestimonial.quote}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SuccessStories;