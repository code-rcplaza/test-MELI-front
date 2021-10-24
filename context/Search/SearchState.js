import { useReducer } from "react";
import axios from "axios";
import SearchReducer from "./SearchReducer";
import SearchContext from "./SearchContex";
import { options } from "./constants";

const SearchState = ({ children }) => {
  const initialState = {
    items: [],
    categories: [],
    item: null,
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const searchByTerm = async (searchTerm) => {
    const { data } = await axios.get(`${options.rootDevUrl}?q=${searchTerm}`);

    const payload = {
      items: data.items.slice(0, 4),
      categories: data.categories,
    };

    dispatch({
      type: "SEARCH_BY_TERM",
      payload,
    });
  };

  const getItemByID = async (itemId) => {
    const { data } = await axios.get(`${options.rootDevUrl}/${itemId}`);
    dispatch({
      type: "GET_ITEM_DETAILS",
      payload: data.item,
    });
  };

  return (
    <SearchContext.Provider
      value={{
        items: state.items,
        categories: state.categories,
        item: state.item,
        searchByTerm,
        getItemByID,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
