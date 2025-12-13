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

const contactInfo = {
  phone: "+91-9032420000",
  email: "saiteja.b@skylandcareers.com",
  hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT"
};

const content = {
  mainBenefits: [
    { description: "Globally recognized Australian universities & colleges" },
    { description: "Post-study work visas up to 4 years" },
    { description: "Affordable education with scholarships available" },
    { description: "Work up to 40 hours/week during study" },
  ],
  eligibility: [
    "Valid passport",
    "Letter of offer from an Australian educational institution",
    "Proof of sufficient funds for tuition and living expenses",
    "English language proficiency (IELTS/PTE/TOEFL)",
  ],
  benefits: [
    "High-quality education with global recognition",
    "Multicultural and safe environment",
    "Work opportunities during and after studies",
    "Pathways to permanent residency in Australia",
  ],
  industries: [
    "Information Technology",
    "Healthcare & Nursing",
    "Engineering & Technology",
    "Business & Finance",
    "Creative Arts & Media",
    "Environmental Sciences",
  ],
  applicationSteps: [
    { title: "Profile Assessment & Counseling", description: "Understand your goals and select the best course and university." },
    { title: "Admission & Document Preparation", description: "Get support for your application and document submission." },
    { title: "Student Visa Application & Travel", description: "Visa application, interview preparation, and travel planning." },
  ],
  faqs: [
    {
      question: "Is IELTS mandatory for Australian student visas?",
      answer: "Most Australian institutions require English proficiency tests such as IELTS, PTE, or TOEFL."
    },
    {
      question: "Can I work while studying in Australia?",
      answer: "Yes, students can work up to 40 hours per fortnight during the semester and unlimited hours during holidays."
    },
    {
      question: "How long is the post-study work visa in Australia?",
      answer: "Post-study work visas range from 2 to 4 years depending on your qualification level."
    },
    {
      question: "Are scholarships available for Indian students in Australia?",
      answer: "Yes, Australian universities offer a range of scholarships based on merit and need."
    }
  ]
};

export default function AustraliaStudyVisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO */}
      <Head>
        <title>Study in Australia with Top Universities | Skyland Immigration</title>
        <meta name="description" content="Study in Australia with scholarships, post-study work visas, and career opportunities. Apply with Skyland Immigration today." />
      </Head>

      {/* Sticky Apply Now */}
      <div className="fixed bottom-4 right-4 z-50">
        <a href="#apply" className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-3 rounded-full font-semibold shadow-lg transition">
          Apply Now
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Study in <span className="text-yellow-300">Australia</span> with Top-Ranked Universities
              </h1>
              <p className="text-lg text-blue-100">
                Earn internationally recognized degrees with excellent work and migration pathways.
              </p>
              <div className="space-y-4 bg-blue-700 p-5 rounded-xl">
                {content.mainBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                    <span className="text-blue-50 text-base">{benefit.description}</span>
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
          <Fact icon={Briefcase} title="Part-Time Work" value="40 Hrs/Fortnight" />
          <Fact icon={DollarSign} title="Average Tuition" value="AUD 20,000 - AUD 45,000" />
          <Fact icon={GraduationCap} title="Post-Study Work Visa" value="2 to 4 Years" />
        </div>
      </SectionWrapper>

      {/* Why Study in Australia */}
      <SectionWrapper id="learn">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Study in Australia?</h2>
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
              <Building2 className="text-blue-600 mb-3 w-6 h-6" />
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
            { icon: CheckCircle2, title: "High Visa Success", desc: "Our Australia student visa approval rate is 90%+" },
            { icon: Clock, title: "Fast Turnaround", desc: "Admissions and visa processing completed in weeks." },
            { icon: Phone, title: "1:1 Support", desc: "Get personal guidance from experts." },
            { icon: Mail, title: "Full Assistance", desc: "From SOPs to booking flights — we help end to end." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md">
              <Icon className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Scholarship Opportunities */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Australia Awards Scholarships", detail: "Scholarships for students from developing countries to study in Australia." },
            { title: "Destination Australia Program", detail: "Supports regional study with financial assistance." },
            { title: "University-specific Scholarships", detail: "Merit and need-based scholarships from AUD 1,000 to AUD 20,000." }
          ].map((scholarship, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-blue-700">{scholarship.title}</h3>
              <p className="text-gray-600 text-sm">{scholarship.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <SectionWrapper id="apply">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.applicationSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
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
      {/* Contact Section */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Consultation</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>{contactInfo.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>{contactInfo.email}</p>
            </div>
            <div>
              <h3 className="font-semibold">Business Hours</h3>
              <p>{contactInfo.hours}</p>
            </div>
          </div>
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
