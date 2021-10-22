import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SearchBar.css";
import logo from "../../assets/Logo_ML.png";
import iconSearch from "../../assets/ic_Search.png";

const SearchBar = () => {
  let history = useHistory();
  const [searchText, setSearchText] = useState("");

  const handleChange = ({ target }) => setSearchText(target.value);

  const handleSubmit = (e) => {
    searchText.trim() !== "" && history.push(`/items?search=${searchText}`);
    e.preventDefault();
  };

  return (
    <div className="search-bar">
      <form className="search-bar-body">
        <Link to="/">
          <img src={logo} alt="logo" />
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
          <img src={iconSearch} />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
