import { Dispatch } from "react";
import {
  ActionTypes,
  LogoutUser,
  RegisterUser,
  SetAuthToken,
  SetErrorMsg,
  UserLoaded,
} from "./auth.types";

const isServer = typeof window === "undefined";

export const userLoaded = (token: string) => async (
  dispatch: Dispatch<UserLoaded | SetErrorMsg>,
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
      type: ActionTypes.SET_ERROR_MSG,
      payload: "Ooops Something went wrong",
    });
  }
};

export const registerUser = (formData: RegisterFormData) => async (
  dispatch: Dispatch<RegisterUser>,
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

    // userLoaded();
  } catch (err) {
    console.error(err);
  }
};

export const setAuthToken = (token: string): SetAuthToken => {
  return { type: ActionTypes.SET_AUTH_TOKEN, payload: token };
};

export const logoutUser = (token: string) => async (
  dispatch: Dispatch<LogoutUser>,
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
  }
};
