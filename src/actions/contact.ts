'use server';

import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

export async function submitContact(formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    source_url: string;
}) {
    try {
        const { name, email, phone, subject, message, source_url } = formData;

        if (!name || !email || !phone) {
            return { success: false, error: 'Name, Email, and Phone are required' };
        }

        await dbConnect();

        await Contact.create({
            name,
            email,
            phone,
            subject,
            message,
            source_url,
        });

        return { success: true };
    } catch (error) {
        console.error('Server Action Error:', error);
        return { success: false, error: 'Failed to submit contact form' };
    }
}
