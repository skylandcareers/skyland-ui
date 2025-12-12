import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Article from '@/models/Article';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_do_not_use_in_production';

async function isAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    if (!token) return false;
    try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        return decoded.role === 'admin' || decoded.role === 'super_admin';
    } catch {
        return false;
    }
}

export async function GET() {
    try {
        await dbConnect();
        // Populate category and tags for display
        const articles = await Article.find({})
            .populate('category', 'name')
            .populate('tags', 'name')
            .sort({ createdAt: -1 });
        return NextResponse.json(articles);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const body = await req.json();
        await dbConnect();

        // Basic validation
        if (!body.title || !body.content || !body.category) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        const article = await Article.create({
            ...body,
            slug,
            author: null, // You might want to get userId from token if needed
        });

        return NextResponse.json(article, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
    }
}
