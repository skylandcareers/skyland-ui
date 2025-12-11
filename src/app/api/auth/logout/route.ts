import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');
    // Also clear the old simple admin cookie if it exists
    cookieStore.delete('admin_session');

    return NextResponse.json({ message: 'Logged out successfully' });
}
