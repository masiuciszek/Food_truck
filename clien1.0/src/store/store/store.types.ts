export interface StoreState {
  stores: Store[] | [];
  status: Status;
}

export interface GetStores {
  type: "GET_STORES";
  payload: Store[];
}

export interface DeleteStore {
  type: "DELETE_STORE";
  payload: string; // store id
}

export type Action = GetStores | DeleteStore;
