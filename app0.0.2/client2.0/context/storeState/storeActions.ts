import { Dispatch } from "./storeTypes"

interface LeaveReviewData {
  text: string
  rating: number
}

export const leaveReview = (formData: LeaveReviewData) => (token: string) => (
  dispatch: Dispatch
) => async (storeId: string) => {
  console.log(formData)
  try {
    await fetch(`http://localhost:4000/review/${storeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
    dispatch({ type: "STORE_MESSAGE_HANDLER", payload: "RESOLVED" })
  } catch (err) {
    console.log(err.message)
    dispatch({ type: "STORE_MESSAGE_HANDLER", payload: "REJECTED" })
  }
}
