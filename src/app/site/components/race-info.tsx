"use client";

import React from "react";
import Image from "next/image";
import { Lock } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface Horse {
    number: number;
    name: string;
    image: string;
}

interface Race {
    track: string;
    raceNumber: number;
    date: string;
    postTime: string;
    title: string;
    surface: string;
    distance: string;
    age: string;
    purse: number;
    beyerPar: string;
    wagers: string;
    horsesData: Horse[];
}

export default function RaceCard() {
    // Mock race data
    const race: Race = {
        track: "Digital Downs",
        raceNumber: 9,
        date: "Fri Oct 03",
        postTime: "5:16 PM ET",
        title: "The Grade 1 Alcibiades Stakes",
        surface: "Dirt",
        distance: "1 Mile",
        age: "2YO",
        purse: 650000,
        beyerPar: "NA",
        wagers: "Double-exacta ($1 Min) - Trifecta ($0.50 Min) - Superfecta ($0.10 Min)",
        horsesData: [
            { number: 1, name: "Fast Lightning", image: "/horses/white-horse.png" },
            { number: 2, name: "Silver Star", image: "/horses/grey-horse.webp" },
            { number: 3, name: "Golden Glory", image: "/horses/dark-horse.jpeg" },
            { number: 4, name: "Midnight Runner", image: "/horses/black-horse.png"},
            { number: 5, name: "Blue Comet", image: "/horses/white-horse.png" },
            { number: 6, name: "Red Rocket", image: "/horses/dark-horse.jpeg" },
        ],
    };

    const isLocked = false;

    return (
        <Card className={' border-primary '}>
            {/* Lock icon if locked */}
            {isLocked && (
                <div className="absolute top-4 right-4 text-gray-500">
                    <Lock size={20} />
                </div>
            )}

            {/* Header Info */}
            <div className="mb-4">
                <h3 className="font-bold text-lg">
                    {race.track} R{race.raceNumber} | {race.date} | Post Time: {race.postTime}
                </h3>
                <p className="text-sm text-gray-600">{race.title}</p>
                <p className="text-sm text-gray-500 mt-1">
                    {race.surface} {race.distance} | {race.age} | Purse: ${race.purse.toLocaleString()} | Beyer Par: {race.beyerPar}
                </p>
                <p className="text-xs text-gray-400 mt-1">{race.wagers}</p>
            </div>

            {/* Horses List - Scrollable */}
            <div className="overflow-x-auto py-2">
                <div className="flex gap-4 w-max">
                    {race.horsesData.map((horse) => (
                        <div
                            key={horse.number}
                            className="flex flex-col items-center min-w-[100px] bg-gray-50 rounded-lg p-2 border border-gray-200 shadow-sm"
                        >
                            <div className="w-20 h-20 relative mb-2">
                                <Image
                                    src={horse.image}
                                    alt={horse.name}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <span className="font-semibold text-sm">#{horse.number}</span>
                            <span className="text-xs text-gray-600 text-center">{horse.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}
