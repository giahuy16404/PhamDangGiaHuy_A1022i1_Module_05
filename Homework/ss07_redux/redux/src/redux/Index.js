import { combineReducers } from "redux";
import { userReducer } from "./reducers/User";

export const rootReducer = combineReducers({
  user: userReducer,
});
