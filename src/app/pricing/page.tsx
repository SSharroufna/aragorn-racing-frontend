'use client';
import React, { useState } from 'react';
import { Crown, ShoppingCart, Check, Minus, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';


export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [trackQuantity, setTrackQuantity] = useState(1);
    const [formQuantity, setFormQuantity] = useState(1);
    const router = useRouter();

    const subscriptionFeatures = [
        'Unlimited Tracks',
        'Unlimited Race Forms',
        'Notes Sync Across Devices',
        'Priority Support',
    ];

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Find Your Perfect Plan
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Whether you&#39;re a daily handicapper or a casual fan, we have a plan that fits your style.
                </p>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-center space-x-4">
                <Label htmlFor="billing-cycle" className={`font-medium ${billingCycle === 'monthly' ? 'text-emerald-700' : 'text-gray-600'}`}>
                    Monthly
                </Label>
                <Switch
                    id="billing-cycle"
                    checked={billingCycle === 'yearly'}
                    onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
                />
                <Label htmlFor="billing-cycle" className={`font-medium ${billingCycle === 'yearly' ? 'text-emerald-700' : 'text-gray-600'}`}>
                    Yearly
                </Label>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">Save 15%</Badge>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                {/* Subscription Plan */}
                <Card className="shadow-2xl border-2 border-emerald-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-green-500" />
                    <Badge className="absolute top-6 right-6 bg-emerald-500 text-white">Recommended</Badge>
                    <CardHeader className="text-center pt-10">
                        <Crown className="w-12 h-12 mx-auto text-emerald-500 mb-4" />
                        <CardTitle className="text-2xl font-bold">Subscription</CardTitle>
                        <CardDescription>The ultimate plan for serious handicappers.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center">
              <span className="text-5xl font-extrabold text-gray-900">
                {billingCycle === 'monthly' ? '$29' : '$299'}
              </span>
                            <span className="text-gray-500">
                {billingCycle === 'monthly' ? '/month' : '/year'}
              </span>
                        </div>
                        <ul className="space-y-3">
                            {subscriptionFeatures.map((feature, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6">
                            Subscribe Now
                        </Button>
                    </CardFooter>
                </Card>

                {/* Pay-As-You-Go Plan */}
                <Card className="shadow-lg border-0 bg-white">
                    <CardHeader className="text-center pt-10">
                        <ShoppingCart className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                        <CardTitle className="text-2xl font-bold">Pay-As-You-Go</CardTitle>
                        <CardDescription>Flexible access for occasional players.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Track Cards Item */}
                        <div className="rounded-lg border bg-gray-50 p-4 space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-900">Full Track Cards</h4>
                                    <p className="text-sm text-gray-600">$10.00 / track</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setTrackQuantity(q => Math.max(1, q - 1))}>
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <Input type="number" value={trackQuantity} readOnly className="w-12 h-8 text-center" />
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setTrackQuantity(q => q + 1)}>
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="font-bold text-lg text-gray-800">Total: ${(10 * trackQuantity).toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Race Forms Item */}
                        <div className="rounded-lg border bg-gray-50 p-4 space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-900">Single Race Forms</h4>
                                    <p className="text-sm text-gray-600">$3.00 / form</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setFormQuantity(q => Math.max(1, q - 1))}>
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <Input type="number" value={formQuantity} readOnly className="w-12 h-8 text-center" />
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setFormQuantity(q => q + 1)}>
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="font-bold text-lg text-gray-800">Total: ${(3 * formQuantity).toFixed(2)}</span>
                            </div>
                        </div>

                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={() => router.push('/checkout')}
                            variant="outline"
                            className="w-full text-lg py-6 border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                        >
                            Proceed to Checkout
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
