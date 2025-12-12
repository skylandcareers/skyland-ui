'use client';

import UsersList from '@/components/admin/UsersList';

export default function UsersPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Registered Users</h1>
                <UsersList />
            </div>
        </div>
    );
}
