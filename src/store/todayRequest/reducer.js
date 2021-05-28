const initialState = { todayRequests: [] };

export default function todayRequestReducer(state = initialState, action) {
  switch (action.type) {
    case "todayRequest/fetch":
      console.log("payload", action.payload);
      return {
        todayRequests: action.payload,
      };

    default:
      return state;
  }
}