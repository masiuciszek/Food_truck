export interface StoreState {
  stores: Store[];
  status: Status;
  image: string;
  store: Store | null;
}

export interface GetStores {
  type: "GET_STORES";
  payload: Store[];
}

export interface DeleteStore {
  type: "DELETE_STORE";
  payload: string; // store id
}

export interface GetStoreImage {
  type: "GET_STORE_IMAGE";
  payload: string;
}

export interface GetStoreById {
  type: "GET_STORE_BY_ID";
  payload: Store;
}

export type Action = GetStores | DeleteStore | GetStoreImage | GetStoreById;
