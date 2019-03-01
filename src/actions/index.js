import { FETCH_PRODUCT } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

export const getProduct = (data) => {
  return {
    type: FETCH_PRODUCT,
    data
  }
};

export const getDataAsync = () => {
  return (dispatch) => {
    return axios.get(apiUrl + '/products')
      .then(response => {
        dispatch(getProduct(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};