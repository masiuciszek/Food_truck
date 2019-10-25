
import {
  SET_LOADING, GET_LOGS, LOGS_ERROR, DELETE_LOG, UPDATE_LOG, ADD_LOG,
} from '../type';

const StoreReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => (log.id === action.payload.id ? action.payload : log)),
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default StoreReducer;
