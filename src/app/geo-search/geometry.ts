export class Geometry {
    results: [{
        geometry:  GeometryProp
    }];
    status: string
}


export class GeometryProp {
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