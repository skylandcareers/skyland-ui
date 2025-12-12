'use client';

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    createdAt: string;
    // Lead Management Fields
    status?: 'New' | 'Contacted' | 'In Progress' | 'Converted' | 'Lost';
    priority?: 'Low' | 'Medium' | 'High';
    notes?: string;
    assignedTo?: { _id: string; name: string; email: string } | string; // Can be object (read) or ID (write)
}

interface AdminUser {
    _id: string;
    name: string;
    email: string;
    role: string;
}

const STATUS_COLORS: Record<string, string> = {
    'New': 'bg-blue-100 text-blue-800',
    'Contacted': 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-purple-100 text-purple-800',
    'Converted': 'bg-green-100 text-green-800',
    'Lost': 'bg-gray-100 text-gray-800',
};

const PRIORITY_COLORS: Record<string, string> = {
    'Low': 'text-gray-500',
    'Medium': 'text-yellow-600',
    'High': 'text-red-600',
};

export default function ContactList() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [admins, setAdmins] = useState<AdminUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState<string>('All');
    const [ownerFilter, setOwnerFilter] = useState<string>('All'); // 'All' | 'Me' | userId
    const router = useRouter();

    // Derived filtered contacts
    const filteredContacts = contacts.filter(contact => {
        const matchesStatus = statusFilter === 'All' || contact.status === statusFilter;

        let matchesOwner = true;
        if (ownerFilter === 'All') matchesOwner = true;
        else if (ownerFilter === 'Unassigned') matchesOwner = !contact.assignedTo;
        else {
            const assignedId = typeof contact.assignedTo === 'object' && contact.assignedTo !== null
                ? (contact.assignedTo as any)._id
                : contact.assignedTo;
            matchesOwner = assignedId === ownerFilter;
        }

        return matchesStatus && matchesOwner;
    });

    const fetchContacts = useCallback(async () => {
        try {
            const [contactsRes, adminsRes] = await Promise.all([
                axios.get('/api/admin/contacts'),
                axios.get('/api/admin/users')
            ]);
            setContacts(contactsRes.data);
            setAdmins(adminsRes.data);
        } catch (error) {
            console.error('Failed to fetch contacts', error);
            // If unauthorized, redirect to login
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                router.push('/admin');
            }
        } finally {
            setLoading(false);
        }
    }, [router]);

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentContact, setCurrentContact] = useState<Partial<Contact> | null>(null);

    // ... fetchContacts ...

    const handleCreate = () => {
        setCurrentContact({});
        setIsModalOpen(true);
    };

    const handleEdit = (contact: Contact) => {
        setCurrentContact(contact);
        setIsModalOpen(true);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentContact) return;

        // Sanitize assignedTo to ensure we send only the ID
        const payload = {
            ...currentContact,
            assignedTo: typeof currentContact.assignedTo === 'object' && currentContact.assignedTo !== null
                ? (currentContact.assignedTo as any)._id
                : currentContact.assignedTo
        };

        try {
            if (currentContact._id) {
                // Update
                const res = await axios.patch('/api/admin/contacts', {
                    id: currentContact._id,
                    ...payload
                });
                setContacts(contacts.map(c => c._id === currentContact._id ? res.data : c));
            } else {
                // Create
                const res = await axios.post('/api/admin/contacts', payload);
                setContacts([res.data, ...contacts]);
            }
            setIsModalOpen(false);
            setCurrentContact(null);
        } catch (error) {
            console.error('Failed to save contact', error);
            alert('Failed to save contact');
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this contact?')) return;

        try {
            await axios.delete(`/api/admin/contacts?id=${id}`);
            setContacts(contacts.filter((c) => c._id !== id));
        } catch (error) {
            console.error('Failed to delete contact', error);
            alert('Failed to delete contact');
        }
    };

    if (loading) return <div className="p-4">Loading contacts...</div>;

    if (loading) return <div className="p-4">Loading contacts...</div>;

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-800">Lead Management</h2>

                {/* Filters */}
                <div className="flex items-center gap-3">
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="border border-gray-300 rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                        <option value="All">All Statuses</option>
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Converted">Converted</option>
                        <option value="Lost">Lost</option>
                    </select>

                    <select
                        value={ownerFilter}
                        onChange={(e) => setOwnerFilter(e.target.value)}
                        className="border border-gray-300 rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                        <option value="All">All Owners</option>
                        <option value="Unassigned">Unassigned</option>
                        {admins.map(admin => (
                            <option key={admin._id} value={admin._id}>{admin.name}</option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleCreate}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Add New Lead
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
                    <div className="relative bg-white rounded-lg shadow-xl p-8 m-4 max-w-xl w-full">
                        <h3 className="text-xl font-semibold mb-6">
                            {currentContact?._id ? 'Edit Lead' : 'Create New Lead'}
                        </h3>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                        value={currentContact?.name || ''}
                                        onChange={e => setCurrentContact({ ...currentContact, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                        value={currentContact?.phone || ''}
                                        onChange={e => setCurrentContact({ ...currentContact, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                    value={currentContact?.email || ''}
                                    onChange={e => setCurrentContact({ ...currentContact, email: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Status</label>
                                    <select
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                        value={currentContact?.status || 'New'}
                                        onChange={e => setCurrentContact({ ...currentContact, status: e.target.value as any })}
                                    >
                                        <option value="New">New</option>
                                        <option value="Contacted">Contacted</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Converted">Converted</option>
                                        <option value="Lost">Lost</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Priority</label>
                                    <select
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                        value={currentContact?.priority || 'Medium'}
                                        onChange={e => setCurrentContact({ ...currentContact, priority: e.target.value as any })}
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Assign To</label>
                                <select
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                    value={typeof currentContact?.assignedTo === 'object' ? (currentContact?.assignedTo as any)._id : currentContact?.assignedTo || ''}
                                    onChange={e => setCurrentContact({ ...currentContact, assignedTo: e.target.value })}
                                >
                                    <option value="">-- Unassigned --</option>
                                    {admins.map(admin => (
                                        <option key={admin._id} value={admin._id}>
                                            {admin.name} ({admin.role})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                    value={currentContact?.subject || ''}
                                    onChange={e => setCurrentContact({ ...currentContact, subject: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Notes</label>
                                <textarea
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                    rows={3}
                                    value={currentContact?.notes || ''}
                                    onChange={e => setCurrentContact({ ...currentContact, notes: e.target.value })}
                                />
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setCurrentContact(null);
                                    }}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                >
                                    Save Lead
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name/Contact</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status/Owner</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject/Notes</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredContacts.map((contact) => (
                            <tr key={contact._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(contact.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                                    <div className="text-sm text-gray-500">{contact.email}</div>
                                    <div className="text-sm text-gray-500">{contact.phone}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="mb-2">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${STATUS_COLORS[contact.status || 'New']}`}>
                                            {contact.status || 'New'}
                                        </span>
                                    </div>
                                    {contact.assignedTo ? (
                                        <div className="text-xs text-gray-600 flex items-center">
                                            <span className="font-medium mr-1">Owner:</span>
                                            {typeof contact.assignedTo === 'object' ? (contact.assignedTo as any).name : '...'}
                                        </div>
                                    ) : (
                                        <div className="text-xs text-gray-400 italic">Unassigned</div>
                                    )}
                                    {contact.priority && (
                                        <div className={`text-xs mt-1 ${PRIORITY_COLORS[contact.priority]}`}>
                                            {contact.priority} Priority
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-900 max-w-xs truncate">{contact.subject}</div>
                                    {contact.notes && (
                                        <div className="text-sm text-gray-500 italic max-w-xs truncate mt-1">
                                            "{contact.notes}"
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => handleEdit(contact)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(contact._id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filteredContacts.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                                    No contacts found matching filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
