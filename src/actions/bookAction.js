import { GET_MYBOOKS } from "./types";
import { SEARCH_BOOK } from "./types";
import { GET_BOOK } from "./types";
import axios from "axios";

export const GetMyBooks = () => async dispatch => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/users/110280154027889174574/bookshelves/2/volumes"
    );

    dispatch({
      type: GET_MYBOOKS,
      payload: response.data.items
    });
  } catch (e) {}
};

export const HandleSearch = keyword => async dispatch => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
    );
    dispatch({
      type: SEARCH_BOOK,
      payload: response.data.items
    });
  } catch (e) {}
};

export const GetBook = id => async dispatch => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );

    dispatch({
      type: GET_BOOK,
      payload: response.data
    });
  } catch (e) {}
};
