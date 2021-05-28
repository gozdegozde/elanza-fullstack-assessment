const initialState = {
  request: [],
};

export default function oneRequestReducer(state = initialState, action) {
  switch (action.type) {
    case "oneRequest/fetch":
      return {
        request: action.payload,
      };

    default:
      return state;
  }
}