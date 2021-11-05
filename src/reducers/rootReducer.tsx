import { combineReducers } from "redux";
import { visitSpotsReducer, VisitSpotsState } from "./visitSpotsReducer";
import {
  authentificationReducer,
  AuthentificationState,
} from "./authentificationReducer";
import { SnackBarState, snackbarReducer } from "./snackbarReducer";
import { CountiesState, countiesReducer } from "./countiesReducer";

export interface RootState {
  visitSpots: VisitSpotsState;
  authentification: AuthentificationState;
  snackbar: SnackBarState;
  counties: CountiesState;
}

const rootReducer = combineReducers({
  visitSpots: visitSpotsReducer,
  authentification: authentificationReducer,
  snackbar: snackbarReducer,
  counties: countiesReducer,
});

export default rootReducer;
