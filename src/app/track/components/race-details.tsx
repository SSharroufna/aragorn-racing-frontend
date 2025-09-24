"use client";

import * as React from "react";
import { Race } from "@/features/types";
import { Eye, Download } from "lucide-react";

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
            <h2 className="text-2xl font-bold mb-4">{race.race}</h2>
            <p className="mb-2">
                <span className="font-semibold">Date:</span> {race.date}
            </p>
            <p className="mb-2">
                <span className="font-semibold">Time:</span> {race.time}
            </p>
            <p className="mb-2">
                <span className="font-semibold">Distance:</span> {race.distance}
            </p>
            <p className="mb-2 capitalize">
                <span className="font-semibold">Surface:</span> {race.surface}
            </p>
            <p className="mb-4">
                <span className="font-semibold">Purse:</span> ${race.purse.toLocaleString()}
            </p>

            <div className="flex gap-2">
                <button
                    className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => alert(`View ${race.race}`)}
                >
                    <Eye size={16} />
                    View
                </button>
                <button
                    className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => alert(`Download ${race.race}`)}
                >
                    <Download size={16} />
                    Download
                </button>
            </div>
        </div>
    );
}
