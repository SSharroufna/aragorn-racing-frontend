'use client';

import { useState } from "react";
import RacesCalendar from "@/app/schedule/components/races-calendar";
import PageWrapper from "@/features/components/layout/page-wrapper";
import Stack from "@/features/components/layout/stack";
import FilterSidebar from "./components/race-filters";
import TrackSelect from "@/app/schedule/components/track-select";
import {AvailableRaces} from "./components/available-races"
import { Search } from "lucide-react";

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

    return (
            <Stack gap={'md'}>
                <h1 className="text-2xl font-semibold flex items-center gap-2 relative">
                    <Search className="w-6 h-6 text-primary" />
                    <span className="relative">
        Find Races
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-primary/50"></span>
    </span>
                </h1>

    <Stack direction="row" className="items-stretch">
                    <div className="flex-2 basis-2/4">
                        <RacesCalendar />
                    </div>
                    <div className="flex-1 basis-1/3">
                        <FilterSidebar />
                    </div>
                </Stack>


                <Stack>
                    <AvailableRaces/>
                </Stack>
            </Stack>
)
}