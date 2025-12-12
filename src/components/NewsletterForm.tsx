'use client';

import { useState } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await axios.post('/api/newsletter', { email });
            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Newsletter subscription failed', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-green-400 font-medium p-2 bg-green-900/30 rounded border border-green-800">
                Thanks for subscribing!
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
            />
            <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded transition-colors disabled:opacity-50"
            >
                {status === 'loading' ? <Loader2 className="animate-spin w-5 h-5" /> : 'Subscribe'}
            </button>
        </form>
    );
}
