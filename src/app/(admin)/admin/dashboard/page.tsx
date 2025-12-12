'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import RichDashboard from '@/components/admin/RichDashboard';
import { FaCalendarAlt } from 'react-icons/fa';

export default function AdminDashboard() {
    const [period, setPeriod] = useState('month');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`/api/admin/stats?period=${period}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [period]);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                        <p className="text-gray-500 mt-1">Holistic view of business performance.</p>
                    </div>

                    <div className="flex items-center gap-2 mt-4 md:mt-0 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                        <FaCalendarAlt className="text-gray-400" />
                        <select
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="bg-transparent text-gray-700 text-sm font-medium outline-none cursor-pointer"
                        >
                            <option value="day">Today</option>
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className="p-12 text-center text-gray-500 animate-pulse">Updating metrics...</div>
                ) : (
                    <RichDashboard data={data} />
                )}
            </div>
        </div>
    );
}
