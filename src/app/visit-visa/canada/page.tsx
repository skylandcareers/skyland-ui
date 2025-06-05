'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Phone, 
  X,
  FileText,
  DollarSign,
  Globe,
  Timer,
  GraduationCap,
  Home,
  Plane,
  Calendar,
  Building,
  Mail,
  Clock,
  Heart,
  AlertCircle,
  ArrowRight,
  User,
  ChevronDown,
  Play,
  Search,
  Folder,
  Edit,
  CreditCard,
  Fingerprint,
  Lightbulb
} from 'lucide-react';
import { canadaVisitVisaContent } from './content';
import LeadForm from '@/components/LeadForm';

// Type definitions
interface Service {
  icon: React.ReactNode;
  title: string;
  services: string[];
}

interface ContactInfo {
  phone: string;
  email: string;
  hours: string;
}

interface QuickStat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface VisaContent {
  visaTypes: {
    [key: string]: {
      title: string;
      description: string;
      permittedActivities?: string[];
      prohibitedActivities?: string[];
    };
  };
  application: {
    steps: {
      number: number;
      title: string;
      description: string;
      icon: string;
      duration: string;
      status: string;
      tips: string[];
      documentRequirements?: string[];
    }[];
  };
  documentRequirements: {
    category: string;
    documents: {
      name: string;
      description: string;
      required: boolean;
    }[];
  }[];
  healthcare: {
    insurance: {
      minimumCoverage: string;
      recommendedProviders: string[];
    };
    emergencyInfo: {
      [key: string]: string;
    };
  };
  travelTips: {
    [key: string]: {
      title: string;
      description: string;
      category: string;
    }[];
  };
}


// Type assertions with unknown first for safety
const visaContent = canadaVisitVisaContent as unknown as VisaContent;

// Data constants
const supportServices: Service[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Documentation Services",
    services: ["Document Translation", "Visa Application Assistance", "IRCC Account Setup"]
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Travel Services",
    services: ["Hotel Booking", "Travel Insurance", "Airport Pickup"]
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Support Channels",
    services: ["24/7 Helpline", "Online Chat Support", "Email Assistance"]
  }
];

const contactInfo: ContactInfo = {
  phone: "+1-800-123-4567",
  email: "info@canadavisahelp.com",
  hours: "Mon-Fri: 8:00 AM - 4:00 PM EST"
};

const quickStats: QuickStat[] = [
  { 
    icon: <Timer className="w-6 h-6" />, 
    label: "Processing Time", 
    value: "14-30 days" 
  },
  { 
    icon: <DollarSign className="w-6 h-6" />, 
    label: "Visa Fee", 
    value: "CAD 100" 
  },
  { 
    icon: <Globe className="w-6 h-6" />, 
    label: "Stay Duration", 
    value: "Up to 6 months" 
  },
  { 
    icon: <FileText className="w-6 h-6" />, 
    label: "Entry Type", 
    value: "Single/Multiple" 
  }
];

const keyFeatures = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Flexible Duration",
    description: "Stay for up to 6 months (extendable in some cases)"
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Travel Freedom",
    description: "Visit any province in Canada for tourism or business"
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Work Restrictions",
    description: "No work allowed without separate work permit"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health Insurance",
    description: "Private health insurance recommended for all visitors"
  }
];

// Add FAQ data constant
const faqCategories = [
  {
    category: "Application Process",
    faqs: [
      {
        question: "How do I start my visitor visa application?",
        answer: "Start by creating an ImmiAccount on the Department of Home Affairs website. This will be your portal for submitting the application, uploading documents, and tracking progress."
      },
      {
        question: "What is Form 1419 and how do I fill it?",
        answer: "Form 1419 is the application form for visitor visas. Fill it out completely and accurately online through your ImmiAccount, ensuring all information matches your supporting documents."
      },
      {
        question: "Can I save my application and complete it later?",
        answer: "Yes, you can save your application at any point and return to complete it later through your ImmiAccount. Remember to submit it before any deadline."
      },
      {
        question: "How long does the application process take?",
        answer: "The standard processing time is 20-25 business days, but it can vary based on application completeness and peak seasons."
      },
      {
        question: "What happens after I submit my application?",
        answer: "You'll receive an acknowledgment letter and tracking number. The Department will assess your application and may request additional information if needed."
      },
      {
        question: "Can I expedite my visa application?",
        answer: "While there's no formal expedited service, ensuring your application is complete with all required documents can help avoid delays."
      },
      {
        question: "What if I make a mistake in my application?",
        answer: "If you notice a mistake before submission, you can edit your application. After submission, contact the Department immediately through your ImmiAccount."
      },
      {
        question: "Do I need to attend an interview?",
        answer: "Interviews are not required for all applications. If needed, the Department will contact you to schedule one."
      },
      {
        question: "Can I apply for multiple people in one application?",
        answer: "Yes, you can include family members traveling together in one application, but each person needs their own set of documents."
      },
      {
        question: "How will I know if my visa is approved?",
        answer: "You'll receive a notification through your ImmiAccount and via email when a decision is made on your application."
      }
    ]
  },
  {
    category: "Eligibility & Requirements",
    faqs: [
      {
        question: "What are the basic eligibility requirements?",
        answer: "Key requirements include having a valid passport, genuine intention to visit, sufficient funds, and meeting health and character requirements."
      },
      {
        question: "Do I need to show proof of accommodation?",
        answer: "Yes, you should provide details of where you'll stay in Canada, whether it's hotel bookings or invitation letters from hosts."
      },
      {
        question: "What financial documents are required?",
        answer: "Bank statements for the past 3-6 months, proof of employment/income, and any sponsorship documents if applicable."
      },
      {
        question: "Is travel insurance mandatory?",
        answer: "While not mandatory, it's strongly recommended to have comprehensive travel insurance for your stay in Canada."
      },
      {
        question: "Do I need a police clearance certificate?",
        answer: "It depends on your circumstances. The Department will inform you if a police clearance is required."
      },
      {
        question: "What are the health requirements?",
        answer: "You may need to undergo health examinations depending on your length of stay and country of origin."
      },
      {
        question: "Can I apply if I have a criminal record?",
        answer: "You must declare any criminal history. Minor offenses may not disqualify you, but serious offenses could affect your application."
      },
      {
        question: "Is there an age limit for visitor visas?",
        answer: "No age limit exists, but applicants under 18 need consent from both parents/legal guardians."
      },
      {
        question: "Do I need to prove English language ability?",
        answer: "No formal English language test is required for visitor visas, but basic communication ability is helpful."
      },
      {
        question: "What if I've been refused a visa before?",
        answer: "Previous refusals must be declared. Provide documentation explaining the circumstances and how your situation has changed."
      }
    ]
  },
  {
    category: "Documents & Evidence",
    faqs: [
      {
        question: "What documents do I need for a visitor visa?",
        answer: "Essential documents include valid passport, photographs, bank statements, travel itinerary, and employment/education proof."
      },
      {
        question: "Do documents need to be translated?",
        answer: "Yes, all non-English documents must be translated by a certified translator."
      },
      {
        question: "How recent should my documents be?",
        answer: "Most documents should be no older than 3-6 months at the time of application."
      },
      {
        question: "What format should documents be in?",
        answer: "Documents should be clear, color scans in PDF format, under 5MB each."
      },
      {
        question: "Do I need to certify my documents?",
        answer: "Some documents may need certification. The Department will specify which ones in the checklist."
      },
      {
        question: "What if I can't provide certain documents?",
        answer: "Provide a written explanation and alternative evidence if possible. Contact the Department for guidance."
      },
      {
        question: "How do I prove my employment status?",
        answer: "Submit an employment letter, recent pay slips, and tax returns if self-employed."
      },
      {
        question: "What photos are required?",
        answer: "Recent passport-sized photos meeting Canadian visa photo requirements."
      },
      {
        question: "Do I need to show flight bookings?",
        answer: "Proposed travel arrangements are required, but confirmed bookings aren't mandatory at application stage."
      },
      {
        question: "How do I prove family relationships?",
        answer: "Through birth certificates, marriage certificates, or other official relationship documents."
      }
    ]
  },
  {
    category: "Visa Conditions & Stay",
    faqs: [
      {
        question: "How long can I stay in Canada?",
        answer: "Stay duration varies from 3-12 months depending on visa grant. Multiple entry options are available."
      },
      {
        question: "Can I work on a visitor visa?",
        answer: "No, visitor visas don't permit work. Business visitor activities are allowed on business stream visas."
      },
      {
        question: "Can I study on a visitor visa?",
        answer: "Short courses up to 3 months are permitted, but not formal academic studies."
      },
      {
        question: "Can I extend my stay in Canada?",
        answer: "You may apply for a new visitor visa before your current one expires, but extensions aren't guaranteed."
      },
      {
        question: "What activities are prohibited?",
        answer: "Paid work, formal study over 3 months, and any activities violating visa conditions."
      },
      {
        question: "Can I travel in and out of Canada?",
        answer: "Multiple entry visas allow this within the visa validity period."
      },
      {
        question: "What happens if I overstay my visa?",
        answer: "Overstaying can result in visa cancellation and future travel restrictions."
      },
      {
        question: "Can I apply for another visa while in Canada?",
        answer: "It depends on your current visa conditions and the new visa type you're seeking."
      },
      {
        question: "Do I need to notify authorities if I change address?",
        answer: "Yes, you must update your address details through your ImmiAccount."
      },
      {
        question: "Can family members visit me while I'm in Canada?",
        answer: "Yes, they can apply for their own visitor visas."
      }
    ]
  },
  {
    category: "Costs & Payment",
    faqs: [
      {
        question: "What is the visa application fee?",
        answer: "The base fee is CAD 100, but additional costs may apply for family members or extra services."
      },
      {
        question: "What payment methods are accepted?",
        answer: "Credit/debit cards, PayPal, and some international payment methods are accepted."
      },
      {
        question: "Are there any additional costs?",
        answer: "Additional costs may include health examinations, police certificates, and document translation."
      },
      {
        question: "Is the visa fee refundable?",
        answer: "Generally no, visa fees are non-refundable even if the application is withdrawn or refused."
      },
      {
        question: "Can I pay in installments?",
        answer: "No, the full visa fee must be paid at the time of application."
      },
      {
        question: "How much money do I need to show in my account?",
        answer: "While there's no fixed amount, you should show sufficient funds to cover your entire stay."
      },
      {
        question: "Do I need to pay for health examinations separately?",
        answer: "Yes, health examination fees are separate from the visa application fee."
      },
      {
        question: "What's the cost of document translation?",
        answer: "Translation costs vary by provider and document length. Use NAATI certified translators in Canada."
      },
      {
        question: "Are there concession rates available?",
        answer: "Concession rates are not available for visitor visas."
      },
      {
        question: "What happens if my payment fails?",
        answer: "Your application won't be submitted until payment is successfully processed."
      }
    ]
  }
];

// Add these constants before the page component
const testimonialVideos = [
  {
    id: 1,
    title: "My Canadian Visa Success Story",
    thumbnail: "/testimonials/can-visa-1.jpg",
    youtubeId: "VIDEO_ID_1",
    author: "Sarah Johnson",
    country: "United States"
  },
  {
    id: 2,
    title: "How I Got My Canadian Tourist Visa",
    thumbnail: "/testimonials/can-visa-2.jpg",
    youtubeId: "VIDEO_ID_2",
    author: "Raj Patel",
    country: "India"
  },
  {
    id: 3,
    title: "Canadian Visa Application Tips",
    thumbnail: "/testimonials/can-visa-3.jpg",
    youtubeId: "VIDEO_ID_3",
    author: "Maria Garcia",
    country: "Brazil"
  },
  {
    id: 4,
    title: "My Visit Visa Experience",
    thumbnail: "/testimonials/can-visa-4.jpg",
    youtubeId: "VIDEO_ID_4",
    author: "John Smith",
    country: "Canada"
  },
  {
    id: 5,
    title: "Canadian Tourist Visa Guide",
    thumbnail: "/testimonials/can-visa-5.jpg",
    youtubeId: "VIDEO_ID_5",
    author: "Li Wei",
    country: "China"
  },
  {
    id: 6,
    title: "Successful Visa Application Journey",
    thumbnail: "/testimonials/can-visa-6.jpg",
    youtubeId: "VIDEO_ID_6",
    author: "Anna Kowalski",
    country: "Poland"
  }
];

const latestUpdates = [
  {
    id: 1,
    title: "New Visa Processing Times Announced",
    thumbnail: "/updates/update-1.jpg",
    youtubeId: "UPDATE_ID_1",
    date: "2024-03-15",
    description: "Latest changes to visa processing times and what it means for applicants"
  },
  {
    id: 2,
    title: "Updated Document Requirements 2024",
    thumbnail: "/updates/update-2.jpg",
    youtubeId: "UPDATE_ID_2",
    date: "2024-03-10",
    description: "Important changes to document requirements for visitor visas"
  },
  {
    id: 3,
    title: "New Online Application System",
    thumbnail: "/updates/update-3.jpg",
    youtubeId: "UPDATE_ID_3",
    date: "2024-03-05",
    description: "Guide to using the new ImmiAccount features and improvements"
  }
];

const CanadaVisitVisaPage = () => {
  const [selectedVisaType, setSelectedVisaType] = useState<keyof typeof visaContent.visaTypes>('tourist');
  const [showEligibilityCalculator, setShowEligibilityCalculator] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaqs, setOpenFaqs] = useState<{[key: string]: boolean}>({});

  // Eligibility Calculator Modal
  const EligibilityCalculator = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
        <button
          onClick={() => setShowEligibilityCalculator(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Visa Eligibility Calculator</h2>
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Purpose of Visit
              </label>
              <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option value="tourist">Tourism</option>
                <option value="business">Business</option>
                <option value="family">Visit Family</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Intended Stay Duration
              </label>
              <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option value="3">Up to 3 months</option>
                <option value="6">Up to 6 months</option>
                <option value="12">Up to 12 months</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Previous Travel History
              </label>
              <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Calculate Eligibility
          </button>
        </div>
      </div>
    </motion.div>
  );

  const toggleFaq = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFaqs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Eligibility Calculator Modal */}
      {showEligibilityCalculator && <EligibilityCalculator />}

      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-0 bg-white shadow-md z-30">
        <div className="flex overflow-x-auto no-scrollbar">
          {['overview', 'requirements', 'process', 'visa-types', 'support'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] py-3 px-4 text-sm font-medium ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section with improved mobile responsiveness */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
            <motion.div 
              className="space-y-4 md:space-y-7 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Your Journey to{' '}
                <span className="text-yellow-400">Visit Canada</span>{' '}
                Starts Here
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Expert guidance on tourist, business, and family visitor visas. 
                98% success rate with personalized support throughout your application process.
              </p>
              <div className="space-y-4 bg-blue-500/30 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Comprehensive visa assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Fast-track application support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">End-to-end documentation assistance</span>
                </div>
              </div>
              <div className="flex items-center gap-5 pt-3">
                <button 
                  onClick={() => setShowEligibilityCalculator(true)}
                  className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors text-base"
                >
                  Check Eligibility
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="#process" 
                  className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors text-base"
                >
                  View Application Process
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm"
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - Mobile Responsive */}
      <section className="py-8 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-blue-600 mb-3">{stat.icon}</div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visa Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(visaContent.visaTypes).map(([key, visa]) => (
              <motion.div
                key={key}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all ${
                  selectedVisaType === key ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedVisaType(key as keyof typeof visaContent.visaTypes)}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{visa.title}</h3>
                <p className="text-gray-600 mb-6">{visa.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Permitted Activities</h4>
                    <ul className="space-y-2">
                      {visa.permittedActivities?.map((activity, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {visa.prohibitedActivities && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Prohibited Activities</h4>
                    <ul className="space-y-2">
                      {visa.prohibitedActivities.map((activity, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our step-by-step guide for a smooth visa application process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaContent.application.steps.map((step) => {
              // Define icon and color mappings
              const iconConfig = {
                'Search': { icon: Search, color: 'text-blue-600' },
                'Folder': { icon: Folder, color: 'text-green-600' },
                'Edit': { icon: Edit, color: 'text-purple-600' },
                'CreditCard': { icon: CreditCard, color: 'text-amber-600' },
                'Fingerprint': { icon: Fingerprint, color: 'text-indigo-600' }
              };

              const statusColors = {
                'required': {
                  bg: 'bg-blue-600',
                  iconBg: 'bg-blue-100',
                  iconText: 'text-blue-600',
                  border: 'border-blue-200'
                },
                'important': {
                  bg: 'bg-amber-500',
                  iconBg: 'bg-amber-100',
                  iconText: 'text-amber-600',
                  border: 'border-amber-200'
                },
                'optional': {
                  bg: 'bg-blue-600',
                  iconBg: 'bg-blue-100',
                  iconText: 'text-blue-600',
                  border: 'border-blue-200'
                }
              };

              const currentStatus = statusColors[step.status as 'required' | 'important' | 'optional'] || statusColors.optional;
              const currentIcon = iconConfig[step.icon as keyof typeof iconConfig] || { icon: FileText, color: 'text-gray-600' };

              return (
                <motion.div
                  key={step.number}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Header */}
                  <div className={`p-5 ${currentStatus.bg} relative`}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-white font-bold text-2xl">{step.number}</span>
                      <span className="text-white/90 text-xs font-medium bg-black/10 px-2 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${currentStatus.iconBg} ${currentStatus.iconText}`}>
                        <currentIcon.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 pl-1">{step.description}</p>
                    
                    {/* Tips */}
                    <div className={`border-t ${currentStatus.border} pt-4`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className={`w-4 h-4 ${currentStatus.iconText}`} />
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Recommendations</h4>
                      </div>
                      <ul className="space-y-3">
                        {step.tips.map((tip, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`flex-shrink-0 mt-1 mr-2 ${currentStatus.iconText}`}>•</span>
                            <span className="text-sm text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Status Badge */}
                    <div className="mt-4 flex justify-end">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
                        step.status === 'required' ? 'bg-blue-50 text-blue-700' :
                        step.status === 'important' ? 'bg-amber-50 text-amber-700' :
                        'bg-gray-50 text-gray-700'
                      }`}>
                        {step.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find answers to common questions about Canadian visit visas
          </p>
          
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <h3 className="text-xl font-semibold text-white bg-blue-600 p-6">{category.category}</h3>
                <div className="divide-y divide-gray-200">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openFaqs[key];

                    return (
                      <div key={faqIndex} className="border-b border-gray-200 last:border-0">
                        <button
                          className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                          onClick={() => toggleFaq(categoryIndex, faqIndex)}
                        >
                          <h4 className="text-lg font-medium text-gray-900 pr-8">{faq.question}</h4>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                          />
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Success Stories</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Hear from people who successfully obtained their Canadian visit visas through our guidance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialVideos.map((video) => (
              <motion.div
                key={video.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="aspect-video bg-gray-200 relative group cursor-pointer">
                    {/* Replace src with actual thumbnail */}
                    <video
                      src={video.thumbnail}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{video.author}</span>
                    <span className="mx-2">•</span>
                    <span>{video.country}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Latest Updates</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Stay informed about the latest changes and announcements regarding Canadian visit visas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestUpdates.map((update) => (
              <motion.div
                key={update.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="aspect-video bg-gray-200 relative group cursor-pointer">
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{new Date(update.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  <h3 className="font-semibold text-lg mb-2">{update.title}</h3>
                  <p className="text-gray-600 text-sm">{update.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Document Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visaContent.documentRequirements.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.documents.map((doc, docIndex) => (
                    <div key={docIndex} className="flex items-start gap-4">
                      {doc.required ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-yellow-500 mt-1" />
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900">{doc.name}</h4>
                        <p className="text-gray-600">{doc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Processing Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visa Processing Timeline</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  stage: "Application Submission",
                  duration: "Day 1",
                  description: "Submit your application through ImmiAccount with all required documents",
                  tasks: [
                    "Complete online form",
                    "Upload supporting documents",
                    "Pay visa fee"
                  ]
                },
                {
                  stage: "Initial Assessment",
                  duration: "Days 2-5",
                  description: "Your application undergoes preliminary checks",
                  tasks: [
                    "Document completeness check",
                    "Basic eligibility verification",
                    "Biometric requirements assessment"
                  ]
                },
                {
                  stage: "Detailed Processing",
                  duration: "Days 6-15",
                  description: "Thorough review of your application",
                  tasks: [
                    "Background verification",
                    "Financial capacity assessment",
                    "Travel history review"
                  ]
                },
                {
                  stage: "Final Decision",
                  duration: "Days 16-25",
                  description: "Final assessment and decision making",
                  tasks: [
                    "Final eligibility check",
                    "Decision notification",
                    "Visa grant/refusal letter"
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex-1">
                    <div className={`bg-white rounded-xl p-6 shadow-lg ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-blue-600 font-medium">{item.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.stage}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <ul className={`space-y-2 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                        {item.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visa Stream Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tourist Stream</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Business Stream</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Sponsored Family</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    feature: "Maximum Stay",
                    tourist: "Up to 12 months",
                    business: "Up to 12 months",
                    family: "Up to 12 months"
                  },
                  {
                    feature: "Processing Time",
                    tourist: "20-25 days",
                    business: "20-25 days",
                    family: "25-30 days"
                  },
                  {
                    feature: "Visa Fee",
                    tourist: "AUD 145",
                    business: "AUD 145",
                    family: "AUD 145"
                  },
                  {
                    feature: "Entry Type",
                    tourist: "Multiple",
                    business: "Multiple",
                    family: "Multiple"
                  },
                  {
                    feature: "Extension Option",
                    tourist: "Limited",
                    business: "Yes",
                    family: "Yes"
                  },
                  {
                    feature: "Sponsorship Required",
                    tourist: "No",
                    business: "No",
                    family: "Yes"
                  }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.tourist}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.business}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.family}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Thompson",
                country: "United Kingdom",
                story: "Got my tourist visa approved in just 15 days. The process was smooth and well-guided.",
                visaType: "Tourist Stream"
              },
              {
                name: "Michael Chen",
                country: "Singapore",
                story: "Successfully obtained business visitor visa for multiple entries. Excellent support throughout.",
                visaType: "Business Stream"
              },
              {
                name: "Priya Patel",
                country: "India",
                story: "Family sponsored visa approved. Reunited with my family in Canada after a simple process.",
                visaType: "Sponsored Family"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.country}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{story.story}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-blue-600">{story.visaType}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Success in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "98%",
                label: "Success Rate",
                icon: <CheckCircle2 className="w-8 h-8" />
              },
              {
                number: "5000+",
                label: "Visas Processed",
                icon: <FileText className="w-8 h-8" />
              },
              {
                number: "15+",
                label: "Years Experience",
                icon: <Calendar className="w-8 h-8" />
              },
              {
                number: "24/7",
                label: "Support Available",
                icon: <Phone className="w-8 h-8" />
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get expert guidance on your Canadian visit visa application. Our team is here to help you every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setShowEligibilityCalculator(true)}
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Check Eligibility
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                  >
                    Contact Us
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Clock className="w-6 h-6 text-blue-600" />,
                    label: "Fast Processing"
                  },
                  {
                    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
                    label: "High Success Rate"
                  },
                  {
                    icon: <User className="w-6 h-6 text-blue-600" />,
                    label: "Expert Support"
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-blue-600" />,
                    label: "Global Service"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-4 flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-blue-50 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <span className="font-medium text-gray-900">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CanadaVisitVisaPage;

