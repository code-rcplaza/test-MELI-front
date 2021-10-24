import { SEARCH_BY_TERM, GET_ITEM_DETAILS } from "../actions";

const SearchReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SEARCH_BY_TERM:
      return {
        ...state,
        items: payload.items,
        categories: payload.categories,
      };
    case GET_ITEM_DETAILS:
      return {
        ...state,
        item: payload,
      };
  }
};

export default SearchReducer;
