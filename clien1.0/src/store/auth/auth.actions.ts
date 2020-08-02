import { Dispatch } from "react";
import {
  ActionTypes,
  RegisterUser,
  SetLoggedIn,
  UserLoaded,
} from "./auth.types";

const isServer = typeof window === "undefined";

export const userLoaded = () => async (dispatch: Dispatch<UserLoaded>) => {
  let token;
  if (!isServer) {
    let header = new Headers();
    token = window.localStorage.getItem("token") || "";
    header.set("Authorization", token);
  }
  try {
    const res = await fetch("http://localhost:4000/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });

    const data = await res.json();

    dispatch({ type: ActionTypes.USER_LOADED, payload: data.data });
  } catch (err) {
    console.log(err.message);
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

    const data = await res.json();

    dispatch({
      type: ActionTypes.REGISTER_USER,
      payload: data,
    });
    userLoaded();
  } catch (err) {
    console.error(err);
  }
};

export const isLoggedIn = (): SetLoggedIn => {
  if (!isServer) {
    console.log(window.localStorage.token);
    let token = window.localStorage.getItem("token") || "";
    const isLoggedIn = token ? true : false;
    return { type: ActionTypes.SET_LOGGED_IN, payload: isLoggedIn };
  } else {
    return { type: ActionTypes.SET_LOGGED_IN, payload: false };
  }
};
