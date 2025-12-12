// Content types and data for New Zealand PR

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

export interface City {
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

export interface Sector {
  sector: string;
  growth: string;
  topRoles: string[];
  averageSalaries: {
    entry: string;
    mid: string;
    senior: string;
  };
}

export interface EmploymentTrends {
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
}

export interface PointsCategory {
  category: string;
  maxPoints: number;
  description: string;
}

export interface PointsSystem {
  categories: PointsCategory[];
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface TimelinePhase {
  title: string;
  duration: string;
  tasks: string[];
}

export const newZealandPRContent = {
  mainBenefits: [
    {
      title: "Universal Healthcare",
      description: "Access to New Zealand's comprehensive public healthcare system for you and your family."
    },
    {
      title: "World-Class Education",
      description: "Access to high-quality education at all levels with subsidized rates for permanent residents."
    },
    {
      title: "Social Security",
      description: "Access to social security benefits, superannuation, and family support payments."
    },
    {
      title: "Work-Life Balance",
      description: "Enjoy New Zealand's renowned lifestyle with excellent work-life balance and outdoor opportunities."
    },
    {
      title: "Path to Citizenship",
      description: "Eligibility to apply for New Zealand citizenship after 5 years of residence."
    }
  ],
  visaRequirements: {
    skilledMigrant: {
      title: "Skilled Migrant Category",
      description: "Must meet points threshold and have skills in demand. Current threshold is 160 points."
    },
    healthRequirements: {
      title: "Health Requirements",
      description: "Medical examination and chest x-ray to prove good health status."
    },
    characterRequirements: {
      title: "Character Requirements",
      description: "Police certificates from countries of residence and clean criminal record."
    },
    englishLanguage: {
      title: "English Proficiency",
      description: "IELTS score of 6.5 or higher across all bands, or equivalent English test."
    }
  },
  applicationProcess: [
    {
      step: 1,
      title: "Expression of Interest",
      description: "Submit EOI through the Skilled Migrant Category points system."
    },
    {
      step: 2,
      title: "ITA Receipt",
      description: "Receive Invitation to Apply if EOI is selected from pool."
    },
    {
      step: 3,
      title: "Residence Application",
      description: "Submit full residence application with supporting documents."
    },
    {
      step: 4,
      title: "Application Processing",
      description: "Wait for application assessment and decision."
    }
  ]
};

export const cityComparisons = {
  auckland: {
    name: "Auckland",
    region: "Auckland Region",
    population: "1.7 million",
    medianHousePrice: "NZD 1.1M",
    averageSalary: "NZD 75,000",
    keyIndustries: ["Technology", "Finance", "Healthcare", "Education"],
    lifestyle: {
      highlights: ["Harbour City", "Cultural Hub", "Beautiful Beaches", "International Atmosphere"]
    },
    universities: ["University of Auckland", "AUT University", "Massey University"]
  },
  wellington: {
    name: "Wellington",
    region: "Wellington Region",
    population: "420,000",
    medianHousePrice: "NZD 900,000",
    averageSalary: "NZD 80,000",
    keyIndustries: ["Government", "Tech Startups", "Creative Arts", "Professional Services"],
    lifestyle: {
      highlights: ["Capital City", "Arts Scene", "Cafe Culture", "Compact City"]
    },
    universities: ["Victoria University of Wellington", "Massey University Wellington"]
  },
  christchurch: {
    name: "Christchurch",
    region: "Canterbury",
    population: "400,000",
    medianHousePrice: "NZD 650,000",
    averageSalary: "NZD 70,000",
    keyIndustries: ["Agriculture", "Technology", "Manufacturing", "Tourism"],
    lifestyle: {
      highlights: ["Garden City", "Outdoor Recreation", "Rebuild Opportunities", "Family Friendly"]
    },
    universities: ["University of Canterbury", "Lincoln University", "Ara Institute"]
  }
};

export const jobMarketStats = {
  highDemandSectors: [
    {
      sector: "Information Technology",
      growth: "+8% annually",
      topRoles: ["Software Developer", "Business Analyst", "Cloud Engineer"],
      averageSalaries: {
        entry: "NZD 60,000",
        mid: "NZD 95,000",
        senior: "NZD 130,000"
      }
    },
    {
      sector: "Healthcare",
      growth: "+10% annually",
      topRoles: ["Registered Nurse", "Medical Specialist", "Healthcare Manager"],
      averageSalaries: {
        entry: "NZD 55,000",
        mid: "NZD 85,000",
        senior: "NZD 120,000"
      }
    },
    {
      sector: "Construction",
      growth: "+6% annually",
      topRoles: ["Project Manager", "Civil Engineer", "Quantity Surveyor"],
      averageSalaries: {
        entry: "NZD 65,000",
        mid: "NZD 90,000",
        senior: "NZD 125,000"
      }
    }
  ],
  employmentTrends: {
    remoteWork: {
      percentage: "25% of workforce",
      growthRate: "+15% year-over-year",
      popularIndustries: ["Technology", "Professional Services", "Education", "Finance"]
    },
    contractWork: {
      percentage: "20% of positions",
      growthRate: "+8% annually",
      benefits: [
        "Higher rates",
        "Flexible hours",
        "Project variety",
        "Work-life balance"
      ]
    }
  }
};

export const pointsSystem = {
  categories: [
    {
      category: "Age",
      maxPoints: 30,
      description: "Maximum points for ages 20-39, reducing for 40-55"
    },
    {
      category: "Work Experience",
      maxPoints: 50,
      description: "Points for years of skilled work experience, bonus for NZ experience"
    },
    {
      category: "Qualifications",
      maxPoints: 70,
      description: "Points based on level of qualification and NZ qualification bonus"
    },
    {
      category: "Job Offer",
      maxPoints: 50,
      description: "Points for skilled job offer in NZ, bonus for regions outside Auckland"
    },
    {
      category: "Partner's Qualifications",
      maxPoints: 20,
      description: "Additional points for partner's qualifications and job offer"
    }
  ],
  description: "The Skilled Migrant Category uses a points system to assess eligibility. You need at least 160 points to be selected from the EOI pool."
};

export const lifestyleGuide = {
  housing: {
    types: [
      "Modern Apartments",
      "Standalone Houses",
      "Townhouses",
      "Lifestyle Blocks"
    ],
    markets: {
      rental: "Average rental prices range from NZD 450-800 per week in major cities",
      purchase: "House prices range from NZD 600,000-1.2M in major cities"
    },
    regions: {
      auckland: "NZD 800+ per week",
      wellington: "NZD 600+ per week",
      christchurch: "NZD 450+ per week"
    }
  },
  healthcare: {
    system: "Public Healthcare System (ACC)",
    coverage: [
      "Hospital Care",
      "Emergency Services",
      "Maternity Care",
      "Accident Coverage"
    ],
    waiting: "Immediate access upon PR grant",
    private: "Optional private insurance available"
  }
};

export const newZealandPRFAQs: FAQ[] = [
  {
    question: "What are the main pathways to New Zealand PR?",
    answer: "The main pathways are Skilled Migrant Category, Work to Residence, Residence from Work, and Family Category. The most common is the Skilled Migrant Category requiring 160 points."
  },
  {
    question: "How long does it take to get PR in New Zealand?",
    answer: "Processing times vary from 6-12 months after application submission, depending on visa category and application completeness."
  },
  {
    question: "Can I include my family in my PR application?",
    answer: "Yes, you can include your partner, dependent children under 24, and in some cases, dependent parents."
  },
  {
    question: "What level of English is required?",
    answer: "Generally, an IELTS score of 6.5 or higher across all bands, or equivalent English test results."
  },
  {
    question: "Do I need a job offer for PR?",
    answer: "While not always mandatory, a job offer significantly increases points and chances of PR approval."
  },
  {
    question: "What is the Expression of Interest (EOI)?",
    answer: "EOI is the first step where you submit your details to be considered for PR. It remains valid for 6 months in the pool."
  },
  {
    question: "How much does PR application cost?",
    answer: "The application fee is approximately NZD 3,240 for the main applicant, plus additional fees for family members."
  },
  {
    question: "Can I travel while my PR is processing?",
    answer: "Yes, but inform Immigration NZ of travel plans. Some visa types may require you to be in NZ when decision is made."
  },
  {
    question: "What happens after PR is granted?",
    answer: "You'll receive a Resident Visa valid for 2 years, after which you can apply for Permanent Resident Visa if conditions are met."
  },
  {
    question: "Can I lose my PR status?",
    answer: "Yes, if you stay outside NZ for extended periods or breach visa conditions. Travel conditions apply for first 2 years."
  }
];

export const prVisaTimeline: Record<string, TimelinePhase> = {
  preparation: {
    title: "Preparation Phase",
    duration: "3-6 months",
    tasks: [
      "Gather required documents",
      "Take English language test",
      "Obtain qualification assessment",
      "Secure job offer (if applicable)"
    ]
  },
  submission: {
    title: "EOI Submission",
    duration: "2-3 weeks",
    tasks: [
      "Complete EOI form",
      "Calculate points",
      "Submit EOI to pool",
      "Pay EOI fee"
    ]
  },
  invitation: {
    title: "ITA Phase",
    duration: "2-3 months",
    tasks: [
      "Receive ITA if selected",
      "Gather additional documents",
      "Complete medical checks",
      "Obtain police certificates"
    ]
  },
  processing: {
    title: "Application Processing",
    duration: "6-12 months",
    tasks: [
      "Submit full application",
      "Respond to any requests",
      "Verification process",
      "Final decision"
    ]
  }
};

export const additionalResources = {
  usefulLinks: [
    {
      title: "Immigration New Zealand",
      url: "https://www.immigration.govt.nz",
      description: "Official government immigration website"
    },
    {
      title: "SkillsFinder NZ",
      url: "https://skillsfinder.immigration.govt.nz",
      description: "Tool to check if your skills are in demand"
    }
  ],
  emergencyContacts: {
    "Police Emergency": "111",
    "Healthline": "0800 611 116",
    "Immigration Contact Centre": "+64 9 914 4100"
  },
  processingTools: {
    pointsCalculator: "https://www.immigration.govt.nz/points-calculator",
    visaProcessingTimes: "https://www.immigration.govt.nz/processing-times"
  }
}; 