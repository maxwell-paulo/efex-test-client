import { createStore, combineReducers } from "redux";
import authReducer from "./auth/authReducer.js";


const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
