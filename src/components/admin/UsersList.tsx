'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaTrash, FaPhone } from 'react-icons/fa';

interface IUser {
    _id: string;
    name: string;
    phone: string;
    role: string;
    createdAt: string;
}

export default function UsersList() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await axios.get('/api/admin/users');
            setUsers(res.data);
            setError('');
        } catch {
            setError('Failed to load users');
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id: string) => {
        if (!confirm('Are you sure you want to delete this user?')) return;
        try {
            await axios.delete(`/api/admin/users?id=${id}`);
            fetchUsers();
        } catch {
            alert('Failed to delete user');
        }
    };

    if (loading) return <div className="p-4 text-center text-gray-500">Loading users...</div>;
    if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <FaUser className="text-blue-500" /> Registered Users
                </h2>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{users.length} Users</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-xs">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">Phone</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Registered</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-500 italic">No users found.</td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr key={user._id} className="hover:bg-blue-50 transition-colors">
                                    <td className="p-4 font-medium text-gray-900">{user.name}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <FaPhone className="text-gray-400 size-3" />
                                            {user.phone}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${user.role === 'super_admin' ? 'bg-purple-100 text-purple-700' :
                                                user.role === 'admin' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td className="p-4 text-center">
                                        <button
                                            onClick={() => deleteUser(user._id)}
                                            className="text-red-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-full"
                                            title="Delete User"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
