import { FETCH_PRODUCT } from "../actions/types";

const initialState = {
  products: [],
  page: 0,
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
    default:
      return state;
  }
}
