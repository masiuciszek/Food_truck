/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch } from "react";

import { GetStores } from "./store.types";

// we getting the stores from the Next built in Get server side props function
export const setStores = (stores: Store[]): GetStores => {
  return { type: "GET_STORES", payload: stores };
};
