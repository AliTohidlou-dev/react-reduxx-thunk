import { applyMiddleware, createStore } from "redux";
import userReducer from "./user.reducer";
import { thunk } from "redux-thunk";

const userStore=createStore(userReducer,applyMiddleware(thunk));

export default userStore;