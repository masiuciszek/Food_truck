export interface AuthState {
  isAuth: boolean;
  user: User | null;
  status: Status;
  userError: ErrorMessage;
  token: string;
}

export enum ActionTypes {
  REGISTER_USER = "REGISTER_USER",
  USER_LOADED = "USER_LOADED",
  LOGIN_USER = "LOGIN_USER",
  SET_AUTH_TOKEN = "SET_AUTH_TOKEN",
  SET_ERROR_MSG = "SET_ERROR_MSG",
  CLEAR_ERROR_MSG = "CLEAR_ERROR_MSG",
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

export interface SetErrorMsg {
  type: ActionTypes.SET_ERROR_MSG;
  payload: ErrorMessage;
}
export interface ClearErrorMsg {
  type: ActionTypes.CLEAR_ERROR_MSG;
}

export type Action =
  | RegisterUser
  | LoginUser
  | SetErrorMsg
  | UserLoaded
  | SetAuthToken
  | ClearErrorMsg;
