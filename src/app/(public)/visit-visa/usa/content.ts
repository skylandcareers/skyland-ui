// Content types and data for USA Visit Visa (B-1/B-2)

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

export const usaVisitVisaContent = {
  meta: {
    lastUpdated: new Date().toISOString(),
    version: "2.0"
  },

  // Core Visa Information
  visaTypes: {
    B1: {
      title: "Business Visitor Visa (B1)",
      description: "For individuals traveling to the US for business activities",
      permittedActivities: [
        "Consult with business associates",
        "Attend scientific, educational, professional or business conventions",
        "Settle an estate",
        "Negotiate contracts"
      ],
      prohibitedActivities: [
        "Gainful employment",
        "Running a business",
        "Receiving payment from US sources"
      ]
    },
    B2: {
      title: "Tourism/Visitor Visa (B2)",
      description: "For tourism, medical treatment, and visiting friends/family",
      permittedActivities: [
        "Tourism/vacation",
        "Visiting friends/relatives",
        "Medical treatment",
        "Participation in social events",
        "Short recreational study"
      ],
      prohibitedActivities: [
        "Enrollment in degree programs",
        "Paid performances",
        "Professional sports competitions"
      ]
    },
    B1B2: {
      title: "Combined B1/B2 Visa",
      description: "For those needing to conduct both business and tourism activities",
      benefits: [
        "Single visa for multiple purposes",
        "10-year validity (for most countries)",
        "Multiple entries allowed"
      ]
    }
  },

  // Detailed Eligibility Requirements
  eligibility: {
    general: {
      passport: "Valid for at least 6 months beyond intended stay",
      intent: "Must demonstrate non-immigrant intent",
      funds: "Sufficient to cover all expenses",
      ties: "Demonstrate strong ties to home country"
    },
    financial: {
      minimumAmount: "Minimum $2,000 per month of stay",
      proofRequirements: [
        "Bank statements (last 6 months)",
        "Pay stubs (last 3 months)",
        "Tax returns (last 2 years)",
        "Sponsorship documents if applicable"
      ],
      sponsorship: {
        requiredDocs: [
          "Form I-134 (Affidavit of Support)",
          "Sponsor's tax returns",
          "Sponsor's employment letter"
        ]
      }
    },
    documentation: {
      mandatory: [
        "DS-160 confirmation page",
        "Visa application fee receipt",
        "Passport-style photo",
        "Previous US visas if applicable"
      ],
      recommended: [
        "Travel itinerary",
        "Hotel reservations",
        "Invitation letters",
        "Employment verification"
      ]
    },
    specialCases: {
      students: {
        requirements: [
          "Letter from current school",
          "Proof of enrollment",
          "Leave approval"
        ]
      },
      retirees: {
        requirements: [
          "Pension statements",
          "Retirement account statements",
          "Property ownership docs"
        ]
      },
      medical: {
        requirements: [
          "Doctor's diagnosis",
          "Treatment plan from US facility",
          "Financial arrangements proof"
        ]
      }
    }
  },

  // Comprehensive Application Guide
  application: {
    steps: [
      {
        number: 1,
        title: "Complete DS-160 Form",
        details: "Online nonimmigrant visa application with personal, travel, and security information",
        tips: [
          "Save application ID for retrieval",
          "Print confirmation page",
          "Answer all questions truthfully"
        ],
        time: "30-60 minutes"
      },
      {
        number: 2,
        title: "Pay Visa Fee",
        details: "$185 Machine Readable Visa (MRV) fee payment",
        methods: [
          "Online payment",
          "Bank transfer",
          "Cash at designated locations"
        ],
        note: "Fee is non-refundable even if visa is denied"
      },
      {
        number: 3,
        title: "Schedule Interview",
        details: "Book appointment at nearest US Embassy/Consulate",
        tips: [
          "Check multiple locations for earliest availability",
          "Premium appointments may be available for extra fee",
          "Reschedule if better slot opens up"
        ]
      },
      {
        number: 4,
        title: "Gather Documents",
        details: "Prepare all required supporting documents",
        checklist: [
          "Passport",
          "DS-160 confirmation",
          "Fee receipt",
          "Photo",
          "Financial evidence",
          "Travel plans"
        ]
      },
      {
        number: 5,
        title: "Attend Interview",
        details: "In-person interview with consular officer",
        preparation: [
          "Arrive 30 minutes early",
          "Dress professionally",
          "Bring all documents in organized folder",
          "Prepare for common questions"
        ]
      }
    ],
    processing: {
      standard: "3-5 weeks",
      expedited: "2 weeks (additional $2,500 fee)",
      factors: [
        "Applicant's nationality",
        "Security clearance requirements",
        "Embassy workload",
        "Time of year"
      ]
    }
  },

  // 50+ Comprehensive FAQs Organized by Category
  faqs: {
    general: [
      {
        question: "How early should I apply for my US visitor visa?",
        answer: "We recommend applying at least 3-4 months before your planned travel date to account for processing delays and interview wait times."
      },
      {
        question: "Can I apply for a B1/B2 visa without an interview?",
        answer: "Interview waivers are only available for certain renewals. First-time applicants and most renewals require in-person interviews."
      }
    ],
    documentation: [
      {
        question: "Do I need to translate my documents into English?",
        answer: "Yes, all supporting documents not in English must include certified translations along with the originals."
      },
      {
        question: "Is travel insurance mandatory for a US visitor visa?",
        answer: "While not mandatory, strongly recommended as medical costs in the US are extremely high without insurance."
      }
    ],
    financial: [
      {
        question: "How much bank balance is required for US visitor visa?",
        answer: "There's no fixed amount, but we recommend showing at least $5,000-$10,000 for a 2-3 week trip, plus more for longer stays."
      },
      {
        question: "Can I use a sponsor's financial documents?",
        answer: "Yes, but you'll need a notarized affidavit of support (Form I-134) and their complete financial records including tax returns."
      }
    ],
    interview: [
      {
        question: "What questions are asked in US visa interview?",
        answer: "Common questions include: Purpose of visit, ties to home country, financial support, travel history, and previous US visits."
      },
      {
        question: "How long does the visa interview take?",
        answer: "The actual interview typically lasts 3-5 minutes, but plan for 2-3 hours including security checks and waiting time."
      }
    ],
    validity: [
      {
        question: "How long is a US visitor visa valid?",
        answer: "Typically 10 years for most countries, but some may receive shorter validities based on nationality or individual circumstances."
      },
      {
        question: "Does visa validity mean I can stay that long?",
        answer: "No, validity is how long you can use the visa to enter. Duration of stay is determined by CBP at entry (max 6 months typically)."
      }
    ],
    entry: [
      {
        question: "Can I enter the US before my intended date?",
        answer: "Yes, you can enter anytime while the visa is valid, but be prepared to explain if arriving significantly earlier than stated in your application."
      },
      {
        question: "Can I visit Canada/Mexico and re-enter the US?",
        answer: "Yes, but your total stay in the US cannot exceed the original admission period without applying for extension."
      }
    ],
    restrictions: [
      {
        question: "Can I study on a B1/B2 visa?",
        answer: "Only short recreational courses are permitted. Degree programs require student visas (F1/M1)."
      },
      {
        question: "Can I volunteer on a visitor visa?",
        answer: "Only if the volunteering doesn't displace paid workers and is truly charitable (no regular volunteer work)."
      }
    ],
    changes: [
      {
        question: "How do I extend my stay in the US?",
        answer: "File Form I-539 before your authorized stay expires. Extensions aren't guaranteed and require valid reasons."
      },
      {
        question: "Can I change from B1/B2 to another visa status?",
        answer: "Possible in limited circumstances (like marriage to US citizen) but generally discouraged as it may violate visa terms."
      }
    ],
    denials: [
      {
        question: "How soon can I reapply after denial?",
        answer: "You can reapply immediately, but we recommend addressing the refusal reason first. Multiple quick reapplications without changes may hurt your case."
      },
      {
        question: "Does a US visa denial affect other countries?",
        answer: "Not directly, but some countries may ask about previous visa refusals during their application processes."
      }
    ]
  },

  mainBenefits: [
    {
      title: "Tourism and Leisure Travel",
      description: "Visit the United States for vacations, sightseeing, or meeting friends and family."
    },
    {
      title: "Business Activities (B-1)",
      description: "Attend business meetings, conferences, or negotiate contracts under a B-1 visa."
    },
    {
      title: "Medical Treatment",
      description: "Seek medical care at world-renowned hospitals and clinics."
    },
    {
      title: "Short-Term Educational or Training Programs",
      description: "Attend short non-credit courses or participate in brief training events."
    }
  ],
  visaRequirements: {
    intent: {
      title: "Non-Immigrant Intent",
      description: "Must prove strong ties to your home country and intent to return after your visit."
    },
    passport: {
      title: "Valid Passport",
      description: "A passport valid for at least 6 months beyond your intended stay."
    },
    financialProof: {
      title: "Proof of Funds",
      description: "Evidence that you can financially support yourself during the trip."
    },
    itinerary: {
      title: "Purpose and Plan",
      description: "Documented purpose of visit and clear travel plans (e.g., hotel booking, invitation letter)."
    }
  },
  applicationProcess: [
    {
      step: 1,
      title: "DS-160 Form Submission",
      description: "Complete the online non-immigrant visa application (Form DS-160)."
    },
    {
      step: 2,
      title: "Pay Visa Fee",
      description: "Pay the non-refundable application fee (typically $185)."
    },
    {
      step: 3,
      title: "Schedule Visa Interview",
      description: "Book an appointment at the nearest U.S. embassy or consulate."
    },
    {
      step: 4,
      title: "Attend Interview",
      description: "Attend the interview with all required documents. Biometrics may be collected."
    },
    {
      step: 5,
      title: "Visa Issuance",
      description: "If approved, your passport will be returned with the visa stamped inside."
    }
  ],

  // Interview Preparation
  interview: {
    commonQuestions: [
      {
        question: "Purpose of Visit",
        tips: [
          "Be specific about your travel plans",
          "Mention exact locations and duration",
          "Have a clear itinerary ready"
        ]
      },
      {
        question: "Ties to Home Country",
        tips: [
          "Current employment or business",
          "Family responsibilities",
          "Property ownership",
          "Future commitments"
        ]
      },
      {
        question: "Financial Capability",
        tips: [
          "Show sufficient savings",
          "Regular income proof",
          "Travel insurance",
          "Return ticket arrangements"
        ]
      }
    ],
    preparationTips: [
      {
        title: "Professional Appearance",
        details: "Dress formally in business attire, maintain good posture and eye contact"
      },
      {
        title: "Document Organization",
        details: "Arrange documents in a logical order, use tabs or folders for quick access"
      },
      {
        title: "Clear Communication",
        details: "Speak clearly, answer questions directly, be honest and concise"
      }
    ],
    dosDonts: {
      dos: [
        "Arrive 30 minutes early",
        "Listen carefully to questions",
        "Provide complete but concise answers",
        "Bring all required documents",
        "Stay calm and confident"
      ],
      donts: [
        "Don't memorize answers",
        "Don't provide unrequested information",
        "Don't argue with the officer",
        "Don't make up answers",
        "Don't bring unauthorized items"
      ]
    }
  },

  // Travel Tips
  travelTips: {
    beforeTravel: [
      {
        title: "Health Insurance",
        description: "Purchase comprehensive travel insurance covering medical emergencies"
      },
      {
        title: "Accommodation",
        description: "Book and document all accommodation for the entire stay"
      },
      {
        title: "Local Transportation",
        description: "Research and plan local transportation options"
      }
    ],
    duringStay: [
      {
        title: "Maintain Status",
        description: "Don't violate visa terms, avoid unauthorized work"
      },
      {
        title: "Keep Documents Safe",
        description: "Always carry required documents but keep copies separately"
      },
      {
        title: "Emergency Contacts",
        description: "Save important numbers including local embassy contacts"
      }
    ],
    customs: {
      allowed: [
        "Personal electronics",
        "Reasonable amount of clothing",
        "Prescribed medications with documentation",
        "Small gifts under $100 value"
      ],
      restricted: [
        "Food items",
        "Plants and seeds",
        "Medications without prescription",
        "Large amounts of cash"
      ]
    }
  },

  // Port of Entry Information
  portOfEntry: {
    process: [
      {
        step: "Immigration Check",
        details: "Present passport, visa, and completed I-94 form"
      },
      {
        step: "Customs Declaration",
        details: "Submit customs form and declare any restricted items"
      },
      {
        step: "Baggage Claim",
        details: "Collect luggage before final customs check"
      }
    ],
    requiredDocuments: [
      "Valid passport with visa",
      "Completed I-94 form",
      "Customs declaration form",
      "Travel itinerary",
      "Hotel reservations"
    ],
    tips: [
      "Answer officer questions truthfully",
      "Have documents easily accessible",
      "Remain patient during the process",
      "Follow all instructions carefully"
    ]
  },

  // Fee Structure
  feeStructure: {
    basic: [
      {
        type: "Visa Application (MRV) Fee",
        amount: 160,
        currency: "USD",
        notes: "Non-refundable, even if visa is denied"
      },
      {
        type: "Reciprocity Fee",
        amount: "Varies",
        currency: "USD",
        notes: "Based on applicant's nationality"
      }
    ],
    additional: [
      {
        service: "Expedited Processing",
        amount: 2500,
        currency: "USD",
        availability: "Subject to eligibility"
      },
      {
        service: "Courier Service",
        amount: "20-40",
        currency: "USD",
        availability: "Available in most locations"
      }
    ],
    paymentMethods: [
      {
        method: "Credit/Debit Cards",
        accepted: ["Visa", "MasterCard", "American Express"],
        notes: "Preferred payment method"
      },
      {
        method: "Bank Transfer",
        notes: "Available in select countries"
      }
    ]
  },

  // Rejection Prevention
  rejectionPrevention: {
    applicationIssues: [
      {
        issue: "Incomplete DS-160",
        prevention: "Double-check all sections before submission",
        importance: "Critical"
      },
      {
        issue: "Missing Documents",
        prevention: "Use comprehensive checklist",
        importance: "High"
      },
      {
        issue: "Insufficient Funds",
        prevention: "Show stable financial history",
        importance: "Critical"
      },
      {
        issue: "Travel History",
        prevention: "Explain any visa violations or overstays",
        importance: "High"
      }
    ],
    interviewIssues: [
      {
        issue: "Weak Home Ties",
        prevention: "Document employment, property, family commitments",
        importance: "Critical"
      },
      {
        issue: "Unclear Purpose",
        prevention: "Prepare detailed itinerary and plans",
        importance: "High"
      },
      {
        issue: "Communication",
        prevention: "Practice common interview questions",
        importance: "Medium"
      },
      {
        issue: "Previous Violations",
        prevention: "Address proactively with documentation",
        importance: "Critical"
      }
    ]
  },

  // Additional Resources
  resources: {
    officialWebsites: [
      {
        name: "DS-160 Form",
        url: "https://ceac.state.gov/genniv",
        description: "Online nonimmigrant visa application"
      },
      {
        name: "Appointment System",
        url: "https://ais.usvisa-info.com",
        description: "Schedule visa interview appointment"
      },
      {
        name: "US Embassy Locator",
        url: "https://www.usembassy.gov",
        description: "Find nearest US embassy or consulate"
      },
      {
        name: "Fee Calculator",
        url: "https://www.ustraveldocs.com/in/en/fee-calculator",
        description: "Calculate visa fees based on type and nationality"
      }
    ],
    emergencyContacts: [
      {
        name: "US Embassy Emergency",
        number: "+1-202-501-4444",
        availability: "24/7",
        purpose: "Emergency assistance for visa holders"
      },
      {
        name: "Visa Services Support",
        number: "+1-703-665-1000",
        availability: "Business hours",
        purpose: "General visa inquiries and support"
      }
    ]
  },

  // Post-Arrival Information
  postArrival: {
    firstSteps: [
      {
        action: "Complete I-94 Form",
        timing: "Upon arrival",
        details: "Available at www.cbp.gov/i94"
      },
      {
        action: "Register Address",
        timing: "Within 10 days",
        details: "If staying over 30 days"
      },
      {
        action: "Get Local Phone",
        timing: "First few days",
        details: "Important for emergency contacts"
      }
    ],
    usefulServices: [
      {
        category: "Transportation",
        options: [
          "Public Transit Apps",
          "Ride-sharing Services",
          "Car Rental Services"
        ]
      },
      {
        category: "Healthcare",
        options: [
          "Emergency Numbers",
          "Nearby Hospitals",
          "24/7 Pharmacies"
        ]
      },
      {
        category: "Communication",
        options: [
          "Local SIM Cards",
          "Wi-Fi Hotspots",
          "Internet Cafes"
        ]
      }
    ],
    safetyTips: [
      "Keep copies of all documents",
      "Save emergency numbers",
      "Register with home country embassy",
      "Know local emergency services"
    ]
  }
};

export const usaVisitVisaFAQs: FAQ[] = [
  {
    question: "How long can I stay in the U.S. on a visit visa?",
    answer: "Typically up to 6 months. The actual duration is determined at the port of entry by CBP officers."
  },
  {
    question: "Can I extend my B-1/B-2 visa stay?",
    answer: "Yes, you may apply to extend your stay before your authorized stay expires using Form I-539."
  },
  {
    question: "Can I work in the U.S. with a B-1/B-2 visa?",
    answer: "No, employment is strictly prohibited under a visit visa."
  },
  {
    question: "Do I need to book flights before applying for the visa?",
    answer: "It is not mandatory but having travel plans can help demonstrate the intent of your trip."
  },
  {
    question: "What if my visa application is denied?",
    answer: "You will be informed of the reason under section 214(b) or otherwise. You can reapply with new evidence."
  },
  {
    question: "How long does the application process take?",
    answer: "Timelines vary by country and season. Allow 2–6 weeks including interview availability."
  },
  {
    question: "Is travel insurance required for U.S. visitors?",
    answer: "Not mandatory, but highly recommended due to high healthcare costs in the U.S."
  },
  {
    question: "Can I visit family or friends in the U.S.?",
    answer: "Yes, visiting relatives is a valid reason under a B-2 visa. Invitation letters may support your case."
  }
];

export const usaVisitVisaTimeline: Record<string, TimelinePhase> = {
  preparation: {
    title: "Preparation Phase",
    duration: "1–2 weeks",
    tasks: [
      "Determine visa type (B-1 or B-2)",
      "Gather financial and travel documents",
      "Plan tentative itinerary"
    ]
  },
  application: {
    title: "Application Submission",
    duration: "1–2 weeks",
    tasks: [
      "Complete DS-160",
      "Pay visa fee",
      "Book visa interview"
    ]
  },
  interview: {
    title: "Interview and Processing",
    duration: "2–4 weeks",
    tasks: [
      "Attend embassy interview",
      "Submit biometrics (if applicable)",
      "Wait for visa decision"
    ]
  }
};

export const usaVisitVisaCities: CityVisit[] = [
  {
    name: "New York City",
    highlights: [
      "Statue of Liberty, Times Square, Central Park, Broadway shows",
      "World-class museums: The Met, MoMA, and the Museum of Natural History",
      "Diverse neighborhoods and global cuisine"
    ],
    travelTips:
      "Use the subway for budget-friendly transit. Book popular attractions in advance."
  },
  {
    name: "Los Angeles",
    highlights: [
      "Hollywood, Walk of Fame, and Universal Studios",
      "Santa Monica Beach and Venice Boardwalk",
      "Upscale shopping at Rodeo Drive"
    ],
    travelTips:
      "LA is spread out—consider renting a car or budgeting for rideshares."
  },
  {
    name: "Las Vegas",
    highlights: [
      "Iconic casinos and shows on The Strip",
      "Day trips to Grand Canyon or Hoover Dam",
      "Bellagio fountains and themed hotels"
    ],
    travelTips:
      "Book shows ahead and stay hydrated—desert heat is no joke!"
  },
  {
    name: "San Francisco",
    highlights: [
      "Golden Gate Bridge, Alcatraz Island, and cable cars",
      "Fisherman's Wharf and Pier 39",
      "Nearby wine country: Napa and Sonoma"
    ],
    travelTips:
      "Pack layers—it can be windy and cold even in summer."
  },
  {
    name: "Orlando",
    highlights: [
      "Walt Disney World and Universal Orlando",
      "Kennedy Space Center nearby",
      "Great for family-friendly entertainment"
    ],
    travelTips:
      "Buy theme park tickets in advance and stay hydrated during hot months."
  }
];
