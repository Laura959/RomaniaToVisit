import axios from "axios";
import {
  PlacesArray,
  CountiesDataArray,
  TraditionsDataArray,
} from "../models/dataModels";

export const getPlacesToVisitArray = async () => {
  return axios.get<PlacesArray>("PlacesToVisit.json");
};

export const getCountiesDataArray = async () => {
  return axios.get<CountiesDataArray>("countiesData.json");
};

export const getTraditionsDataArray = async () => {
  return axios.get<TraditionsDataArray>("traditions.json");
};
