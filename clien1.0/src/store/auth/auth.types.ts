export interface AuthState {
  isAuth: boolean;
  user: User | null;
  status: Status;
  userMessage: UserMessage;
  token: string;
}

export enum ActionTypes {
  REGISTER_USER = "REGISTER_USER",
  USER_LOADED = "USER_LOADED",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  SET_AUTH_TOKEN = "SET_AUTH_TOKEN",
  SET_USER_MSG = "SET_USER_MSG",
  CLEAR_USER_MSG = "CLEAR_USER_MSG",
  HANDLE_FORGOT_PASSWORD = "HANDLE_FORGOT_PASSWORD",
}

export interface RegisterUser {
  type: ActionTypes.REGISTER_USER;
  payload: string;
}
export interface UserLoaded {
  type: ActionTypes.USER_LOADED;
  payload: User;
}

export interface SetAuthToken {
  type: ActionTypes.SET_AUTH_TOKEN;
  payload: string;
}

export interface LoginUser {
  type: ActionTypes.LOGIN_USER;
  payload: string;
}
export interface LogoutUser {
  type: ActionTypes.LOGOUT_USER;
}

export interface SerUserMessage {
  type: ActionTypes.SET_USER_MSG;
  payload: UserMessage;
}
export interface ClearUserMsg {
  type: ActionTypes.CLEAR_USER_MSG;
}

export interface ForgotPassword {
  type: ActionTypes.HANDLE_FORGOT_PASSWORD;
  payload: UserMessage;
}

export type Action =
  | RegisterUser
  | LoginUser
  | LogoutUser
  | SerUserMessage
  | UserLoaded
  | SetAuthToken
  | ForgotPassword
  | ClearUserMsg;
