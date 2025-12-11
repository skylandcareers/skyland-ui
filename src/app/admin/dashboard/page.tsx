'use client';
import { useState } from 'react';
import ContactList from '@/components/admin/ContactList';
import NewsletterList from '@/components/admin/NewsletterList';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<'contacts' | 'newsletter'>('contacts');

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                </div>

                <div className="mb-6 flex space-x-4 border-b border-gray-200">
                    <button
                        className={`py-2 px-4 font-semibold ${activeTab === 'contacts' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('contacts')}
                    >
                        Contacts
                    </button>
                    <button
                        className={`py-2 px-4 font-semibold ${activeTab === 'newsletter' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('newsletter')}
                    >
                        Newsletter Subscribers
                    </button>
                </div>

                <div>
                    {activeTab === 'contacts' ? <ContactList /> : <NewsletterList />}
                </div>
            </div>
        </div>
    );
}
