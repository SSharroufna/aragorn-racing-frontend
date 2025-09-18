'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, MapPin } from 'lucide-react';

// Mock race data
const mockRaces = [
    {
        id: 'r1',
        race_number: 3,
        race_name: 'Santa Anita Derby',
        track_name: 'Santa Anita Park',
        distance: '1 1/8 miles',
        purse: 750000,
        field_size: 10,
        surface: 'dirt',
        race_type: 'stakes',
    },
    {
        id: 'r2',
        race_number: 5,
        race_name: 'Belmont Stakes',
        track_name: 'Belmont Park',
        distance: '1.5 miles',
        purse: 1500000,
        field_size: 8,
        surface: 'dirt',
        race_type: 'grade 1',
    },
    {
        id: 'r3',
        race_number: 2,
        race_name: 'Maker\'s Mark Mile',
        track_name: 'Keeneland',
        distance: '1 mile',
        purse: 600000,
        field_size: 12,
        surface: 'turf',
        race_type: 'grade 2',
    },
    {
        id: 'r4',
        race_number: 7,
        race_name: 'Dubai World Cup',
        track_name: 'Meydan Racecourse',
        distance: '1.25 miles',
        purse: 12000000,
        field_size: 14,
        surface: 'dirt',
        race_type: 'international',
    },
];

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
            {mockRaces.map(race => (
                <Card
                    key={race.id}
                    className={`relative hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white ${selectedRaces.has(race.id) ? 'ring-2 ring-emerald-500' : ''}`}
                >
                    <div className="absolute top-4 right-4 z-10">
                        <Checkbox
                            className="w-5 h-5"
                            checked={selectedRaces.has(race.id)}
                            onCheckedChange={() => onRaceSelect(race.id)}
                        />
                    </div>
                    <CardHeader className="pb-3">
                        <Badge variant="outline" className="font-semibold w-fit mb-2">Race {race.race_number}</Badge>
                        <CardTitle className="text-lg font-bold text-gray-900 transition-colors">
                            <div className="hover:text-emerald-700">
                                {race.race_name}
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin className="w-4 h-4 text-emerald-600" />
                                <span className="font-medium">{race.track_name}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin className="w-4 h-4 text-emerald-600" />
                                <span className="font-medium">{race.distance}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Trophy className="w-4 h-4 text-emerald-600" />
                                <span className="font-medium">${race.purse.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Users className="w-4 h-4 text-emerald-600" />
                                <span className="font-medium">{race.field_size} horses</span>
                            </div>
                        </div>
                        <div className="pt-3 border-t border-gray-100 flex justify-between">
                            <Badge variant="secondary" className="capitalize">{race.surface}</Badge>
                            <Badge variant="secondary" className="capitalize">{race.race_type}</Badge>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default RacesGrid;
