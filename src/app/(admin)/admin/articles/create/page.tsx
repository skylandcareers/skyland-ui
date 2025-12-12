'use client';

import ArticleForm from '@/components/admin/ArticleForm';

export default function CreateArticlePage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Article</h1>
                <ArticleForm />
            </div>
        </div>
    );
}
