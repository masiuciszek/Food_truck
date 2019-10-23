import * as React from 'react';
import StoreReducer from './logs.reducer';
import {
  GET_LOGS, LOGS_ERROR, DELETE_LOG, UPDATE_LOG,
} from '../type';


const initialState: IState = {
  logs: [],
  loading: false,
  error: null,
  setCurrent: null,
};


export const LogsStore = React.createContext<IState | any>(initialState);


const LogProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(StoreReducer, initialState);


  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  const getLogs = async () => {
    try {
      setLoading();
      const res = await fetch('/logs');
      const data = await res.json();
      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.message.response });
    }
  };

  const deleteLog = async (id: number) => {
    try {
      setLoading();
      await fetch(`/logs/${id}`, { method: 'DELETE' });
      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.message.response });
    }
  };

  const updateLog = async (log: Logs) => {
    try {
      setLoading();
      const res = await fetch(`/logs/${log.id}`, { method: 'PUT' });
      const data = await JSON.stringify(res);
      dispatch({
        type: UPDATE_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.message.response });
    }
  };


  return (
    <LogsStore.Provider value={{
      logs: state.logs,
      loading: state.loading,
      error: state.error,
      setCurrent: state.setCurrent,
      getLogs,
      deleteLog,
      updateLog,
    }}
    >
      {props.children}
    </LogsStore.Provider>
  );
};

export default LogProvider;
