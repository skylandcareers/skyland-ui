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