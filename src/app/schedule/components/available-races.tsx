'use client';

import * as React from "react";
import { Button } from "@/features/components/ui/button";
import { Card } from "@/features/components/ui/card";
import LayoutDisplay from "@/app/schedule/components/layout-display";
import RacesTable from "./races-table";
import RacesGrid from "@/app/schedule/components/race-cards-grid";
import { Eye, Ticket } from "lucide-react";
import Image from "next/image";
import BuyAllDialog from "@/app/track/components/buy-all-races";

const filteredRaces = [
    { id: 1, name: "Race 1", purse: 100000 },
    { id: 2, name: "Race 2", purse: 80000 },
    { id: 3, name: "Race 3", purse: 60000 },
];

export function AvailableRaces() {
    const [layout, setLayout] = React.useState<"grid" | "list">("list");

    return (
        <Card className="p-6 md:p-10 space-y-6">
            {/* Header */}
            <div className="flex sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <h2 className="text-2xl font-bold">Digital Downs</h2>
                    <span className="text-muted-foreground text-lg font-medium">
            Sep 26, 2025
          </span>
                </div>

                <div className="relative z-20">
                    <LayoutDisplay layout={layout} setLayout={setLayout} total={filteredRaces.length} />
                </div>
            </div>

            {/* Banner */}
            <div className="w-full overflow-hidden rounded-lg">
                <Image
                    src="/horseracing_banner.jpg"
                    alt="Digital Downs"
                    width={1100}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

            {/* Races content */}
            <div>
                {layout === "list" ? (
                    <div className="overflow-hidden rounded-md border">
                        <RacesTable />
                    </div>
                ) : (
                    <RacesGrid />
                )}
            </div>

            {/* Footer actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-4 z-10">
                <div className="text-muted-foreground text-sm">
                    {filteredRaces.length} of 15 row(s) selected.
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 pointer-events-auto"
                    >
                        <Eye className="h-4 w-4" />
                        View All
                    </Button>
                    <BuyAllDialog />
                </div>
            </div>
        </Card>
    );
}
