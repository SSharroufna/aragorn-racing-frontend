'use client';

import { useState } from "react";
import RacesCalendar from "@/app/schedule/components/races-calendar";
import PageWrapper from "@/features/components/layout/page-wrapper";
import Stack from "@/features/components/layout/stack";
import FilterSidebar from "./components/race-filters";
import TrackSelect from "@/app/schedule/components/track-select";
import { AvailableRaces } from "./components/available-races";
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
        <PageWrapper>
        <Stack gap="md">
            <h1 className="text-2xl font-semibold flex items-center gap-2 relative">
                <Search className="w-6 h-6 text-primary" />
                <div className="relative">Find Races</div>
            </h1>

            {/* Track Select + Calendar */}
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 lg:basis-1/2">
                    <RacesCalendar />
                </div>
                <div className="flex-1 lg:basis-1/3">
                    <FilterSidebar />
                </div>
            </div>

            {/* Available Races */}
            <AvailableRaces />
        </Stack>
        </PageWrapper>
    );
}
