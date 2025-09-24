export type Race = {
    id: string;
    race: string;
    date: string;
    time: string;
    horses: number;
    distance: string;
    surface: 'dirt' | 'turf' | 'synthetic';
    purse: number;
};