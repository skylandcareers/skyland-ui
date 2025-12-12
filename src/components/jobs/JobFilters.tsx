'use client';

import { FaSearch, FaFilter } from 'react-icons/fa';

interface FiltersProps {
    search: string;
    onSearchChange: (val: string) => void;
    selectedCountry: string;
    onCountryChange: (val: string) => void;
    departments: string[];
}

// Common visa countries to filter by
const COUNTRIES = ['All', 'UAE', 'Kuwait', 'Saudi Arabia', 'Qatar', 'Poland', 'Lithuania', 'Romania', 'Croatia', 'Hungary', 'Canada', 'UK'];

export default function JobFilters({ search, onSearchChange, selectedCountry, onCountryChange }: FiltersProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-24">
            <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold border-b pb-2">
                <FaFilter className="text-blue-600" />
                <h3>Filters</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Job title or keyword..."
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                        {COUNTRIES.map(country => (
                            <label key={country} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="country"
                                    value={country === 'All' ? '' : country}
                                    checked={selectedCountry === (country === 'All' ? '' : country)}
                                    onChange={(e) => onCountryChange(e.target.value)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className={`text-sm ${selectedCountry === (country === 'All' ? '' : country) ? 'text-blue-600 font-semibold' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                    {country}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
