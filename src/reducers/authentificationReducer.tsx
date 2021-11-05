import { Action } from "../actions/action";
import {
  CHECK_IF_USER_ADMIN,
  LOGIN,
  LOGOUT,
} from "../actions/authenticationActions/autActions";
import { userData } from "../models/authModels";

const users = [
  { id: 1, username: "laura", password: "something", role: "user" },
  { id: 2, username: "admin", password: "admin123", role: "admin" },
];

export interface AuthentificationState {
  usersList: userData[];
  isAdmin: boolean;
  isUserAuthenticated: boolean;
}

export const initialAuthentificationState = {
  usersList: users,
  isAdmin: false,
  isUserAuthenticated: false,
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
      let isUserAdmin = false;
      if (userFromUserlist.length > 0) {
        isUserAdmin = userFromUserlist[0].role === "admin";
      }
      return {
        ...state,
        isAdmin: isUserAdmin,
      };
    }
    case LOGIN: {
      const isUsernameExists = state.usersList.filter(
        (user) => user.username === action.payload.username
      );
      let isPasswordValid;
      if (isUsernameExists.length !== 0) {
        isPasswordValid =
          isUsernameExists[0].password === action.payload.password;
      } else {
        isPasswordValid = false;
      }
      return {
        ...state,
        isUserAuthenticated: isPasswordValid,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isUserAuthenticated: false,
      };
    }
    default:
      return state;
  }
};
