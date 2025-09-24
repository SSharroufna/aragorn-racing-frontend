"use client";

import * as React from "react";
// import { useAuth } from "react-oidc-context";
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbSeparator,
//     BreadcrumbPage,
// } from "@/features/components/layout/breadcrumb";
import BuyAllDialog from "@/app/track/components/buy-all-races";

const TrackHeader = () => {

    return (
        <div>
            {/*<Breadcrumb className="mb-4">*/}
            {/*    <BreadcrumbList>*/}
            {/*        <BreadcrumbItem>*/}
            {/*            <BreadcrumbLink href="/schedule">Find Races</BreadcrumbLink>*/}
            {/*            <BreadcrumbSeparator />*/}
            {/*        </BreadcrumbItem>*/}

            {/*        <BreadcrumbItem>*/}
            {/*            <BreadcrumbPage>Track Details</BreadcrumbPage>*/}
            {/*        </BreadcrumbItem>*/}
            {/*    </BreadcrumbList>*/}
            {/*</Breadcrumb>*/}

            {/* Track title + total races */}
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-bold">Florida Downs Turf</h1>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">
              15 Races
            </span>
                    </div>
                    {/* Subtitle */}
                    <p className="text-gray-600">
                        Check races, review details, and save your observations.
                    </p>
                </div>

                {/* Pass login state to BuyAllDialog */}
                <BuyAllDialog />
            </div>
        </div>
    );
};

export default TrackHeader;
