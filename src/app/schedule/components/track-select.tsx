'use client';

import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/features/components/ui/button";
import { ArrowRight } from "lucide-react";

const tracks = [
    { id: "photo-finish", name: "Photo Finish™ Live", logo: "/photo-finish.png", url: "https://photofinish.live/home" },
    { id: "digital-downs", name: "Digital Downs", logo: "/digital-downs.png", url: "https://www.digitaldowns.live" },
    { id: "sulkyland", name: "Sulkyland", logo: "/sulkyland.png", url: "https://sulkyland.com/en/default.aspx" },
    { id: "rival-stars", name: "Rival Stars Horse Racing", logo: "/horse-racing.png", url: "https://rivalstarshorseracing.com" },
    { id: "sport-of-kings", name: "Digital Stables (Sport of Kings)", logo: "/sport-of-kings.png", url: "https://www.sportofkings.us" },
    { id: "betradar", name: "Betradar", logo: "/betrader.png", url: "https://www.betradar.com/virtual-sports-betting/virtual-horses/" },
    { id: "william-hill", name: "William Hill", logo: "/william-hill.png", url: "https://www.williamhill.us/virtual-racing/" },
    { id: "global-bet", name: "Global Bet", logo: "/global-bet.png", url: "https://www.globalbet.com/games/virtual-horses" },
    { id: "bet-viral", name: "BetViral", logo: "/bet-viral.png", url: "https://www.betvirtual.co" },
    { id: "horse-race-game", name: "HorseRaceGame.com", logo: "/horse-race-game.png", url: "https://www.horseracegame.com" },
    { id: "horseracingnation", name: "Horse Racing Nation", logo: "/horse-nation.png", url: "https://www.horseracingnation.com" },
];

export default function TrackScrollSelect() {
    const [selectedTrack, setSelectedTrack] = React.useState<string>("");

    return (
        <ScrollArea className="h-96 rounded border border-border p-2">
            <div className="flex flex-col gap-2">
                {tracks.map((track) => (
                    <Button
                        key={track.id}
                        variant={selectedTrack === track.id ? "default" : "outline"}
                        className="flex items-center gap-3 justify-between"
                        onClick={() => setSelectedTrack(track.id)}
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={track.logo}
                                alt={track.name}
                                className="w-12 h-12 object-contain flex-shrink-0"
                            />
                            <span className="text-sm font-medium">{track.name}</span>
                        </div>
                        <ArrowRight
                            className="w-4 h-4 text-gray-500 cursor-pointer hover:text-primary"
                            onClick={(e) => {
                                e.stopPropagation(); // prevent the card selection
                                window.open(track.url, "_blank");
                            }}
                        />
                    </Button>
                ))}
            </div>
        </ScrollArea>
    );
}
