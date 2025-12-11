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
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick Links Data
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact', path: '/contact' },
  ];

  // Visa Services Data
  const visaServices = [
    { name: 'PR Visa', path: '/pr-visa' },
    { name: 'Student Visa', path: '/student-visa' },
    { name: 'Work Permit', path: '/work-visa' },
    { name: 'Visit Visa', path: '/visit-visa' },
    { name: 'Languages Training', path: '/coaching' },
  ];

  // Social Media Links
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com/skylandimmigration' },
    { icon: <FaTwitter />, url: 'https://twitter.com/skylandimmigration' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/skylandimmigration' },
    { icon: <FaInstagram />, url: 'https://instagram.com/skylandimmigration' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="bg-gray-100 text-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Explore Our Immigration Resources
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Guides & Tutorials', href: '/resources/guides' },
              { title: 'Checklists', href: '/resources/checklists' },
              { title: 'Templates & Samples', href: '/resources/templates' },
              { title: 'Download Center', href: '/resources/downloads' },
              { title: 'Government Links', href: '/resources/government-links' },
              { title: 'Visa FAQs', href: '/resources/faqs' }, // Optional extra
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="block bg-white hover:bg-gray-100 text-gray-800 border border-gray-100 p-5 rounded-xl shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">
                  Learn more about {item.title.toLowerCase()} to make informed decisions.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Resources Bar */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700 pt-16">
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
                4th Floor Vasavi MPM Grand, Ameerpet, Yella Reddy Guda, Hyderabad, Telangana 500073
              </address>
            </li>
            <li className="flex items-center">
              <div className="bg-gray-800 p-2 rounded-full mr-3">
                <FaPhoneAlt className="text-yellow-400 text-sm" />
              </div>
              <div>
                <a href="tel:+919999999999" className="text-sm text-gray-400 hover:text-yellow-400 transition duration-300 block">
                  +91 6300191853
                </a>
                <a href="tel:+914040404040" className="text-sm text-gray-400 hover:text-yellow-400 transition duration-300 block">
                  +91 9032420020
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

      {/* Enhanced Resources Bar */}
      <div className="bg-gray-800 border-t border-gray-700 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/2">
            <h4 className="text-xl font-bold text-white mb-2">Subscribe to our Newsletter</h4>
            <p className="text-gray-400">Get the latest immigration news and updates delivered to your inbox.</p>
          </div>
          <div className="md:w-1/2 w-full">
            <NewsletterForm />
          </div>
        </div>
      </div>



      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-md">
          <div className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {currentYear} Skyland Immigration. All rights reserved.</p>
          </div>
          <div className="mt-1 text-sm">
            <Link href="/privacy-policy" className="hover:text-yellow-400 transition duration-300 mr-3">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-yellow-400 transition duration-300 mr-3">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-yellow-400 transition duration-300 mr-3">
              Refund Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-yellow-400 transition duration-300">
              Disclaimer
            </Link>
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