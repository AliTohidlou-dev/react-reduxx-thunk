import { combineReducers } from "redux";
import userReducer from "./user.reducer";

const userRouts=combineReducers({
  users: userReducer
})

export default userRouts;