import {
  GET_TOP10_FICTION,
  GET_TOP10_CHILDREN,
  GET_TOP10_ROMANCE,
  GET_TOP10_COMICS
} from "./types";

import axios from "axios";

export const GetTop10Fiction = () => async dispatch => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/users/110280154027889174574/bookshelves/1001/volumes"
    );

    dispatch({
      type: GET_TOP10_FICTION,
      payload: response.data.items
    });
  } catch (e) {}
};
export const GetTop10Children = () => async dispatch => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/users/110280154027889174574/bookshelves/1002/volumes"
    );

    dispatch({
      type: GET_TOP10_CHILDREN,
      payload: response.data.items
    });
  } catch (e) {}
};
export const GetTop10Romance = () => async dispatch => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/users/110280154027889174574/bookshelves/1003/volumes"
    );

    dispatch({
      type: GET_TOP10_ROMANCE,
      payload: response.data.items
    });
  } catch (e) {}
};
export const GetTop10Comics = () => async dispatch => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/users/110280154027889174574/bookshelves/1004/volumes"
    );

    dispatch({
      type: GET_TOP10_COMICS,
      payload: response.data.items
    });
  } catch (e) {}
};
