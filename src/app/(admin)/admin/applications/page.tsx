'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaDownload, FaCheckCircle, FaTimesCircle, FaClock, FaSpinner } from 'react-icons/fa';

interface JobApplication {
    _id: string;
    jobId: { title: string; location: string };
    userId?: { name: string; email: string };
    name: string;
    phone: string;
    email?: string;
    resumeUrl?: string;
    status: 'Pending' | 'Reviewed' | 'Shortlisted' | 'Rejected' | 'Hired';
    createdAt: string;
}

export default function AdminApplicationsPage() {
    const [applications, setApplications] = useState<JobApplication[]>([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState<string | null>(null);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            // Need to create this API endpoint or use a filtered generic contact/application one.
            // Assuming we will create /api/admin/applications or reuse existing.
            // Let's create a dedicated one /api/admin/applications to be clean.
            // For now, I'll mock the fetch or assume the endpoint exists.
            // Wait, I haven't created the API for listing all applications for admin yet.
            // I created one for users (/api/user/applications).
            // Let's assume I will create /api/admin/applications next.
            const res = await axios.get('/api/admin/applications');
            setApplications(res.data);
        } catch (error) {
            console.error('Failed to fetch applications', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        setUpdating(id);
        try {
            await axios.put(`/api/admin/applications/${id}`, { status: newStatus });
            setApplications(apps => apps.map(app => app._id === id ? { ...app, status: newStatus as any } : app));
        } catch (error) {
            alert('Failed to update status');
        } finally {
            setUpdating(null);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Reviewed': return 'bg-blue-100 text-blue-800';
            case 'Shortlisted': return 'bg-purple-100 text-purple-800';
            case 'Hired': return 'bg-green-100 text-green-800';
            case 'Rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (loading) return <div className="p-8 text-center">Loading applications...</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Job Applications</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Applicant</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Position</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Resume</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {applications.map((app) => (
                                <tr key={app._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{app.name}</p>
                                        <p className="text-sm text-gray-500">{app.email}</p>
                                        <p className="text-sm text-gray-500">{app.phone}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-gray-900 font-medium">{app.jobId?.title || 'Unknown Job'}</p>
                                        <p className="text-xs text-gray-500">{app.jobId?.location}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(app.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        {app.resumeUrl ? (
                                            <a
                                                href={app.resumeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                            >
                                                <FaDownload /> View CV
                                            </a>
                                        ) : (
                                            <span className="text-gray-400 text-sm">No Resume</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {updating === app._id ? (
                                                <FaSpinner className="animate-spin text-gray-400" />
                                            ) : (
                                                <select
                                                    value={app.status}
                                                    onChange={(e) => updateStatus(app._id, e.target.value)}
                                                    className="border border-gray-300 rounded text-sm p-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Reviewed">Reviewed</option>
                                                    <option value="Shortlisted">Shortlisted</option>
                                                    <option value="Hired">Hired</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {applications.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                        No applications found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
