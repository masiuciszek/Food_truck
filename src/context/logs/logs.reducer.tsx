const StoreReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'GET_LOGS':
      return {
        ...state,
        logs: action.payload,
      };
    case 'GET_TECHS':
      return {
        ...state,
        techs: action.payload,
      };
    default:
      return state;
  }
};


export default StoreReducer;
