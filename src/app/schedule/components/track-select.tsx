"use client";

import * as React from "react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/features/components/ui/select";
import { Globe, Activity, Star, Coffee, Flag } from "lucide-react";

const tracks = [
    {
        id: "photo-finish",
        name: "Photo Finish™ Live",
        icon: Globe,
        url: "https://photofinish.live/home",
    },
    {
        id: "digital-downs",
        name: "Digital Downs",
        icon: Activity,
        url: "https://www.digitaldowns.live",
    },
    {
        id: "sulkyland",
        name: "Sulkyland",
        icon: Star,
        url: "https://sulkyland.com/en/default.aspx",
    },
    {
        id: "rival-stars",
        name: "Rival Stars Horse Racing",
        icon: Coffee,
        url: "https://rivalstarshorseracing.com",
    },
    {
        id: "sport-of-kings",
        name: "Digital Stables (Sport of Kings)",
        icon: Flag,
        url: "https://www.sportofkings.us",
    },
    {
        id: "betradar",
        name: "Betradar",
        icon: Globe,
        url: "https://betradar.com/virtual-sports-betting/virtual-horses/",
    },
    {
        id: "william-hill",
        name: "William Hill",
        icon: Activity,
        url: "https://www.williamhill.us/virtual-racing/",
    },
    {
        id: "global-bet",
        name: "Global Bet",
        icon: Star,
        url: "https://www.globalbet.com/games/virtual-horses",
    },
    {
        id: "bet-viral",
        name: "BetViral",
        icon: Coffee,
        url: "https://www.betvirtual.co",
    },
    {
        id: "horse-race-game",
        name: "HorseRaceGame.com",
        icon: Flag,
        url: "https://www.horseracegame.com",
    },
];

export default function TrackSelect() {
    const [selectedTrack, setSelectedTrack] = React.useState<string>("");

    return (
        <div className="flex gap-2">
            <Select value={selectedTrack} onValueChange={setSelectedTrack}>
                <SelectTrigger id="track-select" className="w-80 bg-white">
                    <SelectValue placeholder="Select a track" />
                </SelectTrigger>

                <SelectContent>
                    {tracks.map((track) => {
                        const Icon = track.icon;
                        return (
                            <SelectItem
                                key={track.id}
                                value={track.id}
                                className="flex items-center gap-2"
                            >
                                <Icon size={16} />
                                {track.name}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
}
