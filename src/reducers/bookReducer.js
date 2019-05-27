import {
  TOGGLE_SIDEBAR,
  GET_MYBOOKS,
  SEARCH_BOOK,
  GET_BOOK,
  LOAD_MORE_BOOK,
  SEARCH_MORE_BOOK,
  ADD_TO_CART
} from "../actions/types";

const initialState = {
  sidebarToggled: true,
  book: {},
  books: [],
  result: [],
  carts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarToggled: !state.sidebarToggled };
    case GET_MYBOOKS:
      return { ...state, books: action.payload };
    case SEARCH_BOOK:
      return { ...state, result: action.payload };
    case GET_BOOK:
      return { ...state, book: action.payload };
    case LOAD_MORE_BOOK:
      return { ...state, books: action.payload };
    case SEARCH_MORE_BOOK:
      return { ...state, result: action.payload };
    case ADD_TO_CART:
      return { ...state, carts: [...state.carts, action.payload] };
    default:
      return state;
  }
}
