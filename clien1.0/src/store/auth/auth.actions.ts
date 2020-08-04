/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch } from "react";
import {
  ActionTypes,
  ForgotPassword,
  LoginUser,
  LogoutUser,
  RegisterUser,
  SetAuthToken,
  SerUserMessage,
  UserLoaded,
  ClearUserMsg,
} from "./auth.types";

// const isServer = typeof window === "undefined";

export const userLoaded = (token: string) => async (
  dispatch: Dispatch<UserLoaded | SerUserMessage>,
) => {
  try {
    const res = await fetch("http://localhost:4000/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: UserLoadedResponse = await res.json();

    dispatch({ type: ActionTypes.USER_LOADED, payload: data.data });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: ActionTypes.SET_USER_MSG,
      payload: "Ooops Something went wrong",
    });
  }
};

export const registerUser = (formData: RegisterFormData) => async (
  dispatch: Dispatch<RegisterUser | SerUserMessage>,
) => {
  try {
    const res = await fetch("http://localhost:4000/user/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: TokenResponse = await res.json();

    dispatch({
      type: ActionTypes.REGISTER_USER,
      payload: data.token,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: ActionTypes.SET_USER_MSG,
      payload: "Ooops Something went wrong",
    });
  }
};

export const loginUser = (loginData: LoginData) => async (
  dispatch: Dispatch<LoginUser | SerUserMessage>,
) => {
  try {
    const res = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data: TokenResponse = await res.json();
    dispatch({ type: ActionTypes.LOGIN_USER, payload: data.token });
  } catch (err) {
    console.error(err);
    dispatch({
      type: ActionTypes.SET_USER_MSG,
      payload: "input invalid",
    });
  }
};

export const setAuthToken = (token: string): SetAuthToken => {
  return { type: ActionTypes.SET_AUTH_TOKEN, payload: token };
};

export const getNewPasswordToken = (email: string) => async (
  dispatch: Dispatch<ForgotPassword | SerUserMessage>,
) => {
  try {
    await fetch("http://localhost:4000/user/forgot_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    dispatch({
      type: ActionTypes.HANDLE_FORGOT_PASSWORD,
      payload: "reset token sent to your email",
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: ActionTypes.SET_USER_MSG,
      payload: "Please Try Again",
    });
  }
};

export const clearUserMessage = (): ClearUserMsg => {
  return {
    type: ActionTypes.CLEAR_USER_MSG,
  };
};

export const logoutUser = (token: string) => async (
  dispatch: Dispatch<LogoutUser | SerUserMessage>,
) => {
  try {
    await fetch("http://localhost:4000/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: ActionTypes.LOGOUT_USER });
  } catch (err) {
    console.error(err);
    dispatch({
      type: ActionTypes.SET_USER_MSG,
      payload: "Ooops Something went wrong",
    });
  }
};
