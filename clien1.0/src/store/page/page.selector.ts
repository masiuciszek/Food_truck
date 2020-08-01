import { createSelector } from "reselect";
import { AppState } from "..";
import { PageState } from "./page.types";

const pageState = (state: AppState) => state.page;

export const selectTheme = createSelector(
  [pageState],
  (state: PageState) => state.theme,
);
export const selectNavOpen = createSelector(
  [pageState],
  (state: PageState) => state.isNavOpen,
);
