import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

async function isAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    if (!token) return false;
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoded: any = jwt.verify(token, JWT_SECRET);
        return decoded.role === 'admin' || decoded.role === 'super_admin';
    } catch {
        return false;
    }
}

export async function GET(req: Request) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        await dbConnect();

        // Get Filter Params
        const { searchParams } = new URL(req.url);
        const period = searchParams.get('period') || 'month'; // 'day', 'week', 'month'

        // 1. Generate Labels based on Period
        const labels = [];
        let multiplier = 100;

        if (period === 'day') {
            multiplier = 1;
            for (let i = 0; i < 24; i++) labels.push(`${i}:00`);
        } else if (period === 'week') {
            multiplier = 10;
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            for (let i = 0; i < 7; i++) labels.push(days[i]);
        } else {
            for (let i = 5; i >= 0; i--) {
                const d = new Date();
                d.setMonth(d.getMonth() - i);
                labels.push(d.toLocaleString('default', { month: 'short' }));
            }
        }

        // 2. Mock Trend Data
        const revenueTrend = labels.map(() => Math.floor(Math.random() * 500 * multiplier) + (100 * multiplier));
        const leadsTrend = labels.map(() => Math.floor(Math.random() * 5 * multiplier) + (1 * multiplier));
        const refundsTrend = labels.map(() => Math.floor(Math.random() * 20 * multiplier) + (5 * multiplier));

        // 3. Daily Sales (Last 30 Days)
        const days = [];
        const dailySales = [];
        for (let i = 29; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            days.push(d.getDate().toString());
            dailySales.push(Math.floor(Math.random() * 3000) + 500);
        }

        // 4. Detailed Breakdowns
        const revenueByService = [
            { name: 'PR Visa', value: 45000 },
            { name: 'Student Visa', value: 30000 },
            { name: 'Tourist/Visitor', value: 15000 },
            { name: 'Work Permit', value: 25000 },
            { name: 'Business Visa', value: 8000 },
        ];

        const leadsBySource = [
            { name: 'Website', value: 60 },
            { name: 'Referral', value: 20 },
            { name: 'Social Media', value: 15 },
            { name: 'Other', value: 5 },
        ];

        const revenueByCountry = [ // Reusing for Leads by Country too for now
            { name: 'India', value: 65 },
            { name: 'UAE', value: 25 },
            { name: 'UK', value: 15 },
            { name: 'Canada', value: 12 },
            { name: 'USA', value: 8 },
        ];

        // NEW: Specific Leads Data
        const leadsByStatus = [
            { name: 'New', value: 45, color: '#3B82F6' },
            { name: 'Contacted', value: 30, color: '#F59E0B' },
            { name: 'Qualified', value: 15, color: '#10B981' },
            { name: 'Converted', value: 5, color: '#6366F1' },
            { name: 'Lost', value: 5, color: '#EF4444' },
        ];

        const leadsByCounsellor = [
            { name: 'Sarah', value: 24 },
            { name: 'Mike', value: 18 },
            { name: 'Jessica', value: 32 },
            { name: 'David', value: 12 },
            { name: 'Emily', value: 28 },
        ];

        const leadsByVisaType = [
            { name: 'PR Visa', value: 40 },
            { name: 'Student', value: 35 },
            { name: 'Tourist', value: 15 },
            { name: 'Work', value: 10 },
        ];

        return NextResponse.json({
            trends: {
                labels, // Changed from 'months' to generic 'labels'
                revenue: revenueTrend,
                leads: leadsTrend,
                refunds: refundsTrend,
                days,
                dailySales
            },
            distribution: {
                revenueByService,
                leadsBySource,
                revenueByCountry,
                leadsByStatus,
                leadsByCounsellor,
                leadsByVisaType
            }
        });

    } catch {
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}
