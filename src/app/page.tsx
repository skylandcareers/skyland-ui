// src/app/page.tsx
'use client';

import React from 'react';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import OurServices from '../components/OurServices';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import ImpactStats from '../components/ImpactStats';
import FeaturedArticles from '../components/FeaturedArticles';
import VideoSection from '../components/VideoSection';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
      title="Immigrate to your dream country with "
      highlight="Skyland Immigration"
      subtitle="Expert guidance, affordable pricing & hassle-free visa processing services tailored for your success."
      primaryCta={{ text: 'Get Free Assessment', url: '/contact' }}
      secondaryCta={{ text: 'Check Eligibility', url: '/eligibility' }}
      imageUrl="/images/hero-image.png" // make sure this exists
    />
      <WhyChoose />
      <ImpactStats />
      <Process />
      <OurServices />
      <Testimonials />
      <FAQ />
      <FeaturedArticles />
      <VideoSection />
      <Contact />
    </main>
  );
}
