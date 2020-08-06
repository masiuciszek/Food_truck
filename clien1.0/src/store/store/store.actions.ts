/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch } from "react";

import { GetStores, GetStoreImage } from "./store.types";

// we getting the stores from the Next built in Get server side props function
export const setStores = (stores: Store[]): GetStores => {
  return { type: "GET_STORES", payload: stores };
};

export const getStoreImage = (storeId: string) => async (
  dispatch: Dispatch<GetStoreImage>,
) => {
  try {
    const res = await fetch(`http://localhost:4000/store/image/${storeId}`);
    // console.log(res.json());
    const data = await res.arrayBuffer();
    console.log("data", data);
    // dispatch({ type: "GET_STORE_IMAGE", payload: data });
  } catch (err) {
    console.error(err);
  }
};
