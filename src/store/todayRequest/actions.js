import axios from "axios";
import moment from "moment";
const apiUrl = process.env.API_URL || "http://localhost:8080";

export function todayRequest(data) {
  
    return{
        type: "todayRequest/fetch",
        payload:data
    }
}

export function fetchTodayRequest(date) {
    return async function thunk(dispatch, getState) {

    const response = await axios.get(`${apiUrl}/requests`);

    const allRequests = response.data;
   
    function todayRequests() {
      const request = allRequests.filter((request) => {
        const startDate = moment(request.startDate).format("YYYY-MM-DD");
        
        return startDate === date;
      });
      return request;
    }
    dispatch(todayRequest(todayRequests()));
  };
}