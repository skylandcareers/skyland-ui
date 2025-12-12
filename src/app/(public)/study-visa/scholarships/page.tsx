'use client';

import React, { useState } from 'react';

interface Scholarship {
  name: string;
  amount: string;
  deadline: string;
}

interface College {
  college: string;
  scholarships: Scholarship[];
}

interface ScholarshipsData {
  [country: string]: College[];
}

const scholarshipsData: ScholarshipsData = {
  USA: [
    {
      college: 'Harvard University',
      scholarships: [
        { name: 'Harvard Merit Scholarship', amount: '$20,000', deadline: '2025-07-01' },
        { name: 'Harvard Need-Based Aid', amount: 'Varies', deadline: '2025-06-15' },
      ],
    },
    {
      college: 'Stanford University',
      scholarships: [
        { name: 'Stanford Graduate Fellowship', amount: '$25,000', deadline: '2025-05-30' },
      ],
    },
  ],
  Canada: [
    {
      college: 'University of Toronto',
      scholarships: [
        { name: 'UofT International Scholarship', amount: '$15,000', deadline: '2025-08-15' },
      ],
    },
  ],
  UK: [
    {
      college: 'University of Oxford',
      scholarships: [
        { name: 'Oxford Rhodes Scholarship', amount: 'Full Tuition', deadline: '2025-10-01' },
      ],
    },
  ],
};

const ScholarshipsByCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Scholarships by Country / College</h1>
      
      {/* Countries List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Select a Country:</h2>
        <div className="flex flex-wrap gap-4">
          {Object.keys(scholarshipsData).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country === selectedCountry ? null : country)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCountry === country
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-200 text-gray-800 hover:bg-yellow-300'
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      {/* Colleges and Scholarships */}
      {selectedCountry && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Scholarships in {selectedCountry}
          </h2>
          {scholarshipsData[selectedCountry].map(({ college, scholarships }) => (
            <div key={college} className="mb-8 border border-gray-300 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{college}</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-yellow-400 text-gray-900">
                    <th className="py-2 px-4 border border-gray-300">Scholarship Name</th>
                    <th className="py-2 px-4 border border-gray-300">Amount</th>
                    <th className="py-2 px-4 border border-gray-300">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {scholarships.map(({ name, amount, deadline }) => (
                    <tr key={name} className="odd:bg-gray-100">
                      <td className="py-2 px-4 border border-gray-300">{name}</td>
                      <td className="py-2 px-4 border border-gray-300">{amount}</td>
                      <td className="py-2 px-4 border border-gray-300">{deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScholarshipsByCountry;
