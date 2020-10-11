import * as React from "react"

import { StoreState, Dispatch, Action } from "./storeTypes"

const initialState: StoreState = {
  stores: [],
  status: "NATURAL",
}

const StoreStateContext = React.createContext<StoreState | undefined>(undefined)
const StoreDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
)

function reducer(state: StoreState = initialState, action: Action) {
  switch (action.type) {
    case "SET_STORES":
      return {
        ...state,
        stores: action.payload,
      }
    case "STORE_MESSAGE_HANDLER":
      return {
        ...state,
        status: action.payload,
      }

    case "REMOVE_REVIEW":
      return {
        ...state,
        stores: state.stores.filter((store) => store._id !== action.payload),
      }

    default: {
      throw new Error(`Unable to resolve action type `)
    }
  }
}

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  )
}

export const useStoreState = () => {
  const context = React.useContext(StoreStateContext)
  if (!context) {
    throw new Error(
      "useStoreState need to be wrapped in StoreStateContext Provider "
    )
  }
  return context
}

export const useStoreDispatch = () => {
  const context = React.useContext(StoreDispatchContext)
  if (!context) {
    throw new Error(
      "useStoreDispatch need to be wrapped in StoreStateContext Provider "
    )
  }
  return context
}

export default StoreProvider
