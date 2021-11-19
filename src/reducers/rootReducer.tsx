import { combineReducers } from "redux";
import { visitSpotsReducer, VisitSpotsState } from "./visitSpotsReducer";
import {
  authentificationReducer,
  AuthentificationState,
} from "./authentificationReducer";
import { SnackBarState, snackbarReducer } from "./snackbarReducer";
import { CountiesState, countiesReducer } from "./countiesReducer";
import { ModalState, modalReducer } from "./modalReducer";
import { TraditionsState, traditionsReducer } from "./traditionsReducer";
import { MapState, mapReducer } from "./mapReducer";

export interface RootState {
  visitSpots: VisitSpotsState;
  authentification: AuthentificationState;
  snackbar: SnackBarState;
  counties: CountiesState;
  modals: ModalState;
  traditions: TraditionsState;
  map: MapState;
}

const rootReducer = combineReducers({
  visitSpots: visitSpotsReducer,
  authentification: authentificationReducer,
  snackbar: snackbarReducer,
  counties: countiesReducer,
  modals: modalReducer,
  traditions: traditionsReducer,
  map: mapReducer,
});

export default rootReducer;
