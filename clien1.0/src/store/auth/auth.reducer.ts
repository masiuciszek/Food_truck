import { AuthState, Action, ActionTypes } from "./auth.types";

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
      window.localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        status: "resolved",
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
    case ActionTypes.SET_LOGGED_IN:
      return {
        ...state,
        isAuth: action.payload,
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
