"use client"

import * as React from "react"
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select" // Adjust path based on your folder structure

const tracks = [
    { id: "saratoga", name: "Saratoga" },
    { id: "belmont", name: "Belmont Park" },
    { id: "churchill", name: "Churchill Downs" },
    { id: "keeneland", name: "Keeneland" },
]

export default function TrackSelect() {
    const [selectedTrack, setSelectedTrack] = React.useState<string>(tracks[0].id)

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="track-select" className="text-sm font-medium text-muted-foreground">
                Select Track
            </label>

            <Select value={selectedTrack} onValueChange={setSelectedTrack}>
                <SelectTrigger id="track-select" className="w-64">
                    <SelectValue placeholder="Choose a track" />
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
