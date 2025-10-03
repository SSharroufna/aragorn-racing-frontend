'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/features/components/ui/card";
import { Checkbox } from "@/features/components/ui/checkbox";
import { Badge } from "@/features/components/ui/badge";
import { Trophy, Users, MapPin, Gauge } from 'lucide-react';

// ✅ Import your races
import { data as raceData } from "../components/races-table";

const normalizedData = raceData.map((r) => ({
    id: r.id,
    race_number: parseInt(r.id.replace("race", ""), 10), // race001 → 1
    race_name: r.race,
    track_name: "Florida Downs", // add track info if you want
    distance: r.distance,
    purse: r.purse,
    field_size: r.horses,
    surface: r.surface,
    race_type: "stakes", // default type, adjust if needed
}));

// ✅ Combine and sort
const allRaces = [...normalizedData].sort(
    (a, b) => a.race_number - b.race_number
);

const RacesGrid = () => {
    const [selectedRaces, setSelectedRaces] = useState<Set<string>>(new Set());

    const onRaceSelect = (raceId: string) => {
        setSelectedRaces(prev => {
            const next = new Set(prev);
            if (next.has(raceId)) {
                next.delete(raceId);
            } else {
                next.add(raceId);
            }
            return next;
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRaces.map(race => (
                <Card
                    key={race.id}
                    className={`relative hover:shadow-xl transition-all duration-300 cursor-pointer ${
                        selectedRaces.has(race.id)
                            ? 'ring-2 ring-primary shadow-lg'
                            : 'hover:border-primary/40'
                    }`}
                    onClick={() => onRaceSelect(race.id)}
                >

                    <CardHeader className={'p-0'}>
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
                                <span className="font-medium text-foreground">${race.purse.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                    <Users className="w-4 h-4 text-accent" />
                                </div>
                                <span className="font-medium text-foreground">{race.field_size} horses</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default RacesGrid;
