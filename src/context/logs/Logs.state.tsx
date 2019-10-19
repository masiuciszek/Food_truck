import * as React from 'react';
import logsReducer from './logs.reducer';


const initialState: IState = {
  logs: [],
  loading: false,
  error: null,
  setCurrent: null,
};


export const LogsStore = React.createContext<IState | any>(initialState);


const LogProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(logsReducer, initialState);


  const getLogs = async () => {
    try {
      const res = await fetch('/logs');
      const data = await res.json();
      dispatch({
        type: 'GET_LOGS',
        payload: data,
      });
    } catch (err) {
      dispatch({ type: 'LOGS_ERROR', payload: err.message.response });
    }
  };

  return (
    <LogsStore.Provider value={{
      logs: state.logs,
      loading: state.loading,
      error: state.error,
      setCurrent: state.setCurrent,
      getLogs,
    }}
    >
      {props.children}
    </LogsStore.Provider>
  );
};

export default LogProvider;
