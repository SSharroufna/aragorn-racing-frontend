"use client";

import * as React from "react";
import { Race } from "@/features/types";

interface RaceDetailsProps {
    race: Race | null;
}

export default function RaceDetails({ race }: RaceDetailsProps) {
    if (!race) {
        return (
            <div className="flex items-center justify-center h-full text-gray-400">
                Select a race to see details
            </div>
        );
    }

    return (
        <div className="flex-1 bg-white rounded shadow p-6 overflow-y-auto h-full">
            <h2 className="text-2xl font-bold mb-4">PDF Viewer for {race.race}</h2>
        </div>
    );
}
