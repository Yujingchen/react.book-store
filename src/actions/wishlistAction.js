import { ADD_WISHLIST, DELETE_WISHLIST } from "./types";

export const AddToWishlist = id => async dispatch => {
  try {
    dispatch({
      type: ADD_WISHLIST,
      payload: id
    });
  } catch (e) {}
};
export const DeleteWishlist = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_WISHLIST,
      payload: id
    });
  } catch (e) {}
};
