'use client';

import * as React from "react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import LayoutDisplay from "@/app/schedule/components/layout-display";
import RacesTable from "./races-table";
import RacesGrid from "@/app/schedule/components/race-cards-grid";
import { Eye } from "lucide-react";
import Image from "next/image";
import BuyAllDialog from "@/app/site/components/buy-all-races";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { router } from "next/client";
import { Site } from "@/features/types";

interface FilteredRacesProps {
    selectedSite?: Site;
    selectedDate: Date;
}

export function FilteredRaces({ selectedSite, selectedDate }: FilteredRacesProps) {
    const [layout, setLayout] = React.useState<"list" | "grid">("list");
    const [selectedTrackId, setSelectedTrackId] = React.useState<string>(
        selectedSite?.tracks[0]?.id ?? ""
    );

    // Find the selected track object
    const selectedTrack = selectedSite?.tracks.find(track => track.id === selectedTrackId);

    // Get races for the selected track
    const races = selectedSite?.tracks
        .find(track => track.id === selectedTrackId)?.races ?? [];

    if (!selectedSite) {
        return (
            <Card className="p-6 md:p-10 space-y-2">
                <div>Please select a site to see available races.</div>
            </Card>
        );
    }

    return (
        <Card className="p-6 md:p-10 space-y-2">
            {/* Header */}
            <div className="flex sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <h2 className="text-2xl font-bold">{selectedSite.name}</h2>
                    <span className="text-muted-foreground text-lg font-medium">
                          {(() => {
                              const today = new Date();
                              const tomorrow = new Date();
                              tomorrow.setDate(today.getDate() + 1);

                              const dateToCheck = selectedDate ?? today; // use today if no date selected

                              const isSameDay = (d1: Date, d2: Date) =>
                                  d1.getFullYear() === d2.getFullYear() &&
                                  d1.getMonth() === d2.getMonth() &&
                                  d1.getDate() === d2.getDate();

                              if (isSameDay(dateToCheck, today)) return "Today";
                              if (isSameDay(dateToCheck, tomorrow)) return "Tomorrow";

                              return dateToCheck.toLocaleDateString(undefined, {
                                  weekday: "short",
                                  month: "short",
                                  day: "numeric",
                              });
                          })()}
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
                    alt={selectedSite.name}
                    width={1100}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

            {/* Track Tabs */}
            {selectedSite.tracks && (
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
                        {selectedSite.tracks.length} track{selectedSite.tracks.length > 1 ? "s" : ""} available
                    </span>
                </div>
            )}

            {/* Races Table/Grid */}
            <div>
                {layout === "list" ? (
                    <div className="overflow-hidden rounded-md border">
                        <RacesTable races={races} selectedTrack={selectedTrack} />
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
                    {selectedTrack && (
                        <Button
                            variant="outline"
                            className="flex items-center gap-1 pointer-events-auto"
                            onClick={() => router.push(`/site`)}
                        >
                            <Eye className="h-4 w-4" />
                            View Entries
                        </Button>
                    )}
                    <BuyAllDialog />
                </div>
            </div>
        </Card>
    );
}
