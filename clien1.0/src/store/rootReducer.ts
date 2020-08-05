import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import pageReducer from "./page/page.reducer";
import storeReducer from "./store/store.reducer";

export default combineReducers({
  page: pageReducer,
  auth: authReducer,
  store: storeReducer,
});
