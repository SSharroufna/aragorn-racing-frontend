export type Race = {
    id: string;
    race: string;
    date: string;
    time: string;
    distance: string;
    surface: 'dirt' | 'turf' | 'synthetic';
    purse: number;
};