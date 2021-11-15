import { Action } from "../actions/action";
import {
  SET_TRADITIONS_ARRAY,
  ADD_NEW_TRADITION,
} from "../actions/traditionActions/traditionActions";
import { TraditionData } from "../models/dataModels";

export interface TraditionsState {
  traditionsArray: TraditionData[];
}

export const initialTraditionsState = {
  traditionsArray: [],
};

export const traditionsReducer = (
  state: TraditionsState = initialTraditionsState,
  action: Action
) => {
  switch (action.type) {
    case SET_TRADITIONS_ARRAY: {
      return {
        ...state,
        traditionsArray: action.payload,
      };
    }
    case ADD_NEW_TRADITION: {
      const updatedTraditionsArray = [action.payload, ...state.traditionsArray];
      return {
        ...state,
        traditionsArray: updatedTraditionsArray,
      };
    }
    default:
      return state;
  }
};
