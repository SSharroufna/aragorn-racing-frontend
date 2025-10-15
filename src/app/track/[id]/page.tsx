'use client';

import * as React from "react";
import { useParams } from "next/navigation";
import RaceSidebar from "@/app/track/components/left-sidebar";
import RaceDetails from "@/app/track/components/race-details";
import TrackHeader from "@/app/track/components/track-header";
import RaceInfo from "../components/race-info";
import PageWrapper from "@/features/components/layout/page-wrapper";

import { sites } from "@/lib/data";
import { Race, Track } from "@/features/types";

export default function TrackDetailsPage() {
    const params = useParams();
    const trackId = params?.trackId as string;

    // 🔍 Find the track from all sites
    const track: Track | undefined = React.useMemo(() => {
        for (const site of sites) {
            const found = site.tracks.find(t => t.id === trackId);
            if (found) return found;
        }
        return undefined;
    }, [trackId]);

    // Use track races or empty list
    const races: Race[] = track?.races ?? [];

    // Default selected race
    const [selectedRace, setSelectedRace] = React.useState<Race | null>(
        races.length ? races[0] : null
    );

    React.useEffect(() => {
        if (races.length) setSelectedRace(races[0]);
    }, [races]);

    if (!track) {
        return (
            <PageWrapper>
                <div className="flex items-center justify-center h-[80vh] text-muted-foreground">
                    Track not found.
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <div className="flex flex-col gap-6">
                {/* Breadcrumb / Track Header */}
                <TrackHeader track={track} />

                <div className="flex flex-col md:flex-row gap-6 h-[900px]">
                    {/* Sidebar with race list */}
                    <RaceSidebar
                        races={races}
                        selectedRace={selectedRace}
                        onSelectRace={setSelectedRace}
                    />

                    {/* Main race details section */}
                    <div className="flex flex-col gap-4 flex-1">
                        <RaceInfo />
                        {selectedRace ? (
                            <RaceDetails race={selectedRace} />
                        ) : (
                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                Select a race to view details
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
