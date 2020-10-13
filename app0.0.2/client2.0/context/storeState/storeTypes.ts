export interface StoreState {
  stores: Store[] | []
  filteredStores: Store[] | []
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

interface SearchStore {
  type: "SEARCH_STORE"
  // payload: string // text
  payload: Store[]
}
interface ClearSearchStore {
  type: "CLEAR_SEARCH_STORE"
}

// TODO: This will refactor to ot own provider, Review Context
interface RemoveReview {
  type: "REMOVE_REVIEW"
  payload: string // id
}

export type Dispatch = (action: Action) => void

export type Action =
  | GetStores
  | SetStores
  | StoreMessageHandler
  | RemoveReview
  | SearchStore
  | ClearSearchStore
