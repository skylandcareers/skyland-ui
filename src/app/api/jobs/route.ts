import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Job from '@/models/Job';

export async function GET() {
    try {
        await dbConnect();
        // Only fetch active jobs for public view
        const jobs = await Job.find({ isActive: true }).sort({ createdAt: -1 });
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}
