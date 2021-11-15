import {
  SET_COUNTIES_ARRAY,
  SET_SELECTED_COUNTIES_ARRAY,
} from "./countiesActions";
import { CountyData } from "../../models/dataModels";

export const setCountiesArray = (counties: CountyData[]) => ({
  type: SET_COUNTIES_ARRAY,
  payload: counties,
});

export const setSelectedCountiesArray = (selectedCounties: CountyData[]) => ({
  type: SET_SELECTED_COUNTIES_ARRAY,
  payload: selectedCounties,
});
