import { Dispatch } from "./storeTypes"

interface LeaveReviewData {
  text: string
  rating: number
}

const getval = <T>(v: T) => v

// TODO: Factor out this into separate function
export const leaveReview = (formData: LeaveReviewData) => (token: string) => (
  dispatch: Dispatch
) => async (storeId: string) => {
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

export const deleteReview = (token: string) => (dispatch: Dispatch) => async (
  reviewId: string
) => {
  try {
    await fetch(`http://localhost:4000/review/${reviewId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    dispatch({ type: "REMOVE_REVIEW", payload: reviewId })
  } catch (err) {
    console.log(err.message)
    dispatch({ type: "STORE_MESSAGE_HANDLER", payload: "REJECTED" })
  }
}
