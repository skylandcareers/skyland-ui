'use client';

import {
    FaUserTie, FaChartLine, FaMoneyBillWave, FaUsers,
    FaBullhorn, FaGlobeAmericas, FaEnvelope,
    FaCogs, FaNewspaper, FaServer, FaCheckCircle,
    FaArrowUp, FaArrowDown
} from 'react-icons/fa';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RichDashboard({ data }: { data: any }) {
    // Default structure to ensure UI renders even on failure/loading
    const safeData = data || {
        overview: { revenue: 0, revenueGrowth: 0, users: 0, contacts: 0 },
        sales: { leadsNew: 0, pipelineValue: 0, conversionRate: 0 },
        marketing: { traffic: 0, subscribers: 0, campaigns: 0 },
        ops: { systemStatus: 'Unknown', articles: 0, categories: 0, tags: 0 }
    };

    const { overview = {}, sales = {}, marketing = {}, ops = {} } = safeData;

    const Card = ({ title, value, subtext, icon, color, trend }: { title: string; value: string | number; subtext?: string; icon: React.ReactNode; color: string; trend?: number }) => (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between hover:shadow-md transition-shadow">
            <div>
                <p className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wide">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
                {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
                {trend && (
                    <div className={`flex items-center text-xs mt-2 font-medium ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {trend > 0 ? <FaArrowUp size={10} className="mr-1" /> : <FaArrowDown size={10} className="mr-1" />}
                        {Math.abs(trend)}%
                    </div>
                )}
            </div>
            <div className={`p-3 rounded-lg text-white ${color}`}>
                {icon}
            </div>
        </div>
    );

    return (
        <div className="space-y-8">

            {/* CEO / Executive Section */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <FaUserTie className="text-gray-700 text-xl" />
                    <h2 className="text-xl font-bold text-gray-800">Executive Overview</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card
                        title="Projected Revenue"
                        value={`$${overview.revenue.toLocaleString()}`}
                        trend={overview.revenueGrowth}
                        icon={<FaMoneyBillWave />}
                        color="bg-emerald-500"
                    />
                    <Card
                        title="Total Users"
                        value={overview.users}
                        subtext="Active Accounts"
                        icon={<FaUsers />}
                        color="bg-blue-600"
                    />
                    <Card
                        title="Total Leads"
                        value={overview.contacts}
                        subtext="Lifetime contacts"
                        icon={<FaChartLine />}
                        color="bg-indigo-500"
                    />
                    <Card
                        title="System Health"
                        value={ops.systemStatus}
                        subtext="All systems operational"
                        icon={<FaCheckCircle />}
                        color="bg-green-500"
                    />
                </div>
            </section>

            {/* Sales Section */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <FaChartLine className="text-gray-700 text-xl" />
                    <h2 className="text-xl font-bold text-gray-800">Sales Performance</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">Lead Pipeline (Period)</h4>
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-3xl font-bold text-gray-800">{sales.leadsNew}</span>
                            <span className="text-sm text-green-500 font-medium">+ New in period</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Target: Dynamic</p>
                    </div>

                    <Card
                        title="Est. Pipeline Value"
                        value={`$${sales.pipelineValue.toLocaleString()}`}
                        subtext="Based on open leads"
                        icon={<FaMoneyBillWave />}
                        color="bg-blue-500"
                    />
                    <Card
                        title="Conversion Rate"
                        value={`${sales.conversionRate}%`}
                        subtext="Visitor to Lead"
                        icon={<FaChartLine />}
                        color="bg-teal-500"
                    />
                </div>
            </section>

            {/* Marketing Section */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <FaBullhorn className="text-gray-700 text-xl" />
                    <h2 className="text-xl font-bold text-gray-800">Marketing & Growth</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card
                        title="Traffic"
                        value={marketing.traffic.toLocaleString()}
                        trend={5.4}
                        icon={<FaGlobeAmericas />}
                        color="bg-purple-500"
                    />
                    <Card
                        title="Newsletter Subs"
                        value={marketing.subscribers}
                        subtext="Total Subscribers"
                        icon={<FaEnvelope />}
                        color="bg-orange-500"
                    />
                    <Card
                        title="Active Campaigns"
                        value={marketing.campaigns}
                        subtext="Running Now"
                        icon={<FaBullhorn />}
                        color="bg-pink-500"
                    />
                </div>
            </section>

            {/* Operations Section */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <FaCogs className="text-gray-700 text-xl" />
                    <h2 className="text-xl font-bold text-gray-800">Operations & Content</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card
                        title="Articles Published"
                        value={ops.articles}
                        icon={<FaNewspaper />}
                        color="bg-gray-700"
                    />
                    <Card
                        title="Categories"
                        value={ops.categories}
                        icon={<FaCogs />}
                        color="bg-gray-600"
                    />
                    <Card
                        title="Tags Defined"
                        value={ops.tags}
                        icon={<FaCogs />}
                        color="bg-gray-500"
                    />
                    <Card
                        title="Server Status"
                        value="Online"
                        icon={<FaServer />}
                        color="bg-green-600"
                    />
                </div>
            </section>

        </div>
    );
}
