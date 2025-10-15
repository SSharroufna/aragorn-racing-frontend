'use client';

import * as React from "react";
import { Calendar } from "@/app/components/ui/calendar";

// Define race dates
const raceDates = [
    new Date("2025-10-15"),
    new Date("2025-10-16"),
    new Date("2025-10-17"),
    new Date("2025-10-18"),
    new Date("2025-10-19"),
    new Date("2025-10-20"),
    new Date("2025-10-21"),
    new Date("2025-10-22"),
    new Date("2025-10-23"),
    new Date("2025-10-24"),
    new Date("2025-10-25"),
    new Date("2025-10-26"),
    new Date("2025-10-27"),
    new Date("2025-10-28"),
    new Date("2025-10-29"),
    new Date("2025-10-30"),
    new Date("2025-10-31"),
    new Date("2025-11-01"),
];

interface RacesCalendarProps {
    onSelectDate?: (date: Date) => void;
}

const RacesCalendar: React.FC<RacesCalendarProps> = ({ onSelectDate }) => {
    const today = new Date();
    const [date, setDate] = React.useState<Date | undefined>(today);
    const [month, setMonth] = React.useState<Date | undefined>(new Date());



    const isRaceDay = (day: Date) =>
        raceDates.some(
            (raceDay) =>
                day.getFullYear() === raceDay.getFullYear() &&
                day.getMonth() === raceDay.getMonth() &&
                day.getDate() === raceDay.getDate()
        );

    const handleSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        if (selectedDate && onSelectDate) {
            onSelectDate(selectedDate);
        }
    };

    return (
        <Calendar
            mode="single"
            month={month}
            onMonthChange={setMonth}
            selected={date}
            onSelect={handleSelect}
            disabled={(day) => {
                const isBeforeToday =
                    day < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                return isBeforeToday || !isRaceDay(day);
            }}
            modifiers={{ race: isRaceDay }}
            className="bg-transparent p-0 text-lg [&_button]:w-12 [&_button]:h-12 [&_button]:text-base"
        />
    );
};

export default RacesCalendar;
