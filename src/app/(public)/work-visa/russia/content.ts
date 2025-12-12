export const singaporeWorkPermits = {
 
  sPass: {
    title: "S Pass",
    description: "For mid-skilled technical staff",
    minimumSalary: "S$3,000 per month",
    validity: "Up to 2 years",
    eligibility: [
      "Diploma/Technical qualifications",
      "Relevant work experience",
      "Skills certification if required"
    ],
    commonRoles: [
      "Technicians",
      "Assistant Engineers",
      "Supervisors",
      "Accounts Executives",
      "Administrative Managers",
      "Restaurant Managers"
    ]
  },
  workPermit: {
    title: "Work Permit",
    description: "For semi-skilled foreign workers in approved sectors",
    sectors: [
      "Construction",
      "Manufacturing",
      "Marine Shipyard",
      "Process",
      "Services"
    ],
    validity: "Up to 2 years",
    commonRoles: {
      construction: [
        "Construction Workers",
        "Machine Operators",
        "Site Supervisors"
      ],
      manufacturing: [
        "Production Operators",
        "Factory Workers",
        "Quality Control"
      ],
      services: [
        "Cleaners",
        "Security Guards",
        "Landscape Workers",
        "F&B Service Staff",
        "Retail Assistants"
      ],
      hospitality: [
        "Chefs",
        "Kitchen Helpers",
        "Dishwashers",
        "Hotel Housekeepers"
      ],
      transportation: [
        "Class 3 Drivers",
        "Class 4 Drivers",
        "Delivery Personnel"
      ]
    }
  },
  nts: {
    title: "Non-Traditional Source (NTS) Work Permit",
    description: "For workers from NTS countries in specific sectors",
    sourceCountries: [
      "India",
      "Philippines",
      "Thailand",
      "Bangladesh",
      "Myanmar",
      "Sri Lanka"
    ],
    sectors: [
      "Services",
      "Manufacturing",
      "Construction",
      "Marine Shipyard",
      "Process"
    ],
    requirements: [
      "Basic skilled certification",
      "Medical examination",
      "Security bond",
      "Work permit card"
    ]
  },
  trainingPass: {
    title: "Training Employment Pass (TEP)",
    description: "For foreign trainees or students undergoing practical training in Singapore",
    categories: {
      shortTerm: {
        title: "Short-Term Training Pass",
        validityOptions: [
          "3 months",
          "4 months",
          "5 months"
        ],
        eligibility: [
          "Fixed-term training contract",
          "Structured training program",
          "Sponsorship from approved company"
        ],
        requirements: [
          "Training program details",
          "Company sponsorship letter",
          "Trainee&apos;s qualifications",
          "Medical insurance coverage"
        ]
      },
      industrial: {
        title: "Industrial Training Pass",
        description: "For practical training in industrial/manufacturing sectors",
        validityPeriod: "Up to 6 months",
        eligibility: [
          "Basic technical knowledge",
          "Company-sponsored training program",
          "Safety course completion"
        ]
      }
    },
    trainingAreas: {
      construction: {
        title: "Construction Training",
        programs: [
          "Basic Construction Safety",
          "Equipment Operation",
          "Construction Methods",
          "Site Management"
        ],
        duration: "3-5 months"
      },
      manufacturing: {
        title: "Manufacturing Training",
        programs: [
          "Production Line Operations",
          "Quality Control",
          "Machine Operation",
          "Industrial Safety"
        ],
        duration: "3-4 months"
      },
      hospitality: {
        title: "F&B and Hospitality",
        programs: [
          "Kitchen Operations",
          "Food Safety & Hygiene",
          "Service Standards",
          "Basic Culinary Skills"
        ],
        duration: "3-5 months"
      },
      facilities: {
        title: "Facilities & Maintenance",
        programs: [
          "Building Maintenance",
          "Cleaning Operations",
          "Equipment Handling",
          "Safety Procedures"
        ],
        duration: "3-4 months"
      },
      transportation: {
        title: "Transportation & Logistics",
        programs: [
          "Class 3/4 Driver Training",
          "Vehicle Safety",
          "Basic Vehicle Maintenance",
          "Transport Regulations"
        ],
        duration: "3-5 months"
      }
    },
    processingTime: "2-3 weeks",
    fees: {
      application: "S$250",
      issuance: "S$150",
      training_levy: "S$330 per month"
    }
  }
};

export const jobCategories = {
  blueCollar: {
    title: "Blue Collar Jobs",
    description: "Essential manual and technical work positions",
    categories: {
      construction: {
        title: "Construction & Manufacturing",
        roles: [
          "Construction Workers",
          "Machine Operators",
          "Welders",
          "Electricians",
          "Plumbers",
          "Carpenters"
        ],
        requirements: [
          "Basic skilled worker certification",
          "Safety courses completion",
          "Relevant experience"
        ]
      },
      hospitality: {
        title: "Food & Beverage",
        roles: [
          "Chefs",
          "Kitchen Helpers",
          "Dishwashers",
          "Service Crew",
          "Bartenders"
        ],
        requirements: [
          "Food handling certification",
          "Basic hygiene course",
          "Service experience"
        ]
      },
      cleaning: {
        title: "Cleaning & Maintenance",
        roles: [
          "Cleaners",
          "Housekeepers",
          "Landscape Workers",
          "Building Maintenance"
        ],
        requirements: [
          "Basic cleaning certification",
          "Safety awareness course",
          "Physical fitness"
        ]
      }
    }
  },
  whiteCollar: {
    title: "White Collar Jobs",
    description: "Professional and administrative positions",
    categories: {
      administrative: {
        title: "Administrative & Support",
        roles: [
          "Administrative Assistants",
          "Office Managers",
          "Data Entry Specialists",
          "Customer Service Representatives"
        ],
        requirements: [
          "Diploma/Degree qualification",
          "Computer proficiency",
          "Communication skills"
        ]
      },
      accounting: {
        title: "Accounting & Finance",
        roles: [
          "Accounts Executives",
          "Bookkeepers",
          "Finance Assistants",
          "Accounts Managers"
        ],
        requirements: [
          "Accounting qualification",
          "Financial software knowledge",
          "Analytical skills"
        ]
      },
      it: {
        title: "Information Technology",
        roles: [
          "IT Support",
          "System Administrators",
          "Network Technicians",
          "Database Administrators"
        ],
        requirements: [
          "IT certification/degree",
          "Technical expertise",
          "Problem-solving skills"
        ]
      }
    }
  }
};

export const permitRequirements = {
  general: [
    "Valid passport",
    "Employment contract",
    "Educational certificates",
    "Medical examination"
  ],
  employer: [
    "Local registered company",
    "Minimum paid-up capital",
    "Fair hiring practices",
    "Quota requirements"
  ],
  documents: [
    "Educational certificates",
    "Skills certification",
    "Previous employment records",
    "Passport biodata page"
  ]
};

export const processingTimelines = {
  tep: {
    duration: "3-5 weeks",
    steps: [
      "Online application submission",
      "Initial assessment",
      "Additional document requests if needed",
      "Final decision"
    ]
  },
  sPass: {
    duration: "3-4 weeks",
    steps: [
      "Employer submission",
      "Qualification assessment",
      "Quota check",
      "Approval/rejection"
    ]
  },
  workPermit: {
    duration: "1-3 weeks",
    steps: [
      "Employer application",
      "Worker details verification",
      "Security bond arrangement",
      "In-principle approval"
    ]
  }
};

export const faqContent = [
  {
    question: "What is the difference between EP and S Pass?",
    answer: "Employment Pass (EP) is for professionals earning at least S$5,000 monthly with higher qualifications, while S Pass is for mid-skilled workers earning at least S$3,000 monthly with diploma or technical qualifications."
  },
  {
    question: "Can Work Permit holders change employers?",
    answer: "Yes, but they need to get a new Work Permit from the new employer. The current employer must cancel the existing permit, and the new employer must apply for a new one."
  },
  {
    question: "What is the quota system for foreign workers?",
    answer: "The quota limits the number of foreign workers a company can employ based on the total workforce and sector. Different ratios apply for different permit types and industries."
  },
  {
    question: "How long can I stay in Singapore after permit cancellation?",
    answer: "Usually 30 days from the cancellation date, unless specified otherwise. It's important to either secure new employment or leave Singapore within this period."
  },
  {
    question: "Can I bring my family to Singapore?",
    answer: "EP holders meeting minimum salary requirements can bring their family under Dependant's Pass or Long Term Visit Pass. S Pass and Work Permit holders generally cannot."
  },
  {
    question: "What is a Training Employment Pass (TEP)?",
    answer: "A TEP is a short-term pass for foreign trainees to undergo practical training in Singapore. It&apos;s available for 3-5 months and requires company sponsorship and a structured training program."
  },
  {
    question: "Who can apply for a Training Employment Pass?",
    answer: "Foreign nationals sponsored by Singapore-registered companies for structured training programs, particularly in blue-collar sectors like construction, manufacturing, F&B, and transportation."
  },
  {
    question: "What&apos;s the difference between Short-Term and Industrial Training Pass?",
    answer: "Short-Term Training Pass is for 3-5 months training in various sectors, while Industrial Training Pass is specifically for industrial/manufacturing sectors with up to 6 months validity."
  },
  {
    question: "Can a Training Pass be extended?",
    answer: "Generally, Training Passes are not extendable beyond their initial validity period. A new application would be required for additional training periods."
  },
  {
    question: "What happens after completing the training program?",
    answer: "Trainees must return to their home country after completing the program. If seeking employment in Singapore, they must apply for the appropriate work pass (Work Permit, S Pass, etc.)."
  }
];

export const industryQuotas = {
  services: {
    dependency_ceiling: "35%",
    levy_rates: {
      skilled: "S$330",
      basic_tier: "S$450",
      tier2: "S$600"
    }
  },
  construction: {
    dependency_ceiling: "87.5%",
    levy_rates: {
      skilled: "S$300",
      basic_tier: "S$700",
      myz: "S$600"
    }
  },
  manufacturing: {
    dependency_ceiling: "60%",
    levy_rates: {
      skilled: "S$330",
      basic_tier: "S$450"
    }
  }
};

export const usefulResources = {
  government: [
    {
      name: "Ministry of Manpower",
      url: "https://www.mom.gov.sg",
      description: "Official government portal for work pass information"
    },
    {
      name: "MyWorkPass",
      url: "https://www.mom.gov.sg/eservices/myworkpass",
      description: "Online portal for work pass transactions"
    }
  ],
  training: [
    {
      name: "SkillsFuture Singapore",
      url: "https://www.skillsfuture.gov.sg",
      description: "Skills training and certification programs"
    },
    {
      name: "Singapore Workforce Skills Qualifications",
      url: "https://www.ssg.gov.sg/wsq.html",
      description: "National credentialing system"
    }
  ],
  support: [
    {
      name: "Employment Claims Tribunal",
      url: "https://www.statecourts.gov.sg/cws/ECT/",
      description: "Dispute resolution for employment issues"
    },
    {
      name: "Migrant Workers' Centre",
      url: "https://www.mwc.org.sg",
      description: "Support services for migrant workers"
    }
  ]
};

export const trainingRequirements = {
  general: [
    "Valid passport with at least 6 months validity",
    "Completed application form",
    "Recent passport-sized photograph",
    "Detailed training program schedule",
    "Company&apos;s training declaration"
  ],
  medical: [
    "Pre-training medical examination",
    "Medical insurance coverage",
    "COVID-19 vaccination records"
  ],
  company: [
    "Local registered entity",
    "Training program outline",
    "Qualified trainers/supervisors",
    "Safe working environment"
  ],
  documents: {
    trainee: [
      "Educational certificates",
      "Relevant work experience proof",
      "Skills certifications if any",
      "Passport biodata page"
    ],
    employer: [
      "Training program details",
      "Company registration documents",
      "Trainer&apos;s qualifications",
      "Safety certifications"
    ]
  }
};

export const trainingGuidelines = {
  structure: [
    "Minimum 70% practical training",
    "Regular progress assessments",
    "Safety briefing completion",
    "Supervised practice sessions"
  ],
  supervision: [
    "Qualified supervisor assignment",
    "Daily progress monitoring",
    "Regular feedback sessions",
    "Safety compliance checks"
  ],
  assessment: [
    "Monthly progress reports",
    "Practical skills evaluation",
    "Safety knowledge testing",
    "Final competency assessment"
  ]
};

interface JobCategory {
  title: string;
  description: string;
  roles: string[];
  requirements: string[];
  benefits: string[];
  salary: string;
  workingHours: string;
  accommodation: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface RussiaWorkContent {
  visaTypes: {
    workPermit: {
      title: string;
      validity: string;
      processingTime: string;
      requirements: string[];
    };
  };
  visaProcessSteps: {
    title: string;
    description: string;
    duration: string;
    requirements: string[];
  }[];
  jobCategories: {
    warehouse: JobCategory;
    restaurant: JobCategory;
  };
  requirements: {
    documents: string[];
    medical: string[];
    language: string[];
  };
  processingTime: {
    visaProcessing: string;
    documentPreparation: string;
    medicalTests: string;
    languageTest: string;
  };
  costs: {
    visaFee: string;
    medicalTests: string;
    languageTest: string;
    documentTranslation: string;
    totalEstimate: string;
  };
  faqs: FAQ[];
  livingInRussia: {
    [key: string]: string;
  };
  culturalAdjustment: {
    workplace: string[];
    social: string[];
    communication: string[];
    etiquette: string[];
  };
  bankingAndFinance: {
    accountTypes: string[];
    requiredDocuments: string[];
    remittanceInfo: string[];
    taxInfo: string[];
  };
  emergencySupport: {
    helplineNumbers: { [key: string]: string };
    indianEmbassy: {
      address: string;
      phone: string;
      email: string;
      services: string[];
    };
    usefulContacts: { [key: string]: string };
  };
  accommodationGuide: {
    types: { [key: string]: string };
    locations: string[];
    averageCost: { [key: string]: string };
    utilities: string[];
    tips: string[];
  };
  transportationInfo: {
    public: string[];
    private: string[];
    costs: { [key: string]: string };
    tips: string[];
  };
  workplaceRights: {
    legalRights: string[];
    workingConditions: string[];
    grievanceProcess: string[];
    unionInformation: string[];
  };
  workCulture: {
    businessEtiquette: {
      title: string;
      points: string[];
    };
    communication: {
      title: string;
      points: string[];
    };
    dressCode: {
      title: string;
      points: string[];
    };
    meetings: {
      title: string;
      points: string[];
    };
  };
}

export const russiaWorkContent: RussiaWorkContent = {
  visaTypes: {
    workPermit: {
      title: "Work Permit",
      validity: "1 year, renewable",
      processingTime: "1-2 months",
      requirements: [
        "Valid passport with at least 18 months validity",
        "Job offer from Russian employer",
        "Medical certificates",
        "No criminal record",
        "Russian language proficiency certificate"
      ]
    }
  },

  visaProcessSteps: [
    {
      title: "Document Collection",
      description: "Gather all required documents and get them translated to Russian",
      duration: "2-3 weeks",
      requirements: [
        "Valid passport with 18+ months validity",
        "Educational certificates with apostille",
        "Professional certificates and experience letters",
        "Police clearance certificate",
        "Medical certificates"
      ]
    },
    {
      title: "Employer Invitation",
      description: "Russian employer applies for work permit quota and issues invitation",
      duration: "3-4 weeks",
      requirements: [
        "Signed employment contract",
        "Company registration documents",
        "Work permit quota approval",
        "Employer's tax clearance"
      ]
    },
    {
      title: "Visa Application",
      description: "Submit application at Russian embassy/consulate",
      duration: "2-3 weeks",
      requirements: [
        "Completed visa application form",
        "Employer invitation letter",
        "Visa fee payment receipt",
        "Insurance documents",
        "Proof of accommodation"
      ]
    },
    {
      title: "Post-Arrival Steps",
      description: "Complete mandatory registrations after arriving in Russia",
      duration: "1-2 weeks",
      requirements: [
        "Migration registration within 7 days",
        "Medical examination",
        "Tax registration",
        "Bank account opening",
        "Insurance policy activation"
      ]
    }
  ],

  jobCategories: {
    warehouse: {
      title: "Warehouse Jobs",
      description: "Work in modern warehouses with opportunities for career growth",
      roles: [
        "Warehouse Worker",
        "Forklift Operator",
        "Inventory Manager",
        "Loading/Unloading Staff",
        "Packaging Staff"
      ],
      requirements: [
        "Age: 18-45 years",
        "Good physical fitness",
        "Basic Russian language skills",
        "Previous warehouse experience preferred",
        "Ability to work in shifts"
      ],
      benefits: [
        "Salary up to ₹1,00,000 per month",
        "Overtime opportunities",
        "Free accommodation",
        "Medical insurance",
        "Transportation provided"
      ],
      salary: "₹60,000 - ₹1,00,000 per month",
      workingHours: "8-12 hours per day, 6 days per week",
      accommodation: "Shared accommodation provided by employer"
    },
    restaurant: {
      title: "Restaurant Jobs",
      description: "Work in restaurants and food service establishments",
      roles: [
        "Kitchen Helper",
        "Cook",
        "Waiter/Waitress",
        "Dishwasher",
        "Food Preparation Staff"
      ],
      requirements: [
        "Age: 18-45 years",
        "Basic Russian language skills",
        "Food handling certification (provided)",
        "Previous restaurant experience preferred",
        "Good communication skills"
      ],
      benefits: [
        "Salary up to ₹1,00,000 per month",
        "Free meals during shifts",
        "Free accommodation",
        "Medical insurance",
        "Transportation provided"
      ],
      salary: "₹80,000 - ₹1,00,000 per month",
      workingHours: "8-10 hours per day, 6 days per week",
      accommodation: "Shared accommodation provided by employer"
    }
  },

  requirements: {
    documents: [
      "Valid passport",
      "Russian visa invitation",
      "Employment contract",
      "Medical certificates",
      "Police clearance certificate",
      "Educational certificates",
      "Passport-size photographs",
      "Russian language proficiency certificate"
    ],
    medical: [
      "General health check-up",
      "COVID-19 vaccination certificate",
      "Drug test",
      "Chest X-ray",
      "HIV test"
    ],
    language: [
      "Basic Russian language proficiency",
      "Language test certificate",
      "Basic communication skills",
      "Reading and writing basics"
    ]
  },

  processingTime: {
    visaProcessing: "2-3 months",
    documentPreparation: "2-3 weeks",
    medicalTests: "1 week",
    languageTest: "1-2 weeks"
  },

  costs: {
    visaFee: "₹15,000 - ₹20,000",
    medicalTests: "₹8,000 - ₹10,000",
    languageTest: "₹5,000 - ₹7,000",
    documentTranslation: "₹3,000 - ₹5,000",
    totalEstimate: "₹31,000 - ₹42,000"
  },

  faqs: [
    {
      question: "What is the average salary in Russia for these jobs?",
      answer: "Warehouse workers can earn ₹60,000 - ₹1,00,000 per month, while restaurant workers typically earn ₹80,000 - ₹1,00,000 per month. Both sectors offer overtime opportunities and additional benefits."
    },
    {
      question: "Is accommodation provided by the employer?",
      answer: "Yes, most employers provide shared accommodation for workers. This typically includes basic furnishings, utilities, and internet connection."
    },
    {
      question: "Do I need to know Russian language?",
      answer: "Yes, basic Russian language proficiency is required. Employers usually arrange for language training, and you'll need to obtain a language proficiency certificate."
    },
    {
      question: "What are the working hours?",
      answer: "Standard working hours are 8-12 hours per day, 6 days per week for warehouse jobs, and 8-10 hours per day, 6 days per week for restaurant jobs."
    },
    {
      question: "Is overtime available?",
      answer: "Yes, overtime opportunities are available in both sectors, which can significantly increase your monthly earnings."
    },
    {
      question: "What medical tests are required?",
      answer: "Required medical tests include general health check-up, COVID-19 vaccination, drug test, chest X-ray, and HIV test. These need to be done at authorized medical centers."
    },
    {
      question: "How long does the visa process take?",
      answer: "The entire process typically takes 2-3 months, including document preparation, medical tests, and visa processing."
    },
    {
      question: "What documents are required?",
      answer: "Key documents include valid passport, visa invitation, employment contract, medical certificates, police clearance, educational certificates, and language proficiency certificate."
    },
    {
      question: "What are the working hours and overtime rules in Russia?",
      answer: "Standard working hours are 40 hours per week, typically 8 hours per day. Overtime must be compensated at 1.5-2 times the regular rate and is limited to 120 hours per year. All overtime work must be voluntary and documented."
    },
    {
      question: "How can I open a bank account in Russia?",
      answer: "You can open a bank account with your passport, work permit, and employer verification letter. Major banks like Sberbank and VTB offer special accounts for foreign workers with features like mobile banking and international transfers."
    },
    {
      question: "What should I do in case of a workplace emergency?",
      answer: "In case of emergency, contact your supervisor immediately and call the relevant emergency number (112 for general emergencies). Keep the Indian Embassy contact handy (+7 (495) 783-7535) and inform your employer's HR department."
    },
    {
      question: "Is it mandatory to learn Russian language?",
      answer: "Yes, basic Russian language proficiency is required for work permits. Many employers provide language training, and you'll need to pass a basic language test. Daily work and life become much easier with Russian language skills."
    },
    {
      question: "How does the Russian tax system work for foreign workers?",
      answer: "Foreign workers are subject to a 13% income tax rate for the first 183 days of stay. After becoming tax residents (staying 183+ days), the rate remains 13% for annual income up to 5 million rubles. Your employer will usually handle tax deductions."
    },
    {
      question: "What healthcare services are available to foreign workers?",
      answer: "Employers provide mandatory medical insurance covering basic healthcare. Additional private insurance is recommended for comprehensive coverage. Major cities have English-speaking medical facilities and 24/7 emergency services."
    },
    {
      question: "Can I bring my family to Russia?",
      answer: "Yes, you can bring your family after obtaining a work permit and meeting minimum salary requirements. Family members need separate visas and may need to prove financial capability for their stay."
    },
    {
      question: "What are the accommodation options in Russia?",
      answer: "Options include employer-provided housing, shared apartments, or private rentals. Most workers choose shared accommodation near their workplace. Average costs range from 15,000-60,000 RUB per month depending on the type and location."
    },
    {
      question: "How can I send money back home?",
      answer: "You can send money through bank transfers, money transfer services, or mobile apps. Popular services include Western Union, Golden Crown, and bank SWIFT transfers. Compare fees and exchange rates before choosing a method."
    },
    {
      question: "What are my rights regarding workplace safety?",
      answer: "You have the right to a safe working environment, proper training, safety equipment, and regular health check-ups. Employers must follow strict safety regulations and provide compensation for work-related injuries."
    },
    {
      question: "What are the common reasons for visa rejection?",
      answer: "Common reasons include incomplete documentation, false information, criminal record, failed medical tests, or insufficient funds. Working with a registered recruitment agency and ensuring all documents are properly prepared can help avoid rejection."
    },
    {
      question: "Can I change employers while on a work visa?",
      answer: "Yes, but it requires a new work permit application through the new employer. You must complete this process before leaving your current employer to maintain legal status in Russia."
    },
    {
      question: "What are the career growth opportunities in Russia?",
      answer: "Many workers start in entry-level positions and progress to supervisory roles. Learning Russian language and gaining local work experience can lead to better positions. Some companies also offer training programs for skill development."
    },
    {
      question: "How does the Russian pension system work for foreign workers?",
      answer: "Foreign workers contribute to the Russian pension system through payroll deductions. However, you can claim these contributions back when leaving Russia permanently, subject to bilateral agreements between Russia and your home country."
    },
    {
      question: "What should I do if I lose my job in Russia?",
      answer: "You have 14 days to find a new employer and initiate a new work permit process. Contact the Indian Embassy for guidance, and ensure you maintain valid registration during this period. It's advisable to have emergency funds for such situations."
    },
    {
      question: "Are there any restrictions on bringing personal items to Russia?",
      answer: "Yes, there are customs regulations for personal items. You can bring personal effects duty-free, but expensive items must be declared. Certain medications require documentation, and some items like drones need special permits."
    },
    {
      question: "What are the working hours during Russian holidays?",
      answer: "Russia has several public holidays where businesses operate differently. Some sectors like hospitality may require work during holidays with premium pay (usually 2x regular rate). Your employment contract should specify holiday work policies."
    },
    {
      question: "How can I verify if a job offer in Russia is legitimate?",
      answer: "Verify the company's registration through official Russian business registries, check their physical address, and confirm they have work permit quota approval. The Indian Embassy in Russia can also help verify legitimate employers."
    }
  ],

  livingInRussia: {
    climate: "Cold winters and mild summers, proper winter clothing needed",
    transportation: "Well-developed public transport system in major cities",
    food: "Mix of local and international cuisine, affordable dining options",
    healthcare: "Access to medical facilities with employer insurance",
    communication: "Internet and mobile services widely available",
    community: "Growing Indian community in major cities"
  },

  culturalAdjustment: {
    workplace: [
      "Hierarchical work culture with formal communication",
      "Punctuality is highly valued",
      "Professional dress code is conservative",
      "Team-oriented work environment",
      "Regular team meetings and discussions"
    ],
    social: [
      "Greeting customs and social etiquette",
      "Building professional relationships",
      "Networking opportunities",
      "Cultural events and celebrations",
      "Community integration tips"
    ],
    communication: [
      "Formal communication in workplace",
      "Non-verbal communication cues",
      "Email and messaging etiquette",
      "Meeting protocols",
      "Language learning resources"
    ],
    etiquette: [
      "Proper addressing of colleagues",
      "Gift-giving customs",
      "Dining etiquette",
      "Business meeting conduct",
      "Personal space considerations"
    ]
  },

  bankingAndFinance: {
    accountTypes: [
      "Salary account options",
      "Savings accounts for foreigners",
      "Multi-currency accounts",
      "Mobile banking facilities"
    ],
    requiredDocuments: [
      "Valid work permit",
      "Passport with visa",
      "Employer verification letter",
      "Proof of address in Russia",
      "Tax registration number"
    ],
    remittanceInfo: [
      "International money transfer options",
      "Bank transfer fees and charges",
      "Exchange rate considerations",
      "Documentation requirements",
      "Processing timeframes"
    ],
    taxInfo: [
      "Income tax rates and brackets",
      "Tax filing requirements",
      "Available deductions",
      "Tax payment schedule",
      "Required tax documents"
    ]
  },

  emergencySupport: {
    helplineNumbers: {
      "Police": "102",
      "Ambulance": "103",
      "Fire": "101",
      "General Emergency": "112",
      "Tourist Police": "+7 (495) 123-4567"
    },
    indianEmbassy: {
      address: "Embassy of India, Moscow, Vorontsovo Polye 6-8, 105064",
      phone: "+7 (495) 783-7535",
      email: "cons.moscow@mea.gov.in",
      services: [
        "Emergency assistance",
        "Passport services",
        "Document attestation",
        "Legal assistance",
        "Community support"
      ]
    },
    usefulContacts: {
      "Migrant Support Center": "+7 (495) 123-4567",
      "Legal Aid Hotline": "+7 (495) 234-5678",
      "Healthcare Assistance": "+7 (495) 345-6789",
      "Worker's Rights Helpline": "+7 (495) 456-7890"
    }
  },

  accommodationGuide: {
    types: {
      "Shared Apartment": "Most common for workers, shared with 2-4 people",
      "Studio Apartment": "Available for individual accommodation",
      "Company Housing": "Provided by some employers",
      "Dormitory": "Budget-friendly option with shared facilities"
    },
    locations: [
      "Near workplace locations",
      "Close to public transport",
      "Safe residential areas",
      "Areas with Indian communities",
      "Budget-friendly districts"
    ],
    averageCost: {
      "Shared Room": "15,000-25,000 RUB/month",
      "Studio Apartment": "30,000-45,000 RUB/month",
      "1-Bedroom Apartment": "40,000-60,000 RUB/month",
      "Company Housing": "Usually included in package"
    },
    utilities: [
      "Electricity charges",
      "Water supply",
      "Heating costs",
      "Internet connection",
      "Building maintenance"
    ],
    tips: [
      "Check heating system quality",
      "Verify included utilities",
      "Understand lease terms",
      "Inspect safety features",
      "Consider commute time"
    ]
  },

  transportationInfo: {
    public: [
      "Metro system in major cities",
      "Bus networks",
      "Tram services",
      "Suburban trains",
      "Inter-city connections"
    ],
    private: [
      "Taxi services",
      "Ride-sharing apps",
      "Car rental options",
      "Company transport services"
    ],
    costs: {
      "Metro Pass": "2,000-3,000 RUB/month",
      "Bus Pass": "1,500-2,500 RUB/month",
      "Taxi Ride": "300-500 RUB/trip",
      "Company Transport": "Usually free"
    },
    tips: [
      "Get a transport card",
      "Download transport apps",
      "Learn common routes",
      "Keep emergency contacts",
      "Understand night services"
    ]
  },

  workplaceRights: {
    legalRights: [
      "Maximum working hours",
      "Overtime compensation",
      "Holiday entitlement",
      "Sick leave benefits",
      "Workplace safety standards"
    ],
    workingConditions: [
      "Standard 8-hour workday",
      "Weekly rest periods",
      "Break time regulations",
      "Safety equipment provision",
      "Temperature control standards"
    ],
    grievanceProcess: [
      "Internal complaint procedure",
      "HR department role",
      "External authorities",
      "Documentation requirements",
      "Timeline for resolution"
    ],
    unionInformation: [
      "Right to join unions",
      "Union representation",
      "Collective bargaining",
      "Strike regulations",
      "Member benefits"
    ]
  },

  workCulture: {
    businessEtiquette: {
      title: "Business Etiquette",
      points: [
        "Punctuality is highly valued in Russian business culture",
        "Formal greetings with handshakes are common",
        "Use formal titles and surnames unless invited to use first names",
        "Business cards should be presented and received with both hands",
        "Gift-giving is common in business relationships",
        "Building personal relationships is important for business success"
      ]
    },
    communication: {
      title: "Communication Style",
      points: [
        "Direct communication is appreciated in business settings",
        "Russians may appear serious during initial meetings",
        "Non-verbal communication is important",
        "Maintain eye contact during conversations",
        "Avoid excessive small talk in business meetings",
        "Written communication should be formal and detailed"
      ]
    },
    dressCode: {
      title: "Business Dress Code",
      points: [
        "Conservative and formal business attire is standard",
        "Dark colors are preferred for business suits",
        "Women should dress modestly and professionally",
        "High-quality accessories are noticed and appreciated",
        "Casual dress is typically not acceptable in business settings",
        "Consider weather-appropriate business clothing"
      ]
    },
    meetings: {
      title: "Meeting Protocol",
      points: [
        "Meetings often follow a hierarchical structure",
        "Agenda should be prepared and distributed in advance",
        "Decision-making may take longer than expected",
        "Be prepared for detailed discussions",
        "Follow-up communication is important",
        "Respect the chain of command in meetings"
      ]
    }
  }
}; 