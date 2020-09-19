interface Login {
  type: "LOGIN";
}
interface Register {
  type: "REGISTER";
}

export interface State {
  user: null | User;
  status: Status;
  isLoggedIn: boolean;
}

export type Dispatch = (action: Action) => void;

export type Action = Login | Register;
