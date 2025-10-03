"use client";

import * as React from "react";
import { useAuth } from "react-oidc-context";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/features/components/layout/breadcrumb";
import BuyAllDialog from "@/app/track/components/buy-all-races";

const TrackHeader = () => {

    return (
        <div>
            <Breadcrumb className="mb-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/schedule">Find Races</BreadcrumbLink>
                        <BreadcrumbSeparator />
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbPage>Track Details</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Track title + total races */}
            <div className="flex justify-between">
                <div className="flex justify-between items-center gap-4">
                    <h1 className="text-4xl font-extrabold">Digital Downs</h1>
                    {/* Date & Day */}
                    <p className="text-md text-gray-500">
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                        })}
                    </p>
                </div>


                {/* Pass login state to BuyAllDialog */}
                <BuyAllDialog />
            </div>
        </div>
    );
};

export default TrackHeader;
