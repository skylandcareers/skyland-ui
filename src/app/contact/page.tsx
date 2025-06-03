'use client';

import { useState } from 'react';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaQuestionCircle, FaTools, FaComments } from 'react-icons/fa';

const ContactUs = () => {
  const SUBJECT_OPTIONS = [
    { value: '', label: 'Select a subject' },
    { value: 'inquiry', label: 'General Inquiry' },
    { value: 'support', label: 'Support Request' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'visa', label: 'Visa Consultation' },
  ];

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showAlert, setShowAlert] = useState(true);

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email';
    if (!form.subject) newErrors.subject = 'Please select a subject';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    if (!form.consent) newErrors.consent = 'You must accept the privacy policy';
    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowAlert(true);
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');

    try {
      await new Promise(res => setTimeout(res, 1500));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '', consent: false });
      setErrors({});
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Have questions or want to start your immigration journey? We&apos;re here to help!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <section className="space-y-8 bg-white p-8 shadow-lg rounded-3xl">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-3">
              <FaPaperPlane /> Contact Info
            </h2>
            
            <div className="flex items-center gap-6">
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full text-2xl shadow-md">
                <FaPhoneAlt />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
                <p className="text-gray-700">+91-9032420020</p>
                <p className="text-gray-500 text-sm">Mon-Fri, 9AM - 6PM</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full text-2xl shadow-md">
                <FaEnvelope />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Email</h2>
                <p className="text-gray-700">info@skylandimmigration.com</p>
                <p className="text-gray-500 text-sm">We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full text-2xl shadow-md">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Visit Us</h2>
                <p className="text-gray-700">123 Global Plaza, Mumbai</p>
                <p className="text-gray-500 text-sm">Open weekdays 9AM - 5PM</p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-lg"
            noValidate
            aria-live="polite"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-3">
              <FaPaperPlane /> Send Us a Message
            </h2>

            {/* Name */}
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
              placeholder="Your full name"
              className={`w-full mb-2 px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2
                ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
            />
            {errors.name && (
              <p className="text-red-600 mb-4 text-sm" id="name-error">
                {errors.name}
              </p>
            )}

            {/* Email */}
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
              placeholder="you@example.com"
              className={`w-full mb-2 px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2
                ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
            />
            {errors.email && (
              <p className="text-red-600 mb-4 text-sm" id="email-error">
                {errors.email}
              </p>
            )}

            {/* Phone */}
            <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full mb-5 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Subject */}
            <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              required
              className={`w-full mb-2 px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2
                ${errors.subject ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
            >
              {SUBJECT_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value} disabled={value === ''}>
                  {label}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p className="text-red-600 mb-4 text-sm" id="subject-error">
                {errors.subject}
              </p>
            )}

            {/* Message */}
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
              Message *
            </label>
            <input
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
              placeholder="Write your message here..."
              className={`w-full mb-2 px-4 py-3 border rounded-2xl resize-none focus:outline-none focus:ring-2
                ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
            />
            {errors.message && (
              <p className="text-red-600 mb-4 text-sm" id="message-error">
                {errors.message}
              </p>
            )}

            {/* Consent Checkbox */}
            <label htmlFor="consent" className="inline-flex items-center mb-6 cursor-pointer">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
                required
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-3 text-gray-700 text-sm">
                I agree to the{' '}
                <a href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  privacy policy
                </a>
              </span>
            </label>
            {errors.consent && (
              <p className="text-red-600 mb-4 text-sm" id="consent-error">
                {errors.consent}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl shadow-lg transition disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>

            {/* Alerts */}
            {status === 'success' && showAlert && (
              <div
                role="alert"
                className="mt-6 p-4 border border-green-400 bg-green-50 text-green-700 rounded-lg relative animate-fadeIn"
              >
                Thank you! We will get back to you soon.
                <button
                  onClick={() => setShowAlert(false)}
                  aria-label="Dismiss success message"
                  className="absolute top-2 right-3 text-green-700 hover:text-green-900 focus:outline-none"
                >
                  ✕
                </button>
              </div>
            )}

            {status === 'error' && showAlert && (
              <div
                role="alert"
                className="mt-6 p-4 border border-red-400 bg-red-50 text-red-700 rounded-lg relative animate-fadeIn"
              >
                Oops! Something went wrong. Please try again.
                <button
                  onClick={() => setShowAlert(false)}
                  aria-label="Dismiss error message"
                  className="absolute top-2 right-3 text-red-700 hover:text-red-900 focus:outline-none"
                >
                  ✕
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Need Help Cards */}
        <section className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold mb-8 text-gray-900 text-center">Need Help?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                label: 'Frequently Asked Questions', 
                href: '/faq', 
                icon: <FaQuestionCircle className="text-3xl text-blue-600" />,
                description: 'Find answers to common questions'
              },
              { 
                label: 'Support Center', 
                href: '/support', 
                icon: <FaTools className="text-3xl text-blue-600" />,
                description: 'Troubleshooting guides and resources'
              },
              { 
                label: 'Live Chat', 
                href: '/contact', 
                icon: <FaComments className="text-3xl text-blue-600" />,
                description: 'Instant help from our team'
              },
            ].map(({ label, href, icon, description }) => (
              <a
                key={label}
                href={href}
                className="flex flex-col items-center gap-4 w-full bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:bg-blue-50"
                aria-label={label}
              >
                <div className="bg-blue-100 p-4 rounded-full">
                  {icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{label}</h4>
                <p className="text-gray-600 text-sm">{description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;