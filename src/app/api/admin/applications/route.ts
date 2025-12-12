import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import JobApplication from '@/models/JobApplication';
import Job from '@/models/Job'; // Ensure model is loaded for population

export async function GET() {
    try {
        await dbConnect();
        // Ensure Job model is registered
        const _ = Job;

        const applications = await JobApplication.find({})
            .populate('jobId', 'title location')
            .populate('userId', 'name email')
            .sort({ createdAt: -1 });

        return NextResponse.json(applications);
    } catch (error) {
        console.error('Failed to fetch applications:', error);
        return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
    }
}
