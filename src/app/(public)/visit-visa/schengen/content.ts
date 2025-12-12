// Content types and data for Schengen Visa

import { FAQ } from './types';

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

interface TimelinePhase {
  title: string;
  duration: string;
  tasks: string[];
}

export interface CityVisit {
  name: string;
  country: string;
  highlights: string[];
  travelTips: string;
}

export const schengenVisaContent = {
  meta: {
    lastUpdated: new Date().toISOString(),
    version: "2.0"
  },

  // Core Visa Information
  visaTypes: {
    shortStay: {
      title: "Short-Stay Visa (Type C)",
      description: "For visits up to 90 days within any 180-day period in the Schengen Area.",
      permittedActivities: [
        "Tourism and sightseeing",
        "Business meetings and conferences",
        "Visiting family and friends",
        "Cultural and sports events",
        "Short-term studies or courses",
        "Medical treatment",
        "Official visits"
      ],
      prohibitedActivities: [
        "Taking up employment",
        "Long-term studies",
        "Establishing permanent residence",
        "Working as a freelancer",
        "Starting a business"
      ],
      benefits: [
        "Multiple entry options available",
        "Valid for all Schengen countries",
        "Flexible travel dates within validity",
        "Can combine multiple purposes in one trip"
      ]
    },
    airportTransit: {
      title: "Airport Transit Visa (Type A)",
      description: "Required for passing through the international transit area of airports in Schengen countries.",
      permittedActivities: [
        "Transit through airport international zone",
        "Connecting flights in Schengen airports",
        "Short layovers between flights"
      ],
      prohibitedActivities: [
        "Entering Schengen territory",
        "Leaving the international transit area",
        "Overnight stays outside the airport",
        "Changing airports within a Schengen country"
      ],
      benefits: [
        "Faster processing time",
        "Lower visa fee",
        "Simpler documentation requirements",
        "Valid for multiple transits if requested"
      ]
    }
  },

  // Detailed Eligibility Requirements
  eligibility: {
    general: {
      passport: "Valid for at least 3 months beyond intended stay with 2 blank pages",
      intent: "Must demonstrate legitimate purpose of visit",
      funds: "Minimum €50-100 per day of stay",
      insurance: "Medical coverage of €30,000 minimum"
    },
    financial: {
      minimumAmount: "€50-100 per day depending on country",
      proofRequirements: [
        "Bank statements for last 6 months",
        "Fixed deposits",
        "Investment portfolios",
        "Salary slips"
      ],
      sponsorship: {
        requiredDocs: [
          "Formal invitation letter",
          "Sponsor's financial documents",
          "Proof of relationship"
        ]
      }
    },
    documentation: {
      mandatory: [
        "Valid passport",
        "Visa application form",
        "Recent photographs",
        "Travel insurance",
        "Flight itinerary",
        "Hotel bookings",
        "Bank statements"
      ],
      recommended: [
        "Previous visas",
        "Income tax returns",
        "Employment letter",
        "Property documents"
      ]
    },
    specialCases: {
      minors: {
        requirements: [
          "Birth certificate",
          "Parents' authorization",
          "School enrollment proof",
          "Guardian documents"
        ]
      },
      business: {
        requirements: [
          "Company registration",
          "Business invitation",
          "Trade license",
          "Tax returns"
        ]
      },
      visitingFamily: {
        requirements: [
          "Invitation letter",
          "Host's residence permit",
          "Proof of relationship",
          "Host's financial documents"
        ]
      }
    }
  },

  // Comprehensive Application Guide
  application: {
    steps: [
      {
        number: 1,
        title: "Document Collection",
        details: "Gather all required documents as per checklist",
        tips: [
          "Keep documents organized",
          "Make copies of everything",
          "Translate if needed"
        ]
      },
      {
        number: 2,
        title: "Application Submission",
        details: "Submit at visa center or embassy",
        tips: [
          "Arrive on time",
          "Bring all originals",
          "Pay fees in advance"
        ]
      }
    ],
    processing: {
      standard: "15 calendar days",
      maximum: "45 calendar days",
      factors: [
        "Peak season delays",
        "Document verification time",
        "Security checks",
        "Embassy workload"
      ]
    }
  },

  faqs: {
    general: [
      {
        question: "How early should I apply for my Schengen visa?",
        answer: "You can apply up to 6 months before travel, but 4–6 weeks before departure is recommended."
      },
      {
        question: "Can I visit multiple Schengen countries with one visa?",
        answer: "Yes, the visa allows travel throughout the 27 Schengen countries during its validity."
      },
      {
        question: "Is travel insurance mandatory for a Schengen visa?",
        answer: "Yes, it must cover at least €30,000 for medical emergencies and be valid in all Schengen states."
      },
      {
        question: "Can I apply for a Schengen visa without a travel history?",
        answer: "Yes, but first-time applicants may face stricter scrutiny and must provide solid supporting documents."
      }
    ],
    documentation: [
      {
        question: "Do I need to provide original bank statements?",
        answer: "Yes, original stamped bank statements are required, typically for the last 3–6 months."
      },
      {
        question: "Is flight reservation mandatory for application?",
        answer: "Yes, you must show confirmed flight bookings (can be tentative), but don’t purchase tickets until visa is approved."
      },
      {
        question: "Do I need hotel bookings for every night of my stay?",
        answer: "Yes, proof of accommodation is required for the entire trip duration."
      },
      {
        question: "Are invitation letters required for family or friend visits?",
        answer: "Yes, an invitation letter and host’s ID and residence proof are usually required."
      },
      {
        question: "Is a cover letter needed?",
        answer: "Yes, it helps clarify your travel purpose, itinerary, and ties to your home country."
      }
    ],
    financial: [
      {
        question: "How much bank balance is required?",
        answer: "Requirements vary by country, but generally €50–100 per day of stay is expected."
      },
      {
        question: "Can a relative in Europe sponsor my trip?",
        answer: "Yes, but they must provide a formal invitation, proof of funds, and often accommodation."
      },
      {
        question: "Can I use my spouse’s or parent’s bank statements?",
        answer: "Yes, with supporting relationship proof and a sponsorship declaration."
      },
      {
        question: "Are credit card statements acceptable as proof?",
        answer: "They may supplement your application, but bank statements are primary."
      }
    ],
    interview: [
      {
        question: "What questions are asked in a Schengen visa interview?",
        answer: "Common questions include travel purpose, itinerary, financial means, and ties to your home country."
      },
      {
        question: "Is interview mandatory for all applicants?",
        answer: "First-time applicants usually require an interview; repeat travelers may be exempt."
      },
      {
        question: "How should I dress for the visa interview?",
        answer: "Dress formally and conservatively to make a good impression."
      },
      {
        question: "Can I bring a translator to the interview?",
        answer: "Usually no; interviews are expected to be conducted in English or a local official language."
      }
    ],
    validity: [
      {
        question: "How long is a Schengen visa valid?",
        answer: "It varies from single-entry for exact trip dates to multi-entry visas valid for up to 5 years."
      },
      {
        question: "Can I extend my Schengen visa?",
        answer: "Only in exceptional circumstances like force majeure, humanitarian reasons, or serious illness."
      },
      {
        question: "Can I apply for a long-term Schengen visa?",
        answer: "Frequent travelers with good visa history may apply for multi-year visas (1–5 years)."
      },
      {
        question: "What is the 90/180 rule?",
        answer: "You can stay up to 90 days in any 180-day period across the Schengen Area."
      }
    ],
    entry: [
      {
        question: "Can I enter any Schengen country first?",
        answer: "Yes, unless your visa is marked as Limited Territorial Validity (LTV)."
      },
      {
        question: "What if my travel plans change after getting the visa?",
        answer: "You can adjust within the visa's validity, but must still respect the main destination rule."
      },
      {
        question: "What is the main destination rule?",
        answer: "You should apply to the country where you'll spend the most time, or the first port of entry if time is equal."
      },
      {
        question: "Can I leave and re-enter with a single-entry visa?",
        answer: "No, single-entry visas allow one entry only. Multiple entries require a multi-entry visa."
      }
    ],
    restrictions: [
      {
        question: "Can I work on a Schengen tourist visa?",
        answer: "No, paid work is not allowed. Business meetings and conferences are permitted with appropriate documentation."
      },
      {
        question: "Can I study on a Schengen visa?",
        answer: "Only short-term courses under 90 days are allowed. Longer study requires a student visa."
      },
      {
        question: "Can I do volunteer work on a Schengen tourist visa?",
        answer: "Only informal or very short-term volunteer activities are allowed. Structured programs need appropriate visas."
      },
      {
        question: "Can I convert my tourist visa to another visa while in the Schengen Area?",
        answer: "No, you must return to your home country and apply from there."
      }
    ],
    denials: [
      {
        question: "What are common reasons for Schengen visa refusal?",
        answer: "Insufficient funds, unclear travel purpose, weak home ties, or incomplete documentation."
      },
      {
        question: "Can I appeal a visa refusal?",
        answer: "Yes, appeals must be submitted within the timeframe specified in the refusal letter."
      },
      {
        question: "Will a previous visa refusal affect future applications?",
        answer: "It can, but reapplication with improved documentation and explanations may succeed."
      },
      {
        question: "Can I apply again immediately after refusal?",
        answer: "Yes, but it's better to address the reasons for denial before reapplying."
      }
    ],
    family: [
      {
        question: "Do children need a separate Schengen visa?",
        answer: "Yes, all minors must apply individually and meet documentation requirements."
      },
      {
        question: "What documents are needed for minors?",
        answer: "Birth certificate, parental consent letter, and copies of parents' passports are typically required."
      },
      {
        question: "Can a single parent take a child to Schengen Area?",
        answer: "Yes, but consent from the non-traveling parent is required, along with supporting documents."
      }
    ],
    process: [
      {
        question: "How long does it take to get a Schengen visa?",
        answer: "Usually 15 working days, but delays can happen depending on season and embassy workload."
      },
      {
        question: "Do I need to submit biometrics for Schengen visa?",
        answer: "Yes, unless you submitted fingerprints in the past 59 months."
      },
      {
        question: "Can I apply for a Schengen visa online?",
        answer: "Application forms can be filled online for many countries, but documents must be submitted in person."
      }
    ]
  },

  mainBenefits: [
    {
      title: "Travel Across 27 Countries",
      description: "Visit multiple European nations with a single visa"
    },
    {
      title: "Tourism and Sightseeing",
      description: "Explore Europe's rich cultural heritage and landmarks"
    },
    {
      title: "Business Activities",
      description: "Attend meetings, conferences, and business events"
    },
    {
      title: "Visit Family/Friends",
      description: "Reconnect with loved ones living in Schengen countries"
    }
  ],
  visaRequirements: {
    intent: {
      title: "Genuine Travel Purpose",
      description: "Must demonstrate legitimate reason for visit and intent to return"
    },
    passport: {
      title: "Valid Passport",
      description: "With at least 3 months validity beyond stay and two blank pages"
    },
    financialProof: {
      title: "Sufficient Financial Means",
      description: "Proof of funds to cover all expenses during stay"
    },
    insurance: {
      title: "Travel Medical Insurance",
      description: "Minimum €30,000 coverage for medical emergencies and repatriation"
    }
  },
  applicationProcess: [
    {
      step: 1,
      title: "Determine Application Country",
      description: "Identify which Schengen country's consulate to apply through"
    },
    {
      step: 2,
      title: "Complete Application Form",
      description: "Fill out the uniform Schengen visa application form"
    },
    {
      step: 3,
      title: "Gather Required Documents",
      description: "Prepare all supporting documents per checklist"
    },
    {
      step: 4,
      title: "Schedule Appointment",
      description: "Book visa appointment with consulate or visa center"
    },
    {
      step: 5,
      title: "Submit Application",
      description: "Attend appointment with biometrics collection"
    }
  ],

  // Interview Preparation
  interview: {
    commonQuestions: [
      {
        question: "Purpose of Visit",
        tips: [
          "Be specific about destinations and activities",
          "Have detailed itinerary ready",
          "Prepare supporting documents"
        ]
      },
      {
        question: "Financial Situation",
        tips: [
          "Show stable income sources",
          "Provide complete financial records",
          "Explain any large deposits"
        ]
      },
      {
        question: "Ties to Home Country",
        tips: [
          "Emphasize employment, property, family",
          "Show proof of obligations to return",
          "Highlight travel history showing compliance"
        ]
      }
    ],
    preparationTips: [
      {
        title: "Document Organization",
        details: "Arrange documents in order of checklist, use dividers for easy access"
      },
      {
        title: "Professional Appearance",
        details: "Dress neatly and professionally for the appointment"
      },
      {
        title: "Clear Communication",
        details: "Answer questions directly and honestly, provide documents when asked"
      }
    ],
    dosDonts: {
      dos: [
        "Arrive early for appointment",
        "Bring all original documents plus copies",
        "Be polite and cooperative",
        "Review your application details beforehand"
      ],
      donts: [
        "Don't provide false information",
        "Don't argue with consular staff",
        "Don't bring unnecessary items",
        "Don't memorize answers"
      ]
    }
  },

  // Travel Tips
  travelTips: {
    beforeTravel: [
      {
        title: "Document Check",
        description: "Verify all travel documents"
      },
      {
        title: "Insurance Validation",
        description: "Confirm insurance coverage"
      }
    ],
    duringStay: [
      {
        title: "Keep Documents Safe",
        description: "Store documents securely"
      },
      {
        title: "Follow Rules",
        description: "Adhere to visa conditions"
      }
    ],
    customs: {
      allowed: [
        "Personal items",
        "Prescribed medicines",
        "Limited cash"
      ],
      restricted: [
        "Excess currency",
        "Prohibited goods",
        "Commercial items"
      ]
    }
  },

  // Fee Structure
  feeStructure: {
    basic: [
      {
        type: "Visa Application Fee",
        amount: 80,
        currency: "EUR",
        notes: "Standard fee for adults"
      },
      {
        type: "Children (6-12 years)",
        amount: 40,
        currency: "EUR",
        notes: "Reduced fee"
      }
    ],
    additional: [
      {
        service: "Visa Center Service Fee",
        amount: "20-40",
        currency: "EUR",
        availability: "If applying through VAC"
      },
      {
        service: "Courier Service",
        amount: "15-30",
        currency: "EUR",
        availability: "Optional"
      }
    ],
    paymentMethods: [
      {
        method: "Cash",
        accepted: ["Local currency equivalent"],
        notes: "At some consulates"
      },
      {
        method: "Credit/Debit Cards",
        accepted: ["Visa", "MasterCard"],
        notes: "Most common method"
      }
    ]
  },

  // Rejection Prevention
  rejectionPrevention: {
    applicationIssues: [
      {
        issue: "Incomplete Application",
        prevention: "Double-check all form fields and signatures",
        importance: "Critical"
      },
      {
        issue: "Insufficient Funds",
        prevention: "Show stable income and adequate savings",
        importance: "High"
      },
      {
        issue: "Unclear Travel Purpose",
        prevention: "Provide detailed itinerary and supporting documents",
        importance: "High"
      }
    ],
    interviewIssues: [
      {
        issue: "Weak Home Ties",
        prevention: "Document employment, property, family obligations",
        importance: "Critical"
      },
      {
        issue: "Inconsistent Information",
        prevention: "Ensure all details match supporting documents",
        importance: "High"
      },
      {
        issue: "Previous Violations",
        prevention: "Explain any past immigration issues proactively",
        importance: "High"
      }
    ]
  },

  // Additional Resources
  resources: {
    officialWebsites: [
      {
        name: "Schengen Visa Info",
        url: "https://www.schengenvisainfo.com",
        description: "Official portal for Schengen visa information"
      },
      {
        name: "EU Immigration Portal",
        url: "https://ec.europa.eu/immigration",
        description: "European Commission's official immigration site"
      }
    ],
    emergencyContacts: [
      {
        name: "European Emergency Number",
        number: "112",
        availability: "24/7",
        purpose: "Police, medical, fire emergencies"
      }
    ]
  },

  // Post-Arrival Information
  postArrival: {
    firstSteps: [
      {
        action: "Check Entry Stamp",
        timing: "Immediately",
        details: "Verify passport was stamped with correct entry date"
      },
      {
        action: "Register Accommodation",
        timing: "Within 3 days",
        details: "Required in some countries (check local rules)"
      }
    ],
    usefulServices: [
      {
        category: "Transportation",
        options: [
          "Eurail passes",
          "Local transit apps",
          "Bike sharing systems"
        ]
      },
      {
        category: "Healthcare",
        options: [
          "EHIC/GHIC card if eligible",
          "List of English-speaking doctors",
          "24/7 pharmacy locations"
        ]
      }
    ],
    safetyTips: [
      "Beware of pickpockets in tourist areas",
      "Keep emergency numbers handy",
      "Register with your embassy if staying long"
    ]
  }
};

export const schengenVisaFAQs: FAQ[] = [
  // Basic Application Process
  {
    question: "What is a Schengen visa?",
    answer: "A Schengen visa is a short-stay visa that allows you to travel to any of the 27 countries in the Schengen Area for up to 90 days within a 180-day period for tourism, business, or transit purposes."
  },
  {
    question: "Which countries are part of the Schengen Area?",
    answer: "The Schengen Area consists of 27 European countries: Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland, and Monaco."
  },
  {
    question: "What are the different types of Schengen visas?",
    answer: "The main types are: Type A (Airport Transit), Type C (Short-stay), and various purpose-specific visas like tourist, business, medical, study, or family visit visas. Each type has specific requirements and permitted activities."
  },
  {
    question: "How much does a Schengen visa cost?",
    answer: "The standard fee is €80 for adults, €40 for children aged 6-12, and free for children under 6. Certain categories like students, researchers, or family members of EU citizens may qualify for reduced fees or waivers."
  },
  {
    question: "What is the processing time for a Schengen visa?",
    answer: "Standard processing takes 15 calendar days, but it can extend to 30-45 days in some cases. During peak seasons or for complex applications, it might take longer. Some embassies offer expedited processing for additional fees."
  },
  // Document Requirements
  {
    question: "What are the basic documents required for a Schengen visa?",
    answer: "Essential documents include: valid passport, visa application form, recent photos, travel insurance, flight reservations, hotel bookings, proof of financial means, employment/student status proof, and cover letter explaining your travel purpose."
  },
  {
    question: "What are the passport requirements for a Schengen visa?",
    answer: "Your passport must be valid for at least 3 months beyond your planned return date, have at least 2 blank pages, and not be older than 10 years. It should be in good condition without any damage."
  },
  {
    question: "What should the travel insurance cover?",
    answer: "Travel insurance must cover medical emergencies, hospitalization, and repatriation with minimum coverage of €30,000. It should be valid for all Schengen countries throughout your stay plus extra days for safety."
  },
  {
    question: "What financial documents are required?",
    answer: "Bank statements for the last 6 months, salary slips, tax returns, property ownership documents, or sponsorship letters. You should show approximately €50-100 per day of stay, though requirements vary by country."
  },
  {
    question: "What should be included in the cover letter?",
    answer: "The cover letter should detail your travel purpose, itinerary, accommodation plans, financial means, and ties to your home country. It should be professional, concise, and clearly explain why you're traveling and why you'll return."
  },
  // Application Process
  {
    question: "Where should I submit my visa application?",
    answer: "Apply at the embassy/consulate of your main destination country (where you'll spend the most time). If visiting multiple countries equally, apply to the country of first entry. Many countries outsource to visa application centers."
  },
  {
    question: "How early can I apply for a Schengen visa?",
    answer: "You can apply up to 6 months before your intended travel date. It's recommended to apply at least 3-4 weeks before travel, or 2-3 months during peak seasons (summer, holidays)."
  },
  {
    question: "Do I need an appointment for visa submission?",
    answer: "Yes, most embassies and visa centers require a pre-booked appointment. Book well in advance as slots fill quickly, especially during peak seasons. Some centers offer premium services for urgent applications."
  },
  {
    question: "What happens during the visa interview?",
    answer: "The interview assesses your travel purpose, financial capacity, ties to home country, and return intention. Be prepared to explain your itinerary, answer questions about your job/studies, and demonstrate why you'll return home."
  },
  {
    question: "Can I track my visa application status?",
    answer: "Most visa centers provide online tracking using your application reference number. Some also offer SMS or email updates. Processing status can usually be checked through their official websites."
  },
  // Travel Planning
  {
    question: "Should I book flights before getting the visa?",
    answer: "No, only provide flight reservations/itineraries initially. Book actual tickets after visa approval. Many travel agencies offer flight reservation services specifically for visa applications."
  },
  {
    question: "What type of accommodation proof is needed?",
    answer: "Provide hotel reservations, rental agreements, or invitation letters from hosts. All accommodation for your entire stay must be documented. Booking.com and similar sites offer free cancellation options suitable for visa applications."
  },
  {
    question: "Can I change my travel dates after getting the visa?",
    answer: "Minor changes within the visa validity period are allowed. However, significant changes to your travel dates or itinerary might require a new visa application, especially if they affect the visa's validity period."
  },
  {
    question: "How detailed should my travel itinerary be?",
    answer: "Include day-by-day plans showing cities, accommodation, major attractions, and transport between locations. The itinerary should be realistic and match your financial means and stated travel purpose."
  },
  {
    question: "What's the best way to plan a multi-country Schengen trip?",
    answer: "Plan your route logically to minimize travel time and costs. Consider transport options between cities, local festivals/events, and peak tourist seasons. Keep daily plans realistic and allow flexibility."
  },
  // During Stay
  {
    question: "How is the 90/180 day rule calculated?",
    answer: "The rule allows 90 days of stay within any 180-day period. Use the official Schengen calculator to check your days. The count is rolling, so check backward from each day of your planned stay."
  },
  {
    question: "Do I need to register with local authorities?",
    answer: "Some countries require registration within a certain period (usually 3-7 days). Hotels typically handle this, but if staying in private accommodation, you may need to register yourself at the local police station or city hall."
  },
  {
    question: "What documents should I carry while traveling?",
    answer: "Always carry your passport with visa, travel insurance card, accommodation details, return ticket, and sufficient funds. Keep copies of important documents separately and have emergency contact numbers."
  },
  {
    question: "Can I work while on a tourist visa?",
    answer: "No, tourist visas don't permit employment. While remote work for your home country employer isn't explicitly prohibited, your primary purpose must remain tourism. Business activities require a business visa."
  },
  {
    question: "What should I do if I lose my passport?",
    answer: "Immediately contact your embassy, file a police report, and apply for an emergency travel document. Inform local immigration authorities and keep copies of your visa and passport details."
  },
  // Special Categories
  {
    question: "What additional documents do students need?",
    answer: "Students should provide enrollment proof, leave approval from school/university, student ID, and may need to show parent's financial documents if sponsored. Some countries offer reduced visa fees for students."
  },
  {
    question: "How do I apply for a business visa?",
    answer: "Business visitors need an invitation letter from the European company, company registration documents, letter from their employer, and detailed business activity plans. The invitation should specify meeting dates and purpose."
  },
  {
    question: "What's required for visiting family/friends?",
    answer: "You'll need an invitation letter, host's residence permit/passport copy, proof of relationship (birth certificates, marriage certificates), and the host's financial documents if they're sponsoring your stay."
  },
  {
    question: "How do I apply with children?",
    answer: "Children need their own visa application, birth certificate, parental authorization from both parents, school enrollment proof, and parents' financial documents. If traveling with one parent, authorization from the other is required."
  },
  {
    question: "What if I'm retired or self-employed?",
    answer: "Retired applicants should show pension statements and retirement benefits. Self-employed individuals need business registration, tax returns, and client contracts. Both should demonstrate stable financial means."
  },
  // Multiple Entry Visas
  {
    question: "How can I get a multiple-entry visa?",
    answer: "Multiple-entry visas are typically granted to travelers with positive visa history, frequent travel needs, and strong financial standing. First-time applicants usually receive single-entry visas unless specifically justified."
  },
  {
    question: "What's the maximum validity for multiple-entry visas?",
    answer: "Multiple-entry visas can be issued for up to 5 years, depending on your travel history, purpose, and compliance with previous visa conditions. The 90/180 day rule still applies within the validity period."
  },
  {
    question: "Do I need different insurance for multiple-entry visas?",
    answer: "Yes, insurance should cover the entire visa validity period or you must prove you'll purchase insurance for each trip. Some insurers offer special policies for multiple-entry visa holders."
  },
  {
    question: "Can I visit non-Schengen countries between Schengen stays?",
    answer: "Yes, you can travel to non-Schengen countries between Schengen visits. Ensure you respect the 90/180 day rule for your Schengen stays and have appropriate visas for non-Schengen countries."
  },
  {
    question: "How do I calculate stays with a multiple-entry visa?",
    answer: "Each stay counts toward the 90/180 day limit. Use the official Schengen calculator to track your stays. The count resets after 180 days from each entry."
  },
  // Visa Rejection and Appeals
  {
    question: "What are common reasons for visa rejection?",
    answer: "Common reasons include: insufficient funds, unclear travel purpose, weak ties to home country, incomplete documentation, previous visa violations, suspected false information, or inconsistent statements during interview."
  },
  {
    question: "How do I appeal a visa rejection?",
    answer: "File an appeal within the specified timeframe (usually 30 days). Provide additional documents addressing the rejection reasons. Each country has its own appeal process and fees. Consider legal assistance for complex cases."
  },
  {
    question: "Can I reapply after rejection?",
    answer: "Yes, you can reapply, but address the reasons for previous rejection. Strengthen your application with additional documents, clearer purpose, and stronger financial proof. Some countries require waiting periods between applications."
  },
  {
    question: "Should I mention previous rejections in new applications?",
    answer: "Yes, always disclose previous visa rejections. Hiding this information can lead to automatic rejection and longer-term visa bans. Explain what you've done to address the previous rejection reasons."
  },
  {
    question: "What if there's a mistake in my rejection reason?",
    answer: "Request clarification from the embassy and provide evidence of the mistake. Some countries have specific procedures for correcting factual errors in rejection decisions."
  },
  // Emergency Situations
  {
    question: "What if I need to travel urgently?",
    answer: "Some embassies offer expedited processing for genuine emergencies (medical, death in family). Provide documentation proving the emergency. Additional fees may apply for urgent processing."
  },
  {
    question: "What if I need to extend my stay due to emergency?",
    answer: "Contact local immigration authorities immediately. Extensions are possible for force majeure, medical emergencies, or serious personal reasons. Provide documentation supporting your extension request."
  },
  {
    question: "What if my visa expires during a medical emergency?",
    answer: "Contact immigration authorities and your embassy. Medical emergencies usually qualify for visa extensions. Keep all medical documentation and inform authorities before your visa expires."
  },
  {
    question: "What if my passport is stolen with the visa?",
    answer: "File a police report, contact your embassy for a new passport, and the Schengen embassy for visa replacement procedures. Keep copies of all documents and report the theft immediately."
  },
  {
    question: "What emergency numbers should I know?",
    answer: "Save emergency numbers: 112 (EU emergency), local police, your embassy, insurance provider's 24/7 assistance, and local emergency medical services. Keep both digital and physical copies."
  },
  // Post-Travel
  {
    question: "Does a used Schengen visa help future applications?",
    answer: "Yes, a positive travel history with proper visa compliance improves chances for future approvals and longer validity periods. Keep records of your travels and any documents showing you followed visa rules."
  },
  {
    question: "Should I keep my expired visa and travel documents?",
    answer: "Yes, keep expired visas, entry/exit stamps, and travel documents. They prove travel history and compliance, which helps in future visa applications. Digital copies are also useful."
  },
  {
    question: "Can I get a longer visa next time?",
    answer: "With a good travel history, you're more likely to receive longer-validity and multiple-entry visas. Maintain strong financial records and demonstrate consistent travel purposes."
  },
  {
    question: "What feedback can I provide about my visa experience?",
    answer: "Many visa centers and embassies have feedback forms or satisfaction surveys. Your input helps improve services. Report both positive experiences and areas for improvement."
  },
  {
    question: "How do I prepare for future applications?",
    answer: "Maintain organized records of past travel, keep financial documents updated, and stay informed about visa requirement changes. Build a strong travel history and maintain ties to your home country."
  }
];

export const schengenVisaTimeline: Record<string, TimelinePhase> = {
  preparation: {
    title: "Preparation Phase",
    duration: "2-4 weeks",
    tasks: [
      "Determine main destination country",
      "Gather required documents",
      "Purchase travel insurance",
      "Book flight/hotel (refundable options)"
    ]
  },
  application: {
    title: "Application Submission",
    duration: "1-2 weeks",
    tasks: [
      "Complete application form",
      "Schedule appointment",
      "Pay visa fee",
      "Submit biometrics"
    ]
  },
  processing: {
    title: "Processing Period",
    duration: "15-30 days",
    tasks: [
      "Wait for visa decision",
      "Respond to any additional requests",
      "Collect passport when ready"
    ]
  }
};

export const schengenVisaCities: CityVisit[] = [
  {
    name: "Paris",
    country: "France",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral"
    ],
    travelTips: "Book attractions in advance to avoid long queues"
  },
  {
    name: "Amsterdam",
    country: "Netherlands",
    highlights: [
      "Canal Tours",
      "Van Gogh Museum",
      "Royal Palace"
    ],
    travelTips: "Use public transport for easy city navigation"
  },
  {
    name: "Berlin",
    country: "Germany",
    highlights: [
      "Brandenburg Gate",
      "East Side Gallery",
      "Museum Island"
    ],
    travelTips: "Get a Berlin Welcome Card for transport and attractions"
  }
];