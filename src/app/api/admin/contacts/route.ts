import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_do_not_use_in_production';

async function isAuthenticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    const legacySession = cookieStore.get('admin_session')?.value;

    if (token) {
        try {
            jwt.verify(token, JWT_SECRET);
            return true;
        } catch {
            return false;
        }
    }

    // Fallback for legacy simple auth
    if (legacySession === 'true') {
        return true;
    }

    return false;
}

export async function GET() {
    try {
        if (!(await isAuthenticated())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const contacts = await Contact.find({})
            .sort({ createdAt: -1 })
            .populate('assignedTo', 'name email');
        return NextResponse.json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contacts' },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        if (!(await isAuthenticated())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        await dbConnect();
        const body = await req.json();
        if (body.assignedTo === '') {
            body.assignedTo = null;
        }
        const contact = await Contact.create(body);
        return NextResponse.json(contact, { status: 201 });
    } catch (error) {
        console.error('Error creating contact:', error);
        return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
    }
}

export async function PATCH(req: Request) {
    try {
        if (!(await isAuthenticated())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        await dbConnect();
        const body = await req.json();
        const { id, ...updateData } = body;

        if (updateData.assignedTo === '') {
            updateData.assignedTo = null;
        }

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        // Fetch original contact to check if assignedTo changed
        const originalContact = await Contact.findById(id);
        if (!originalContact) {
            return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
        }

        const contact = await Contact.findByIdAndUpdate(id, updateData, { new: true }).populate('assignedTo');

        if (!contact) {
            return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
        }

        // Check for Assignment Change Trigger
        if (updateData.assignedTo && updateData.assignedTo !== originalContact.assignedTo?.toString()) {
            const newOwner = contact.assignedTo; // Populated now
            if (newOwner && newOwner.email) {
                // Import dynamically to avoid top-level issues if lib missing? No, static is fine.
                const { sendEmail } = await import('@/lib/email');

                await sendEmail(
                    newOwner.email,
                    `New Lead Assignment: ${contact.name}`,
                    `<p>Hello ${newOwner.name},</p>
                     <p>You have been assigned a new lead.</p>
                     <p><strong>Name:</strong> ${contact.name}</p>
                     <p><strong>Status:</strong> ${contact.status}</p>
                     <p>Please log in to the dashboard to review.</p>`
                );
            }
        }

        return NextResponse.json(contact);
    } catch (error) {
        console.error('Error updating contact:', error);
        return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        if (!(await isAuthenticated())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        await dbConnect();
        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        return NextResponse.json(
            { error: 'Failed to delete contact' },
            { status: 500 }
        );
    }
}
