'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            await axios.post('/api/auth/register', formData);
            router.push('/auth/login?registered=true');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.response?.data?.error || 'Registration failed');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="border-t-4 border-t-blue-500 shadow-xl">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center text-blue-600">Create Account</CardTitle>
                <CardDescription className="text-center">
                    Join Skyland Immigration today
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {error && (
                    <div className="bg-red-50 text-red-500 p-3 rounded text-sm text-center border border-red-200">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 font-semibold text-white" disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Create Account'}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Separator />
                <p className="text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-blue-500 hover:underline font-medium">
                        Sign in
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
