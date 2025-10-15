"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Clock, Calendar, Trophy } from "lucide-react";

// Mock data
const recentPurchases = [
    {
        id: 1,
        track: "PFL Park",
        site: "Photo Finish Live",
        siteId: "photo-finish",
        date: "2025-10-15",
        time: "3:00 PM",
        purse: 750000,
        logo: "/photo-finish.png",
    },
    {
        id: 2,
        track: "Main Street Track",
        site: "Photo Finish Live",
        siteId: "photo-finish",
        date: "2025-10-16",
        time: "4:00 PM",
        purse: 1000000,
        logo: "/photo-finish.png",
    },
    {
        id: 3,
        track: "Digital Downs Main Track",
        site: "Digital Downs",
        siteId: "digital-downs",
        date: "2025-10-16",
        time: "5:30 PM",
        purse: 1500000,
        logo: "/digital-downs.png",
    },
];

// Format date as "Oct 15"
const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
};

// Utility: Calculate days until race
const getDaysUntil = (dateStr: string) => {
    const raceDate = new Date(dateStr);
    const today = new Date();
    const diffTime = raceDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Utility: Tag label + subtle color
const getDayTag = (daysUntil: number) => {
    if (daysUntil === 0) return { label: "Today", color: "bg-primary/10 text-primary border-primary/30" };
    if (daysUntil === 1) return { label: "Tomorrow", color: "bg-accent/10 text-accent border-accent/30" };
    if (daysUntil > 1) return { label: `In ${daysUntil} days`, color: "bg-muted/20 text-muted-foreground border-muted/30" };
    return { label: "Past", color: "bg-background/30 text-muted-foreground border-muted/20" };
};

export default function RecentPurchases() {
    // Group tracks by site
    const groupedBySite = recentPurchases.reduce((acc: any, curr) => {
        if (!acc[curr.siteId]) acc[curr.siteId] = { ...curr, tracks: [] };
        acc[curr.siteId].tracks.push(curr);
        return acc;
    }, {});

    const groupedArray = Object.values(groupedBySite);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                    <Clock className="w-6 h-6 text-primary" />
                    <h1 className="text-black">Your Purchased Tracks</h1>
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {groupedArray.map((site: any) => {
                    const trackCount = site.tracks.length;
                    const firstTrack = site.tracks[0];
                    const daysUntil = getDaysUntil(firstTrack.date);
                    const tag = getDayTag(daysUntil);

                    return (
                        <div
                            key={site.siteId}
                            className="relative p-6 rounded-xl border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-background to-primary/5 transition-all duration-300 hover:shadow-md"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex gap-2 items-center">
                                    <Image
                                        src={site.logo}
                                        alt={`${site.site} logo`}
                                        width={72}
                                        height={72}
                                        className="rounded-md object-contain"
                                    />
                                    <div className={'flex gap-2 items-center'}>
                                        <h4 className="font-bold text-lg text-foreground">{site.site}</h4>
                                        {trackCount > 1 && <p className="text-sm text-muted-foreground">{trackCount} Tracks</p>}
                                    </div>
                                </div>

                                <Badge className={`${tag.color} font-semibold border transition-colors duration-200`}>
                                    {tag.label}
                                </Badge>
                            </div>

                            {/* Table Header */}
                            <div className="grid grid-cols-3 text-sm font-semibold text-muted-foreground border-b border-gray-300 pb-1">
                                <div>Track</div>
                                <div>Date</div>
                                <div>Purse</div>
                            </div>

                            {/* Tracks Table */}
                            <div className="space-y-1">
                                {site.tracks.map((track: any, index: number) => {
                                    const rowBg = index % 2 === 0 ? "bg-white" : "bg-gray-100";
                                    return (
                                        <div key={track.id} className={`grid grid-cols-3 items-center text-sm p-2 rounded ${rowBg}`}>
                                            <div className="flex items-center gap-2">
                                                <Trophy className="w-4 h-4 text-primary" />
                                                <span>{track.track}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                <span>{formatDate(track.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Trophy className="w-4 h-4 text-primary" />
                                                <span>${track.purse.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Button */}
                            <Button asChild size="sm" className="w-full mt-4">
                                <Link href={`/site/${site.siteId}`}>View Site Details</Link>
                            </Button>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
}
