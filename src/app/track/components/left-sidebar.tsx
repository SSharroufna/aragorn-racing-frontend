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
    // Define a palette of colors
    const tagColors = [
        { bg: "bg-blue-200", text: "text-blue-800" },
        { bg: "bg-green-200", text: "text-green-800" },
        { bg: "bg-yellow-200", text: "text-yellow-800" },
        { bg: "bg-pink-200", text: "text-pink-800" },
        { bg: "bg-purple-200", text: "text-purple-800" },
    ];

    return (
        <div className="hidden md:block">
            <div className="w-80  rounded overflow-y-auto h-full">
                {races.map((race, index) => {
                    // pick color based on index
                    const color = tagColors[index % tagColors.length];

                    return (
                        <div
                            key={race.id}
                            onClick={() => onSelectRace(race)}
                            className={`p-3 bg-grey-50 mb-3 rounded border cursor-pointer ${
                                selectedRace?.id === race.id
                                    ? "bg-blue-100 border-blue-300"
                                    : "border-gray-200 hover:bg-gray-200"
                            }`}
                        >
                            {/* Top row: Tag + Time */}
                            <div className="flex items-center justify-between mb-2">
                <span className={`${color.bg} ${color.text} px-2 py-0.5 rounded`}>
                  R{index + 1}
                </span>
                                <span className="text-gray-600 text-sm">{race.time}</span>
                            </div>

                            <h3 className="font-semibold mb-2">{race.race}</h3>

                            {/* Info row */}
                            <div className="flex items-center gap-3 text-gray-600 text-sm mb-2">
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

                            {/* View Details button */}
                            <div className="flex justify-end">
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
