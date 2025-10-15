import { generateRaces } from "./utils";
import type { Site } from "@/features/types";

export const sites: Site[] = [
    {
        id: "photo-finish",
        name: "Photo Finish™ Live",
        logo: "/photo-finish.png",
        url: "https://photofinish.live/home",
        tracks: [
            {
                id: "pfl-park",
                name: "PFL Park",
                races: generateRaces("pfl-, 12"),
            },
            {
                id: "main-street",
                name: "Main Street Track",
                races: generateRaces("ms-", 9),
            },
            {
                id: "legacy-oval",
                name: "Legacy Oval",
                races: generateRaces("lo-"),
            },
        ],
    },
    {
        id: "digital-downs",
        name: "Digital Downs",
        logo: "/digital-downs.png",
        url: "https://www.digitaldowns.live",
        tracks: [
            {
                id: "digital-mile",
                name: "Digital Mile",
                races: generateRaces("dm-", 16),
            },
            {
                id: "future-grounds",
                name: "Future Grounds",
                races: generateRaces("fg-", 14),
            },
            {
                id: "blue-chip-oval",
                name: "Blue Chip Oval",
                races: generateRaces("bc-"),
            },
        ],
    },
    {
        id: "sulkyland",
        name: "Sulkyland",
        logo: "/sulkyland.png",
        url: "https://sulkyland.com/en/default.aspx",
        tracks: [
            {
                id: "sulky-dome",
                name: "Sulky Dome",
                races: generateRaces("sd-"),
            },
            {
                id: "euro-harness",
                name: "Euro Harness",
                races: generateRaces("eh-", 24),
            },
            {
                id: "franco-trot",
                name: "Franco Trot",
                races: generateRaces("ft-", 16),
            },
        ],
    },
    {
        id: "rival-stars",
        name: "Rival Stars Horse Racing",
        logo: "/horse-racing.png",
        url: "https://rivalstarshorseracing.com",
        tracks: [
            {
                id: "golden-valley",
                name: "Golden Valley",
                races: generateRaces("gv-"),
            },
            {
                id: "sunset-downs",
                name: "Sunset Downs",
                races: generateRaces("sdn-", 10),
            },
        ],
    },
    {
        id: "sport-of-kings",
        name: "Digital Stables (Sport of Kings)",
        logo: "/sport-of-kings.png",
        url: "https://www.sportofkings.us",
        tracks: [
            {
                id: "kings-track",
                name: "Kings Track",
                races: generateRaces("kt-"),
            },
            {
                id: "crown-oval",
                name: "Crown Oval",
                races: generateRaces("co-", 14),
            },
        ],
    },
    {
        id: "betradar",
        name: "Betradar",
        logo: "/betrader.png",
        url: "https://www.betradar.com/virtual-sports-betting/virtual-horses/",
        tracks: [
            {
                id: "radar-park",
                name: "Radar Park",
                races: generateRaces("rp-"),
            },
            {
                id: "betline-track",
                name: "Betline Track",
                races: generateRaces("blt-"),
            },
        ],
    },
    {
        id: "william-hill",
        name: "William Hill",
        logo: "/william-hill.png",
        url: "https://www.williamhill.us/virtual-racing/",
        tracks: [
            {
                id: "hill-top",
                name: "Hill Top",
                races: generateRaces("ht-", 6),
            },
        ],
    },
    {
        id: "global-bet",
        name: "Global Bet",
        logo: "/global-bet.png",
        url: "https://www.globalbet.com/games/virtual-horses",
        tracks: [
            {
                id: "gb-oval",
                name: "Global Oval",
                races: generateRaces("gb-"),
            },
            {
                id: "vegas-stretch",
                name: "Vegas Stretch",
                races: generateRaces("vs-"),
            },
        ],
    },
    {
        id: "bet-viral",
        name: "BetViral",
        logo: "/bet-viral.png",
        url: "https://www.betvirtual.co",
        tracks: [
            {
                id: "viral-track",
                name: "Viral Track",
                races: generateRaces("vt-", 4),
            },
        ],
    },
    {
        id: "horse-race-game",
        name: "HorseRaceGame.com",
        logo: "/horse-race-game.png",
        url: "https://www.horseracegame.com",
        tracks: [
            {
                id: "hrg-stadium",
                name: "HRG Stadium",
                races: generateRaces("hrg-", 12),
            },
        ],
    },
    {
        id: "horseracingnation",
        name: "Horse Racing Nation",
        logo: "/horse-nation.png",
        url: "https://www.horseracingnation.com",
        tracks: [
            {
                id: "nation-mile",
                name: "Nation Mile",
                races: generateRaces("nm-", 12),
            },
            {
                id: "capitol-track",
                name: "Capitol Track",
                races: generateRaces("ct-", 7),
            },
        ],
    },
];
