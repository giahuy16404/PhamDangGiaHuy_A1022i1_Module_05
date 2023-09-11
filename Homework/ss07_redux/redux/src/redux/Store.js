import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Index";

const initStore = {};
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initStore,
  applyMiddleware(...middleware)
);
