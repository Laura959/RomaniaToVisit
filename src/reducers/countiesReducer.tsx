import { Action } from "../actions/action";
import { SET_COUNTIES_ARRAY } from "../actions/countiesActions/countiesActions";
import { CountyData } from "../models/models";

export interface CountiesState {
  countiesArray: CountyData[];
}

export const initialCountiesState = {
  countiesArray: [],
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
    default:
      return state;
  }
};
