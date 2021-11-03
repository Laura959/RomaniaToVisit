import { CHECK_IF_USER_ADMIN } from "./autActions";

export const checkIfUserAdmin = (username: string) => ({
  type: CHECK_IF_USER_ADMIN,
  payload: username,
});
