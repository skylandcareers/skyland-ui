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

        // Send Email Notifications (Async - don't await blocking response)
        const { sendEmail } = await import('@/lib/email');
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@skylandcareers.com';

        // 1. Notify Admin
        await sendEmail({
            to: adminEmail,
            subject: `New Job Application: ${body.name}`,
            html: `
                <h2>New Job Application Received</h2>
                <p><strong>Applicant:</strong> ${body.name}</p>
                <p><strong>Job ID:</strong> ${body.jobId}</p>
                <p><strong>Phone:</strong> ${body.phone}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                ${body.resumeUrl ? `<p><a href="${body.resumeUrl}">View Resume</a></p>` : ''}
            `
        });

        // 2. Notify User (if email provided)
        if (body.email) {
            await sendEmail({
                to: body.email,
                subject: 'Application Received - Skyland Immigration',
                html: `
                    <h2>Application Received</h2>
                    <p>Dear ${body.name},</p>
                    <p>Thank you for applying for the position. We have received your application and will review it shortly.</p>
                    <p>Best regards,<br>Skyland Immigration Team</p>
                `
            });
        }

        return NextResponse.json(application, { status: 201 });
    } catch (error) {
        console.error('Application error:', error);
        return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
    }
}
