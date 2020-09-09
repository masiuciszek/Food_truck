/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch } from "react";

import { GetStores, LeaveStoreReview } from "./store.types";

// we getting the stores from the Next built in Get server side props function
export const setStores = (stores: Store[]): GetStores => {
  return { type: "GET_STORES", payload: stores };
};

export const leaveStoreReview = (
  reviewData: ReviewData,
  authToken: string,
  storeId: string,
) => async (dispatch: Dispatch<LeaveStoreReview>) => {
  try {
    // {{ URL }}/review/add_review/5f2d9713d5db2a0ac762c5fc
    await fetch(`http://localhost:4000/review/add_review/${storeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(reviewData),
    });
    dispatch({ type: "LEAVE_REVIEW" });
  } catch (err) {
    console.error(err.message);
  }
};

// export const getStoreImage = (storeId: string) => async (
//   dispatch: Dispatch<GetStoreImage>,
// ) => {
//   try {
//     const res = await fetch(`http://localhost:4000/store/image/${storeId}`);
//     // console.log(res.json());
//     const data = await res.arrayBuffer();
//     console.log("data", data);
//     // dispatch({ type: "GET_STORE_IMAGE", payload: data });
//   } catch (err) {
//     console.error(err);
//   }
// };
