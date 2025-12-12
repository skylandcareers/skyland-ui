'use client';

import React from 'react';
import Link from 'next/link';
import { FaSuitcaseRolling, FaShieldAlt, FaFileInvoiceDollar, FaUserShield, FaClock, FaHandsHelping } from 'react-icons/fa';

const sections = [
  {
    title: 'What is Travel Insurance?',
    icon: <FaSuitcaseRolling className="inline mr-2 text-blue-600" />,
    content:
      'Travel insurance is a type of coverage designed to protect travelers from financial losses and emergencies during trips. It typically covers medical emergencies, trip cancellations, lost luggage, and other unforeseen events.',
  },
  {
    title: 'Types of Travel Insurance Coverage',
    icon: <FaShieldAlt className="inline mr-2 text-blue-600" />,
    contentList: [
      'Medical Coverage – emergency medical and dental expenses',
      'Trip Cancellation/Interruption – reimbursement for canceled or cut-short trips',
      'Baggage Loss/Delay – compensation for lost or delayed luggage',
      'Travel Delay – coverage for additional expenses due to delays',
      'Accidental Death and Dismemberment – compensation for severe injury or death',
      'Evacuation and Repatriation – emergency transport back home or to a medical facility',
    ],
  },
  {
    title: 'Why Do You Need Travel Insurance?',
    icon: <FaFileInvoiceDollar className="inline mr-2 text-blue-600" />,
    contentList: [
      'Protect yourself from unexpected medical bills abroad',
      'Get reimbursed for non-refundable trip costs if plans change',
      'Safeguard your belongings against loss or theft',
      'Ensure support in emergencies like evacuation or repatriation',
      'Travel with peace of mind and financial security',
    ],
  },
  {
    title: 'How to Choose the Right Travel Insurance',
    icon: <FaUserShield className="inline mr-2 text-blue-600" />,
    contentList: [
      'Assess the coverage limits and exclusions carefully',
      'Check if pre-existing medical conditions are covered',
      'Consider the destinations and duration of your trip',
      'Compare prices and read reviews of insurance providers',
      'Look for 24/7 emergency assistance services',
      'Verify claim procedures and documentation requirements',
    ],
  },
  {
    title: 'Common Exclusions in Travel Insurance',
    icon: <FaClock className="inline mr-2 text-blue-600" />,
    contentList: [
      'Pre-existing medical conditions without disclosure',
      'Adventurous activities or extreme sports (unless covered)',
      'Losses due to war or terrorism',
      'Travel against government advice or warnings',
      'Claims due to intoxication or illegal activities',
    ],
  },
  {
    title: 'Tips for Filing a Travel Insurance Claim',
    icon: <FaHandsHelping className="inline mr-2 text-blue-600" />,
    contentList: [
      'Keep all receipts and documentation of expenses',
      'Report incidents promptly to your insurer',
      'Fill claim forms accurately and provide required proofs',
      'Stay in touch with the insurance company for updates',
      'Follow up regularly until your claim is processed',
    ],
  },
];

const TravelInsurance = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 rounded-lg">
      <h1 className="text-5xl font-extrabold mb-12 text-gray-900 text-center tracking-tight drop-shadow-md">
        Travel Insurance Guide
      </h1>

      {sections.map(({ title, content, contentList, icon }) => (
            <>
                <section
                key={title}
                className="mb-14 last:mb-0 p-6 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                >
                <h2 className="text-3xl font-semibold mb-6 text-blue-600 border-b-2 border-blue-400 pb-2 tracking-wide">
                    {icon} {title}
                </h2>
                {content && (
                    <p className="text-gray-800 leading-relaxed text-lg max-w-prose">{content}</p>
                )}
                {contentList && (
                    <ul className="mt-4 space-y-3 max-w-prose text-gray-700 text-lg list-disc list-inside">
                    {contentList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                    </ul>
                )}
                </section>
            </>
            ))}

            {/* Your CTA section should be outside of the .map */}
            <section className="mb-14 p-8 bg-blue-600 rounded-lg shadow-lg text-center hover:bg-blue-700 transition-colors duration-300">
            <h2 className="text-3xl font-bold text-white mb-4">Need More Help with Travel Insurance?</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Our experts are here to assist you with any questions or personalized advice. Don’t hesitate to reach out!
            </p>
            <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-100 transition"
                aria-label="Contact us for more information"
            >
                Contact Us
            </Link>
            </section>

    </main>
  );
};

export default TravelInsurance;
