import { combineReducers } from "redux";
import userReducer from '../reducers/user/index';

export default combineReducers({
  user: userReducer
});