import { TOGGLE_SIDEBAR } from "../actions/types";
import { GET_MYBOOKS } from "../actions/types";
import { SEARCH_BOOK } from "../actions/types";
const initialState = {
  sidebarToggled: true,
  book: {},
  books: [],
  result: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarToggled: !state.sidebarToggled };
    case GET_MYBOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
    case SEARCH_BOOK:
      return { ...state, books: action.payload };
  }
}
