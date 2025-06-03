'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
  designation?: string;
  country?: string;
  visaType?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    quote: 'Skyland made my Canadian PR process seamless. Their attention to detail and regular updates kept me informed at every step.',
    rating: 5,
    avatarUrl: '/avatars/indian-man.jpg',
    designation: 'Software Engineer',
    country: 'Canada',
    visaType: 'Permanent Residency'
  },
  {
    id: 2,
    name: 'Priya Patel',
    quote: 'The team guided me perfectly through my student visa application. Got my Australian visa in just 3 weeks!',
    rating: 4.5,
    avatarUrl: '/avatars/indian-woman.jpg',
    designation: 'MBA Student',
    country: 'Australia',
    visaType: 'Student Visa'
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    quote: 'Professional service with transparent pricing. My UK work visa was approved without any complications.',
    rating: 5,
    avatarUrl: undefined,
    designation: 'Financial Analyst',
    country: 'United Kingdom',
    visaType: 'Work Visa'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    quote: 'Exceptional support during my spouse visa process. They answered all my queries promptly.',
    rating: 4,
    avatarUrl: '/avatars/indian-woman-2.jpg',
    designation: 'Homemaker',
    country: 'USA',
    visaType: 'Spouse Visa'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    quote: 'Trustworthy consultants who delivered what they promised. My family is now settled in Canada.',
    rating: 5,
    avatarUrl: '/avatars/indian-man-2.jpg',
    designation: 'Business Owner',
    country: 'Canada',
    visaType: 'Business Immigration'
  },
  {
    id: 6,
    name: 'Ananya Joshi',
    quote: 'The documentation support was excellent. Got my German work visa faster than expected.',
    rating: 4.5,
    avatarUrl: '/avatars/indian-woman-3.jpg',
    designation: 'UX Designer',
    country: 'Germany',
    visaType: 'Blue Card'
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, i) => {
    if (i < Math.floor(rating)) {
      return <FaStar key={i} className="text-yellow-400 w-4 h-4" />;
    }
    if (i === Math.floor(rating) && rating % 1 >= 0.5) {
      return <FaStarHalfAlt key={i} className="text-yellow-400 w-4 h-4" />;
    }
    return <FaRegStar key={i} className="text-yellow-400 w-4 h-4" />;
  });
};

const TestimonialsSlider = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-yellow-500">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from people who transformed their lives with our visa services
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'w-2.5 h-2.5 bg-gray-200 rounded-full transition-all duration-300 mx-1 inline-block',
              bulletActiveClass: 'w-6 bg-yellow-400 rounded-lg'
            }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next'
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col border border-gray-100 hover:shadow-xl transition-all">
                    <FaQuoteLeft className="text-yellow-400 text-2xl mb-4 opacity-30" />
                    <p className="text-gray-700 mb-6 flex-grow">&quot;{testimonial.quote}&quot;</p>
                    
                    <div className="flex items-center mb-4">
                      {testimonial.avatarUrl ? (
                        <Image
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover border-2 border-yellow-300 mr-4"
                      />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold text-lg mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.designation}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {testimonial.visaType} • {testimonial.country}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button className="testimonial-prev p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition">
              <FaChevronLeft className="text-gray-700" />
            </button>
            <div className="testimonial-pagination flex justify-center space-x-1" />
            <button className="testimonial-next p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition">
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="/success-stories"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all"
          >
            View All Success Stories
            <FaChevronRight className="ml-2" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSlider;