'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUsers, FaEnvelopeOpenText, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await axios.post('/api/auth/logout');
            router.push('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const navItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: <FaTachometerAlt /> },
        // You can break down contacts/newsletters into separate pages if desired, 
        // but for now they are tabs in dashboard. 
        // Adding dummy links if we want to expand later.
    ];

    return (
        <div className="md:flex md:flex-col md:w-64 bg-gray-900 min-h-screen text-white">
            <div className="flex items-center justify-center p-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold text-yellow-500">Admin Panel</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === item.path
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-800">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-gray-800 hover:text-red-300 rounded-lg transition-colors"
                >
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </div>
    );
}
