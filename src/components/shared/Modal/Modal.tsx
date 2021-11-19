import { Dialog } from "@mui/material";
import FormModal from "./FormModal/FormModal";
import InfoModal from "./InfoModal/InfoModal";
import TraditionModal from "./FormModalTradition/FormModalTradition";
import { useSelector } from "react-redux";
import useModal from "../../../hooks/useModal";
import { RootState } from "../../../reducers/rootReducer";
import ReactDOM from "react-dom";

const Modal = () => {
  const { closeModalHandler } = useModal();
  const modalState = useSelector((state: RootState) => state.modals);

  const handleClose = () => {
    closeModalHandler();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Dialog onClose={handleClose} open={modalState.isModalVisible}>
          {modalState.modalType === "FORM" && (
            <FormModal onFormModalClose={handleClose} />
          )}
          {modalState.modalType === "INFO" && (
            <InfoModal onInfoModalClose={handleClose} />
          )}
          {modalState.modalType === "TRADITIONFORM" && (
            <TraditionModal onTraditionFormClose={handleClose} />
          )}
        </Dialog>,
        document.getElementById("modal-root")!
      )}
    </>
  );
};

export default Modal;
