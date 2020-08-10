import { AuthState, Action, ActionTypes } from "./auth.types";
import Cookie from "js-cookie";

const initialState: AuthState = {
  isAuth: false,
  user: null,
  status: "passive",
  userMessage: "",
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
        userMessage: "",
      };
    case ActionTypes.SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ActionTypes.HANDLE_FORGOT_PASSWORD:
      return {
        ...state,
        userMessage: action.payload,
      };
    case ActionTypes.SET_USER_MSG:
      return {
        ...state,
        userMessage: action.payload,
      };
    case ActionTypes.CLEAR_USER_MSG:
      return {
        ...state,
        userMessage: "",
      };
    case ActionTypes.USER_LOADED:
      return {
        ...state,
        isAuth: true,
        status: "resolved",
        user: action.payload,
        userMessage: "",
      };
    case ActionTypes.EDIT_ME:
      return {
        ...state,
        status: "resolved",
        // user:
        //   action.payload === state.user?._id ? { ...state.user } : state.user,
      };
    case ActionTypes.LOGOUT_USER:
    case ActionTypes.DELETE_ME:
      Cookie.remove("token");
      return {
        ...state,
        isAuth: false,
        status: "resolved",
        user: null,
        userMessage: "",
      };
    default:
      return state;
  }
};

export default authReducer;
