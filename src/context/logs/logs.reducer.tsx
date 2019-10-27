
import {
  EContextActionTypes,
  EContextBaseAction,
} from '../type';

const StoreReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case EContextActionTypes.GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case EContextActionTypes.ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case EContextActionTypes.UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => (log.id === action.payload.id ? action.payload : log)),
      };
    case EContextActionTypes.DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case EContextActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EContextActionTypes.SET_CURRENT:
      return {
        ...state,
        setCurrent: action.payload,
      };
    case EContextActionTypes.LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default StoreReducer;
