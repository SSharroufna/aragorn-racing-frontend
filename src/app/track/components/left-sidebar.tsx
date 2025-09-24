"use client";

import * as React from "react";
import { Users, Calendar, DollarSign } from "lucide-react";

export type Race = {
    id: string;
    race: string;
    horses: number;
    date: string;
    time: string;
    distance: string;
    surface: string;
    purse: number;
};

interface RaceSidebarProps {
    races: Race[];
    selectedRace: Race | null;
    onSelectRace: (race: Race) => void;
}

export default function RaceSidebar({
                                        races,
                                        selectedRace,
                                        onSelectRace,
                                    }: RaceSidebarProps) {
    return (
        <div className="w-80 bg-gray-100 rounded overflow-y-auto h-full">
            {races.map((race) => (
                <div
                    key={race.id}
                    onClick={() => onSelectRace(race)}
                    className={`p-3 mb-3 rounded border cursor-pointer ${
                        selectedRace?.id === race.id
                            ? "bg-blue-100 border-blue-300"
                            : "border-gray-200 hover:bg-gray-200"
                    }`}
                >
                    <h3 className="font-semibold">{race.race}</h3>
                    <div className="flex items-center gap-3 text-gray-600 text-sm mt-1">
                        <div className="flex items-center gap-1">
                            <Users size={14} />
                            {race.horses} Horses
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {race.time}
                        </div>
                        <div className="flex items-center">
                            <DollarSign size={14} />
                            {race.purse.toLocaleString()}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
