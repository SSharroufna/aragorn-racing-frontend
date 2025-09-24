'use client';

import * as React from "react";
import { Download } from "lucide-react";
import { Button } from "@/features/components/ui/button";
import { Card } from "@/features/components/ui/card";
import { Input } from "@/features/components/ui/input";
import LayoutDisplay from "@/app/schedule/components/layout-display";
import RacesTable  from "./races-table";
import RacesGrid from "@/app/schedule/components/race-cards-grid";

// Mock filtered races for now (can be passed in as props in real scenario)
const filteredRaces = [
    { id: 1, name: "Race 1", purse: 100000 },
    { id: 2, name: "Race 2", purse: 80000 },
    { id: 3, name: "Race 3", purse: 60000 },
];

export function AvailableRaces() {
    const [layout, setLayout] = React.useState<"grid" | "list">("list");

    return (
        <Card className="p-10 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <Input placeholder="Search races..." />
                <LayoutDisplay layout={layout} setLayout={setLayout} total={filteredRaces.length} />
            </div>


                {layout === "list" ? (
                        <div className="overflow-hidden rounded-md border">
                    <RacesTable />
                        </div>
                ) : (
                  <RacesGrid/>
                )}


            <div className="flex items-center justify-end space-x-2 py-2">
                <div className="text-muted-foreground flex-1 text-sm text-gray-600">
                    5 of 15 row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Buy All
                    </Button>
                </div>
            </div>
        </Card>
    );
}
