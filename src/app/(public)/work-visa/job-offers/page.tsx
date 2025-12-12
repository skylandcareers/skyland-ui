'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const jobs = [
  {
    title: 'Truck Driver',
    country: 'Canada',
    countrySlug: 'canada',
    image: '/images/canada-placeholder.jpg',
    description: 'Canada actively recruits international blue-collar workers for its booming infrastructure sector.',
    slug: 'truck-driver-in-canada',
    salary: 'CAD 4,500/month',
    experience: '2+ years',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Provided',
    relocationAssistance: true,
    language: 'Basic English',
    license: 'Valid Truck Driving License',
    startDate: 'Immediately',
    workingHours: '8 hrs/day, 5 days/week',
    benefits: ['Health insurance', 'Paid overtime']
  },
  {
    title: 'Welder',
    country: 'Canada',
    countrySlug: 'canada',
    image: '/images/canada-placeholder.jpg',
    description: 'Canada actively recruits international blue-collar workers for its booming infrastructure sector.',
    slug: 'welder-in-canada',
    salary: 'CAD 4,200/month',
    experience: '3+ years',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Subsidized',
    relocationAssistance: true,
    language: 'Basic English',
    license: 'Welding Certification',
    startDate: '1 month',
    workingHours: '9 hrs/day, 6 days/week',
    benefits: ['Health insurance', 'Tool allowance']
  },
  {
    title: 'Electrician',
    country: 'Canada',
    countrySlug: 'canada',
    image: '/images/canada-placeholder.jpg',
    description: 'Canada actively recruits international blue-collar workers for its booming infrastructure sector.',
    slug: 'electrician-in-canada',
    salary: 'CAD 4,800/month',
    experience: '2+ years',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Provided',
    relocationAssistance: true,
    language: 'English',
    license: 'Certified Electrician',
    startDate: 'Immediate',
    workingHours: '8 hrs/day, 5 days/week',
    benefits: ['Health insurance', 'Annual bonus']
  },
  {
    title: 'Plumber',
    country: 'Canada',
    countrySlug: 'canada',
    image: '/images/canada-placeholder.jpg',
    description: 'Canada actively recruits international blue-collar workers for its booming infrastructure sector.',
    slug: 'plumber-in-canada',
    salary: 'CAD 4,400/month',
    experience: '3+ years',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Shared housing',
    relocationAssistance: true,
    language: 'English',
    license: 'Plumbing Certification',
    startDate: '2 weeks',
    workingHours: '9 hrs/day, 6 days/week',
    benefits: ['Paid leave', 'Relocation assistance']
  },
  {
    title: 'Construction Worker',
    country: 'Australia',
    countrySlug: 'australia',
    image: '/images/australia-placeholder.jpg',
    description: 'Australia offers excellent working conditions and high demand for skilled trades.',
    slug: 'construction-worker-in-australia',
    salary: 'AUD 5,000/month',
    experience: '1+ year',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Available',
    relocationAssistance: true,
    language: 'Basic English',
    license: 'Safety Training Required',
    startDate: 'Immediate',
    workingHours: '8 hrs/day, 5 days/week',
    benefits: ['Accident insurance', 'Meal allowance']
  },
  {
    title: 'Mechanic',
    country: 'Australia',
    countrySlug: 'australia',
    image: '/images/australia-placeholder.jpg',
    description: 'Australia offers excellent working conditions and high demand for skilled trades.',
    slug: 'mechanic-in-australia',
    salary: 'AUD 5,200/month',
    experience: '3+ years',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Provided',
    relocationAssistance: true,
    language: 'English',
    license: 'Mechanic Trade License',
    startDate: 'Immediate',
    workingHours: '9 hrs/day, 6 days/week',
    benefits: ['Tool reimbursement', 'Travel allowance']
  },
  {
    title: 'Carpenter',
    country: 'Australia',
    countrySlug: 'australia',
    image: '/images/australia-placeholder.jpg',
    description: 'Australia offers excellent working conditions and high demand for skilled trades.',
    slug: 'carpenter-in-australia',
    salary: 'AUD 4,800/month',
    experience: '2+ years',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Company housing',
    relocationAssistance: true,
    language: 'English',
    license: 'Trade Certification Required',
    startDate: 'Within a month',
    workingHours: '8 hrs/day, 6 days/week',
    benefits: ['Health insurance', 'Annual leave']
  },
  {
    title: 'Forklift Operator',
    country: 'Australia',
    countrySlug: 'australia',
    image: '/images/australia-placeholder.jpg',
    description: 'Australia offers excellent working conditions and high demand for skilled trades.',
    slug: 'forklift-operator-in-australia',
    salary: 'AUD 4,300/month',
    experience: '1+ year',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Optional',
    relocationAssistance: false,
    language: 'English',
    license: 'Forklift License',
    startDate: '2 weeks',
    workingHours: '8 hrs/day, 5 days/week',
    benefits: ['Insurance', 'Performance bonus']
  },
  {
    title: 'Machine Operator',
    country: 'Germany',
    countrySlug: 'germany',
    image: '/images/germany-placeholder.jpg',
    description: 'Germany’s manufacturing sector is growing fast, with high demand for skilled labor.',
    slug: 'machine-operator-in-germany',
    salary: '€3,800/month',
    experience: '2+ years',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Subsidized apartment',
    relocationAssistance: true,
    language: 'Basic German or English',
    license: 'Machinery Operation Certificate',
    startDate: '1 month',
    workingHours: '8 hrs/day, 5 days/week',
    benefits: ['Free transport', 'Bonus pay']
  },
  {
    title: 'Warehouse Staff',
    country: 'Germany',
    countrySlug: 'germany',
    image: '/images/germany-placeholder.jpg',
    description: 'Germany’s manufacturing sector is growing fast, with high demand for skilled labor.',
    slug: 'warehouse-staff-in-germany',
    salary: '€3,400/month',
    experience: '1 year',
    jobType: 'Full-time',
    visaSupport: true,
    accommodation: 'Shared housing',
    relocationAssistance: false,
    language: 'Basic German',
    license: 'None',
    startDate: 'Immediate',
    workingHours: '10 hrs/day, 5 days/week',
    benefits: ['Meal vouchers', 'Health coverage']
  },
];


// Get all unique job titles
const allJobTitles = Array.from(new Set(jobs.map((job) => job.title))).sort();

export default function JobCountryPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const filteredJobs = selectedJob
    ? jobs.filter((job) => job.title === selectedJob)
    : jobs;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blue-Collar Jobs Abroad</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Find real, in-demand jobs like “Truck Driver in Canada” or “Plumber in the UK”. Apply directly with visa support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              Skilled Job Openings
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Visa & Relocation Support
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="mb-6 text-center">
          <label htmlFor="jobFilter" className="block text-lg font-medium mb-2">
            Filter by Job Role:
          </label>
          <select
            id="jobFilter"
            className="border border-gray-300 rounded-md p-2 w-full max-w-sm mx-auto"
            value={selectedJob || ''}
            onChange={(e) => setSelectedJob(e.target.value || null)}
          >
            <option value="">All Jobs</option>
            {allJobTitles.map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.section
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.slug}
              className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <div className="relative h-40 mb-4">
                <Image
                  src={job.image}
                  alt={job.country}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {job.title} in {job.country}
              </h3>
              <p className="text-gray-600 mb-4">
                {job.title} opportunities are open in {job.country}. Apply now for visa support and job matching.
              </p>
              <a
                href={`/work-visa/jobs/${job.slug}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
          {filteredJobs.length === 0 && (
            <div className="col-span-full text-center text-gray-600 text-lg">
              No listings found for <strong>{selectedJob}</strong>.
            </div>
          )}
        </motion.section>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Need Help Applying?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Our experts guide you with documentation, job match, and visa filing—end to end.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book a Free Consultation
          </a>
          <a
            href="tel:+919876543210"
            className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition font-semibold"
          >
            Call Now: +91 98765 43210
          </a>
        </div>
      </div>
    </div>
  );
}
