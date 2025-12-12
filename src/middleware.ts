import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value;
    const { pathname } = request.nextUrl;

    // Protect Admin Routes
    if (pathname.startsWith('/admin')) {
        // For now, just checking if token exists. 
        // In a real app, you might decode JWT here or call an API to verify role.
        // But middleware edge runtime has limitations with some JWT libs.
        // Basic check:
        if (!token) {
            // Fallback check for old simple admin cookie (legacy support during transition)
            const simpleAdmin = request.cookies.get('admin_session')?.value;
            if (simpleAdmin === 'true') return NextResponse.next();

            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }

    // Protect User Dashboard
    if (pathname.startsWith('/dashboard')) {
        if (!token) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/dashboard/:path*'],
};
