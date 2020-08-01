import { SetNavOpen, SetTheme } from "./page.types";

export const handleNavOpen = (): SetNavOpen => {
  return { type: "SET_NAV_OPEN" };
};
export const handleTheme = (theme: string): SetTheme => {
  return { type: "SET_THEME", payload: theme };
};
