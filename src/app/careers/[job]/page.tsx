'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaMapMarkerAlt, FaBuilding, FaClock, FaArrowLeft, FaPaperclip, FaLinkedin } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

type JobType = {
  id: string;
  title: string;
  description: string;
  location: string;
  department: string;
  type: string;
  salary?: string;
  responsibilities: string[];
  requirements: string[];
  benefits?: string[];
  postedDate: string;
};

const jobOpenings: JobType[] = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Join our team to build beautiful, responsive user interfaces for our immigration platform. You will work with modern technologies like React, Next.js, and Tailwind CSS to create seamless experiences for our clients.',
    location: 'Remote (Global)',
    department: 'Engineering',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    responsibilities: [
      'Develop and maintain responsive web applications',
      'Collaborate with designers to implement UI/UX designs',
      'Optimize applications for maximum speed and scalability',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and team discussions'
    ],
    requirements: [
      '3+ years of experience with React and TypeScript',
      'Proficiency with Next.js and modern frontend tooling',
      'Strong understanding of responsive design principles',
      'Experience with state management solutions (Redux, Zustand)',
      'Familiarity with RESTful APIs and GraphQL'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Fully remote work environment',
      'Flexible working hours',
      'Health, dental, and vision insurance',
      'Professional development budget',
      'Generous vacation policy'
    ],
    postedDate: '2025-06-15'
  },
  {
    id: 'immigration-consultant',
    title: 'Immigration Consultant',
    description: 'Help clients navigate the complex world of immigration with your expert knowledge. You will guide individuals and families through visa applications, document preparation, and interview processes.',
    location: 'Toronto, Canada',
    department: 'Consulting',
    type: 'Full-time',
    salary: 'CA$75,000 - CA$95,000',
    responsibilities: [
      'Assess client eligibility for various immigration programs',
      'Prepare and submit visa applications',
      'Stay updated on immigration law changes',
      'Provide consultation and advice to clients',
      'Maintain accurate client records'
    ],
    requirements: [
      'RCIC certification or equivalent',
      '3+ years of immigration consulting experience',
      'In-depth knowledge of Canadian immigration programs',
      'Excellent communication and interpersonal skills',
      'Ability to handle sensitive client information'
    ],
    benefits: [
      'Competitive compensation package',
      'Hybrid work model (office/remote)',
      'Paid licensing and certification fees',
      'Opportunities for career advancement',
      'Team building and social events'
    ],
    postedDate: '2025-06-10'
  }
];

export default function JobDetailPage() {
  const { job } = useParams<{ job: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    resume: null as File | null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const selectedJob = jobOpenings.find((j) => j.id === job);

  const handleApply = () => {
    setIsModalOpen(true);
    setSubmitSuccess(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      resume: null,
      coverLetter: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setIsSubmitting(false);
    } catch {
      setIsSubmitting(false);
    }
  };

  if (!selectedJob) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-md max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you&apos;re looking for doesn&apos;t exist or may have been removed.</p>
          <Link href="/careers" className="text-blue-600 hover:underline flex items-center justify-center">
            <FaArrowLeft className="mr-2" /> Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/careers" 
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Careers
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Job Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">{selectedJob.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <span className="flex items-center gap-1">
                    <FaBuilding className="text-blue-200" /> {selectedJob.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-blue-200" /> {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-blue-200" /> {selectedJob.type}
                  </span>
                  {selectedJob.salary && (
                    <span className="bg-white/20 px-2 py-1 rounded-full">
                      {selectedJob.salary}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-xs text-blue-100">
                Posted: {new Date(selectedJob.postedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>

          {/* Job Content */}
          <div className="p-6 sm:p-8">
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700">{selectedJob.description}</p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.requirements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {selectedJob.benefits && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedJob.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-12">
              <button
                onClick={handleApply}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition flex items-center gap-2"
              >
                Apply Now <FaExternalLinkAlt className="text-sm" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Apply for: {selectedJob.title}
                  </h2>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close application form"
                  >
                    <IoMdClose className="text-xl" />
                  </button>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Application Submitted!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for applying to {selectedJob.title}. We&apos;ll review your application and get back to you soon.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                          LinkedIn Profile
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <FaLinkedin />
                          </div>
                          <input
                            type="url"
                            id="linkedin"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/your-profile"
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Resume / CV *
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                            <FaPaperclip className="text-gray-500 text-2xl mb-2" />
                            <p className="text-sm text-gray-500 text-center">
                              {formData.resume ? (
                                <span className="font-medium">{formData.resume.name}</span>
                              ) : (
                                <>
                                  <span className="font-semibold">Click to upload</span> or drag and drop<br />
                                  PDF, DOCX (Max 5MB)
                                </>
                              )}
                            </p>
                          </div>
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleFileChange}
                            required
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                        Cover Letter (Optional)
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us why you'd be a great fit for this position..."
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow transition disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}