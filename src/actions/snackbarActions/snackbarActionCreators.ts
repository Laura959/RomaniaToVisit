import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "./snackbarActions";

export const openSnackbar = (text: string) => ({
  type: OPEN_SNACKBAR,
  payload: text,
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});
