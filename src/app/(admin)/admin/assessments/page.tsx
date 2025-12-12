'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaDownload, FaGlobe, FaGraduationCap, FaSpinner } from 'react-icons/fa';

interface Assessment {
    _id: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    education: string;
    jobCategory: string;
    experienceYears: number;
    hasJobOffer: boolean;
    passportMonths: number;
    desiredSalary: string;
    resumeUrl?: string;
    status: string;
    createdAt: string;
}

export default function AdminAssessmentsPage() {
    const [assessments, setAssessments] = useState<Assessment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAssessments();
    }, []);

    const fetchAssessments = async () => {
        try {
            // Reusing contacts API but filtering by source or a specific flag would be ideal.
            // For now, let's assume we filter on the client or add a query param '?type=assessment'.
            // I'll add `source_url=/free-assessment` filter or similar.
            // Let's assume /api/admin/contacts returns all and we filter here for now, 
            // or better, create /api/admin/assessments to encapsulate logic.
            const res = await axios.get('/api/admin/contacts');
            // Filter where source_url is '/free-assessment'
            const assessmentConfig = res.data.filter((c: any) => c.source_url === '/free-assessment');
            setAssessments(assessmentConfig);
        } catch (error) {
            console.error('Failed to fetch assessments', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-8 text-center">Loading assessments...</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Free Assessments</h1>

            <div className="grid gap-6">
                {assessments.map((item) => (
                    <div key={item._id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                <div className="text-sm text-gray-500 space-y-1">
                                    <p>{item.email} • {item.phone}</p>
                                    <p>From: {item.country}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${item.status === 'New' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                                    {item.status}
                                </span>
                                {item.resumeUrl && (
                                    <a
                                        href={item.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        <FaDownload /> Download CV
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100 text-sm">
                            <div>
                                <p className="text-gray-500 mb-1">Education</p>
                                <p className="font-semibold text-gray-900 flex items-center gap-2">
                                    <FaGraduationCap className="text-blue-400" /> {item.education || 'N/A'}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-500 mb-1">Profession</p>
                                <p className="font-semibold text-gray-900">{item.jobCategory || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 mb-1">Experience</p>
                                <p className="font-semibold text-gray-900">{item.experienceYears} Years</p>
                            </div>
                            <div>
                                <p className="text-gray-500 mb-1">Salary Expectation</p>
                                <p className="font-semibold text-gray-900">{item.desiredSalary || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {assessments.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500">No assessments submitted yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
