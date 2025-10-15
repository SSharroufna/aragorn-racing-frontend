export type Race = {
    id: string;
    race: string;
    date: string;
    time: string;
    horses: number;
    distance: string;
    surface: string;
    purse: number;
};

export type Track = {
    id: string;
    name: string;
    races: Race[];
};

export type Site = {
    id: string;
    name: string;
    logo: string;
    url: string;
    tracks: Track[];
};
