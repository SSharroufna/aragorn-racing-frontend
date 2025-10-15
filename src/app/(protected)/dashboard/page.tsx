import React from "react";
import {
    Crown, Search
} from "lucide-react";
import QuickActions from "@/app/(protected)/dashboard/components/quick-actions";
import RecentPurchases from "@/app/(protected)/dashboard/components/recent-purchases";
import RemainingCredits from "@/app/site/components/credits-remining";
import Link from "next/link";
import {Button} from "@/app/components/ui/button";
import PageWrapper from "@/app/components/layout/page-wrapper";

export default function Dashboard() {

    return (
        <PageWrapper>
            {/* Header with gradient */}
            <div>
                <div className="space-y-2">
                        <h1 className="text-4xl font-bold text-foreground">
                            Welcome Back, Mark!
                        </h1>
                        <p className="text-md text-muted-foreground">
                            Check out your upcoming races, available credits, and explore new tracks.
                        </p>
                    </div>
                </div>

                {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                {/* Left Column - Recent Purchases */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Recent Purchases */}
                    <RecentPurchases/>
                </div>

                {/* Right Column - Quick Actions & Stats */}
                <div className="space-y-6">
                    {/* Track Card Pass */}
                    <RemainingCredits/>

                    {/* Quick Actions */}
                    {/*<QuickActions />*/}
                </div>
            </div>
        </PageWrapper>
    );
}