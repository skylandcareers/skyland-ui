'use client';

import React from 'react';
import Link from 'next/link';
import { FaPassport, FaGlobe, FaFileAlt, FaClock, FaUserCheck, FaUniversity, FaHandsHelping, FaMoneyBillWave, FaPlane, FaQuestionCircle, FaExclamationTriangle } from 'react-icons/fa';

const sections = [
  {
    title: 'Understanding Visa Requirements',
    icon: <FaPassport className="inline mr-2 text-blue-600" />,
    content:
      'Visa requirements vary significantly by country, purpose of visit, and your nationality. This guide covers essential information, but always verify with official government sources as policies change frequently. The process typically involves document submission, possible interviews, and sometimes biometric data collection.',
  },
  {
    title: 'Types of Visas',
    icon: <FaFileAlt className="inline mr-2 text-blue-600" />,
    contentList: [
      'Tourist Visa – Short-term visits for leisure (usually 30-90 days)',
      'Student Visa – For academic programs (requires school acceptance)',
      'Work Visa – Employment authorization (often needs employer sponsorship)',
      'Business Visa – Attending meetings/conferences (no paid work)',
      'Transit Visa – Passing through a country (typically 1-5 days)',
      'Digital Nomad Visa – For remote workers (new in many countries)',
      'Permanent Residency Visa – For long-term settlement',
      'Family/Spouse Visa – For joining relatives abroad',
      'Working Holiday Visa – For young travelers (age-restricted)',
      'Medical Visa – For receiving healthcare abroad'
    ],
  },
  {
    title: 'Common Visa Application Requirements',
    icon: <FaUniversity className="inline mr-2 text-blue-600" />,
    contentList: [
      'Valid passport (typically 6+ months validity remaining)',
      'Completed visa application forms (often online now)',
      'Recent passport-sized photographs (specific size/background requirements)',
      'Proof of sufficient funds (bank statements, sponsorship letters)',
      'Detailed travel itinerary (flight reservations, accommodation)',
      'Letter of acceptance (students) or employment contract (workers)',
      'Travel medical insurance (required by many countries)',
      'Visa application fee payment (non-refundable in most cases)',
      'Police clearance certificate (for long-term visas)',
      'Medical examination results (some work/student visas)'
    ],
  },
  {
    title: 'Application Process Timeline',
    icon: <FaClock className="inline mr-2 text-blue-600" />,
    contentList: [
      '1-3 months before: Research requirements and gather documents',
      '4-8 weeks before: Complete application forms and schedule appointments',
      '3-6 weeks before: Submit application and biometrics (if required)',
      '2-4 weeks before: Possible interview at consulate/embassy',
      '1-2 weeks before: Receive decision and passport with visa',
      'Note: Processing times vary widely - some countries offer expedited processing for additional fees'
    ],
  },
  {
    title: 'Visa Fees and Costs',
    icon: <FaMoneyBillWave className="inline mr-2 text-blue-600" />,
    contentList: [
      'Standard application fees ($50-$300 typically)',
      'Expedited processing fees (50-100% extra)',
      'Biometric collection fees (where applicable)',
      'Courier/translation/notarization costs',
      'Travel insurance (often mandatory)',
      'Medical examination costs (if required)',
      'Visa service/consultant fees (optional)',
      'Tip: Budget 20% extra for unexpected costs'
    ],
  },
  {
    title: 'Tips for a Successful Application',
    icon: <FaUserCheck className="inline mr-2 text-blue-600" />,
    contentList: [
      'Apply at least 3 months before planned travel',
      'Double-check all documents meet requirements',
      'Ensure financial documents show consistent funds',
      'Prepare for interviews - practice common questions',
      'Keep color scans of all submitted documents',
      'Check passport blank pages requirement (usually 2-4)',
      'Be truthful - inconsistencies can lead to bans',
      'Consider professional help for complex cases'
    ],
  },
  {
    title: 'Common Reasons for Visa Denials',
    icon: <FaExclamationTriangle className="inline mr-2 text-blue-600" />,
    contentList: [
      'Incomplete or incorrect application',
      'Insufficient financial proof',
      'Criminal record or security concerns',
      'Previous visa violations or overstays',
      'Unclear travel purpose or itinerary',
      'Health requirements not met',
      'Suspect of immigration intent (for non-immigrant visas)',
      'Country-specific political factors'
    ],
  },
  {
    title: 'After Visa Approval',
    icon: <FaPlane className="inline mr-2 text-blue-600" />,
    contentList: [
      'Verify all visa details are correct (dates, name, type)',
      'Understand entry conditions (some require proof of onward travel)',
      'Check if registration is required after arrival',
      'Note work restrictions (if any)',
      'Be aware of visa extension possibilities',
      'Keep copies of your visa separate from passport',
      'Understand consequences of overstaying'
    ],
  },
  {
    title: 'Country-Specific Considerations',
    icon: <FaGlobe className="inline mr-2 text-blue-600" />,
    content:
      'Some countries have special agreements (like Schengen Zone in Europe where one visa covers multiple countries). Others like the US have complex systems with different visa categories. Asian countries often require proof of hotel bookings. Middle Eastern countries may need local sponsors. Always research specific requirements for your destination.',
  },
  {
    title: 'Additional Resources',
    icon: <FaHandsHelping className="inline mr-2 text-blue-600" />,
    contentList: [
      'Official government immigration websites (.gov domains)',
      'Visa application centers (VFS Global, TLScontact)',
      'Embassy/consulate helplines and email support',
      'Online visa status tracking portals',
      'Community forums (but verify official sources)',
      'Mobile apps for visa processing updates'
    ],
  },
];

const VisaRequirements = () => {
  return (
    <main className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-3xl font-extrabold mb-4 text-gray-900 tracking-tight">
                <FaGlobe className="inline mr-4 text-blue-500" />
                Comprehensive Visa Requirements Guide
                <FaGlobe className="inline ml-4 text-blue-500" />
                </h1>
                <p className="text-xl text-gray-600 max-w-xl mx-auto">
                Your complete resource for understanding and navigating global visa processes
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                    <FaExclamationTriangle className="inline mr-2" />
                    Important Notes
                </h3>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Requirements change frequently - always verify</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Processing times increase during peak seasons</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Some countries require appointments months in advance</span>
                    </li>
                </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                    <FaQuestionCircle className="inline mr-2" />
                    Quick Checklist
                </h3>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Passport valid for 6+ months?</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>All documents translated (if needed)?</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Enough blank passport pages?</span>
                    </li>
                </ul>
                </div>
            </div>

            {sections.map(({ title, content, contentList, icon }) => (
                <section 
                key={title} 
                className="mb-14 last:mb-0 p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                <h2 className="text-3xl font-semibold mb-6 text-blue-600 border-b-2 border-blue-200 pb-3 flex items-center">
                    {icon}
                    <span className="ml-2">{title}</span>
                </h2>
                {content && (
                    <p className="text-gray-800 leading-relaxed text-lg">
                    {content}
                    </p>
                )}
                {contentList && (
                    <ul className="mt-4 space-y-3 text-gray-700 text-lg">
                    {contentList.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span>{item}</span>
                        </li>
                    ))}
                    </ul>
                )}
                </section>
            ))}

            <div className="mt-16 p-8 bg-blue-100 rounded-xl text-center">
                <h3 className="text-3xl font-bold mb-6 text-blue-800">
                Need Personalized Help?
                </h3>
                <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                For complex cases or specific country requirements, consider consulting with a licensed immigration professional.
                </p>
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-md">
                Find Visa Specialists
                </Link>
            </div>
        </div>
    </main>
  );
};

export default VisaRequirements;