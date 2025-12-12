import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_do_not_use_in_production';

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
        return NextResponse.json({ user: null });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return NextResponse.json({ user: decoded });
    } catch {
        return NextResponse.json({ user: null });
    }
}
