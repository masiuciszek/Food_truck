import { createSelector } from "reselect";
import { AppState } from "..";
import { StoreState } from "./store.types";

const storeState = (state: AppState) => state.store;

export const selectStores = createSelector(
  [storeState],
  (store: StoreState) => store.stores,
);

export const selectImage = createSelector(
  [storeState],
  (store: StoreState) => store.image,
);
