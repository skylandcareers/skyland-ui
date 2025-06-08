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
  email: "info@skylandimmigration.com",
  hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT"
};

const content = {
  mainBenefits: [
    { description: "Top QS-ranked universities across the UK" },
    { description: "Post-study work visa for 2 years" },
    { description: "Affordable tuition & scholarships" },
    { description: "Part-time work allowed during study" },
  ],
  eligibility: [
    "Valid passport",
    "Offer letter from UK university",
    "Proof of English proficiency (IELTS/PTE)",
    "Financial proof to cover tuition & living expenses",
  ],
  benefits: [
    "High-quality education recognized globally",
    "Multicultural society with vibrant student life",
    "Excellent career opportunities after graduation",
    "Access to world-class healthcare and support services",
  ],
  industries: [
    "Information Technology",
    "Healthcare & Nursing",
    "Engineering & Manufacturing",
    "Business & Finance",
    "Creative Arts & Media",
    "Education & Research",
  ],
  applicationSteps: [
    { title: "Counseling & Profile Assessment", description: "Meet with our experts to assess your profile and select the right course and university." },
    { title: "Test Preparation & Admission", description: "Prepare for IELTS/PTE and apply to top UK universities with guided assistance." },
    { title: "Visa Filing & Travel", description: "Complete visa documentation, interview prep, and travel arrangements for your study journey." },
  ],
  faqs: [
    {
      question: "Is IELTS mandatory for a UK student visa?",
      answer: "Most universities require IELTS or equivalent proof of English, though some may waive it based on academic background."
    },
    {
      question: "Can I work while studying in the UK?",
      answer: "Yes, international students can work up to 20 hours per week during term time and full-time during holidays."
    },
    {
      question: "What is the duration of the post-study work visa?",
      answer: "The UK Graduate Route allows you to stay and work for 2 years after completing your degree."
    },
    {
      question: "Are scholarships available for Indian students?",
      answer: "Yes, many UK universities offer scholarships based on academic performance and need."
    }
  ]
};

export default function UKStudyVisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO */}
      <Head>
        <title>Study in UK with Top Universities | Skyland Immigration</title>
        <meta name="description" content="Study in the UK with scholarships, post-study work visa, and career opportunities. Apply with Skyland Immigration today." />
      </Head>

      {/* Sticky Apply Now */}
      <div className="fixed bottom-4 right-4 z-50">
        <a href="#apply" className="bg-yellow-300 hover:bg-yellow-400 text-indigo-900 px-5 py-3 rounded-full font-semibold shadow-lg transition">
          Apply Now
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Study in <span className="text-yellow-300">UK</span> with Top-Ranked Universities
              </h1>
              <p className="text-lg text-indigo-100">
                Get globally recognized degrees with work opportunities. Unlock your future in the UK.
              </p>
              <div className="space-y-4 bg-indigo-700 p-5 rounded-xl">
                {content.mainBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                    <span className="text-indigo-50 text-base">{benefit.description}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#apply" className="inline-flex items-center gap-2 bg-yellow-300 text-indigo-900 px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-200 transition">
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
          <Fact icon={Timer} title="Course Duration" value="1-3 Years" />
          <Fact icon={Briefcase} title="Part-Time Work" value="20 Hrs/Week" />
          <Fact icon={DollarSign} title="Average Tuition" value="£10,000 - £25,000" />
          <Fact icon={GraduationCap} title="Post-Study Visa" value="2 Years" />
        </div>
      </SectionWrapper>
      

      {/* Why Study in UK */}
      <SectionWrapper id="learn">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Study in the UK?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BenefitList title="Eligibility" items={content.eligibility} />
          <BenefitList title="Key Advantages" items={content.benefits} />
        </div>
      </SectionWrapper>

      {/* Top Industries */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Career Fields</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <Building2 className="text-indigo-600 mb-3 w-6 h-6" />
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
            { icon: CheckCircle2, title: "High Visa Success", desc: "Our UK student visa approval rate is 90%+" },
            { icon: Clock, title: "Fast Turnaround", desc: "Admissions and visa processing completed in weeks." },
            { icon: Phone, title: "1:1 Support", desc: "Get personal guidance from experts." },
            { icon: Mail, title: "Full Assistance", desc: "From SOPs to booking flights — we help end to end." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md">
              <Icon className="w-6 h-6 text-indigo-600 mb-2" />
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <section className="max-w-7xl mx-auto px-4 py-14">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Opportunities</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      { title: "Commonwealth Scholarship", detail: "Covers full tuition, living expenses & airfare." },
      { title: "Chevening Scholarship", detail: "For future leaders – fully funded master's degree." },
      { title: "University-specific Grants", detail: "Merit-based or need-based discounts from £1,000–£10,000." }
    ].map((scholarship, i) => (
      <div key={i} className="bg-white p-5 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-indigo-700">{scholarship.title}</h3>
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
              <div className="absolute -top-4 left-6 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-14 bg-gray-100">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Success Stories</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        name: "Riya Sharma",
        review: "Thanks to Skyland, I got into University of Leeds and even got a partial scholarship!",
        country: "Leeds, UK"
      },
      {
        name: "Aarav Mehta",
        review: "The visa process was stress-free. Excellent support from start to finish.",
        country: "Manchester, UK"
      }
    ].map((student, i) => (
      <div key={i} className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-700 italic mb-2">{student.review}</p>
        <p className="font-semibold text-indigo-700">{student.name}</p>
        <p className="text-sm text-gray-500">{student.country}</p>
      </div>
    ))}
  </div>
</section>

<section className="max-w-7xl mx-auto px-4 py-14 bg-gray-50">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">UK vs Other Study Destinations</h2>
  <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
    <thead className="bg-indigo-100 text-gray-800">
      <tr>
        <th className="p-3">Feature</th>
        <th className="p-3">UK</th>
        <th className="p-3">USA</th>
        <th className="p-3">Canada</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <td className="p-3">Post-Study Work</td>
        <td className="p-3">2 Years (Graduate Route)</td>
        <td className="p-3">1 Year (OPT)</td>
        <td className="p-3">3 Years (PGWP)</td>
      </tr>
      <tr className="border-t">
        <td className="p-3">Tuition Fee Range</td>
        <td className="p-3">£10K–£25K</td>
        <td className="p-3">$20K–$45K</td>
        <td className="p-3">CAD 15K–35K</td>
      </tr>
      <tr className="border-t">
        <td className="p-3">Visa Approval</td>
        <td className="p-3">Moderate–High</td>
        <td className="p-3">Strict</td>
        <td className="p-3">High</td>
      </tr>
    </tbody>
  </table>
</section>
<section className="max-w-5xl mx-auto px-4 py-14">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Watch: Your UK Study Journey</h2>
  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      title="UK Study Visa Video"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</section>


      {/* FAQs */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs</h2>
        <div className="space-y-4">
          {content.faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-indigo-700">{faq.question}</h3>
              <p className="text-gray-600 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <div className="bg-white rounded-xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard icon={Phone} title="Phone" value={contactInfo.phone} />
          <ContactCard icon={Mail} title="Email" value={contactInfo.email} />
          <ContactCard icon={Clock} title="Hours" value={contactInfo.hours} />
        </div>
      </SectionWrapper>
    </div>
  );
}

// Reusable components
function SectionWrapper({ children, id }: React.PropsWithChildren<{ id?: string }>) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 py-14">
      {children}
    </section>
  );
}

interface FactProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}

function Fact({ icon: Icon, title, value }: FactProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <Icon className="text-indigo-600 mb-2" />
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

interface BenefitListProps {
  title: string;
  items: string[];
}

function BenefitList({ title, items }: BenefitListProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-indigo-600 mb-3">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-1" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}

function ContactCard({ icon: Icon, title, value }: ContactCardProps) {
  return (
    <div className="flex gap-3">
      <Icon className="w-5 h-5 text-indigo-600" />
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}
