'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

export default function ArticlesPage() {
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const res = await axios.get('/api/admin/articles');
            setArticles(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this article?')) return;
        try {
            await axios.delete(`/api/admin/articles/${id}`);
            fetchArticles();
        } catch (err) {
            alert('Failed to delete');
        }
    };

    if (loading) return <div className="p-8">Loading articles...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Articles</h1>
                    <Link
                        href="/admin/articles/create"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                    >
                        <FaPlus /> Create New
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="p-4">Title</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Published Date</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {articles.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-gray-500">No articles found. Create one!</td>
                                </tr>
                            ) : (
                                articles.map((article) => (
                                    <tr key={article._id} className="hover:bg-gray-50">
                                        <td className="p-4 font-medium text-gray-900">{article.title}</td>
                                        <td className="p-4 text-gray-600">{article.category?.name || 'Uncategorized'}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold
                                                ${article.isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                {article.isPublished ? 'Published' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-500">
                                            {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : '-'}
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-3">
                                                <Link href={`/admin/articles/${article._id}`} className="text-blue-500 hover:text-blue-700">
                                                    <FaEdit size={18} />
                                                </Link>
                                                <button onClick={() => handleDelete(article._id)} className="text-red-400 hover:text-red-600">
                                                    <FaTrash size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
