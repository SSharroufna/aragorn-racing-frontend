'use client';

import React, { useState, useMemo } from 'react';
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/features/components/ui/card";
import { Badge } from "@/features/components/ui/badge";
import {
    Trophy, Users, MapPin, Gauge, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Race } from "@/features/types";

interface RacesGridProps {
    races: Race[];
    trackName?: string;
}

const RacesGrid: React.FC<RacesGridProps> = ({
                                                 races,
                                                 trackName = "Florida Downs"
                                             }) => {
    const [selectedRaces, setSelectedRaces] = useState<Set<string>>(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const normalizedRaces = useMemo(() => {
        return races
            .map(r => ({
                id: r.id,
                race_number: parseInt(r.id.replace(/\D/g, ""), 10),
                race_name: r.race,
                track_name: trackName,
                distance: r.distance,
                purse: r.purse,
                field_size: r.horses,
                surface: r.surface,
                race_type: "stakes",
            }))
            .sort((a, b) => a.race_number - b.race_number);
    }, [races, trackName]);

    const totalPages = Math.ceil(normalizedRaces.length / pageSize);
    const paginatedRaces = normalizedRaces.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const onRaceSelect = (raceId: string) => {
        setSelectedRaces(prev => {
            const next = new Set(prev);
            next.has(raceId) ? next.delete(raceId) : next.add(raceId);
            return next;
        });
    };

    // Generate array of page numbers for navigation
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <>
            {/* --- Race Cards Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedRaces.map(race => (
                    <Card
                        key={race.id}
                        className={`relative hover:shadow-xl transition-all duration-300 cursor-pointer ${
                            selectedRaces.has(race.id)
                                ? 'ring-2 ring-primary shadow-lg'
                                : 'hover:border-primary/40'
                        }`}
                        onClick={() => onRaceSelect(race.id)}
                    >
                        <CardHeader className="p-0">
                            <div className="flex items-center gap-2 mb-2">
                                <Badge
                                    variant="outline"
                                    className="font-semibold border-primary/30 text-primary bg-primary/5"
                                >
                                    Race {race.race_number}
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="capitalize bg-accent/20 text-foreground border border-accent/30"
                                >
                                    {race.race_type}
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="capitalize bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20 font-semibold"
                                >
                                    {race.surface}
                                </Badge>
                            </div>
                            <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                                {race.race_name}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4 p-0">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="font-medium text-foreground">{race.track_name}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                        <Gauge className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="font-medium text-foreground">{race.distance}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Trophy className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="font-medium text-foreground">
                    ${race.purse.toLocaleString()}
                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                        <Users className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="font-medium text-foreground">
                    {race.field_size} horses
                  </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* --- Pagination --- */}
            {totalPages > 1 && (
                <div className="flex justify-start mt-8">
                    <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                    >
                        {/* Previous */}
                        <button
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft className="size-5" />
                        </button>

                        {/* Page Numbers */}
                        {pageNumbers.map(num => (
                            <button
                                key={num}
                                onClick={() => setCurrentPage(num)}
                                aria-current={num === currentPage ? "page" : undefined}
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 ${
                                    num === currentPage
                                        ? "z-10 bg-primary text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                }`}
                            >
                                {num}
                            </button>
                        ))}

                        {/* Next */}
                        <button
                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRight className="size-5" />
                        </button>
                    </nav>
                </div>
            )}
        </>
    );
};

export default RacesGrid;
