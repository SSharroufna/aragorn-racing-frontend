"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import RacesSlots from "@/app/schedule/components/races-slots";

export default function RacesCalendar() {
    const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));

    // Correctly initialize as string array
    const [selectedRaces, setSelectedRaces] = React.useState<string[]>([]);
    const totalRaces = 3; // Total

    const bookedDates = Array.from({ length: 3 }, (_, i) => new Date(2025, 5, 17 + i));

    return (
        <Card className="gap-0 p-0">
            <CardContent className="relative p-0">
                <div className="p-6">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        defaultMonth={date}
                        disabled={bookedDates}
                        showOutsideDays={false}
                        modifiers={{
                            booked: bookedDates,
                        }}
                        modifiersClassNames={{
                            booked: "[&>button]:line-through opacity-100",
                        }}
                        className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
                        formatters={{
                            formatWeekdayName: (date) => {
                                return date.toLocaleString("en-US", { weekday: "short" });
                            },
                        }}
                    />
                </div>

                <RacesSlots
                    selectedRaces={selectedRaces}       // <-- pass array here
                    setSelectedRaces={setSelectedRaces} // <-- pass setter here
                />
            </CardContent>

            <CardFooter className="flex flex-col gap-4 border-t px-6 !py-5 md:flex-row">
                <div className="text-sm">
                    {date ? (
                        selectedRaces.length === 0 ? (
                            <>
                                No races selected for{" "}
                                <span className="font-medium">
            {date.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
            })}
          </span>.
                            </>
                        ) : selectedRaces.length === totalRaces ? (
                            <>
                                All races selected for{" "}
                                <span className="font-medium">
            {date.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
            })}
          </span>.
                            </>
                        ) : (
                            <>
                                Selected{" "}
                                <span className="font-medium">
  {selectedRaces.join(", ")}
</span>
                            </>

                        )
                    ) : (
                        <>Select a date to view available races</>
                    )}
                </div>
                <Button disabled={!date || selectedRaces.length === 0} className="w-full md:ml-auto md:w-auto" variant="outline">
                    Download All
                </Button>
            </CardFooter>
        </Card>
    );
}
