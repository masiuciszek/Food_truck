
type IAction = {
  type: string;
  payload: any;
}


type IState = {
  logs: [];
  loading: boolean;
  error: null;
  setCurrent: null;
}
