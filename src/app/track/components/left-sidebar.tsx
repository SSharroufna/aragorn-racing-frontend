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
// ✅ Desktop sidebar with individual tags and top timing
// ✅ Desktop sidebar with dynamic tag colors
function RaceSidebarDesktop({
                                races,
                                selectedRace,
                                onSelectRace,
                            }: RaceSidebarProps) {
    const tagColors = [
        { bg: "bg-blue-200", text: "text-blue-800" },
        { bg: "bg-green-200", text: "text-green-800" },
        { bg: "bg-yellow-200", text: "text-yellow-800" },
        { bg: "bg-pink-200", text: "text-pink-800" },
        { bg: "bg-purple-200", text: "text-purple-800" },
    ];

    return (
        <div className="hidden md:block">
            <div className="w-80 rounded overflow-y-auto h-full">
                {races.map((race, index) => {
                    const color = tagColors[index % tagColors.length];

                    return (
                        <div
                            key={race.id}
                            onClick={() => onSelectRace(race)}
                            className={`flex flex-col p-3 bg-grey-50 mb-3 rounded border cursor-pointer ${
                                selectedRace?.id === race.id
                                    ? "bg-blue-100 border-blue-300"
                                    : "border-gray-200 hover:bg-gray-200"
                            }`}
                        >
                            <div className="flex">
                                {/* Left: Race number */}
                                <div className={`${color.bg} ${color.text} px-2 py-1 rounded flex-shrink-0 flex items-center justify-center`}>
                                    <span className="font-semibold text-sm">R{index + 1}</span>
                                </div>

                                {/* Right: Content (Title + Info) */}
                                <div className="flex-1 ml-3 flex flex-col">
                                    <h3 className="font-semibold">{race.race}</h3>

                                    {/* Info row */}
                                    <div className="flex items-center gap-4 text-gray-600 text-sm mt-1">
                                        <div className="flex items-center gap-1">
                                            <Users size={14} />
                                            {race.horses} Horses
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {race.time}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <DollarSign size={14} />
                                            ${race.purse.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* View Details button in a separate row */}
                            <div className="mt-2 flex justify-end">
                                <button
                                    className="p-1 bg-primary text-white text-sm rounded hover:bg-primary/90"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        alert(`Viewing details for ${race.race}`);
                                    }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    );
                })}
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
