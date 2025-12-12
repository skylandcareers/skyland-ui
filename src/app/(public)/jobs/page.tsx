'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaCheckCircle } from 'react-icons/fa';

interface Job {
    _id: string;
    title: string;
    location: string;
    type: string;
    salaryRange: string;
    description: string;
    requirements: string[];
    createdAt: string;
}

interface User {
    name: string;
    phone: string;
    email: string;
}

export default function JobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [user, setUser] = useState<User | null>(null);

    // Application Form
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetchJobs();
        fetchUser();
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

    const fetchUser = async () => {
        try {
            const res = await axios.get('/api/auth/me');
            if (res.data && !res.data.error) {
                setUser(res.data);
                // Pre-fill form if user exists
                setFormData(prev => ({
                    ...prev,
                    name: res.data.name || '',
                    phone: res.data.phone || '',
                    email: res.data.email || ''
                }));
            }
        } catch {
            // Not logged in, ignore
        }
    };

    const openApplyModal = (job: Job) => {
        setSelectedJob(job);
        setSuccess(false);
        // If user logged in, form is already pre-filled from useEffect or we can re-sync
        if (user) {
            setFormData({
                name: user.name,
                phone: user.phone,
                email: user.email
            });
        } else {
            setFormData({
                name: '',
                phone: '',
                email: ''
            });
        }
    };

    const handleApply = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedJob) return;

        setSubmitting(true);
        try {
            await axios.post('/api/jobs/apply', {
                jobId: selectedJob._id,
                ...formData
            });
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setSelectedJob(null);
            }, 3000);
        } catch (error) {
            console.error('Application failed', error);
            alert('Failed to submit application. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Current Openings
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Join our team and help build the future of immigration services.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-12">Loading jobs...</div>
                ) : (
                    <div className="grid gap-6">
                        {jobs.map((job) => (
                            <div key={job._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                                <div className="p-6 sm:p-8 flex flex-col md:flex-row justify-between gap-6">
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                                                <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.location}</span>
                                                <span className="flex items-center gap-1"><FaBriefcase /> {job.type}</span>
                                                {job.salaryRange && <span className="flex items-center gap-1"><FaMoneyBillWave /> {job.salaryRange}</span>}
                                                <span className="flex items-center gap-1"><FaClock /> Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 line-clamp-2 md:line-clamp-none">
                                            {job.description}
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <button
                                            onClick={() => openApplyModal(job)}
                                            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {jobs.length === 0 && (
                            <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-medium text-gray-900">No open positions currently</h3>
                                <p className="text-gray-500 mt-2">Please check back later.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Application Modal */}
            {selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fadeIn">
                        {success ? (
                            <div className="text-center py-8">
                                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <FaCheckCircle className="text-green-600 text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Application Sent!</h3>
                                <p className="text-gray-600 mt-2">We have received your application for {selectedJob.title}.</p>
                            </div>
                        ) : (
                            <>
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">Apply for {selectedJob.title}</h2>
                                    <p className="text-sm text-gray-500 mt-1">Please confirm your details below.</p>
                                </div>
                                <form onSubmit={handleApply} className="space-y-4">
                                    {user && (
                                        <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-700 mb-4">
                                            Logged in as <strong>{user.name}</strong>. details pre-filled.
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                            placeholder="Your Phone"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div className="flex gap-3 mt-6">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedJob(null)}
                                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className={`flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {submitting ? 'Sending...' : 'Submit Application'}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
