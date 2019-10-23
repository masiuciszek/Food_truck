export default (state: IStateTechs, action: IAction): IStateTechs => {
  switch (action.type) {
    case 'GET_TECHS':
      return {
        ...state,
        techs: action.payload,
      };
    default:
      return state;
  }
};
