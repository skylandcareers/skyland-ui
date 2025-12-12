'use client';
import { ReactNode } from 'react';

interface KpiCardProps {
    title: string;
    value: string | number;
    trend?: string;
    trendUp?: boolean;
    icon: ReactNode;
    color: string;
}

export default function KpiCard({ title, value, trend, trendUp, icon, color }: KpiCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
                {trend && (
                    <p className={`text-xs mt-2 font-medium flex items-center gap-1 ${trendUp ? 'text-green-600' : 'text-red-500'}`}>
                        {trendUp ? '↑' : '↓'} {trend}
                    </p>
                )}
            </div>
            <div className={`p-4 rounded-xl text-white ${color}`}>
                {icon}
            </div>
        </div>
    );
}
