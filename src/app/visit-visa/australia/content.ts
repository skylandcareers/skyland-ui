// Content types and data for Australian Visit Visa

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

export interface CityVisit {
  name: string;
  highlights: string[];
  travelTips: string;
}

export interface DocumentRequirement {
  category: string;
  documents: {
    name: string;
    description: string;
    required: boolean;
  }[];
}

export interface VisaCost {
  type: string;
  duration: string;
  fee: string;
  processingTime: string;
}

export interface CommonMistake {
  mistake: string;
  solution: string;
  impact: string;
}

export interface TravelTip {
  title: string;
  description: string;
  category: string;
}

export interface BiometricInfo {
  requirement: string;
  locations: string[];
  process: string[];
  cost: string;
}

export interface AccommodationType {
  type: string;
  icon: string;
  description: string;
  requirements: {
    essential: string[];
    additional: string[];
  };
  tips: string[];
  verificationProcess: string[];
}

export const australiaVisitVisaContent = {
  meta: {
    lastUpdated: new Date().toISOString(),
    version: "1.0"
  },

  // Core Visa Information
  visaTypes: {
    tourist: {
      title: "Tourist Stream (Subclass 600)",
      description: "For tourism, visiting family/friends, or short recreational activities",
      permittedActivities: [
        "Tourism and leisure activities",
        "Visit family and friends",
        "Short-term study (up to 3 months)",
        "Attend conferences or meetings",
        "Participate in cultural events"
      ],
      prohibitedActivities: [
        "Work of any kind",
        "Long-term study",
        "Accessing public healthcare",
        "Establishing a business"
      ]
    },
    business: {
      title: "Business Visitor Stream (Subclass 600)",
      description: "For business-related activities and professional visits",
      permittedActivities: [
        "Attend meetings and conferences",
        "Negotiate contracts",
        "Make business inquiries",
        "Participate in training programs"
      ],
      prohibitedActivities: [
        "Work for or provide services to a business",
        "Sell goods or services",
        "Undertake paid employment",
        "Long-term business establishment"
      ]
    },
    sponsored: {
      title: "Sponsored Family Stream (Subclass 600)",
      description: "For visiting family members who can provide sponsorship",
      benefits: [
        "Extended stay options",
        "Family support available",
        "Possible fee waivers"
      ]
    }
  },

  // Detailed Eligibility Requirements
  eligibility: {
    general: {
      passport: "Valid passport with at least 6 months validity beyond intended stay",
      intent: "Genuine intention to visit temporarily for tourism or business",
      funds: "Evidence of sufficient funds to support your stay",
      character: "Meet character requirements and provide police certificates if required"
    },
    financial: {
      minimumAmount: "Demonstrate access to sufficient funds for entire stay",
      proofRequirements: [
        "Recent bank statements (last 3 months)",
        "Payslips or income evidence",
        "Tax returns if self-employed",
        "Sponsorship documents if applicable"
      ],
      sponsorship: {
        requiredDocs: [
          "Completed Form 1149 (Sponsorship for visit visa)",
          "Proof of sponsor's income",
          "Statutory declaration of support"
        ]
      }
    },
    documentation: {
      mandatory: [
        "Valid passport",
        "Completed Form 1419",
        "Visa application charge payment",
        "Recent passport-sized photograph",
        "Evidence of funds",
        "Travel itinerary"
      ],
      recommended: [
        "Previous travel history",
        "Letter of invitation if applicable",
        "Employment details",
        "Property ownership evidence"
      ]
    }
  },

  // Application Process
  application: {
    steps: [
      {
        number: 1,
        title: "Create ImmiAccount",
        details: "Register and create an ImmiAccount on the Department of Home Affairs website",
        tips: [
          "Use a valid email address",
          "Keep login credentials secure",
          "Complete all profile information"
        ],
        time: "15-30 minutes"
      },
      {
        number: 2,
        title: "Complete Online Application",
        details: "Fill out Form 1419 for Visitor visa application",
        tips: [
          "Provide accurate information",
          "Review before submission",
          "Save progress regularly"
        ]
      },
      {
        number: 3,
        title: "Attach Documents",
        details: "Upload all required supporting documents",
        tips: [
          "Ensure documents are clear and legible",
          "Follow size and format requirements",
          "Include certified translations if needed"
        ]
      },
      {
        number: 4,
        title: "Pay Visa Fee",
        details: "Pay the visa application charge",
        methods: [
          "Credit/debit card",
          "PayPal",
          "UnionPay"
        ]
      },
      {
        number: 5,
        title: "Biometrics and Health",
        details: "Provide biometrics if required and complete health examinations",
        requirements: [
          "Visit an authorized collection center",
          "Complete health checks if required",
          "Keep appointment confirmations"
        ]
      }
    ],
    processing: {
      standard: "20-25 business days",
      factors: [
        "Application completeness",
        "Peak processing periods",
        "Additional checks if required",
        "Visa subclass and stream",
        "Country of passport"
      ]
    }
  },

  // Document Requirements
  documentRequirements: [
    {
      category: "Identity Documents",
      documents: [
        {
          name: "Valid Passport",
          description: "With at least 6 months validity and blank pages",
          required: true
        },
        {
          name: "Previous Passports",
          description: "If available, to show travel history",
          required: false
        },
        {
          name: "National Identity Card",
          description: "If applicable in your country",
          required: false
        }
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        {
          name: "Bank Statements",
          description: "Last 3 months showing sufficient funds",
          required: true
        },
        {
          name: "Employment Letter",
          description: "Current employment status and salary",
          required: true
        },
        {
          name: "Income Tax Returns",
          description: "Last two years if self-employed",
          required: false
        }
      ]
    },
    {
      category: "Travel Documents",
      documents: [
        {
          name: "Travel Itinerary",
          description: "Planned activities and accommodation",
          required: true
        },
        {
          name: "Flight Bookings",
          description: "Return flight reservations",
          required: true
        },
        {
          name: "Travel Insurance",
          description: "Comprehensive coverage for Australia",
          required: true
        }
      ]
    }
  ],

  // Visa Costs
  visaCosts: [
    {
      type: "Tourist Stream",
      duration: "Up to 3 months",
      fee: "AUD 145",
      processingTime: "20-25 business days"
    },
    {
      type: "Tourist Stream",
      duration: "Up to 6 months",
      fee: "AUD 145",
      processingTime: "20-25 business days"
    },
    {
      type: "Tourist Stream",
      duration: "Up to 12 months",
      fee: "AUD 145",
      processingTime: "20-25 business days"
    },
    {
      type: "Business Visitor Stream",
      duration: "Up to 3 months",
      fee: "AUD 145",
      processingTime: "20-25 business days"
    },
    {
      type: "Sponsored Family Stream",
      duration: "Up to 12 months",
      fee: "AUD 145",
      processingTime: "20-25 business days"
    }
  ],

  // Common Mistakes and Solutions
  commonMistakes: [
    {
      mistake: "Insufficient Financial Evidence",
      solution: "Provide comprehensive bank statements and proof of regular income",
      impact: "High chance of visa rejection"
    },
    {
      mistake: "Incomplete Travel History",
      solution: "Include all previous international travel and any visa refusals",
      impact: "May lead to credibility issues"
    },
    {
      mistake: "Unclear Purpose of Visit",
      solution: "Provide detailed itinerary and supporting documents",
      impact: "Could result in additional questioning or rejection"
    },
    {
      mistake: "Missing Supporting Documents",
      solution: "Use a comprehensive checklist and double-check all requirements",
      impact: "Delays in processing or rejection"
    }
  ],

  // Healthcare Requirements
  healthcare: {
    insurance: {
      required: true,
      minimumCoverage: "AUD 1,000,000",
      recommendedProviders: [
        "Australian-registered insurers",
        "International travel insurance companies"
      ]
    },
    vaccinations: {
      required: [],
      recommended: [
        "COVID-19 vaccination",
        "Routine vaccinations up to date"
      ]
    },
    emergencyInfo: {
      emergencyNumber: "000",
      healthDirect: "1800 022 222",
      poisonInfo: "13 11 26"
    }
  },

  // Accommodation Guidelines
  accommodation: {
    types: [
      {
        type: "Hotels",
        icon: "building",
        description: "Commercial accommodation including hotels, hostels, and bed & breakfasts",
        requirements: {
          essential: [
            "Confirmed booking for entire stay",
            "Payment proof or reservation confirmation",
            "Hotel's full contact details"
          ],
          additional: [
            "Booking reference number",
            "Cancellation policy details",
            "Hotel star rating certification"
          ]
        },
        tips: [
          "Book through reputable websites or directly with hotels",
          "Ensure booking dates match your visa application",
          "Keep both electronic and printed copies of bookings",
          "Check if breakfast/meals are included"
        ],
        verificationProcess: [
          "UKVI may contact hotel to verify booking",
          "Booking must cover entire stay period",
          "Hotel must be registered business"
        ]
      },
      {
        type: "Friends/Family",
        icon: "home",
        description: "Staying with friends or family members who are UK residents",
        requirements: {
          essential: [
            "Formal invitation letter from host",
            "Proof of host's address (utility bill/council tax)",
            "Proof of host's immigration status or right to accommodate",
            "Proof of relationship with host"
          ],
          additional: [
            "Host's passport copy",
            "Property inspection report (if required)",
            "Council tax statement"
          ]
        },
        tips: [
          "Get invitation letter notarized if possible",
          "Ensure host's documents are less than 3 months old",
          "Keep regular communication records with host",
          "Have backup accommodation plan"
        ],
        verificationProcess: [
          "Host may be contacted by UKVI",
          "Home visit may be conducted",
          "Additional references may be required"
        ]
      },
      {
        type: "Rental Properties",
        icon: "home",
        description: "Short-term rental accommodations including apartments and houses",
        requirements: {
          essential: [
            "Signed rental agreement",
            "Payment confirmation/receipts",
            "Property ownership verification",
            "Complete property details and address"
          ],
          additional: [
            "Landlord contact information",
            "Property management company details",
            "Utility setup confirmation"
          ]
        },
        tips: [
          "Use licensed rental agencies",
          "Get written confirmation of booking",
          "Check for necessary amenities",
          "Verify property location and transport links"
        ],
        verificationProcess: [
          "Rental agency verification",
          "Property ownership checks",
          "Payment transaction verification"
        ]
      }
    ],
    generalRequirements: {
      documentation: [
        "Full address details with postal code",
        "Contact information for accommodation provider",
        "Length of stay confirmation",
        "Proof of payment or financial arrangement"
      ],
      safetyStandards: [
        "Fire safety certification",
        "Health and safety compliance",
        "Insurance coverage"
      ],
      locationDetails: [
        "Distance from planned activities/work/study",
        "Nearby public transport options",
        "Local amenities information"
      ]
    },
    emergencyInfo: {
      contacts: [
        "Local police station",
        "Nearest hospital",
        "Embassy/Consulate details"
      ],
      procedures: [
        "Emergency accommodation options",
        "24/7 helpline numbers",
        "Local authority contact details"
      ]
    }
  },

  // FAQs
  faqs: {
    general: [
      {
        question: "How long can I stay in Australia on a visitor visa?",
        answer: "The Tourist Stream visa usually allows stays of 3, 6, or 12 months. The exact duration is decided by the visa officer based on your circumstances and intended activities."
      },
      {
        question: "Can I extend my stay in Australia?",
        answer: "You generally need to apply for a new visitor visa before your current visa expires. Extensions are only possible in special circumstances."
      }
    ],
    documentation: [
      {
        question: "Do I need to translate my documents?",
        answer: "Yes, all documents not in English must be accompanied by a certified English translation."
      },
      {
        question: "Is travel insurance mandatory?",
        answer: "Yes, you must have adequate health insurance coverage for your entire stay in Australia."
      }
    ],
    financial: [
      {
        question: "How much money do I need to show?",
        answer: "While there's no fixed amount, you should show enough funds to cover all expenses during your stay, typically AUD 1,000 per month plus return travel costs."
      },
      {
        question: "Can someone sponsor my visit?",
        answer: "Yes, through the Sponsored Family Stream, eligible relatives can sponsor your visit and provide financial support."
      }
    ],
    application: [
      {
        question: "How do I apply for an Australian visitor visa?",
        answer: "Applications are submitted online through ImmiAccount. You'll need to create an account, complete Form 1419, attach required documents, and pay the visa fee."
      },
      {
        question: "When should I apply for my visa?",
        answer: "Apply at least 6-8 weeks before your intended travel date. You can apply up to 12 months before your planned visit."
      }
    ],
    travel: [
      {
        question: "Do I need to book flights before applying?",
        answer: "While not mandatory, having flight reservations can strengthen your application. Book refundable tickets if possible."
      },
      {
        question: "Can I visit other countries with an Australian visitor visa?",
        answer: "No, the Australian visitor visa is only valid for Australia. You'll need separate visas for other countries."
      }
    ],
    restrictions: [
      {
        question: "Can I work on a visitor visa?",
        answer: "No, you cannot work on a visitor visa. Business visitor activities like attending meetings are allowed, but paid work is prohibited."
      },
      {
        question: "Can I study on a visitor visa?",
        answer: "You can study for up to 3 months on a visitor visa, but if you plan to study longer, you'll need a student visa."
      }
    ]
  },

  // Travel Tips and Best Practices
  travelTips: {
    beforeTravel: [
      {
        title: "Currency Exchange",
        description: "Exchange some money into Australian Dollars before travel, but get the bulk at Australian banks for better rates",
        category: "financial"
      },
      {
        title: "Weather Preparation",
        description: "Pack for variable weather conditions - Australian weather can change rapidly",
        category: "preparation"
      },
      {
        title: "Transport Cards",
        description: "Consider getting an Opal card or contactless payment card for public transport",
        category: "transportation"
      }
    ],
    duringStay: [
      {
        title: "Keep Documents Safe",
        description: "Always carry a copy of your visa and passport, but keep originals in a secure location",
        category: "safety"
      },
      {
        title: "Emergency Numbers",
        description: "Save important Australian emergency numbers: 000 (Emergency), 112 (Non-emergency police)",
        category: "safety"
      },
      {
        title: "Public Transport",
        description: "Use apps like TripView for easy navigation of public transport systems",
        category: "transportation"
      }
    ],
    culturalAwareness: [
      {
        title: "Queuing",
        description: "Always respect queues (lines) - queue jumping is considered very rude in Australia",
        category: "etiquette"
      },
      {
        title: "Tipping",
        description: "Tipping is appreciated but not mandatory - 10-15% is standard in restaurants",
        category: "etiquette"
      },
      {
        title: "Punctuality",
        description: "Being on time is important in Australian culture, especially for appointments",
        category: "etiquette"
      }
    ]
  },

  // Biometric Information
  biometrics: {
    requirement: "Most applicants need to provide biometrics unless exempt",
    locations: [
      "Australian Visa Application Centres (AVACs)",
      "Australian Biometric Collection Centres (ABCCs)",
      "Selected overseas posts"
    ],
    process: [
      "Book appointment at nearest collection center",
      "Bring passport and appointment confirmation",
      "Digital photograph and fingerprints taken",
      "Process takes about 15 minutes"
    ],
    cost: "Included in visa application fee"
  },

  // Visa Extension Information
  visaExtension: {
    conditions: {
      title: "Extension Conditions",
      points: [
        "Must apply before current visa expires",
        "Cannot switch to a different visa category",
        "Must maintain same purpose of visit",
        "Must have sufficient funds to support extended stay"
      ]
    },
    process: {
      title: "Extension Process",
      steps: [
        "Submit online application before current visa expires",
        "Pay extension fee and healthcare surcharge if applicable",
        "Provide updated documentation",
        "Attend biometric appointment if required"
      ]
    },
    restrictions: {
      title: "Extension Restrictions",
      points: [
        "Maximum total stay cannot exceed 6 months in any 12-month period",
        "Extensions are granted only in exceptional circumstances",
        "Medical treatment may allow longer stays with proper documentation",
        "Business visits may be extended with proper justification"
      ]
    },
    costs: {
      applicationFee: "AUD 993",
      priorityService: "AUD 500 additional",
      superPriorityService: "AUD 800 additional"
    }
  },

  // Regional Information
  regionalInfo: {
    england: {
      majorCities: ["London", "Manchester", "Birmingham", "Liverpool"],
      attractions: ["Big Ben", "Tower of London", "Buckingham Palace", "Lake District"],
      transport: "Extensive rail and bus network, London Underground in the capital"
    },
    scotland: {
      majorCities: ["Edinburgh", "Glasgow", "Aberdeen"],
      attractions: ["Edinburgh Castle", "Highlands", "Loch Ness"],
      transport: "ScotRail network, buses, and ferries to islands"
    },
    wales: {
      majorCities: ["Cardiff", "Swansea", "Newport"],
      attractions: ["Snowdonia", "Cardiff Castle", "Pembrokeshire Coast"],
      transport: "Transport for Wales rail services and extensive bus network"
    },
    northernIreland: {
      majorCities: ["Belfast", "Derry"],
      attractions: ["Giant's Causeway", "Titanic Belfast", "Causeway Coast"],
      transport: "Translink operates trains and buses throughout the region"
    }
  }
};
