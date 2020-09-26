interface Login {
  type: "LOGIN";
  payload: string; // token
}
interface Register {
  type: "REGISTER";
  payload: string; // token
}

interface SetAuthToken {
  type: "SET_AUTH_TOKEN";
  payload: string; // token
}

interface UserLoaded {
  type: "USER_LOADED";
  payload: User;
}

export interface State {
  user: null | User;
  status: Status;
  isLoggedIn: boolean;
  token: string | null;
}

export type Dispatch = (action: Action) => void;

export type Action = Login | Register | SetAuthToken | UserLoaded;
