import * as React from "react";

import { StoreState, Dispatch, Action } from "./storeTypes";

const initialState: StoreState = {
  stores: [],
  status: "NATURAL",
};

const StoreStateContext = React.createContext<StoreState | undefined>(
  undefined,
);
const StoreDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

function reducer(state: StoreState = initialState, action: Action) {
  switch (action.type) {
    case "GET_STORES":
      return {
        ...state,
        stores: action.payload,
      };

    default: {
      throw new Error(`Unable to resolve action type `);
    }
  }
}

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
};

export default StoreProvider;
