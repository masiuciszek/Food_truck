import { createStore, applyMiddleware, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export type AppState = ReturnType<typeof rootReducer>;

function configureStore() {
  const middleWare: Middleware[] = [];

  if (process.env.NODE_ENV === "development") {
    middleWare.push(thunk);
  }
  if (process.env.NODE_ENV === "production") {
    middleWare.push(thunk);
  }
  if (process.env.NODE_ENV === "test") {
    middleWare.push(thunk);
  }
  const middleWareEnhancer = applyMiddleware(...middleWare);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );
  return store;
}

export default configureStore;
