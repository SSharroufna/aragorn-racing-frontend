import * as React from "react";
import { Clock, Check } from "lucide-react";

interface RacesSlotsProps {
    selectedRaces: string[];
    setSelectedRaces: (races: string[]) => void;
}

interface Event {
    title: string;
    from: string;
    to: string;
}

const RacesSlots: React.FC<RacesSlotsProps> = ({
                                                   selectedRaces,
                                                   setSelectedRaces,
                                               }) => {
    const today = new Date();

    const events: Event[] = [
        { title: "Sprint Heat 1", from: "2025-06-12T10:00:00", to: "2025-06-12T10:15:00" },
        { title: "Qualifiers", from: "2025-06-12T10:30:00", to: "2025-06-12T11:00:00" },
        { title: "Final Race", from: "2025-06-12T11:30:00", to: "2025-06-12T12:00:00" },
    ];

    // Initialize with all races selected by default
    React.useEffect(() => {
        if (selectedRaces.length === 0) {
            setSelectedRaces(events.map((event) => event.title));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleRaceSelection = (raceTitle: string) => {
        if (selectedRaces.includes(raceTitle)) {
            setSelectedRaces(selectedRaces.filter((race) => race !== raceTitle));
        } else {
            setSelectedRaces([...selectedRaces, raceTitle]);
        }
    };

    return (
        <div className="min-w-2/5 no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-64 md:border-t-0 md:border-l bg-gray-50">
            {/* Header */}
            <div className="flex w-full items-center justify-between px-1 py-2 text-gray-500 text-sm">
                <div>
                    <span className="font-medium text-gray-900">Saratoga</span>
                    {" · "}
                    {today.toLocaleDateString("en-US", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                    })}
                </div>
                <div className="text-xs">
                    {selectedRaces.length} of {events.length} selected
                </div>
            </div>

            {/* Races List */}
            <div className="flex w-full flex-col gap-3">
                {events.map((event, index) => {
                    const isSelected = selectedRaces.includes(event.title);

                    return (
                        <div
                            key={event.title}
                            onClick={() => toggleRaceSelection(event.title)}
                            className={`relative cursor-pointer rounded-lg p-3 pl-7 transition-all
                ${
                                isSelected
                                    ? "bg-blue-100 border border-blue-500 shadow-md text-gray-900"
                                    : "bg-gray-50 border border-transparent text-gray-900 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-sm"
                            }
              `}
                        >
                            {/* Left indicator bar */}
                            <div
                                className={`absolute left-2 top-3 bottom-3 w-1.5 rounded-sm transition-colors
                ${isSelected ? "bg-blue-400" : "bg-gray-300"}
              `}
                            />

                            {/* Selection indicator */}
                            <div
                                className={`absolute right-3 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border-2 transition-all
                ${
                                    isSelected
                                        ? "bg-blue-600 border-blue-600"
                                        : "bg-transparent border-gray-300"
                                }
              `}
                            >
                                {isSelected && <Check size={10} className="text-white" />}
                            </div>

                            {/* Title Row */}
                            <div className="flex justify-between font-semibold mr-7 text-sm">
                                <span>R{index + 1}</span>
                                <span className="font-medium text-sm">{event.title}</span>
                            </div>

                            {/* Time and Prize */}
                            <div className="mt-1 flex justify-between text-xs text-gray-500 mr-7">
                                <div className="flex items-center gap-1">
                                    <Clock size={12} />
                                    <span>
                    {new Date(event.from).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                  </span>
                                </div>
                                <div className="flex items-center gap-1 font-medium">$10,000</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Select All / Clear All */}
            <div className="flex gap-2 mt-2">
                <button
                    onClick={() => setSelectedRaces(events.map((event) => event.title))}
                    className="rounded-md border border-blue-500 px-3 py-1 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
                >
                    Select All
                </button>
            </div>
        </div>
    );
};

export default RacesSlots;
