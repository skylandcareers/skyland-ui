'use client';

import { useEffect, useState } from 'react';
import ArticleForm from '@/components/admin/ArticleForm';
import axios from 'axios';

export default function EditArticlePage({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/admin/articles/${params.id}`)
            .then(res => setArticle(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [params.id]);

    if (loading) return <div className="p-8">Loading...</div>;
    if (!article) return <div className="p-8">Article not found</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Article</h1>
                <ArticleForm initialData={article} isEdit />
            </div>
        </div>
    );
}
