// src/store/reducer.js
import { combineReducers } from "redux";
import todayRequestReducer from "./todayRequest/reducer";
import oneRequestReducer from "./oneRequest/reducer";



const reducer = combineReducers({
  todayRequestReducer: todayRequestReducer,
  oneRequestReducer:oneRequestReducer
  
});

export default reducer;