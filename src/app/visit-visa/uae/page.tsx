'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  X,
  FileText,
  DollarSign,
  Globe,
  Timer,
  GraduationCap,
  Home,
  Heart,
  Briefcase,
  MapPin
} from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import { ArrowRight } from 'lucide-react';

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

interface FAQ {
  question: string;
  answer: string;
}

interface QuickStat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface VisaType {
  title: string;
  description: string;
  duration: string;
  validity: string;
  permittedActivities?: string[];
  prohibitedActivities?: string[];
}

// UAE Visit Visa Content
const uaeVisaContent = {
  visaTypes: {
    tourist: {
      title: "Tourist Visa",
      description: "Perfect for leisure travel, sightseeing, and exploring UAE's attractions.",
      duration: "30/90 days",
      validity: "60 days from issue",
      permittedActivities: [
        "Tourism and sightseeing",
        "Visiting friends and family",
        "Shopping and entertainment",
        "Cultural events and festivals",
        "Short-term medical treatment"
      ],
      prohibitedActivities: [
        "Employment or business activities",
        "Permanent residence",
        "Study or education programs"
      ]
    },
    visit: {
      title: "Visit Visa",
      description: "For visiting family members or friends residing in the UAE.",
      duration: "30/90 days",
      validity: "60 days from issue",
      permittedActivities: [
        "Visiting family and friends",
        "Attending family events",
        "Medical treatment",
        "Tourism activities",
        "Short business meetings"
      ],
      prohibitedActivities: [
        "Paid employment",
        "Starting a business",
        "Long-term residence"
      ]
    },
    transit: {
      title: "Transit Visa",
      description: "For travelers transiting through UAE airports with layovers.",
      duration: "48/96 hours",
      validity: "Single entry",
      permittedActivities: [
        "Airport transit",
        "Short city tours",
        "Hotel stays near airport",
        "Shopping in duty-free"
      ],
      prohibitedActivities: [
        "Leaving transit area without visa",
        "Employment activities",
        "Extended stays"
      ]
    }
  },
  eligibility: {
    documentation: {
      mandatory: [
        "Valid passport (6+ months validity)",
        "Completed visa application form",
        "Recent passport-size photographs",
        "Flight reservation/itinerary",
        "Hotel booking confirmation",
        "Travel insurance certificate"
      ],
      recommended: [
        "Bank statements (3-6 months)",
        "Employment certificate",
        "No objection certificate (NOC)",
        "Invitation letter (if visiting family)",
        "Marriage certificate (if applicable)",
        "Birth certificate (for children)"
      ]
    },
    financial: {
      proofRequirements: [
        "Bank statements showing sufficient funds",
        "Salary certificate from employer",
        "Income tax returns",
        "Sponsorship letter (if sponsored)",
        "Credit card statements",
        "Fixed deposit certificates"
      ]
    },
    specialCases: {
      families: {
        requirements: [
          "Marriage certificate (attested)",
          "Children's birth certificates",
          "Family photos as proof of relationship",
          "Sponsor's Emirates ID copy",
          "Accommodation proof"
        ]
      },
      business: {
        requirements: [
          "Business invitation letter",
          "Company registration documents",
          "Meeting appointment confirmations",
          "Hotel bookings",
          "Return flight tickets"
        ]
      },
      medical: {
        requirements: [
          "Medical reports from home country",
          "Hospital appointment letter",
          "Medical insurance coverage",
          "Doctor's recommendation letter",
          "Treatment cost estimates"
        ]
      }
    }
  },
  application: {
    steps: [
      {
        number: 1,
        title: "Document Preparation",
        details: "Gather all required documents including passport, photos, and supporting documents.",
        tips: [
          "Ensure passport has 6+ months validity",
          "Get documents attested if required",
          "Prepare digital copies in high resolution"
        ]
      },
      {
        number: 2,
        title: "Online Application",
        details: "Submit your visa application through official UAE visa portals or authorized agents.",
        tips: [
          "Fill application form accurately",
          "Upload clear document scans",
          "Double-check all information before submission"
        ]
      },
      {
        number: 3,
        title: "Fee Payment",
        details: "Pay the visa processing fee using accepted payment methods.",
        tips: [
          "Keep payment receipt for reference",
          "Check for any additional service charges",
          "Use secure payment gateways only"
        ]
      },
      {
        number: 4,
        title: "Processing & Approval",
        details: "Wait for visa processing and approval. Track your application status online.",
        tips: [
          "Processing usually takes 3-5 working days",
          "Check email regularly for updates",
          "Contact support if delayed beyond normal time"
        ]
      },
      {
        number: 5,
        title: "Visa Collection",
        details: "Download your approved visa and print it for travel.",
        tips: [
          "Print visa in color on A4 paper",
          "Keep multiple copies during travel",
          "Verify all details on the visa are correct"
        ]
      }
    ],
    processing: {
      standard: "3-5 working days",
      express: "24-48 hours",
      factors: [
        "Application completeness",
        "Document authenticity verification",
        "Security background checks",
        "Peak season volumes",
        "Nationality-specific requirements"
      ]
    }
  },
  faqs: {
    basicInfo: [
      {
        question: "What is a UAE visit visa?",
        answer: "A UAE visit visa is a temporary permit that allows foreign nationals to enter and stay in the United Arab Emirates for tourism, family visits, or business meetings. Different types are available, including 30-day, 60-day, and 90-day options."
      },
      {
        question: "Who needs a visit visa for UAE?",
        answer: "Most nationalities require a visa to enter UAE. However, citizens of GCC countries and some other nations may be eligible for visa-free entry or visa on arrival. Check the latest requirements based on your nationality."
      },
      {
        question: "What are the different types of UAE visit visas?",
        answer: "UAE offers several visit visa types: Tourist Visa (30/90 days), Multiple Entry Tourist Visa, Family Visit Visa, Business Visit Visa, and Transit Visa (48/96 hours). Each type has specific requirements and validity periods."
      },
      {
        question: "How long can I stay in UAE on a visit visa?",
        answer: "The duration depends on your visa type. Tourist visas are typically valid for 30 or 90 days, while family visit visas can be issued for up to 60 days. Some multiple-entry visas allow multiple visits over 6 months to 1 year."
      },
      {
        question: "How much does a UAE visit visa cost?",
        answer: "Visa fees vary by type and duration. A 30-day tourist visa typically costs around AED 300-350, while a 90-day visa costs approximately AED 700. Additional service charges may apply. Express processing is available at higher rates."
      }
    ],
    eligibility: [
      {
        question: "What are the basic eligibility requirements for a UAE visit visa?",
        answer: "Key requirements include a valid passport with 6 months validity, proof of accommodation, return flight tickets, sufficient funds, travel insurance, and a clean travel history. Specific requirements may vary based on visa type and nationality."
      },
      {
        question: "Can I apply for a UAE visit visa if my passport expires in less than 6 months?",
        answer: "No, UAE requires all visitors to have a passport valid for at least 6 months from the date of entry. It's recommended to renew your passport before applying if it expires within this timeframe."
      },
      {
        question: "Do I need a sponsor for a UAE visit visa?",
        answer: "Not always. While tourist visas generally don't require sponsorship, family visit visas need a UAE resident sponsor. Some nationalities may require sponsorship even for tourist visas - check specific requirements for your country."
      },
      {
        question: "What financial requirements must I meet for a UAE visit visa?",
        answer: "You should have sufficient funds to cover your stay (typically AED 3,000-4,000 or equivalent). This can be demonstrated through bank statements, credit cards, or a sponsor's financial guarantee."
      },
      {
        question: "Can I apply for a UAE visit visa with a criminal record?",
        answer: "Having a criminal record may affect your visa application. Minor offenses might be considered case-by-case, but serious criminal history could result in rejection. Full disclosure is required during application."
      }
    ],
    application: [
      {
        question: "How do I apply for a UAE visit visa?",
        answer: "You can apply through official UAE visa portals, authorized travel agents, airlines flying to UAE, or UAE-based sponsors. Online applications require document uploads, form completion, and fee payment."
      },
      {
        question: "What documents are required for a UAE visit visa?",
        answer: "Required documents include: colored passport copy, recent photos, completed application form, flight bookings, hotel reservations, bank statements, travel insurance, and employment proof. Additional documents may be needed based on visa type."
      },
      {
        question: "How long does it take to process a UAE visit visa?",
        answer: "Standard processing takes 3-5 working days. Express service is available for 24-48 hours processing at additional cost. Processing time may vary during peak seasons or for certain nationalities."
      },
      {
        question: "Can I track my UAE visa application status?",
        answer: "Yes, you can track your application status online using your application reference number. Updates are also sent via email at various stages of processing."
      },
      {
        question: "What if my UAE visit visa application is rejected?",
        answer: "If rejected, you can reapply after addressing the reason for rejection. A cooling period may apply before reapplication. Alternatively, you can appeal the decision within 30 days through official channels."
      }
    ],
    duringStay: [
      {
        question: "What can I do and not do on a UAE visit visa?",
        answer: "You can engage in tourism, family visits, and business meetings. You cannot work, study full-time, or engage in any paid activities. Violating visa terms can result in fines and future entry bans."
      },
      {
        question: "Can I extend my UAE visit visa?",
        answer: "Yes, visit visas can usually be extended for an additional 30 days by applying before the current visa expires. Extensions must be done within the UAE through authorized centers or online portals."
      },
      {
        question: "What happens if I overstay my UAE visit visa?",
        answer: "Overstaying results in fines of AED 100 for the first day and AED 200 for each subsequent day. Extended overstay can lead to detention, deportation, and future entry bans."
      },
      {
        question: "Can I convert my visit visa to another visa type while in UAE?",
        answer: "Yes, certain visit visas can be converted to residence or work permits without leaving the country. This must be done through proper channels and requires meeting specific criteria."
      },
      {
        question: "Do I need to register with my embassy while visiting UAE?",
        answer: "While not mandatory, it's recommended to register with your embassy for safety and emergency contact purposes, especially for longer stays."
      }
    ],
    travelPlanning: [
      {
        question: "When is the best time to visit UAE?",
        answer: "The most comfortable period is from October to April when temperatures are moderate. Summer (May-September) can be extremely hot but offers better travel deals and fewer tourists."
      },
      {
        question: "What travel insurance do I need for UAE?",
        answer: "Comprehensive travel insurance covering medical emergencies, trip cancellation, and personal accidents is recommended. COVID-19 coverage is currently mandatory for all visitors."
      },
      {
        question: "How much money should I carry to UAE?",
        answer: "While there's no strict minimum, having access to AED 3,000-4,000 per person for a week's stay is recommended. Credit cards are widely accepted, but some cash is useful for small purchases."
      },
      {
        question: "Can I drive in UAE with my home country's license?",
        answer: "Visitors can drive with an international driving permit along with their home country license. Some nationalities' licenses are directly recognized in UAE."
      },
      {
        question: "What should I pack for UAE considering local customs?",
        answer: "Pack modest clothing respecting local culture, especially for public places. Light, breathable fabrics are recommended. Include sunscreen, hat, and conservative swimwear for beaches."
      }
    ],
    specialCategories: [
      {
        question: "Can I apply for a UAE visit visa for my family?",
        answer: "Yes, you can apply for family visit visas. UAE residents can sponsor immediate family members, and tourist visas are available for families traveling together."
      },
      {
        question: "What are the requirements for a child's visit visa?",
        answer: "Children need their own passport, birth certificate, parents' documentation, and authorization from absent parent if traveling with one parent. School certificates may be required for longer stays."
      },
      {
        question: "Can senior citizens get a UAE visit visa?",
        answer: "Yes, senior citizens can obtain visit visas. Some may need additional medical insurance coverage and a local sponsor. Special assistance services are available at airports."
      },
      {
        question: "What are the visa requirements for business meetings?",
        answer: "Business visit visas require a letter of invitation from a UAE company, company registration documents, and your business credentials. Multiple entry options are available."
      },
      {
        question: "Can I get a visa for medical treatment in UAE?",
        answer: "Yes, medical treatment visas are available with documentation from a UAE healthcare facility, treatment plan, and cost estimates. These can be extended based on treatment duration."
      }
    ],
    multipleEntry: [
      {
        question: "What is a UAE multiple entry visa?",
        answer: "A multiple entry visa allows several visits to UAE within its validity period (usually 6 months to 5 years). Each stay can be up to 30 or 90 days, with a specified total stay duration."
      },
      {
        question: "Who can apply for a multiple entry visa?",
        answer: "Frequent visitors, business travelers, and property owners in UAE are eligible. Requirements include travel history to UAE, stable financial status, and sometimes property ownership documents."
      },
      {
        question: "How long is a multiple entry visa valid?",
        answer: "Validity ranges from 6 months to 5 years, depending on the type. Each stay is limited to 30 or 90 days, with maximum stay durations specified in the visa."
      },
      {
        question: "Can I work during multiple visits to UAE?",
        answer: "No, multiple entry visas are for visits only. Any work activities require a proper work permit. Business meetings and networking are allowed but not employment."
      },
      {
        question: "How do I calculate my stay duration on a multiple entry visa?",
        answer: "Each entry date and exit date is stamped in your passport. Total stay duration is cumulative within the visa validity period. Overstaying can affect future visa applications."
      }
    ],
    emergencies: [
      {
        question: "What should I do if I lose my passport in UAE?",
        answer: "Report to the nearest police station, obtain a police report, contact your embassy for emergency documentation, and inform UAE immigration. Temporary passes may be issued for departure."
      },
      {
        question: "Can I get an emergency visa for UAE?",
        answer: "Emergency visas are available for humanitarian cases, medical emergencies, or family crises. These require proper documentation and are processed on priority basis."
      },
      {
        question: "What if I need urgent medical care while visiting UAE?",
        answer: "UAE has excellent medical facilities. Ensure your travel insurance covers medical emergencies. For serious cases, visa extensions are possible with medical documentation."
      },
      {
        question: "How can I contact immigration authorities in an emergency?",
        answer: "UAE has 24/7 immigration helplines. Major cities have immigration offices with emergency services. Your embassy can also assist in coordinating with local authorities."
      },
      {
        question: "What happens if my airline cancels my flight and my visa expires?",
        answer: "Airlines usually assist with visa extensions in such cases. Contact immigration immediately, as force majeure extensions are possible with proper documentation."
      }
    ],
    postTravel: [
      {
        question: "Do I need to inform authorities when leaving UAE?",
        answer: "No specific notification is needed, but ensure you exit before visa expiry. Your exit is automatically recorded at immigration. Keep exit stamps for future reference."
      },
      {
        question: "Can I reenter UAE immediately after a visit?",
        answer: "Yes, if you have a valid multiple entry visa. For single entry visas, you may need to wait before reapplying. Some nationalities have specific reentry restrictions."
      },
      {
        question: "How do I prove I left UAE on time?",
        answer: "Exit stamps in your passport and immigration system records serve as proof. Keep boarding passes and any other travel documents for future reference."
      },
      {
        question: "What records should I keep after my UAE visit?",
        answer: "Keep copies of your visa, entry/exit stamps, accommodation receipts, and any immigration documents. These may be useful for future visa applications."
      },
      {
        question: "How soon can I apply for another UAE visa after departure?",
        answer: "There's usually no mandatory gap required, but frequent visits might require explanation in future applications. Some visa types may have cooling periods."
      }
    ],
    covid19: [
      {
        question: "What are the current COVID-19 requirements for UAE visit visa?",
        answer: "Requirements include vaccination certificates, negative PCR tests, and travel insurance with COVID-19 coverage. Specific requirements may vary based on origin country and vaccination status."
      },
      {
        question: "Do I need to quarantine upon arrival in UAE?",
        answer: "Quarantine requirements vary based on vaccination status and country of origin. Check the latest guidelines as requirements are regularly updated."
      },
      {
        question: "What happens if I test positive for COVID-19 during my stay?",
        answer: "Follow local health authority guidelines for isolation. Visa extensions are possible for medical reasons. Travel insurance should cover treatment and extended stay costs."
      },
      {
        question: "Are there any special travel insurance requirements due to COVID-19?",
        answer: "Yes, travel insurance must explicitly cover COVID-19 related medical expenses and possible quarantine costs. Minimum coverage requirements may apply."
      },
      {
        question: "How do COVID-19 restrictions affect visa processing times?",
        answer: "Processing times may be longer due to additional health documentation review. Some services might be available only online. Factor these delays into your travel planning."
      }
    ]
  },
  travelTips: {
    beforeTravel: [
      {
        title: "Visa Validity Check",
        description: "Ensure your visa is valid and matches your travel dates"
      },
      {
        title: "Travel Insurance",
        description: "Purchase comprehensive travel insurance covering medical emergencies"
      },
      {
        title: "Currency Exchange",
        description: "Exchange currency to UAE Dirhams or carry international cards"
      },
      {
        title: "Cultural Awareness",
        description: "Research UAE customs and cultural norms to respect local traditions"
      }
    ],
    duringStay: [
      {
        title: "Respect Local Laws",
        description: "Follow UAE laws and regulations, including public behavior guidelines"
      },
      {
        title: "Keep Documents Safe",
        description: "Carry passport and visa copies, keep originals in hotel safe"
      },
      {
        title: "Emergency Contacts",
        description: "Keep embassy and local emergency contact numbers handy"
      },
      {
        title: "Stay Connected",
        description: "Get local SIM card or international roaming for communication"
      }
    ],
    customs: {
      allowed: [
        "Personal belongings and clothing",
        "Electronics for personal use",
        "Gifts up to AED 3,000",
        "400 cigarettes or 2kg tobacco",
        "Perfumes and cosmetics (reasonable quantity)"
      ],
      restricted: [
        "Alcohol (requires permit)",
        "Pork products",
        "Narcotics and drugs",
        "Weapons and ammunition",
        "Items against Islamic culture"
      ]
    }
  },
  portOfEntry: {
    process: [
      {
        step: "Immigration Queue",
        details: "Join the appropriate queue based on your nationality and visa type"
      },
      {
        step: "Document Check",
        details: "Present passport, visa, and return ticket to immigration officer"
      },
      {
        step: "Biometric Verification",
        details: "Provide fingerprints and photograph as required"
      },
      {
        step: "Entry Stamp",
        details: "Receive entry stamp with permitted stay duration"
      },
      {
        step: "Baggage Collection",
        details: "Collect luggage and proceed through customs if nothing to declare"
      }
    ],
    requiredDocuments: [
      "Original passport with visa",
      "Return flight ticket",
      "Hotel booking confirmation",
      "Travel insurance certificate",
      "Sufficient funds proof (if requested)"
    ],
    tips: [
      "Keep all documents easily accessible",
      "Be polite and cooperative with officials",
      "Declare any restricted items at customs",
      "Keep entry stamp safe for exit procedures"
    ]
  }
};

// Data constants
const supportServices: Service[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Documentation Services",
    services: ["Document Attestation", "Visa Application Assistance", "Form Filling Support"]
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Travel Services",
    services: ["Hotel Booking", "Travel Insurance", "Airport Transfer"]
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Support Channels",
    services: ["24/7 Helpline", "WhatsApp Support", "Email Assistance"]
  }
];

const contactInfo: ContactInfo = {
  phone: "+971 XXX XXX XXXX",
  email: "info@skylandimmigration.com",
  hours: "Sun-Thu: 9:00 AM - 6:00 PM GST"
};

const quickStats: QuickStat[] = [
  {
    icon: <Timer className="w-6 h-6" />,
    label: "Processing Time",
    value: "3-5 days"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    label: "Visa Fee",
    value: "From AED 350"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    label: "Validity",
    value: "60 days"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    label: "Stay Duration",
    value: "30/90 days"
  }
];

// Render visa type content
const renderVisaTypeContent = (visa: VisaType) => {
  return (
    <>
      <h3 className="text-xl font-bold text-blue-600 mb-3">{visa.title}</h3>
      <p className="text-gray-600 mb-4">{visa.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-blue-800">Duration</p>
          <p className="text-blue-600 font-semibold">{visa.duration}</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-blue-800">Validity</p>
          <p className="text-blue-600 font-semibold">{visa.validity}</p>
        </div>
      </div>
      
      {visa.permittedActivities && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Permitted Activities:</h4>
          <ul className="space-y-2">
            {visa.permittedActivities.map((activity: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1" />
                <span className="text-gray-600 text-sm">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {visa.prohibitedActivities && (
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Prohibited Activities:</h4>
          <ul className="space-y-2">
            {visa.prohibitedActivities.map((activity: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 mt-1" />
                <span className="text-gray-600 text-sm">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const UaeVisitVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
                Your Gateway to{' '}
                <span className="text-yellow-400">UAE Visit Visa</span>{' '}
                Made Simple
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Fast, reliable UAE visa processing with expert guidance. Get your tourist or visit visa 
                approved quickly with our 99% success rate and comprehensive support.
              </p>
              <div className="space-y-4 bg-blue-500/30 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Quick 3-5 day processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Complete document assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">24/7 customer support</span>
                </div>
              </div>
              <div className="flex items-center gap-5 pt-3">
                <button
                  className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors text-base"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#process"
                  className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors text-base"
                >
                  View Process
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Quick Stats Section */}
        <section className="py-8 md:py-14">
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
        </section>

        {/* Visa Types Section */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">UAE Visa Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(uaeVisaContent.visaTypes).map(([key, visa], index) => (
              <motion.div
                key={key}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {renderVisaTypeContent(visa as VisaType)}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Document Requirements */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Document Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Mandatory Documents</h3>
              <ul className="space-y-3">
                {uaeVisaContent.eligibility.documentation.mandatory.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Supporting Documents</h3>
              <ul className="space-y-3">
                {uaeVisaContent.eligibility.documentation.recommended.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Financial Proof</h3>
              <ul className="space-y-3">
                {uaeVisaContent.eligibility.financial.proofRequirements.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Special Application Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-pink-500" />
                <h3 className="text-xl font-semibold text-blue-600">Family Visits</h3>
              </div>
              <ul className="space-y-3">
                {uaeVisaContent.eligibility.specialCases.families.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-blue-600">Business Visits</h3>
              </div>
              <ul className="space-y-3">
                {uaeVisaContent.eligibility.specialCases.business.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-semibold text-blue-600">Medical Visits</h3>
              </div>
              <ul className="space-y-3">
                {uaeVisaContent.eligibility.specialCases.medical.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section id="process" className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">UAE Visa Application Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow our comprehensive step-by-step guide to ensure a successful UAE visa application. Each stage is carefully designed to help you navigate the process smoothly.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
              
              <div className="space-y-16">
                {uaeVisaContent.application.steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Step Number Circle */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 text-white items-center justify-center font-bold text-xl shadow-lg z-10">
                      {step.number}
                    </div>
                    
                    {/* Content Card */}
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} bg-white rounded-xl shadow-xl p-6`}>
                      {/* Mobile Step Number */}
                      <div className="md:hidden w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg mb-4">
                        {step.number}
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-blue-600 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.details}</p>
                      </div>
                      
                      <div className="space-y-4">
                        {/* Required Documents/Actions */}
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-3">Essential Requirements:</h4>
                          <ul className="space-y-2">
                            {step.number === 1 && [
                              "Valid passport (minimum 6 months validity)",
                              "Recent passport photographs (white background)",
                              "Completed visa application form",
                              "Supporting documents as per visa category"
                            ].map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-900">{req}</span>
                              </li>
                            ))}
                            {step.number === 2 && [
                              "Access to official UAE visa portal",
                              "High-quality scanned documents",
                              "Valid email address for notifications",
                              "Personal and travel information"
                            ].map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-900">{req}</span>
                              </li>
                            ))}
                            {step.number === 3 && [
                              "International credit/debit card",
                              "Sufficient funds for visa fees",
                              "Service charge amount if applicable",
                              "Payment confirmation system"
                            ].map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-900">{req}</span>
                              </li>
                            ))}
                            {step.number === 4 && [
                              "Application tracking number",
                              "Registered contact details",
                              "Passport information",
                              "Processing timeline awareness"
                            ].map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-900">{req}</span>
                              </li>
                            ))}
                            {step.number === 5 && [
                              "Approved visa PDF document",
                              "Color printing capability",
                              "A4 size white paper",
                              "Document verification tools"
                            ].map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-900">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Tips Section */}
                        {step.tips && (
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-3">Expert Tips:</h4>
                            <ul className="space-y-2">
                              {step.tips.map((tip, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Timer className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-blue-900">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Step-specific Additional Information */}
                        {step.number === 1 && (
                          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                            <h4 className="font-semibold text-yellow-800 mb-2">Important Notice:</h4>
                            <p className="text-yellow-900">
                              All documents must be in English or Arabic. Any documents in other languages require legal translation and attestation.
                            </p>
                          </div>
                        )}
                        {step.number === 3 && (
                          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                            <h4 className="font-semibold text-purple-800 mb-2">Accepted Payment Methods:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                "Visa/Mastercard",
                                "Bank Transfer",
                                "Digital Wallets",
                                "Local Bank Cards"
                              ].map((method, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <DollarSign className="w-5 h-5 text-purple-500" />
                                  <span className="text-purple-900 text-sm">{method}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Processing Timeline */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Processing Timeline</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Standard Processing</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700">Duration: {uaeVisaContent.application.processing.standard}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">Affecting Factors:</p>
                    <ul className="space-y-2">
                      {uaeVisaContent.application.processing.factors.map((factor, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-gray-700">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Express Processing</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Timer className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700">Duration: {uaeVisaContent.application.processing.express}</span>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800">
                      Express processing is available for an additional fee and subject to availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Success Rate */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Why Choose Our Visa Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
                <div className="text-blue-50">Visa Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-blue-50">Customer Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">3-5</div>
                <div className="text-blue-50">Days Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">10K+</div>
                <div className="text-blue-50">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Categories Comparison */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Compare Visa Categories</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="px-6 py-4 text-left text-blue-600">Features</th>
                    <th className="px-6 py-4 text-left text-blue-600">Tourist Visa</th>
                    <th className="px-6 py-4 text-left text-blue-600">Family Visit Visa</th>
                    <th className="px-6 py-4 text-left text-blue-600">Business Visa</th>
                    <th className="px-6 py-4 text-left text-blue-600">Transit Visa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Duration</td>
                    <td className="px-6 py-4">30/90 days</td>
                    <td className="px-6 py-4">30/60/90 days</td>
                    <td className="px-6 py-4">14/30/90 days</td>
                    <td className="px-6 py-4">48/96 hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Entry Type</td>
                    <td className="px-6 py-4">Single/Multiple</td>
                    <td className="px-6 py-4">Single</td>
                    <td className="px-6 py-4">Single/Multiple</td>
                    <td className="px-6 py-4">Single</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Processing Time</td>
                    <td className="px-6 py-4">3-5 working days</td>
                    <td className="px-6 py-4">5-7 working days</td>
                    <td className="px-6 py-4">3-5 working days</td>
                    <td className="px-6 py-4">24-48 hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Sponsor Required</td>
                    <td className="px-6 py-4">No*</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">No</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Extendable</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">No</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-4">* Some nationalities may require sponsorship</p>
            </div>
          </div>
        </section>

        {/* Important Guidelines */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Important Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Dos</h3>
                <ul className="space-y-3">
                  {[
                    "Respect local customs and dress modestly",
                    "Carry your passport and visa copy at all times",
                    "Get travel insurance coverage",
                    "Keep emergency contact numbers handy",
                    "Register with your embassy upon arrival"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Don&apos;ts</h3>
                <ul className="space-y-3">
                  {[
                    "Work on a visit visa",
                    "Overstay your visa duration",
                    "Violate local laws and customs",
                    "Share visa copies with strangers",
                    "Travel without valid insurance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Travel Tips</h3>
                <ul className="space-y-3">
                  {[
                    "Book accommodation in advance",
                    "Exchange currency at authorized centers",
                    "Download local transportation apps",
                    "Save emergency numbers",
                    "Check weather conditions before travel"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Timer className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Cost Calculator */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Visa Fee Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Tourist Visa Fees</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">30 Days Single Entry</span>
                    <span className="font-semibold">AED 350</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">90 Days Single Entry</span>
                    <span className="font-semibold">AED 700</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">30 Days Multiple Entry</span>
                    <span className="font-semibold">AED 750</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">90 Days Multiple Entry</span>
                    <span className="font-semibold">AED 1,400</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Additional Services</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Express Processing</span>
                    <span className="font-semibold">+AED 200</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Visa Extension</span>
                    <span className="font-semibold">AED 600</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Status Change</span>
                    <span className="font-semibold">AED 500</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Insurance (Basic)</span>
                    <span className="font-semibold">AED 150</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Other Fees</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Refundable Deposit</span>
                    <span className="font-semibold">AED 1,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Document Attestation</span>
                    <span className="font-semibold">AED 150</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Translation (per page)</span>
                    <span className="font-semibold">AED 80</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Courier Service</span>
                    <span className="font-semibold">AED 100</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">* All fees are subject to 5% VAT. Additional charges may apply based on nationality and visa type.</p>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Popular UAE Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  city: "Dubai",
                  attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Marina", "Gold Souk"],
                  image: "dubai.jpg"
                },
                {
                  city: "Abu Dhabi",
                  attractions: ["Sheikh Zayed Mosque", "Ferrari World", "Louvre Abu Dhabi", "Corniche Beach", "Emirates Palace"],
                  image: "abudhabi.jpg"
                },
                {
                  city: "Sharjah",
                  attractions: ["Sharjah Museum", "Al Majaz Waterfront", "Blue Souk", "Al Noor Mosque", "Rain Room"],
                  image: "sharjah.jpg"
                }
              ].map((city, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-blue-100"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">{city.city}</h3>
                    <ul className="space-y-2">
                      {city.attractions.map((attraction, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-600">{attraction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-center text-blue-600">UAE Visa FAQs</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {Object.entries(uaeVisaContent.faqs).map(([category, faqs]: [string, FAQ[]]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-4 capitalize">
                  {category} Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === faqIndex ? null : faqIndex)}
                        className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transform transition-transform ${
                            openFaqIndex === faqIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === faqIndex && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 bg-gray-50">
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Services */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8 md:py-14 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">{contactInfo.email}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
                <p className="text-gray-600">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UaeVisitVisaPage;