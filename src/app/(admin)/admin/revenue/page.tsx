'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import KpiCard from '@/components/admin/KpiCard';
import { FaMoneyBillWave, FaChartLine, FaCalendarAlt, FaWallet, FaCreditCard } from 'react-icons/fa';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar,
    PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function RevenuePage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('month');

    useEffect(() => {
        setLoading(true);
        axios.get(`/api/admin/analytics?period=${period}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [period]);

    // Default structure to ensure render even during load
    const defaultData = {
        trends: { labels: [], revenue: [], refunds: [], days: [], dailySales: [] },
        distribution: { revenueByService: [] },
        revenueByCountry: [] // API returns this nested in distribution usually, but we'll map carefully
    };

    const safeData = data || defaultData;
    // Handle API structure vs Legacy structure mapping if needed
    // API returns revenueByCountry inside distribution object
    const revenueByCountry = safeData.distribution?.revenueByCountry || [];
    const revenueByService = safeData.distribution?.revenueByService || [];

    const chartData = (safeData.trends?.labels || []).map((label: string, i: number) => ({
        name: label,
        revenue: safeData.trends?.revenue?.[i] || 0,
        refunds: safeData.trends?.refunds?.[i] || 0
    }));

    const dailyData = (safeData.trends?.days || []).map((day: string, i: number) => ({
        day: day,
        sales: safeData.trends?.dailySales?.[i] || 0
    }));

    // Calculate Totals for Cards
    const totalRevenue = (safeData.trends?.revenue || []).reduce((a: number, b: number) => a + b, 0);
    const totalRefunds = (safeData.trends?.refunds || []).reduce((a: number, b: number) => a + b, 0);
    const avgDailySales = dailyData.length > 0
        ? Math.round(dailyData.reduce((a: number, b: { sales: number }) => a + b.sales, 0) / dailyData.length)
        : 0;

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header with Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaMoneyBillWave className="text-green-600" /> Revenue Analytics
                        {loading && <span className="text-sm font-normal text-gray-400 ml-2 animate-pulse">(Updating...)</span>}
                    </h1>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <FaCalendarAlt className="text-gray-400" />
                        <select
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 outline-none"
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
                        title="Total Revenue"
                        value={`$${totalRevenue.toLocaleString()}`}
                        trend="Based on selection" trendUp
                        icon={<FaMoneyBillWave size={24} />}
                        color="bg-green-500"
                    />
                    <KpiCard
                        title="Daily Avg Sales"
                        value={`$${avgDailySales.toLocaleString()}`}
                        trend="Calculated avg" trendUp
                        icon={<FaChartLine size={24} />}
                        color="bg-blue-500"
                    />
                    <KpiCard
                        title="Total Refunds"
                        value={`$${totalRefunds.toLocaleString()}`}
                        trend="2% decrease" trendUp={true}
                        icon={<FaWallet size={24} />}
                        color="bg-red-500"
                    />
                    <KpiCard
                        title="Outstanding"
                        value="$12,000" // Still mocked as API lacks this
                        icon={<FaCreditCard size={24} />}
                        color="bg-orange-500"
                    />
                </div>

                {/* Main Trends: Revenue vs Refunds */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Revenue vs Refunds ({period})</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorRef" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="revenue" stroke="#10B981" fillOpacity={1} fill="url(#colorRev)" name="Revenue" />
                                    <Area type="monotone" dataKey="refunds" stroke="#EF4444" fillOpacity={1} fill="url(#colorRef)" name="Refunds" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Revenue by Country</h3>
                        <div className="space-y-4">
                            {revenueByCountry.map((entry: { name: string; value: number }) => (
                                <div key={entry.name}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-gray-700">{entry.name}</span>
                                        <span className="text-gray-500">${entry.value.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full"
                                            style={{ width: `${(entry.value / 65) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Secondary Charts: Daily Sales & Visa Types */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Daily Sales Bar Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Sales Trend (Last 30 periods)</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={dailyData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="day" hide />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="sales" fill="#6366F1" radius={[4, 4, 0, 0]} name="Sales" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Revenue by Visa Type */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Revenue by Visa Type</h3>
                        <div className="h-80 flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={revenueByService}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {revenueByService.map((entry: { name: string; value: number }, index: number) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center mt-4">
                            {revenueByService.map((entry: { name: string; value: number }, index: number) => (
                                <div key={entry.name} className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                    {entry.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
