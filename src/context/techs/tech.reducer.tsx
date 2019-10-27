import { EContextActionTypes, EContextBaseAction } from '../type';

export default (state: IStateTechs, action: IAction): IStateTechs => {
  switch (action.type) {
    case EContextActionTypes.GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case EContextActionTypes.DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };
    case EContextActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
