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
import { Button } from "@/app/components/ui/button";
import type { Track } from "@/features/types";

interface TrackHeaderProps {
    track: Track;
}

const TrackHeader: React.FC<TrackHeaderProps> = ({ track }) => {
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
                        <BreadcrumbPage>{track.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Header info */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {/* Track name */}
                    <h1 className="text-4xl font-extrabold">{track.name}</h1>

                    {/* Races count */}
                    <span className="text-gray-500 text-sm">
                        {track.races?.length ?? 0} Races
                    </span>

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
                    <Button variant="ghost" className="text-xs">
                        Buy Single Race
                    </Button>
                    <BuyAllDialog />
                </div>
            </div>
        </div>
    );
};

export default TrackHeader;
