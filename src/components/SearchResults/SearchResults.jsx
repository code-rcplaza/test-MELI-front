import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import Product from "./../Product";
import SearchContext from "./../../../context/Search/SearchContex";
import { searchQueryParameter } from "./../../helpers";
import "./SearchResults.css";

const SearchResults = () => {
  const { items, categories, searchByTerm } = useContext(SearchContext);

  const searchParameter = searchQueryParameter().get("search");

  useEffect(() => {
    searchByTerm(searchParameter);
  }, [searchParameter]);

  return (
    <Fragment>
      <Breadcrumbs categories={categories} />
      {items.map((item) => (
        <Link className="link" to={`/items/${item.id}`}>
          <Product product={item} />
        </Link>
      ))}
    </Fragment>
  );
};

export default SearchResults;
