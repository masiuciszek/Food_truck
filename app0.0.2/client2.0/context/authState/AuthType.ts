interface Login {
  type: "LOGIN"
  payload: string // token
}
interface Register {
  type: "REGISTER"
  payload: string // token
}

interface SetAuthToken {
  type: "SET_AUTH_TOKEN"
  payload: string // token
}

interface UserLoaded {
  type: "USER_LOADED"
  payload: User
}
interface LogoutUser {
  type: "LOGOUT_USER"
}

interface MessageHandler {
  type: "MESSAGE_HANDLER"
  payload: Status
}

interface SetUser {
  // to edit the user
  type: "SET_USER"
  payload: User
}
interface ClearSetUser {
  // to edit the user
  type: "CLEAR_SET_USER"
}

interface UpdateUser {
  type: "UPDATE_USER"
  payload: User
}
interface DeleteUser {
  type: "DELETE_USER"
}

export interface State {
  user: null | User
  status: Status
  isLoggedIn: boolean
  token: string | null
  editUser: null | User
}

export type Dispatch = (action: Action) => void

export type Action =
  | Login
  | Register
  | SetAuthToken
  | UserLoaded
  | LogoutUser
  | MessageHandler
  | SetUser
  | ClearSetUser
  | UpdateUser
  | DeleteUser
