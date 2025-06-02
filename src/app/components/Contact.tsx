'use client';

import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    url: string;
  };
  secondaryButton?: {
    text: string;
    url: string;
  };
  contactInfo?: boolean;
  bgColor?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title = "Ready to Begin Your Immigration Journey?",
  description = "Take the first step towards your dream destination with our expert guidance.",
  primaryButton = {
    text: "Book Free Consultation",
    url: "/consultation"
  },
  secondaryButton,
  contactInfo = true,
  bgColor = "bg-gray-50"
}) => {
  return (
    <section className={`${bgColor} py-16 sm:py-20 lg:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href={primaryButton.url}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold rounded-lg px-6 py-3 sm:px-8 sm:py-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {primaryButton.text}
              <ArrowRight className="w-5 h-5" />
            </a>

            {secondaryButton && (
              <a
                href={secondaryButton.url}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg px-6 py-3 sm:px-8 sm:py-4 border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {secondaryButton.text}
              </a>
            )}
          </div>

          {contactInfo && (
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base">
              <a 
                href="tel:+919032420020" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 90324 20020
              </a>
              <a 
                href="mailto:info@skylandimmigration.com" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@skylandimmigration.com
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;