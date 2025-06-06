// Content types and data for UAE Visit Visa

export interface MainBenefit {
  title: string;
  description: string;
}

export interface VisaRequirement {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

interface TimelinePhase {
  title: string;
  duration: string;
  tasks: string[];
}

export interface CityVisit {
  name: string;
  highlights: string[];
  travelTips: string;
}

export const uaeVisitVisaContent = {
  meta: {
    lastUpdated: new Date().toISOString(),
    version: "2.0"
  },

  // Core Visa Information
  visaTypes: {
    tourist: {
      title: "Tourist Visa",
      description: "For individuals traveling to UAE for tourism and leisure",
      permittedActivities: [
        "Sightseeing and tourism activities",
        "Visiting friends and family",
        "Attending cultural events",
        "Short recreational courses"
      ],
      prohibitedActivities: [
        "Employment of any kind",
        "Running a business",
        "Long-term studies",
        "Paid performances"
      ]
    },
    visit: {
      title: "Visit Visa",
      description: "For visiting family or friends residing in UAE",
      permittedActivities: [
        "Staying with family/friends",
        "Tourism activities",
        "Medical treatment",
        "Participation in social events"
      ],
      prohibitedActivities: [
        "Employment without proper work visa",
        "Business activities without proper visa",
        "Overstaying visa validity"
      ]
    },
    business: {
      title: "Business Visit Visa",
      description: "For short-term business activities in UAE",
      permittedActivities: [
        "Business meetings and conferences",
        "Contract negotiations",
        "Market research",
        "Training sessions"
      ],
      prohibitedActivities: [
        "Taking up employment",
        "Receiving salary from UAE company",
        "Providing services to clients"
      ]
    }
  },

  // Detailed Eligibility Requirements
  eligibility: {
    general: {
      passport: "Valid for at least 6 months from date of entry",
      intent: "Must demonstrate genuine purpose of visit",
      funds: "Sufficient funds to cover stay (minimum AED 2000-3000 per week)",
      ties: "Evidence of ties to home country"
    },
    financial: {
      minimumAmount: "Minimum AED 2000-3000 per week of stay",
      proofRequirements: [
        "Bank statements (last 3-6 months)",
        "Salary slips (last 3 months)",
        "Tax returns (if applicable)",
        "Sponsorship documents if applicable"
      ],
      sponsorship: {
        requiredDocs: [
          "Sponsorship letter from UAE resident",
          "Sponsor's Emirates ID copy",
          "Sponsor's residence visa copy",
          "Proof of relationship (if family visit)"
        ]
      }
    },
    documentation: {
      mandatory: [
        "Completed application form",
        "Passport copy (colored)",
        "Passport-size photo with white background",
        "Confirmed flight tickets",
        "Hotel booking or accommodation proof"
      ],
      recommended: [
        "Travel itinerary",
        "Employment verification letter",
        "Bank statements",
        "Travel insurance"
      ]
    },
    specialCases: {
      familyVisit: {
        requirements: [
          "Invitation letter from UAE resident",
          "Sponsor's Emirates ID and visa copy",
          "Proof of relationship",
          "Accommodation proof"
        ]
      },
      businessVisit: {
        requirements: [
          "Invitation from UAE company",
          "Company trade license copy",
          "Cover letter from employer",
          "Business references"
        ]
      },
      medical: {
        requirements: [
          "Medical report from home country",
          "Appointment letter from UAE hospital",
          "Treatment cost estimate",
          "Financial guarantee"
        ]
      }
    }
  },

  // Comprehensive Application Guide
  application: {
    steps: [
      {
        number: 1,
        title: "Determine Visa Type",
        details: "Select appropriate visa type based on purpose of visit",
        tips: [
          "Check with UAE embassy for latest requirements",
          "Consult with sponsor if applicable",
          "Verify processing times for your nationality"
        ],
        time: "1-2 days"
      },
      {
        number: 2,
        title: "Gather Required Documents",
        details: "Prepare all necessary documents as per checklist",
        tips: [
          "Ensure passport has sufficient validity",
          "Get documents attested if required",
          "Make colored copies where needed"
        ],
        time: "3-5 days"
      },
      {
        number: 3,
        title: "Submit Application",
        details: "Apply through approved channels (embassy, airline, or hotel)",
        tips: [
          "Some nationalities can apply on arrival",
          "Hotels can sponsor tourist visas",
          "Airlines offer visa services for passengers"
        ],
        time: "1 day"
      },
      {
        number: 4,
        title: "Pay Visa Fee",
        details: "Pay required visa processing fees",
        methods: [
          "Online payment",
          "Bank transfer",
          "Cash at application center"
        ],
        note: "Fees vary by visa type and duration"
      },
      {
        number: 5,
        title: "Receive Visa",
        details: "Visa is typically issued electronically",
        preparation: [
          "Check visa details for accuracy",
          "Print multiple copies",
          "Carry during travel"
        ]
      }
    ],
    processing: {
      standard: "3-5 working days",
      express: "24-48 hours (additional fee)",
      factors: [
        "Applicant's nationality",
        "Visa type and duration",
        "Document completeness",
        "Application channel"
      ]
    }
  },

  // Comprehensive FAQs Organized by Category
  faqs: {
    general: [
      {
        question: "How early should I apply for my UAE visit visa?",
        answer: "We recommend applying at least 2-3 weeks before your planned travel date to account for processing times."
      },
      {
        question: "Can I extend my UAE visit visa?",
        answer: "Yes, most visit visas can be extended for 30 days twice without leaving UAE, subject to approval and fees."
      }
    ],
    documentation: [
      {
        question: "Do I need attested documents for UAE visa?",
        answer: "Requirements vary by nationality. Some countries require attested documents while others accept plain copies."
      },
      {
        question: "Is travel insurance mandatory for UAE visit visa?",
        answer: "While not mandatory for all, it's highly recommended. Some visa types and nationalities require medical insurance."
      }
    ],
    financial: [
      {
        question: "How much bank balance is required for UAE visa?",
        answer: "There's no fixed amount, but showing at least AED 5000-10000 for a 2-3 week trip is advisable."
      },
      {
        question: "Can a UAE resident sponsor my visit visa?",
        answer: "Yes, UAE residents can sponsor family/friends visit visas if they meet salary and accommodation requirements."
      }
    ],
    entry: [
      {
        question: "What happens if I overstay my UAE visa?",
        answer: "Overstaying incurs daily fines (AED 100-200 per day) and may affect future visa applications."
      },
      {
        question: "Can I visit other Emirates with single entry visa?",
        answer: "Yes, you can travel between all 7 Emirates with a valid UAE visa."
      }
    ],
    validity: [
      {
        question: "How long is a UAE visit visa valid?",
        answer: "Typically 30 or 90 days from issue date, with options for single or multiple entries."
      },
      {
        question: "Can I convert visit visa to employment visa?",
        answer: "Yes, but you must leave UAE and re-enter on employment visa. Direct conversion is not permitted."
      }
    ]
  },

  mainBenefits: [
    {
      title: "Tourism and Sightseeing",
      description: "Visit world-class attractions like Burj Khalifa, Dubai Mall, and Sheikh Zayed Mosque."
    },
    {
      title: "Family Visits",
      description: "Reunite with family members residing in UAE with proper sponsorship."
    },
    {
      title: "Business Opportunities",
      description: "Attend meetings, conferences, and explore business potential in UAE."
    },
    {
      title: "Medical Tourism",
      description: "Access high-quality medical facilities and specialist treatments."
    }
  ],
  visaRequirements: {
    intent: {
      title: "Genuine Purpose",
      description: "Must demonstrate legitimate reason for visit and intent to return"
    },
    passport: {
      title: "Valid Passport",
      description: "Minimum 6 months validity from date of entry"
    },
    financialProof: {
      title: "Financial Means",
      description: "Proof of sufficient funds for duration of stay"
    },
    accommodation: {
      title: "Stay Arrangements",
      description: "Confirmed hotel booking or sponsor's accommodation proof"
    }
  },
  applicationProcess: [
    {
      step: 1,
      title: "Determine Visa Type",
      description: "Select appropriate visa based on purpose (tourist, visit, business)"
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather all required documents as per checklist"
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Apply through approved channels (embassy, airline, or hotel)"
    },
    {
      step: 4,
      title: "Pay Fees",
      description: "Pay visa processing fees based on type and duration"
    },
    {
      step: 5,
      title: "Receive eVisa",
      description: "Get electronic visa via email after approval"
    }
  ],

  // Interview Preparation (if applicable)
  interview: {
    commonQuestions: [
      {
        question: "Purpose of Visit",
        tips: [
          "Be specific about your plans",
          "Mention places you'll visit",
          "Have invitation letter if applicable"
        ]
      },
      {
        question: "Duration of Stay",
        tips: [
          "Match with your return ticket",
          "Don't request longer than needed",
          "Explain if visiting multiple Emirates"
        ]
      }
    ],
    preparationTips: [
      {
        title: "Dress Code",
        details: "Dress modestly and professionally"
      },
      {
        title: "Document Organization",
        details: "Keep documents in order for easy access"
      }
    ]
  },

  // Travel Tips
  travelTips: {
    beforeTravel: [
      {
        title: "Cultural Awareness",
        description: "Research UAE customs and laws to respect local traditions"
      },
      {
        title: "Weather Preparation",
        description: "Pack appropriate clothing for hot climate (light, breathable fabrics)"
      }
    ],
    duringStay: [
      {
        title: "Visa Compliance",
        description: "Never overstay your visa validity period"
      },
      {
        title: "Local Laws",
        description: "Be aware of strict laws regarding alcohol, public behavior, and dress code"
      }
    ],
    customs: {
      allowed: [
        "Personal medications (with prescription)",
        "Modest clothing appropriate for Islamic country",
        "Electronics for personal use"
      ],
      restricted: [
        "Drugs and narcotics (strictly prohibited)",
        "Pork products",
        "Religious materials for distribution"
      ]
    }
  },

  // Fee Structure
  feeStructure: {
    basic: [
      {
        type: "30-day Tourist Visa",
        amount: 350,
        currency: "AED",
        notes: "Single entry, non-extendable"
      },
      {
        type: "90-day Tourist Visa",
        amount: 800,
        currency: "AED",
        notes: "Single entry, extendable"
      }
    ],
    additional: [
      {
        service: "Express Processing",
        amount: 200,
        currency: "AED",
        availability: "24-48 hour processing"
      },
      {
        service: "Visa Extension",
        amount: 600,
        currency: "AED",
        availability: "First 30-day extension"
      }
    ]
  },

  // Popular Destinations
  popularDestinations: [
    {
      name: "Dubai",
      highlights: [
        "Burj Khalifa - World's tallest building",
        "Dubai Mall and Fountain Show",
        "Palm Jumeirah and Atlantis",
        "Desert safari experiences"
      ],
      travelTips: "Use metro for efficient transport. Book attractions online for discounts."
    },
    {
      name: "Abu Dhabi",
      highlights: [
        "Sheikh Zayed Grand Mosque",
        "Louvre Abu Dhabi",
        "Yas Island attractions",
        "Emirates Palace"
      ],
      travelTips: "Dress modestly for mosque visits. Weekend is Friday-Saturday."
    },
    {
      name: "Sharjah",
      highlights: [
        "Sharjah Museum of Islamic Civilization",
        "Al Noor Island",
        "Blue Souk",
        "Sharjah Arts Area"
      ],
      travelTips: "Most conservative Emirate - strict dress code and alcohol ban."
    }
  ]
};

export const uaeVisitVisaFAQs: FAQ[] = [
  {
    question: "Can I get UAE visa on arrival?",
    answer: "Citizens of 50+ countries can obtain visa on arrival for 30-90 days. Check latest eligibility with UAE immigration."
  },
  {
    question: "What is the penalty for overstaying?",
    answer: "AED 100-200 per day depending on visa type. After grace period, fines apply from first day of overstay."
  },
  {
    question: "Can I work on visit visa?",
    answer: "No, working on visit visa is illegal. You need proper employment visa sponsored by UAE employer."
  },
  {
    question: "Is COVID vaccination required?",
    answer: "Check latest health requirements as policies change frequently. Currently no restrictions for vaccinated travelers."
  }
];

export const uaeVisitVisaTimeline: Record<string, TimelinePhase> = {
  preparation: {
    title: "Preparation Phase",
    duration: "3-5 days",
    tasks: [
      "Determine visa type needed",
      "Check eligibility requirements",
      "Gather required documents"
    ]
  },
  application: {
    title: "Application Submission",
    duration: "1-2 days",
    tasks: [
      "Complete application form",
      "Submit through approved channel",
      "Pay visa fees"
    ]
  },
  processing: {
    title: "Processing Period",
    duration: "3-5 working days",
    tasks: [
      "Visa application review",
      "Additional documents if requested",
      "Visa issuance"
    ]
  }
};