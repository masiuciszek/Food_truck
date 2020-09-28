export interface StoreState {
  stores: Store[] | [];
  status: Status;
}

interface GetStores {
  type: "GET_STORES";
}

interface SetStores {
  type: "SET_STORES";
  payload: Store[];
}

export type Dispatch = (action: Action) => void;

export type Action = GetStores | SetStores;
