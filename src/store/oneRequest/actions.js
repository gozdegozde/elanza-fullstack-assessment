import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:8080";

export function oneRequest(data) {
  
  return {
    type: "oneRequest/fetch",
    payload: data,
  };
}

export function fetchOneRequest(id) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/requests/${id}`, {
      
    });
   
    dispatch(oneRequest(response.data));
  };
}

export const requestUpdated = (request) => ({
  type:"oneRequest/update",
  payload: request,
});

export const updateStatus = (id, status) => {
 
  return async (dispatch, getState) => {
    const response = await axios.put(
      `${apiUrl}/requests/${id}`,
      {
        status,
      },
     
    );
    dispatch(requestUpdated(response.data));
    
   
  };
};

export const newRequest = ({
  careType,
  startDate,
  endDate,
  clientName,
  extraInfo,
}) => {
  return async (dispatch) => {
   
    try {
      const response = await axios.post(`${apiUrl}/requests`, {
        careType,
        startDate,
        endDate,
        clientName,
        extraInfo,
      });

      dispatch(req(response.data));
     
    } catch (e) {
      console.error(e);
    }
  };
};

export const req = (request) => ({
  type: "addRequest/add",
  payload: request,
});
