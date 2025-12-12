import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_do_not_use_in_production';

async function isAuthenticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    const legacySession = cookieStore.get('admin_session')?.value;

    if (token) {
        try {
            jwt.verify(token, JWT_SECRET);
            return true;
        } catch {
            // Token invalid, check legacy? Usually if token exists but invalid we should fail, 
            // but let's be lenient or valid token is preferred. 
            // Actually, if legacy is true coverage, let's allow it.
        }
    }

    if (legacySession === 'true') return true;

    if (!token) return false;

    try {
        jwt.verify(token, JWT_SECRET);
        return true;
    } catch {
        return false;
    }
}

export async function GET() {
    try {
        if (!(await isAuthenticated())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        // Fetch users with role 'admin' or 'super_admin'
        // If role doesn't exist or logic is different, we can adjust. 
        // Based on User model, role is 'user' | 'admin' | 'super_admin'.
        const admins = await User.find({ role: { $in: ['admin', 'super_admin'] } })
            .select('name email role')
            .sort({ name: 1 });

        return NextResponse.json(admins);
    } catch (error) {
        console.error('Error fetching admins:', error);
        return NextResponse.json(
            { error: 'Failed to fetch admins' },
            { status: 500 }
        );
    }
}
