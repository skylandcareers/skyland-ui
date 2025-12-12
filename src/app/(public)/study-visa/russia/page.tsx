'use client';

import Head from 'next/head';
import {
  CheckCircle2,
  Timer,
  DollarSign,
  ArrowRight,
  Phone,
  Clock,
  Mail,
  Briefcase,
  GraduationCap,
  Building2
} from 'lucide-react';
import LeadForm from '@/components/LeadForm';


const content = {
  mainBenefits: [
    { description: "Affordable tuition fees with many state-funded scholarships" },
    { description: "Globally recognized degrees from prestigious Russian universities" },
    { description: "Work part-time up to 20 hours per week during studies" },
    { description: "Post-study work visa to stay and work in Russia" },
  ],
  eligibility: [
    "Valid passport",
    "Admission letter from a recognized Russian university",
    "Proof of sufficient financial means",
    "Medical insurance covering your stay",
    "Basic Russian or English language proficiency depending on program",
  ],
  benefits: [
    "Study in a country with strong technical and scientific education",
    "Exposure to rich culture and historical heritage",
    "Affordable living costs compared to many European countries",
    "Opportunities to build an international career with Russian ties",
  ],
  industries: [
    "Engineering & Technology",
    "Medicine & Healthcare",
    "Natural Sciences & Research",
    "Business & Management",
    "Arts & Humanities",
  ],
  applicationSteps: [
    { title: "Consultation & University Selection", description: "Get personalized guidance on Russian universities and courses." },
    { title: "Admission & Documentation", description: "Assistance with university admission and visa paperwork." },
    { title: "Visa Application & Travel", description: "Help with the visa process and travel preparations." },
  ],
  faqs: [
    {
      question: "Are degrees from Russia recognized worldwide?",
      answer: "Yes, many Russian universities are internationally accredited and recognized globally."
    },
    {
      question: "Can international students work in Russia?",
      answer: "Yes, students are allowed to work up to 20 hours per week during their studies."
    },
    {
      question: "What is the duration of the study visa?",
      answer: "Typically, study visas are issued for the duration of your program, often 1 to 6 years."
    },
    {
      question: "Is knowledge of Russian mandatory?",
      answer: "Many programs are available in English, but learning Russian is highly recommended for daily life."
    }
  ]
};

export default function RussiaStudyVisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Study in Russia – Scholarships & Work Opportunities | Skyland Immigration</title>
        <meta name="description" content="Study in Russia with affordable tuition, scholarships, and work permits. Expert assistance from Skyland Immigration." />
      </Head>

      {/* Sticky Apply Now */}
      <div className="fixed bottom-4 right-4 z-50">
        <a href="#apply" className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-full font-semibold shadow-lg transition">
          Apply Now
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                Study in <span className="text-yellow-400">Russia</span> – Gateway to World-Class Education
              </h1>
              <p className="text-lg text-blue-200">
                Affordable tuition, scholarships, and excellent work opportunities await you in Russia.
              </p>
              <div className="space-y-4 bg-blue-900 p-5 rounded-xl">
                {content.mainBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                    <span className="text-blue-100 text-base">{benefit.description}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#apply" className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#learn" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-2.5 rounded-lg font-medium hover:bg-white/10 transition">
                  Learn More
                </a>
              </div>
            </div>
            <div className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Fact icon={Timer} title="Course Duration" value="1-6 Years" />
          <Fact icon={Briefcase} title="Part-Time Work" value="20 Hrs/Week" />
          <Fact icon={DollarSign} title="Tuition Fees" value="Affordable / Scholarships" />
          <Fact icon={GraduationCap} title="Post-Study Work Visa" value="Available" />
        </div>
      </SectionWrapper>

      {/* Why Study in Russia */}
      <SectionWrapper id="learn">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Study in Russia?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BenefitList title="Eligibility" items={content.eligibility} />
          <BenefitList title="Key Advantages" items={content.benefits} />
        </div>
      </SectionWrapper>

      {/* Popular Career Fields */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Career Fields</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <Building2 className="text-blue-800 mb-3 w-6 h-6" />
              <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Skyland Immigration?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: CheckCircle2, title: "High Visa Success", desc: "Our Russia student visa approval rate is 90%+" },
            { icon: Clock, title: "Fast Turnaround", desc: "Admissions and visa processing completed swiftly." },
            { icon: Phone, title: "1:1 Support", desc: "Personalized guidance from our immigration experts." },
            { icon: Mail, title: "Full Assistance", desc: "End-to-end help from SOPs to accommodation." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md">
              <Icon className="w-6 h-6 text-blue-800 mb-2" />
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Application Process */}
      <SectionWrapper id="apply">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.applicationSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-6 bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {content.faqs.map(({ question, answer }, i) => (
            <details key={i} className="bg-white rounded-xl shadow-md p-5">
              <summary className="font-semibold cursor-pointer">{question}</summary>
              <p className="mt-2 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

function SectionWrapper({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 py-14 bg-white rounded-xl my-10 shadow-lg">
      {children}
    </section>
  );
}

function Fact({ icon: Icon, title, value }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string }) {
  return (
    <div className="flex items-center gap-4 bg-blue-100 p-5 rounded-xl shadow-sm">
      <Icon className="w-8 h-8 text-blue-700" />
      <div>
        <h4 className="font-semibold text-blue-900">{title}</h4>
        <p className="text-blue-800 font-medium">{value}</p>
      </div>
    </div>
  );
}

function BenefitList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
