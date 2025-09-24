import React from 'react';
import { ArrowLeft, CreditCard, Lock, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/features/components/ui/card';
import { Button } from '@/features/components/ui/button';
import { Input } from '@/features/components/ui/input';
import { Label } from '@/features/components/ui/label';

export default function CheckoutPage() {
    // Static fake data for demonstration
    const orderDetails = [
        {
            name: 'Premium Racing Analytics (Yearly)',
            price: 299.00,
            originalPrice: 348.00
        },
        {
            name: 'Full Track Cards (x3)',
            price: 30.00
        },
        {
            name: 'Single Race Forms (x5)',
            price: 15.00
        }
    ];

    const total = orderDetails.reduce((sum, item) => sum + item.price, 0);


    return (
        <div className="max-w-4xl mx-auto p-6">
            <Button className="mb-6 bg-gray-600 hover:bg-gray-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Plans
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Order Summary */}
                <Card className="shadow-lg border-0 bg-white sticky top-8">
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {orderDetails.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">{item.name}</span>
                                    <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
                                </div>
                                {item.originalPrice && (
                                    <div className="flex justify-between items-center text-sm text-green-600 mt-1">
                                        <span>Yearly discount</span>
                                        <span>-${(item.originalPrice - item.price).toFixed(2)}</span>
                                    </div>
                                )}
                            </div>
                        ))}

                        <hr className="my-4 border-gray-200" />

                        <div className="flex justify-between items-center text-lg">
                            <span className="font-bold">Total</span>
                            <span className="font-extrabold text-emerald-600">${total.toFixed(2)}</span>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-md p-3 mt-4">
                            <div className="flex items-center text-sm text-green-700">
                                <Shield className="w-4 h-4 mr-2" />
                                <span className="font-medium">You save $49.00 with yearly billing!</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-4 border-t">
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <Shield className="w-5 h-5 text-emerald-600" />
                            <span>30-Day Money-Back Guarantee</span>
                        </div>
                    </CardFooter>
                </Card>

                {/* Payment Form */}
                <Card className="shadow-lg border-0 bg-white">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                            Payment Information
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-2">
                            Complete your purchase securely
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    placeholder="john.doe@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="cardName">Cardholder Name</Label>
                                <Input
                                    id="cardName"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input
                                    id="cardNumber"
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                                <div className="flex gap-2 mt-2">
                                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
                                    <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                                    <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">A</div>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <Label htmlFor="expiry">Expiration Date</Label>
                                    <Input
                                        id="expiry"
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input
                                        id="cvc"
                                        placeholder="123"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="terms" className="w-4 h-4 text-blue-600" />
                                    <label htmlFor="terms" className="text-sm text-gray-600">
                                        I agree to the <span className="text-blue-600 underline cursor-pointer">Terms of Service</span> and <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>
                                    </label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="newsletter" className="w-4 h-4 text-blue-600" />
                                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                                        Subscribe to racing tips and updates
                                    </label>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6 font-semibold"
                                >
                                    <Lock className="w-4 h-4 mr-2" />
                                    Complete Purchase - ${total.toFixed(2)}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-4 text-center border-t">
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                                <Lock className="w-4 h-4" />
                                <span>All transactions are secure and encrypted</span>
                            </div>
                            <div className="text-xs text-gray-400">
                                Powered by Stripe • Your payment information is protected
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}