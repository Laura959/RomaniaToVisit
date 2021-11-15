import { Action } from "../actions/action";
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modalActions/modalActions";
import { ModalPlaceToVisit } from "../models/dataModels";

export interface ModalState {
  isModalVisible: boolean;
  modalType: string;
  modalData: ModalPlaceToVisit | null;
}

export const initialModalState = {
  isModalVisible: false,
  modalType: "FORM",
  modalData: null,
};

export const modalReducer = (
  state: ModalState = initialModalState,
  action: Action
) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        isModalVisible: true,
        modalType: action.payload.modalType,
        modalData: action.payload.data,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isModalVisible: false,
      };
    }
    default:
      return state;
  }
};
