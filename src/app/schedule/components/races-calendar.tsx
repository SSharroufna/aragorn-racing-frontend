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

    // Define race dates
    const raceDates = [
        new Date("2025-09-30"),
        new Date("2025-10-03"),
        new Date("2025-10-02"),
        new Date("2025-10-30"),
        new Date("2025-10-04"),
        new Date("2025-10-07"),
        new Date("2025-10-09"),
        new Date("2025-10-12"),
        new Date("2025-10-15"),
        new Date("2025-10-18"),
        new Date("2025-10-21"),
        new Date("2025-10-24"),
        new Date("2025-10-27"),
        new Date("2025-10-30"),
        new Date("2025-11-02"),
        new Date("2025-11-05"),
        new Date("2025-11-08"),
    ];

    // Check if a day has races
    const isRaceDay = (day: Date) => {
        return raceDates.some(
            (raceDay) =>
                day.getFullYear() === raceDay.getFullYear() &&
                day.getMonth() === raceDay.getMonth() &&
                day.getDate() === raceDay.getDate()
        );
    };

    return (
        <Card>
            <CardContent className="flex items-center gap-6 py-6">
                <TrackSelect/>

                <Calendar
                    mode="single"
                    month={month}
                    onMonthChange={setMonth}
                    selected={date}
                    onSelect={setDate}
                    disabled={(day) => !isRaceDay(day)}
                    modifiers={{
                        race: isRaceDay,
                    }}
                    className="bg-transparent p-0 text-lg [&_button]:w-12 [&_button]:h-12 [&_button]:text-base"
                />
            </CardContent>
        </Card>
    );
};

export default RacesCalendar;