import {
  ADD_CART,
  INCREASE_CART_COUNT,
  DECREASE_CART_COUNT,
  DELETE_CART
} from "./types";

export const AddCartFromBooks = id => async dispatch => {
  try {
    dispatch({
      type: ADD_CART,
      payload: id
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
