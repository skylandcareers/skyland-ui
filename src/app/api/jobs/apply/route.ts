import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import JobApplication from '@/models/JobApplication';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();

        // Check if user is logged in to associate userId
        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value;
        let userId = null;

        if (token) {
            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const decoded: any = jwt.verify(token, JWT_SECRET);
                userId = decoded.userId || decoded.id; // Adapt based on token payload structure
            } catch {
                // Token invalid, proceed as guest
            }
        }

        const application = await JobApplication.create({
            ...body,
            userId: userId || undefined
        });

        return NextResponse.json(application, { status: 201 });
    } catch (error) {
        console.error('Application error:', error);
        return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
    }
}
