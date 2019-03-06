import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  error: '',
  fetching: false
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        error: '',
        fetching: true
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        error: '',
        fetching: false
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
