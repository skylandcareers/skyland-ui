'use client';

import { useParams, notFound } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  MapPin,
  DollarSign,
  ShieldCheck,
  X
} from 'lucide-react';

const jobs = [
  {
    title: 'Delviery Boy',
    slug: 'delivery-boy-in-uae',
    country: 'UAE',
    image: '/images/canada-placeholder.jpg',
    description:
      'Canada actively recruits international blue-collar workers for its booming infrastructure sector.',
    location: 'Toronto, Ontario',
    salary: 'CAD 55,000 - 75,000/year',
    experience: '2+ years',
    requirements: ['Valid truck driving license', 'Clean driving record', 'Basic English'],
    benefits: ['Visa Sponsorship', 'Medical Insurance', 'Paid Leave'],
    visaType: 'Work Visa',
    visaValidity: '2 years',
    workPermitType: 'Open',
  },
  {
    title: 'Welder',
    slug: 'welder-in-canada',
    country: 'Canada',
    image: '/images/canada-placeholder.jpg',
    description:
      'Canada offers excellent opportunities for skilled welders in its growing industrial and infrastructure sectors.',
    location: 'Calgary, Alberta',
    salary: 'CAD 50,000 - 70,000/year',
    experience: '3+ years',
    requirements: ['Welding certification', 'Blueprint reading', 'Basic English'],
    benefits: ['Relocation Support', 'Health Insurance', 'Tool Allowance'],
    visaType: 'Skilled Worker Visa',
    visaValidity: '3 years',
    workPermitType: 'Closed',
  },
  {
    title: 'Plumber',
    slug: 'plumber-in-australia',
    country: 'Australia',
    image: '/images/australia-placeholder.jpg',
    description:
      'Australia is in need of certified plumbers to support residential and commercial construction across major cities.',
    location: 'Sydney, NSW',
    salary: 'AUD 60,000 - 85,000/year',
    experience: '2+ years',
    requirements: ['Plumbing certification', 'Valid license', 'Conversational English'],
    benefits: ['Paid Time Off', 'Subsidized Housing', 'Work-Life Balance'],
    visaType: 'Temporary Skill Shortage Visa',
    visaValidity: '4 years',
    workPermitType: 'Open',
  },
  {
    title: 'Electrician',
    slug: 'electrician-in-germany',
    country: 'Germany',
    image: '/images/germany-placeholder.jpg',
    description:
      'Germany is actively hiring electricians for industrial automation and green energy projects.',
    location: 'Berlin, Germany',
    salary: '€45,000 - €60,000/year',
    experience: '3+ years',
    requirements: ['Certified Electrician', 'German A2 or English B1', 'Work Experience'],
    benefits: ['Public Health Insurance', 'Annual Bonus', 'Language Support'],
    visaType: 'EU Blue Card',
    visaValidity: '4 years',
    workPermitType: 'Open',
  },
];

export default function JobPage() {
  const { slug } = useParams() as { slug: string };

  const job = jobs.find((j) => j.slug === slug);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!job) return notFound();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 relative">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-800">
        {job.title} in {job.country}
      </h1>

      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8 shadow-md">
        <Image
          src={job.image}
          alt={`${job.title} in ${job.country}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="mb-10 text-gray-700">
        <p className="text-lg leading-relaxed">{job.description}</p>
      </section>

      <section className="space-y-6 mb-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <Info icon={MapPin} label="Location" value={job.location} />
          <Info icon={DollarSign} label="Salary" value={job.salary} />
          <Info icon={Briefcase} label="Experience" value={job.experience} />
          <Info icon={ShieldCheck} label="Visa Support" value="Yes" />
          <Info icon={ShieldCheck} label="Visa Type" value={job.visaType} />
          <Info icon={ShieldCheck} label="Visa Validity" value={job.visaValidity} />
          <Info icon={ShieldCheck} label="Work Permit" value={`${job.workPermitType} Permit`} />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <List title="Requirements" items={job.requirements} />
          <List title="Benefits" items={job.benefits} />
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-md mb-8">
        <p className="text-blue-900">
          We assist with your <strong>visa process</strong>, job placement, relocation, and paperwork—<em>end to end</em>.
        </p>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Apply for this Job
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold mb-4">Apply for {job.title}</h2>

            {submitted ? (
              <div className="text-green-600">
                ✅ Your application has been submitted! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="dob"
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={formData.dob}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string })  {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-blue-500 w-5 h-5" />
      <span><strong>{label}:</strong> {value}</span>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:w-1/2">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-800 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
