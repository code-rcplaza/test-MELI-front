import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Image from "./../Image";
import "./SearchBar.css";

const SearchBar = ({ URLBrand, URLIcon }) => {
  let history = useHistory();

  const [searchText, setSearchText] = useState("");

  const handleChange = ({ target }) => setSearchText(target.value);

  const handleSubmit = (e) => {
    searchText.trim() !== "" && history.push(`/items?search=${searchText}`);
    e.preventDefault();
    setSearchText("");
  };

  return (
    <div className="search-bar">
      <form className="search-bar-body">
        <Link className="search-bar-logo" to="/">
          <Image URLImage={URLBrand} type="brand" />
        </Link>
        <input
          className="search-bar-input"
          type="text"
          onChange={handleChange}
          value={searchText}
          placeholder="Nunca dejes de buscar"
        />
        <button
          className="search-bar-button"
          type="submit"
          onClick={handleSubmit}
        >
          <Image URLImage={URLIcon} type="icon" />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  URLBrand: PropTypes.string.isRequired,
  URLIcon: PropTypes.string.isRequired,
};

export default SearchBar;
