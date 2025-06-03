'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoSection = () => {
  const videos = [
    {
      id: '1',
      title: 'Skyland Overview',
      src: 'https://www.youtube.com/embed/uIb37qvroI0',
      description: 'Client Experiences & Success Stories',
    },
    {
      id: '2',
      title: 'Why Choose Skyland',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Informational Session',
    },
    {
      id: '3',
      title: 'Visa Process Explained',
      src: 'https://www.youtube.com/embed/3GwjfUFyY6M',
      description: 'Step-by-step Breakdown',
    },
    {
      id: '4',
      title: 'Client Testimonials',
      src: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      description: 'Real Stories',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Learn More About <span className="text-yellow-500">Skyland Immigration</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how our experts help clients achieve their dreams of international education, careers, and migration.
        </p>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <p className="mt-3 text-gray-800 font-semibold">{video.title}</p>
                <p className="text-gray-500 text-sm">{video.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSection;
