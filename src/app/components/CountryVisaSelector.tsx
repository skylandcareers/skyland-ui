'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaChevronRight, FaCheck } from 'react-icons/fa';

interface VisaOption {
  id: string;
  label: string;
  description?: string;
  popularity?: 'low' | 'medium' | 'high';
}

interface CountryOption {
  code: string;
  name: string;
  flag: string;
  visas: VisaOption[];
}

const countries: CountryOption[] = [
  {
    code: 'ca',
    name: 'Canada',
    flag: '🇨🇦',
    visas: [
      { 
        id: 'student', 
        label: 'Student Visa', 
        description: 'Study at Canadian institutions', 
        popularity: 'high' 
      },
      { 
        id: 'work', 
        label: 'Work Visa', 
        description: 'Temporary employment opportunities',
        popularity: 'high'
      },
      { 
        id: 'visitor', 
        label: 'Visitor Visa', 
        description: 'Tourism or family visits',
        popularity: 'medium'
      },
      { 
        id: 'pr', 
        label: 'Permanent Residency', 
        description: 'Express Entry and PNP programs',
        popularity: 'high'
      },
    ],
  },
  {
    code: 'au',
    name: 'Australia',
    flag: '🇦🇺',
    visas: [
      { 
        id: 'student', 
        label: 'Student Visa', 
        description: 'Study at Australian universities',
        popularity: 'high'
      },
      { 
        id: 'work', 
        label: 'Work Visa', 
        description: 'Temporary skill shortage visas',
        popularity: 'medium'
      },
      { 
        id: 'visitor', 
        label: 'Visitor Visa', 
        description: 'Tourism or business visits',
        popularity: 'medium'
      },
      { 
        id: 'skilled', 
        label: 'Skilled Migration', 
        description: 'Permanent residency for skilled workers',
        popularity: 'high'
      },
    ],
  },
  {
    code: 'us',
    name: 'United States',
    flag: '🇺🇸',
    visas: [
      { 
        id: 'h1b', 
        label: 'H-1B Work Visa', 
        description: 'Specialty occupation workers',
        popularity: 'high'
      },
      { 
        id: 'f1', 
        label: 'F-1 Student Visa', 
        description: 'Academic studies in the US',
        popularity: 'high'
      },
      { 
        id: 'visitor', 
        label: 'Visitor Visa', 
        description: 'B-1/B-2 visas for tourism/business',
        popularity: 'medium'
      },
    ],
  },
  {
    code: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    visas: [
      { 
        id: 'student', 
        label: 'Student Visa', 
        description: 'Study at UK institutions',
        popularity: 'high'
      },
      { 
        id: 'work', 
        label: 'Skilled Worker Visa', 
        description: 'Sponsored employment',
        popularity: 'medium'
      },
      { 
        id: 'visitor', 
        label: 'Visitor Visa', 
        description: 'Tourism or business visits',
        popularity: 'medium'
      },
    ],
  },
];

interface Props {
  onSelectionChange?: (countryCode: string | null, visaId: string | null) => void;
}

const CountryVisaSelector: React.FC<Props> = ({ onSelectionChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
  const [selectedVisa, setSelectedVisa] = useState<VisaOption | null>(null);
  const [activeStep, setActiveStep] = useState<'country' | 'visa'>('country');

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountrySelect = (country: CountryOption) => {
    setSelectedCountry(country);
    setSelectedVisa(null);
    setActiveStep('visa');
    if (onSelectionChange) onSelectionChange(country.code, null);
  };

  const handleVisaSelect = (visa: VisaOption) => {
    setSelectedVisa(visa);
    if (onSelectionChange && selectedCountry) onSelectionChange(selectedCountry.code, visa.id);
  };

  const handleBackToCountries = () => {
    setSelectedVisa(null);
    setActiveStep('country');
  };

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 text-white">
        <h2 className="text-2xl font-bold">Visa Program Selector</h2>
        <p className="text-yellow-100">Find your ideal immigration pathway</p>
      </div>

      {/* Steps Indicator */}
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-4 font-medium ${activeStep === 'country' ? 'text-yellow-600 border-b-2 border-yellow-500' : 'text-gray-500'}`}
          onClick={() => setActiveStep('country')}
        >
          <div className="flex items-center justify-center">
            <span className={`flex items-center justify-center w-6 h-6 rounded-full mr-2 ${activeStep === 'country' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </span>
            Select Country
          </div>
        </button>
        <button
          className={`flex-1 py-4 font-medium ${activeStep === 'visa' ? 'text-yellow-600 border-b-2 border-yellow-500' : 'text-gray-500'} ${!selectedCountry ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => selectedCountry && setActiveStep('visa')}
          disabled={!selectedCountry}
        >
          <div className="flex items-center justify-center">
            <span className={`flex items-center justify-center w-6 h-6 rounded-full mr-2 ${activeStep === 'visa' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </span>
            Select Visa
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeStep === 'country' ? (
            <motion.div
              key="country-step"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredCountries.map((country) => (
                  <motion.div
                    key={country.code}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => handleCountrySelect(country)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${selectedCountry?.code === country.code ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:border-yellow-300'}`}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{country.flag}</span>
                        <div>
                          <h3 className="font-semibold text-gray-800">{country.name}</h3>
                          <p className="text-sm text-gray-500">{country.visas.length} visa options</p>
                        </div>
                        <FaChevronRight className="ml-auto text-gray-400" />
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="visa-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleBackToCountries}
                className="flex items-center text-yellow-600 mb-6 hover:text-yellow-700 transition-colors"
              >
                <FaChevronRight className="transform rotate-180 mr-2" />
                Back to countries
              </button>

              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">{selectedCountry?.flag}</span>
                {selectedCountry?.name} Visa Options
              </h3>

              <div className="space-y-4">
                {selectedCountry?.visas.map((visa) => (
                  <motion.div
                    key={visa.id}
                    whileHover={{ scale: 1.01 }}
                  >
                    <button
                      onClick={() => handleVisaSelect(visa)}
                      className={`w-full text-left p-5 rounded-lg border transition-all ${selectedVisa?.id === visa.id ? 'border-yellow-500 bg-yellow-50 ring-2 ring-yellow-200' : 'border-gray-200 hover:border-yellow-300'}`}
                    >
                      <div className="flex items-start">
                        <div className={`flex items-center justify-center w-6 h-6 rounded-full mr-4 mt-1 ${selectedVisa?.id === visa.id ? 'bg-yellow-500 text-white' : 'border border-gray-300'}`}>
                          {selectedVisa?.id === visa.id && <FaCheck className="text-xs" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-semibold text-gray-800">{visa.label}</h4>
                            {visa.popularity && (
                              <span className={`text-xs px-2 py-1 rounded-full ${getPopularityColor(visa.popularity)}`}>
                                {visa.popularity === 'high' ? 'Popular' : visa.popularity === 'medium' ? 'Common' : 'Less Common'}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1 text-left">{visa.description}</p>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        {selectedVisa && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <button
              onClick={() => {
                alert(`You selected: ${selectedCountry?.name} - ${selectedVisa.label}`);
              }}
              className="w-full py-3 px-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:from-yellow-600 hover:to-yellow-700 transition-all"
            >
              Check Eligibility for {selectedVisa.label}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CountryVisaSelector;