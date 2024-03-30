import { Person } from "./Person";




export type Wine = {
    id: string;
    name: string;
    region?: string | null;
    country?: string | null;
    grapeVariety?: string | null;
    color: string;
    year: number;
    price?: number | null;
    rate?: number | null;
    opinion?: string | null;
    quantity?: number | null;
    offerBy?: Person | null;
}