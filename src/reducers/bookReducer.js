import {
  TOGGLE_SIDEBAR,
  GET_MYBOOKS,
  SEARCH_BOOK,
  GET_BOOK,
  LOAD_MORE_BOOK,
  SEARCH_MORE_BOOK,
  ADD_CART_FROM_BOOKS,
  ADD_CART_FROM_RESULT,
  ADD_CART_QUANTILY,
  UPDATE_CART_QUANTITY,
  INCREASE_CART_COUNT,
  DECREASE_CART_COUNT
} from "../actions/types";

const initialState = {
  sidebarToggled: true,
  book: {},
  books: [],
  result: [],
  carts: [],
  quantityArr: []
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
      // let index1 = state.carts.findIndex(cart => cart.id === action.payload);
      // prevent duplicate items

      // let tempCart = [...state.carts];

      // note:hasOwnProperty and spread operation case bugs, spelling,
      let tempCart = [...state.carts];
      let tempProduct = [...state.books];
      let tempItem = tempCart.find(item => item.id === action.payload);
      let total = 0;
      if (!tempItem) {
        tempItem = tempProduct.find(item => item.id === action.payload);
        if (tempItem.saleInfo.hasOwnProperty("listPrice")) {
          total = parseFloat(tempItem.saleInfo.listPrice.amount.toFixed(2));
        }
        let cartItem = { ...tempItem, count: 1, total };
        tempCart = [...tempCart, cartItem];
      } else {
        tempItem.count++;
        if (tempItem.saleInfo.hasOwnProperty("listPrice")) {
          tempItem.total =
            parseFloat(tempItem.saleInfo.listPrice.amount.toFixed(2)) *
            tempItem.count;
        }
      }

      // if (index1 === -1)
      //   return {
      //     ...state,
      //     carts: [
      //       ...state.carts,
      //       state.books.find(cart => cart.id === action.payload)
      //     ]
      //   };
      // return state;
      return {
        ...state,
        carts: tempCart
      };

    case ADD_CART_FROM_RESULT:
      let index2 = state.carts.findIndex(cart => cart.id === action.payload);
      // prevent duplicate items
      if (index2 === -1)
        return {
          ...state,
          carts: [
            ...state.carts,
            state.result.find(aResult => aResult.id === action.payload)
          ]
        };
      return state;

    case ADD_CART_QUANTILY:
      let index3 = state.quantityArr.findIndex(
        itemQuantity => itemQuantity.id === action.payload.id
      );
      // prevent duplicate items
      if (index3 === -1)
        return {
          ...state,
          quantityArr: [...state.quantityArr, action.payload]
        };
      return state;
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        quantityArr: state.quantityArr.map(quantityObject => {
          if (quantityObject.id === action.payload.id) {
            return { ...quantityObject, quantity: action.payload.quantity };
          } else {
            return quantityObject;
          }
        })
      };
    case INCREASE_CART_COUNT:
      //note:spelling mistake on state.cart can disable the reducer to dispatch
      let tempcart = [...state.carts];
      let cartitem = tempcart.find(item => item.id === action.payload);
      //note: action.payload.id do not get data, any error in code can cause reducer do not dispatch
      cartitem.count++;
      if (cartitem.saleInfo.hasOwnProperty("listPrice")) {
        cartitem.total =
          parseFloat(cartitem.saleInfo.listPrice.amount.toFixed(2)) *
          cartitem.count;
      }
      cartitem.total = parseFloat(cartitem.total.toFixed(2));

      // return {
      //   ...state,
      //   quantityArr: state.quantityArr.map(quantityObject => {
      //     if (quantityObject.id === action.payload.id) {
      //       return { ...quantityObject, quantity: action.payload.quantity };
      //     } else {
      //       return quantityObject;
      //     }
      //   })
      // };
      return {
        ...state,
        carts: tempcart
      };

    case DECREASE_CART_COUNT:
      console.log("oo");
      let tempcartD = [...state.carts];
      let cartitemD = tempcartD.find(item => item.id === action.payload);
      if (cartitemD.count !== 0) {
        cartitemD.count--;
        if (cartitemD.saleInfo.hasOwnProperty("listPrice")) {
          cartitemD.total =
            parseFloat(cartitemD.saleInfo.listPrice.amount.toFixed(2)) *
            cartitemD.count;
        }
        cartitemD.total = parseFloat(cartitemD.total.toFixed(2));
      }

      // return {
      //   ...state,
      //   quantityArr: state.quantityArr.map(quantityObject => {
      //     if (quantityObject.id === action.payload.id) {
      //       return { ...quantityObject, quantity: action.payload.quantity };
      //     } else {
      //       return quantityObject;
      //     }
      //   })
      // };
      return {
        ...state,
        carts: tempcartD
      };

    default:
      return state;
  }
}
