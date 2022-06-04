import { FETCH_BOOK_DATA } from "../actions/actionType";

const initialState = {
  books: [],
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOK_DATA:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
}

export default bookReducer;
