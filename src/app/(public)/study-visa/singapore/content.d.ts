export interface Benefit {
  title: string;
  description: string;
}

export interface Requirement {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Document {
  title: string;
  description: string;
}

export interface VisaType {
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Institution {
  name: string;
  location: string;
  ranking: string;
  specialties: string[];
}

export interface SingaporeStudyVisaContent {
  mainBenefits: Benefit[];
  visaRequirements: {
    acceptance: Requirement;
    financialProof: Requirement;
    englishProficiency: Requirement;
    insurance: Requirement;
  };
  applicationProcess: ProcessStep[];
  documentRequirements: {
    mandatory: Document[];
    additional: Document[];
  };
  visaTypes: {
    diplomaCertificate: VisaType;
    shortTerm: VisaType;
  };
  faqs: {
    general: FAQ[];
    internship: FAQ[];
    financial: FAQ[];
  };
  costs: {
    tuitionFees: {
      diploma: string;
      shortTerm: string;
    };
    livingExpenses: {
      accommodation: string;
      other: string;
    };
    visaFees: {
      application: string;
      issuance: string;
    };
  };
  institutions: Institution[];
  internshipHighlights: {
    eligibility: string[];
    benefits: string[];
    industries: string[];
    support: string[];
  };
} 