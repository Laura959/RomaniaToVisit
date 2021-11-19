import { Action } from "../actions/action";
import {
  SET_COUNTIES_ARRAY,
  SET_SELECTED_COUNTIES_ARRAY,
  SET_COUNTIES_WITH_VISIT_SPOTS_ARRAY,
} from "../actions/countiesActions/countiesActions";
import { CountyData, PlaceToVisitObject } from "../models/dataModels";

export interface CountiesState {
  countiesArray: CountyData[];
  selectedCountiesArray: CountyData[];
  countiesWithVisitSpotsArray: CountyData[];
}

export const initialCountiesState = {
  countiesArray: [],
  selectedCountiesArray: [],
  countiesWithVisitSpotsArray: [],
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
    case SET_COUNTIES_WITH_VISIT_SPOTS_ARRAY: {
      const allCountiesWithVisitSpots = action.payload.visitSpots.map(
        (visitSpot: PlaceToVisitObject) =>
          action.payload.counties.filter(
            (countyName: CountyData) => countyName.county === visitSpot.county
          )
      );

      const countiesTitles = allCountiesWithVisitSpots.map(
        (countyObj: any) => countyObj[0].county
      );

      const countiesArrayWithoutDublicates = countiesTitles.filter(
        (county: string, index: number) =>
          countiesTitles.indexOf(county) === index
      );

      const countiesData = countiesArrayWithoutDublicates.map(
        (countyTitle: string) =>
          action.payload.counties.filter(
            (countyObj: CountyData) => countyObj.county === countyTitle
          )
      );

      const countiesWithVisitSpots = countiesData
        .map((county: any) => county[0])
        .sort((a: any, b: any) => a.id - b.id);
      return {
        ...state,
        countiesWithVisitSpotsArray: countiesWithVisitSpots,
      };
    }
    default:
      return state;
  }
};
