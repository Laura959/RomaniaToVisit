import { forwardRef } from "react";
import { Snackbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { displayOrHideSnackbar } from "../../../actions/snackbarActions/snackbarActionCreators";
import { RootState } from "../../../reducers/rootReducer";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarMessage = () => {
  const dispatch = useDispatch();
  const isSnackBarOpen = useSelector(
    (state: RootState) => state.snackbar.isSnackbarVisible
  );

  const closeSnackbar = () => {
    dispatch(displayOrHideSnackbar(false));
  };

  return (
    <Snackbar
      open={isSnackBarOpen}
      autoHideDuration={4000}
      onClose={closeSnackbar}
    >
      <Alert onClose={closeSnackbar} severity="success" sx={{ width: "100%" }}>
        Your visit spot was successfully created!
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
