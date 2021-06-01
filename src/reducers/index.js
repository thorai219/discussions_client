import { combineReducers } from "redux";
import { auth } from "./auth/auth.reducer";
import { threads } from "./threads/threads.reducer";

export default combineReducers({
  auth,
  threads,
});
