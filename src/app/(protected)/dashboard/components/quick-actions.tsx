import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/features/components/ui/card";
import { Button } from "@/features/components/ui/button";
import {Search, ShoppingCart, TrendingUp} from "lucide-react";

export default function QuickActions() {
    const actions = [
        {
            id: 1,
            title: "Find Races",
            description: "Browse all available races",
            icon: Search,
            color: "bg-blue-500 hover:bg-blue-600",
            link: "/schedule",
        },
        {
            id: 2,
            title: "Buy Forms",
            description: "Purchase race analysis",
            icon: ShoppingCart,
            color: "bg-emerald-500 hover:bg-emerald-600",
            link: "/pricing", 
        },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Quick Actions
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Link href="/schedule">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-auto py-4 flex flex-col items-center gap-2">
                        <Search className="w-6 h-6" />
                        <div>
                            <div className="font-bold">Find Races</div>
                            <div className="text-xs opacity-90">Browse all available races</div>
                        </div>
                    </Button>
                </Link>

                <Link href="/pricing">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-foreground font-semibold h-auto py-4 flex flex-col items-center gap-2">
                        <ShoppingCart className="w-6 h-6" />
                        <div>
                            <div className="font-bold">Buy Forms</div>
                            <div className="text-xs opacity-90">Purchase race analysis</div>
                        </div>
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
