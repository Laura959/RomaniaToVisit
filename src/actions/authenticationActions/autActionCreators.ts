import { CHECK_IF_USER_ADMIN, LOGIN, LOGOUT } from "./autActions";
import { userAuthenticationData } from "../../models/authModels";

export const checkIfUserAdmin = (username: string) => ({
  type: CHECK_IF_USER_ADMIN,
  payload: username,
});

export const login = (user: userAuthenticationData) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
