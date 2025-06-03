'use client';

import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Quick Links Data
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact', path: '/contact' },
  ];

  // Visa Services Data
  const visaServices = [
    { name: 'Canada PR Visa', path: '/canada-visa' },
    { name: 'Student Visa', path: '/student-visa' },
    { name: 'Work Permit', path: '/work-visa' },
    { name: 'Australia Immigration', path: '/australia-visa' },
    { name: 'Visitor Visa', path: '/visitor-visa' },
  ];

  // Social Media Links
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com/skylandimmigration' },
    { icon: <FaTwitter />, url: 'https://twitter.com/skylandimmigration' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/skylandimmigration' },
    { icon: <FaInstagram />, url: 'https://instagram.com/skylandimmigration' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
        {/* Company Info */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-300 inline-block">
            Skyland Immigration
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering dreams of global migration through expert visa & immigration guidance. Trusted by thousands worldwide to make their immigration journey seamless and successful.
          </p>
          <div className="flex space-x-4 pt-2">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.icon.type.displayName}`}
                className="bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 text-gray-300 p-2 rounded-full transition duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-400">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.path}
                  className="flex items-center text-sm text-gray-400 hover:text-yellow-400 transition duration-300 group"
                >
                  <FaChevronRight className="mr-2 text-yellow-400 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visa Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-400">
            Visa Services
          </h4>
          <ul className="space-y-2">
            {visaServices.map((service, index) => (
              <li key={index}>
                <Link 
                  href={service.path}
                  className="flex items-center text-sm text-gray-400 hover:text-yellow-400 transition duration-300 group"
                >
                  <FaChevronRight className="mr-2 text-yellow-400 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-400">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-gray-800 p-2 rounded-full mr-3">
                <FaMapMarkerAlt className="text-yellow-400 text-sm" />
              </div>
              <address className="text-sm text-gray-400 not-italic">
                123, Global Towers, Financial District,<br />
                Hyderabad, Telangana 500032, India
              </address>
            </li>
            <li className="flex items-center">
              <div className="bg-gray-800 p-2 rounded-full mr-3">
                <FaPhoneAlt className="text-yellow-400 text-sm" />
              </div>
              <div>
                <a href="tel:+919999999999" className="text-sm text-gray-400 hover:text-yellow-400 transition duration-300 block">
                  +91 99999 99999
                </a>
                <a href="tel:+914040404040" className="text-sm text-gray-400 hover:text-yellow-400 transition duration-300 block">
                  +91 40 4040 4040
                </a>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-gray-800 p-2 rounded-full mr-3">
                <FaEnvelope className="text-yellow-400 text-sm" />
              </div>
              <a 
                href="mailto:info@skylandimmigration.com" 
                className="text-sm text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                info@skylandimmigration.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {currentYear} Skyland Immigration. All rights reserved.</p>
            <div className="mt-1 text-xs">
              <Link href="/privacy-policy" className="hover:text-yellow-400 transition duration-300 mr-3">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-yellow-400 transition duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/appointment" 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-4 py-2 rounded transition duration-300"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;