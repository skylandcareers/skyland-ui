import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Newsletter from '@/models/Newsletter';
import { cookies } from 'next/headers';

async function isAdmin() {
    const cookieStore = await cookies();
    return cookieStore.get('admin_session')?.value === 'true';
}

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        await dbConnect();

        // Upsert: if email exists, ensure it's active. If not, create it.
        await Newsletter.findOneAndUpdate(
            { email },
            { email, isActive: true, subscribedAt: new Date() },
            { upsert: true, new: true }
        );

        return NextResponse.json(
            { message: 'Subscribed successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        return NextResponse.json(
            { error: 'Failed to subscribe' },
            { status: 500 }
        );
    }
}

export async function GET() {
    // Admin only
    try {
        if (!await isAdmin()) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        await dbConnect();
        const subscribers = await Newsletter.find({}).sort({ subscribedAt: -1 });
        return NextResponse.json(subscribers);

    } catch (error) {
        console.error('Error fetching newsletter subscribers:', error);
        return NextResponse.json(
            { error: 'Failed to fetch subscribers' },
            { status: 500 }
        );
    }
}
