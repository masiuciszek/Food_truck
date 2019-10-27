import * as React from 'react';
import {
  EContextActionTypes,
  EContextBaseAction,
} from '../type';
import StoreReducer from './logs.reducer';


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
      type: EContextActionTypes.SET_LOADING,
    });
  };

  const getLogs = async () => {
    try {
      setLoading();
      const res = await fetch('/logs');
      const data = await res.json();
      dispatch({
        type: EContextActionTypes.GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: EContextActionTypes.LOGS_ERROR, payload: err.message.response });
    }
  };
  const addLog = async (log: Logs) => {
    try {
      setLoading();
      const res = await fetch('/logs', { method: 'post', body: JSON.stringify(log), headers: { 'Content-Type': 'application/json' } });
      const data = await res.json();
      dispatch({
        type: EContextActionTypes.ADD_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: EContextActionTypes.LOGS_ERROR, payload: err.message.response });
    }
  };

  const deleteLog = async (id: number) => {
    try {
      setLoading();
      await fetch(`/logs/${id}`, { method: 'DELETE' });
      dispatch({
        type: EContextActionTypes.DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({ type: EContextActionTypes.LOGS_ERROR, payload: err.message.response });
    }
  };

  const updateLog = async (log: Logs) => {
    try {
      const res = await fetch(`/logs/${log.id}`, { method: 'PUT', body: JSON.stringify(log), headers: { 'Content-Type': 'application/json' } });
      const data = await res.json();
      dispatch({
        type: EContextActionTypes.UPDATE_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: EContextActionTypes.LOGS_ERROR, payload: err.message.response });
    }
  };

  const handleCurrent = (log: Logs) => {
    dispatch({
      type: EContextActionTypes.SET_CURRENT,
      payload: log,
    });
  };


  return (
    <LogsStore.Provider value={{
      logs: state.logs,
      loading: state.loading,
      error: state.error,
      setCurrent: state.setCurrent,
      getLogs,
      addLog,
      deleteLog,
      updateLog,
      handleCurrent,
    }}
    >
      {props.children}
    </LogsStore.Provider>
  );
};

export default LogProvider;
