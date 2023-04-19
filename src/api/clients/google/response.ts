export interface GoogleResults {
  results: Result[];
  status: string;
}

interface Result {
  address_components: Addresscomponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: string[];
}

interface Geometry {
  bounds: Bounds;
  location: Location;
  location_type: string;
  viewport: Bounds;
}

interface Bounds {
  northeast: Location;
  southwest: Location;
}

interface Location {
  lat: number;
  lng: number;
}

interface Addresscomponent {
  long_name: string;
  short_name: string;
  types: string[];
}
