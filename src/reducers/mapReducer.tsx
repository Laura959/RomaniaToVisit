import { Action } from "../actions/action";
import {
  SET_SHOW_HIDE_ROUTES,
  SET_SHOW_HIDE_MAP,
} from "../actions/mapActions/mapActions";

export interface MapState {
  showMap: boolean;
  showRoutes: boolean;
}

export const initialMapState = {
  showMap: false,
  showRoutes: false,
};

export const mapReducer = (
  state: MapState = initialMapState,
  action: Action
) => {
  switch (action.type) {
    case SET_SHOW_HIDE_ROUTES: {
      return {
        ...state,
        showRoutes: action.payload,
      };
    }
    case SET_SHOW_HIDE_MAP: {
      return {
        ...state,
        showMap: action.payload,
      };
    }
    default:
      return state;
  }
};
