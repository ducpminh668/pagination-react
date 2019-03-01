import { FETCH_PRODUCT, CHANGE_PAGE } from "../actions/types";

const initialState = {
  products: [],
  page: 1,
  pages: 0,
  total: 0
};

export default function productReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        products: action.data.docs,
        page: action.data.page,
        pages: action.data.pages,
        total: action.data.total
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      };
    default:
      return state;
  }
}
