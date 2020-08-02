import { AuthState, Action, ActionTypes } from "./auth.types";

const initialState: AuthState = {
  isAuth: false,
  user: null,
  status: "passive",
};

export default (state: AuthState = initialState, action: Action) => {
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

    default:
      break;
  }
};
