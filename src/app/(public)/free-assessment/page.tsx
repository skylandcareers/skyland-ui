'use client';

import { useState } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaGlobe, FaGraduationCap, FaBriefcase, FaPassport, FaMoneyBillWave } from 'react-icons/fa';

export default function FreeAssessmentPage() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    education: '',
    jobCategory: '',
    experienceYears: '',
    hasJobOffer: false,
    passportMonths: '',
    desiredSalary: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // Handle checkbox
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post('/api/contact', {
        ...formData,
        subject: 'Free Assessment Request',
        source_url: '/free-assessment',
        status: 'New'
      });
      setSuccess(true);
      setStep(3); // Success Step
    } catch (error) {
      alert('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-900 px-8 py-6 text-white text-center">
          <h1 className="text-3xl font-bold">Free Assessment</h1>
          <p className="text-blue-200 mt-2">Check your eligibility for global opportunities</p>
        </div>

        <div className="p-8">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}><FaCheckCircle /></div>
          </div>

          {success ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                <FaCheckCircle />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Assessment Submitted!</h2>
              <p className="text-gray-600 mb-8">
                Thank you for your interest. Our experts will review your profile and contact you within 24 hours.
              </p>
              <a href="/" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                Back to Home
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4 animate-slideIn">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Personal Details</h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+971 50 000 0000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Country</label>
                    <div className="relative">
                      <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="text" name="country" required value={formData.country} onChange={handleChange} className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="UAE" />
                    </div>
                  </div>

                  <button type="button" onClick={nextStep} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6">
                    Next Step
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-slideIn">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Profile Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                      <div className="relative">
                        <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select name="education" value={formData.education} onChange={handleChange} className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                          <option value="">Select...</option>
                          <option value="High School">High School</option>
                          <option value="Diploma">Diploma</option>
                          <option value="Bachelors">Bachelor's Degree</option>
                          <option value="Masters">Master's Degree</option>
                          <option value="PhD">PhD</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Category</label>
                      <div className="relative">
                        <FaBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" name="jobCategory" value={formData.jobCategory} onChange={handleChange} className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Engineering" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                      <input type="number" name="experienceYears" value={formData.experienceYears} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 5" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Passport Validity (Months)</label>
                      <div className="relative">
                        <FaPassport className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="number" name="passportMonths" value={formData.passportMonths} onChange={handleChange} className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 24" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Desired Salary Range</label>
                    <div className="relative">
                      <FaMoneyBillWave className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="text" name="desiredSalary" value={formData.desiredSalary} onChange={handleChange} className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 5000 USD" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 py-2">
                    <input type="checkbox" id="hasJobOffer" name="hasJobOffer" checked={formData.hasJobOffer} onChange={handleChange} className="w-5 h-5 text-blue-600 rounded" />
                    <label htmlFor="hasJobOffer" className="text-gray-700">I already have a job offer abroad</label>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button type="button" onClick={prevStep} className="flex-1 border border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                      Back
                    </button>
                    <button type="submit" disabled={submitting} className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50">
                      {submitting ? 'Submitting...' : 'Submit Assessment'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
