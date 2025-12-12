'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Login() {
    const [formData, setFormData] = useState({
        phone: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const registered = searchParams.get('registered');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await axios.post('/api/auth/login', formData);
            const { user } = response.data;

            if (user.role === 'admin' || user.role === 'super_admin') {
                router.push('/admin/dashboard');
            } else {
                router.push('/dashboard');
            }
        } catch (err: any) {
            setError(err.response?.data?.error || 'Login failed');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="border-t-4 border-t-blue-500 shadow-xl">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center text-blue-600">Skyland Login</CardTitle>
                <CardDescription className="text-center">
                    Enter your phone and password to sign in
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {registered && (
                    <div className="bg-green-50 text-green-600 p-3 rounded text-sm text-center border border-green-200">
                        Registration successful! Please login.
                    </div>
                )}
                {error && (
                    <div className="bg-red-50 text-red-500 p-3 rounded text-sm text-center border border-red-200">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="10-digit number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            pattern="\d{10}"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="******"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 font-semibold" disabled={isSubmitting}>
                        {isSubmitting ? 'Signing in...' : 'Sign In'}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Separator />
                <p className="text-center text-sm text-gray-500">
                    Don&apos;t have an account?{' '}
                    <Link href="/auth/register" className="text-blue-500 hover:underline font-medium">
                        Register here
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
