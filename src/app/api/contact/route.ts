import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            name, email, contact_number, source_url, subject, message,
            // Eligibility Fields
            jobCategory, country, education, desiredSalary,
            experienceYears, hasJobOffer, passportMonths,
            eligibilityStatus, eligibilityScore
        } = body;

        if (!name || !email || !contact_number) {
            return NextResponse.json(
                { error: 'Name, Email, and Phone are required' },
                { status: 400 }
            );
        }

        await dbConnect();

        // Map frontend 'contact_number' to backend 'phone'
        const newContact = await Contact.create({
            name,
            email,
            phone: contact_number,
            source_url,
            subject,
            message,
            // Eligibility Fields
            jobCategory,
            country,
            education,
            desiredSalary,
            experienceYears,
            hasJobOffer,
            passportMonths,
            eligibilityStatus,
            eligibilityScore
        });

        // Send Email Notifications
        const { sendEmail } = await import('@/lib/email');
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@skylandimmigration.com';

        // 1. Notify Admin
        await sendEmail({
            to: adminEmail,
            subject: `New Free Assessment: ${name}`,
            html: `
                <h2>New Assessment Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Contact:</strong> ${email}, ${contact_number}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Profession:</strong> ${jobCategory}</p>
            `
        });

        // 2. Notify User
        if (email) {
            await sendEmail({
                to: email,
                subject: 'Free Assessment Request Received',
                html: `
                    <h2>Request Received</h2>
                    <p>Dear ${name},</p>
                    <p>Thank you for submitting your profile for a free assessment. Our experts will review your details and get back to you within 24 hours.</p>
                `
            });
        }

        return NextResponse.json(
            { message: 'Contact submitted successfully', id: newContact._id },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error submitting contact:', error);
        return NextResponse.json(
            { error: 'Failed to submit contact' },
            { status: 500 }
        );
    }
}
