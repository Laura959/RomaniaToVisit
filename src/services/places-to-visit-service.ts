import axios from "axios";
import { PlacesArray, CountiesDataArray } from "../models/models";

export const getPlacesToVisitArray = async () => {
  return axios.get<PlacesArray>("PlacesToVisit.json");
};

export const getCountiesDataArray = async () => {
  return axios.get<CountiesDataArray>("countiesData.json");
};
