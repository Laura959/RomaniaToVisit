import { TraditionData } from "../../models/dataModels";
import { SET_TRADITIONS_ARRAY, ADD_NEW_TRADITION } from "./traditionActions";

export const setTraditionsArray = (traditions: TraditionData[]) => ({
  type: SET_TRADITIONS_ARRAY,
  payload: traditions,
});

export const addNewTradition = (tradition: TraditionData) => ({
  type: ADD_NEW_TRADITION,
  payload: tradition,
});
