'use client';
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

const GOOGLE_SHEET_WEB_APP_URL = "PASTE_YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE";
const WHATSAPP_NUMBER = "919032420020";

// ---- Typed Components ----
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`w-full px-4 py-3 border rounded-xl text-gray-700 focus:ring-2 focus:ring-blue-600 outline-none ${props.className}`}
  />
);

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    {...props}
    className={`w-full px-4 py-3 border rounded-xl text-gray-700 focus:ring-2 focus:ring-blue-600 outline-none ${props.className}`}
  />
);

// ---- Page ----
export default function FreeAssessmentPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    jobCategory: "",
    education: "",
    experienceYears: 0,
    languageLevel: "",
    passportMonths: 6,
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      const message = encodeURIComponent(
        `Hello, my name is ${form.name}. I want to apply for ${form.country} (${form.jobCategory}). Please guide me.`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

      setDone(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  if (done) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-3">✅ Assessment Submitted</h1>
        <p className="text-gray-600 max-w-md mb-6">
          Our advisor will contact you shortly.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-8">

        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Free Work Visa Assessment</h1>
          <p className="text-gray-500 text-sm mt-1">Takes less than 2 minutes</p>
        </div>

        {/* Step Circles */}
        <div className="flex justify-center gap-4 mb-6">
          {[1,2,3].map((n) => (
            <div key={n} className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium
              ${step === n ? 'bg-blue-600 text-white' : step > n ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}
            `}>
              {step > n ? '✓' : n}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-5">
            <Input
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <button
              onClick={next}
              disabled={!form.name || !form.phone}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition"
            >
              Next →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-5">
            <Select
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            >
              <option value="">Select Country</option>
              <option>Russia</option>
              <option>Slovakia</option>
              <option>Albania</option>
              <option>Germany</option>
              <option>UAE</option>
            </Select>

            <Select
              value={form.jobCategory}
              onChange={(e) => setForm({ ...form, jobCategory: e.target.value })}
            >
              <option value="">Job Category</option>
              <option>Warehouse / Factory</option>
              <option>Hotel / Hospitality</option>
              <option>Construction Helper</option>
              <option>Driver / Delivery</option>
              <option>Cleaner / Caregiver</option>
            </Select>

            <div className="flex gap-3">
              <button onClick={back} className="w-1/2 py-3 border rounded-xl">← Back</button>
              <button onClick={next} className="w-1/2 py-3 bg-blue-600 text-white rounded-xl">
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-5">
            <Select
              value={form.education}
              onChange={(e) => setForm({ ...form, education: e.target.value })}
            >
              <option value="">Highest Education</option>
              <option>No formal schooling</option>
              <option>10th</option>
              <option>12th / Diploma</option>
              <option>Bachelor's Degree</option>
            </Select>

            <Input
              type="number"
              placeholder="Years of Experience"
              value={form.experienceYears}
              onChange={(e) => setForm({ ...form, experienceYears: Number(e.target.value) })}
            />

            <Select
              value={form.languageLevel}
              onChange={(e) => setForm({ ...form, languageLevel: e.target.value })}
            >
              <option value="">Language Ability</option>
              <option>No basic communication</option>
              <option>Basic</option>
              <option>Intermediate</option>
              <option>Good working English</option>
            </Select>

            <Input
              type="number"
              placeholder="Passport Validity (months)"
              value={form.passportMonths}
              onChange={(e) => setForm({ ...form, passportMonths: Number(e.target.value) })}
            />

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition"
            >
              {isSubmitting ? "Submitting..." : "Submit & Open WhatsApp →"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
