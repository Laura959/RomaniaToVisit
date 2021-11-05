import { Action } from "../actions/action";
import { DISPLAY_HIDE_SNACKBAR } from "../actions/snackbarActions/snackbarActions";

export interface SnackBarState {
  isSnackbarVisible: boolean;
}

export const initialSnackbarState = {
  isSnackbarVisible: false,
};

export const snackbarReducer = (
  state: SnackBarState = initialSnackbarState,
  action: Action
) => {
  switch (action.type) {
    case DISPLAY_HIDE_SNACKBAR: {
      return {
        ...state,
        isSnackbarVisible: action.payload,
      };
    }
    default:
      return state;
  }
};
