import * as React from 'react';
import techReducer from './tech.reducer';
import { EContextActionTypes, EContextBaseAction } from '../type';

const initialState: IStateTechs = {
  techs: [],
  loading: false,
  error: null,

};


export const TechStore = React.createContext<IStateTechs | any>(initialState);


const TechProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(techReducer, initialState);


  const setLoading = () => {
    dispatch({ type: EContextActionTypes.SET_LOADING });
  };

  const getTechs = async () => {
    try {
      setLoading();
      const res = await fetch('/techs');
      const data = await res.json();
      dispatch({ type: 'GET_TECHS', payload: data });
    } catch (err) {
      dispatch({ type: 'TECHS_ERROR', payload: err.message.response });
    }
  };


  return (
    <TechStore.Provider value={{
      techs: state.techs,
      loading: state.loading,
      error: state.loading,
      getTechs,
    }}
    >
      {props.children}
    </TechStore.Provider>
  );
};

export default TechProvider;
