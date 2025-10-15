"use client";

import * as React from "react";
import { Users, Calendar } from "lucide-react";
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
        <div className="md:hidden mb-4 flex flex-wrap gap-2 justify-center">
            {races.map((race, index) => {
                const isSelected = selectedRace?.id === race.id;
                return (
                    <button
                        key={race.id}
                        onClick={() => onSelectRace(race)}
                        className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg border font-semibold text-sm transition-all duration-200
              ${isSelected ? "bg-secondary text-primary-foreground border-secondary" : "bg-white border-gray-300 hover:bg-gray-100"}`}
                    >
                        <span>R{index + 1}</span>
                        <span className="text-xs text-gray-500">{race.time}</span>
                    </button>
                );
            })}
        </div>
    );
}


// ✅ Desktop sidebar
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
                            className={`flex flex-col p-3 bg-white border-l-4 mb-3 rounded border cursor-pointer ${
                                selectedRace?.id === race.id
                                    ? "bg-blue-100 border-secondary border-l-secondary"
                                    : "border-gray-200 hover:bg-gray-200 border-l-primary"
                            }`}
                        >
                            <div className="flex ">
                                {/* Left: Race number */}
                                <div className={`px-2 py-1 rounded flex-shrink-0 flex items-center justify-center`}>
                                    <span className="font-semibold text-lg">R{index + 1}</span>
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
                                            ${race.purse.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 flex justify-end">
                                    <div
                                        className="text-primary text-sm rounded"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    >
                                    </div>
                                </div>
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
