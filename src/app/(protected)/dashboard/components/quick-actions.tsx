import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/features/components/ui/card";
import { Button } from "@/features/components/ui/button";
import { Search, ShoppingCart, FileText, Calendar, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuickActions() {
    const actions = [
        {
            id: 1,
            title: "Find Races",
            description: "Browse all available races",
            icon: Search,
            color: "bg-blue-500 hover:bg-blue-600"
        },
        {
            id: 2,
            title: "Buy Forms",
            description: "Purchase race analysis",
            icon: ShoppingCart,
            color: "bg-emerald-500 hover:bg-emerald-600"
        }
    ];

    return (
        <Card className="shadow-lg border-0 bg-white">
            <CardHeader>
                <CardTitle className="text-lg flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                    Quick Actions
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6">
                    {actions.map((action) => {
                        const IconComponent = action.icon;
                        return (
                                <Button
                                    className={`w-full h-auto p-4 ${action.color} text-white flex flex-col items-center space-y-2`}
                                >
                                    <IconComponent className="w-6 h-6" />
                                    <div className="text-center">
                                        <div className="font-semibold text-sm">{action.title}</div>
                                        <div className="text-xs opacity-90">{action.description}</div>
                                    </div>
                                </Button>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}