const initialState = {
  request: [],
};

export default function oneRequestReducer(state = initialState, action) {
  switch (action.type) {
    case "oneRequest/fetch":
      return {
        request: action.payload,
      };
      case "oneRequest/update":
        return {
          request : action.payload,
        }

        case "addRequest/add":
          return {
            request : action.payload
          }
    default:
      return state;
  }
}