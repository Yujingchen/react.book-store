import { TOGGLE_SIDEBAR } from "../actions/types";
import { GET_MYBOOKS } from "../actions/types";
const initialState = {
  sidebarToggled: true,
  book: {},
  books: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarToggled: !state.sidebarToggled };
    case GET_MYBOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
}
