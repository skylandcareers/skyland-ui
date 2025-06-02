'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Phone } from 'lucide-react';

const visaData = [
  {
    visa: 'Work Permit',
    countries: [
      { name: 'Canada', url: '/visas/work-permit/canada' },
      { name: 'Australia', url: '/visas/work-permit/australia' },
      { name: 'USA', url: '/visas/work-permit/usa' },
    ],
  },
  {
    visa: 'Study Visa',
    countries: [
      { name: 'UK', url: '/visas/study-visa/uk' },
      { name: 'Germany', url: '/visas/study-visa/germany' },
      { name: 'New Zealand', url: '/visas/study-visa/new-zealand' },
    ],
  },
  {
    visa: 'Visit Visa',
    countries: [
      { name: 'Schengen', url: '/visas/visit-visa/schengen' },
      { name: 'Japan', url: '/visas/visit-visa/japan' },
      { name: 'Singapore', url: '/visas/visit-visa/singapore' },
    ],
  },
  {
    visa: 'Coaching',
    countries: [
      { name: 'General', url: '/coaching/general' },
      { name: 'IELTS', url: '/coaching/ielts' },
    ],
  },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openVisaIndex, setOpenVisaIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleVisaIndex = (index: number) =>
    setOpenVisaIndex(openVisaIndex === index ? null : index);

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-600 flex items-center group">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2 group-hover:rotate-6 transition-transform">
            S
          </span>
          <span className="group-hover:text-blue-700 transition-colors">
            Skyland Immigration
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-700 relative">
          {visaData.map(({ visa, countries }) => (
            <div key={visa} className="relative group">
              <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer select-none transition-colors duration-200 font-medium text-sm lg:text-base">
                {visa}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 mt-2 w-48 lg:w-56 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 origin-top transform group-hover:scale-100 scale-95">
                {countries.map(({ name, url }) => (
                  <Link
                    key={name}
                    href={url}
                    className="block px-4 py-2 lg:py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 border-b border-gray-100 last:border-0 first:rounded-t-lg last:rounded-b-lg text-sm lg:text-base"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link href="/about" className="hover:text-blue-600 transition-colors duration-200 font-medium text-sm lg:text-base hover:underline underline-offset-4 decoration-2 decoration-blue-400">
            About
          </Link>
          <Link href="/success-stories" className="hover:text-blue-600 transition-colors duration-200 font-medium text-sm lg:text-base hover:underline underline-offset-4 decoration-2 decoration-blue-400">
            Success Stories
          </Link>

          <a
            href="tel:+919032420020"
            className="ml-2 lg:ml-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1.5 lg:px-5 lg:py-2.5 rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 text-sm lg:text-base"
          >
            <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
            {windowWidth >= 1024 ? <span>+91 90324 20020</span> : <span>Call Us</span>}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobile}
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-slide-down overflow-y-auto max-h-[calc(100vh-64px)]">
          {visaData.map(({ visa, countries }, index) => (
            <div key={visa} className="border-b border-gray-100">
              <button
                onClick={() => toggleVisaIndex(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-700 hover:bg-blue-50 transition-colors duration-150"
              >
                <span className="text-base">{visa}</span>
                {openVisaIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                )}
              </button>
              {openVisaIndex === index && (
                <div className="bg-gray-50 animate-fade-in">
                  {countries.map(({ name, url }) => (
                    <Link
                      key={name}
                      href={url}
                      className="block px-8 py-3 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-150 border-t border-gray-100 flex items-center text-base"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/about"
            className="block px-5 py-4 border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150 font-medium text-base"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/success-stories"
            className="block px-5 py-4 border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150 font-medium text-base"
            onClick={() => setMobileOpen(false)}
          >
            Success Stories
          </Link>

          <a
            href="tel:+919032420020"
            className="block px-5 py-4 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium flex items-center justify-center gap-2 text-base"
          >
            <Phone className="w-5 h-5" />
            <span>+91 90324 20020</span>
          </a>
        </div>
      )}
    </header>
  );
};
