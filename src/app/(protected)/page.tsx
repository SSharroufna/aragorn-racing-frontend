"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Main() {
    const router = useRouter();

    useEffect(() => {
        router.push('/dashboard');
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-6">
            <p>Redirecting to dashboard...</p>
        </div>
    );
}