import { DISPLAY_HIDE_SNACKBAR } from "./snackbarActions";

export const displayOrHideSnackbar = (isDisplayed: boolean) => ({
  type: DISPLAY_HIDE_SNACKBAR,
  payload: isDisplayed,
});
