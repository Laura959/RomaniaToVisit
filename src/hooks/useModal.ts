import {
  openModal,
  closeModal,
} from "../actions/modalActions/modalActionCreators";
import { useDispatch } from "react-redux";

const useModal = () => {
  const dispatch = useDispatch();

  const openModalHandler = (modalType: any, data?: any) => {
    dispatch(openModal({ modalType: modalType, data: data }));
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  return {
    openModalHandler,
    closeModalHandler,
  };
};

export default useModal;
