'use client';

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Site } from "@/features/types";

interface TrackSelectProps {
    tracks: Site['tracks'];
    selectedTrackId: string;
    onChange: (trackId: string) => void;
}

export default function TrackSelect({ tracks, selectedTrackId, onChange }: TrackSelectProps) {
    if (!tracks || tracks.length === 0) return null;

    return (
        <div className="flex items-center gap-2 relative z-10">
            <Tabs value={selectedTrackId} onValueChange={onChange}>
                <TabsList className="whitespace-nowrap">
                    {tracks.map(track => (
                        <TabsTrigger key={track.id} value={track.id} className={'p-4'}>
                            {track.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <span className="text-muted-foreground text-sm">
                {tracks.length} track{tracks.length > 1 ? "s" : ""} available
            </span>
        </div>
    );
}
