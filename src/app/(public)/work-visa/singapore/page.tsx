'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Clock, 
  FileText, 
  DollarSign, 
  CheckCircle2,
  Building,
  Utensils,
  Truck,
  HardHat,
  Wrench,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Timer,
  BadgeDollarSign,
  GraduationCap as Education,
  ClipboardCheck,
  Calendar,
  Landmark,
  Users,
  BookOpen,
  BadgeCheck,
  HelpCircle,
  AlertTriangle,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import {
  singaporeWorkPermits,
  jobCategories
} from './content';
import LeadForm from '@/components/LeadForm';

const SingaporeWorkVisaPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const quickStats = [
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Processing Time",
      value: "2-4 weeks"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "Minimum Salary",
      value: "From S$1,600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: "Validity",
      value: "2-3 years"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: "Job Sectors",
      value: "Multiple"
    }
  ];

  const jobIcons = {
    construction: <HardHat className="w-6 h-6" />,
    hospitality: <Utensils className="w-6 h-6" />,
    manufacturing: <Building className="w-6 h-6" />,
    transportation: <Truck className="w-6 h-6" />,
    maintenance: <Wrench className="w-6 h-6" />,
    training: <GraduationCap className="w-6 h-6" />
  };

  // Combine all blue collar jobs into a single array for the slider
  const allBlueCollarJobs = Object.entries(jobCategories.blueCollar.categories).flatMap(
    ([, category]) =>
      category.roles.map(role => ({
        role,
        sector: category.title,
        requirements: category.requirements,
        salary: getSalaryRange(role),
        location: "Singapore",
        experience: "1-3 years"
      }))
  );

  function getSalaryRange(role: string): string {
    const salaryRanges: { [key: string]: string } = {
      "Construction Workers": "S$1,400 - S$2,200",
      "Machine Operators": "S$1,600 - S$2,500",
      "Welders": "S$1,800 - S$2,800",
      "Electricians": "S$2,000 - S$3,200",
      "Plumbers": "S$1,800 - S$2,800",
      "Carpenters": "S$1,600 - S$2,600",
      "Chefs": "S$2,200 - S$4,000",
      "Kitchen Helpers": "S$1,400 - S$2,000",
      "Dishwashers": "S$1,200 - S$1,800",
      "Service Crew": "S$1,400 - S$2,200",
      "Cleaners": "S$1,200 - S$1,800",
      "Housekeepers": "S$1,400 - S$2,000",
      "Landscape Workers": "S$1,400 - S$2,200",
      "Building Maintenance": "S$1,600 - S$2,600"
    };
    return salaryRanges[role] || "S$1,400 - S$2,500";
  }

  const processingTimeline = [
    {
      stage: "Document Preparation",
      duration: "1-2 weeks",
      description: "Gather all required documents and get them authenticated"
    },
    {
      stage: "Application Submission",
      duration: "1 day",
      description: "Online submission through MOM's portal"
    },
    {
      stage: "Initial Assessment",
      duration: "1-2 weeks",
      description: "MOM reviews the application and supporting documents"
    },
    {
      stage: "In-Principle Approval",
      duration: "1 week",
      description: "If approved, IPA letter will be issued"
    },
    {
      stage: "Work Pass Collection",
      duration: "1-2 days",
      description: "Biometrics and pass collection at MOM"
    }
  ];

  const requiredDocuments = {
    personal: [
      "Valid passport (at least 6 months validity)",
      "Recent passport-sized photograph",
      "Educational certificates",
      "Professional qualifications",
      "Updated resume/CV"
    ],
    employment: [
      "Employment contract",
      "Detailed job description",
      "Company's latest business profile",
      "Company's latest financial statements"
    ],
    additional: [
      "Skills certification (if applicable)",
      "Professional memberships",
      "Previous employment testimonials",
      "Medical examination reports"
    ]
  };

  const eligibilityCriteria = {
    general: [
      "Valid passport",
      "Job offer from Singapore-registered company",
      "Meet minimum salary requirements",
      "Possess relevant qualifications"
    ],
    specific: {
      "S Pass": [
        "Minimum salary of S$3,000",
        "Relevant degree or diploma",
        "Years of relevant experience",
        "From approved institution"
      ],
      "Employment Pass": [
        "Minimum salary of S$5,000",
        "Recognized qualifications",
        "Professional experience",
        "Specialized skills"
      ],
      "Work Permit": [
        "Age between 18-50 years",
        "From approved source country",
        "Pass basic skills test",
        "Medical fitness"
      ]
    }
  };

  const quotaAndLevy = {
    manufacturing: {
      quota: "Maximum 60% foreign workers",
      basic: "S$330 per worker",
      skilled: "S$250 per worker"
    },
    services: {
      quota: "Maximum 35% foreign workers",
      basic: "S$450 per worker",
      skilled: "S$330 per worker"
    },
    construction: {
      quota: "Maximum 87.5% foreign workers",
      basic: "S$600 per worker",
      skilled: "S$300 per worker"
    }
  };

  const passTypeDetails = {
    "Employment Pass": {
      overview: "For foreign professionals, managers and executives",
      validity: "Up to 2 years for first-time candidates",
      salary: "Minimum S$5,000 per month",
      qualifications: [
        "Acceptable qualifications from recognized institutions",
        "Relevant work experience",
        "Job must match qualifications"
      ],
      benefits: [
        "Can apply for dependent&apos;s pass for family",
        "Eligible for permanent residence",
        "No security bond required",
        "No quota restrictions"
      ],
      restrictions: [
        "Cannot start own business",
        "Limited to specified employer",
        "Job scope must match approved position"
      ]
    },
    "S Pass": {
      overview: "For mid-skilled technical staff",
      validity: "Up to 2 years, renewable",
      salary: "Minimum S$3,000 per month",
      qualifications: [
        "Diploma or technical qualifications",
        "Relevant work experience required",
        "Skills assessment may be needed"
      ],
      benefits: [
        "Can apply for dependent&apos;s pass (salary dependent)",
        "Medical insurance coverage",
        "Skills development opportunities"
      ],
      restrictions: [
        "Subject to quota limits",
        "Monthly levy applicable",
        "Security bond required for some nationalities"
      ]
    },
    "Work Permit": {
      overview: "For semi-skilled workers in specific sectors",
      validity: "2 years maximum, renewable",
      salary: "Varies by sector",
      qualifications: [
        "Basic skill certifications",
        "Industry-specific requirements",
        "Medical examination"
      ],
      benefits: [
        "Accommodation often provided",
        "Basic medical coverage",
        "Skills upgrading opportunities"
      ],
      restrictions: [
        "Cannot bring family members",
        "Subject to strict quota",
        "Regular medical examinations required"
      ]
    }
  };

  const renewalProcess = {
    timeline: "Submit 3 months before expiry",
    requirements: [
      "Continued employment with same employer",
      "Satisfactory work performance",
      "Valid passport with at least 6 months validity",
      "Updated salary and position details",
      "Company&apos;s latest business information"
    ],
    steps: [
      {
        name: "Preparation",
        duration: "2-3 weeks before submission",
        tasks: [
          "Gather updated documents",
          "Review eligibility criteria",
          "Check quota availability (if applicable)"
        ]
      },
      {
        name: "Submission",
        duration: "1 day",
        tasks: [
          "Online application through MOM portal",
          "Pay processing fee",
          "Submit supporting documents"
        ]
      },
      {
        name: "Processing",
        duration: "3 weeks",
        tasks: [
          "Application review by MOM",
          "Additional document requests (if any)",
          "Decision notification"
        ]
      }
    ]
  };

  const commonRejectionReasons = [
    {
      reason: "Insufficient Qualifications",
      details: "Qualifications don&apos;t match job requirements or aren&apos;t recognized",
      prevention: "Ensure qualifications are from recognized institutions and match job scope"
    },
    {
      reason: "Salary Below Threshold",
      details: "Offered salary doesn&apos;t meet minimum requirements",
      prevention: "Review latest salary requirements and ensure compliance"
    },
    {
      reason: "Quota Restrictions",
      details: "Company has reached foreign worker quota limit",
      prevention: "Check quota availability before application"
    },
    {
      reason: "Company Profile Issues",
      details: "Company&apos;s financial position or business activities raise concerns",
      prevention: "Ensure company meets all eligibility criteria"
    },
    {
      reason: "Incomplete Documentation",
      details: "Missing or invalid supporting documents",
      prevention: "Use document checklist and verify all requirements"
    }
  ];

  const familySponsorship = {
    dependentPass: {
      eligibility: [
        "EP holders earning at least S$6,000",
        "S Pass holders earning at least S$6,000",
        "Legally married spouse",
        "Children under 21 years old"
      ],
      documents: [
        "Marriage certificate (for spouse)",
        "Birth certificates (for children)",
        "Family members&apos; passports",
        "Proof of employment and salary",
        "Recent bank statements"
      ],
      restrictions: [
        "Dependents need work pass to work",
        "Medical insurance required",
        "Education restrictions may apply"
      ]
    },
    longTermVisitPass: {
      eligibility: [
        "Parents of EP holders",
        "Unmarried children above 21",
        "Handicapped children",
        "Common-law spouse"
      ],
      documents: [
        "Proof of relationship",
        "Financial ability to support",
        "Medical insurance coverage",
        "Security bond (if required)"
      ]
    }
  };

  const postArrivalRequirements = {
    immediate: [
      {
        requirement: "Register Address",
        deadline: "Within 48 hours",
        details: "Update residential address with MOM"
      },
      {
        requirement: "Medical Examination",
        deadline: "Within 2 weeks",
        details: "Complete medical screening if required"
      },
      {
        requirement: "Collect Work Pass",
        deadline: "As scheduled",
        details: "Attend appointment for biometrics and card collection"
      }
    ],
    ongoing: [
      {
        requirement: "Address Updates",
        frequency: "Within 7 days of any change",
        details: "Keep residential address current"
      },
      {
        requirement: "Medical Renewals",
        frequency: "Every 6 months for specific sectors",
        details: "Maintain valid medical certification"
      },
      {
        requirement: "Passport Validity",
        frequency: "Continuous",
        details: "Maintain at least 6 months validity"
      }
    ],
    employer: [
      {
        requirement: "Medical Insurance",
        details: "Maintain minimum coverage of S$15,000 per year"
      },
      {
        requirement: "Safety Training",
        details: "Complete required safety courses for specific sectors"
      },
      {
        requirement: "Accommodation Standards",
        details: "Ensure housing meets regulatory requirements"
      }
    ]
  };

  const appealProcess = {
    timeframe: "Within 3 months of rejection",
    requirements: [
      "Strong justification for appeal",
      "New supporting documents",
      "Company&apos;s latest developments",
      "Changes in circumstances"
    ],
    steps: [
      {
        step: "Review Rejection",
        actions: [
          "Analyze rejection reasons",
          "Gather additional evidence",
          "Consult with experts if needed"
        ]
      },
      {
        step: "Prepare Appeal",
        actions: [
          "Write appeal letter",
          "Compile new documents",
          "Address rejection points"
        ]
      },
      {
        step: "Submit Appeal",
        actions: [
          "File through MOM portal",
          "Pay appeal fee",
          "Monitor status"
        ]
      }
    ],
    successFactors: [
      "Strong justification",
      "Additional qualifications",
      "Salary adjustments",
      "Industry demand"
    ]
  };

  const extendedFaqs = {
    general: {
      title: "General Questions",
      questions: [
        {
          q: "Can I apply for a work visa without a job offer?",
          a: "No, you need a valid job offer from a Singapore-registered company before applying for any work visa."
        },
        {
          q: "How long does the work visa application process take?",
          a: "Generally 3-4 weeks for EP/S Pass, and 2-3 weeks for Work Permit. Complex cases may take longer."
        },
        {
          q: "Can I change employers while on a work visa?",
          a: "Yes, but you need to cancel your current pass and your new employer must apply for a new pass. You typically have 30 days to stay in Singapore after cancellation."
        },
        {
          q: "What happens if my application is rejected?",
          a: "You can appeal within 3 months. Consider addressing the rejection reasons and providing additional supporting documents."
        },
        {
          q: "Can I start work before getting the actual pass?",
          a: "Only after receiving the In-Principle Approval (IPA) letter, which serves as a temporary pass."
        }
      ]
    },
    salary: {
      title: "Salary & Benefits",
      questions: [
        {
          q: "Is the minimum salary requirement fixed?",
          a: "No, it varies based on qualifications, experience, and industry. Higher qualifications/experience may require higher salaries."
        },
        {
          q: "Are bonuses counted in the minimum salary requirement?",
          a: "Only fixed monthly salary is considered. Variable bonuses and allowances are not included."
        },
        {
          q: "Can my salary be paid in cash?",
          a: "No, salary must be paid via bank transfer for transparency and compliance."
        },
        {
          q: "What benefits are employers required to provide?",
          a: "Medical insurance, safe working conditions, and proper accommodation (for Work Permit holders)."
        },
        {
          q: "Can my salary be reduced after getting the pass?",
          a: "Significant salary reductions may require a new pass application as it affects eligibility."
        }
      ]
    },
    qualifications: {
      title: "Qualifications & Experience",
      questions: [
        {
          q: "Do my qualifications need to be related to the job?",
          a: "Yes, qualifications should be relevant to your job role for EP/S Pass applications."
        },
        {
          q: "Are online degrees accepted?",
          a: "Only if they&apos;re from accredited institutions and meet MOM&apos;s requirements."
        },
        {
          q: "How is work experience calculated?",
          a: "Full-time work experience after highest qualification is considered. Internships usually don&apos;t count."
        },
        {
          q: "Do I need to translate my certificates?",
          a: "Yes, non-English documents must be translated by certified translators."
        },
        {
          q: "Can skill certifications replace formal education?",
          a: "Sometimes for S Pass, rarely for EP. Depends on industry and role."
        }
      ]
    },
    family: {
      title: "Family & Dependents",
      questions: [
        {
          q: "Can my family work on a Dependent&apos;s Pass?",
          a: "They need to obtain their own work pass through a potential employer."
        },
        {
          q: "Can I bring my parents to Singapore?",
          a: "EP holders earning above S$12,000 can apply for LTVP for parents."
        },
        {
          q: "What happens to dependents if I lose my job?",
          a: "Their passes will be cancelled along with your work pass."
        },
        {
          q: "Can my child study on a Dependent&apos;s Pass?",
          a: "Yes, they can attend local or international schools."
        },
        {
          q: "Can my spouse start a business?",
          a: "They need to convert to an EntrePass or other appropriate pass."
        }
      ]
    },
    renewal: {
      title: "Renewal & Changes",
      questions: [
        {
          q: "When should I start the renewal process?",
          a: "3 months before expiry to ensure continuous employment."
        },
        {
          q: "What if my passport expires during the pass validity?",
          a: "Update MOM with new passport details within 7 days."
        },
        {
          q: "Can I travel during renewal?",
          a: "Yes, but avoid long trips near expiry date."
        },
        {
          q: "What happens if my pass expires while overseas?",
          a: "You&apos;ll need a new entry visa to return to Singapore."
        },
        {
          q: "Can renewal be rejected even after years of working?",
          a: "Yes, each renewal is assessed based on current criteria."
        }
      ]
    }
  };

  const commonMistakes = [
    {
      category: "Application Process",
      mistakes: [
        {
          title: "Incomplete Documentation",
          description: "Missing or invalid supporting documents",
          prevention: "Use our comprehensive checklist and verify all requirements",
          impact: "Delays processing by 2-3 weeks"
        },
        {
          title: "Wrong Pass Type",
          description: "Applying for inappropriate pass category",
          prevention: "Check eligibility criteria carefully",
          impact: "Rejection and wasted application fee"
        },
        {
          title: "Salary Discrepancy",
          description: "Inconsistent salary information across documents",
          prevention: "Ensure all salary documents match",
          impact: "May trigger audit or rejection"
        }
      ]
    },
    {
      category: "Post-Approval",
      mistakes: [
        {
          title: "Late Address Update",
          description: "Not updating residential address within 7 days",
          prevention: "Set reminder for address updates",
          impact: "Potential fine or pass revocation"
        },
        {
          title: "Unauthorized Work",
          description: "Working before getting IPA or final pass",
          prevention: "Wait for proper authorization",
          impact: "Legal consequences and future ban"
        },
        {
          title: "Missing Medical",
          description: "Skipping required medical examinations",
          prevention: "Track medical examination deadlines",
          impact: "Pass cancellation risk"
        }
      ]
    }
  ];

  const costBreakdown = {
    applicationFees: [
      {
        passType: "Employment Pass",
        application: "S$105",
        issuance: "S$225",
        renewal: "S$225"
      },
      {
        passType: "S Pass",
        application: "S$105",
        issuance: "S$225",
        renewal: "S$225"
      },
      {
        passType: "Work Permit",
        application: "S$35",
        issuance: "S$35",
        renewal: "S$35"
      }
    ],
    additionalCosts: [
      {
        item: "Security Bond",
        cost: "S$5,000",
        applicability: "Required for non-Malaysian Work Permit holders"
      },
      {
        item: "Medical Examination",
        cost: "S$50-100",
        applicability: "Required for all pass types"
      },
      {
        item: "Skills Assessment",
        cost: "S$225-400",
        applicability: "May be required for S Pass"
      }
    ],
    monthlyLevies: [
      {
        sector: "Services",
        basic: "S$450",
        skilled: "S$330"
      },
      {
        sector: "Manufacturing",
        basic: "S$370",
        skilled: "S$250"
      },
      {
        sector: "Construction",
        basic: "S$600",
        skilled: "S$300"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Singapore Work Permits & Training Programs
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Your gateway to work opportunities in Singapore&apos;s thriving industries
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-medium">Fast Processing</h3>
                  <p className="text-sm text-blue-100">2-4 weeks approval time</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <BadgeDollarSign className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-medium">Competitive Salary</h3>
                  <p className="text-sm text-blue-100">From S$1,600/month</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Timer className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-medium">Validity Period</h3>
                  <p className="text-sm text-blue-100">Up to 2 years</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Education className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-medium">Training Programs</h3>
                  <p className="text-sm text-blue-100">3-5 months duration</p>
                </div>
              </div>
            </motion.div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="text-blue-600 mb-3">{stat.icon}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-lg font-semibold">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-8">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'eligibility', label: 'Eligibility', icon: CheckCircle2 },
              { id: 'timeline', label: 'Timeline', icon: Calendar },
              { id: 'documents', label: 'Documents', icon: FileText },
              { id: 'quota', label: 'Quota & Levy', icon: Users },
              { id: 'jobs', label: 'Jobs', icon: Briefcase }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Timeline Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Application Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {processingTimeline.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-8"
                >
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-50" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{stage.stage}</h3>
                      <span className="text-blue-600 font-medium">{stage.duration}</span>
                    </div>
                    <p className="text-gray-600">{stage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <ClipboardCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Required Documents</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Personal Documents</h3>
              <ul className="space-y-3">
                {requiredDocuments.personal.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Employment Documents</h3>
              <ul className="space-y-3">
                {requiredDocuments.employment.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Additional Requirements</h3>
              <ul className="space-y-3">
                {requiredDocuments.additional.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <BadgeCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">General Requirements</h3>
              <ul className="space-y-3">
                {eligibilityCriteria.general.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{criteria}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {Object.entries(eligibilityCriteria.specific).map(([type, criteria], index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4">{type}</h3>
                <ul className="space-y-3">
                  {criteria.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quota and Levy Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Landmark className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Quota and Levy Rates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(quotaAndLevy).map(([sector, info], index) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-4 capitalize">{sector}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Dependency Ceiling</p>
                    <p className="font-medium text-gray-900">{info.quota}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Monthly Levy (Basic)</p>
                    <p className="font-medium text-gray-900">{info.basic}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Monthly Levy (Skilled)</p>
                    <p className="font-medium text-gray-900">{info.skilled}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Permit Types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Types of Work Permits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(singaporeWorkPermits).map(([key, permit]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{permit.title}</h3>
                <p className="text-gray-600 mb-4">{permit.description}</p>
                {'eligibility' in permit && Array.isArray(permit.eligibility) && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-600">Eligibility Requirements:</h4>
                    <ul className="space-y-1">
                      {permit.eligibility.map((item: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Collar Jobs Slider */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Available Blue Collar Jobs</h2>
              <p className="text-gray-600 mt-2">Explore opportunities across various sectors</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  const slider = document.getElementById('jobs-slider');
                  if (slider) slider.scrollBy({ left: -320, behavior: 'smooth' });
                }}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={() => {
                  const slider = document.getElementById('jobs-slider');
                  if (slider) slider.scrollBy({ left: 320, behavior: 'smooth' });
                }}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                id="jobs-slider"
                className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {allBlueCollarJobs.map((job, index) => (
                  <div key={index} className="min-w-[300px] snap-start">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-sm p-6 h-full"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-blue-600">{job.sector}</span>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{job.role}</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Salary Range</p>
                          <p className="font-medium text-gray-900">{job.salary}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Experience Required</p>
                          <p className="font-medium text-gray-900">{job.experience}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Key Requirements</p>
                          <ul className="mt-1 space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Training Programs</h2>
              <p className="text-gray-600 mt-2">Short-term training opportunities for various sectors</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(singaporeWorkPermits.trainingPass.trainingAreas).map(([key, area]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  {jobIcons[key as keyof typeof jobIcons]}
                </div>
                <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Timer className="w-4 h-4" />
                  <span>{area.duration}</span>
                </div>
                <ul className="space-y-2">
                  {area.programs.map((program, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pass Types Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <BadgeCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Detailed Pass Types</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(passTypeDetails).map(([type, details], index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{type}</h3>
                <p className="text-gray-600 mb-4">{details.overview}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-blue-600 mb-2">Validity</h4>
                    <p className="text-gray-600">{details.validity}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-2">Salary Requirement</h4>
                    <p className="text-gray-600">{details.salary}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-2">Qualifications</h4>
                    <ul className="space-y-2">
                      {details.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      {details.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-2">Restrictions</h4>
                    <ul className="space-y-2">
                      {details.restrictions.map((restriction, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{restriction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Renewal Process Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Renewal Process</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Key Requirements</h3>
                <ul className="space-y-3">
                  {renewalProcess.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-6">Renewal Timeline</h3>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
                  <div className="space-y-8">
                    {renewalProcess.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex gap-8"
                      >
                        <div className="relative">
                          <div className="w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-50" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-lg">{step.name}</h4>
                            <span className="text-blue-600 font-medium">{step.duration}</span>
                          </div>
                          <ul className="space-y-2">
                            {step.tasks.map((task, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Sponsorship Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Family Sponsorship</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Dependent&apos;s Pass</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-600 mb-2">Eligibility</h4>
                  <ul className="space-y-2">
                    {familySponsorship.dependentPass.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-600 mb-2">Required Documents</h4>
                  <ul className="space-y-2">
                    {familySponsorship.dependentPass.documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-600 mb-2">Restrictions</h4>
                  <ul className="space-y-2">
                    {familySponsorship.dependentPass.restrictions.map((restriction, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{restriction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Long Term Visit Pass</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-600 mb-2">Eligibility</h4>
                  <ul className="space-y-2">
                    {familySponsorship.longTermVisitPass.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-600 mb-2">Required Documents</h4>
                  <ul className="space-y-2">
                    {familySponsorship.longTermVisitPass.documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Rejection Reasons Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <BadgeCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Common Rejection Reasons & Prevention</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonRejectionReasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-red-600 mb-3">{item.reason}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Issue</h4>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Prevention</h4>
                    <p className="text-gray-600">{item.prevention}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Arrival Requirements Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <ClipboardCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Post-Arrival Requirements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Immediate Actions</h3>
              <div className="space-y-4">
                {postArrivalRequirements.immediate.map((req, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-blue-600">{req.requirement}</h4>
                    <p className="text-sm text-red-600 mb-1">Deadline: {req.deadline}</p>
                    <p className="text-gray-600">{req.details}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Ongoing Requirements</h3>
              <div className="space-y-4">
                {postArrivalRequirements.ongoing.map((req, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-blue-600">{req.requirement}</h4>
                    <p className="text-sm text-gray-500 mb-1">Frequency: {req.frequency}</p>
                    <p className="text-gray-600">{req.details}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Employer Obligations</h3>
              <div className="space-y-4">
                {postArrivalRequirements.employer.map((req, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-blue-600">{req.requirement}</h4>
                    <p className="text-gray-600">{req.details}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appeal Process Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Appeal Process</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-4">Requirements</h3>
                <p className="text-gray-600 mb-4">Timeframe: {appealProcess.timeframe}</p>
                <ul className="space-y-3">
                  {appealProcess.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-6">Appeal Steps</h3>
                <div className="space-y-6">
                  {appealProcess.steps.map((step, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-medium text-lg mb-2">{step.step}</h4>
                      <ul className="space-y-2">
                        {step.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-600">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="font-medium text-blue-600 mb-2">Success Factors</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {appealProcess.successFactors.map((factor, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {Object.entries(extendedFaqs).map(([category, data]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
                <div className="space-y-3">
                  {data.questions.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{faq.q}</span>
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
                            <div className="p-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>
          </div>
          
          {commonMistakes.map((category, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.mistakes.map((mistake, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <h4 className="font-medium text-red-600 mb-2">{mistake.title}</h4>
                    <p className="text-gray-600 mb-4">{mistake.description}</p>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Prevention:</span>
                        <p className="text-gray-600">{mistake.prevention}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Impact:</span>
                        <p className="text-gray-600">{mistake.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Cost Breakdown</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Application Fees</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Pass Type</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Application</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Issuance</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Renewal</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {costBreakdown.applicationFees.map((fee, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fee.passType}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.application}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.issuance}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.renewal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Additional Costs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {costBreakdown.additionalCosts.map((cost, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h4 className="font-medium text-blue-600 mb-2">{cost.item}</h4>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{cost.cost}</p>
                    <p className="text-sm text-gray-600">{cost.applicability}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Monthly Levy Rates</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {costBreakdown.monthlyLevies.map((levy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h4 className="font-medium text-blue-600 mb-4">{levy.sector}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Basic Tier</span>
                        <span className="font-medium text-gray-900">{levy.basic}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Skilled Tier</span>
                        <span className="font-medium text-gray-900">{levy.skilled}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert guidance on Singapore work permits and training programs. Our team will help you navigate the application process and find the right opportunities.
          </p>
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SingaporeWorkVisaPage; 