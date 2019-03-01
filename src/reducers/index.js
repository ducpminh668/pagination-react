import { combineReducers } from 'redux';
import products from './productReducers';

export default combineReducers({
    productInfo: products
});