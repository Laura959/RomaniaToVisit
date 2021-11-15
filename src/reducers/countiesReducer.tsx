import { Action } from "../actions/action";
import {
  SET_COUNTIES_ARRAY,
  SET_SELECTED_COUNTIES_ARRAY,
} from "../actions/countiesActions/countiesActions";
import { CountyData } from "../models/dataModels";

export interface CountiesState {
  countiesArray: CountyData[];
  selectedCountiesArray: CountyData[];
}

export const initialCountiesState = {
  countiesArray: [],
  selectedCountiesArray: [],
};

export const countiesReducer = (
  state: CountiesState = initialCountiesState,
  action: Action
) => {
  switch (action.type) {
    case SET_COUNTIES_ARRAY: {
      return {
        ...state,
        countiesArray: action.payload,
      };
    }
    case SET_SELECTED_COUNTIES_ARRAY: {
      return {
        ...state,
        selectedCountiesArray: action.payload,
      };
    }
    default:
      return state;
  }
};
