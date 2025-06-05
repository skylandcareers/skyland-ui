// Content types and data for Canadian Visit Visa

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
  tips: string[];
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

export const canadaVisitVisaContent = {
  meta: {
    lastUpdated: new Date().toISOString(),
    version: "1.0"
  },

  // Core Visa Information
  visaTypes: {
    tourist: {
      title: "Temporary Resident Visa (Visitor Visa)",
      description: "For tourism, visiting family/friends, or short recreational activities",
      permittedActivities: [
        "Tourism and leisure activities",
        "Visit family and friends",
        "Short-term study (up to 6 months)",
        "Attend conferences or meetings"
      ],
      prohibitedActivities: [
        "Work without a work permit",
        "Long-term study without a study permit",
        "Accessing public healthcare without proper insurance"
      ]
    },
    business: {
      title: "Business Visitor Visa",
      description: "For business-related activities without entering the Canadian labor market",
      permittedActivities: [
        "Attend business meetings",
        "Negotiate contracts",
        "Participate in international events",
        "After-sales service"
      ],
      prohibitedActivities: [
        "Working for a Canadian employer",
        "Receiving payment from a Canadian source",
        "Providing services to the public"
      ]
    },
    superVisa: {
      title: "Parent and Grandparent Super Visa",
      description: "For parents and grandparents of Canadian citizens/PRs to visit for up to 2 years",
      benefits: [
        "Multiple entries for up to 10 years",
        "Stays of up to 2 years per entry",
        "No need to renew status during stay"
      ]
    }
  },

  // Eligibility Requirements
  eligibility: {
    general: {
      passport: "Valid passport with at least 6 months validity",
      intent: "Proof you'll leave Canada at end of visit",
      funds: "Proof of financial support for your stay",
      ties: "Evidence of ties to home country (job, family, property)"
    },
    financial: {
      minimumAmount: "CAD 1,000 per month of stay (plus return ticket)",
      proofRequirements: [
        "Bank statements (last 4 months)",
        "Employment letter with salary",
        "Proof of assets",
        "Letter of financial support if applicable"
      ]
    },
    documentation: {
      mandatory: [
        "Valid passport",
        "Completed IMM 5257 form",
        "Two passport photos",
        "Proof of financial support",
        "Travel history",
        "Purpose of travel documents"
      ]
    }
  },

  // Application Process
  application: {
    steps: [
      {
        number: 1,
        title: "Determine Eligibility",
        description: "Check if you need a visa or eTA based on your nationality",
        icon: "Search",
        tips: [
          "Visa-exempt travelers need eTA instead",
          "Check IRCC's official requirements list",
          "Review all eligibility criteria carefully"
        ],
        time: "15-30 minutes",
        importantNote: "This step is crucial - applying incorrectly will cause delays"
      },
      {
        number: 2,
        title: "Prepare Documents",
        description: "Gather all required documents for your application",
        icon: "Folder",
        tips: [
          "Use our document checklist",
          "Scan all documents in color",
          "Check expiration dates"
        ],
        time: "1-3 days",
        documents: ["Passport", "Photos", "Financial Proof"]
      },
      {
        number: 3,
        title: "Create IRCC Account",
        description: "Register on Immigration, Refugees and Citizenship Canada website",
        icon: "User",
        tips: [
          "Use GCKey or Sign-In Partner for login",
          "Keep your credentials secure"
        ],
        time: "1-3 days"
      },
      {
        number: 4,
        title: "Complete Application",
        description: "Fill out IMM 5257 form and other required documents",
        icon: "FileText",
        tips: [
          "Answer all questions truthfully",
          "Validate forms before submission"
        ],
        time: "1-3 days"
      },
      {
        number: 5,
        title: "Pay Fees",
        description: "Pay CAD 100 processing fee + CAD 85 biometrics fee",
        icon: "CreditCard",
        tips: [
          "Keep payment receipt for records",
          "Fees are non-refundable"
        ],
        time: "1-3 days"
      },
      {
        number: 6,
        title: "Submit Biometrics",
        description: "Provide fingerprints and photo at VAC if required",
        icon: "Fingerprint",
        tips: [
          "Book appointment in advance",
          "Bring passport and biometrics instruction letter"
        ],
        time: "1-3 days"
      }
    ],
    processingTime: "14-30 days average (varies by country)",
    whereToApply: "Online through IRCC portal or at Visa Application Center"
  },

  // Document Requirements
  documentRequirements: [
    {
      category: "Identity Documents",
      documents: [
        {
          name: "Passport",
          description: "Valid for at least 6 months beyond stay",
          required: true
        },
        {
          name: "Photos",
          description: "Two recent passport photos (35x45mm)",
          required: true
        }
      ]
    },
    {
      category: "Financial Evidence",
      documents: [
        {
          name: "Bank Statements",
          description: "Last 4 months showing sufficient funds",
          required: true
        },
        {
          name: "Employment Letter",
          description: "Stating position, salary and approved leave",
          required: false
        }
      ]
    },
    {
      category: "Healthcare & Insurance",
      documents: [
        {
          name: "Minimum Coverage",
          description: "CAD 100,000 minimum recommended coverage",
          required: true
        },
        {
          name: "Recommended Providers",
          description: "Manulife, Blue Cross, Allianz Global Assistance, CAA, TuGo",
          required: false
        }
      ]
    }
  ],

  // Costs
  costs: [
    {
      type: "Single Entry",
      fee: "CAD 100",
      processingTime: "14-30 days"
    },
    {
      type: "Multiple Entry",
      fee: "CAD 100",
      processingTime: "14-30 days"
    },
    {
      type: "Super Visa",
      fee: "CAD 100",
      processingTime: "Variable (currently ~8 months)"
    }
  ],

  // Biometrics
  biometrics: {
    requirement: "Required for most applicants (ages 14-79)",
    cost: "CAD 85 per person",
    validity: "10 years",
    locations: "Visa Application Centers worldwide"
  },

  // Travel Tips
  travelTips: [
    {
      title: "Medical Insurance",
      description: "Strongly recommended for all visitors",
      category: "Health"
    },
    {
      title: "Border Procedures",
      description: "Be prepared to show proof of funds and return ticket",
      category: "Entry"
    }
  ],

  healthcare: {
    insurance: {
      minimumCoverage: "CAD 100,000 minimum recommended coverage",
      recommendedProviders: [
        "Manulife",
        "Blue Cross",
        "Allianz Global Assistance",
        "CAA",
        "TuGo"
      ],
      importantNotes: [
        "Not mandatory but strongly recommended",
        "Must cover COVID-19 related treatments",
        "Should include emergency evacuation"
      ]
    },
    emergencyInfo: {
      "911": "Emergency services number",
      "Non-emergency medical": "Contact provincial health services",
      "Travel advisory": "1-800-OCANADA (1-800-622-6232)"
    }
  }
};
