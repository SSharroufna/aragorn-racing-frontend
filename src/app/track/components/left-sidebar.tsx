"use client";

import * as React from "react";
import { Users, Calendar, DollarSign } from "lucide-react";
import { Race } from "@/features/types";

interface RaceSidebarProps {
    races: Race[];
    selectedRace: Race | null;
    onSelectRace: (race: Race) => void;
}

// ✅ Mobile dropdown
function RaceSidebarMobile({
                               races,
                               selectedRace,
                               onSelectRace,
                           }: RaceSidebarProps) {
    return (
        <div className="md:hidden mb-4">
            <select
                value={selectedRace?.id || ""}
                onChange={(e) => {
                    const race = races.find((r) => r.id === e.target.value);
                    if (race) onSelectRace(race);
                }}
                className="w-full border rounded p-2 text-sm"
            >
                <option value="">Select a race...</option>
                {races.map((race) => (
                    <option key={race.id} value={race.id}>
                        {race.race} — {race.time}
                    </option>
                ))}
            </select>
        </div>
    );
}

// ✅ Desktop sidebar
function RaceSidebarDesktop({
                                races,
                                selectedRace,
                                onSelectRace,
                            }: RaceSidebarProps) {
    return (
        <div className="hidden md:block">
            <div className="w-80 bg-gray-100 rounded overflow-y-auto h-full p-2">
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
        </div>
    );
}

// ✅ Wrapper that chooses mobile or desktop
export default function RaceSidebar(props: RaceSidebarProps) {
    return (
        <>
            <RaceSidebarMobile {...props} />
            <RaceSidebarDesktop {...props} />
        </>
    );
}
