import { combineReducers } from "redux";

import lists from "./lists";
import tasks from "./tasks";
import user from "./user";

const rootReducer = combineReducers({
  lists,
  tasks,
  user,
});

export default rootReducer;
