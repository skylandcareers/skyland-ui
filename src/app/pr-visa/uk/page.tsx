'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  FileText,
  DollarSign,
  Globe,
  Timer,
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Calculator,
  Book,
  Home,
  Building,
  Users,
  Heart,
  Laptop,
  Phone,
  Mail,
  Clock,
  Bus,
  Activity,
  GraduationCap as Education
} from 'lucide-react';
import { 
  ukPRContent as ukPRContentImport, 
  ukPRFAQs as ukPRFAQsImport, 
  prVisaTimeline as prVisaTimelineImport,
  cityComparisons as cityComparisonsImport,
  jobMarketStats as jobMarketStatsImport,
  lifestyleGuide as lifestyleGuideImport
} from './content';
import LeadForm from '@/components/LeadForm';

// Type definitions
interface State {
  region: string;
  keyIndustries: string[];
  minPoints: number;
  processingTime: string;
}

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

interface MainBenefit {
  title: string;
  description: string;
}

interface VisaRequirement {
  title: string;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
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

interface HealthcareSystem {
  system: string;
  coverage: string[];
  waiting: string;
  private: string;
  privateHealth: {
    benefits: string[];
    averageCost: {
      single: string;
      family: string;
    };
  };
}

interface Transport {
  public: {
    options: string[];
    cards: string[];
  };
  driving: {
    requirements: string[];
    costs: Record<string, string>;
  };
}

interface UKPRContent {
  mainBenefits: MainBenefit[];
  visaRequirements: {
    residencyPeriod: VisaRequirement;
    englishLanguage: VisaRequirement;
    knowledgeTest: VisaRequirement;
    absenceLimit: VisaRequirement;
  };
  applicationProcess: ProcessStep[];
}

interface City {
  name: string;
  region: string;
  population: string;
  medianHousePrice: string;
  averageSalary: string;
  keyIndustries: string[];
  lifestyle: {
    highlights: string[];
  };
  universities: string[];
}

interface Housing {
  types: string[];
  markets: {
    rental: string;
    purchase: string;
  };
  regions: {
    london: string;
    southeast: string;
    north: string;
    scotland: string;
  };
}

interface LifestyleGuide {
  healthcare: HealthcareSystem;
  education: {
    public: {
      cost: string;
      quality: string;
      options: string;
    };
    higher: {
      types: string[];
      costs: string;
      funding: string;
    };
  };
  housing: Housing;
  transport: Transport;
}

// Type assertions with unknown first for safety
const ukPRContent = ukPRContentImport as unknown as UKPRContent;
const ukPRFAQs = ukPRFAQsImport as unknown as FAQ[];
const prVisaTimeline = prVisaTimelineImport as unknown as Record<string, {
  title: string;
  duration: string;
  tasks: string[];
}>;
const cityComparisons = cityComparisonsImport as unknown as Record<string, City>;
const jobMarketStats = jobMarketStatsImport as unknown as {
  highDemandSectors: Array<{
    sector: string;
    growth: string;
    topRoles: string[];
    averageSalaries: {
      entry: string;
      mid: string;
      senior: string;
    };
  }>;
  employmentTrends: {
    remoteWork: {
      percentage: string;
      growthRate: string;
      popularIndustries: string[];
    };
    contractWork: {
      percentage: string;
      growthRate: string;
      benefits: string[];
    };
  };
};
const lifestyleGuide = lifestyleGuideImport as unknown as LifestyleGuide;

// Data constants
const regionNomination: State[] = [
  {
    region: "London & South East",
    keyIndustries: ["Finance", "Technology", "Professional Services"],
    minPoints: 70,
    processingTime: "6-8 weeks"
  },
  {
    region: "Scotland",
    keyIndustries: ["Oil & Gas", "Renewable Energy", "Education"],
    minPoints: 70,
    processingTime: "4-6 weeks"
  },
  {
    region: "Northern England",
    keyIndustries: ["Manufacturing", "Digital Tech", "Healthcare"],
    minPoints: 70,
    processingTime: "5-7 weeks"
  },
  {
    region: "Wales",
    keyIndustries: ["Advanced Manufacturing", "Creative Industries", "Life Sciences"],
    minPoints: 70,
    processingTime: "5-7 weeks"
  }
];

const supportServices: Service[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Education Services",
    services: ["Qualification Assessment", "English Language Tests", "Life in the UK Test Prep"]
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Settlement Services",
    services: ["Housing Assistance", "Bank Account Setup", "NHS Registration"]
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Support Channels",
    services: ["24/7 Helpline", "Online Chat Support", "Email Assistance"]
  }
];

const contactInfo: ContactInfo = {
  phone: "+44 20 XXXX XXXX",
  email: "info@skylandjune.com",
  hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT"
};

// Additional content sections
const lifestyleContent = [
  {
    icon: <Home className="w-5 h-5" />,
    title: "Housing",
    description: "Find your ideal home in the UK's diverse property market, from city apartments to suburban houses."
  },
  {
    icon: <Building className="w-5 h-5" />,
    title: "Work Culture",
    description: "Experience the UK's professional work environment and career growth opportunities."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community",
    description: "Join vibrant, multicultural communities across the UK's diverse cities and regions."
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Healthcare",
    description: "Access the National Health Service (NHS) and comprehensive medical care."
  },
  {
    icon: <Book className="w-5 h-5" />,
    title: "Education",
    description: "World-class education from primary schools to prestigious universities."
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: "Technology",
    description: "Be part of the UK's thriving technology and innovation sector."
  }
];

const quickStats: QuickStat[] = [
  { 
    icon: <Timer className="w-6 h-6" />, 
    label: "Processing Time", 
    value: "6-8 months" 
  },
  { 
    icon: <DollarSign className="w-6 h-6" />, 
    label: "Visa Cost", 
    value: "£2,404" 
  },
  { icon: <Globe className="w-6 h-6" />, label: "Success Rate", value: "98%" },
  { 
    icon: <FileText className="w-6 h-6" />, 
    label: "Points Required", 
    value: "70 points" 
  }
];

// Add a new section for Progress Tracking
const ProgressTracker = () => {
  const [progress, setProgress] = useState(0);
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Track Your ILR Progress</h3>
      <div className="space-y-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Start</span>
          <span>Eligibility</span>
          <span>Documentation</span>
          <span>Submission</span>
        </div>
        <button
          onClick={() => setProgress((prev) => (prev + 25) % 125)}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Update Progress
        </button>
      </div>
    </div>
  );
};

const UKPRPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showPointsCalculator, setShowPointsCalculator] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-0 bg-white shadow-md z-30">
        <div className="flex overflow-x-auto no-scrollbar">
          {['overview', 'requirements', 'process', 'cities', 'lifestyle'].map((tab) => (
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
                <span className="text-yellow-400">UK Permanent Residency</span>{' '}
                Starts Here
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Get expert guidance on PR pathways, points calculator, and visa requirements. 
                98% success rate with personalized support throughout your application process.
              </p>
              <div className="space-y-4 bg-blue-500/30 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Comprehensive visa assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">Expert guidance on points calculation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-base">End-to-end application support</span>
                </div>
              </div>
              <div className="flex items-center gap-5 pt-3">
                <button 
                  onClick={() => setShowPointsCalculator(true)}
                  className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors text-base"
                >
                  Calculate Points
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="#timeline" 
                  className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors text-base"
                >
                  View Process Timeline
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

      {/* Main Content with improved mobile layout */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Quick Stats Section - Mobile Responsive */}
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

        {/* Progress Tracker */}
        <ProgressTracker />

        {/* Lifestyle Overview Cards */}
        <section className="py-8 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Life in the UK Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifestyleContent.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all shadow-lg hover:shadow-blue-50 border-2 border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-500 text-lg mb-2 hover:text-blue-600 text">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Detailed Lifestyle Guide */}
        {activeTab === 'lifestyle' && (
          <section className="py-8 md:py-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Living Guide</h2>
            
            {/* Housing Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Housing Guide</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Housing Types</p>
                  <div className="space-y-1">
                    {lifestyleGuide.housing.types.map((type, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <span className="text-blue-600">•</span>
                        <span className="text-sm">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">Market Overview</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rental Market</span>
                      <span className="font-medium text-gray-900">{lifestyleGuide.housing.markets.rental}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Purchase Market</span>
                      <span className="font-medium text-gray-900">{lifestyleGuide.housing.markets.purchase}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Healthcare System</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">NHS Coverage</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Services Covered</p>
                      <div className="space-y-1">
                        {lifestyleGuide.healthcare.coverage.map((service: string, i: number) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600">
                            <span className="text-blue-600">•</span>
                            <span className="text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Private Healthcare</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Benefits</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="text-blue-600">•</span>
                          <span className="text-sm">{lifestyleGuide.healthcare.private}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-2">Waiting Times</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="text-blue-600">•</span>
                          <span className="text-sm">{lifestyleGuide.healthcare.waiting}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Bus className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Transport Guide</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Public Transport</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Available Options</p>
                      <div className="space-y-1">
                        {lifestyleGuide.housing.regions && Object.entries(lifestyleGuide.housing.regions).map(([region, info]: [string, string], i: number) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600">
                            <span className="text-blue-600">•</span>
                            <span className="text-sm">{region}: {info}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Regional Markets</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Market Overview</p>
                      <div className="space-y-1">
                        {Object.entries(lifestyleGuide.housing.markets).map(([market, info]: [string, string], i: number) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-gray-600">{market}</span>
                            <span className="font-medium text-gray-900">{info}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Interactive City Comparison */}
        <section className="py-8 md:py-14 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Cities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(cityComparisons).map((city, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                    <p className="text-gray-600">{city.region}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Population</p>
                    <p className="font-medium text-gray-900">{city.population}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Median House Price</p>
                    <p className="font-medium text-gray-900">{city.medianHousePrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Average Salary</p>
                    <p className="font-medium text-gray-900">{city.averageSalary}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      {city.keyIndustries.map((industry, i) => (
                        <span key={i} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Lifestyle Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {city.lifestyle.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-600">
                          <span className="text-blue-600">•</span>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Universities</h4>
                    <div className="space-y-1">
                      {city.universities.map((uni, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-600">
                          <Education className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">{uni}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Job Market Insights Section */}
        <section className="py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Job Market Insights</h2>
          
          {/* High Demand Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {jobMarketStats.highDemandSectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.sector}</h3>
                <div className="flex items-center gap-2 text-green-600 mb-4">
                  <Activity className="w-5 h-5" />
                  <span className="font-medium">Growth: {sector.growth}</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Top Roles</h4>
                    <div className="space-y-1">
                      {sector.topRoles.map((role, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-600">
                          <span className="text-blue-600">•</span>
                          <span className="text-sm">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Salary Ranges</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Entry Level</span>
                        <span className="font-medium text-gray-900">{sector.averageSalaries.entry}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Mid Level</span>
                        <span className="font-medium text-gray-900">{sector.averageSalaries.mid}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Senior Level</span>
                        <span className="font-medium text-gray-900">{sector.averageSalaries.senior}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Employment Trends */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Employment Trends</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Remote Work</h4>
                  <p className="text-gray-600 mb-2">Current: {jobMarketStats.employmentTrends.remoteWork.percentage}</p>
                  <p className="text-green-600">Growth: {jobMarketStats.employmentTrends.remoteWork.growthRate}</p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-1">Popular Industries</p>
                    <div className="flex flex-wrap gap-2">
                      {jobMarketStats.employmentTrends.remoteWork.popularIndustries.map((industry, i) => (
                        <span key={i} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Contract Work</h4>
                  <p className="text-gray-600 mb-2">Positions: {jobMarketStats.employmentTrends.contractWork.percentage}</p>
                  <p className="text-green-600">Growth: {jobMarketStats.employmentTrends.contractWork.growthRate}</p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-1">Benefits</p>
                    <div className="space-y-1">
                      {jobMarketStats.employmentTrends.contractWork.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-600">
                          <span className="text-blue-600">•</span>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* State Nomination Section */}
        <section className="py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">State Nomination Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionNomination.map((state, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900 mb-3">{state.region}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      {state.keyIndustries.map((industry, i) => (
                        <span key={i} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Minimum Points</span>
                    <span className="text-base font-medium text-blue-600">{state.minPoints}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Processing Time</span>
                    <span className="text-base font-medium text-blue-600">{state.processingTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Services Section */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Support Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-3">{service.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-3">{service.title}</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-base text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-base text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Business Hours</h3>
                  <p className="text-base text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-14">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-14">
            {/* Eligibility Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Eligibility Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(ukPRContent.visaRequirements).map(([key, requirement], index) => (
                  <motion.div 
                    key={key}
                    className="bg-white rounded-lg p-4 shadow-lg hover:shadow transition-shadow border border-gray-200 hover:border-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-blue-600 mb-3">
                      {key === 'ageLimit' && <Calendar className="w-6 h-6" />}
                      {key === 'englishProficiency' && <Languages className="w-6 h-6" />}
                      {key === 'skillAssessment' && <GraduationCap className="w-6 h-6" />}
                      {key === 'workExperience' && <Briefcase className="w-6 h-6" />}
                    </div>
                    <h3 className="text-base font-medium text-gray-900 mb-2">{requirement.title}</h3>
                    <p className="text-sm text-gray-600">{requirement.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Process Steps */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
              <div className="space-y-4">
                {ukPRContent.applicationProcess.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200 hover:border-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {ukPRFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-lg border border-gray-200 hover:border-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-sm text-gray-900">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-gray-50 text-sm text-gray-600 border-t border-gray-200">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* CTA Card */}
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 shadow-lg hover:shadow-md"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-3">Ready to Start Your Journey?</h3>
              <p className="text-base text-blue-100 mb-4">Get expert guidance on your UK PR visa application</p>
              <button 
                onClick={() => setShowPointsCalculator(true)}
                className="w-full bg-white text-blue-600 font-medium py-2.5 px-4 rounded-lg text-base hover:bg-blue-50 transition-colors"
              >
                Book a Consultation
              </button>
            </motion.div>

            {/* Benefits Card */}
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Benefits of UK PR</h3>
              <div className="space-y-5">
                {ukPRContent.mainBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-base font-medium text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Card */}
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Visa Timeline</h3>
              <div className="space-y-6">
                {Object.entries(prVisaTimeline).map(([phase, data]) => (
                  <div key={phase} className="border-l-2 border-blue-200 pl-5">
                    <h4 className="text-base font-medium text-gray-900 mb-1">{data.title}</h4>
                    <p className="text-sm text-blue-600 mb-3">{data.duration}</p>
                    <ul className="text-base text-gray-600 space-y-2">
                      {data.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-3">
                          <span className="text-blue-600">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg lg:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPointsCalculator(true)}
      >
        <Calculator className="w-6 h-6" />
      </motion.button>

      {/* Points Calculator Modal with improved mobile layout */}
      <AnimatePresence>
        {showPointsCalculator && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
              onClick={() => setShowPointsCalculator(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              className="fixed inset-x-0 bottom-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-white rounded-t-lg md:rounded-lg p-6 shadow-lg z-50"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">ILR Points Calculator</h3>
                <button
                  onClick={() => setShowPointsCalculator(false)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-5">
                <div className="border-b border-gray-200 pb-5">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-medium text-gray-900">Continuous Residence</h4>
                    <span className="text-base text-blue-600 font-medium">Max 20 points</span>
                  </div>
                  <p className="text-base text-gray-600">Points awarded based on your continuous residence in the UK</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-medium text-gray-900">English Language</h4>
                    <span className="text-base text-blue-600 font-medium">Max 10 points</span>
                  </div>
                  <p className="text-base text-gray-600">Points for English language proficiency at B1 level or higher</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-medium text-gray-900">Life in the UK Test</h4>
                    <span className="text-base text-blue-600 font-medium">Required</span>
                  </div>
                  <p className="text-base text-gray-600">Mandatory test demonstrating knowledge of British life and values</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <p className="text-base text-blue-800">
                    You must meet all mandatory requirements and score sufficient points to qualify for ILR
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UKPRPage;
