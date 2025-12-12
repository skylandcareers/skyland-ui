'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import RichTextEditor from '../RichTextEditor';

interface ArticleFormProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialData?: any;
    isEdit?: boolean;
}

export default function ArticleForm({ initialData, isEdit }: ArticleFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
    const [tags, setTags] = useState<{ _id: string; name: string }[]>([]);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        image: '',
        category: '',
        tags: [] as string[],
        isPublished: false,
    });

    useEffect(() => {
        // Fetch dependencies
        const fetchData = async () => {
            const [catRes, tagRes] = await Promise.all([
                axios.get('/api/admin/categories'),
                axios.get('/api/admin/tags')
            ]);
            setCategories(catRes.data);
            setTags(tagRes.data);
        };
        fetchData();

        if (initialData) {
            setFormData({
                title: initialData.title || '',
                slug: initialData.slug || '',
                excerpt: initialData.excerpt || '',
                content: initialData.content || '',
                image: initialData.image || '',
                category: initialData.category || '',
                tags: initialData.tags || [],
                isPublished: initialData.isPublished || false,
            });
        }
    }, [initialData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isEdit) {
                await axios.put(`/api/admin/articles/${initialData?._id}`, formData);
            } else {
                await axios.post('/api/admin/articles', formData);
            }
            router.push('/admin/articles');
        } catch {
            alert('Failed to save article');
        } finally {
            setLoading(false);
        }
    };

    const toggleTag = (tagId: string) => {
        setFormData(prev => {
            const newTags = prev.tags.includes(tagId)
                ? prev.tags.filter(t => t !== tagId)
                : [...prev.tags, tagId];
            return { ...prev, tags: newTags };
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Title</label>
                    <input
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Slug</label>
                    <input
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        placeholder="auto-generated-if-empty"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Excerpt</label>
                <textarea
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none h-20"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Content</label>
                <div className="prose-sm">
                    {/* Lazy load if needed to avoid SSR issues with some editors */}
                    <RichTextEditor
                        value={formData.content}
                        onChange={(val) => setFormData({ ...formData, content: val })}
                        placeholder="Article content..."
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Category</label>
                    <select
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                            <option key={cat._id} value={cat._id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Image URL</label>
                    <input
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="/blog/exmaple.jpg"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block mb-2">Tags</label>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <button
                            key={tag._id}
                            type="button"
                            onClick={() => toggleTag(tag._id)}
                            className={`px-3 py-1 rounded-full text-sm border transition-colors
                                ${formData.tags.includes(tag._id)
                                    ? 'bg-blue-100 border-blue-300 text-blue-700'
                                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                        >
                            {tag.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="published"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                    className="w-4 h-4 text-blue-600"
                />
                <label htmlFor="published" className="text-sm font-medium text-gray-700">Publish Article immediately</label>
            </div>

            <div className="flex gap-4 pt-4">
                <Link href="/admin/articles" className="px-6 py-2 rounded-lg border text-gray-600 hover:bg-gray-50">
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading ? 'Saving...' : 'Save Article'}
                </button>
            </div>
        </form>
    );
}
