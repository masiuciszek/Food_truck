import { Dispatch } from "./storeTypes"

interface LeaveReviewData {
  text: string
  rating: number
}

export const leaveReview = (formData: LeaveReviewData) => (
  dispatch: Dispatch
) => async (storeId: string) => {
  try {
    await fetch(`http://localhost:4000/review/${storeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    dispatch({ type: "STORE_MESSAGE_HANDLER", payload: "RESOLVED" })
  } catch (err) {
    console.log(err.message)
    dispatch({ type: "STORE_MESSAGE_HANDLER", payload: "REJECTED" })
  }
}
