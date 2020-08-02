import { Dispatch } from "react";
import { ActionTypes, RegisterUser } from "./auth.types";

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
  } catch (err) {
    console.error(err);
  }
};
