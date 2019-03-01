import { FETCH_PRODUCT, CHANGE_PAGE } from "./types";
import axios from "axios";

const apiUrl = "http://localhost:3000";

export const getProduct = data => {
  return {
    type: FETCH_PRODUCT,
    data
  };
};

export const getDataAsync = (page, limit = 5) => {
  return dispatch => {
    return axios
      .get(apiUrl + "/products", {
        params: {
          page,
          limit
        }
      })
      .then(response => {
        dispatch(getProduct(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const changePageAsync = page => {
  return dispatch => {
    dispatch(getDataAsync(page));
    dispatch(changePage(page));
  }
}

export const changePage = page => {
  return {
    type: CHANGE_PAGE,
    page
  };
};
