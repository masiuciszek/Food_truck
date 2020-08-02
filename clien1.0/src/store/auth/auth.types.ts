export interface AuthState {
  isAuth: boolean;
  user: User | null;
  status: Status;
}

export enum ActionTypes {
  REGISTER_USER = "REGISTER_USER",
  LOGIN_USER = "LOGIN_USER",
}

export interface RegisterUser {
  type: ActionTypes.REGISTER_USER;
  payload: RegisterLoginResponse;
}

export interface LoginUser {
  type: ActionTypes.LOGIN_USER;
  payload: RegisterLoginResponse;
}

export type Action = RegisterUser | LoginUser;
