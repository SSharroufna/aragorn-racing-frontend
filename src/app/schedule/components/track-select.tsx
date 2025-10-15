'use client';

import * as React from "react";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { sites } from "@/lib/data";
import { Site } from "@/features/types";

interface SiteSelectProps {
    onSelect?: (site: Site) => void; // <-- Pass the full Site object
}

export default function SiteSelect({ onSelect }: SiteSelectProps) {
    const [selectedSite, setSelectedSite] = React.useState<Site | null>(null);

    const handleSelect = (site: Site) => {
        setSelectedSite(site);
        if (onSelect) onSelect(site); // Pass the full site to parent
    };

    return (
        <>
            {/* Desktop / Tablet */}
            <div className="hidden sm:block">
                <ScrollArea className="h-96 rounded border border-border p-2">
                    <div className="flex flex-col gap-2">
                        {sites.map((site) => (
                            <Button
                                key={site.id}
                                variant={selectedSite?.id === site.id ? "default" : "outline"}
                                className="flex items-center gap-3 justify-between"
                                onClick={() => handleSelect(site)}
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={site.logo}
                                        alt={site.name}
                                        className="w-12 h-12 object-contain flex-shrink-0"
                                    />
                                    <span className="text-sm font-medium">{site.name}</span>
                                </div>
                                <ArrowRight
                                    className="w-4 h-4 text-gray-500 cursor-pointer hover:text-primary"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(site.url, "_blank");
                                    }}
                                />
                            </Button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Mobile Dropdown */}
            <div className="block sm:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="w-80 px-3 py-2 border border-border rounded flex justify-between items-center cursor-pointer">
                            <div className="flex items-center gap-2">
                                {selectedSite && (
                                    <img
                                        src={selectedSite.logo}
                                        alt={selectedSite.name}
                                        className="w-6 h-6 object-contain flex-shrink-0"
                                    />
                                )}
                                <span>{selectedSite ? selectedSite.name : "Select a site"}</span>
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
                        {sites.map((site) => (
                            <DropdownMenuItem
                                key={site.id}
                                className="flex items-center gap-2"
                                onClick={() => handleSelect(site)}
                            >
                                <img
                                    src={site.logo}
                                    alt={site.name}
                                    className="w-8 h-8 object-contain flex-shrink-0"
                                />
                                <span className="text-sm">{site.name}</span>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
}
