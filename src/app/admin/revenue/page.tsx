'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import KpiCard from '@/components/admin/KpiCard';
import { FaMoneyBillWave, FaChartLine, FaWallet, FaCreditCard, FaCalendarAlt } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function RevenuePage() {
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

    if (loading) return <div className="p-8">Loading Revenue Data...</div>;
    if (!data) return <div className="p-8">Error loading data</div>;

    const chartData = data.trends.labels.map((label: string, i: number) => ({
        name: label,
        revenue: data.trends.revenue[i],
        refunds: data.trends.refunds[i]
    }));

    const dailyData = data.trends.days.map((day: string, i: number) => ({
        day: day,
        sales: data.trends.dailySales[i]
    }));

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header with Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaMoneyBillWave className="text-green-600" /> Revenue Analytics
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
                        value={`$${period === 'day' ? '4,500' : '124,500'}`}  // Mock dynamic-ish feel
                        trend="12% vs last period" trendUp
                        icon={<FaMoneyBillWave size={24} />}
                        color="bg-green-500"
                    />
                    <KpiCard
                        title="Daily Avg Sales"
                        value="$1,500"
                        trend="8% surge" trendUp
                        icon={<FaChartLine size={24} />}
                        color="bg-blue-500"
                    />
                    <KpiCard
                        title="Total Refunds"
                        value="$3,200"
                        trend="2% decrease" trendUp={true}
                        icon={<FaWallet size={24} />}
                        color="bg-red-500"
                    />
                    <KpiCard
                        title="Outstanding"
                        value="$12,000"
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
                            {data.distribution.revenueByCountry.map((country: any, index: number) => (
                                <div key={country.name}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-gray-700">{country.name}</span>
                                        <span className="text-gray-500">${country.value.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full"
                                            style={{ width: `${(country.value / 65) * 100}%` }}
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
                                        data={data.distribution.revenueByService}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.distribution.revenueByService.map((entry: any, index: number) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center mt-4">
                            {data.distribution.revenueByService.map((entry: any, index: number) => (
                                <div key={entry.name} className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                    {entry.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
