import React from "react";
import RecentPurchases from "./components/recent-purchases";
import PageWrapper from "@/features/components/layout/page-wrapper";
import QuickActions from "./components/quick-actions";

const Dashboard = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold">Welcome Back, Mark!</h1>
                <p className="text-gray-600">
                    Check out your saved racing and racing happening today.
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    <RecentPurchases />
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <QuickActions />

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
