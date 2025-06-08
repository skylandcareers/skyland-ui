'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCta: {
    text: string;
    url: string;
  };
  secondaryCta?: {
    text: string;
    url: string;
  };
  bgGradient?: string;
  imageUrl?: string; // new
}

const Hero: React.FC<HeroProps> = ({
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  bgGradient = 'bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700',
  imageUrl = '/images/hero-illustration.png',
}) => {
  return (
    <section className={`${bgGradient} text-white relative overflow-hidden`}>
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-4xl font-extrabold">
            {highlight ? (
              <>
                {title.split(highlight)[0]}
                <span className="text-yellow-400">{highlight}</span>
                {title.split(highlight)[1]}
              </>
            ) : (
              title
            )}
          </h1>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm sm:text-base font-medium">
            <div className="bg-white/80 text-gray-800 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm hover:scale-105 transition-transform">
              ✅ 10,000+ Clients Trusted
            </div>
            <div className="bg-white/80 text-gray-800 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm hover:scale-105 transition-transform">
              🌍 Serving 🇨🇦 🇬🇧 🇦🇺 & more
            </div>
          </div>

          <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl opacity-90">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href={primaryCta.url}
              className="inline-block bg-yellow-400 text-yellow-900 font-semibold rounded-lg px-6 py-3 shadow-lg hover:bg-yellow-300 transition-colors text-center"
            >
              {primaryCta.text}
            </a>

            {secondaryCta && (
              <a
                href={secondaryCta.url}
                className="inline-block text-white bg-white/20 hover:bg-white/30 rounded-lg px-6 py-3 font-semibold transition-colors text-center"
              >
                {secondaryCta.text}
              </a>
            )}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
        <Image
          src={imageUrl}
          alt="Hero Illustration"
          width={640}
          height={480}
          className="w-full max-w-md md:max-w-lg mx-auto rounded-xl shadow-2xl h-auto"
          priority
        />
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
