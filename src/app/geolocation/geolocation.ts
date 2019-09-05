
export class GeoLocation {
    results: [{
        geometry: geometry
    }];
    status: string;
}

export class geometry {
    viewport: ViewPort
}

export class ViewPort {
    southwest: Cords;
    northeast: Cords;
}

export class Cords {
    lat: string;
    lng: string;
}