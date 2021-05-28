import axios from "axios";
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
    console.log("All Request", allRequests);
    function todayRequests() {
      const request = allRequests.filter((request) => {
        const startDate = request.startDate.substr(0, 10);
        return startDate === date;
      });
      return request;
    }
    dispatch(todayRequest(todayRequests()));
  };
}