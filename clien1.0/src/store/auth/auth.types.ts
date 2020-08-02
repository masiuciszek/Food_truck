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
  SET_ERROR_MSG = "SET_ERROR_MSG",
  CLEAR_ERROR_MSG = "CLEAR_ERROR_MSG",
  SET_LOGGED_IN = "SET_LOGGED_IN",
}

export interface RegisterUser {
  type: ActionTypes.REGISTER_USER;
  payload: RegisterLoginResponse;
}
export interface UserLoaded {
  type: ActionTypes.USER_LOADED;
  payload: User;
}

export interface SetLoggedIn {
  type: ActionTypes.SET_LOGGED_IN;
  payload: boolean;
}

export interface LoginUser {
  type: ActionTypes.LOGIN_USER;
  payload: RegisterLoginResponse;
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
  | ClearErrorMsg
  | SetLoggedIn;
