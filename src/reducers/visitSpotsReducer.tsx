import { Action } from "../actions/action";
import {
  SET_VISIT_SPOTS,
  SET_VISIT_SPOTS_OF_SELECTED_COUNTIES,
  ADD_NEW_VISIT_SPOT,
} from "../actions/visitSpots/actions";
import { PlaceToVisitObject } from "../models/dataModels";

export interface VisitSpotsState {
  visitSpotsArray: PlaceToVisitObject[];
  visitSpotsOfCountiesArray: PlaceToVisitObject[][];
}

export const initialVisitSpotsState = {
  visitSpotsArray: [],
  visitSpotsOfCountiesArray: [],
};

export const visitSpotsReducer = (
  state: VisitSpotsState = initialVisitSpotsState,
  action: Action
) => {
  switch (action.type) {
    case SET_VISIT_SPOTS: {
      return {
        ...state,
        visitSpotsArray: action.payload,
      };
    }
    case SET_VISIT_SPOTS_OF_SELECTED_COUNTIES: {
      return {
        ...state,
        visitSpotsOfCountiesArray: action.payload,
      };
    }
    case ADD_NEW_VISIT_SPOT: {
      const updatedVisitSpotsArray = [action.payload, ...state.visitSpotsArray];
      return {
        ...state,
        visitSpotsArray: updatedVisitSpotsArray,
      };
    }
    default:
      return state;
  }
};
