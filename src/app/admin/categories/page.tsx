'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaPlus } from 'react-icons/fa';

export default function CategoriesPage() {
    const [categories, setCategories] = useState<any[]>([]);
    const [newName, setNewName] = useState('');

    useEffect(() => { fetchCategories(); }, []);

    const fetchCategories = async () => {
        const res = await axios.get('/api/admin/categories');
        setCategories(res.data);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('/api/admin/categories', { name: newName });
        setNewName('');
        fetchCategories();
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Delete?')) return;
        await axios.delete(`/api/admin/categories?id=${id}`);
        fetchCategories();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Categories</h1>

                <form onSubmit={handleAdd} className="bg-white p-6 rounded-lg shadow-md mb-8 flex gap-4">
                    <input
                        className="flex-1 border p-2 rounded"
                        placeholder="New Category Name"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                        required
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
                        <FaPlus /> Add
                    </button>
                </form>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="p-4">Name</th>
                                <th className="p-4">Slug</th>
                                <th className="p-4 w-24">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(cat => (
                                <tr key={cat._id} className="border-b">
                                    <td className="p-4">{cat.name}</td>
                                    <td className="p-4 text-gray-500">{cat.slug}</td>
                                    <td className="p-4">
                                        <button onClick={() => handleDelete(cat._id)} className="text-red-500 hover:text-red-700">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
