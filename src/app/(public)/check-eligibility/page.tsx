'use client';
import React, { useState } from 'react';
import axios from 'axios';

// ---------- Types ----------
interface CountryRule {
  displayName: string;
  minSalaryEUR: number;
  minSalaryINR: number;
  jobsAvailable: readonly string[];
  educationRequired: string;
  drivingLicense: string;
  visaProcessingTime?: string;
  languageRequirements?: string;
}

type CountryKey = keyof typeof countryRules;

const EDUCATION_LEVELS = [
  'No formal schooling',
  'High School / 10th',
  'Diploma / 12th',
  "Bachelor's Degree",
  "Master's Degree",
  'PhD',
] as const;

type EducationLevel = typeof EDUCATION_LEVELS[number];

const JOB_CATEGORIES = [
  'Warehouse / Logistics',
  'Hotel / Housekeeping',
  'Cleaning / Facilities',
  'Delivery / Driver',
  'Construction / Labour'
] as const;

type JobCategory = typeof JOB_CATEGORIES[number];

const PASSPORT_OPTIONS = [
  { value: 3, label: 'Less than 6 months', warning: true },
  { value: 9, label: '6-12 months', warning: false },
  { value: 24, label: '1-2 years', warning: false },
  { value: 60, label: '3+ years', warning: false },
] as const;

type FormState = {
  jobCategory: JobCategory;
  country: CountryKey;
  education: EducationLevel;
  desiredSalary: number;
  experienceYears: number;
  hasJobOffer: boolean;
  passportMonths: number;
  // Moved to end
  name: string;
  phone: string;
  email: string;
};

// ---------- Country rules ----------
const countryRules = {
  Russia: {
    displayName: 'Russia',
    minSalaryEUR: 12000,
    minSalaryINR: 12000 * 91,
    jobsAvailable: ['Warehouse Worker', 'Hotel Housekeeping', 'Factory Helper', 'Cleaning Staff'],
    educationRequired: 'Basic schooling / 10th pass',
    drivingLicense: 'Not required for general labor roles',
    visaProcessingTime: '2-4 weeks',
    languageRequirements: 'Basic Russian helpful but not required',
  },
  Slovakia: {
    displayName: 'Slovakia',
    minSalaryEUR: 15500,
    minSalaryINR: 15500 * 91,
    jobsAvailable: ['Warehouse Assistant', 'Production Operator', 'Packing & Sorting'],
    educationRequired: '10th / 12th Pass',
    drivingLicense: 'Not required',
    visaProcessingTime: '3-6 weeks',
    languageRequirements: 'English sufficient',
  },
  Albania: {
    displayName: 'Albania',
    minSalaryEUR: 14000,
    minSalaryINR: 14000 * 91,
    jobsAvailable: ['Hotel Cleaning Staff', 'Kitchen Helper', 'Hospitality Support'],
    educationRequired: 'No mandatory education requirement',
    drivingLicense: 'Not required',
    visaProcessingTime: '2-3 weeks',
    languageRequirements: 'English sufficient',
  },
  Germany: {
    displayName: 'Germany',
    minSalaryEUR: 22000,
    minSalaryINR: 22000 * 91,
    jobsAvailable: ['Cleaning Staff', 'Janitorial Worker', 'Housekeeping Support', 'Caregiver'],
    educationRequired: '10th Pass or above',
    drivingLicense: 'Not required for cleaning roles',
    visaProcessingTime: '4-8 weeks',
    languageRequirements: 'Basic German required for most roles',
  },
  UAE: {
    displayName: 'United Arab Emirates',
    minSalaryEUR: 0,
    minSalaryINR: 12000 * 22,
    jobsAvailable: ['Bike Delivery Driver', 'Cleaner', 'Construction Helper', 'Security Support'],
    educationRequired: 'Basic schooling',
    drivingLicense: 'UAE driving license required for bike delivery (can be obtained after arrival)',
    visaProcessingTime: '1-2 weeks',
    languageRequirements: 'Basic English required',
  },
} as const;

// Job category to country mapping
const jobCategoryToCountries: Record<JobCategory, CountryKey[]> = {
  'Warehouse / Logistics': ['Russia', 'Slovakia'],
  'Hotel / Housekeeping': ['Russia', 'Albania', 'Germany'],
  'Cleaning / Facilities': ['Russia', 'Albania', 'Germany', 'UAE'],
  'Delivery / Driver': ['UAE'],
  'Construction / Labour': ['Russia', 'UAE']
};

type EligibilityResult = {
  status: 'Likely Eligible' | 'Possibly Eligible' | 'Unlikely to be Eligible' | 'Not Eligible' | 'unknown' | 'unsupported';
  score?: number;
  reasons?: string[];
  rules?: CountryRule;
  suggestions?: string[];
};

// ---------- Helpers ----------
function educationToRank(level: EducationLevel): number {
  return EDUCATION_LEVELS.indexOf(level);
}

function getRequiredEducationRank(country: CountryKey): number {
  const rules = countryRules[country];
  if (!rules) return EDUCATION_LEVELS.indexOf('Diploma / 12th');

  if (rules.educationRequired.includes('No mandatory')) return 0;
  if (rules.educationRequired.includes('Basic schooling')) return EDUCATION_LEVELS.indexOf('High School / 10th');
  if (rules.educationRequired.includes('10th / 12th')) return EDUCATION_LEVELS.indexOf('Diploma / 12th');

  return EDUCATION_LEVELS.indexOf('Diploma / 12th'); // default
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 15;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function computeEligibility(form: FormState): EligibilityResult {
  const { country, education, desiredSalary, experienceYears, hasJobOffer, passportMonths } = form;
  const rules = countryRules[country];
  if (!rules) return { status: 'unsupported' };

  const eduRank = educationToRank(education);
  const minEduRank = getRequiredEducationRank(country);
  const meetsEducation = eduRank >= minEduRank;

  const meetsSalary = rules.minSalaryEUR > 0 ? desiredSalary >= rules.minSalaryEUR : desiredSalary > 0;
  const experienceOk = experienceYears >= 1;
  const passportOk = passportMonths >= 6;

  let score = 0;
  if (meetsEducation) score += 30;
  if (meetsSalary) score += 30;
  if (experienceOk) score += 20;
  if (hasJobOffer) score += 10;
  if (passportOk) score += 10;

  let status: EligibilityResult['status'] = 'Unlikely to be Eligible';
  if (score >= 80) status = 'Likely Eligible';
  else if (score >= 50) status = 'Possibly Eligible';
  else if (score < 30) status = 'Not Eligible';

  const reasons: string[] = [];
  const suggestions: string[] = [];

  // Education feedback
  if (meetsEducation) {
    reasons.push(`Education level (${education}) meets requirements for ${rules.displayName}.`);
  } else {
    reasons.push(`Education level (${education}) may be below typical expectations for ${rules.displayName}.`);
    if (minEduRank > 0) {
      suggestions.push(`Consider completing ${EDUCATION_LEVELS[minEduRank]} for better opportunities.`);
    }
  }

  // Salary feedback
  if (meetsSalary) {
    reasons.push(`Desired salary meets or exceeds typical minimum for ${rules.displayName}.`);
  } else if (rules.minSalaryEUR > 0) {
    reasons.push(`Desired salary is below typical minimum (${rules.minSalaryEUR.toLocaleString()} EUR).`);
    suggestions.push(`Consider adjusting salary expectations to ${rules.minSalaryEUR.toLocaleString()} EUR or higher.`);
  }

  // Experience feedback
  if (experienceOk) {
    reasons.push(`You have sufficient experience (${experienceYears} years).`);
  } else {
    reasons.push('Consider gaining more experience to strengthen your application.');
    suggestions.push('Aim for at least 1-2 years of relevant experience.');
  }

  // Passport feedback
  if (passportOk) {
    reasons.push('Passport validity is sufficient.');
  } else {
    reasons.push('Passport validity under 6 months may cause delays.');
    suggestions.push('Renew your passport to avoid processing delays.');
  }

  // Job offer feedback
  if (hasJobOffer) {
    reasons.push('Existing job offer significantly improves eligibility.');
  }

  // Language requirements
  if (rules.languageRequirements) {
    reasons.push(`Language: ${rules.languageRequirements}`);
  }

  return { status, score, reasons, suggestions, rules };
}

// ---------- UI Components ----------
function ProgressBar({ step, totalSteps }: { step: number; totalSteps: number }) {
  const steps = ['Job Type', 'Location', 'Qualifications', 'Review', 'Contact'];

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-3">
        {steps.map((label, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step > i + 1 ? 'bg-green-500 text-white' :
              step === i + 1 ? 'bg-blue-600 text-white' :
                'bg-gray-200 text-gray-500'
              }`}>
              {step > i + 1 ? '✓' : i + 1}
            </div>
            <span className={`text-xs mt-2 text-center ${step >= i + 1 ? 'text-blue-600 font-medium' : 'text-gray-400'
              }`}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${step > i + 1 ? 'bg-green-500' :
              step === i + 1 ? 'bg-blue-600' : 'bg-gray-200'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

function CountryInfoCard({ rules }: { rules: CountryRule }) {
  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
      <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
        <span className="text-lg mr-2">🌍</span>
        About {rules.displayName}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div className="flex items-center">
          <span className="font-medium text-blue-800 min-w-24">Min Salary:</span>
          <span className="text-gray-700">{rules.minSalaryEUR > 0 ? `${rules.minSalaryEUR.toLocaleString()} EUR` : 'Varies'}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-blue-800 min-w-24">Visa Time:</span>
          <span className="text-gray-700">{rules.visaProcessingTime}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-blue-800 min-w-24">Education:</span>
          <span className="text-gray-700">{rules.educationRequired}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-blue-800 min-w-24">Language:</span>
          <span className="text-gray-700">{rules.languageRequirements}</span>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, children, required, error }: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}

// ---------- Main Component ----------
export default function CheckEligibilityPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    jobCategory: 'Warehouse / Logistics',
    country: 'Russia',
    education: "High School / 10th",
    desiredSalary: 15000,
    experienceYears: 2,
    hasJobOffer: false,
    passportMonths: 24,
    name: '',
    phone: '',
    email: '',
  });

  const [result, setResult] = useState<EligibilityResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<{ phone?: string; email?: string }>({});

  const availableCountries = jobCategoryToCountries[form.jobCategory] || [];

  // Update default salary when country changes
  React.useEffect(() => {
    const rules = countryRules[form.country];
    if (rules && rules.minSalaryEUR > 0) {
      setForm(prev => ({ ...prev, desiredSalary: rules.minSalaryEUR }));
    }
  }, [form.country]);

  const next = async (): Promise<void> => {
    // Validate contact info on step 5
    if (step === 5) {
      const errors: { phone?: string; email?: string } = {};
      if (!validatePhone(form.phone)) {
        errors.phone = 'Please enter a valid phone number (10-15 digits)';
      }
      if (!validateEmail(form.email)) {
        errors.email = 'Please enter a valid email address';
      }
      if (!form.name.trim()) {
        errors.phone = 'Please enter your name'; // Reusing phone error field for simplicity
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }

      setIsLoading(true);
      const res = computeEligibility(form);
      setResult(res);

      try {
        await axios.post('/api/contact', {
          name: form.name,
          email: form.email,
          contact_number: form.phone,
          source_url: window.location.href,
          subject: 'Eligibility Check Result',
          message: `Eligibility Status: ${res.status}. Score: ${res.score}. Job Category: ${form.jobCategory}. Country: ${form.country}.`,
          // Eligibility Fields
          jobCategory: form.jobCategory,
          country: form.country,
          education: form.education,
          desiredSalary: form.desiredSalary,
          experienceYears: form.experienceYears,
          hasJobOffer: form.hasJobOffer,
          passportMonths: form.passportMonths,
          eligibilityStatus: res.status,
          eligibilityScore: res.score
        });
      } catch (error) {
        console.error('Failed to save eligibility result:', error);
        // We probably still want to show the result to the user even if saving failed,
        // or maybe show a warning. For now, we'll log it.
      }

      setIsLoading(false);
    }
    setStep((s) => Math.min(6, s + 1));
  };

  const back = (): void => setStep((s) => Math.max(1, s - 1));

  const rules = countryRules[form.country];
  const totalSteps = 5;

  const getStepTitle = (step: number): string => {
    const titles = {
      1: "What type of work are you looking for?",
      2: "Where would you like to work?",
      3: "Your Qualifications & Experience",
      4: "Review Your Details",
      5: "Almost There - Contact Information",
      6: "Your Eligibility Results"
    };
    return titles[step as keyof typeof titles] || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-800 font-medium">
              Blue‑collar & semi‑skilled jobs only
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Visa Eligibility Check
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Complete this simple form to check your eligibility for international work opportunities
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Progress Bar */}
          <div className="px-6 pt-6">
            <ProgressBar step={step} totalSteps={totalSteps} />
          </div>

          {/* Step Title */}
          <div className="px-6 pb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {getStepTitle(step)}
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              {step === 1 && "Choose the type of work you're interested in"}
              {step === 2 && "Select your preferred destination country"}
              {step === 3 && "Tell us about your background and experience"}
              {step === 4 && "Verify all your information is correct"}
              {step === 5 && "We'll use this to send your detailed results"}
              {step === 6 && "Here's your personalized assessment"}
            </p>

            {/* Form Content */}
            <div className="space-y-6">
              {/* Step 1: Job Category */}
              {step === 1 && (
                <div className="grid grid-cols-1 gap-4">
                  {JOB_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setForm({ ...form, jobCategory: category });
                        // Auto-select first available country for this job category
                        const countries = jobCategoryToCountries[category];
                        if (countries && countries.length > 0) {
                          setForm(prev => ({ ...prev, country: countries[0] }));
                        }
                        setTimeout(() => next(), 300);
                      }}
                      className="p-4 text-left border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                    >
                      <div className="font-medium text-gray-800">{category}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {jobCategoryToCountries[category]?.map(c => countryRules[c]?.displayName).join(', ')}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Country Selection */}
              {step === 2 && (
                <div className="space-y-6">
                  <CountryInfoCard rules={rules} />

                  <InputField label="Select Destination Country">
                    <select
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value as CountryKey })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      {availableCountries.map((c) => (
                        <option key={c} value={c}>{countryRules[c].displayName}</option>
                      ))}
                    </select>
                  </InputField>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <h4 className="font-semibold text-green-800 mb-2">Available Roles in {rules.displayName}</h4>
                    <div className="flex flex-wrap gap-2">
                      {rules.jobsAvailable.map((job) => (
                        <span key={job} className="px-3 py-1 bg-white text-green-700 text-sm rounded-full border border-green-200">
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Qualifications */}
              {step === 3 && (
                <div className="space-y-6">
                  <InputField label="Highest Education Level">
                    <select
                      value={form.education}
                      onChange={(e) => setForm({ ...form, education: e.target.value as EducationLevel })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      {EDUCATION_LEVELS.map((lvl) => (
                        <option key={lvl} value={lvl}>{lvl}</option>
                      ))}
                    </select>
                  </InputField>

                  <InputField label="Years of Relevant Experience">
                    <div className="space-y-4">
                      <input
                        type="range"
                        min="0"
                        max="30"
                        value={form.experienceYears}
                        onChange={(e) => setForm({ ...form, experienceYears: Number(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">0 years</span>
                        <span className="text-lg font-semibold text-blue-600">{form.experienceYears} years</span>
                        <span className="text-sm text-gray-500">30+ years</span>
                      </div>
                    </div>
                  </InputField>

                  <InputField label="Passport Validity Remaining">
                    <select
                      value={form.passportMonths}
                      onChange={(e) => setForm({ ...form, passportMonths: Number(e.target.value) })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      {PASSPORT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </InputField>

                  <div className="flex items-center p-4 bg-gray-50 rounded-xl border">
                    <input
                      type="checkbox"
                      id="jobOffer"
                      checked={form.hasJobOffer}
                      onChange={(e) => setForm({ ...form, hasJobOffer: e.target.checked })}
                      className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="jobOffer" className="ml-3 text-sm text-gray-700">
                      <span className="font-medium">I already have a job offer</span>
                      <p className="text-gray-500 mt-1">This significantly improves your eligibility chances</p>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-sm text-gray-500">Job Type</div>
                      <div className="font-medium">{form.jobCategory}</div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-sm text-gray-500">Destination Country</div>
                      <div className="font-medium">{rules.displayName}</div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-sm text-gray-500">Education</div>
                      <div className="font-medium">{form.education}</div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-sm text-gray-500">Experience</div>
                      <div className="font-medium">{form.experienceYears} years</div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-sm text-gray-500">Desired Salary</div>
                      <div className="font-medium">{form.desiredSalary.toLocaleString()} EUR</div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-sm text-gray-500">Passport Validity</div>
                      <div className="font-medium">
                        {PASSPORT_OPTIONS.find(opt => opt.value === form.passportMonths)?.label}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <p className="text-sm text-blue-700">
                      💡 <strong>Next:</strong> Enter your contact details to see your personalized eligibility results
                    </p>
                  </div>
                </div>
              )}

              {/* Step 5: Contact Information */}
              {step === 5 && (
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <p className="text-sm text-blue-700">
                      We respect your privacy. Your information is safe and will only be used to contact you about your eligibility results.
                    </p>
                  </div>

                  <InputField label="Full Name" required error={formErrors.phone}>
                    <input
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        setFormErrors({});
                      }}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your full name"
                    />
                  </InputField>

                  <InputField label="Phone Number" required error={formErrors.phone}>
                    <input
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        setFormErrors({});
                      }}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="+91 12345 67890"
                    />
                  </InputField>

                  <InputField label="Email Address" required error={formErrors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        setFormErrors({});
                      }}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </InputField>
                </div>
              )}

              {/* Step 6: Results */}
              {step === 6 && result && !isLoading && (
                <div className="space-y-6">
                  {/* Result Header */}
                  <div className={`p-6 rounded-xl border-2 text-center ${result.status === 'Likely Eligible' ? 'bg-green-50 border-green-200' :
                    result.status === 'Possibly Eligible' ? 'bg-yellow-50 border-yellow-200' :
                      'bg-red-50 border-red-200'
                    }`}>
                    <div className="text-4xl mb-3">
                      {result.status === 'Likely Eligible' ? '🎉' :
                        result.status === 'Possibly Eligible' ? '🤔' : '💡'}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {result.status === 'Likely Eligible' ? 'Likely Eligible' :
                        result.status === 'Possibly Eligible' ? 'Possibly Eligible' :
                          'Needs Improvement'}
                    </h3>
                    {typeof result.score === 'number' && (
                      <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
                        <span className="text-sm text-gray-600">Score:</span>
                        <span className="font-bold text-lg">{result.score}/100</span>
                      </div>
                    )}
                  </div>

                  {/* Trust Builder */}
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl">
                    <p className="text-sm text-purple-700 text-center">
                      <strong>Important:</strong> This is an initial automated assessment — our expert will manually verify your profile and guide you personally.
                    </p>
                  </div>

                  {/* Assessment Details */}
                  {result.reasons && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800 text-lg">Assessment Details</h4>
                      <div className="space-y-3">
                        {result.reasons.map((reason, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-white border rounded-xl hover:shadow-sm transition-shadow">
                            <div className={`w-2 h-2 rounded-full mt-2 ${reason.includes('meets') || reason.includes('sufficient') || reason.includes('improves')
                              ? 'bg-green-500'
                              : 'bg-yellow-500'
                              }`}></div>
                            <p className="text-gray-700 flex-1">{reason}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Suggestions */}
                  {result.suggestions && result.suggestions.length > 0 && (
                    <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <span className="text-lg mr-2">💡</span>
                        Suggestions for Improvement
                      </h4>
                      <ul className="space-y-2">
                        {result.suggestions.map((suggestion, i) => (
                          <li key={i} className="flex items-center text-blue-800">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Country & Job Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="p-5 bg-white border border-gray-200 rounded-xl">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="text-lg mr-2">🌍</span>
                        Country Details
                      </h4>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="font-medium text-gray-600">Minimum Salary</dt>
                          <dd className="text-gray-800">{rules.minSalaryEUR > 0 ? `${rules.minSalaryEUR.toLocaleString()} EUR` : 'Varies'}</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="font-medium text-gray-600">Education</dt>
                          <dd className="text-gray-800">{rules.educationRequired}</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="font-medium text-gray-600">Driving License</dt>
                          <dd className="text-gray-800">{rules.drivingLicense}</dd>
                        </div>
                        <div className="flex justify-between py-2">
                          <dt className="font-medium text-gray-600">Visa Processing</dt>
                          <dd className="text-gray-800">{rules.visaProcessingTime}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="p-5 bg-white border border-gray-200 rounded-xl">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="text-lg mr-2">💼</span>
                        Available Jobs
                      </h4>
                      <ul className="space-y-2">
                        {rules.jobsAvailable.map((job) => (
                          <li key={job} className="flex items-center py-2 border-b border-gray-100 last:border-b-0">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span className="text-gray-700">{job}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <a
                      href="tel:+919032420020"
                      className="flex-1 text-center px-6 py-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
                    >
                      📞 Call Now
                    </a>
                    <a
                      href="https://wa.me/919032420020"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              )}

              {/* Loading State */}
              {step === 6 && isLoading && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Analyzing your eligibility...</p>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            {step < 6 && step > 1 && (
              <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
                <button
                  onClick={back}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  ← Back
                </button>

                <button
                  onClick={next}
                  disabled={(step === 5 && (!form.name || !form.phone || !form.email))}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === 5 ? 'See My Results' : 'Continue →'}
                </button>
              </div>
            )}

            {/* Step 1 Navigation */}
            {step === 1 && (
              <div className="pt-8 mt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center mb-4">
                  Select your preferred job type to continue
                </p>
              </div>
            )}

            {/* Results Navigation */}
            {step === 6 && !isLoading && (
              <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
                <button
                  onClick={() => { setStep(1); setResult(null); }}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  ↻ Start Over
                </button>

                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-200 font-medium"
                >
                  ✏️ Edit My Details
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            We respect your privacy. Your data is used solely for this assessment and will not be shared without consent.
          </p>
        </div>
      </div>
    </div>
  );
}