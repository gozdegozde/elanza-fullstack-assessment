// src/store/reducer.js
import { combineReducers } from "redux";
import todayRequestReducer from "./todayRequest/reducer";


const reducer = combineReducers({
  todayRequestReducer: todayRequestReducer,
  
});

export default reducer;