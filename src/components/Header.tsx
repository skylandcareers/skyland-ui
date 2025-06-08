'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  GraduationCap, 
  Briefcase,
  Home,
  Star,
  ArrowRight,
  MapPin,
  BookOpen,
  Users,
  Plane
} from 'lucide-react';

interface MenuItem {
  icon: React.ReactElement;
  description: string;
  featured: Array<{ name: string; url: string; }>;
  categories?: Array<{
    name: string;
    items: Array<{ name: string; url: string; }>;
  }>;
  countries?: Array<{ name: string; url: string; }>;
}

interface VisaMenuItem extends MenuItem {
  visa: string;
}

interface ResourceMenuItem extends MenuItem {
  title: string;
}

type NavigationItem = VisaMenuItem | ResourceMenuItem;

// Enhanced visa data with categories and featured items
const visaData: NavigationItem[] = [
  {
    visa: 'PR Visa',
    icon: <Home className="w-5 h-5" />,
    description: 'Permanent Residency Visas for Different Countries',
    featured: [
      { name: 'Canada Express Entry', url: '/pr-visa/canada' },
      { name: 'Australia PR Points Calculator', url: '/pr-visa/australia' }
    ],
    countries: [
      { name: 'Canada', url: '/pr-visa/canada' },
      { name: 'Australia', url: '/pr-visa/australia' },
      { name: 'New Zealand', url: '/pr-visa/new-zealand' },
      { name: 'UK', url: '/pr-visa/uk' },
      { name: 'Germany', url: '/pr-visa/germany' }
    ],
  },
  {
    visa: 'Study Visa',
    icon: <GraduationCap className="w-5 h-5" />,
    description: 'Study Abroad Programs and Student Visas',
    featured: [
      { name: 'Top Universities Guide', url: '/resources/universities' },
      { name: 'Scholarship Programs', url: '/resources/scholarships' }
    ],
    categories: [
      {
        name: 'Popular Destinations',
        items: [
          { name: 'USA', url: '/study-visa/usa' },
          { name: 'UK', url: '/study-visa/uk' },
          { name: 'Canada', url: '/study-visa/canada' },
          { name: 'Australia', url: '/study-visa/australia' },
          { name: 'Germany', url: '/study-visa/germany' },
          { name: 'France', url: '/study-visa/france' },
          { name: 'Russia', url: '/study-visa/russia' },
          { name: 'Malta', url: '/study-visa/malta' },
          { name: 'Cyprus', url: '/study-visa/cyprus' },
        ]
      },
      {
        name: 'Western Europe',
        items: [
          { name: 'Austria', url: '/study-visa/austria' },
          { name: 'Belgium', url: '/study-visa/belgium' },
          { name: 'France', url: '/study-visa/france' },
          { name: 'Germany', url: '/study-visa/germany' },
          { name: 'Ireland', url: '/study-visa/ireland' },
          { name: 'Luxembourg', url: '/study-visa/luxembourg' },
          { name: 'Netherlands', url: '/study-visa/netherlands' },
          { name: 'Switzerland', url: '/study-visa/switzerland' },
          { name: 'UK', url: '/study-visa/uk' }
        ]
      },
      {
        name: 'Northern Europe',
        items: [
          { name: 'Denmark', url: '/study-visa/denmark' },
          { name: 'Finland', url: '/study-visa/finland' },
          { name: 'Iceland', url: '/study-visa/iceland' },
          { name: 'Norway', url: '/study-visa/norway' },
          { name: 'Sweden', url: '/study-visa/sweden' }
        ]
      },
      {
        name: 'Southern Europe',
        items: [
          { name: 'Cyprus', url: '/study-visa/cyprus' },
          { name: 'Greece', url: '/study-visa/greece' },
          { name: 'Italy', url: '/study-visa/italy' },
          { name: 'Malta', url: '/study-visa/malta' },
          { name: 'Portugal', url: '/study-visa/portugal' },
          { name: 'Spain', url: '/study-visa/spain' }
        ]
      },
      {
        name: 'Eastern Europe',
        items: [
          { name: 'Bulgaria', url: '/study-visa/bulgaria' },
          { name: 'Croatia', url: '/study-visa/croatia' },
          { name: 'Czech Republic', url: '/study-visa/czech-republic' },
          { name: 'Estonia', url: '/study-visa/estonia' },
          { name: 'Hungary', url: '/study-visa/hungary' },
          { name: 'Latvia', url: '/study-visa/latvia' },
          { name: 'Lithuania', url: '/study-visa/lithuania' },
          { name: 'Poland', url: '/study-visa/poland' },
          { name: 'Romania', url: '/study-visa/romania' },
          { name: 'Slovakia', url: '/study-visa/slovakia' },
          { name: 'Slovenia', url: '/study-visa/slovenia' }
        ]
      },
      {
        name: 'Asia Pacific',
        items: [
          { name: 'Australia', url: '/study-visa/australia' },
          { name: 'China', url: '/study-visa/china' },
          { name: 'Hong Kong', url: '/study-visa/hong-kong' },
          { name: 'Japan', url: '/study-visa/japan' },
          { name: 'Malaysia', url: '/study-visa/malaysia' },
          { name: 'New Zealand', url: '/study-visa/new-zealand' },
          { name: 'Singapore', url: '/study-visa/singapore' },
          { name: 'South Korea', url: '/study-visa/south-korea' },
          { name: 'Taiwan', url: '/study-visa/taiwan' }
        ]
      },
      {
        name: 'South & Southeast Asia',
        items: [
          { name: 'India', url: '/study-visa/india' },
          { name: 'Indonesia', url: '/study-visa/indonesia' },
          { name: 'Maldives', url: '/study-visa/maldives' },
          { name: 'Thailand', url: '/study-visa/thailand' },
          { name: 'Vietnam', url: '/study-visa/vietnam' }
        ]
      },
      {
        name: 'Americas',
        items: [
          { name: 'Brazil', url: '/study-visa/brazil' },
          { name: 'Canada', url: '/study-visa/canada' },
          { name: 'Mexico', url: '/study-visa/mexico' },
          { name: 'USA', url: '/study-visa/usa' }
        ]
      },
      {
        name: 'Other Regions',
        items: [
          { name: 'Israel', url: '/study-visa/israel' },
          { name: 'Russia', url: '/study-visa/russia' },
          { name: 'South Africa', url: '/study-visa/south-africa' },
          { name: 'Turkey', url: '/study-visa/turkey' },
          { name: 'UAE', url: '/study-visa/uae' }
        ]
      }
    ],
    countries: [
      { name: 'Albania', url: '/study-visa/albania' },
      { name: 'Armenia', url: '/study-visa/armenia' },
      { name: 'Azerbaijan', url: '/study-visa/azerbaijan' },
      { name: 'Belarus', url: '/study-visa/belarus' },
      { name: 'Bosnia and Herzegovina', url: '/study-visa/bosnia-herzegovina' },
      { name: 'Brazil', url: '/study-visa/brazil' },
      { name: 'Bulgaria', url: '/study-visa/bulgaria' },
      { name: 'Canada', url: '/study-visa/canada' },
      { name: 'China', url: '/study-visa/china' },
      { name: 'Croatia', url: '/study-visa/croatia' },
      { name: 'Cyprus', url: '/study-visa/cyprus' },
      { name: 'Czech Republic', url: '/study-visa/czech-republic' },
      { name: 'Denmark', url: '/study-visa/denmark' },
      { name: 'Estonia', url: '/study-visa/estonia' },
      { name: 'Finland', url: '/study-visa/finland' },
      { name: 'France', url: '/study-visa/france' },
      { name: 'Georgia', url: '/study-visa/georgia' },
      { name: 'Greece', url: '/study-visa/greece' },
      { name: 'Hong Kong', url: '/study-visa/hong-kong' },
      { name: 'Hungary', url: '/study-visa/hungary' },
      { name: 'India', url: '/study-visa/india' },
      { name: 'Indonesia', url: '/study-visa/indonesia' },
      { name: 'Ireland', url: '/study-visa/ireland' },
      { name: 'Japan', url: '/study-visa/japan' },
      { name: 'Latvia', url: '/study-visa/latvia' },
      { name: 'Lithuania', url: '/study-visa/lithuania' },
      { name: 'Luxembourg', url: '/study-visa/luxembourg' },
      { name: 'Malaysia', url: '/study-visa/malaysia' },
      { name: 'Maldives', url: '/study-visa/maldives' },
      { name: 'Mauritius', url: '/study-visa/mauritius' },
      { name: 'Mexico', url: '/study-visa/mexico' },
      { name: 'Netherlands', url: '/study-visa/netherlands' },
      { name: 'New Zealand', url: '/study-visa/new-zealand' },
      { name: 'Norway', url: '/study-visa/norway' },
      { name: 'Poland', url: '/study-visa/poland' },
      { name: 'Portugal', url: '/study-visa/portugal' },
      { name: 'Romania', url: '/study-visa/romania' },
      { name: 'Russia', url: '/study-visa/russia' },
      { name: 'Serbia', url: '/study-visa/serbia' },
      { name: 'Singapore', url: '/study-visa/singapore' },
      { name: 'Slovakia', url: '/study-visa/slovakia' },
      { name: 'Slovenia', url: '/study-visa/slovenia' },
      { name: 'Spain', url: '/study-visa/spain' },
      { name: 'Sweden', url: '/study-visa/sweden' },
      { name: 'Switzerland', url: '/study-visa/switzerland' },
      { name: 'Thailand', url: '/study-visa/thailand' },
      { name: 'Turkey', url: '/study-visa/turkey' },
      { name: 'UAE', url: '/study-visa/uae' },
      { name: 'Ukraine', url: '/study-visa/ukraine' },
      { name: 'USA', url: '/study-visa/usa' },
      { name: 'Vietnam', url: '/study-visa/vietnam' }
    ],
  },
  {
    visa: 'Work Visa',
    icon: <Briefcase className="w-5 h-5" />,
    description: 'Work Permits and Employment Visas',
    featured: [
      { name: 'Job Search Guide', url: '/resources/job-search' },
      { name: 'Skill Assessment', url: '/resources/skill-assessment' }
    ],
    countries: [
      { name: 'Russia', url: '/work-visa/russia' },
      { name: 'Singapore', url: '/work-visa/singapore' },
      { name: 'Slovakia', url: '/work-visa/slovakia' },
    ],
  },
  {
    visa: 'Visit Visa',
    icon: <Plane className="w-5 h-5" />,
    description: 'Tourist and Business Visit Visas',
    featured: [
      { name: 'Visa Requirements', url: '/resources/visa-requirements' },
      { name: 'Travel Insurance', url: '/resources/travel-insurance' }
    ],
    categories: [
      {
        name: 'Popular Destinations',
        items: [
          { name: 'USA', url: '/visit-visa/usa' },
          { name: 'UK', url: '/visit-visa/uk' },
          { name: 'Schengen', url: '/visit-visa/schengen' },
          { name: 'Canada', url: '/visit-visa/canada' },
          { name: 'Australia', url: '/visit-visa/australia' },
          { name: 'UAE', url: '/visit-visa/uae' },
          { name: 'Singapore', url: '/visit-visa/singapore' },
          { name: 'Russia', url: '/visit-visa/russia' }
        ]
      }
    ]
  },
  {
    visa: 'Coaching',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Language and Test Preparation Courses',
    featured: [
      { name: 'Free IELTS Practice Test', url: '/coaching/ielts/practice' },
      { name: 'Language Learning Tips', url: '/resources/language-tips' }
    ],
    categories: [
      {
        name: 'English Tests',
        items: [
          { name: 'IELTS', url: '/coaching/ielts' },
          { name: 'TOEFL', url: '/coaching/toefl' },
          { name: 'PTE', url: '/coaching/pte' }
        ]
      },
      {
        name: 'Other Languages',
        items: [
          { name: 'French (TEF/TCF)', url: '/coaching/french' },
          { name: 'German', url: '/coaching/german' },
          { name: 'Business English', url: '/coaching/business-english' },
          { name: 'Spoken English', url: '/coaching/spoken-english' }
        ]
      }
    ]
  }
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openVisaIndex, setOpenVisaIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuPositions, setMenuPositions] = useState<{ [key: string]: 'left' | 'right' }>({});
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        updateMenuPositions();
      }
    };

    const updateMenuPositions = () => {
      const newPositions: { [key: string]: 'left' | 'right' } = {};
      
      Object.entries(menuRefs.current).forEach(([key, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const menuWidth = rect.width;
          const buttonRect = element.parentElement?.getBoundingClientRect();
          
          if (buttonRect) {
            const spaceOnRight = window.innerWidth - buttonRect.left;
            // Determine position based on available space
            newPositions[key] = spaceOnRight < menuWidth ? 'right' : 'left';
          }
        }
      });
      
      setMenuPositions(newPositions);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    updateMenuPositions(); // Initial position check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleVisaIndex = (index: number) =>
    setOpenVisaIndex(openVisaIndex === index ? null : index);

  // Helper function to get the item key
  const getItemKey = (item: NavigationItem): string => 'visa' in item ? item.visa : item.title;

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <nav className="max-w-7xl mx-auto px-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image 
              src="/skyland_logo.webp" 
              alt="Skyland Immigration Logo" 
              width={200} 
              height={50} 
              className="h-12 w-auto" 
              priority
            />
          </Link>

          {/* Desktop Menu and Mobile Button Container */}
          <div className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-end space-x-8">
              {visaData.map((item: NavigationItem) => (
                <div key={getItemKey(item)} className="relative group">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 py-4">
                    <span className="flex items-center gap-2">
                      {item.icon}
                      <span>{getItemKey(item)}</span>
                    </span>
                    <ChevronDown className="h-4 w-4 group-hover:text-blue-600" />
                  </button>
                  <div 
                    ref={(el) => {
                      menuRefs.current[getItemKey(item)] = el;
                    }}
                    className={`absolute top-full bg-white shadow-xl rounded-lg mt-0.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[min(800px,90vw)] ${
                      menuPositions[getItemKey(item)] === 'right' 
                        ? 'right-0' 
                        : 'left-0 translate-x-0'
                    }`}
                  >
                    <div className="p-6 grid grid-cols-12 gap-6 max-h-[calc(100vh-120px)] overflow-y-auto">
                      {/* Header Section */}
                      <div className="col-span-12 mb-4 border-b pb-4 sticky top-0 bg-white z-10">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          {item.icon}
                          {getItemKey(item)}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>

                      {/* Content Section - Different layouts based on content type */}
                      {'visa' in item ? (
                        // Visa Menus (PR, Study, Work, Visit)
                        <>
                          {/* Featured Section for Visa Menus */}
                          {item.featured && item.featured.length > 0 && (
                            <div className="col-span-12 lg:col-span-3 bg-blue-50 rounded-lg p-4">
                              <h4 className="font-medium text-blue-900 mb-3 flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                Featured
                              </h4>
                              <div className="space-y-2">
                                {item.featured.map((featuredItem) => (
                                  <Link
                                    key={featuredItem.name}
                                    href={featuredItem.url}
                                    className="block text-sm text-blue-700 hover:text-blue-900 hover:underline py-1 flex items-center gap-2"
                                  >
                                    <ArrowRight className="w-4 h-4" />
                                    {featuredItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Main Content Section */}
                          <div className={`col-span-12 ${item.featured && item.featured.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
                            {item.categories ? (
                              // For Study Visa with multiple categories
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {item.categories.map((category) => (
                                  <div key={category.name} className="space-y-2">
                                    <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                      <MapPin className="w-4 h-4" />
                                      {category.name}
                                    </h4>
                                    <div className="grid gap-1">
                                      {category.items.map((item) => (
                                        <Link
                                          key={item.name}
                                          href={item.url}
                                          className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-2 py-1 transition-colors block truncate"
                                        >
                                          {item.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              // For PR, Work, Visit Visa with simple country list
                              <>
                                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  Available Countries
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                  {item.countries?.map((country) => (
                                    <Link
                                      key={country.name}
                                      href={country.url}
                                      className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition-colors truncate flex items-center gap-2"
                                    >
                                      <Globe className="w-4 h-4 shrink-0" />
                                      {country.name}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      ) : (
                        // Non-Visa Menus (Coaching, Resources, etc.)
                        <div className="col-span-12">
                          {item.categories ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {item.categories.map((category) => (
                                <div key={category.name} className="space-y-3">
                                  <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {category.name}
                                  </h4>
                                  <div className="grid gap-2">
                                    {category.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.url}
                                        className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition-colors flex items-center gap-2"
                                      >
                                        <ArrowRight className="w-4 h-4" />
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="grid gap-4">
                              {item.featured.map((featuredItem) => (
                                <Link
                                  key={featuredItem.name}
                                  href={featuredItem.url}
                                  className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition-colors flex items-center gap-2"
                                >
                                  <ArrowRight className="w-4 h-4" />
                                  {featuredItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Success Stories as a simple link */}
              <Link 
                href="/success-stories" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 py-4"
              >
                <Users className="w-5 h-5" />
                <span>Success Stories</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobile}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-200">
            <div className="py-4 space-y-4">
              {visaData.map((item: NavigationItem, index) => (
                <div key={getItemKey(item)} className="border-b border-gray-100 pb-4 last:border-0">
                  <button
                    onClick={() => toggleVisaIndex(index)}
                    className="flex items-center justify-between w-full text-left text-gray-700"
                  >
                    <span className="text-base font-medium flex items-center gap-2">
                      {item.icon}
                      {getItemKey(item)}
                    </span>
                    {openVisaIndex === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  {openVisaIndex === index && (
                    <div className="mt-4 space-y-4">
                      <p className="text-sm text-gray-600 px-4">{item.description}</p>
                      {item.categories ? (
                        item.categories.map((category) => (
                          <div key={category.name} className="space-y-2">
                            <h4 className="font-medium text-gray-900 px-4 flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {category.name}
                            </h4>
                            <div className="grid grid-cols-2 gap-2 px-4">
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.url}
                                  className="text-sm text-gray-600 hover:text-blue-600 py-1"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="grid grid-cols-2 gap-2 px-4">
                          {item.countries?.map((country) => (
                            <Link
                              key={country.name}
                              href={country.url}
                              className="text-sm text-gray-600 hover:text-blue-600 py-1"
                              onClick={() => setMobileOpen(false)}
                            >
                              {country.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Success Stories as simple link in mobile menu */}
              <Link
                href="/success-stories"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 px-4 py-2"
                onClick={() => setMobileOpen(false)}
              >
                <Users className="w-5 h-5" />
                <span className="text-base font-medium">Success Stories</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
