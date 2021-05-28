import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:8080";

export function oneRequest(data) {
  console.log("data", data);
  return {
    type: "oneRequest/fetch",
    payload: data,
  };
}

export function fetchOneRequest(id) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/requests/${id}`, {
      
    });
    console.log(response.data);
    dispatch(oneRequest(response.data));
  };
}