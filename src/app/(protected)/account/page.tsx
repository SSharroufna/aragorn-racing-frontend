'use client';
import React, { useState } from 'react';
import { CheckCircle, Crown, LogOut, CreditCard } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import PageWrapper from "@/app/components/layout/page-wrapper";
import { useAuth } from "react-oidc-context";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AccountPage() {
    const auth = useAuth();
    const router = useRouter();
    const [tab, setTab] = useState<'status' | 'billing'>('status');

    const isSubscribed = true;
    const plan = "Pro Subscription";
    const nextBilling = "Oct 23, 2025";

    useEffect(() => {
        if (auth && !auth.isLoading && !auth.isAuthenticated) {
            router.push("/login");
        }
    }, [auth, router]);

    return (
        <PageWrapper>
            <div className="max-w-3xl mx-auto space-y-10">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
                    <p className="text-gray-600">Manage your subscription and account settings.</p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center space-x-4 border-b pb-2">
                    <Button
                        variant={tab === 'status' ? "default" : "outline"}
                        onClick={() => setTab('status')}
                    >
                        Subscription Status
                    </Button>
                    <Button
                        variant={tab === 'billing' ? "default" : "outline"}
                        onClick={() => setTab('billing')}
                    >
                        Billing
                    </Button>
                </div>

                {/* Tab Content */}
                {tab === 'status' && (
                    <Card className="p-6 shadow-lg">
                        <CardHeader className="space-y-2">
                            <CardTitle className="flex items-center gap-2 text-emerald-700">
                                <Crown className="w-6 h-6 text-yellow-500" />
                                {isSubscribed ? "You are subscribed!" : "Not Subscribed"}
                            </CardTitle>
                            <CardDescription>
                                {isSubscribed
                                    ? `You have an active ${plan}.`
                                    : "Upgrade to unlock premium features."}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {isSubscribed ? (
                                <>
                                    <p className="text-gray-700">
                                        Next billing date: <Badge>{nextBilling}</Badge>
                                    </p>
                                    <Button variant="outline" className="w-full">
                                        Manage Subscription
                                    </Button>
                                </>
                            ) : (
                                <Button
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                                    onClick={() => router.push('/pricing')}
                                >
                                    Subscribe Now
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                )}

                {tab === 'billing' && (
                    <Card className="p-6 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-blue-500" />
                                Billing Info
                            </CardTitle>
                            <CardDescription>
                                {isSubscribed
                                    ? "Here’s your billing information."
                                    : "No billing history available."}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isSubscribed ? (
                                <ul className="text-gray-700 space-y-2">
                                    <li>Plan: {plan}</li>
                                    <li>Next payment: {nextBilling}</li>
                                    <li>Status: <Badge className="bg-green-100 text-green-800">Active</Badge></li>
                                </ul>
                            ) : (
                                <p className="text-gray-500">Subscribe to view billing info.</p>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>
        </PageWrapper>
    );
}
