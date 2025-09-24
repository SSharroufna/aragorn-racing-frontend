'use client';

import * as React from "react";
import { Button } from "@/features/components/ui/button";
import { Calendar } from "@/features/components/ui/calendar";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/features/components/ui/card";
import TrackSelect from "@/app/schedule/components/track-select";

const RacesCalendar = () => {
    const [date, setDate] = React.useState<Date | undefined>(
        new Date(2025, 5, 12)
    );
    const [month, setMonth] = React.useState<Date | undefined>(new Date());

    return (
        <Card>
            <CardContent className="flex flex-col items-center gap-6 py-6">
                <TrackSelect/>
                <Calendar
                    mode="single"
                    month={month}
                    onMonthChange={setMonth}
                    selected={date}
                    onSelect={setDate}
                    className="bg-transparent p-0 text-lg [&_button]:w-12 [&_button]:h-12 [&_button]:text-base"
                />
            </CardContent>
        </Card>
    );
};

export default RacesCalendar;
