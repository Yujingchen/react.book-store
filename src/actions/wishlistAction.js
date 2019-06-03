import { ADD_WISHLIST } from "./types";

export const AddToWishlist = id => async dispatch => {
  try {
    dispatch({
      type: ADD_WISHLIST,
      payload: id
    });
  } catch (e) {}
};
