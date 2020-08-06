export interface StoreState {
  stores: Store[];
  status: Status;
  image: string;
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

export type Action = GetStores | DeleteStore | GetStoreImage;
