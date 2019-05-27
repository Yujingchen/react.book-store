import { ADD_TO_CART } from "./types";
import axios from "axios";

export const AddToCart = id => async dispatch => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );

    dispatch({
      type: ADD_TO_CART,
      payload: response.data
    });
  } catch (e) {}
};
