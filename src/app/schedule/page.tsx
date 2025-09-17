'use client';

import { useState } from "react";
import RacesCalender from "@/app/schedule/components/races-calender";
import PageWrapper from "@/components/layout/page-wrapper";
import Stack from "@/components/layout/stack";
import RaceFilters from "./components/race-filters";
import TrackSelect from "@/app/schedule/components/track-select";

export default function RaceSchedule() {
    const [filters, setFilters] = useState<RaceFilters>({
        search: "",
        tracks: [],
        raceTypes: [],
        timeRange: "all",
        prizeRange: "all",
        distance: []
    });

    return (
        <PageWrapper>
            <Stack>
                <h1 className="text-2xl font-semibold"> Browse Races</h1>
                <TrackSelect/>
            <Stack direction={'row'}>
                <div className='w-full'>
                    <RacesCalender/>
                </div>
                <div className='min-w-2/5'>
                        <RaceFilters
                            filters={filters}
                            onFiltersChange={setFilters}
                        />
                </div>


            </Stack>



            </Stack>



        </PageWrapper>
)
}