import {
  TOGGLE_SIDEBAR,
  GET_MYBOOKS,
  SEARCH_BOOK,
  GET_BOOK,
  LOAD_MORE_BOOK,
  SEARCH_MORE_BOOK,
  ADD_CART_FROM_BOOKS,
  ADD_CART_FROM_RESULT
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
    case ADD_CART_FROM_BOOKS:
      let index1 = state.carts.findIndex(cart => cart.id === action.payload);
      if (index1 === -1)
        return {
          ...state,
          carts: [
            ...state.carts,
            state.books.find(cart => cart.id === action.payload)
          ]
        };
      return state;
    case ADD_CART_FROM_RESULT:
      let index2 = state.carts.findIndex(cart => cart.id === action.payload);
      if (index2 === -1)
        return {
          ...state,
          carts: [
            ...state.carts,
            state.result.find(aResult => aResult.id === action.payload)
          ]
        };
      return state;
    default:
      return state;
  }
}
