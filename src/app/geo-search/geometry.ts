export interface Geometry {
  results: [
    {
      geometry: GeometryProp;
    }
  ];
  status: string;
}

export interface GeometryProp {
  viewport: ViewPort;
}

export interface ViewPort {
  southwest: Cords;
  northeast: Cords;
}

export interface Cords {
  lat: string;
  lng: string;
}
