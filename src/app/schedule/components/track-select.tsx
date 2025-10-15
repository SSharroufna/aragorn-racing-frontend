'use client';

import * as React from "react";
import { ScrollArea } from "@/features/components/ui/scroll-area";
import { Button } from "@/features/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/features/components/ui/dropdown-menu";
import { sites } from "@/lib/data"

export default function TrackScrollSelect() {
    const [selectedTrack, setSelectedTrack] = React.useState<string>("");

    return (
        <>
            {/* Desktop / Tablet: Scroll Area */}
            <div className="hidden sm:block">
                <ScrollArea className="h-96 rounded border border-border p-2">
                    <div className="flex flex-col gap-2">
                        {sites.map((track) => (
                            <Button
                                key={track.id}
                                variant={selectedTrack === track.id ? "default" : "outline"}
                                className="flex items-center gap-3 justify-between"
                                onClick={() => setSelectedTrack(track.id)}
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={track.logo}
                                        alt={track.name}
                                        className="w-12 h-12 object-contain flex-shrink-0"
                                    />
                                    <span className="text-sm font-medium">{track.name}</span>
                                </div>
                                <ArrowRight
                                    className="w-4 h-4 text-gray-500 cursor-pointer hover:text-primary"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(track.url, "_blank");
                                    }}
                                />
                            </Button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Mobile: Dropdown using shadcn with selected track logo */}
            <div className="block sm:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="w-80 px-3 py-2 border border-border rounded flex justify-between items-center cursor-pointer">
                            <div className="flex items-center gap-2">
                                {selectedTrack && (
                                    <img
                                        src={sites.find(t => t.id === selectedTrack)?.logo}
                                        alt={sites.find(t => t.id === selectedTrack)?.name}
                                        className="w-6 h-6 object-contain flex-shrink-0"
                                    />
                                )}
                                <span>
                        {selectedTrack
                            ? sites.find(t => t.id === selectedTrack)?.name
                            : "Select a site"}
                    </span>
                            </div>
                            <svg
                                className="w-4 h-4 ml-2 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 max-h-80 overflow-y-auto">
                        <DropdownMenuLabel>Sites</DropdownMenuLabel>
                        {sites.map((track) => (
                            <DropdownMenuItem
                                key={track.id}
                                className="flex items-center gap-2"
                                onClick={() => setSelectedTrack(track.id)}
                            >
                                <img
                                    src={track.logo}
                                    alt={track.name}
                                    className="w-8 h-8 object-contain flex-shrink-0"
                                />
                                <span className="text-sm">{track.name}</span>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </>
    );
}
