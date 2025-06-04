// Content types and data for UK PR

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

export interface FAQ {
  question: string;
  answer: string;
}

interface TimelinePhase {
  title: string;
  duration: string;
  tasks: string[];
}

export const ukPRContent = {
  mainBenefits: [
    {
      title: "Free Healthcare (NHS)",
      description: "Access to the UK's National Health Service, providing comprehensive healthcare coverage for you and your family."
    },
    {
      title: "Education Benefits",
      description: "Access to state education for children and subsidized rates for higher education as a home student."
    },
    {
      title: "Social Security Access",
      description: "Eligibility for various UK benefits and social security programs after qualifying period."
    },
    {
      title: "Work Freedom",
      description: "Unrestricted right to work, start a business, or be self-employed in the UK."
    },
    {
      title: "Path to Citizenship",
      description: "Eligibility to apply for British citizenship after holding ILR for 12 months."
    }
  ],
  visaRequirements: {
    residencyPeriod: {
      title: "Continuous Residence",
      description: "Must have lived in the UK for 5 years under an eligible visa category."
    },
    englishLanguage: {
      title: "English Proficiency",
      description: "Must pass English language test at B1 CEFR level or higher, unless exempt."
    },
    knowledgeTest: {
      title: "Life in the UK Test",
      description: "Must pass the Life in the UK test demonstrating knowledge of British culture and history."
    },
    absenceLimit: {
      title: "Absence Restrictions",
      description: "No more than 180 days absence in any 12-month period during the 5-year qualifying period."
    }
  },
  applicationProcess: [
    {
      step: 1,
      title: "Eligibility Check",
      description: "Verify you meet residence, English language, and other requirements."
    },
    {
      step: 2,
      title: "Life in the UK Test",
      description: "Book and pass the Life in the UK test at an approved center."
    },
    {
      step: 3,
      title: "Document Preparation",
      description: "Gather required documents including residence proof and language certificates."
    },
    {
      step: 4,
      title: "Application Submission",
      description: "Submit online application, pay fees, and provide biometrics."
    }
  ]
};

export const cityComparisons: Record<string, City> = {
  london: {
    name: "London",
    region: "Greater London",
    population: "9 million",
    medianHousePrice: "£650,000",
    averageSalary: "£45,000",
    keyIndustries: ["Finance", "Technology", "Media", "Professional Services"],
    lifestyle: {
      highlights: ["Cultural Hub", "Global Business Center", "Historic Sites", "Diverse Communities"]
    },
    universities: ["Imperial College", "UCL", "LSE", "King's College"]
  },
  manchester: {
    name: "Manchester",
    region: "North West England",
    population: "2.8 million",
    medianHousePrice: "£250,000",
    averageSalary: "£35,000",
    keyIndustries: ["Digital Tech", "Media", "Manufacturing", "Healthcare"],
    lifestyle: {
      highlights: ["Affordable Living", "Rich Culture", "Sports Scene", "Tech Hub"]
    },
    universities: ["University of Manchester", "Manchester Metropolitan", "Salford University"]
  },
  birmingham: {
    name: "Birmingham",
    region: "West Midlands",
    population: "2.6 million",
    medianHousePrice: "£230,000",
    averageSalary: "£33,000",
    keyIndustries: ["Manufacturing", "Business Services", "Digital", "Life Sciences"],
    lifestyle: {
      highlights: ["Cultural Diversity", "Central Location", "Shopping", "Urban Renewal"]
    },
    universities: ["University of Birmingham", "Aston University", "Birmingham City University"]
  },
  edinburgh: {
    name: "Edinburgh",
    region: "Scotland",
    population: "500,000",
    medianHousePrice: "£300,000",
    averageSalary: "£38,000",
    keyIndustries: ["Finance", "Tourism", "Tech Startups", "Education"],
    lifestyle: {
      highlights: ["Historic City", "Festival City", "Quality of Life", "Natural Beauty"]
    },
    universities: ["University of Edinburgh", "Heriot-Watt University", "Edinburgh Napier"]
  }
};

export const jobMarketStats = {
  highDemandSectors: [
    {
      sector: "Technology",
      growth: "+12% annually",
      topRoles: ["Software Engineer", "Data Scientist", "Cloud Architect"],
      averageSalaries: {
        entry: "£35,000",
        mid: "£60,000",
        senior: "£90,000"
      }
    },
    {
      sector: "Healthcare",
      growth: "+8% annually",
      topRoles: ["NHS Doctors", "Specialist Nurses", "Healthcare Managers"],
      averageSalaries: {
        entry: "£30,000",
        mid: "£45,000",
        senior: "£70,000"
      }
    },
    {
      sector: "Finance",
      growth: "+6% annually",
      topRoles: ["Financial Analyst", "Investment Manager", "Fintech Developer"],
      averageSalaries: {
        entry: "£40,000",
        mid: "£65,000",
        senior: "£100,000"
      }
    }
  ],
  employmentTrends: {
    remoteWork: {
      percentage: "35% of workforce",
      growthRate: "+20% year over year",
      popularIndustries: ["Technology", "Finance", "Professional Services", "Media"]
    },
    contractWork: {
      percentage: "15% of positions",
      growthRate: "+10% annually",
      benefits: [
        "Higher daily rates",
        "Flexible working",
        "Project variety",
        "Work-life balance"
      ]
    }
  }
};

export const ukPRFAQs: FAQ[] = [
  {
    question: "What is Indefinite Leave to Remain (ILR)?",
    answer: "ILR is the UK equivalent of permanent residency, allowing you to live and work in the UK without any immigration restrictions. It's a step before British citizenship and removes most visa conditions."
  },
  {
    question: "How long do I need to live in the UK before applying for ILR?",
    answer: "Generally, you need to have lived in the UK for 5 years under an eligible visa category. However, some routes like Global Talent or Investor visas may qualify for accelerated 2-3 year routes."
  },
  {
    question: "What are the main eligibility requirements for ILR?",
    answer: "Key requirements include: continuous residence of 5 years, no excessive absences (max 180 days per year), passing the Life in the UK test, meeting English language requirements (B1 level), and having a valid visa status."
  },
  {
    question: "How much does an ILR application cost?",
    answer: "As of 2024, the standard ILR application fee is £2,404 per person. Additional costs include the Life in the UK test (£50), English language test (varies), and optional priority services."
  },
  {
    question: "What is the Life in the UK test?",
    answer: "It's a computer-based test covering British history, culture, laws, and traditions. You need to score 75% or higher to pass. The test costs £50 and contains 24 questions to be completed in 45 minutes."
  },
  {
    question: "What level of English is required for ILR?",
    answer: "You need to demonstrate English language ability at CEFR level B1 or higher through an approved test (IELTS, Trinity, etc.) or a degree taught in English. Some nationalities and age groups are exempt."
  },
  {
    question: "How is the continuous residence period calculated?",
    answer: "The 5-year period is counted backward from your application date. You must not have been outside the UK for more than 180 days in any 12-month period during these 5 years."
  },
  {
    question: "Can I apply for ILR if I've changed employers?",
    answer: "Yes, changing employers doesn't affect your ILR eligibility as long as you maintained valid visa status throughout and met all other requirements."
  },
  {
    question: "What happens if I fail the Life in the UK test?",
    answer: "You can retake the test as many times as needed, but must pay the fee each time. It's recommended to wait at least 7 days before retaking and use this time to study areas where you struggled."
  },
  {
    question: "Do I need to maintain my income level for ILR?",
    answer: "While specific income requirements vary by visa route, you generally need to show you can maintain yourself without public funds. Skilled Worker visa holders must meet the relevant salary threshold."
  },
  {
    question: "Can my family members apply for ILR with me?",
    answer: "Yes, dependent family members can apply together if they meet the eligibility criteria. Each applicant pays separate fees and must meet individual requirements like the English language test."
  },
  {
    question: "What documents are needed for an ILR application?",
    answer: "Key documents include passport, BRP, proof of continuous residence, employment records, Life in the UK test pass certificate, English language evidence, and tax records. Specific requirements vary by visa route."
  },
  {
    question: "How long does ILR processing take?",
    answer: "Standard processing takes 6 months. Super Priority service (24 hours) and Priority service (5 working days) are available for additional fees, subject to availability."
  },
  {
    question: "Can I travel while my ILR application is pending?",
    answer: "It's not recommended as leaving the UK during processing could invalidate your application. If travel is essential, consult an immigration advisor first."
  },
  {
    question: "What are the benefits of having ILR?",
    answer: "Benefits include: unrestricted work rights, access to NHS, education benefits, social security access, ability to start a business, and eligibility for British citizenship after 12 months."
  },
  {
    question: "Can ILR be lost or revoked?",
    answer: "Yes, ILR can be lost if you spend more than 2 consecutive years outside the UK, commit serious crimes, or obtained it through deception. Regular visits to the UK help maintain status."
  },
  {
    question: "Do I need to pass the English test if I have a UK degree?",
    answer: "No, if your degree was taught in English and is recognized by UK NARIC. You'll need to provide evidence of the qualification and its teaching language."
  },
  {
    question: "Can I apply for ILR before my 5 years are complete?",
    answer: "You can apply up to 28 days before completing your qualifying period. Applications made too early will be rejected with no fee refund."
  },
  {
    question: "What if I've had multiple visa types during my 5 years?",
    answer: "Different visa combinations may affect eligibility. Some visa types can be combined, while others must be completed separately. Professional advice is recommended for complex cases."
  },
  {
    question: "How does maternity leave affect ILR applications?",
    answer: "Authorized maternity leave doesn't negatively impact your application. Keep evidence of your leave period and maintain contact with your employer."
  },
  {
    question: "Can I apply for ILR with criminal convictions?",
    answer: "Minor offenses may not affect your application, but serious crimes can lead to rejection. All convictions must be declared, and legal advice is strongly recommended."
  },
  {
    question: "What happens if my ILR application is refused?",
    answer: "You may be able to reapply, addressing the reasons for refusal, or appeal the decision if eligible. Your current visa status remains until its expiry date."
  },
  {
    question: "Can I use my ILR to work in other countries?",
    answer: "ILR only grants rights within the UK. For EU/EEA countries, you'll need to follow their specific immigration rules."
  },
  {
    question: "Do I need to pay the Immigration Health Surcharge for ILR?",
    answer: "No, the IHS is not required for ILR applications. Once granted ILR, you have free access to the NHS."
  },
  {
    question: "Can I apply for benefits with ILR?",
    answer: "Yes, ILR holders have access to public funds and benefits, subject to the same eligibility criteria as British citizens."
  },
  {
    question: "How soon can I apply for citizenship after ILR?",
    answer: "You can apply for British citizenship 12 months after receiving ILR, provided you meet other citizenship requirements."
  },
  {
    question: "What is the difference between ILR and citizenship?",
    answer: "ILR grants permanent residence rights but can be lost after long absences. Citizenship provides additional rights like a British passport and cannot be lost through absence."
  },
  {
    question: "Can I sponsor family members after getting ILR?",
    answer: "Yes, ILR holders can sponsor eligible family members under the family visa route, subject to meeting financial and other requirements."
  },
  {
    question: "Do I need to inform UKVI if I change address with ILR?",
    answer: "No, once you have ILR, you don't need to report address changes to UKVI. However, keep your BRP safe and report if lost."
  },
  {
    question: "Can I start a business after getting ILR?",
    answer: "Yes, ILR holders have no restrictions on starting businesses or being self-employed in the UK."
  },
  {
    question: "What if I can't meet the English language requirement?",
    answer: "Exemptions exist for certain nationalities, those over 65, and those with physical/mental conditions. Evidence must be provided for exemptions."
  },
  {
    question: "How do I prove continuous residence?",
    answer: "Through bank statements, utility bills, council tax letters, employment records, and P60s covering the 5-year period. Gaps must be explained."
  },
  {
    question: "Can I apply for ILR if I'm unemployed?",
    answer: "It depends on your visa type. Some routes require continuous employment, while others don't. Seek professional advice for your specific situation."
  },
  {
    question: "What if I've been on benefits during my qualifying period?",
    answer: "Legal benefit claims (e.g., during maternity leave) shouldn't affect your application. Unauthorized public funds use can lead to refusal."
  },
  {
    question: "Do I need to maintain private health insurance with ILR?",
    answer: "No, ILR holders have full access to the NHS and don't need private insurance, though you may choose to maintain it."
  },
  {
    question: "Can I use my foreign driving license with ILR?",
    answer: "You can use a foreign license for up to 12 months after becoming resident. After that, you need to obtain a UK license."
  },
  {
    question: "What happens to my ILR if I get divorced?",
    answer: "ILR granted independently of marriage is unaffected by divorce. If ILR was granted as a spouse, seek legal advice about your status."
  },
  {
    question: "Can I apply for ILR if I've claimed asylum?",
    answer: "Yes, after 5 years of refugee status. Different rules apply for asylum seekers and refugees."
  },
  {
    question: "Do I need a lawyer for my ILR application?",
    answer: "While not mandatory, professional help is recommended for complex cases or if you're unsure about eligibility or documentation."
  },
  {
    question: "What if I've been outside the UK due to COVID-19?",
    answer: "UKVI may show flexibility for COVID-related absences. Keep evidence of why travel was necessary or prevented return."
  },
  {
    question: "Can I apply for ILR from outside the UK?",
    answer: "Generally no, ILR applications must be made while in the UK. Returning residents may apply to resume their ILR status."
  },
  {
    question: "What is the SET(O) form?",
    answer: "SET(O) is the application form for ILR under various work and residence categories. Different forms exist for family or protection routes."
  },
  {
    question: "Do I need to take the Life in the UK test in English?",
    answer: "Yes, the test is only available in English, Welsh, or Scottish Gaelic. Translation or interpretation is not permitted."
  },
  {
    question: "Can I work during my ILR application processing?",
    answer: "Yes, you can continue working under your current visa conditions while your ILR application is being processed."
  },
  {
    question: "What if I need to travel urgently during processing?",
    answer: "You can request your passport back by withdrawing your application, but this may delay processing and require a new application fee."
  },
  {
    question: "Can I study with ILR?",
    answer: "Yes, ILR holders can study at any level and qualify for home fee status and student finance after three years' residence."
  },
  {
    question: "What if my passport expires during the ILR process?",
    answer: "You should renew your passport before applying. If it expires during processing, you'll need to update UKVI with new details."
  },
  {
    question: "Can I use my ILR to live in Scotland, Wales, or Northern Ireland?",
    answer: "Yes, ILR grants residence rights throughout the United Kingdom, including all four nations."
  },
  {
    question: "Do I need to declare all my absences from the UK?",
    answer: "Yes, you must declare all absences during the qualifying period. Keep accurate records including travel documents and tickets."
  },
  {
    question: "What happens if I make a mistake on my application?",
    answer: "Minor errors can be corrected during processing. Significant mistakes or omissions could lead to refusal. Be thorough and honest."
  },
  {
    question: "Can I expedite my ILR application?",
    answer: "Yes, through Super Priority (24 hours) or Priority (5 working days) services, subject to availability and additional fees."
  },
  {
    question: "What evidence of income is required for ILR?",
    answer: "Requirements vary by route but typically include payslips, bank statements, P60s, and employment contracts covering the qualifying period."
  },
  {
    question: "Can I apply for a mortgage with ILR?",
    answer: "Yes, ILR holders can apply for mortgages and are often viewed more favorably by lenders than those on temporary visas."
  }
];

export const prVisaTimeline: Record<string, TimelinePhase> = {
  preparation: {
    title: "Preparation Phase",
    duration: "3-6 months",
    tasks: [
      "Check eligibility requirements",
      "Prepare for Life in the UK test",
      "Take English language test if needed",
      "Calculate absences from UK"
    ]
  },
  documentation: {
    title: "Document Collection",
    duration: "1-2 months",
    tasks: [
      "Gather residence proof",
      "Compile employment history",
      "Obtain tax records",
      "Prepare financial documents"
    ]
  },
  application: {
    title: "Application Process",
    duration: "1 month",
    tasks: [
      "Complete online application",
      "Pay application fees",
      "Book biometric appointment",
      "Submit supporting documents"
    ]
  },
  processing: {
    title: "Processing Phase",
    duration: "6 months standard",
    tasks: [
      "Application review",
      "Respond to queries if any",
      "Biometric residence permit",
      "Final decision"
    ]
  }
};

export const lifestyleGuide = {
  healthcare: {
    system: "National Health Service (NHS)",
    coverage: [
      "GP Services",
      "Hospital Care",
      "Emergency Services",
      "Maternity Care"
    ],
    waiting: "Immediate access with ILR",
    private: "Private healthcare options available"
  },
  education: {
    public: {
      cost: "Free state education ages 5-18",
      quality: "High standard curriculum",
      options: "State and grammar schools"
    },
    higher: {
      types: ["Universities", "Colleges", "Vocational Training"],
      costs: "Home student fees with ILR",
      funding: "Access to student loans"
    }
  },
  housing: {
    types: ["Flats", "Houses", "Terraced Homes", "New Builds"],
    markets: {
      rental: "Active rental market in cities",
      purchase: "Various mortgage options"
    },
    regions: {
      london: "Highest costs",
      southeast: "Above average prices",
      north: "More affordable options",
      scotland: "Varied market"
    }
  }
};

export const additionalResources = {
  usefulLinks: [
    {
      title: "UK Government Visa Portal",
      url: "https://www.gov.uk/settle-in-the-uk",
      description: "Official government resource for ILR applications"
    },
    {
      title: "Life in the UK Test Booking",
      url: "https://www.gov.uk/life-in-the-uk-test",
      description: "Official test booking service"
    },
    {
      title: "English Language Test Centers",
      url: "https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt",
      description: "Approved test center locations"
    }
  ],
  emergencyContacts: {
    "UKVI Contact Centre": "+44 300 123 2241",
    "NHS Emergency": "999",
    "Non-Emergency Healthcare": "111"
  },
  processingTools: {
    applicationStatus: "https://www.gov.uk/track-your-visa-application",
    processingTimes: "https://www.gov.uk/visa-processing-times",
    feeCalculator: "https://www.gov.uk/visa-fees"
  }
}; 