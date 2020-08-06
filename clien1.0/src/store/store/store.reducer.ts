import { Action, StoreState } from "./store.types";

const initialState: StoreState = {
  stores: [],
  status: "",
  image: "",
};

const storeReducer = (state: StoreState = initialState, action: Action) => {
  switch (action.type) {
    case "GET_STORES":
      return {
        ...state,
        stores: action.payload,
        status: "resolved",
      };
    case "GET_STORE_IMAGE":
      return {
        ...state,
        image: action.payload,
        status: "resolved",
      };
    default:
      return state;
  }
};

export default storeReducer;
