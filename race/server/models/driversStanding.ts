interface Standing {
    position: number;
    points: number;
}

interface Constructor {
    name: string;
}

export interface Driver {
    firstName: string;
    lastName: string;
    standing: Standing;
    constructors: Constructor[];
}

export interface ResponseData {
    items: Driver[];
}


//Server models //