import { SET_COUNTIES_ARRAY } from "./countiesActions";
import { CountyData } from "../../models/models";

export const setCountiesArray = (counties: CountyData[]) => ({
  type: SET_COUNTIES_ARRAY,
  payload: counties,
});
