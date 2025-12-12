'use client';

import NewsletterList from '@/components/admin/NewsletterList';

export default function NewsletterPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Newsletter Subscribers</h1>
                <NewsletterList />
            </div>
        </div>
    );
}
