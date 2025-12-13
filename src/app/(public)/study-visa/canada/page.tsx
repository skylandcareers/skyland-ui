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
    { description: "Top-ranked Canadian universities & colleges" },
    { description: "Post-graduation work permit (PGWP) up to 3 years" },
    { description: "Affordable tuition & scholarships" },
    { description: "Work up to 20 hours/week during study" },
  ],
  eligibility: [
    "Valid passport",
    "Letter of acceptance from a Designated Learning Institution (DLI)",
    "Proof of sufficient funds for tuition and living expenses",
    "English/French language proficiency (IELTS/TEF)",
  ],
  benefits: [
    "High-quality education recognized worldwide",
    "Multicultural and welcoming society",
    "Work opportunities during and after study",
    "Pathways to permanent residency in Canada",
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
    { title: "Profile Assessment & Counseling", description: "Discuss your academic and career goals with our experts to pick the best program and institution." },
    { title: "Admission & Document Prep", description: "Get help with application submission and preparing required documents." },
    { title: "Study Permit Application & Travel", description: "Visa filing, interview prep, and travel arrangements for your Canadian study journey." },
  ],
  faqs: [
    {
      question: "Is IELTS mandatory for Canadian study permits?",
      answer: "Most institutions require English or French proficiency tests like IELTS or TEF."
    },
    {
      question: "Can I work while studying in Canada?",
      answer: "Yes, students can work up to 20 hours/week during academic sessions and full-time during scheduled breaks."
    },
    {
      question: "How long is the post-graduation work permit?",
      answer: "PGWP duration varies from 8 months to 3 years depending on the length of your study program."
    },
    {
      question: "Are scholarships available for Indian students?",
      answer: "Yes, many Canadian institutions offer merit-based and need-based scholarships."
    }
  ]
};

export default function CanadaStudyVisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO */}
      <Head>
        <title>Study in Canada with Top Universities | Skyland Immigration</title>
        <meta name="description" content="Study in Canada with scholarships, post-graduation work permits, and career opportunities. Apply with Skyland Immigration today." />
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
                Study in <span className="text-yellow-300">Canada</span> with Top-Ranked Universities
              </h1>
              <p className="text-lg text-indigo-100">
                Get globally recognized degrees with work opportunities and pathways to permanent residency.
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
          <Fact icon={Timer} title="Course Duration" value="1-4 Years" />
          <Fact icon={Briefcase} title="Part-Time Work" value="20 Hrs/Week" />
          <Fact icon={DollarSign} title="Average Tuition" value="CAD 15,000 - CAD 35,000" />
          <Fact icon={GraduationCap} title="Post-Study Work Permit" value="Up to 3 Years" />
        </div>
      </SectionWrapper>

      {/* Why Study in Canada */}
      <SectionWrapper id="learn">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Study in Canada?</h2>
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
            { icon: CheckCircle2, title: "High Visa Success", desc: "Our Canada study permit approval rate is 90%+" },
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

      {/* Scholarship Opportunities */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Vanier Canada Graduate Scholarships", detail: "Highly competitive scholarships for doctoral studies." },
            { title: "Canadian Commonwealth Scholarship", detail: "Funding for students from Commonwealth countries." },
            { title: "University-specific Scholarships", detail: "Merit and need-based scholarships from CAD 1,000 to CAD 15,000." }
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
              name: "Anjali Patel",
              review: "Skyland made my Canada study permit process so smooth. I am now studying at University of Toronto!",
              country: "Toronto, Canada"
            },
            {
              name: "Karan Singh",
              review: "Excellent support and guidance. I got my post-grad work permit quickly and started my career.",
              country: "Vancouver, Canada"
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

      {/* Canada vs Other Destinations */}
      <section className="max-w-7xl mx-auto px-4 py-14 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Canada vs Other Study Destinations</h2>
        <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="bg-indigo-100 text-gray-800">
            <tr>
              <th className="p-3">Feature</th>
              <th className="p-3">Canada</th>
              <th className="p-3">USA</th>
              <th className="p-3">UK</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Post-Study Work</td>
              <td className="p-3">Up to 3 Years (PGWP)</td>
              <td className="p-3">1 Year (OPT)</td>
              <td className="p-3">2 Years (Graduate Route)</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Tuition Fee Range</td>
              <td className="p-3">CAD 15K–35K</td>
              <td className="p-3">$20K–$45K</td>
              <td className="p-3">£10K–£25K</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Visa Approval</td>
              <td className="p-3">High</td>
              <td className="p-3">Strict</td>
              <td className="p-3">Moderate–High</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Video Section */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn About Studying in Canada</h2>
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/0rNy0rIU1n0"
            title="Study in Canada Video"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {content.faqs.map(({ question, answer }, i) => (
            <details key={i} className="bg-white p-4 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-semibold text-indigo-700">{question}</summary>
              <p className="mt-2 text-gray-600">{answer}</p>
            </details>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Consultation</h2>
        <ContactCard phone={contactInfo.phone} email={contactInfo.email} hours={contactInfo.hours} />
      </SectionWrapper>
    </div>
  );
}

// Reusable components

function SectionWrapper({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 py-14">
      {children}
    </section>
  );
}

function Fact({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
      <Icon className="text-indigo-600 w-8 h-8" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700">{value}</p>
      </div>
    </div>
  );
}

function BenefitList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ContactCard({
  phone,
  email,
  hours,
}: {
  phone: string;
  email: string;
  hours: string;
}) {
  return (
    <div className="bg-indigo-50 p-6 rounded-xl shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-indigo-900 mb-4">Contact Us</h3>
      <p className="mb-2 flex items-center gap-2">
        <Phone className="w-5 h-5 text-indigo-700" />
        <a href={`tel:${phone}`} className="text-indigo-700 font-semibold">{phone}</a>
      </p>
      <p className="mb-2 flex items-center gap-2">
        <Mail className="w-5 h-5 text-indigo-700" />
        <a href={`mailto:${email}`} className="text-indigo-700 font-semibold">{email}</a>
      </p>
      <p className="flex items-center gap-2 text-indigo-600">
        <Clock className="w-5 h-5" />
        {hours}
      </p>
    </div>
  );
}
