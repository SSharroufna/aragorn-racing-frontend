'use client';

import * as React from "react";
import { Button } from "@/features/components/ui/button";
import { Card } from "@/features/components/ui/card";
import LayoutDisplay from "@/app/schedule/components/layout-display";
import RacesTable  from "./races-table";
import RacesGrid from "@/app/schedule/components/race-cards-grid";
import { Eye, Ticket } from "lucide-react";
import Image from "next/image";

const filteredRaces = [
    { id: 1, name: "Race 1", purse: 100000 },
    { id: 2, name: "Race 2", purse: 80000 },
    { id: 3, name: "Race 3", purse: 60000 },
];

export function AvailableRaces() {
    const [layout, setLayout] = React.useState<"grid" | "list">("list");

    return (
        <Card className="p-10 space-y-4">
            <div className="flex justify-between md:flex-row md:items-center gap-4">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                    <h2 className="text-2xl font-bold">Digital Downs</h2>
                    <span className="text-muted-foreground text-lg font-medium">
                      Sep 26, 2025
                    </span>
                </div>

                <LayoutDisplay
                    layout={layout}
                    setLayout={setLayout}
                    total={filteredRaces.length}
                />
            </div>

            <Image src="/horseracing_banner.jpg" alt="Digital Downs" width={1100} height={200} className="rounded"/>


            {/*<Input placeholder="Search races..." />*/}
                {layout === "list" ? (
                        <div className="overflow-hidden rounded-md border">
                    <RacesTable />
                        </div>
                ) : (
                  <RacesGrid/>
                )}


            <div className="flex items-center justify-end space-x-2 py-2">
                <div className="text-muted-foreground flex-1 text-sm ">
                    5 of 15 row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                        View All
                    </Button>
                    <Button  size="sm">
                        <Ticket className=" h-4 w-4" />
                        Buy All
                    </Button>
                </div>
            </div>
        </Card>
    );
}
