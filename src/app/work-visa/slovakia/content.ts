// Content types and data for Slovakia Work Visa

export interface MainBenefit {
  title: string;
  description: string;
}

export interface TRCBenefit {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CareerProfile {
  role: string;
  averageSalary: string;
  requirements: string[];
  benefits: string[];
  companies: string[];
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
  carManufacturers?: string[];
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

export const slovakiaContent = {
  mainBenefits: [
    {
      title: "Strategic Location",
      description: "Located in the heart of Europe, Slovakia offers easy access to major European markets and excellent logistics infrastructure."
    },
    {
      title: "Growing Economy",
      description: "Strong automotive and manufacturing sector with continuous growth and investment opportunities."
    },
    {
      title: "Quality of Life",
      description: "High standard of living with affordable costs, beautiful nature, and rich cultural heritage."
    },
    {
      title: "EU Membership",
      description: "Access to EU single market and freedom to travel within the Schengen area."
    },
    {
      title: "Work-Life Balance",
      description: "25 days annual leave, plus 15 public holidays and strong labor protection laws."
    }
  ],
  trcBenefits: {
    residenceRights: {
      title: "Long-term Residence",
      description: "Right to live and work in Slovakia for up to 5 years with possibility of renewal."
    },
    familyUnification: {
      title: "Family Reunification",
      description: "Option to bring family members under family reunification visa after meeting requirements."
    },
    euTravel: {
      title: "Schengen Travel",
      description: "Freedom to travel within the Schengen area for up to 90 days in any 180-day period."
    },
    socialSecurity: {
      title: "Social Benefits",
      description: "Access to public healthcare, education, and social security systems."
    }
  },
  carManufacturing: {
    profiles: [
      {
        role: "Production Line Operator",
        averageSalary: "€1,200 - €1,500/month",
        requirements: [
          "Technical education",
          "Previous manufacturing experience",
          "Basic English or Slovak language",
          "Physical fitness",
          "Ability to work in shifts"
        ],
        benefits: [
          "Performance bonuses",
          "Meal vouchers",
          "Transportation allowance",
          "Healthcare package",
          "Training and development"
        ],
        companies: [
          "Volkswagen Slovakia",
          "Kia Motors Slovakia",
          "Jaguar Land Rover",
          "PSA Peugeot Citroën"
        ]
      },
      {
        role: "Quality Control Inspector",
        averageSalary: "€1,500 - €2,000/month",
        requirements: [
          "Quality management certification",
          "3+ years experience",
          "Technical knowledge",
          "Intermediate English",
          "Attention to detail"
        ],
        benefits: [
          "13th month salary",
          "Professional certification support",
          "Health insurance",
          "Flexible working hours",
          "Career progression"
        ],
        companies: [
          "Volkswagen Slovakia",
          "Kia Motors Slovakia",
          "Jaguar Land Rover",
          "Continental"
        ]
      },
      {
        role: "Maintenance Technician",
        averageSalary: "€1,800 - €2,500/month",
        requirements: [
          "Technical degree",
          "Mechanical/Electrical expertise",
          "Problem-solving skills",
          "Safety awareness",
          "Team collaboration"
        ],
        benefits: [
          "Overtime bonuses",
          "Technical training",
          "Insurance package",
          "Shift premiums",
          "Housing allowance"
        ],
        companies: [
          "Volkswagen Slovakia",
          "Kia Motors Slovakia",
          "ZF Slovakia",
          "Schaeffler"
        ]
      }
    ],
    industryStats: {
      contribution: "13% of Slovakia's GDP",
      employment: "Over 177,000 direct jobs",
      production: "1.1 million vehicles annually",
      exports: "Major export sector"
    }
  }
};

export const cityComparisons: Record<string, City> = {
  bratislava: {
    name: "Bratislava",
    region: "Western Slovakia",
    population: "430,000",
    medianHousePrice: "€2,500/m²",
    averageSalary: "€1,800/month",
    keyIndustries: ["Automotive", "IT", "Finance", "Services"],
    lifestyle: {
      highlights: ["Modern City", "International Environment", "Cultural Events", "Danube River"]
    },
    carManufacturers: ["Volkswagen Slovakia"]
  },
  zilina: {
    name: "Žilina",
    region: "Northern Slovakia",
    population: "83,000",
    medianHousePrice: "€1,800/m²",
    averageSalary: "€1,400/month",
    keyIndustries: ["Automotive", "Manufacturing", "Construction"],
    lifestyle: {
      highlights: ["Mountain Access", "Historic Center", "Affordable Living", "Sports Activities"]
    },
    carManufacturers: ["Kia Motors Slovakia"]
  },
  nitra: {
    name: "Nitra",
    region: "Western Slovakia",
    population: "78,000",
    medianHousePrice: "€1,600/m²",
    averageSalary: "€1,300/month",
    keyIndustries: ["Automotive", "Agriculture", "Education"],
    lifestyle: {
      highlights: ["University City", "Historical Sites", "Wine Region", "Cultural Heritage"]
    },
    carManufacturers: ["Jaguar Land Rover"]
  },
  trnava: {
    name: "Trnava",
    region: "Western Slovakia",
    population: "65,000",
    medianHousePrice: "€1,700/m²",
    averageSalary: "€1,350/month",
    keyIndustries: ["Automotive", "Electronics", "Food Processing"],
    lifestyle: {
      highlights: ["Historic Town", "Religious Architecture", "Industrial Hub", "Quality Education"]
    },
    carManufacturers: ["Stellantis (PSA Peugeot Citroën)"]
  }
};

export const slovakiaFAQs: FAQ[] = [
  {
    question: "What is a Slovak Temporary Residence Card (TRC)?",
    answer: "A TRC is a permit that allows non-EU nationals to live and work in Slovakia for a specific period, usually up to 2 years initially, with the possibility of renewal. It serves as both a residence and work permit."
  },
  {
    question: "How long does it take to get a Slovak TRC?",
    answer: "The standard processing time is 90 days from the date of submission of a complete application. Complex cases may take longer. Fast-track options are available for certain positions in companies of strategic importance."
  },
  {
    question: "What are the main requirements for a Slovak work visa?",
    answer: "Key requirements include a job offer from a Slovak employer, proof of accommodation, clean criminal record, health insurance, and sufficient financial means. The employer must also prove they couldn't fill the position with a Slovak or EU citizen."
  },
  {
    question: "How much does a Slovak TRC application cost?",
    answer: "The standard fee is €165.50 for employment purposes. Additional costs may include document translation, notarization, and medical examination fees."
  },
  {
    question: "Do I need to speak Slovak to work in Slovakia?",
    answer: "While not always mandatory, basic Slovak language skills are highly advantageous. Some international companies use English as their working language, especially in the automotive sector."
  },
  {
    question: "Can I bring my family with me to Slovakia?",
    answer: "Yes, after obtaining your TRC, you can apply for family reunification. Family members can join you and receive their own residence permits."
  },
  {
    question: "What is the minimum salary requirement for a work visa?",
    answer: "The salary must meet the Slovak minimum wage requirement (currently €700/month) and should be comparable to the average wage in your profession."
  },
  {
    question: "How long can I stay outside Slovakia with a TRC?",
    answer: "You can stay outside Slovakia for up to 180 days in a calendar year without losing your TRC status. Longer absences must be reported and justified."
  },
  {
    question: "What healthcare coverage do I need?",
    answer: "You must have comprehensive health insurance coverage from the date of arrival. Once employed, you'll be enrolled in the Slovak public health insurance system."
  },
  {
    question: "Can I change employers with a TRC?",
    answer: "Yes, but you must notify the immigration office and obtain approval. A new work permit may be required, and the process should be initiated before changing jobs."
  },
  {
    question: "What documents need to be translated?",
    answer: "All official documents (birth certificate, marriage certificate, criminal record, education diplomas) must be translated into Slovak by a certified translator."
  },
  {
    question: "Is there a points system for Slovak work visas?",
    answer: "No, Slovakia doesn't use a points-based system. Applications are assessed based on meeting specific criteria and labor market needs."
  },
  {
    question: "What is the renewal process for a TRC?",
    answer: "You must apply for renewal at least 90 days before your current TRC expires. The process is similar to the initial application but usually simpler."
  },
  {
    question: "Can I study while working in Slovakia?",
    answer: "Yes, TRC holders can pursue studies without additional permits, as long as it doesn't interfere with their work commitments."
  },
  {
    question: "What are the working hours in Slovakia?",
    answer: "Standard working time is 40 hours per week. The automotive sector often operates in shifts, with additional compensation for night and weekend work."
  },
  {
    question: "How many days of vacation am I entitled to?",
    answer: "The minimum is 20 days per year, with many employers offering 25 days plus 15 public holidays."
  },
  {
    question: "What taxes will I pay in Slovakia?",
    answer: "Income tax rates are 19% for income up to €38,553.01 and 25% above that. Social security contributions are also mandatory."
  },
  {
    question: "Can I buy property with a TRC?",
    answer: "Yes, TRC holders can purchase property in Slovakia. Many banks offer mortgages to foreign residents with stable employment."
  },
  {
    question: "What is the cost of living in Slovakia?",
    answer: "Living costs are relatively low compared to Western Europe. Monthly expenses (excluding rent) for a single person average €600-800 in major cities."
  },
  {
    question: "Do I need a driver's license in Slovakia?",
    answer: "You can use your home country license for 6 months, after which you need to obtain a Slovak license. Some countries have license exchange agreements."
  },
  {
    question: "What social security benefits am I entitled to?",
    answer: "TRC holders with employment have access to healthcare, unemployment benefits, pension contributions, and other social security benefits."
  },
  {
    question: "Can I start a business with a TRC?",
    answer: "Yes, but you may need to change your type of residence permit to one for business purposes."
  },
  {
    question: "What happens if I lose my job?",
    answer: "You have 30 days to find new employment or change your residence purpose. Unemployment benefits may be available if you've contributed to the system."
  },
  {
    question: "Is there a probation period in Slovak employment?",
    answer: "Yes, typically 3 months. During this time, either party can terminate the employment with immediate effect."
  },
  {
    question: "What are the main automotive companies in Slovakia?",
    answer: "Major manufacturers include Volkswagen (Bratislava), Kia (Žilina), Jaguar Land Rover (Nitra), and Stellantis/PSA (Trnava)."
  },
  {
    question: "What skills are most in demand?",
    answer: "Technical skills, quality control, automation, and process improvement are highly valued in the automotive sector."
  },
  {
    question: "Are there language courses available?",
    answer: "Yes, many language schools offer Slovak courses. Some employers provide language training as part of their benefits package."
  },
  {
    question: "What is the notice period for leaving a job?",
    answer: "The standard notice period is 1-3 months, depending on length of employment and contract terms."
  },
  {
    question: "Can I work overtime in Slovakia?",
    answer: "Yes, overtime is limited to 400 hours per year and must be compensated with at least 25% premium pay."
  },
  {
    question: "What is the retirement age in Slovakia?",
    answer: "The retirement age is gradually increasing and currently stands at around 63 years, varying by birth year and gender."
  },
  {
    question: "Are there trade unions in the automotive sector?",
    answer: "Yes, trade unions are active in the automotive sector and regularly negotiate collective agreements."
  },
  {
    question: "What safety standards are required?",
    answer: "Slovakia follows EU workplace safety standards. Employers must provide safety training and protective equipment."
  },
  {
    question: "Can I claim child benefits?",
    answer: "Yes, if you're employed and your children reside in Slovakia, you're eligible for child benefits."
  },
  {
    question: "What is the maternity leave policy?",
    answer: "Maternity leave is 34 weeks (or 43 weeks for single mothers), with 75% of salary compensation."
  },
  {
    question: "How do I register for healthcare?",
    answer: "Your employer will register you with a health insurance provider. You can then choose a general practitioner."
  },
  {
    question: "What is the quality of healthcare in Slovakia?",
    answer: "Healthcare quality is good, especially in major cities. Many doctors speak English, and waiting times are generally reasonable."
  },
  {
    question: "Can I use my TRC to travel in the EU?",
    answer: "Yes, you can travel within the Schengen area for up to 90 days in any 180-day period."
  },
  {
    question: "What happens if my TRC is lost or stolen?",
    answer: "Report it to the police immediately and apply for a replacement at the immigration office within 15 days."
  },
  {
    question: "Are there international schools in Slovakia?",
    answer: "Yes, major cities have international schools offering various curricula, including British and American systems."
  },
  {
    question: "What banking services are available?",
    answer: "Major Slovak banks offer comprehensive services in English, including online banking and international transfers."
  },
  {
    question: "Can I get a pension in Slovakia?",
    answer: "Yes, if you contribute to the Slovak pension system. There are also private pension options available."
  },
  {
    question: "What is the internet and mobile coverage like?",
    answer: "Slovakia has excellent internet and mobile coverage, with competitive prices for telecommunications services."
  },
  {
    question: "Are there professional development opportunities?",
    answer: "Yes, especially in the automotive sector. Many companies offer training programs and career advancement paths."
  },
  {
    question: "What are the housing options?",
    answer: "Options include apartments, houses, and company-provided accommodation. Most expatriates initially rent."
  },
  {
    question: "Is public transportation reliable?",
    answer: "Cities have good public transport systems. Many automotive plants provide employee shuttle services."
  },
  {
    question: "What are the environmental standards in manufacturing?",
    answer: "Slovakia follows strict EU environmental regulations. Automotive companies often exceed these standards."
  },
  {
    question: "Can I do freelance work with a TRC?",
    answer: "Additional permits may be required for freelance work. Consult with immigration authorities first."
  },
  {
    question: "What is the work culture like?",
    answer: "Professional but friendly, with emphasis on punctuality and reliability. Hierarchy is important in manufacturing."
  },
  {
    question: "Are there networking opportunities?",
    answer: "Yes, through professional associations, chambers of commerce, and expatriate communities."
  },
  {
    question: "What should I do in case of workplace injury?",
    answer: "Report it immediately to your supervisor. Medical treatment and compensation are covered by workplace insurance."
  },
  {
    question: "Can I take additional jobs?",
    answer: "Secondary employment is possible but requires approval from your main employer and possibly immigration authorities."
  },
  {
    question: "What are the emergency numbers in Slovakia?",
    answer: "112 for general emergencies, 155 for ambulance, 158 for police, and 150 for fire service."
  },
  {
    question: "Is there a probationary period for the TRC?",
    answer: "No formal probation for the TRC, but your employment contract will likely include a probationary period."
  }
];

export const prVisaTimeline: Record<string, TimelinePhase> = {
  preparation: {
    title: "Preparation Phase",
    duration: "1-2 months",
    tasks: [
      "Secure job offer",
      "Gather required documents",
      "Get documents translated",
      "Obtain criminal record check"
    ]
  },
  application: {
    title: "Application Process",
    duration: "2-3 months",
    tasks: [
      "Submit TRC application",
      "Provide biometric data",
      "Medical examination",
      "Pay application fees"
    ]
  },
  arrival: {
    title: "Arrival and Settlement",
    duration: "1 month",
    tasks: [
      "Register with authorities",
      "Open bank account",
      "Arrange accommodation",
      "Register for healthcare"
    ]
  },
  integration: {
    title: "Integration Phase",
    duration: "Ongoing",
    tasks: [
      "Language learning",
      "Cultural adaptation",
      "Professional networking",
      "Community involvement"
    ]
  }
};

export const additionalResources = {
  usefulLinks: [
    {
      title: "Slovak Immigration Portal",
      url: "https://www.mic.iom.sk/en/",
      description: "Official immigration information and services"
    },
    {
      title: "Foreign Police Department",
      url: "https://www.minv.sk/?residence",
      description: "Residence permit procedures and requirements"
    },
    {
      title: "Slovak Automotive Industry Association",
      url: "https://www.zapsr.sk/",
      description: "Industry information and opportunities"
    }
  ],
  emergencyContacts: {
    "Emergency Number": "112",
    "Foreign Police": "+421 9610 50701",
    "Healthcare Helpline": "155"
  },
  processingTools: {
    applicationStatus: "https://www.minv.sk/?residence",
    visaRequirements: "https://www.mzv.sk/web/en/consular_info"
  }
}; 