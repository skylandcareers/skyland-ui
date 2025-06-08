declare module '@/app/study-visa/ireland/content' {
  export interface Benefit {
    title: string;
    description: string;
  }

  export interface VisaType {
    title: string;
    description: string;
    requirements: string[];
    benefits: string[];
  }

  export interface University {
    name: string;
    location: string;
    ranking: string;
    specialties: string[];
  }

  export interface ApplicationStep {
    step: number;
    title: string;
    description: string;
  }

  export interface FAQ {
    question: string;
    answer: string;
  }

  export interface FAQSection {
    [key: string]: FAQ[];
  }

  export interface IrelandStudyVisaContent {
    mainBenefits: Benefit[];
    visaTypes: {
      [key: string]: VisaType;
    };
    universities: University[];
    applicationProcess: ApplicationStep[];
    faqs: FAQSection;
    costs: {
      tuitionFees: {
        undergraduate: string;
        postgraduate: string;
        phd: string;
      };
      livingExpenses: {
        dublin: string;
        otherCities: string;
      };
      visaFees: {
        application: string;
        registration: string;
      };
    };
  }

  export const irelandStudyVisaContent: IrelandStudyVisaContent;
} 