import { Dispatch } from "./AuthType";

export const getMe = (token: string) => async (
  dispatch: Dispatch,
): Promise<void> => {
  const response = await fetch("http://localhost:4000/auth/get_me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = await response.json();
  dispatch({ type: "USER_LOADED", payload: data });
};
