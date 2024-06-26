// models/driversStanding.ts

interface Standing {
    position: number;
    points: number;
}

interface Constructor {
    name: string;
}

interface Driver {
    id: string; 
    firstName: string;
    lastName: string;
    standing: Standing;
    constructors: Constructor[];
}

interface ResponseData {
    items: Driver[];
}

export default ResponseData;
export type { Driver }; // Export Driver type for use in components
//CLient side model