import { AuthState, Action, ActionTypes } from "./auth.types";
import Cookie from "js-cookie";

const initialState: AuthState = {
  isAuth: false,
  user: null,
  status: "passive",
  userError: "",
  token: "",
};

const authReducer = (state: AuthState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER:
    case ActionTypes.LOGIN_USER:
      Cookie.set("token", action.payload);
      return {
        ...state,
        isAuth: true,
        status: "resolved",
      };
    case ActionTypes.SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ActionTypes.SET_ERROR_MSG:
      return {
        ...state,
        userError: action.payload,
      };
    case ActionTypes.CLEAR_ERROR_MSG:
      return {
        ...state,
        userError: "",
      };
    case ActionTypes.USER_LOADED:
      return {
        ...state,
        isAuth: true,
        status: "resolved",
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
