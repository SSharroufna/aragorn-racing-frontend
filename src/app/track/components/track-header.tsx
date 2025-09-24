import * as React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage
} from "@/features/components/layout/breadcrumb";
import { Button } from "@/features/components/ui/button"

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
           <div className={'flex justify-between'}>
                <div className={'flex flex-col gap-1'}>
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-bold">Florida Downs Turf</h1>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                15 Races
                        </span>
                    </div>
                    {/* Subtitle */}
                    <p className="text-gray-600">
                        Check races, review details, and save your observations.
                    </p>
                </div>

                <Button >Buy all</Button>
            </div>
        </div>
)
}

export default TrackHeader;