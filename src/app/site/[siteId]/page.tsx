'use client';

import * as React from "react";
import { useParams } from "next/navigation";
import RaceSidebar from "@/app/site/components/left-sidebar";
import RaceDetails from "@/app/site/components/race-details";
import TrackHeader from "@/app/site/components/track-header";
import RaceInfo from "../components/race-info";
import PageWrapper from "@/app/components/layout/page-wrapper";
import TrackSelect from "@/app/schedule/components/track-select";

import { sites } from "@/lib/data";
import { Race, Track, Site } from "@/features/types";

export default function SiteDetailsPage() {
    const params = useParams();
    const siteId = params?.siteId as string;

    // 🔍 Find the site by ID
    const site: Site | undefined = React.useMemo(() => {
        return sites.find(s => s.id === siteId);
    }, [siteId]);

    // Default selected track (first track)
    const [selectedTrackId, setSelectedTrackId] = React.useState<string>(
        site?.tracks[0]?.id ?? ""
    );

    React.useEffect(() => {
        if (site?.tracks && site.tracks.length > 0) {
            setSelectedTrackId(site.tracks[0].id);
        }
    }, [site]);

    // Selected track object
    const selectedTrack: Track | undefined = site?.tracks.find(
        t => t.id === selectedTrackId
    );

    // All races in selected track
    const races: Race[] = selectedTrack?.races ?? [];

    // Default selected race
    const [selectedRace, setSelectedRace] = React.useState<Race | null>(
        races.length ? races[0] : null
    );

    React.useEffect(() => {
        if (races.length) setSelectedRace(races[0]);
    }, [races]);

    if (!site) {
        return (
            <PageWrapper>
                <div className="flex items-center justify-center h-[80vh] text-muted-foreground">
                    Site not found.
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <div className="flex flex-col gap-6">
                {/* Header */}
                <TrackHeader site={site} />

                {/* Track Tabs */}
                {site.tracks && site.tracks.length > 0 && (
                    <TrackSelect
                        tracks={site.tracks}
                        selectedTrackId={selectedTrackId}
                        onChange={setSelectedTrackId}
                    />
                )}

                <div className="flex flex-col md:flex-row gap-6 h-[900px]">
                    {/* Sidebar with race list */}
                    <RaceSidebar
                        races={races}
                        selectedRace={selectedRace}
                        onSelectRace={setSelectedRace}
                    />

                    {/* Main race details */}
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
