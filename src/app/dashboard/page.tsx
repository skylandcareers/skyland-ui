'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        // Check if logged in
        axios.get('/api/auth/me')
            .then(res => {
                if (!res.data.user) {
                    router.push('/auth/login');
                } else {
                    setUser(res.data.user);
                }
            })
            .catch(() => router.push('/auth/login'));
    }, [router]);

    if (!user) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome, {user.name}</h1>
                    <p className="text-gray-600">Phone: {user.phone}</p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">My Applications</h2>
                    <div className="text-center py-8 text-gray-500 bg-gray-50 rounded border border-dashed border-gray-300">
                        You haven&apos;t submitted any visa applications yet.
                        <br />
                        <a href="/" className="text-blue-600 hover:underline mt-2 inline-block">Browse Services</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
