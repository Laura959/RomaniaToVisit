export interface PlacesArray {
  [places: string]: PlaceToVisitObject[];
}

export interface ModalPlaceToVisit {
  [visitSpot: string]: PlaceToVisitObject;
}

export interface PlaceToVisitObject {
  id: number;
  name: string;
  image: string;
  location: string;
  description: string;
  county: string;
  countyId: number;
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
  location: number[];
  code: string;
  region: string;
}

export interface TraditionsDataArray {
  [traditions: string]: TraditionData[];
}

export interface TraditionData {
  id: number;
  title: string;
  image: string;
  location: string;
  origin: string;
  description: string;
}
