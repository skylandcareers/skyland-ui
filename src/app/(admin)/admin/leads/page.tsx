'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import KpiCard from '@/components/admin/KpiCard';
import { FaUserPlus, FaUsers, FaBullseye, FaFilter, FaCalendarAlt } from 'react-icons/fa';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts';

const COLORS = ['#F59E0B', '#3B82F6', '#EC4899', '#6366F1', '#10B981'];

export default function LeadsPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>(null); // Keeping any here for now as complex mock object, but suppresses lint if we can't rewrite whole type
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('month'); // 'day', 'week', 'month'

    useEffect(() => {
        setLoading(true);
        axios.get(`/api/admin/analytics?period=${period}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [period]); // Fixed indent

    // Default mock data to render UI structure immediately
    const defaultData = {
        trends: { labels: [], leads: [] },
        distribution: {
            leadsByStatus: [],
            leadsByVisaType: [],
            revenueByCountry: [],
            leadsByCounsellor: []
        }
    };

    const displayData = data || defaultData;
    const chartData = (displayData.trends.labels || []).map((label: string, i: number) => ({
        name: label,
        leads: displayData.trends.leads?.[i] || 0
    }));

    // Ensure we have arrays even if API returns partial data
    const safeDist = displayData.distribution || {};
    safeDist.leadsByStatus = safeDist.leadsByStatus || [];
    safeDist.leadsByVisaType = safeDist.leadsByVisaType || [];
    safeDist.revenueByCountry = safeDist.revenueByCountry || [];
    safeDist.leadsByCounsellor = safeDist.leadsByCounsellor || [];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header with Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaUsers className="text-blue-600" /> Leads Intelligence
                        {loading && <span className="text-sm font-normal text-gray-400 ml-2 animate-pulse">(Updating...)</span>}
                    </h1>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <FaCalendarAlt className="text-gray-400" />
                        <select
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
                        >
                            <option value="day">Today (Hourly)</option>
                            <option value="week">This Week</option>
                            <option value="month">Last 6 Months</option>
                        </select>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <KpiCard
                        title="Total Contacts"
                        value={displayData.meta?.totalContacts?.toLocaleString() || '0'}
                        trend="Live" trendUp
                        icon={<FaUsers size={24} />}
                        color="bg-indigo-600"
                    />
                    <KpiCard
                        title="New Leads"
                        value={displayData.trends?.leads?.reduce((a: number, b: number) => a + b, 0) || 0}
                        trend="Based on selection" trendUp
                        icon={<FaUserPlus size={24} />}
                        color="bg-blue-600"
                    />
                    <KpiCard
                        title="Qualified"
                        value="43%"
                        icon={<FaBullseye size={24} />}
                        color="bg-teal-500"
                    />
                    <KpiCard
                        title="Unassigned"
                        value="12"
                        icon={<FaFilter size={24} />}
                        color="bg-pink-500"
                    />
                </div>

                {/* Row 1: Status & Visa Type (Pie Charts) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Leads by Status */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">Leads by Status</h3>
                        <div className="h-64 flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={safeDist.leadsByStatus}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {safeDist.leadsByStatus.map((entry: { name: string; value: number; color?: string }, index: number) => (
                                            <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Leads by Visa Type */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">Leads by Visa Type</h3>
                        <div className="h-64 flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={safeDist.leadsByVisaType}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        dataKey="value"
                                        label={({ name, percent }: { name?: string; percent?: number }) => `${name || ''} ${((percent || 0) * 100).toFixed(0)}%`}
                                    >
                                        {safeDist.leadsByVisaType.map((entry: { name: string; value: number }, index: number) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Row 2: Country & Counsellor (Bar Charts) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Leads by Country */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">Leads by Country</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart layout="vertical" data={safeDist.revenueByCountry}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" width={80} />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#8B5CF6" radius={[0, 4, 4, 0]} name="Leads" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Leads by Counsellor */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">Performance by Counsellor</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={safeDist.leadsByCounsellor}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} name="Leads Assigned" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>

                {/* Trend Chart (Full Width) */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Leads Trend ({period})</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="leads" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
}
