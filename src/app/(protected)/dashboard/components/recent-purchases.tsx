import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/features/components/ui/card";
import { Badge } from "@/features/components/ui/badge";
import { Heart, MapPin } from "lucide-react";

export default function RecentPurchases() {
    const favoriteTracks = [
        { id: 1, name: "Santa Anita", location: "CA", races: 8 },
        { id: 2, name: "Churchill Downs", location: "KY", races: 12 },
        { id: 3, name: "Belmont Park", location: "NY", races: 10 }
    ];

    const favoriteRaces = [
        { id: 1, name: "Kentucky Derby", track: "Churchill Downs", date: "2024-01-15" },
        { id: 2, name: "Breeders' Cup Classic", track: "Santa Anita", date: "2024-01-20" }
    ];

    return (
        <Card className="shadow-lg bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    Recent Purchases
                </CardTitle>
                <Badge variant="outline">{favoriteTracks.length + favoriteRaces.length}</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Favorite Tracks */}
                <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Tracks</h4>
                    <div className="grid grid-cols-1 gap-2">
                        {favoriteTracks.map((track) => (
                            <div
                                key={`track-${track.id}`}
                                className="flex items-center justify-between p-2 rounded-lg border hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4 text-emerald-600" />
                                    <span className="font-medium text-sm">{track.name}</span>
                                    <Badge variant="secondary" className="text-xs">{track.location}</Badge>
                                </div>
                                <span className="text-xs text-gray-500">{track.races} races</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Favorite Races */}
                <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Races</h4>
                    <div className="space-y-2">
                        {favoriteRaces.map((race) => (
                            <div
                                key={`race-${race.id}`}
                                className="block p-2 rounded-lg border hover:bg-gray-50 transition-colors"
                            >
                                <div className="font-medium text-sm">{race.name}</div>
                                <div className="text-xs text-gray-500">{race.track}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}