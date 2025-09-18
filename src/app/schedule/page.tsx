'use client';

import { useState } from "react";
import RacesCalendar from "@/app/schedule/components/races-calendar";
import PageWrapper from "@/components/layout/page-wrapper";
import Stack from "@/components/layout/stack";
import FilterSidebar from "./components/race-filters";
import TrackSelect from "@/app/schedule/components/track-select";
import {AvailableRaces} from "./components/available-races"

const initialFilters = {
    search: '',
    surface: [],
    race_type: [],
    purse: [0, 500000],
    distance: [],
    age: [],
};

export default function RaceSchedule() {
    const [filters, setFilters] = useState(initialFilters);

    // Mock races data
    const mockRaces = [
        { surface: 'dirt', race_type: 'maiden_claiming' },
        { surface: 'turf', race_type: 'allowance' },
        { surface: 'dirt', race_type: 'stakes' },
        { surface: 'synthetic', race_type: 'claiming' },
    ];

    return (
        <PageWrapper>
            <Stack>
                <h1 className="text-2xl font-semibold"> Browse Races</h1>

                <Stack direction={'row'}>
                    <div className="flex-2 basis-2/4">
                        <RacesCalendar />
                    </div>
                    <div className="flex-1 basis-1/3">
                        <FilterSidebar />
                    </div>
                </Stack>

                <Stack>
                    <h1 className="text-2xl font-semibold"> Available Races</h1>
                    <AvailableRaces/>
                </Stack>
            </Stack>
        </PageWrapper>
)
}