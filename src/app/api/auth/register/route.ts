import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
    try {
        const { name, phone, password } = await req.json();

        if (!name || !phone || !password) {
            return NextResponse.json(
                { error: 'Name, Phone, and Password are required' },
                { status: 400 }
            );
        }

        await dbConnect();

        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return NextResponse.json(
                { error: 'User with this phone number already exists' },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            phone,
            password: hashedPassword,
            role: 'user', // Default role
        });

        return NextResponse.json(
            { message: 'User registered successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
