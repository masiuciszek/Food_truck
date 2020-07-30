import { PageState, Action } from "./page.types";

const initialState: PageState = {
  isNavOpen: false,
  theme: "LIGHT",
};

export default (state: PageState = initialState, action: Action) => {
  switch (action.type) {
    case "SET_NAV_OPEN":
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
