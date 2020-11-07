export interface AppState {
  status: Status
  isDarkTheme: boolean
}

interface SetStatus {
  type: "SET_STATUS"
  payload: Status
}

export type Dispatch = (action: Action) => void

export type Action = SetStatus
