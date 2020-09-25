import * as React from "react";
import { State, Dispatch, Action } from "./AuthType";

const AuthStateContext = React.createContext<State | undefined>(undefined);
const AuthDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

const initialState: State = {
  user: null,
  status: "NATURAL",
  isLoggedIn: false,
  token: null,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload,
      };
    case "REGISTER":
      return {
        ...state,
      };
    default: {
      throw new Error(`Unable to resolve action type `);
    }
  }
};

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const ctx = React.useContext(AuthStateContext);
  if (!ctx) {
    throw new Error(
      "useAuthState need to be wrapped in AuthStateContext Provider ",
    );
  }
  return ctx;
};

export const useAuthDispatch = () => {
  const ctx = React.useContext(AuthDispatchContext);
  if (!ctx) {
    throw new Error(
      "useAuthDispatch need to be wrapped in AuthDispatchContext Provider ",
    );
  }
  return ctx;
};

export default AuthProvider;
