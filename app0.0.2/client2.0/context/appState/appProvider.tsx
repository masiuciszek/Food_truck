import React from "react"
import { Action, AppState, Dispatch } from "./appTypes"

const AppContextState = React.createContext<AppState | undefined>(undefined)
const AppContextDispatch = React.createContext<Dispatch | undefined>(undefined)

const initialState: AppState = {
  status: "NATURAL",
  isDarkTheme: true,
}

function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      }
    default: {
      throw new Error(`Unable to resolve action type `)
    }
  }
}

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AppContextState.Provider value={state}>
      <AppContextDispatch.Provider value={dispatch}>{children}</AppContextDispatch.Provider>
    </AppContextState.Provider>
  )
}

export const useAppState = () => {
  const context = React.useContext(AppContextState)
  if (!context) {
    throw new Error("useAppState need to be wrapped in AppStateContext Provider ")
  }
  return context
}

export const useAppDispatch = () => {
  const context = React.useContext(AppContextDispatch)
  if (!context) {
    throw new Error("useAppDispatch need to be wrapped in AppDispatchContext Provider ")
  }
  return context
}

export default AppProvider
