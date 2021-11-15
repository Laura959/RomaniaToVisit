import { PlaceToVisitObject } from "../../models/dataModels";
import {
  SET_VISIT_SPOTS,
  SET_VISIT_SPOTS_OF_SELECTED_COUNTIES,
  ADD_NEW_VISIT_SPOT,
} from "./actions";

export const setVisitSpots = (visitSpots: PlaceToVisitObject[]) => ({
  type: SET_VISIT_SPOTS,
  payload: visitSpots,
});

export const setVisitSpotsOfSelectedCounties = (
  visitSpots: PlaceToVisitObject[][]
) => ({
  type: SET_VISIT_SPOTS_OF_SELECTED_COUNTIES,
  payload: visitSpots,
});

export const addNewVisitSpotToArray = (visitSpot: PlaceToVisitObject) => ({
  type: ADD_NEW_VISIT_SPOT,
  payload: visitSpot,
});
