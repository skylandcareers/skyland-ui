'use client';

import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaClipboardList, FaClock, FaLaptopCode, FaMedal, FaUserTie, FaIndustry, FaHeart, FaVideo, FaChartBar, FaFolderOpen } from 'react-icons/fa';

const sections = [
  {
    title: 'What is Skill Assessment?',
    icon: <FaClipboardList className="inline mr-2 text-blue-600" />,
    content:
      'Skill assessments are tests or evaluations designed to measure your abilities and knowledge in a particular area or profession. They help employers verify your qualifications and help you identify areas for improvement. These assessments can range from technical coding challenges to behavioral evaluations, depending on the job requirements.',
  },
  {
    title: 'Benefits of Skill Assessments for Job Seekers',
    icon: <FaUserTie className="inline mr-2 text-blue-600" />,
    contentList: [
      'Highlight your strengths to potential employers',
      'Identify areas for personal and professional growth',
      'Gain confidence through objective evaluation',
      'Increase your marketability with validated skills',
      'Tailor your learning and career path more effectively',
    ],
  },
  {
    title: 'Common Mistakes to Avoid During Assessments',
    icon: <FaClipboardList className="inline mr-2 text-red-600" />,
    contentList: [
      'Rushing through questions without understanding them',
      'Not managing time properly and leaving questions unanswered',
      'Ignoring instructions or guidelines',
      'Overcomplicating simple problems',
      'Getting discouraged by challenging questions',
      'Failing to review answers when time permits',
    ],
  },
  {
    title: 'Using Assessment Feedback Effectively',
    icon: <FaChartBar className="inline mr-2 text-green-600" />,
    content:
      'Use feedback from assessments as a valuable resource. Identify your weaknesses and create a targeted learning plan. Share your progress with mentors or peers to gain additional insights and stay motivated.',
  },
  {
    title: 'How Employers Use Skill Assessments',
    icon: <FaMedal className="inline mr-2 text-yellow-600" />,
    contentList: [
      'Screen large pools of candidates efficiently',
      'Verify the authenticity of claimed skills',
      'Predict job performance and cultural fit',
      'Support unbiased, data-driven hiring decisions',
      'Identify candidates with potential for growth',
    ],
  },
  {
    title: 'Building Confidence Before Your Assessment',
    icon: <FaHeart className="inline mr-2 text-pink-600" />,
    contentList: [
      'Practice regularly to familiarize yourself with test formats',
      'Visualize success and positive outcomes',
      'Keep a healthy routine including sleep and exercise',
      'Use affirmations to boost self-belief',
      'Talk to peers or mentors for encouragement',
    ],
  },  
{
    title: 'Industry-Specific Assessments',
    icon: <FaIndustry className="inline mr-2 text-blue-600" />,
    contentList: [
      'Healthcare: Clinical knowledge and patient care scenarios',
      'Finance: Accounting principles and financial modeling tests',
      'Education: Teaching demonstrations and pedagogy assessments',
      'Design: Portfolio reviews and creative challenges',
      'Sales: Role-playing exercises and product knowledge tests',
      'Engineering: CAD tests and structural analysis problems',
      'Customer Service: Call simulations and conflict resolution'
    ],
  },
  {
    title: 'Overcoming Test Anxiety',
    icon: <FaHeart className="inline mr-2 text-blue-600" />,
    contentList: [
      'Practice mindfulness and breathing exercises',
      'Simulate test conditions during practice',
      'Focus on the process rather than perfection',
      'Reframe nervousness as excitement and energy',
      'Avoid cramming right before the assessment',
      'Prepare thoroughly to build confidence',
      'Remember it\'s okay not to know every answer'
    ],
  },
  {
    title: 'Remote Assessment Tips',
    icon: <FaVideo className="inline mr-2 text-blue-600" />,
    contentList: [
      'Test your technology setup beforehand',
      'Ensure good lighting and professional background',
      'Close unnecessary applications on your computer',
      'Have pen/paper ready for notes (if allowed)',
      'Dress professionally as you would for in-person',
      'Eliminate potential distractions and interruptions',
      'Check your internet connection stability'
    ],
  },
  {
    title: 'Understanding Your Results',
    icon: <FaChartBar className="inline mr-2 text-blue-600" />,
    content: 'Assessment results typically fall into three categories: percentile rankings (how you compare to others), raw scores (your actual performance), and competency levels (beginner, intermediate, advanced). Learn to interpret these metrics to identify your strengths and areas needing improvement. Many platforms provide detailed breakdowns by skill area - use these to guide your learning path.',
  },
  {
    title: 'Building an Assessment Portfolio',
    icon: <FaFolderOpen className="inline mr-2 text-blue-600" />,
    contentList: [
      'Save copies of your assessment results',
      'Document particularly strong performances',
      'Track your progress over time',
      'Include assessment badges/certifications in your LinkedIn',
      'Create case studies from project-based assessments',
      'Note feedback from evaluators',
      'Use results to guide professional development goals'
    ],
  },
  {
    title: 'Why Skill Assessments Matter',
    icon: <FaMedal className="inline mr-2 text-blue-600" />,
    contentList: [
      'Provide objective measurement of your capabilities',
      'Help employers make data-driven hiring decisions',
      'Identify skill gaps for targeted learning',
      'Increase your chances of landing better job opportunities',
      'Benchmark your skills against industry standards',
      'Showcase your expertise beyond what\'s on your resume'
    ],
  },
  {
    title: 'Common Types of Skill Assessments',
    icon: <FaLaptopCode className="inline mr-2 text-blue-600" />,
    contentList: [
      'Technical tests (coding, software proficiency)',
      'Aptitude tests (logical reasoning, problem solving)',
      'Language proficiency tests',
      'Soft skills evaluation (communication, teamwork)',
      'Portfolio or project-based assessments',
      'Personality and behavioral assessments',
      'Industry-specific knowledge tests',
      'Cognitive ability assessments'
    ],
  },
  {
    title: 'How to Prepare for Skill Assessments',
    icon: <FaClock className="inline mr-2 text-blue-600" />,
    contentList: [
      'Understand the skills and knowledge areas tested',
      'Practice sample tests or previous assessment questions',
      'Brush up on relevant technical skills or software',
      'Improve your time management skills for timed tests',
      'Get a good night\'s sleep and stay calm during the test',
      'Review fundamental concepts in your field',
      'Take mock assessments to simulate real conditions',
      'Research the company\'s assessment style and focus areas'
    ],
  },
  {
    title: 'Popular Skill Assessment Tools',
    icon: <FaLaptopCode className="inline mr-2 text-blue-600" />,
    contentList: [
      'HackerRank – coding and technical assessments',
      'Codility – programming challenges',
      'LinkedIn Skill Assessments – various professional skills',
      'TestDome – various professional skills',
      'Kahoot! and Quizlet – interactive learning and quizzes',
      'LeetCode – coding interview preparation',
      'Pramp – live interview practice',
      'Codewars – coding challenges in various languages'
    ],
  },
  {
    title: 'During the Assessment',
    icon: <FaUserTie className="inline mr-2 text-blue-600" />,
    contentList: [
      'Read all instructions carefully before starting',
      'Manage your time wisely across questions',
      'Start with questions you\'re most confident about',
      'For coding tests: write clean, readable code with comments',
      'Double-check your answers if time permits',
      'Stay calm if you encounter difficult questions',
      'Use the full allotted time - don\'t rush unnecessarily',
      'For video assessments: maintain good posture and eye contact'
    ],
  },
  {
    title: 'After the Assessment',
    content:
      'Regardless of the outcome, view every assessment as a learning opportunity. Request feedback when possible to understand areas for improvement. Analyze your performance to identify knowledge gaps, and create a plan to strengthen those areas. Remember that consistent practice and targeted learning will improve your results over time.',
  },
];

const SkillAssessment = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 rounded-lg">
      <h1 className="text-5xl font-extrabold mb-12 text-gray-900 text-center tracking-tight drop-shadow-md">
        Skill Assessment Guide
      </h1>

      <div className="mb-12 p-6 bg-blue-100 rounded-lg border-l-4 border-blue-500">
        <p className="text-lg text-gray-800 italic">
        &quot;In today&apos;s competitive job market, skill assessments have become a crucial step in the hiring process. 
          This guide will help you understand, prepare for, and excel in various types of evaluations.&quot;
        </p>
      </div>

      {sections.map(({ title, content, contentList, icon }) => (
        <section key={title} className="mb-14 last:mb-0 p-6 hover:bg-blue-50 rounded-lg transition-colors duration-300">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 border-b-2 border-blue-400 pb-2 tracking-wide">
            {icon || <FaClipboardList className="inline mr-2" />}{title}
          </h2>
          {content && (
            <p className="text-gray-800 leading-relaxed text-lg max-w-prose">
              {content}
            </p>
          )}
          {contentList && (
            <ul className="mt-4 space-y-3 max-w-prose">
              {contentList.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300"
                >
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <div className="mt-16 p-8 bg-blue-100 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Pro Tips for Success</h3>
        <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-blue-700 mb-2">For Technical Tests</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Practice algorithmic thinking daily</li>
              <li>• Master time and space complexity analysis</li>
              <li>• Learn to explain your code clearly</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-blue-700 mb-2">For Behavioral Tests</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Use the STAR method for situational questions</li>
              <li>• Prepare examples from your experience</li>
              <li>• Be authentic but professional</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-600 italic">
        <p className="text-lg">
          Remember: Continuous learning and practice are key to excelling in any skill assessment! 
          Track your progress and celebrate small improvements along the way.
        </p>
      </div>

        <section className="max-w-4xl mx-auto px-6 mt-16 py-12 bg-blue-600 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
            Need More Guidance?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">
            Our team is here to help you navigate your skill assessment and career path. Reach out for personalized advice and support.
            </p>
            <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-100 transition"
            aria-label="Contact us for more information"
            >
            Contact Us for More Information
            </Link>
        </section>
    </main>
  );
};

export default SkillAssessment;