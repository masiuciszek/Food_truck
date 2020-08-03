import { createSelector } from "reselect";
import { AppState } from "..";
import { AuthState } from "./auth.types";

const authState = (state: AppState) => state.auth;

export const selectIsAuth = createSelector(
  [authState],
  (state: AuthState) => state.isAuth,
);
