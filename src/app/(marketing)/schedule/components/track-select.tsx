"use client"

import * as React from "react"
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/features/components/ui/select" // Adjust path based on your folder structure

const tracks = [
    { id: "All Tracks", name: "All Tracks" },
    { id: "saratoga", name: "Saratoga" },
    { id: "belmont", name: "Belmont Park" },
    { id: "churchill", name: "Churchill Downs" },
    { id: "keeneland", name: "Keeneland" },
]

export default function TrackSelect() {
    const [selectedTrack, setSelectedTrack] = React.useState<string>("")

    return (
        <div className="flex gap-2">
            <Select value={selectedTrack} onValueChange={setSelectedTrack}>
                <SelectTrigger id="track-select" className="w-80 bg-white">
                    <SelectValue placeholder="Select a track" />
                </SelectTrigger>

                <SelectContent>
                    {tracks.map((track) => (
                        <SelectItem key={track.id} value={track.id}>
                            {track.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
