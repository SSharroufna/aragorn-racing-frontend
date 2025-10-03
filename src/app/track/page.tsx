"use client";

import * as React from "react";
import RaceSidebar from "@/app/track/components/left-sidebar";
import RaceDetails from "@/app/track/components/race-details";

import TrackHeader from "@/app/track/components/track-header";
import { Race } from "@/features/types"
import PageWrapper from "@/features/components/layout/page-wrapper";
import RaceInfo from "./components/race-info"

// Sample races data
const sampleRaces: Race[] = [
    {
        id: "1",
        race: "Florida Downs Stakes",
        horses: 12,
        date: "2025-09-23",
        time: "12:00",
        distance: "1 mile",
        surface: "turf",
        purse: 5000,
    },
    {
        id: "2",
        race: "Sunshine Cup",
        horses: 10,
        date: "2025-09-23",
        time: "12:30",
        distance: "1.125 miles",
        surface: "turf",
        purse: 4500,
    },
    {
        id: "3",
        race: "Derby Challenge",
        horses: 8,
        date: "2025-09-23",
        time: "13:00",
        distance: "1.25 miles",
        surface: "turf",
        purse: 6000,
    },
    {
        id: "4",
        race: "Autumn Classic",
        horses: 14,
        date: "2025-09-23",
        time: "13:30",
        distance: "1.5 miles",
        surface: "dirt",
        purse: 7500,
    },
    {
        id: "5",
        race: "Golden Sprint",
        horses: 9,
        date: "2025-09-23",
        time: "14:00",
        distance: "0.75 miles",
        surface: "synthetic",
        purse: 3000,
    },
    {
        id: "6",
        race: "Champion’s Cup",
        horses: 11,
        date: "2025-09-23",
        time: "14:30",
        distance: "1.125 miles",
        surface: "dirt",
        purse: 5500,
    },
    {
        id: "7",
        race: "Royal Turf Challenge",
        horses: 12,
        date: "2025-09-23",
        time: "15:00",
        distance: "1.25 miles",
        surface: "turf",
        purse: 6200,
    },
    {
        id: "8",
        race: "Evening Stakes",
        horses: 8,
        date: "2025-09-23",
        time: "15:30",
        distance: "1 mile",
        surface: "synthetic",
        purse: 4800,
    },
    {
        id: "9",
        race: "Sunset Derby",
        horses: 10,
        date: "2025-09-23",
        time: "16:00",
        distance: "1.25 miles",
        surface: "dirt",
        purse: 7000,
    },
    {
        id: "10",
        race: "Champion Sprint",
        horses: 9,
        date: "2025-09-23",
        time: "16:30",
        distance: "0.75 miles",
        surface: "turf",
        purse: 4200,
    },
];

export default function TrackDetailsPage() {
    const [selectedRace, setSelectedRace] = React.useState(sampleRaces[0]);

    return (
        <PageWrapper>
        <div className={'flex flex-col gap-6'}>
            {/* Breadcrumbs */}
            <TrackHeader/>

            <div className="flex flex-col gap-6 h-[900px] md:flex-row">
                <RaceSidebar
                    races={sampleRaces}
                    selectedRace={selectedRace}
                    onSelectRace={setSelectedRace}
                />
                <div className={'flex flex-col gap-4'}>
                <RaceInfo/>
                <RaceDetails race={selectedRace} />
                </div>
            </div>

        </div>
        </PageWrapper>
    );
}
