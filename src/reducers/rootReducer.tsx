import { combineReducers } from "redux";
import { visitSpotsReducer, VisitSpotsState } from "./visitSpotsReducer";
import {
  authentificationReducer,
  AuthentificationState,
} from "./authentificationReducer";

export interface RootState {
  visitSpots: VisitSpotsState;
  authentification: AuthentificationState;
}

const rootReducer = combineReducers({
  visitSpots: visitSpotsReducer,
  authentification: authentificationReducer,
});

export default rootReducer;
