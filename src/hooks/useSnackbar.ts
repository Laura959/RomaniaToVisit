import {
  openSnackbar,
  closeSnackbar,
} from "../actions/snackbarActions/snackbarActionCreators";
import { useDispatch } from "react-redux";

const useSnackbar = () => {
  const dispatch = useDispatch();

  const openSnackbarHandler = (text: string) => {
    dispatch(openSnackbar(text));
  };

  const closeSnackbarHandler = () => {
    dispatch(closeSnackbar());
  };
  return {
    openSnackbarHandler,
    closeSnackbarHandler,
  };
};

export default useSnackbar;
