import { Dispatch } from "react";
import {
  ActionTypes,
  RegisterUser,
  SetAuthToken,
  UserLoaded,
} from "./auth.types";
import { parseCookies } from "../../../lib/parseCookies";

const isServer = typeof window === "undefined";

export const userLoaded = (token: string) => async (
  dispatch: Dispatch<UserLoaded>,
) => {
  // let token;
  // try {
  //   const res = await fetch("http://localhost:4000/user/me", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`,
  //     },
  //   });
  //   const data = await res.json();
  //   dispatch({ type: ActionTypes.USER_LOADED, payload: data.data });
  // } catch (err) {
  //   console.log(err.message);
  // }
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
