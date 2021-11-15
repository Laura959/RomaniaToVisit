import { OPEN_MODAL, CLOSE_MODAL } from "./modalActions";
import { PlaceToVisitObject } from "../../models/dataModels";

interface modalProperties {
  modalType: string;
  data?: { visitSpot: PlaceToVisitObject };
}

export const openModal = (data: modalProperties) => ({
  type: OPEN_MODAL,
  payload: data,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
