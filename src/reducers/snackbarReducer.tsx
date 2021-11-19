import { Action } from "../actions/action";
import {
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from "../actions/snackbarActions/snackbarActions";

export interface SnackBarState {
  isSnackbarVisible: boolean;
  snackbarText: string;
}

export const initialSnackbarState = {
  isSnackbarVisible: false,
  snackbarText: "",
};

export const snackbarReducer = (
  state: SnackBarState = initialSnackbarState,
  action: Action
) => {
  switch (action.type) {
    case OPEN_SNACKBAR: {
      return {
        ...state,
        isSnackbarVisible: true,
        snackbarText: action.payload,
      };
    }
    case CLOSE_SNACKBAR: {
      return {
        ...state,
        isSnackbarVisible: false,
      };
    }
    default:
      return state;
  }
};
