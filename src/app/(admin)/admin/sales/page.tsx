'use client';

import { useState } from 'react';
import axios from 'axios';
import { FaMoneyBillWave, FaUserPlus, FaCheckCircle } from 'react-icons/fa';

export default function SalesEntryPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        jobCategory: 'PR Visa', // Reusing existing categories as "Service Type"
        revenue: '',
        status: 'Converted', // Default to Converted for a Sale
        notes: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            // We use the existing contacts API to create a new contact with revenue
            await axios.post('/api/admin/contacts', {
                ...formData,
                revenue: Number(formData.revenue)
            });
            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                jobCategory: 'PR Visa',
                revenue: '',
                status: 'Converted',
                notes: ''
            });
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            console.error('Failed to create sale', error);
            alert('Failed to record sale. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-green-100 rounded-lg text-green-600">
                            <FaMoneyBillWave size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">New Sales Entry</h1>
                            <p className="text-gray-500 text-sm">Record a new client sale or revenue entry.</p>
                        </div>
                    </div>

                    {success && (
                        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg flex items-center gap-2">
                            <FaCheckCircle /> Sale recorded successfully!
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                                    placeholder="+1 234 567 8900"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Service / Visa Type</label>
                                <select
                                    value={formData.jobCategory}
                                    onChange={e => setFormData({ ...formData, jobCategory: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                                >
                                    <option value="PR Visa">PR Visa</option>
                                    <option value="Student Visa">Student Visa</option>
                                    <option value="Tourist Visa">Tourist Visa</option>
                                    <option value="Work Permit">Work Permit</option>
                                    <option value="Business Visa">Business Visa</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Revenue Amount ($)</label>
                                <input
                                    type="number"
                                    required
                                    min="0"
                                    value={formData.revenue}
                                    onChange={e => setFormData({ ...formData, revenue: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                            <textarea
                                rows={3}
                                value={formData.notes}
                                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                                placeholder="Any additional details about the sale..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-lg font-bold text-white transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 hover:shadow-lg'}`}
                        >
                            {loading ? 'Recording...' : 'Record Sale'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
