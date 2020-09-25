interface Login {
  type: "LOGIN";
  payload: string; // token
}
interface Register {
  type: "REGISTER";
}

export interface State {
  user: null | User;
  status: Status;
  isLoggedIn: boolean;
  token: string | null;
}

export type Dispatch = (action: Action) => void;

export type Action = Login | Register;
