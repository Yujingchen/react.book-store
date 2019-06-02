import { ADD_CART_FROM_BOOKS } from "./types";
import { ADD_CART_FROM_RESULT } from "./types";
import { ADD_CART_QUANTILY } from "./types";
import { UPDATE_CART_QUANTITY } from "./types";
import { INCREASE_CART_COUNT } from "./types";
import { DECREASE_CART_COUNT } from "./types";
import { DELETE_CART } from "./types";
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

export const AddCartQuantity = (cartId, cartQuantity) => async dispatch => {
  try {
    // const response = await axios.get(
    //   `https://www.googleapis.com/books/v1/volumes/${id}`
    // );

    dispatch({
      type: ADD_CART_QUANTILY,
      payload: { id: cartId, quantity: cartQuantity }
    });
  } catch (e) {}
};

export const UpdateQuantity = (cartId, cartQuantity) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      payload: {
        id: cartId,
        quantity: cartQuantity
      }
    });
  } catch (e) {}
};

export const AddCount = id => async dispatch => {
  try {
    dispatch({
      type: INCREASE_CART_COUNT,
      payload: id
    });
  } catch (e) {}
};

export const DecreaseCount = id => async dispatch => {
  try {
    dispatch({
      type: DECREASE_CART_COUNT,
      payload: id
    });
  } catch (e) {}
};
export const DeleteCart = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_CART,
      payload: id
    });
  } catch (e) {}
};
