export interface PageState {
  isNavOpen: boolean;
  theme: Theme;
}

export interface SetNavOpen {
  type: "SET_NAV_OPEN";
}

export interface SetTheme {
  type: "SET_THEME";
  payload: string;
}

export type Action = SetNavOpen | SetTheme;
