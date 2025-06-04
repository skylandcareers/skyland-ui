// Content types and data for Canada PR page

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
  province: string;
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

export const canadaPRContent = {
  mainBenefits: [
    {
      title: "Universal Healthcare",
      description: "Access to Canada's world-renowned public healthcare system for you and your family."
    },
    {
      title: "Quality Education",
      description: "Access to high-quality education at all levels, with subsidized rates for permanent residents."
    },
    {
      title: "Social Benefits",
      description: "Eligibility for social security benefits, pension plans, and child care benefits."
    },
    {
      title: "Career Opportunities",
      description: "Access to a strong job market with opportunities across various sectors."
    }
  ],
  visaRequirements: {
    ageLimit: {
      title: "Age Requirement",
      description: "Maximum age of 45 years at the time of application for optimal points."
    },
    englishProficiency: {
      title: "Language Skills",
      description: "Minimum CLB 7 in English or French (IELTS 6.0 or equivalent)."
    },
    skillAssessment: {
      title: "Education Assessment",
      description: "Educational Credential Assessment (ECA) from a designated organization."
    },
    workExperience: {
      title: "Work Experience",
      description: "Minimum 1 year of skilled work experience in NOC category 0, A, or B."
    }
  },
  applicationProcess: [
    {
      step: 1,
      title: "Express Entry Profile",
      description: "Create an Express Entry profile and enter the pool of candidates."
    },
    {
      step: 2,
      title: "CRS Score Calculation",
      description: "Receive a Comprehensive Ranking System (CRS) score based on your profile."
    },
    {
      step: 3,
      title: "ITA Receipt",
      description: "Receive an Invitation to Apply if your CRS score meets the cut-off."
    },
    {
      step: 4,
      title: "PR Application",
      description: "Submit a complete PR application within 60 days of receiving ITA."
    }
  ],
  processingTimes: {
    timeframes: {
      expressEntry: "6-8 months",
      provincialNominee: "12-18 months",
      familySponsorship: "12 months"
    }
  },
  visaCosts: {
    baseApplicationFee: "CAD 1,325",
    rightOfPermanentResidence: "CAD 500",
    dependentFees: "CAD 225 per child"
  },
  pointsSystem: {
    categories: [
      {
        category: "Age",
        maxPoints: 12,
        description: "Maximum points for candidates aged 18-35. Points decrease after age 35."
      },
      {
        category: "Education",
        maxPoints: 25,
        description: "Points based on level of education and Canadian equivalency."
      },
      {
        category: "Language Skills",
        maxPoints: 28,
        description: "Points for English and/or French proficiency in reading, writing, speaking, and listening."
      },
      {
        category: "Work Experience",
        maxPoints: 15,
        description: "Points for years of skilled work experience in NOC 0, A, or B categories."
      },
      {
        category: "Adaptability",
        maxPoints: 10,
        description: "Additional points for spouse's qualifications, Canadian education/work experience, etc."
      }
    ],
    description: "The Comprehensive Ranking System (CRS) is used to assess and score your profile. The maximum score is 1,200 points. Regular draws select candidates with the highest scores."
  }
};

export const cityComparisons: Record<string, City> = {
  toronto: {
    name: "Toronto",
    province: "Ontario",
    population: "2.93 million",
    medianHousePrice: "CAD 1.1M",
    averageSalary: "CAD 75,000",
    keyIndustries: ["Finance", "Technology", "Media", "Healthcare"],
    lifestyle: {
      highlights: ["Cultural Diversity", "Entertainment Hub", "Public Transit", "Food Scene"]
    },
    universities: ["University of Toronto", "York University", "Ryerson University"]
  },
  vancouver: {
    name: "Vancouver",
    province: "British Columbia",
    population: "675,000",
    medianHousePrice: "CAD 1.4M",
    averageSalary: "CAD 72,000",
    keyIndustries: ["Film Industry", "Tech Startups", "Tourism", "Green Technology"],
    lifestyle: {
      highlights: ["Natural Beauty", "Outdoor Activities", "Mild Climate", "Quality of Life"]
    },
    universities: ["UBC", "Simon Fraser University", "BCIT"]
  },
  montreal: {
    name: "Montreal",
    province: "Quebec",
    population: "1.78 million",
    medianHousePrice: "CAD 500,000",
    averageSalary: "CAD 65,000",
    keyIndustries: ["Gaming", "AI", "Aerospace", "Cultural Industries"],
    lifestyle: {
      highlights: ["Arts Scene", "European Charm", "Affordable Living", "Festivals"]
    },
    universities: ["McGill University", "Université de Montréal", "Concordia University"]
  },
  calgary: {
    name: "Calgary",
    province: "Alberta",
    population: "1.34 million",
    medianHousePrice: "CAD 450,000",
    averageSalary: "CAD 70,000",
    keyIndustries: ["Energy", "Agriculture", "Technology", "Finance"],
    lifestyle: {
      highlights: ["Low Tax Rates", "Clean City", "Mountain Access", "Family Friendly"]
    },
    universities: ["University of Calgary", "Mount Royal University", "SAIT"]
  }
};

export const jobMarketStats = {
  highDemandSectors: [
    {
      sector: "Technology",
      growth: "+15% annually",
      topRoles: ["Software Developer", "Data Scientist", "Cloud Engineer"],
      averageSalaries: {
        entry: "CAD 65,000",
        mid: "CAD 95,000",
        senior: "CAD 130,000"
      }
    },
    {
      sector: "Healthcare",
      growth: "+12% annually",
      topRoles: ["Registered Nurse", "Medical Technologist", "Healthcare Administrator"],
      averageSalaries: {
        entry: "CAD 60,000",
        mid: "CAD 85,000",
        senior: "CAD 110,000"
      }
    },
    {
      sector: "Finance",
      growth: "+8% annually",
      topRoles: ["Financial Analyst", "Investment Advisor", "Risk Manager"],
      averageSalaries: {
        entry: "CAD 55,000",
        mid: "CAD 90,000",
        senior: "CAD 125,000"
      }
    }
  ],
  employmentTrends: {
    remoteWork: {
      percentage: "32% of workforce",
      growthRate: "+25% year over year",
      popularIndustries: ["Technology", "Finance", "Education", "Consulting"]
    },
    contractWork: {
      percentage: "15% of positions",
      growthRate: "+10% annually",
      benefits: [
        "Higher hourly rates",
        "Flexible schedules",
        "Multiple client opportunities",
        "Skill development"
      ]
    }
  }
};

export const canadaPRFAQs: FAQ[] = [
  {
    question: "What is Canada's Express Entry system?",
    answer: "Express Entry is Canada's main immigration system for skilled workers. It manages applications for three federal programs: Federal Skilled Worker Program, Federal Skilled Trades Program, and Canadian Experience Class. The system uses a points-based system called the Comprehensive Ranking System (CRS) to rank candidates."
  },
  {
    question: "What is the minimum CRS score needed for Canada PR?",
    answer: "The CRS score cutoff varies with each draw, typically ranging from 450-500 points. However, Provincial Nominee Program candidates may qualify with lower scores. Recent draws have seen cutoffs as low as 365 points for specific program streams."
  },
  {
    question: "How long is the Canada PR visa valid?",
    answer: "A Canadian Permanent Resident (PR) card is typically valid for 5 years. You must maintain residency obligations (stay in Canada for at least 730 days in every 5-year period) to renew your PR status."
  },
  {
    question: "Can I bring my family with me on a Canada PR visa?",
    answer: "Yes, you can include your spouse/common-law partner and dependent children in your PR application. They will receive PR status along with you. Dependent children must be under 22 years old and not married or in a common-law relationship."
  },
  {
    question: "What documents are required for Canada PR application?",
    answer: "Key documents include passport, education credentials, language test results (IELTS/CELPIP/TEF), police certificates, medical exam results, proof of funds, reference letters from employers, and Educational Credential Assessment (ECA) report."
  },
  {
    question: "How much money do I need to show for Canada PR?",
    answer: "As of 2024, a single applicant needs to show CAD 20,000 in settlement funds. The amount increases with family size: CAD 24,900 for 2 people, CAD 30,600 for 3 people, etc. These funds aren't required if you're already working in Canada or have a valid job offer."
  },
  {
    question: "What is the age limit for Canada PR?",
    answer: "There's no strict age limit for Canada PR, but the CRS points system favors candidates between 20-29 years (maximum 100 points). Points decrease gradually after age 30, with zero points awarded for age after 45 years."
  },
  {
    question: "Can I apply for Canada PR without IELTS?",
    answer: "While IELTS is the most common, you can also prove language proficiency through CELPIP (English) or TEF/TCF (French). At least CLB 7 (equivalent to IELTS 6.0) is required for most programs."
  },
  {
    question: "What is the processing time for Canada PR?",
    answer: "Express Entry PR applications are typically processed within 6-8 months. Provincial Nominee Programs may take 12-18 months. Processing times can vary based on application volume and completeness of documentation."
  },
  {
    question: "What is a Provincial Nomination Program (PNP)?",
    answer: "PNPs allow Canadian provinces to nominate immigrants based on their specific economic needs. A provincial nomination adds 600 points to your CRS score, virtually guaranteeing an ITA for PR."
  },
  {
    question: "Do I need a job offer for Canada PR?",
    answer: "A job offer is not mandatory for PR, but it can add significant points to your CRS score. A valid job offer can add 50-200 points depending on the skill level of the position."
  },
  {
    question: "Can I work anywhere in Canada with PR?",
    answer: "Yes, PR holders have the freedom to live, work, or study anywhere in Canada. However, some PNP streams may require you to live in the nominating province for a certain period."
  },
  {
    question: "What healthcare benefits do PR holders get?",
    answer: "PR holders are eligible for Canada's universal healthcare system, which covers most medical services. Coverage begins after a short waiting period (up to 3 months) in most provinces."
  },
  {
    question: "Can I study while on PR in Canada?",
    answer: "Yes, PR holders can study at any Canadian institution with domestic student status, meaning lower tuition fees compared to international students. They're also eligible for student loans and grants."
  },
  {
    question: "How can I maintain my PR status?",
    answer: "To maintain PR status, you must live in Canada for at least 730 days (2 years) in every 5-year period. Time spent traveling with a Canadian spouse or working abroad for a Canadian company may count towards this requirement."
  },
  {
    question: "What is the difference between PR and citizenship?",
    answer: "PR holders have most rights except voting and holding certain jobs. They must maintain residency obligations and renew PR cards. Citizens have unrestricted rights, can vote, and don't need to maintain residency requirements."
  },
  {
    question: "Can I sponsor my parents after getting PR?",
    answer: "Yes, after becoming a PR, you can sponsor parents and grandparents through the Parent and Grandparent Program (PGP). However, this program has limited spots and specific income requirements."
  },
  {
    question: "What happens if my PR application is rejected?",
    answer: "If rejected, you can appeal to the Immigration Appeal Division within 30 days. Alternatively, you can address the reasons for rejection and submit a new application."
  },
  {
    question: "Can I travel outside Canada with PR status?",
    answer: "Yes, PR holders can travel freely with a valid PR card. However, you must maintain residency obligations and use your PR card or Permanent Resident Travel Document to return to Canada."
  },
  {
    question: "What is the NOC code and why is it important?",
    answer: "The National Occupational Classification (NOC) code categorizes jobs in Canada. Your NOC code determines eligibility for immigration programs and affects CRS points for work experience."
  },
  {
    question: "How does education affect PR application?",
    answer: "Education can contribute up to 150 CRS points. Foreign credentials must be assessed through an ECA. Canadian education gives additional points, with more points for higher levels of education."
  },
  {
    question: "What is the cost of living in major Canadian cities?",
    answer: "Costs vary significantly: Toronto and Vancouver are most expensive (average 1-bedroom rent: CAD 2,000+), while Montreal and Calgary are more affordable (CAD 1,200-1,500). Factor in utilities, transport, and food costs."
  },
  {
    question: "Can I start a business with PR status?",
    answer: "Yes, PR holders can start businesses, be self-employed, or buy existing businesses. They have the same business rights as citizens, except in certain regulated industries."
  },
  {
    question: "What social benefits do PR holders receive?",
    answer: "PR holders can access Employment Insurance, Canada Pension Plan, Old Age Security, Canada Child Benefit, and other social benefits, subject to eligibility criteria."
  },
  {
    question: "How does the Express Entry pool work?",
    answer: "Candidates enter the pool by creating profiles. Draws typically occur every 2 weeks, inviting highest-ranking candidates. Profiles remain valid for 12 months if not selected."
  },
  {
    question: "What is a bridge open work permit?",
    answer: "A bridge open work permit allows PR applicants to continue working in Canada while their PR application is processing, bridging the gap between expiring work permits and PR status."
  },
  {
    question: "Can I apply for PR while outside Canada?",
    answer: "Yes, you can apply through Express Entry from outside Canada. However, some programs like Canadian Experience Class require Canadian work experience."
  },
  {
    question: "What happens if I lose your job during PR processing?",
    answer: "Losing your job during processing generally doesn't affect your application if you've already received an ITA. However, you must still show required settlement funds."
  },
  {
    question: "Can I include my spouse's points in my application?",
    answer: "Yes, spouse/partner can contribute up to 40 points through language skills, education, and Canadian work experience. Their adaptability factors can add more points."
  },
  {
    question: "What is the minimum language score for PR?",
    answer: "Most programs require minimum CLB 7 (IELTS: Listening 6.0, Reading 6.0, Writing 6.0, Speaking 6.0). Higher scores earn more CRS points."
  },
  {
    question: "Can I apply for multiple PR programs simultaneously?",
    answer: "Yes, you can apply for Express Entry and PNP streams simultaneously. This strategy increases chances of success but may require multiple application fees."
  },
  {
    question: "What is the medical exam requirement?",
    answer: "A medical exam by an approved physician is mandatory. Results valid for 12 months. Basic health screening ensures no excessive demand on healthcare system."
  },
  {
    question: "How does Canadian work experience help?",
    answer: "Canadian work experience adds significant CRS points (up to 80). It also qualifies you for Canadian Experience Class and some PNP streams."
  },
  {
    question: "What are the tax implications of PR status?",
    answer: "PR holders must file Canadian tax returns on worldwide income. Tax treaties may prevent double taxation. Social benefits often tied to tax filing."
  },
  {
    question: "Can I buy property as a PR holder?",
    answer: "Yes, PR holders have same property rights as citizens. No restrictions on type or number of properties. May access same mortgages and home buyer programs."
  },
  {
    question: "What is the significance of NOC skill level?",
    answer: "NOC skill level (0, A, B, C, D) determines program eligibility. Higher skill levels (0, A, B) qualify for more programs and may earn more points."
  },
  {
    question: "How do I prove my work experience?",
    answer: "Reference letters from employers must include job title, duties, dates, hours worked, and salary. Pay stubs, tax documents, and contracts provide supporting evidence."
  },
  {
    question: "What happens if my circumstances change during processing?",
    answer: "Must notify IRCC of material changes (marriage, children, job loss, address). Some changes may affect eligibility or points calculation."
  },
  {
    question: "Can I apply for PR with a criminal record?",
    answer: "Minor offenses may not disqualify you, but serious crimes likely will. Must declare all convictions. Rehabilitation process available for some cases."
  },
  {
    question: "What is the role of immigration consultants?",
    answer: "Licensed consultants can provide advice, review applications, and communicate with IRCC. Not mandatory but helpful for complex cases."
  },
  {
    question: "How does Express Entry ranking work?",
    answer: "CRS points awarded for core factors (age, education, language, experience) and additional factors (Canadian education, job offer, nomination). Total determines rank."
  },
  {
    question: "What are the language test options?",
    answer: "IELTS or CELPIP for English, TEF or TCF for French. Must test all abilities (reading, writing, speaking, listening). Results valid for 2 years."
  },
  {
    question: "Can I work while waiting for PR?",
    answer: "Need valid work permit unless applying through CEC or have bridge open work permit. Some PR streams include work permits."
  },
  {
    question: "What is the impact of having children on PR application?",
    answer: "Children under 22 can be included as dependents. Affects proof of funds requirement. May impact processing time. Consider education and healthcare needs."
  },
  {
    question: "How do I prove relationship for spouse inclusion?",
    answer: "Marriage certificate or common-law evidence required. Photos, joint accounts, shared residence, communication records help prove genuine relationship."
  },
  {
    question: "What are the residency obligations after getting PR?",
    answer: "Must spend 730 days in Canada every 5 years. Time abroad with Canadian spouse or for Canadian employer may count. Keep detailed travel records."
  },
  {
    question: "Can I apply for citizenship after PR?",
    answer: "Eligible after 3 years of physical presence as PR. Must file taxes, pass test, prove language skills. Processing takes about 12 months."
  },
  {
    question: "What happens to my PR if I divorce?",
    answer: "PR status independent of marriage once granted. Divorce doesn't affect PR status but may affect citizenship residency calculations."
  },
  {
    question: "How do I calculate my CRS score?",
    answer: "Use official CRS tool on IRCC website. Factors include age, education, language, experience, spouse factors, adaptability. Maximum 1200 points."
  },
  {
    question: "What is the significance of police certificates?",
    answer: "Required from countries lived in for 6+ months since age 18. Prove good character. Must be recent (usually within 6 months)."
  },
  {
    question: "Can I appeal a PR refusal?",
    answer: "Some refusals can be appealed to Immigration Appeal Division. 30-day deadline. Legal representation recommended. Success depends on grounds."
  },
  {
    question: "What is the role of biometrics?",
    answer: "Fingerprints and photo required. Valid for 10 years. Must be done at authorized location. Used for background checks and identity verification."
  }
];

export const additionalResources = {
  usefulLinks: [
    {
      title: "IRCC Official Website",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      description: "Official government immigration portal with latest updates and resources"
    },
    {
      title: "CRS Calculator Tool",
      url: "https://www.cic.gc.ca/english/immigrate/skilled/crs-tool.asp",
      description: "Official tool to calculate your Comprehensive Ranking System score"
    },
    {
      title: "Find an Immigration Consultant",
      url: "https://college-ic.ca/protecting-the-public/find-an-immigration-consultant",
      description: "Official registry of licensed immigration consultants"
    }
  ],
  emergencyContacts: {
    IRCC: "1-888-242-2100",
    CanadianEmbassy: "Varies by country",
    EmergencyServices: "911"
  },
  processingTools: {
    applicationStatus: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html",
    processingTimes: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html",
    onlineHelp: "https://www.cic.gc.ca/english/helpcentre/index.asp"
  }
};

export const lifestyleGuide = {
  healthcare: {
    system: "Universal healthcare through provincial insurance",
    coverage: ["Doctor visits", "Hospital stays", "Essential medical services"],
    waiting: "3-month waiting period in most provinces",
    private: "Optional private insurance for non-covered services"
  },
  education: {
    public: {
      cost: "Free until grade 12",
      quality: "High international rankings",
      language: "English or French depending on province"
    },
    postsecondary: {
      types: ["Universities", "Colleges", "Technical Institutes"],
      costs: "Domestic rates for PR holders",
      funding: "Access to government loans and grants"
    }
  },
  housing: {
    types: ["Apartments", "Condos", "Houses", "Townhouses"],
    markets: {
      rental: "Competitive in major cities",
      purchase: "Various mortgage options available"
    },
    costs: {
      vancouver: "Highest average prices",
      toronto: "Second highest market",
      montreal: "More affordable major city",
      calgary: "Moderate pricing"
    }
  },
  transportation: {
    public: {
      availability: "Extensive in major cities",
      types: ["Bus", "Subway", "Light Rail", "Streetcar"],
      cost: "Monthly passes available"
    },
    driving: {
      license: "Provincial licensing system",
      insurance: "Mandatory car insurance",
      conditions: "Winter driving skills important"
    }
  },
  weather: {
    seasons: ["Spring", "Summer", "Fall", "Winter"],
    temperatures: {
      summer: "20°C to 30°C",
      winter: "-30°C to 0°C depending on region"
    },
    preparation: ["Winter clothing", "Home heating", "Vehicle winterization"]
  }
};

export const prVisaTimeline: Record<string, TimelinePhase> = {
  preparation: {
    title: "Preparation Phase",
    duration: "3-6 months",
    tasks: [
      "Language test preparation and exam",
      "Educational credential assessment",
      "Gather documents",
      "Professional references"
    ]
  },
  application: {
    title: "Application Phase",
    duration: "1-2 months",
    tasks: [
      "Create Express Entry profile",
      "Receive ITA",
      "Submit complete application",
      "Pay fees"
    ]
  },
  processing: {
    title: "Processing Phase",
    duration: "6-8 months",
    tasks: [
      "Application review",
      "Medical examination",
      "Background checks",
      "Final decision"
    ]
  },
  landing: {
    title: "Landing Phase",
    duration: "1-2 months",
    tasks: [
      "Receive COPR",
      "Plan arrival",
      "Initial entry",
      "Get PR card"
    ]
  }
}; 