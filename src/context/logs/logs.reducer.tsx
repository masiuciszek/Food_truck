const logReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'GET_LOGS':
      return {
        ...state,
        logs: action.payload,
      };

    default:
      return state;
  }
};


export default logReducer;
