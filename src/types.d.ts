
type IAction = {
  type: string;
  payload: any;
}


type IState = {
  logs: [];
  techs: [];
  loading: boolean;
  error: null;
  setCurrent: null;
}

type IActionsTypes = {
  GET_LOGS: string;
  ADD_LOG: string;
  UPDATE_LOG: string;
  REMOVE_LOG: string;
  GET_TECHS: string;
  ADD_TECH: string;
  DELETE_TECH: string;
}
