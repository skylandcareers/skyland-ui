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
