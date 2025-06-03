'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const officialPartners = [
  { name: 'IDP Education', logo: '/partners/idp.png', website: 'https://www.idp.com' },
  { name: 'British Council', logo: '/partners/british-council.png', website: 'https://www.britishcouncil.in' },
  { name: 'IELTS Official', logo: '/partners/ielts.png', website: 'https://www.ielts.org' },
  { name: 'Pearson PTE', logo: '/partners/pte.png', website: 'https://www.pearsonpte.com' },
  { name: 'Cambridge English', logo: '/partners/cambridge.png', website: 'https://www.cambridgeenglish.org' },
];

const universityPartners = [
  { name: 'University of Toronto', logo: '/partners/u-toronto.png', website: 'https://www.utoronto.ca' },
  { name: 'University of Sydney', logo: '/partners/u-sydney.png', website: 'https://www.sydney.edu.au' },
  { name: 'Kings College London', logo: '/partners/kcl.png', website: 'https://www.kcl.ac.uk' },
  { name: 'University of British Columbia', logo: '/partners/ubc.png', website: 'https://www.ubc.ca' },
  { name: 'Monash University', logo: '/partners/monash.png', website: 'https://www.monash.edu' },
];

function PartnerSection({ title, partners }: { title: string; partners: typeof universityPartners }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center items-center">
        {partners.map((partner, i) => (
          <motion.a
            key={partner.name}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={96}
              height={96}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-6xl mx-auto text-gray-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-3">Our Global Partners</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We&apos;re proud to collaborate with leading organizations, test bodies, and world-class universities to support student and skilled migration.
        </p>
      </motion.div>

      {/* Partner Sections */}
      <PartnerSection title="📘 Official Affiliates & Exam Bodies" partners={officialPartners} />
      <PartnerSection title="🎓 University Partners" partners={universityPartners} />

      {/* Why Partner With Us */}
      <div className="mt-20 bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">🤝 Why Partner With Skyland Immigration?</h2>
        <ul className="max-w-3xl mx-auto list-disc list-inside text-gray-700 space-y-3 font-medium">
          <li>Direct access to thousands of qualified international students</li>
          <li>Collaborate on webinars, spot admissions, and global education fairs</li>
          <li>Enhanced branding across our campaigns, website, and offices</li>
          <li>Decade-long experience with a 95%+ visa success rate</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h3 className="text-xl font-semibold mb-3">Become a Partner</h3>
        <p className="text-gray-600 mb-4">We&apos;re always looking to grow our network of trusted institutions and agencies.</p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
