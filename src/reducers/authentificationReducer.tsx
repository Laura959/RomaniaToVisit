import { Action } from "../actions/action";
import { CHECK_IF_USER_ADMIN } from "../actions/authentificationActions/autActions";
import { userData } from "../models/authModels";

const users = [
  { id: 1, username: "laura", password: "something", role: "user" },
  { id: 2, username: "admin", password: "admin", role: "admin" },
];

export interface AuthentificationState {
  usersList: userData[];
  isAdmin: boolean;
}

export const initialAuthentificationState = {
  usersList: users,
  isAdmin: false,
};

export const authentificationReducer = (
  state: AuthentificationState = initialAuthentificationState,
  action: Action
) => {
  switch (action.type) {
    case CHECK_IF_USER_ADMIN: {
      const userFromUserlist = state.usersList.filter(
        (user) => user.username === action.payload
      );
      const isUserAdmin = userFromUserlist[0].role === "admin";
      return {
        ...state,
        isAdmin: isUserAdmin,
      };
    }
    default:
      return state;
  }
};
