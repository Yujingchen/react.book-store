import { GET_MYBOOKS } from "./types";
import axios from "axios";

export const GetMyBooks = () => async dispatch => {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/users/110280154027889174574/bookshelves/2/volumes"
  );

  dispatch({
    type: GET_MYBOOKS,
    payload: response.data.items
  });
};
