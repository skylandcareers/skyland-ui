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
    { description: "Tuition-free or low-cost education at top German universities" },
    { description: "Work part-time up to 20 hours per week during studies" },
    { description: "Post-study work permit for up to 18 months" },
    { description: "Pathway to permanent residency in Germany" },
  ],
  eligibility: [
    "Valid passport",
    "Admission letter from a recognized German university",
    "Proof of financial resources (blocked account or scholarship)",
    "Health insurance coverage",
    "German or English language proficiency depending on course",
  ],
  benefits: [
    "High-quality education with worldwide recognition",
    "No tuition fees for public universities (only semester fees)",
    "Strong research and industry connections",
    "Opportunity to learn German and enhance employability",
  ],
  industries: [
    "Engineering & Technology",
    "Automotive & Mechanical Engineering",
    "Information Technology",
    "Business & Economics",
    "Life Sciences & Medicine",
    "Environmental & Renewable Energy",
  ],
  applicationSteps: [
    { title: "Profile Assessment & Counseling", description: "Explore courses and universities suited to your profile and goals." },
    { title: "Admission & Document Preparation", description: "Get help with your university application and visa documents." },
    { title: "Visa Application & Travel", description: "Apply for your German student visa and prepare for your journey." },
  ],
  faqs: [
    {
      question: "Are tuition fees mandatory for studying in Germany?",
      answer: "Public universities mostly offer tuition-free education; however, some master's programs and private universities charge fees."
    },
    {
      question: "Can I work while studying in Germany?",
      answer: "Yes, students can work up to 20 hours per week during the semester and full-time during semester breaks."
    },
    {
      question: "How long is the post-study work visa?",
      answer: "You can get an 18-month residence permit to look for a job after graduation."
    },
    {
      question: "Is German language proficiency required?",
      answer: "It depends on your course; some programs are offered in English, but basic German is beneficial for everyday life."
    }
  ]
};

export default function GermanyStudyVisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO */}
      <Head>
        <title>Study in Germany with Top Universities | Skyland Immigration</title>
        <meta name="description" content="Study in Germany with low tuition fees, part-time work options, and post-study work permits. Apply with Skyland Immigration today." />
      </Head>

      {/* Sticky Apply Now */}
      <div className="fixed bottom-4 right-4 z-50">
        <a href="#apply" className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-full font-semibold shadow-lg transition">
          Apply Now
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Study in <span className="text-yellow-300">Germany</span> &ndash; Europe&apos;s Education Hub
              </h1>
              <p className="text-lg text-blue-200">
                Benefit from tuition-free education, excellent work opportunities, and strong career prospects.
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

      {/* Quick Facts */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Fact icon={Timer} title="Course Duration" value="1-5 Years" />
          <Fact icon={Briefcase} title="Part-Time Work" value="20 Hrs/Week" />
          <Fact icon={DollarSign} title="Tuition Fees" value="Mostly Free / Low Cost" />
          <Fact icon={GraduationCap} title="Post-Study Work Visa" value="18 Months" />
        </div>
      </SectionWrapper>

      {/* Why Study in Germany */}
      <SectionWrapper id="learn">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Study in Germany?</h2>
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
              <Building2 className="text-blue-700 mb-3 w-6 h-6" />
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
            { icon: CheckCircle2, title: "High Visa Success", desc: "Our Germany student visa approval rate is 90%+" },
            { icon: Clock, title: "Fast Turnaround", desc: "Admissions and visa processing completed swiftly." },
            { icon: Phone, title: "1:1 Support", desc: "Personalized guidance from our immigration experts." },
            { icon: Mail, title: "Full Assistance", desc: "End-to-end help from SOPs to accommodation." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md">
              <Icon className="w-6 h-6 text-blue-700 mb-2" />
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
              <div className="absolute -top-4 left-6 bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
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
