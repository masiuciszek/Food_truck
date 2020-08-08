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

export interface GetStoreById {
  type: "GET_STORE_BY_ID";
  payload: Store;
}

export interface LeaveStoreReview {
  type: "LEAVE_REVIEW";
}

export type Action = GetStores | DeleteStore | GetStoreById | LeaveStoreReview;
