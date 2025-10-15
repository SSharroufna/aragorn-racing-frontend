'use client';

import * as React from "react";
import { Button } from "@/features/components/ui/button";
import { Card } from "@/features/components/ui/card";
import LayoutDisplay from "@/app/schedule/components/layout-display";
import RacesTable from "./races-table";
import RacesGrid from "@/app/schedule/components/race-cards-grid";
import { Eye } from "lucide-react";
import Image from "next/image";
import BuyAllDialog from "@/app/track/components/buy-all-races";
import { sites } from "@/lib/data";
import { Tabs, TabsList, TabsTrigger } from "@/features/components/ui/tabs";

export function AvailableRaces() {
    const [layout, setLayout] = React.useState<"grid" | "list">("list");

    // Mocked selected site for now ("Digital Downs")
    const selectedSite = sites.find(site => site.id === "digital-downs");

    const [selectedTrackId, setSelectedTrackId] = React.useState(
        selectedSite?.tracks[0]?.id ?? ""
    );

    const selectedTrack = selectedSite?.tracks.find(
        track => track.id === selectedTrackId
    );

    const races = selectedTrack?.races ?? [];

    return (
        <Card className="p-6 md:p-10 space-y-2">
            {/* Header */}
            <div className="flex sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <h2 className="text-2xl font-bold">{selectedSite?.name}</h2>
                    <span className="text-muted-foreground text-lg font-medium">
                        Sep 26, 2025
                    </span>
                </div>

                <div className="relative z-20">
                    <LayoutDisplay layout={layout} setLayout={setLayout} total={races.length} />
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

            {/* Track Tabs */}
            {selectedSite?.tracks && (
                <div className="flex items-center gap-2 relative z-10">
                    <Tabs value={selectedTrackId} onValueChange={setSelectedTrackId}>
                        <TabsList className="overflow-x-auto whitespace-nowrap no-scrollbar">
                            {selectedSite.tracks.map(track => (
                                <TabsTrigger key={track.id} value={track.id}>
                                    {track.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>

                    <span className="text-muted-foreground text-sm">
                        {selectedSite.tracks.length} track{selectedSite.tracks.length > 1 ? 's' : ''} available
                    </span>
                </div>
            )}


            {/* Races Table/Grid */}
            <div>
                {layout === "list" ? (
                    <div className="overflow-hidden rounded-md border">
                        <RacesTable races={races} />
                    </div>
                ) : (
                    <RacesGrid races={races} />
                )}
            </div>

            {/* Footer actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-4 z-10">
                <div className="text-muted-foreground text-sm">
                    {races.length} race(s) listed.
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        className="flex items-center gap-1 pointer-events-auto"
                    >
                        <Eye className="h-4 w-4" />
                        View Entries
                    </Button>
                    <BuyAllDialog />
                </div>
            </div>
        </Card>
    );
}
