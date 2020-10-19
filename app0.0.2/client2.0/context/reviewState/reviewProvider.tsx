import React from "react"
import { ReviewState, Action, Dispatch } from "./reviewTypes"

const ReviewStateContext = React.createContext<ReviewState | undefined>(
  undefined
)
const ReviewDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
)

// TODO: Do wee need this???

const initialState: ReviewState = {
  addedReview: false,
  removedReview: false,
  status: "NATURAL",
}

function reducer(state: ReviewState = initialState, action: Action) {
  switch (action.type) {
    case "ADD_REVIEW":
      return {
        ...state,
      }
    case "REMOVE_REVIEW":
      return {
        ...state,
      }

    default: {
      throw new Error(`Unable to resolve action type `)
    }
  }
}

export const ReviewProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <ReviewStateContext.Provider value={state}>
      <ReviewDispatchContext.Provider value={dispatch}>
        {children}
      </ReviewDispatchContext.Provider>
    </ReviewStateContext.Provider>
  )
}

export const useReviewState = () => {
  const context = React.useContext(ReviewStateContext)
  if (!context) {
    throw new Error("useReviewState need to be wrapped in Review Provider ")
  }
  return context
}

export const useReviewDispatch = () => {
  const context = React.useContext(ReviewDispatchContext)
  if (!context) {
    throw new Error("useReviewDispatch need to be wrapped in Review Provider ")
  }
  return context
}
