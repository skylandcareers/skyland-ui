// Content types and data for UK Visit Visa

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

export const ukVisitVisaContent = {
  meta: {
    lastUpdated: new Date().toISOString(),
    version: "2.0"
  },

  // Core Visa Information
  visaTypes: {
    standard: {
      title: "Standard Visitor Visa",
      description: "For tourism, business visits, and short-term study",
      permittedActivities: [
        "Tourism and leisure",
        "Visit friends and family",
        "Business activities",
        "Short-term study (up to 6 months)",
        "Medical treatment",
        "Attend conferences or meetings"
      ],
      prohibitedActivities: [
        "Paid or unpaid work",
        "Living in the UK long-term",
        "Accessing public funds",
        "Getting married or registering civil partnership"
      ]
    },
    marriage: {
      title: "Marriage Visitor Visa",
      description: "For those who want to get married or form a civil partnership in the UK",
      permittedActivities: [
        "Get married or form civil partnership",
        "Give notice of marriage/civil partnership",
        "Visit as a tourist before/after ceremony"
      ],
      prohibitedActivities: [
        "Live in the UK permanently",
        "Work or study",
        "Access public funds"
      ]
    },
    permitted: {
      title: "Permitted Paid Engagement Visa",
      description: "For professionals invited to do specific paid work in the UK",
      benefits: [
        "Up to 1 month stay",
        "Specific paid work allowed",
        "Quick processing time"
      ]
    }
  },

  // Detailed Eligibility Requirements
  eligibility: {
    general: {
      passport: "Valid for entire stay plus 6 months",
      intent: "Must prove you'll leave the UK after your visit",
      funds: "Sufficient to support yourself",
      accommodation: "Details of where you'll stay"
    },
    financial: {
      minimumAmount: "Show enough funds for entire stay",
      proofRequirements: [
        "Bank statements (last 6 months)",
        "Payslips (last 6 months)",
        "Tax returns",
        "Sponsorship documents if applicable"
      ],
      sponsorship: {
        requiredDocs: [
          "Sponsor's bank statements",
          "Proof of relationship",
          "Letter of invitation"
        ]
      }
    },
    documentation: {
      mandatory: [
        "Valid passport",
        "Completed online application",
        "Visa fee payment receipt",
        "Passport-sized colour photograph"
      ],
      recommended: [
        "Travel itinerary",
        "Hotel bookings",
        "Return flight tickets",
        "Employment letter"
      ]
    },
    specialCases: {
      students: {
        requirements: [
          "Confirmation of enrollment",
          "Student status letter",
          "Study plan"
        ]
      },
      businessVisitors: {
        requirements: [
          "Business invitation letter",
          "Company registration documents",
          "Meeting schedules"
        ]
      },
      medical: {
        requirements: [
          "Letter from UK healthcare provider",
          "Details of medical condition",
          "Treatment cost estimates"
        ]
      }
    }
  },

  // Application Process
  application: {
    steps: [
      {
        number: 1,
        title: "Online Application",
        details: "Complete the online application form on the UK government website",
        tips: [
          "Have all documents ready",
          "Answer truthfully",
          "Double-check all information"
        ],
        time: "60-90 minutes"
      },
      {
        number: 2,
        title: "Pay Visa Fee",
        details: "Standard Visitor visa fees vary by duration",
        methods: [
          "Online payment",
          "Credit/debit card",
          "Bank transfer"
        ],
        note: "Fees are non-refundable"
      },
      {
        number: 3,
        title: "Book Biometrics Appointment",
        details: "Visit a visa application centre to provide fingerprints and photo",
        tips: [
          "Book early for preferred slots",
          "Check required documents",
          "Arrive 15 minutes early"
        ]
      },
      {
        number: 4,
        title: "Submit Documents",
        details: "Upload or submit supporting documents",
        checklist: [
          "Passport",
          "Financial evidence",
          "Travel plans",
          "Accommodation details"
        ]
      },
      {
        number: 5,
        title: "Wait for Decision",
        details: "Standard processing times apply",
        preparation: [
          "Track application online",
          "Respond to any queries promptly",
          "Don't book non-refundable travel"
        ]
      }
    ],
    processing: {
      standard: "3 weeks",
      priority: "5 working days (additional fee)",
      superPriority: "24 hours (additional fee)",
      factors: [
        "Application type",
        "Time of year",
        "Completeness of application",
        "Previous travel history"
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
          description: "Must be valid for at least 6 months after your planned return",
          required: true
        },
        {
          name: "Previous Passports",
          description: "If available, to show travel history",
          required: false
        },
        {
          name: "BRP Card",
          description: "If you have previously lived in the UK",
          required: false
        }
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        {
          name: "Bank Statements",
          description: "Last 6 months showing regular income and sufficient funds",
          required: true
        },
        {
          name: "Employment Contract",
          description: "Current employment details and salary information",
          required: true
        },
        {
          name: "Tax Returns",
          description: "Last year's tax returns if self-employed",
          required: false
        }
      ]
    },
    {
      category: "Travel Documents",
      documents: [
        {
          name: "Travel Itinerary",
          description: "Detailed day-by-day plan of your visit",
          required: true
        },
        {
          name: "Accommodation Bookings",
          description: "Hotel reservations or invitation letter if staying with friends/family",
          required: true
        },
        {
          name: "Return Flight Tickets",
          description: "Confirmed booking showing return date",
          required: false
        }
      ]
    }
  ],

  // Visa Costs and Processing Times
  visaCosts: [
    {
      type: "Standard Visitor",
      duration: "Up to 6 months",
      fee: "£100",
      processingTime: "3 weeks"
    },
    {
      type: "Standard Visitor",
      duration: "2 years",
      fee: "£376",
      processingTime: "3 weeks"
    },
    {
      type: "Standard Visitor",
      duration: "5 years",
      fee: "£670",
      processingTime: "3 weeks"
    },
    {
      type: "Standard Visitor",
      duration: "10 years",
      fee: "£837",
      processingTime: "3 weeks"
    },
    {
      type: "Priority Service",
      duration: "Any",
      fee: "+£500",
      processingTime: "5 working days"
    },
    {
      type: "Super Priority",
      duration: "Any",
      fee: "+£800",
      processingTime: "24 hours"
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

  // UK Healthcare Requirements
  healthcare: {
    insurance: {
      required: true,
      minimumCoverage: "£30,000",
      recommendedProviders: [
        "International providers with UK coverage",
        "UK-based insurance companies"
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
      emergencyNumber: "999 or 112",
      nhsHelpline: "111",
      nearestHospitals: "Available through NHS website"
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
        question: "How long can I stay in the UK on a Standard Visitor visa?",
        answer: "You can usually stay in the UK for up to 6 months. In some cases, you might be able to stay for longer if you're coming for private medical treatment."
      },
      {
        question: "Can I extend my UK visitor visa?",
        answer: "Generally, you cannot extend a visitor visa. You must leave the UK when your visa expires and apply for a new one if needed."
      }
    ],
    documentation: [
      {
        question: "Do I need to translate my documents?",
        answer: "Yes, any documents not in English or Welsh must be accompanied by a certified translation."
      },
      {
        question: "Is travel insurance required for a UK visitor visa?",
        answer: "While not mandatory, it's strongly recommended to have adequate travel insurance for your UK visit."
      }
    ],
    financial: [
      {
        question: "How much money do I need to show for a UK visitor visa?",
        answer: "There's no set amount, but you need to show you can support yourself and any dependents during your stay without working or accessing public funds."
      },
      {
        question: "Can I use a sponsor's financial documents?",
        answer: "Yes, if someone is sponsoring your visit, you'll need their financial documents and a letter confirming their sponsorship."
      }
    ],
    application: [
      {
        question: "Can I apply for a UK visitor visa online?",
        answer: "Yes, applications are submitted online through the UK government website. After submitting the online application, you'll need to attend a visa application centre to provide biometric information."
      },
      {
        question: "How far in advance should I apply?",
        answer: "It's recommended to apply at least 3 months before your intended travel date. The earliest you can apply is 3 months before your planned trip."
      }
    ],
    travel: [
      {
        question: "Do I need to book flights before applying?",
        answer: "While not mandatory, having flight reservations can strengthen your application by showing clear travel plans. However, it's recommended to book refundable tickets."
      },
      {
        question: "Can I visit other countries with a UK visitor visa?",
        answer: "No, the UK visitor visa is only valid for entry to the UK. You'll need separate visas for other countries, including Ireland."
      }
    ],
    restrictions: [
      {
        question: "Can I work on a visitor visa?",
        answer: "No, you cannot undertake paid or unpaid work on a visitor visa. However, certain business activities like attending meetings are permitted."
      },
      {
        question: "Can I study on a visitor visa?",
        answer: "You can study for up to 6 months at an accredited institution, but this shouldn't be the main purpose of your visit."
      }
    ]
  },

  // Travel Tips and Best Practices
  travelTips: {
    beforeTravel: [
      {
        title: "Currency Exchange",
        description: "Exchange some money into British Pounds before travel, but get the bulk at UK banks for better rates",
        category: "financial"
      },
      {
        title: "Weather Preparation",
        description: "Pack for variable weather conditions - UK weather can change rapidly",
        category: "preparation"
      },
      {
        title: "Transport Cards",
        description: "Consider getting an Oyster card or contactless payment card for public transport",
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
        description: "Save important UK emergency numbers: 999 (Emergency), 101 (Non-emergency police)",
        category: "safety"
      },
      {
        title: "Public Transport",
        description: "Use apps like Citymapper for easy navigation of public transport systems",
        category: "transportation"
      }
    ],
    culturalAwareness: [
      {
        title: "Queuing",
        description: "Always respect queues (lines) - queue jumping is considered very rude in the UK",
        category: "etiquette"
      },
      {
        title: "Tipping",
        description: "Tipping is appreciated but not mandatory - 10-15% is standard in restaurants",
        category: "etiquette"
      },
      {
        title: "Punctuality",
        description: "Being on time is important in British culture, especially for appointments",
        category: "etiquette"
      }
    ]
  },

  // Biometric Information
  biometrics: {
    requirement: "All visa applicants must provide biometric information (fingerprints and photograph)",
    locations: [
      "UK Visa Application Centres (VACs)",
      "Partner locations",
      "Premium Service Centres"
    ],
    process: [
      "Book an appointment at your nearest VAC",
      "Bring original passport and appointment confirmation",
      "Provide fingerprints and digital photograph",
      "Process takes approximately 10-15 minutes"
    ],
    cost: "Included in standard visa application fee"
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
      applicationFee: "£993",
      priorityService: "£500 additional",
      superPriorityService: "£800 additional"
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
