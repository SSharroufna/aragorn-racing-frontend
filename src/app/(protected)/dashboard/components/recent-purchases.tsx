import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Heart, MapPin } from "lucide-react";
import { Clock, Calendar, Trophy } from "lucide-react";
import { Button } from "@/app/components/ui/button";

// Mock data for recent purchases
const recentPurchases = [
    {
        id: 1,
        raceName: "Santa Anita Derby",
        track: "Santa Anita Park",
        date: "2025-10-05",
        time: "3:00 PM",
        purse: 750000,
        purchased: "2025-10-02"
    },
    {
        id: 2,
        raceName: "Belmont Stakes",
        track: "Belmont Park",
        date: "2025-10-08",
        time: "5:30 PM",
        purse: 1500000,
        purchased: "2025-10-01"
    },
    {
        id: 3,
        raceName: "Kentucky Derby Prep",
        track: "Churchill Downs",
        date: "2025-10-12",
        time: "4:15 PM",
        purse: 600000,
        purchased: "2025-09-28"
    },
];

// Calculate days until race
const getDaysUntil = (dateStr: string) => {
    const raceDate = new Date(dateStr);
    const today = new Date();
    const diffTime = raceDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

export default function RecentPurchases() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                    <Clock className="w-6 h-6 text-primary" />
                    Purchased Racing Forms
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {recentPurchases.map((purchase) => {
                    const daysUntil = getDaysUntil(purchase.date);
                    const isUpcoming = daysUntil >= 0;

                    return (
                        <div
                            key={purchase.id}
                            className="p-4 rounded-xl border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-background to-primary/5 transition-all duration-300 hover:shadow-md"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg text-foreground mb-1">
                                        {purchase.raceName}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span className="font-medium">{purchase.track}</span>
                                    </div>
                                </div>
                                {isUpcoming && (
                                    <Badge className="bg-accent/20 text-foreground border-accent/40 font-semibold">
                                        {daysUntil === 0 ? "Today" : daysUntil === 1 ? "Tomorrow" : `${daysUntil} days`}
                                    </Badge>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span className="font-medium">{purchase.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span className="font-medium">{purchase.time}</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <Trophy className="w-4 h-4 text-accent" />
                                    <span className="font-bold text-accent">
                                                    ${purchase.purse.toLocaleString()}
                                                </span>
                                </div>
                            </div>

                            <Button
                                className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                size="sm"
                            >
                                View Race Form
                            </Button>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
}