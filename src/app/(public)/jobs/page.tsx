'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
// import Navbar from '@/components/Header'; // Header is in layout
import JobsHero from '@/components/jobs/JobsHero';
import CountrySlider from '@/components/jobs/CountrySlider';
import JobFilters from '@/components/jobs/JobFilters';
import JobCard from '@/components/jobs/JobCard';

interface Job {
    _id: string;
    title: string;
    country: string;
    location: string;
    type: string;
    salaryRange: string;
    description: string;
    requirements: string[];
    createdAt: string;
}

export default function JobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters
    const [search, setSearch] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await axios.get('/api/jobs');
            setJobs(res.data);
        } catch (error) {
            console.error('Failed to fetch jobs', error);
        } finally {
            setLoading(false);
        }
    };

    // Derived state for filtered jobs
    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.description.toLowerCase().includes(search.toLowerCase());
        const matchesCountry = selectedCountry ? job.country === selectedCountry : true;

        return matchesSearch && matchesCountry;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <JobsHero />

            {/* Country Slider Section */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <CountrySlider onSelectCountry={setSelectedCountry} />
                </div>
            </section>

            {/* Main Content Area */}
            <div id="jobs-section" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="w-full lg:w-1/4">
                        <JobFilters
                            search={search}
                            onSearchChange={setSearch}
                            selectedCountry={selectedCountry}
                            onCountryChange={setSelectedCountry}
                            departments={[]} // TODO: Extract dynamic departments if needed
                        />
                    </aside>

                    {/* Jobs Grid */}
                    <main className="w-full lg:w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Open Positions <span className="text-gray-400 text-lg font-normal">({filteredJobs.length})</span>
                            </h2>
                            {selectedCountry && (
                                <button
                                    onClick={() => setSelectedCountry('')}
                                    className="text-sm text-red-500 hover:underline"
                                >
                                    Clear filters
                                </button>
                            )}
                        </div>

                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredJobs.map(job => (
                                    <JobCard key={job._id} job={job} />
                                ))}
                                {filteredJobs.length === 0 && (
                                    <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-gray-200">
                                        <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                                        <button
                                            onClick={() => { setSearch(''); setSelectedCountry(''); }}
                                            className="mt-2 text-blue-600 font-medium hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
