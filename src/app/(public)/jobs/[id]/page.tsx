'use client';

import { useState, useEffect, use } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock, FaCheckCircle, FaArrowLeft, FaShare } from 'react-icons/fa';
import FileUpload from '@/components/FileUpload';

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

interface User {
    name: string;
    phone: string;
    email: string;
}

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    // Ungroup params for Next.js 15+ async params
    const resolvedParams = use(params);
    const { id } = resolvedParams;

    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    // Application Form State
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<{ name: string; phone: string; email: string; resumeUrl?: string }>({ name: '', phone: '', email: '', resumeUrl: '' });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (id) {
            fetchJob(id);
            fetchUser();
        }
    }, [id]);

    const fetchJob = async (jobId: string) => {
        try {
            // We can reuse the admin API for fetching single job by ID if public access is allowed, 
            // or filter from the list. Ideally, we should have a public single job endpoint.
            // For now, let's fetch all and find (temporary optimization) or create a new endpoint.
            // BETTER: Let's assume we can fetch all or create a specific endpoint. 
            // Reuse the list endpoint for now to avoid creating new backend if not needed, 
            // but a specific endpoint /api/jobs/[id] is better. 
            // Let's rely on filtering from the main list for simplicity if scale is small, 
            // OR create the endpoint. I'll stick to fetching full list and finding for now to save backend steps,
            // but for production, a specific endpoint is cleaner.
            // Wait, I already made /api/admin/jobs/[id], but that might be protected.
            // The public /api/jobs returns all. Let's use that one.
            const res = await axios.get('/api/jobs');
            const found = res.data.find((j: Job) => j._id === jobId);
            if (found) setJob(found);
        } catch (error) {
            console.error('Failed to fetch job', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchUser = async () => {
        try {
            const res = await axios.get('/api/auth/me');
            if (res.data && !res.data.error) {
                setUser(res.data);
                setFormData(prev => ({
                    ...prev,
                    name: res.data.name || '',
                    phone: res.data.phone || '',
                    email: res.data.email || ''
                }));
            }
        } catch { /* Not logged in */ }
    };

    const handleApply = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await axios.post('/api/jobs/apply', {
                jobId: id,
                ...formData
            });
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setShowModal(false);
            }, 3000);
        } catch (error) {
            alert('Application failed. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!job) return <div className="min-h-screen flex items-center justify-center">Job not found</div>;

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            {/* Header / Hero */}
            <div className="bg-blue-900 text-white py-12 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/skyland-immigrate.jpg')] bg-cover bg-center" />
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <Link href="/jobs" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors">
                        <FaArrowLeft /> Back to Jobs
                    </Link>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        <div>
                            <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-700">
                                {job.country}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-2">{job.title}</h1>
                            <div className="flex flex-wrap gap-4 text-blue-100">
                                <span className="flex items-center gap-2"><FaMapMarkerAlt /> {job.location}</span>
                                <span className="flex items-center gap-2"><FaBriefcase /> {job.type}</span>
                                <span className="flex items-center gap-2"><FaClock /> Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowModal(true)}
                                className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-8 flex flex-col md:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Job Description</h2>
                        <div
                            className="prose prose-blue max-w-none text-gray-600"
                            dangerouslySetInnerHTML={{ __html: job.description }}
                        />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full md:w-80 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Job Overview</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FaMoneyBillWave /></div>
                                <div>
                                    <p className="text-gray-500">Salary</p>
                                    <p className="font-semibold text-gray-900">{job.salaryRange || 'Not disclosed'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FaMapMarkerAlt /></div>
                                <div>
                                    <p className="text-gray-500">Location</p>
                                    <p className="font-semibold text-gray-900">{job.location}, {job.country}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FaBriefcase /></div>
                                <div>
                                    <p className="text-gray-500">Job Type</p>
                                    <p className="font-semibold text-gray-900">{job.type}</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowModal(true)}
                            className="w-full mt-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Apply for this Job
                        </button>
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fadeIn">
                        {success ? (
                            <div className="text-center py-8">
                                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <FaCheckCircle className="text-green-600 text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Application Sent!</h3>
                                <p className="text-gray-600 mt-2">We have received your application for {job.title}.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Apply Now</h2>
                                <p className="text-sm text-gray-500 mb-6">Applying for {job.title} in {job.location}</p>

                                <form onSubmit={handleApply} className="space-y-4">
                                    {user && (
                                        <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-700 mb-4 flex items-center gap-2">
                                            <FaCheckCircle /> Logged in as <strong>{user.name}</strong>
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
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        />
                                    </div>

                                    <div className="mt-2">
                                        <FileUpload
                                            label="Upload CV / Resume (Optional)"
                                            onUploadComplete={(url) => setFormData(prev => ({ ...prev, resumeUrl: url }))}
                                        />
                                    </div>

                                    <div className="flex gap-3 mt-6">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className={`flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold shadow-md ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {submitting ? 'Sending...' : 'Submit'}
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
