import { Dialog } from "@mui/material";
import FormModal from "./FormModal/FormModal";
import InfoModal from "./InfoModal/InfoModal";
import TraditionModal from "./FormModalTradition/FormModalTradition";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/rootReducer";
import { closeModal } from "../../../actions/modalActions/modalActionCreators";

const Modal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modals);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog onClose={handleClose} open={modalState.isModalVisible}>
      {modalState.modalType === "FORM" && <FormModal onClose={handleClose} />}
      {modalState.modalType === "INFO" && <InfoModal onClose={handleClose} />}
      {modalState.modalType === "TRADITIONFORM" && (
        <TraditionModal onClose={handleClose} />
      )}
    </Dialog>
  );
};

export default Modal;
