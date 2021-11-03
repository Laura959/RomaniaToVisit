export interface PlacesArray {
  [places: string]: PlaceToVisitObject[];
}

export interface PlaceToVisitObject {
  id: number;
  name: string;
  image: string;
  location: string;
  description: string;
  county: string;
  nearTown: boolean;
  mountainArea: boolean;
  positiveReviews: string[];
  negativeReviews: string[];
}

export interface CountiesDataArray {
  [counties: string]: CountyData[];
}

export interface CountyData {
  id: number;
  county: string;
  population: number;
  size: number;
  code: string;
  region: string;
}
