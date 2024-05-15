// models/driversStanding.ts

interface Driver {
    id: string;
    name: string;
    team: string;
    points: number;
}

interface Drivers_Standing {
    season: number;
    constructorName: string;
    drivers: Driver[];
}

export default Drivers_Standing;
