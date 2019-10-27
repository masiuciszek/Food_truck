import { SET_LOADING } from '../type';

export default (state: IStateTechs, action: IAction): IStateTechs => {
  switch (action.type) {
    case 'GET_TECHS':
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
