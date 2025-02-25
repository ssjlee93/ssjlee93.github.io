import { Highlight } from './highlight.model';

export interface Exp {
    id: number;
    title: string;
    company: string;
    highlights: Highlight[];
    startDate: Date;
    endDate: Date;
    dates: string;
}