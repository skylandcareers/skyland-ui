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
    { description: "Affordable tuition and low cost of living" },
    { description: "Work up to 20 hours per week during studies" },
    { description: "Post-study work opportunities available" },
    { description: "English-taught programs in a safe environment" },
  ],
  eligibility: [
    "Valid passport",
    "Admission letter from a Maltese educational institution",
    "Proof of financial means",
    "Valid health insurance",
    "English language proficiency (IELTS, TOEFL, etc.)",
  ],
  benefits: [
    "EU-standard education at affordable rates",
    "Pathway to further opportunities in Europe",
    "Growing international student community",
    "Ideal Mediterranean climate and safe environment",
  ],
  industries: [
    "Business & Management",
    "Information Technology",
    "Hospitality & Tourism",
    "Finance & Banking",
    "Health Sciences",
    "Creative Arts",
  ],
  applicationSteps: [
    { title: "Initial Counseling & Profile Assessment", description: "Identify the best universities and courses suited to your goals." },
    { title: "Document Compilation & Application", description: "Support with admissions paperwork and securing an offer letter." },
    { title: "Visa Application & Pre-departure", description: "End-to-end guidance through visa filing and travel planning." },
  ],
  faqs: [
    {
      question: "Is Malta good for international students?",
      answer: "Yes, Malta offers quality education, a peaceful environment, and English-medium instruction."
    },
    {
      question: "Can I work part-time during studies?",
      answer: "Yes, students are allowed to work up to 20 hours per week after the first 90 days."
    },
    {
      question: "Are scholarships available?",
      answer: "Some institutions in Malta offer scholarships or fee waivers based on merit."
    },
    {
      question: "Can I stay in Malta after graduation?",
      answer: "Yes, you can apply for a post-study work permit or job-seeker visa."
    }
  ]
};

export default function MaltaStudyVisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Study in Malta – Affordable EU Education | Skyland Immigration</title>
        <meta name="description" content="Study in Malta with expert visa guidance from Skyland Immigration. Explore EU education, work options & post-study pathways." />
      </Head>

      <div className="fixed bottom-4 right-4 z-50">
        <a href="#apply" className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-full font-semibold shadow-lg transition">
          Apply Now
        </a>
      </div>

      <section className="bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Study in <span className="text-yellow-300">Malta</span> – Your Gateway to Europe
              </h1>
              <p className="text-lg text-blue-200">
                Experience quality education, part-time jobs, and post-study opportunities in an EU country.
              </p>
              <div className="space-y-4 bg-blue-800 p-5 rounded-xl">
                {content.mainBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                    <span className="text-blue-100 text-base">{benefit.description}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#apply" className="inline-flex items-center gap-2 bg-yellow-300 text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-200 transition">
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

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Fact icon={Timer} title="Course Duration" value="1-4 Years" />
          <Fact icon={Briefcase} title="Part-Time Work" value="20 Hrs/Week" />
          <Fact icon={DollarSign} title="Tuition Fees" value="Low / Scholarships" />
          <Fact icon={GraduationCap} title="Post-Study Work Visa" value="Available" />
        </div>
      </SectionWrapper>

      <SectionWrapper id="learn">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Study in Malta?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BenefitList title="Eligibility" items={content.eligibility} />
          <BenefitList title="Key Advantages" items={content.benefits} />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Career Fields</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <Building2 className="text-blue-700 mb-3 w-6 h-6" />
              <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Skyland Immigration?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: CheckCircle2, title: "High Visa Success", desc: "95%+ visa approval rate for Malta." },
            { icon: Clock, title: "Quick Processing", desc: "Faster admission & visa turnarounds." },
            { icon: Phone, title: "Personal Guidance", desc: "Direct expert help at every step." },
            { icon: Mail, title: "Full Support", desc: "Help with SOP, accommodation & more." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md">
              <Icon className="w-6 h-6 text-blue-700 mb-2" />
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="apply">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.applicationSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-6 bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

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