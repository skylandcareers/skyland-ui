import React from 'react';
import { Calendar, Clock, Globe, DollarSign, Users } from 'lucide-react';

// Define types for FAQ item and Course data
interface FAQItem {
  q: string;
  a: string;
}

interface CourseModule {
  title: string;
  topics: string[];
  duration: string;
}

interface CourseData {
  description: string;
  overview: string[];
  benefits: string[];
  whoShouldJoin: string[];
  modules: CourseModule[];
  duration: string;
  classSchedule: string;
  nextBatchDate: string;
  mode: string;
  prerequisites: string;
  feeStructure: {
    regular: string;
    weekend?: string;
    oneOnOne?: string;
    installmentOptions?: string[];
  };
  faculty: {
    name: string;
    qualification: string;
    experience: string;
    specialization: string;
  }[];
  faq: FAQItem[];
  successStats?: string[];
}

// Map course names (slug-friendly keys) to CourseData
const courseDetails: Record<string, CourseData> = {
  ielts: {
    description:
      'Comprehensive IELTS coaching program designed to help you achieve 8+ bands with expert trainers, personalized feedback, and proven strategies.',
    overview: [
      'Covers all four modules: Listening, Reading, Writing, and Speaking',
      'Focus on both Academic and General Training versions',
      'Includes visa interview preparation for study abroad students',
      'Regular mock tests with detailed performance analysis',
    ],
    benefits: [
      'Certified IELTS trainers with 10+ years experience',
      'Real exam simulations with official Cambridge materials',
      'Personalized feedback on writing and speaking tasks',
      'Proven strategies to maximize scores in each section',
      'Small batch sizes (max 12 students) for individual attention',
      'Flexible online/offline batches with weekend options',
      'Access to premium study materials and online portal',
    ],
    whoShouldJoin: [
      'Students planning to study abroad in UK, USA, Canada, Australia',
      'Professionals seeking overseas employment opportunities',
      'Individuals applying for PR in English-speaking countries',
      'Anyone needing to improve their English proficiency scores',
    ],
    modules: [
      {
        title: 'Listening Module',
        topics: [
          'Understanding different accents',
          'Note-taking strategies',
          'Predicting answers',
          'Time management',
        ],
        duration: '12 hours',
      },
      {
        title: 'Reading Module',
        topics: [
          'Skimming and scanning techniques',
          'Dealing with different question types',
          'Vocabulary building',
          'Time-saving strategies',
        ],
        duration: '15 hours',
      },
      {
        title: 'Writing Module',
        topics: [
          'Task 1 (Report/Letter) structure',
          'Task 2 (Essay) frameworks',
          'Grammar and coherence',
          'Band descriptors analysis',
        ],
        duration: '18 hours',
      },
      {
        title: 'Speaking Module',
        topics: [
          'Fluency and coherence',
          'Pronunciation practice',
          'Common topics preparation',
          'Mock interviews with feedback',
        ],
        duration: '12 hours',
      },
    ],
    duration: '6 weeks (Intensive) or 12 weeks (Regular)',
    classSchedule: 'Monday-Friday: 2 hours/day or Weekends: 4 hours/day',
    nextBatchDate: '15th October 2023',
    mode: 'Online & Offline',
    prerequisites: 'Basic understanding of English',
    feeStructure: {
      regular: '₹15,000 for complete program',
      weekend: '₹18,000 for weekend batch',
      oneOnOne: '₹25,000 for personalized coaching',
      installmentOptions: [
        'Pay 50% at admission, 50% after 3 weeks',
        'EMI options available through credit cards',
      ],
    },
    faculty: [
      {
        name: 'Dr. Priya Sharma',
        qualification: 'PhD in Linguistics, Cambridge certified IELTS trainer',
        experience: '12 years training IELTS candidates',
        specialization: 'Writing and Speaking modules',
      },
      {
        name: 'Rahul Kapoor',
        qualification: 'MA English, IDP certified examiner',
        experience: '8 years as IELTS trainer',
        specialization: 'Listening and Reading strategies',
      },
    ],
    successStats: [
      '92% of our students achieve their target band score',
      'Average score improvement of 1.5 bands after training',
      '37 students achieved perfect 9 bands in Speaking last year',
    ],
    faq: [
      {
        q: 'What is the batch size?',
        a: 'We maintain small batches of 10-12 students for personalized attention and effective learning.',
      },
      {
        q: 'Are study materials provided?',
        a: 'Yes, you receive official Cambridge IELTS books, our proprietary materials, and access to our online portal with practice tests.',
      },
      {
        q: 'Can I get help with university applications?',
        a: 'Absolutely! We provide complimentary guidance on university selection and application process for our IELTS students.',
      },
      {
        q: 'What if I need to reschedule my classes?',
        a: 'We offer makeup classes for missed sessions. For online students, all classes are recorded and available for review.',
      },
    ],
  },
  spokenenglish: {
    description:
      'Specialized spoken English program designed specifically for Telugu, Tamil, and Hindi speakers to achieve fluency with perfect pronunciation and grammar.',
    overview: [
      'Focus on overcoming common challenges faced by Indian language speakers',
      'Emphasis on practical conversation skills for daily life and professional use',
      'Includes business English module for corporate professionals',
      'Cultural context integration for better communication',
    ],
    benefits: [
      'Native language-specific coaching approach',
      'Accent neutralization and pronunciation correction',
      'Grammar fundamentals made simple',
      'Real-life conversation practice (shopping, travel, interviews)',
      'Small group sessions (8-10 students) or one-on-one coaching',
      'Flexible timings with morning/evening/weekend batches',
      'Mobile app access for continuous practice',
    ],
    whoShouldJoin: [
      'Students preparing for overseas education',
      'Job seekers facing English interviews',
      'Professionals needing better workplace communication',
      'Housewives and seniors wanting to improve daily English',
      'Anyone who feels nervous speaking English',
    ],
    modules: [
      {
        title: 'Foundation Module',
        topics: [
          'Overcoming mother tongue influence',
          'Basic grammar structures',
          'Common vocabulary building',
          'Simple conversations practice',
        ],
        duration: '20 hours',
      },
      {
        title: 'Intermediate Module',
        topics: [
          'Tenses and sentence structures',
          'Pronunciation drills',
          'Role plays (restaurant, travel, shopping)',
          'Listening comprehension',
        ],
        duration: '25 hours',
      },
      {
        title: 'Advanced Module',
        topics: [
          'Fluency development',
          'Idioms and phrases',
          'Presentation skills',
          'Group discussions',
        ],
        duration: '20 hours',
      },
      {
        title: 'Professional Module (Optional)',
        topics: [
          'Business communication',
          'Email writing',
          'Meeting participation',
          'Interview preparation',
        ],
        duration: '15 hours',
      },
    ],
    duration: '3 months (2 hours/day, 5 days/week)',
    classSchedule: 'Multiple batches: 7-9AM, 4-6PM, 6-8PM (Weekend batches available)',
    nextBatchDate: '20th October 2023',
    mode: 'Online & Offline',
    prerequisites: 'No prior knowledge required',
    feeStructure: {
      regular: '₹12,000 for complete program',
      weekend: '₹14,000 for weekend batch',
      oneOnOne: '₹20,000 for personalized coaching',
      installmentOptions: [
        'Pay in 3 monthly installments of ₹4,500',
        'Group discounts available (5% for 2, 10% for 3+ registrations)',
      ],
    },
    faculty: [
      {
        name: 'Ananya Reddy',
        qualification: 'MA TESOL, Certified Pronunciation Coach',
        experience: '10 years teaching Indian language speakers',
        specialization: 'Accent Neutralization',
      },
      {
        name: 'Vikram Joshi',
        qualification: 'BA English Literature, Business English Certified',
        experience: '7 years corporate trainer',
        specialization: 'Professional Communication',
      },
    ],
    faq: [
      {
        q: 'Do I need prior English knowledge?',
        a: 'No, we welcome complete beginners. Our foundation module starts from basics and progresses gradually.',
      },
      {
        q: 'How is this different from other spoken English classes?',
        a: 'We specifically address challenges faced by Telugu, Tamil and Hindi speakers, with customized exercises to overcome your particular difficulties.',
      },
      {
        q: 'Will you correct my pronunciation?',
        a: 'Absolutely! Pronunciation correction is a key focus, with special drills for sounds that Indian speakers typically find challenging.',
      },
      {
        q: 'Can I join just the professional module?',
        a: 'Yes, if you already have intermediate English skills, you can directly join the professional module after a quick assessment.',
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ course: string }>;
}

export default async function CoachingPage({ params }: PageProps) {
  const { course } = await params;
  const courseKey = course.toLowerCase();
  const data = courseDetails[courseKey];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <h2 className="text-2xl font-semibold text-red-600">Course not found.</h2>
      </div>
    );
  }

  const courseTitleMap: Record<string, string> = {
    ielts: 'IELTS Coaching Program',
    spokenenglish: 'Spoken English Mastery (Specialized for Telugu, Tamil, Hindi Speakers)',
  };
  const title = courseTitleMap[courseKey] || courseKey;

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{title}</h1>
          <p className="text-xl text-blue-100 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Next batch: {data.nextBatchDate}
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Limited seats available
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <Clock className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Duration</h3>
            <p className="text-gray-600">{data.duration}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <Globe className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Mode</h3>
            <p className="text-gray-600">{data.mode}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <DollarSign className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Fee Structure</h3>
            <p className="text-gray-600">
              {data.feeStructure.regular}
              {data.feeStructure.weekend && ` | Weekend: ${data.feeStructure.weekend}`}
              {data.feeStructure.oneOnOne && ` | 1-on-1: ${data.feeStructure.oneOnOne}`}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
            <Users className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Prerequisites</h3>
            <p className="text-gray-600">{data.prerequisites}</p>
          </div>
        </div>

        {/* Course Overview */}
        <section className="mb-12 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 flex items-center">
            <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            Program Overview
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {data.overview.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 flex items-center">
            <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Why Choose Our Program?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition">
                <div className="text-blue-600 mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Join */}
        {data.whoShouldJoin && (
          <section className="mb-12 bg-orange-50 p-6 rounded-xl">
            <h2 className="text-3xl font-semibold text-orange-700 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
              </svg>
              Who Should Join This Program?
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {data.whoShouldJoin.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Course Modules */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 flex items-center">
            <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Course Curriculum
          </h2>
          <div className="space-y-6">
            {data.modules.map((module, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">{module.duration}</span>
                </div>
                <div className="p-6 bg-white">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Details */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          {/* Duration & Schedule */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Duration & Schedule
            </h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Total Duration:</strong> {data.duration}</span>
              </p>
              <p className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Class Schedule:</strong> {data.classSchedule}</span>
              </p>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34 .433-.582zM11 12.849v-1.698c.22.071.412.164.567 .267c.364.243.433.468.433.582c0 .114-.07 .34-.433 .582a2.305 2.305 0 01-.567 .267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48 .32 1.054 .545 1.676 .662v1.941c-.391 .127-.68 .317-.843 .504a1 .1 0 10-1.51 1.31c.562 .649 1.413 1.076 2.353 1.253V15a1 .1 0 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602 1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391 .127 .68 .317 .843 .504a1 1 0 101.511-1.31c-.563 .649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              Fee Structure
            </h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 0 0 0 8zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Regular Batch:</strong> {data.feeStructure.regular}</span>
              </p>
              {data.feeStructure.weekend && (
                <p className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Weekend Batch:</strong> {data.feeStructure.weekend}</span>
                </p>
              )}
              {data.feeStructure.oneOnOne && (
                <p className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>One-on-One Coaching:</strong> {data.feeStructure.oneOnOne}</span>
                </p>
              )}
              {data.feeStructure.installmentOptions && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Installment Options:</h4>
                  <ul className="space-y-2">
                    {data.feeStructure.installmentOptions.map((option, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-600">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Faculty */}
        {data.faculty && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v-1h-6.07zM6 11a5 5 0 015 5v1H1v-6z" />
              </svg>
              Meet Our Expert Faculty
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.faculty.map((teacher, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{teacher.name}</h3>
                  <p className="text-gray-600 mb-1"><strong>Qualification:</strong> {teacher.qualification}</p>
                  <p className="text-gray-600 mb-1"><strong>Experience:</strong> {teacher.experience}</p>
                  <p className="text-gray-600"><strong>Specialization:</strong> {teacher.specialization}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Success Stats */}
        {data.successStats && (
          <section className="mb-12 bg-green-50 p-6 rounded-xl">
            <h2 className="text-3xl font-semibold text-green-700 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 0 001.745-.723 3.066 0 013.976 0 3.066 0 001.745 .723 3.066 0 012.812 2.812c.051 .643 .304 1.254 .723 1.745 a3.066 0 010 3.976 a3.066 0 00-.723 1.745 3.066 0 01-2.812 2.812 3.066 0 00-1.745 .723 3.066 0 01-3.976 0 3.066 0 00-1.745-.723 3.066 0 01-2.812-2.812 3.066 0 00-.723-1.745 3.066 0 010-3.976 3.066 0 00.723-1.745 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293 a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Our Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.successStats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <p className="text-gray-800 font-medium">{stat}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 flex items-center">
            <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {data.faq.map(({ q, a }, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left flex justify-between items-center">
                  <span className="font-semibold text-blue-800">{q}</span>
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enrollment CTA */}
        <section id="enroll" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your English Skills?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">Join our next batch starting soon. Limited seats available!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
            >
              Book a Free Demo
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition font-semibold text-lg"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}