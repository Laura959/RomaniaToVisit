import { forwardRef } from "react";
import { Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/rootReducer";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import useSnackbar from "../../../hooks/useSnackbar";
import ReactDOM from "react-dom";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarMessage = () => {
  const { closeSnackbarHandler } = useSnackbar();
  const isSnackBarOpen = useSelector(
    (state: RootState) => state.snackbar.isSnackbarVisible
  );
  const snackBarText = useSelector(
    (state: RootState) => state.snackbar.snackbarText
  );

  const handleClose = () => {
    closeSnackbarHandler();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Snackbar
          open={isSnackBarOpen}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {snackBarText}
          </Alert>
        </Snackbar>,
        document.getElementById("snackbar-root")!
      )}
    </>
  );
};

export default SnackbarMessage;
