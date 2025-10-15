'use client';

import * as React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/app/components/layout/breadcrumb";
import BuyAllDialog from "@/app/site/components/buy-all-races";

import type { Site } from "@/features/types";

interface TrackHeaderProps {
    site: Site;
}

const TrackHeader: React.FC<TrackHeaderProps> = ({ site }) => {
    return (
        <div>
            {/* Breadcrumb */}
            <Breadcrumb className="mb-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/schedule">Find Races</BreadcrumbLink>
                        <BreadcrumbSeparator />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbPage>{site.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Header info */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {/* Track name */}
                    <h1 className="text-4xl font-extrabold">{site.name}</h1>

                    {/* Date */}
                    <p className="text-md text-gray-500">
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                        })}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <BuyAllDialog />
                </div>
            </div>
        </div>
    );
};

export default TrackHeader;
