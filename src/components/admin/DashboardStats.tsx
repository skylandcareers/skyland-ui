'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers, FaAddressBook, FaEnvelopeOpenText, FaNewspaper, FaTags, FaLayerGroup } from 'react-icons/fa';

export default function DashboardStats() {
    const [stats, setStats] = useState({
        users: 0,
        contacts: 0,
        newsletter: 0,
        articles: 0,
        categories: 0,
        tags: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/admin/stats')
            .then(res => setStats(res.data))
            .catch(err => console.error('Failed to load stats', err))
            .finally(() => setLoading(false));
    }, []);

    const cards = [
        { label: 'Total Users', value: stats.users, icon: <FaUsers />, color: 'bg-blue-500' },
        { label: 'Contacts', value: stats.contacts, icon: <FaAddressBook />, color: 'bg-green-500' },
        { label: 'Subscribers', value: stats.newsletter, icon: <FaEnvelopeOpenText />, color: 'bg-purple-500' },
        { label: 'Articles', value: stats.articles, icon: <FaNewspaper />, color: 'bg-orange-500' },
        { label: 'Categories', value: stats.categories, icon: <FaLayerGroup />, color: 'bg-indigo-500' },
        { label: 'Tags', value: stats.tags, icon: <FaTags />, color: 'bg-pink-500' },
    ];

    if (loading) return <div className="p-4 text-center">Loading stats...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {cards.map((card, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 transition-transform hover:scale-105">
                    <div className={`p-4 rounded-full text-white text-2xl ${card.color}`}>
                        {card.icon}
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm font-medium">{card.label}</p>
                        <h3 className="text-2xl font-bold text-gray-800">{card.value}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
