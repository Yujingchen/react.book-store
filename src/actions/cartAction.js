import { ADD_CART_FROM_BOOKS } from "./types";
import { ADD_CART_FROM_RESULT } from "./types";
// import axios from "axios";

export const AddCartFromBooks = id => async dispatch => {
  try {
    // const response = await axios.get(
    //   `https://www.googleapis.com/books/v1/volumes/${id}`
    // );

    dispatch({
      type: ADD_CART_FROM_BOOKS,
      payload: id
    });
  } catch (e) {}
};

export const AddCartFromResult = id => async dispatch => {
  try {
    // const response = await axios.get(
    //   `https://www.googleapis.com/books/v1/volumes/${id}`
    // );

    dispatch({
      type: ADD_CART_FROM_RESULT,
      payload: id
    });
  } catch (e) {}
};
