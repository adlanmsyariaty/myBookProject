import axios from "axios";
import { FETCH_BOOK_DATA, BASE_URL } from "./actionType";

export const fetchBook = (payload) => {
  return {
    type: FETCH_BOOK_DATA,
    payload,
  };
};

export const loadBooks = () => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}/books`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(fetchBook(data));
      });
  };
};

export const addBook = (newBook) => {
  return (dispatch) => {
    return axios
      .post(`${BASE_URL}/books`, newBook)
      .then(() => dispatch(loadBooks()));
  };
};
