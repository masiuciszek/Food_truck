
type IAction = {
  type: string;
  payload?: any;
}


type IState = {
  logs: [];
  loading: boolean;
  error: null;
  setCurrent: null;
}

type IStateTechs = {
  techs: [];
  loading: boolean;
  error: null;
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


type Logs = {
  message: string;
  attention: boolean;
  tech: Tech;
  date: string;
  id: number;
}

type Tech = {
  id: number;
  firstName: string;
  lastName: string;
}
