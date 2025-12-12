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

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_do_not_use_in_production';

async function isAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    if (!token) return false;
    try {
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

        // Calculate date ranges based on period
        const now = new Date();
        let startDate = new Date();

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
            newUsersPeriod,
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

        // Mock Financial/Business Data
        const revenue = newContactsPeriod * 1500;
        const revenueGrowth = 12.5;
        const conversionRate = 3.2;
        const traffic = period === 'day' ? 500 : (period === 'week' ? 3500 : 12500);

        return NextResponse.json({
            overview: {
                users: userCount,
                contacts: contactCount,
                newsletter: newsletterCount,
                revenue: revenue,
                revenueGrowth: revenueGrowth,
            },
            sales: {
                leadsTotal: contactCount,
                leadsNew: newContactsPeriod, // Renamed for clarity, was leadsMonth
                conversionRate: conversionRate,
                pipelineValue: contactCount * 500,
            },
            marketing: {
                subscribers: newsletterCount,
                traffic: traffic,
                campaigns: 4,
            },
            ops: {
                articles: articleCount,
                categories: categoryCount,
                tags: tagCount,
                systemStatus: 'Healthy',
                pendingReviews: 0
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
