export interface StoreState {
  stores: Store[] | []
  status: Status
}

interface GetStores {
  type: "GET_STORES"
}

interface SetStores {
  type: "SET_STORES"
  payload: Store[]
}

interface StoreMessageHandler {
  type: "STORE_MESSAGE_HANDLER"
  payload: Status
}

interface RemoveReview {
  type: "REMOVE_REVIEW"
  payload: string // id
}

export type Dispatch = (action: Action) => void

export type Action = GetStores | SetStores | StoreMessageHandler | RemoveReview
