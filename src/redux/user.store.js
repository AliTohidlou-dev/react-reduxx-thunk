import { applyMiddleware, createStore } from "redux";
import {thunk}  from "redux-thunk";
import userRouts from "./user.routs";
import logger from "redux-logger";
const userStore=createStore(userRouts,applyMiddleware(thunk, logger));

export default userStore;