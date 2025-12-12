import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import JobApplication from '@/models/JobApplication';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let userId: string;
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const decoded: any = jwt.verify(token, JWT_SECRET);
            userId = decoded.userId || decoded.id;
        } catch {
            return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
        }

        await dbConnect();
        // Populate job details
        const applications = await JobApplication.find({ userId })
            .populate('jobId', 'title location type')
            .sort({ createdAt: -1 });

        return NextResponse.json(applications);
    } catch (error) {
        console.error('Failed to fetch user applications', error);
        return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
    }
}
