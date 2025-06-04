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

export const germanyPRContent = {
  mainBenefits: [
    {
      title: 'EU Freedom of Movement',
      description: 'Live and work freely across all EU member states with German permanent residency.'
    },
    {
      title: 'Social Security Benefits',
      description: 'Access Germany\'s comprehensive social security system, including healthcare and pension benefits.'
    },
    {
      title: 'Path to Citizenship',
      description: 'Eligible for German citizenship after 8 years of legal residence (6 years with integration efforts).'
    },
    {
      title: 'Family Reunification',
      description: 'Bring your family members to Germany with simplified visa procedures.'
    },
    {
      title: 'Education Benefits',
      description: 'Access to free or low-cost education at Germany\'s world-renowned universities.'
    }
  ],
  visaRequirements: {
    residencePermit: {
      title: 'Residence Permit',
      description: 'Initial temporary residence permit required before PR application.'
    },
    languageSkills: {
      title: 'Language Proficiency',
      description: 'Minimum B1 German language proficiency required.'
    },
    financialStability: {
      title: 'Financial Requirements',
      description: 'Proof of stable income and ability to support yourself and dependents.'
    },
    integrationCourse: {
      title: 'Integration Course',
      description: 'Completion of integration course with basic knowledge of German society.'
    }
  },
  applicationProcess: [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Evaluate your eligibility for German PR based on residence duration and type.'
    },
    {
      step: 2,
      title: 'Document Preparation',
      description: 'Gather required documents including residence permit, language certificate, and financial proof.'
    },
    {
      step: 3,
      title: 'Integration Requirements',
      description: 'Complete mandatory integration course and pass the final exam.'
    },
    {
      step: 4,
      title: 'Application Submission',
      description: 'Submit application at local immigration office (Ausländerbehörde).'
    },
    {
      step: 5,
      title: 'Processing & Decision',
      description: 'Wait for application processing and attend interview if required.'
    }
  ]
};

export const cityComparisons = {
  berlin: {
    name: 'Berlin',
    state: 'Berlin',
    population: '3.7 million',
    medianHousePrice: '€4,950/m²',
    averageSalary: '€52,000/year',
    keyIndustries: ['Tech', 'Startups', 'Creative Arts', 'Tourism'],
    lifestyle: {
      highlights: ['Vibrant Culture', 'International Community', 'Affordable Living', 'Tech Hub']
    },
    universities: ['Humboldt University', 'Free University of Berlin', 'Technical University Berlin']
  },
  munich: {
    name: 'Munich',
    state: 'Bavaria',
    population: '1.5 million',
    medianHousePrice: '€8,400/m²',
    averageSalary: '€61,000/year',
    keyIndustries: ['Automotive', 'Tech', 'Insurance', 'Manufacturing'],
    lifestyle: {
      highlights: ['High Quality of Life', 'Bavarian Culture', 'Economic Hub', 'Outdoor Activities']
    },
    universities: ['Technical University Munich', 'Ludwig Maximilian University', 'Munich Business School']
  },
  frankfurt: {
    name: 'Frankfurt',
    state: 'Hesse',
    population: '753,000',
    medianHousePrice: '€6,100/m²',
    averageSalary: '€57,000/year',
    keyIndustries: ['Finance', 'Banking', 'IT', 'Consulting'],
    lifestyle: {
      highlights: ['Financial Center', 'International Hub', 'Modern Infrastructure', 'Cultural Diversity']
    },
    universities: ['Goethe University', 'Frankfurt School of Finance', 'European Business School']
  }
};

export const jobMarketStats = {
  highDemandSectors: [
    {
      sector: 'Information Technology',
      growth: '+12% annually',
      topRoles: ['Software Developer', 'Data Scientist', 'IT Project Manager'],
      averageSalaries: {
        entry: '€45,000 - €55,000',
        mid: '€60,000 - €80,000',
        senior: '€85,000 - €120,000'
      }
    },
    {
      sector: 'Engineering',
      growth: '+8% annually',
      topRoles: ['Mechanical Engineer', 'Electrical Engineer', 'Process Engineer'],
      averageSalaries: {
        entry: '€48,000 - €58,000',
        mid: '€65,000 - €85,000',
        senior: '€90,000 - €130,000'
      }
    },
    {
      sector: 'Healthcare',
      growth: '+15% annually',
      topRoles: ['Medical Doctors', 'Specialists', 'Care Workers'],
      averageSalaries: {
        entry: '€50,000 - €60,000',
        mid: '€70,000 - €100,000',
        senior: '€110,000 - €150,000'
      }
    }
  ],
  employmentTrends: {
    remoteWork: {
      percentage: '30% of workforce',
      growthRate: '+25% year-over-year',
      popularIndustries: ['IT', 'Consulting', 'Digital Marketing', 'Finance']
    },
    contractWork: {
      percentage: '15% of positions',
      growthRate: '+10% annually',
      benefits: [
        'Higher pay rates',
        'Flexible working hours',
        'Multiple client opportunities',
        'Skill development'
      ]
    }
  }
};

export const lifestyleGuide = {
  housing: {
    types: [
      'Modern Apartments',
      'Historic Buildings',
      'Suburban Houses',
      'Student Housing'
    ],
    markets: {
      rental: 'Average rental prices range from €8-20/m² depending on the city and location',
      purchase: 'Property prices range from €2,500-10,000/m² based on location and type'
    },
    costs: {
      berlin: '€10-15/m² (rent)',
      munich: '€18-25/m² (rent)',
      frankfurt: '€15-20/m² (rent)'
    }
  },
  healthcare: {
    system: 'Universal Healthcare System',
    coverage: [
      'Doctor Visits',
      'Hospital Care',
      'Preventive Care',
      'Emergency Services',
      'Prescription Medications'
    ],
    waiting: '3 months after registration',
    private: 'Optional private insurance available'
  }
};

export const germanyPRFAQs: FAQ[] = [
  {
    question: 'What are the main requirements for German PR?',
    answer: 'Main requirements include 5 years of legal residence, stable income, B1 German language proficiency, and basic knowledge of German society through integration course completion.'
  },
  {
    question: 'How long does it take to get German PR?',
    answer: 'Processing time is typically 3-6 months after application submission, provided all requirements are met. EU Blue Card holders may be eligible after 33 months (21 months with B1 German).'
  },
  {
    question: 'Can I bring my family with German PR?',
    answer: 'Yes, PR holders can bring spouse and dependent children. Family members may be eligible for residence permits and eventually PR.'
  },
  {
    question: 'Do I need to speak German for PR?',
    answer: 'Yes, minimum B1 level German language proficiency is required for PR. This includes speaking, reading, writing, and listening skills.'
  },
  {
    question: 'Can I lose my German PR status?',
    answer: 'PR can be lost if you leave Germany for more than 6 months without prior approval, or if you commit serious criminal offenses.'
  },
  {
    question: 'What documents are required for German PR?',
    answer: 'Required documents include valid passport, current residence permit, proof of income/employment, language certificate, integration course certificate, proof of pension contributions, and health insurance.'
  },
  {
    question: 'How much does German PR cost?',
    answer: 'The PR application fee is typically between €100-150. Additional costs may include language certificates (€200-300), integration course (€1,000-2,000), and document translations.'
  },
  {
    question: 'What is the EU Blue Card route to PR?',
    answer: 'EU Blue Card holders can apply for PR after 33 months of employment with basic German skills, or after 21 months with B1 German proficiency.'
  },
  {
    question: 'Can I work anywhere in Germany with PR?',
    answer: 'Yes, PR holders have unrestricted access to the German labor market and can work in any profession or be self-employed.'
  },
  {
    question: 'What are the income requirements for PR?',
    answer: 'You must demonstrate stable income sufficient to support yourself and dependents without social benefits. Generally, this means regular employment with income above the subsistence level.'
  },
  {
    question: 'How does the integration course work?',
    answer: 'The integration course consists of 600 hours of language training and 100 hours of orientation course about German society, culture, and legal system. It concludes with language and orientation tests.'
  },
  {
    question: 'Can I apply for citizenship after getting PR?',
    answer: 'Yes, PR holders can typically apply for German citizenship after 8 years of legal residence (6 years with special integration efforts).'
  },
  {
    question: 'What healthcare benefits do PR holders get?',
    answer: 'PR holders have access to Germany\'s public healthcare system with the same benefits as German citizens when enrolled in statutory health insurance.'
  },
  {
    question: 'Can I study with German PR?',
    answer: 'Yes, PR holders can study at German universities with the same conditions as German citizens, including access to student financial aid (BAföG).'
  },
  {
    question: 'What pension benefits come with PR?',
    answer: 'PR holders contribute to the German pension system and are eligible for retirement benefits based on their contributions.'
  },
  {
    question: 'Can I travel within the EU with German PR?',
    answer: 'Yes, PR holders can travel visa-free within the Schengen Area and stay in other EU countries for up to 90 days within any 180-day period.'
  },
  {
    question: 'What is the difference between temporary residence and PR?',
    answer: 'Temporary residence permits need regular renewal and may have restrictions on work and travel. PR is permanent, offers more rights, and doesn\'t need renewal.'
  },
  {
    question: 'Can I apply for PR while outside Germany?',
    answer: 'No, PR applications must be submitted while residing in Germany with a valid residence permit.'
  },
  {
    question: 'What happens to my PR if I divorce?',
    answer: 'PR status is independent of marital status once granted. Divorce doesn\'t affect your PR status.'
  },
  {
    question: 'Can I sponsor relatives with PR?',
    answer: 'Yes, PR holders can sponsor spouse and minor children. Other relatives may be sponsored under certain circumstances.'
  },
  {
    question: 'What is the role of the Ausländerbehörde?',
    answer: 'The Ausländerbehörde (Immigration Office) processes PR applications, verifies documents, and issues the permanent residence permit.'
  },
  {
    question: 'How do I prove language proficiency?',
    answer: 'Through certificates from recognized language institutes like Goethe-Institut, telc GmbH, or TestDaF-Institut showing B1 level proficiency.'
  },
  {
    question: 'Can I get PR through self-employment?',
    answer: 'Yes, after 3 years of successful self-employment with a stable income and positive business outlook.'
  },
  {
    question: 'What social benefits can PR holders access?',
    answer: 'PR holders can access unemployment benefits, child benefits, social security, and other welfare programs available to German citizens.'
  },
  {
    question: 'How does PR affect tax obligations?',
    answer: 'PR holders are subject to German tax laws and must declare worldwide income. Tax treaties may prevent double taxation with other countries.'
  },
  {
    question: 'Can I buy property with PR status?',
    answer: 'Yes, PR holders have no restrictions on purchasing property in Germany and can access German mortgages.'
  },
  {
    question: 'What happens if I lose my job during PR?',
    answer: 'Once PR is granted, losing your job doesn\'t affect your status. You\'re eligible for unemployment benefits and job search assistance.'
  },
  {
    question: 'Can I apply for PR with a criminal record?',
    answer: 'Minor offenses may not affect PR eligibility, but serious crimes can prevent approval. Each case is evaluated individually.'
  },
  {
    question: 'How do I renew my PR card?',
    answer: 'The PR status doesn\'t expire, but the physical card needs renewal every 10 years, similar to an ID card.'
  },
  {
    question: 'What is the significance of pension contributions?',
    answer: 'Regular pension contributions demonstrate stable employment and integration into the German social system, important for PR approval.'
  },
  {
    question: 'Can I have dual citizenship with German PR?',
    answer: 'PR doesn\'t affect your original citizenship. You maintain your current citizenship while holding German PR.'
  },
  {
    question: 'What happens if my PR application is rejected?',
    answer: 'You can appeal the decision within one month or address the reasons for rejection and reapply.'
  },
  {
    question: 'Can I start a business with PR status?',
    answer: 'Yes, PR holders can start businesses without additional permits, unlike temporary residence permit holders.'
  },
  {
    question: 'How does maternity leave affect PR application?',
    answer: 'Maternity leave periods count towards residence requirement and don\'t negatively affect PR application.'
  },
  {
    question: 'What is the role of health insurance in PR?',
    answer: 'Valid health insurance coverage is mandatory for PR. You must have either statutory or private health insurance.'
  },
  {
    question: 'Can I apply for PR with freelance work?',
    answer: 'Yes, if you can demonstrate stable income and regular tax payments from freelance work over the required period.'
  },
  {
    question: 'How does PR affect child education?',
    answer: 'PR holder\'s children have equal access to education, including free public schools and university education.'
  },
  {
    question: 'What is the importance of registration address?',
    answer: 'A valid registration address (Anmeldung) is required for PR. Changes must be reported to authorities.'
  },
  {
    question: 'Can I get PR through marriage?',
    answer: 'Marriage to a German citizen can accelerate PR eligibility to 3 years, provided other requirements are met.'
  },
  {
    question: 'What are the housing rights with PR?',
    answer: 'PR holders have equal housing rights as German citizens, including access to social housing and housing benefits.'
  },
  {
    question: 'How does PR affect retirement planning?',
    answer: 'PR holders can access German pension benefits and should plan retirement considering both German and home country systems.'
  },
  {
    question: 'Can I vote with German PR?',
    answer: 'PR holders cannot vote in federal or state elections, but may vote in local elections depending on nationality.'
  },
  {
    question: 'What is the Blue Card points system?',
    answer: 'Germany doesn\'t use a points system, but Blue Card eligibility is based on qualifications, job offer, and salary threshold.'
  },
  {
    question: 'How does PR affect international travel?',
    answer: 'PR holders can freely enter/exit Germany but should not stay abroad for more than 6 months without permission.'
  },
  {
    question: 'Can I apply for PR with multiple employers?',
    answer: 'Yes, as long as you can demonstrate stable income and continuous employment over the required period.'
  },
  {
    question: 'What happens if I need social benefits after PR?',
    answer: 'Receiving social benefits after PR generally doesn\'t affect your status unless obtained fraudulently.'
  },
  {
    question: 'How does PR affect military service?',
    answer: 'PR holders are not subject to German military service but maintain military obligations to their home country.'
  },
  {
    question: 'Can I get PR through academic research?',
    answer: 'Researchers can obtain PR after 4 years of research activity and contributions to pension insurance.'
  },
  {
    question: 'What are the language test exemptions?',
    answer: 'Certain individuals may be exempt from language requirements due to age, illness, or disability.'
  },
  {
    question: 'How does PR affect inheritance rights?',
    answer: 'PR holders are subject to German inheritance laws for assets in Germany but maintain home country inheritance rights.'
  },
  {
    question: 'Can I get emergency travel documents with PR?',
    answer: 'PR holders must maintain valid passports from their home country. German emergency documents are for citizens only.'
  },
  {
    question: 'What professional recognition is needed for PR?',
    answer: 'Regulated professions require recognition of qualifications before practicing, even with PR status.'
  }
];

export const prVisaTimeline: Record<string, TimelinePhase> = {
  preparation: {
    title: 'Preparation Phase',
    duration: '3-6 months',
    tasks: [
      'German language courses (B1 level)',
      'Document collection and translation',
      'Financial planning'
    ]
  },
  application: {
    title: 'Application Phase',
    duration: '1-2 months',
    tasks: [
      'Submit application at Ausländerbehörde',
      'Pay application fees',
      'Provide biometric data'
    ]
  },
  processing: {
    title: 'Processing Phase',
    duration: '3-6 months',
    tasks: [
      'Application review',
      'Additional document requests if needed',
      'Interview scheduling if required'
    ]
  },
  decision: {
    title: 'Decision & Collection',
    duration: '2-4 weeks',
    tasks: [
      'Receive decision notification',
      'Pay card issuance fee',
      'Collect PR card'
    ]
  }
};

export const additionalResources = {
  usefulLinks: [
    {
      title: 'Federal Employment Agency',
      url: 'https://www.arbeitsagentur.de',
      description: 'Official job portal and employment information'
    },
    {
      title: 'Make it in Germany',
      url: 'https://www.make-it-in-germany.com',
      description: 'Official portal for international qualified professionals'
    }
  ],
  emergencyContacts: {
    'Police Emergency': '110',
    'Medical Emergency': '112',
    'Immigration Hotline': '+49 30 1815-1111'
  },
  processingTools: {
    visaAppointment: 'https://service.berlin.de/terminvereinbarung',
    blueCardCalculator: 'https://www.make-it-in-germany.com/en/visa/skilled-immigration-act'
  }
}; 