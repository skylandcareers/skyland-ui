'use client';

import React from 'react';
import Link from 'next/link';
import { FaBookOpen, FaClock,FaBullseye, FaMicrophone, FaLaptop, FaGlobe, FaSmile } from 'react-icons/fa';

const sections = [
  {
    title: 'Why Language Skills Matter',
    icon: <FaGlobe className="inline mr-2 text-blue-600" />,
    content:
      'Language skills open doors to global opportunities, improve communication, and enhance your personal and professional growth. Mastering a new language can boost your confidence and cultural understanding.',
  },
  {
    title: 'Set Realistic Goals',
    icon: <FaBullseye className="inline mr-2 text-blue-600" />,
    contentList: [
      'Define clear, achievable milestones for your language learning journey',
      'Break down complex skills into manageable chunks (speaking, listening, reading, writing)',
      'Celebrate small wins to stay motivated',
    ],
  },
  {
    title: 'Immerse Yourself Daily',
    icon: <FaClock className="inline mr-2 text-blue-600" />,
    contentList: [
      'Dedicate at least 15-30 minutes each day to language practice',
      'Listen to podcasts, watch videos, or read articles in your target language',
      'Practice speaking aloud or shadowing native speakers',
    ],
  },
  {
    title: 'Use Technology and Apps',
    icon: <FaLaptop className="inline mr-2 text-blue-600" />,
    contentList: [
      'Use language learning apps like Duolingo, Memrise, or Babbel',
      'Join language exchange platforms like Tandem or HelloTalk',
      'Leverage flashcard tools such as Anki for vocabulary retention',
    ],
  },
  {
    title: 'Practice Speaking and Listening',
    icon: <FaMicrophone className="inline mr-2 text-blue-600" />,
    contentList: [
      'Engage in conversations with native speakers or fellow learners',
      'Record yourself to improve pronunciation and fluency',
      'Watch movies or listen to music to get used to natural speech patterns',
    ],
  },
  {
    title: 'Read and Write Regularly',
    icon: <FaBookOpen className="inline mr-2 text-blue-600" />,
    contentList: [
      'Read books, news, blogs, or social media posts in the target language',
      'Write journal entries, essays, or chat messages to practice writing skills',
      'Use language correction tools to improve accuracy',
    ],
  },
  {
    title: 'Stay Positive and Have Fun',
    icon: <FaSmile className="inline mr-2 text-blue-600" />,
    content:
      'Language learning is a marathon, not a sprint. Stay patient, enjoy the process, and connect with other learners to keep your motivation high.',
  },
];

const LanguageTips = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 rounded-lg">
      <h1 className="text-5xl font-extrabold mb-12 text-gray-900 text-center tracking-tight drop-shadow-md">
        Language Learning Tips
      </h1>

      {sections.map(({ title, content, contentList, icon }) => (
        <section key={title} className="mb-14 last:mb-0 p-6 hover:bg-blue-50 rounded-lg transition-colors duration-300">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 border-b-2 border-blue-400 pb-2 tracking-wide">
            {icon} {title}
          </h2>
          {content && <p className="text-gray-800 leading-relaxed text-lg max-w-prose">{content}</p>}
          {contentList && (
            <ul className="mt-4 space-y-3 max-w-prose text-gray-700 text-lg list-disc list-inside">
              {contentList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>

      ))}

        {/* Your CTA section should be outside of the .map */}
        <section className="mb-14 p-8 bg-blue-600 rounded-lg shadow-lg text-center hover:bg-blue-700 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-white mb-4">Need More Help with Travel Insurance?</h2>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Our experts are here to assist you with any questions or personalized advice. Don’t hesitate to reach out!
        </p>
        <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-100 transition"
            aria-label="Contact us for more information"
        >
            Contact Us
        </Link>
        </section>
    </main>
  );
};

export default LanguageTips;
