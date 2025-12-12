import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import Newsletter from '@/models/Newsletter';
import User from '@/models/User';
import Article from '@/models/Article';
import Category from '@/models/Category';
import Tag from '@/models/Tag';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

async function isAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    const legacySession = cookieStore.get('admin_session')?.value;

    if (token) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const decoded: any = jwt.verify(token, JWT_SECRET);
            return decoded.role === 'admin' || decoded.role === 'super_admin';
        } catch {
            // Invalid token
        }
    }
    if (legacySession === 'true') return true;

    return false;
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

        // Calculate date ranges based on period
        // Calculate date ranges based on period
        const startDate = new Date();

        if (period === 'day') {
            startDate.setHours(0, 0, 0, 0); // Start of today
        } else if (period === 'week') {
            const day = startDate.getDay();
            const diff = startDate.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is sunday
            startDate.setDate(diff);
            startDate.setHours(0, 0, 0, 0);
        } else {
            startDate.setDate(1); // Start of month
            startDate.setHours(0, 0, 0, 0);
        }

        // Parallel DB Queries
        const [
            userCount,
            contactCount,
            newsletterCount,
            articleCount,
            categoryCount,
            tagCount,
            ,
            newContactsPeriod
        ] = await Promise.all([
            User.countDocuments(),
            Contact.countDocuments(),
            Newsletter.countDocuments(),
            Article.countDocuments(),
            Category.countDocuments(),
            Tag.countDocuments(),
            User.countDocuments({ createdAt: { $gte: startDate } }),
            Contact.countDocuments({ createdAt: { $gte: startDate } }),
        ]);

        // Real DB Stats from Contacts
        const totalLeads = await Contact.countDocuments({});
        const newLeads = await Contact.countDocuments({ status: 'New' });
        const convertedLeads = await Contact.countDocuments({ status: 'Converted' });
        const lostLeads = await Contact.countDocuments({ status: 'Lost' });

        // Calculate Revenue from Converted leads (Mocking $1500 per conversion for now)
        const totalRevenue = convertedLeads * 1500;
        // Mock revenue growth
        const revenueGrowth = 12.5;

        // Calculate Pipeline Value (Mocking avg $5k per active lead)
        const activeLeadsCount = totalLeads - convertedLeads - lostLeads;
        const pipelineValue = activeLeadsCount * 5000;

        // Conversion Rate
        const conversionRate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : 0;

        return NextResponse.json({
            overview: {
                revenue: totalRevenue,
                revenueGrowth: revenueGrowth,
                users: userCount,
                contacts: contactCount
            },
            sales: {
                leadsNew: newLeads,
                pipelineValue: pipelineValue,
                conversionRate: conversionRate
            },
            marketing: {
                traffic: 12500, // Mocked for now
                subscribers: newsletterCount,
                campaigns: 3 // Mocked
            },
            ops: {
                systemStatus: 'Optimal',
                articles: articleCount,
                categories: categoryCount,
                tags: tagCount
            }
        });

    } catch (error) {
        console.error('Error fetching stats:', error);
        return NextResponse.json(
            { error: 'Failed to fetch stats' },
            { status: 500 }
        );
    }
}
