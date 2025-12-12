'use client';

import ContactList from '@/components/admin/ContactList';

export default function ContactsPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Contacts</h1>
                <ContactList />
            </div>
        </div>
    );
}
