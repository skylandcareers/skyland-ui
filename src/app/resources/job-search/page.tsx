'use client';
import Link from 'next/link';
import React from 'react';

const jobTips = [
  // 1. Core Job Search Sections
  {
    title: 'Resume Writing for International Jobs',
    content: [
      'Use country-specific formats (1-page resume for US, 2+ page CV for EU/UK)',
      'Add "Visa Status" section (e.g., "Eligible for H-1B sponsorship")',
      'Include language test scores (TOEFL/IELTS) if required',
      'Highlight international experience and cross-cultural skills',
      'List country-specific certifications/licenses',
      'Convert education grades to local equivalents (GPA to UK degree classification)'
    ],
    proTip: 'For German jobs, include a professional photo and birth date (local norm)'
  },

  // 2. Visa-Specific Sections
  {
    title: 'Work Visa Types Comparison',
    content: [
      'USA: H-1B (specialty), L-1 (transfer), O-1 (extraordinary ability)',
      'Canada: Express Entry, Provincial Nominee Program (PNP)',
      'UK: Skilled Worker Visa, Global Talent Visa',
      'Germany: EU Blue Card, Freelance Visa',
      'Australia: Temporary Skill Shortage (TSS) visa',
      'Dubai: Golden Visa (10-year residency)'
    ],
    proTip: 'Intra-company transfers (L-1) often have faster processing than new H-1Bs'
  },

  {
    title: 'Finding Visa-Sponsoring Employers',
    content: [
      'Search LinkedIn using #visasponsorship and #relocationjobs',
      'Target companies with existing foreign employees (check LinkedIn profiles)',
      'Look for "Equal Opportunity Employer" statements mentioning visa support',
      'Attend virtual career fairs for international hiring',
      'Search myvisajobs.com (US) or gov.uk/uk-visa-sponsors (UK) for sponsor lists',
      'Focus on industries with labor shortages (tech, healthcare, engineering)'
    ]
  },

  // 3. Application Process
  {
    title: 'Visa Application Timeline',
    content: [
      'Months 1-2: Job search & interviews',
      'Month 3: Offer acceptance & labor certification (if required)',
      'Month 4: Visa petition filing (e.g., H-1B cap season April 1)',
      'Month 5-6: Consulate processing & biometrics',
      'Month 7: Relocation preparation',
      'Month 8: Move & work authorization'
    ],
    proTip: 'Start 12+ months before target start date for capped visas like H-1B'
  },

  // 4. Interview & Negotiation
  {
    title: 'Interview Strategies for Visa Candidates',
    content: [
      'Prepare 30-60-90 day plans showing immediate impact',
      'Have clear answers for "Why relocate?" and "Why our company?"',
      'Research company\'s sponsorship history (H1Bdata.info for US firms)',
      'Practice salary negotiations knowing visa cost burdens',
      'Ask about relocation support (shipping, housing assistance)',
      'Request written confirmation of sponsorship intent'
    ]
  },

  // 5. Relocation Preparation
  {
    title: 'Pre-Move Checklist',
    content: [
      '✓ Notarized degree certificates & translations',
      '✓ International driving license',
      '✓ Bank references for rental applications',
      '✓ 6+ months of bank statements',
      '✓ Medical records & vaccination history',
      '✓ Apostilled background checks'
    ]
  }
];

const countryResources = {
  title: 'Country-Specific Visa Resources',
  content: [
    {
      country: 'United States',
      items: [
        'USCIS.gov (official portal)',
        'MyVisaJobs.com (sponsor database)',
        'H1B Salary Database (prevailing wages)'
      ]
    },
    {
      country: 'Canada',
      items: [
        'IRCC Express Entry Calculator',
        'Job Bank (official job site)',
        'WES (degree equivalency)'
      ]
    },
    // Add other countries...
  ]
};

const redFlags = {
  title: 'Visa Sponsorship Red Flags',
  content: [
    'Employer asks you to pay visa fees (often illegal)',
    'No written confirmation of sponsorship',
    'Salary below market rate for visa category',
    'Vague timelines for sponsorship process',
    'Requests for passport copies before offer'
  ]
};

const alternativePaths = {
  title: 'Alternative Immigration Paths',
  content: [
    'Working Holiday Visas (under 30/35 in many countries)',
    'Student Visa → Work Visa conversion',
    'Freelancer/Entrepreneur Visas (Germany, Portugal, etc.)',
    'Ancestry Visas (UK, Ireland, Italy)',
    'Digital Nomad Visas (Estonia, Spain, Costa Rica)'
  ]
};

const JobSearchGuide = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Global Job Search & Work Visa Master Guide
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to secure international employment and visa sponsorship
        </p>
      </header>

      {/* Key Alert */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
        <h2 className="text-xl font-semibold mb-2 text-blue-800">Critical First Step</h2>
        <p className="text-blue-700">
          Before applying, verify if your occupation qualifies for work visas in your target country.
          Most nations have &quot;shortage occupation lists&quot; that prioritize certain professions.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {jobTips.map(({ title, content, proTip }) => (
          <section key={title} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              {content.map((tip, index) => (
                <li key={index} className="mb-2">{tip}</li>
              ))}
            </ul>
            {proTip && (
              <div className="bg-yellow-50 p-3 rounded-md border-l-4 border-yellow-400">
                <span className="font-semibold">Pro Tip:</span> {proTip}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Special Feature Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Country Resources */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">{countryResources.title}</h2>
          <div className="space-y-4">
            {countryResources.content.map((country, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-800">{country.country}:</h3>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                  {country.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Red Flags */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">{redFlags.title}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {redFlags.content.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>

        {/* Alternative Paths */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">{alternativePaths.title}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {alternativePaths.content.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Comprehensive Resource Section */}
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Complete Relocation Roadmap</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pre-Application */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Pre-Application</h3>
            <ul className="space-y-2">
              <li>✔️ Credential evaluation (WES/ECE)</li>
              <li>✔️ Language test preparation</li>
              <li>✔️ Target company research</li>
              <li>✔️ Networking strategy</li>
            </ul>
          </div>
          
          {/* Job Search */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Active Job Search</h3>
            <ul className="space-y-2">
              <li>✔️ Tailored applications</li>
              <li>✔️ Visa sponsorship conversations</li>
              <li>✔️ Salary benchmarking</li>
              <li>✔️ Interview preparation</li>
            </ul>
          </div>
          
          {/* Post-Offer */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Post-Offer</h3>
            <ul className="space-y-2">
              <li>✔️ Document collection</li>
              <li>✔️ Medical examinations</li>
              <li>✔️ Housing arrangements</li>
              <li>✔️ Cultural preparation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready for Your International Career?</h2>
        <p className="text-lg mb-6">Bookmark this page and check official government websites weekly for visa updates</p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded-lg shadow-lg transition duration-300">
         Contact us for more details
        </Link>
      </div>
    </div>
  );
};

export default JobSearchGuide;