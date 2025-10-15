import { Card } from "@/app/components/ui/card";
import {Layers, Calendar1, ShoppingCart} from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import React from "react";

const RemainingCredits = () => {
    const trackCardCredits = 5;
    const formCredits = 2;
    const isSubscribed = false;

    return (
        <Card>
            {/* Header with subscription tag */}
            <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-bold text-foreground">Your Credits</p>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isSubscribed
                            ? "bg-accent/20 text-accent"
                            : "bg-red-100 text-red-600"
                    }`}
                >
          {isSubscribed ? "Subscribed" : "Not Subscribed"}
        </span>
            </div>

            {/* Credits Info */}
            <div className="space-y-4">
                {/* Track Card */}
                <div className="flex items-center justify-between p-4 bg-accent/10 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                            <Layers className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-foreground">Full Card</h4>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-accent">{trackCardCredits}</div>
                        <p className="text-xs text-muted-foreground mt-1">credits remaining</p>
                    </div>
                </div>

                {/* Form Card */}
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <Calendar1 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-foreground">Single Track</h4>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{formCredits}</div>
                        <p className="text-xs text-muted-foreground mt-1">tracks remaining</p>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <Button asChild variant={'outline'} className="w-full mt-4 z-20">
                <Link href="/pricing">
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    Buy More Credits
                </Link>
            </Button>
        </Card>
    );
};

export default RemainingCredits;
