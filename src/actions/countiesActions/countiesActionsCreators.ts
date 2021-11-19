import {
  SET_COUNTIES_ARRAY,
  SET_SELECTED_COUNTIES_ARRAY,
  SET_COUNTIES_WITH_VISIT_SPOTS_ARRAY,
} from "./countiesActions";
import { CountyData, PlaceToVisitObject } from "../../models/dataModels";

interface CountiesAndVisitSpots {
  counties: CountyData[];
  visitSpots: PlaceToVisitObject[];
}

export const setCountiesArray = (counties: CountyData[]) => ({
  type: SET_COUNTIES_ARRAY,
  payload: counties,
});

export const setSelectedCountiesArray = (selectedCounties: CountyData[]) => ({
  type: SET_SELECTED_COUNTIES_ARRAY,
  payload: selectedCounties,
});

export const setCountiesWithVisitSpotsArray = (
  countiesAndVisitSpots: CountiesAndVisitSpots
) => ({
  type: SET_COUNTIES_WITH_VISIT_SPOTS_ARRAY,
  payload: countiesAndVisitSpots,
});
