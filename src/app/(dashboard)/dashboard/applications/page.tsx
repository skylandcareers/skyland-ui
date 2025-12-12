'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBriefcase, FaCalendar, FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';

interface Application {
    _id: string;
    jobId: {
        _id: string;
        title: string;
        location: string;
        type: string;
    };
    status: string;
    createdAt: string;
}

export default function ApplicationsPage() {
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const res = await axios.get('/api/user/applications');
            setApplications(res.data);
        } catch (error) {
            console.error('Failed to fetch applications', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Hired': return 'bg-green-100 text-green-700';
            case 'Shortlisted': return 'bg-blue-100 text-blue-700';
            case 'Reviewed': return 'bg-yellow-100 text-yellow-700';
            case 'Rejected': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <FaBriefcase className="text-blue-600" /> My Applications
            </h1>

            {loading ? (
                <div className="text-center py-12 text-gray-500">Loading your applications...</div>
            ) : (
                <div className="space-y-4">
                    {applications.map((app) => (
                        <div key={app._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{app.jobId?.title || 'Job Unavailable'}</h3>
                                <p className="text-gray-500">{app.jobId?.location} • {app.jobId?.type}</p>
                                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                                    <FaCalendar /> Applied on {new Date(app.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                                    {app.status}
                                </span>
                            </div>
                        </div>
                    ))}
                    {applications.length === 0 && (
                        <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">No applications yet</h3>
                            <p className="text-gray-500 mt-2">Check out our <a href="/jobs" className="text-blue-600 hover:underline">open positions</a>.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
