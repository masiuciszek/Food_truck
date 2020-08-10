import { createSelector } from "reselect";
import { AppState } from "..";
import { AuthState } from "./auth.types";

const authState = (state: AppState) => state.auth;

export const selectIsAuth = createSelector(
  [authState],
  (state: AuthState) => state.isAuth,
);

export const selectToken = createSelector(
  [authState],
  (state: AuthState) => state.token,
);

export const selectUserMessage = createSelector(
  [authState],
  (state: AuthState) => state.userMessage,
);

export const selectUser = createSelector(
  [authState],
  (state: AuthState) => state.user,
);
