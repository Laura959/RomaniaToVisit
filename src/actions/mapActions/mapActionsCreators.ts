import { SET_SHOW_HIDE_ROUTES, SET_SHOW_HIDE_MAP } from "./mapActions";

export const setShowHideRoutes = (show: boolean) => ({
  type: SET_SHOW_HIDE_ROUTES,
  payload: show,
});

export const setShowHideMap = (showMap: boolean) => ({
  type: SET_SHOW_HIDE_MAP,
  payload: showMap,
});
