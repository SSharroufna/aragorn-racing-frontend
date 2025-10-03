'use client';

import React, {useState, useMemo, JSX} from 'react';
import { Badge } from '@/features/components/ui/badge';
import { Slider } from '@/features/components/ui/slider';
import { Card, CardHeader, CardTitle, CardContent } from '@/features/components/ui/card';
import { Trees, Mountain, Flag, Droplet, DollarSign } from 'lucide-react';

const mockRaces = [
    { surface: 'dirt', race_type: 'stakes', distance: '6f', track_condition: 'fast', purse: 100000 },
    { surface: 'turf', race_type: 'allowance', distance: '1m', track_condition: 'firm', purse: 60000 },
    { surface: 'dirt', race_type: 'claiming', distance: '7f', track_condition: 'muddy', purse: 30000 },
    { surface: 'synthetic', race_type: 'stakes', distance: '1 1/8m', track_condition: 'good', purse: 120000 },
    { surface: 'turf', race_type: 'maiden', distance: '5f', track_condition: 'yielding', purse: 50000 },
    { surface: 'dirt', race_type: 'optional claiming', distance: '1m', track_condition: 'sloppy', purse: 45000 },
];

const initialFilters = {
    surface: [] as string[],
    race_type: [] as string[],
    distance: [] as string[],
    track_condition: [] as string[],
    purse: [0, 150000],
};

const filterIcons: Record<string, JSX.Element> = {
    surfaces: <Mountain className="w-4 h-4 text-primary" />,
    race_types: <Flag className="w-4 h-4 text-primary" />,
    distances: <Trees className="w-4 h-4 text-primary" />,
    track_conditions: <Droplet className="w-4 h-4 text-primary" />,
    purse: <DollarSign className="w-4 h-4 text-primary" />,
};

export default function FilterSidebar() {
    const [filters, setFilters] = useState(initialFilters);

    const filterOptions = useMemo(
        () => ({
            surfaces: [...new Set(mockRaces.map((r) => r.surface))],
            race_types: [...new Set(mockRaces.map((r) => r.race_type))],
            distances: [...new Set(mockRaces.map((r) => r.distance))],
            track_conditions: [...new Set(mockRaces.map((r) => r.track_condition))],
            minPurse: Math.min(...mockRaces.map((r) => r.purse)),
            maxPurse: Math.max(...mockRaces.map((r) => r.purse)),
        }),
        []
    );

    const toggleTag = (group: keyof typeof initialFilters, value: string) => {
        setFilters((prev) => {
            const selected = prev[group] as string[];
            const updated = selected.includes(value)
                ? selected.filter((v) => v !== value)
                : [...selected, value];
            return { ...prev, [group]: updated };
        });
    };

    const handlePurseChange = (values: number[]) => {
        setFilters((prev) => ({ ...prev, purse: values }));
    };

    const renderFilterGroup = (
        label: string,
        key: keyof typeof filterOptions,
        stateKey: keyof typeof initialFilters
    ) => (
        <div>
            <div className="mb-2 font-semibold text-sm capitalize flex items-center gap-2 text-foreground">
                {filterIcons[key as string]} {label}
            </div>
            <div className="flex gap-2 flex-wrap">
                {(filterOptions[key] as string[]).map((option: string) => (
                    <Badge
                        key={option}
                        onClick={() => toggleTag(stateKey, option)}
                        className={`cursor-pointer ${
                            (filters[stateKey] as string[]).includes(option)
                                ? 'bg-primary text-primary-foreground shadow-md'
                                : 'bg-muted text-muted-foreground'
                        }`}
                    >
                        {option}
                    </Badge>
                ))}
            </div>
        </div>
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>Filter Races</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {renderFilterGroup('Surface', 'surfaces', 'surface')}
                {renderFilterGroup('Race Type', 'race_types', 'race_type')}
                {renderFilterGroup('Distance', 'distances', 'distance')}
                {renderFilterGroup('Track Condition', 'track_conditions', 'track_condition')}

                {/* Purse Range Slider */}
                <div>
                    <div className="mb-2 font-semibold text-sm capitalize flex items-center gap-2 text-foreground">
                        {filterIcons.purse} Purse Amount
                    </div>
                    <div className="px-2">
                        <Slider
                            min={filterOptions.minPurse}
                            max={filterOptions.maxPurse}
                            step={5000}
                            value={filters.purse}
                            onValueChange={handlePurseChange}
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-2">
                            <span>${filters.purse[0].toLocaleString()}</span>
                            <span>${filters.purse[1].toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
