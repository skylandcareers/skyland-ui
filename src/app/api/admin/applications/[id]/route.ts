import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import JobApplication from '@/models/JobApplication';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;
        const body = await req.json();

        const updated = await JobApplication.findByIdAndUpdate(
            id,
            { status: body.status },
            { new: true }
        );

        if (!updated) {
            return NextResponse.json({ error: 'Application not found' }, { status: 404 });
        }

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update application' }, { status: 500 });
    }
}
