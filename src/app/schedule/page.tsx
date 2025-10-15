'use client';

import { useState } from "react";
import RacesCalendar from "@/app/schedule/components/races-calendar";
import PageWrapper from "@/app/components/layout/page-wrapper";
import Stack from "@/app/components/layout/stack";
import FilterSidebar from "./components/race-filters";
import SiteSelect from "@/app/schedule/components/track-select";
import { FilteredRaces } from "./components/filtered-races";
import { Search } from "lucide-react";
import * as React from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Site } from "@/features/types";

export default function RaceSchedule() {
    const [selectedSite, setSelectedSite] = useState<Site>();
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();

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
                        <Card>
                            <CardContent className="flex flex-col sm:flex-row items-center gap-6 py-6">
                                <SiteSelect onSelect={setSelectedSite} />
                                <RacesCalendar onSelectDate={setSelectedDate} />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex-1 lg:basis-1/3">
                        <FilterSidebar />
                    </div>
                </div>

                {/* Bottom Section - Filtered Races */}
                <FilteredRaces selectedSite={selectedSite} selectedDate={selectedDate} />
            </Stack>
        </PageWrapper>
    );
}
