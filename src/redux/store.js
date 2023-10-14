import { createStore, combineReducers } from "redux";
import authReducer from "./auth/authReducer.js";
import tasksReducer from "./tasks/tasksReducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
});

const store = createStore(rootReducer);

export default store;
