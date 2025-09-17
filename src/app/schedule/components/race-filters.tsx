import * as React from "react";
import { Search, Filter, X, ChevronDown, MapPin, Clock, DollarSign, Users } from "lucide-react";

interface FilterProps {
    filters: RaceFilters;
    onFiltersChange: (filters: RaceFilters) => void;
}

interface RaceFilters {
    search: string;
    tracks: string[];
    raceTypes: string[];
    timeRange: string;
    prizeRange: string;
    distance: string[];
}

const RaceFilters: React.FC<FilterProps> = ({ filters, onFiltersChange }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    // Filter options
    const trackOptions = [
        "Saratoga", "Churchill Downs", "Belmont Park", "Santa Anita", "Del Mar", "Keeneland"
    ];

    const raceTypeOptions = [
        "Sprint", "Middle Distance", "Long Distance", "Turf", "Dirt", "All Weather"
    ];

    const timeRangeOptions = [
        { value: "morning", label: "Morning (8AM - 12PM)" },
        { value: "afternoon", label: "Afternoon (12PM - 6PM)" },
        { value: "evening", label: "Evening (6PM - 10PM)" },
        { value: "all", label: "All Day" }
    ];

    const prizeRangeOptions = [
        { value: "under-10k", label: "Under $10K" },
        { value: "10k-50k", label: "$10K - $50K" },
        { value: "50k-100k", label: "$50K - $100K" },
        { value: "over-100k", label: "Over $100K" },
        { value: "all", label: "All Prizes" }
    ];

    const distanceOptions = [
        "5-6 Furlongs", "6-7 Furlongs", "1 Mile", "1.25 Miles", "1.5 Miles", "2+ Miles"
    ];

    const updateFilter = (key: keyof RaceFilters, value: any) => {
        onFiltersChange({ ...filters, [key]: value });
    };

    const toggleArrayFilter = (key: keyof RaceFilters, value: string) => {
        const currentArray = filters[key] as string[];
        const newArray = currentArray.includes(value)
            ? currentArray.filter(item => item !== value)
            : [...currentArray, value];
        updateFilter(key, newArray);
    };

    const clearAllFilters = () => {
        onFiltersChange({
            search: "",
            tracks: [],
            raceTypes: [],
            timeRange: "all",
            prizeRange: "all",
            distance: []
        });
    };

    const getActiveFilterCount = () => {
        let count = 0;
        if (filters.search) count++;
        if (filters.tracks.length > 0) count++;
        if (filters.raceTypes.length > 0) count++;
        if (filters.timeRange !== "all") count++;
        if (filters.prizeRange !== "all") count++;
        if (filters.distance.length > 0) count++;
        return count;
    };

    const activeFilterCount = getActiveFilterCount();

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            {/* Header with search and toggle */}
            <div className="flex items-center gap-3 mb-4">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search races, tracks, or horses..."
                        value={filters.search}
                        onChange={(e) => updateFilter("search", e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`
                        flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                        ${isExpanded
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-150'
                    }
                    `}
                >
                    <Filter size={16} />
                    Filters
                    {activeFilterCount > 0 && (
                        <span className="bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
                            {activeFilterCount}
                        </span>
                    )}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {/* Expanded Filters */}
            {isExpanded && (
                <div className="space-y-4 pt-4 border-t border-gray-100">

                    {/* Quick Actions */}
                    {activeFilterCount > 0 && (
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                                {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''} applied
                            </span>
                            <button
                                onClick={clearAllFilters}
                                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X size={14} />
                                Clear all
                            </button>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Track Selection */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                <MapPin size={16} className="text-gray-500" />
                                Race Tracks
                            </label>
                            <div className="space-y-1.5">
                                {trackOptions.map(track => (
                                    <label key={track} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.tracks.includes(track)}
                                            onChange={() => toggleArrayFilter("tracks", track)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">{track}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Race Types */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                <Users size={16} className="text-gray-500" />
                                Race Types
                            </label>
                            <div className="space-y-1.5">
                                {raceTypeOptions.map(type => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.raceTypes.includes(type)}
                                            onChange={() => toggleArrayFilter("raceTypes", type)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Time Range */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                <Clock size={16} className="text-gray-500" />
                                Time of Day
                            </label>
                            <select
                                value={filters.timeRange}
                                onChange={(e) => updateFilter("timeRange", e.target.value)}
                                className="w-full p-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                {timeRangeOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Prize Range */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                <DollarSign size={16} className="text-gray-500" />
                                Prize Money
                            </label>
                            <select
                                value={filters.prizeRange}
                                onChange={(e) => updateFilter("prizeRange", e.target.value)}
                                className="w-full p-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                {prizeRangeOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>

                    {/* Distance - Full Width */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            Distance
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {distanceOptions.map(distance => (
                                <button
                                    key={distance}
                                    onClick={() => toggleArrayFilter("distance", distance)}
                                    className={`
                                        px-3 py-1.5 text-sm rounded-lg border transition-all duration-200
                                        ${filters.distance.includes(distance)
                                        ? 'bg-blue-100 text-blue-700 border-blue-300'
                                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                                    }
                                    `}
                                >
                                    {distance}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default RaceFilters;