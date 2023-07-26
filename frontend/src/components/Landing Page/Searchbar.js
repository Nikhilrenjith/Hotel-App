import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search-results/${searchText}`);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Find Inspiring Places.."
          className="search-input"
          required
        />
        <button type="submit" className="search-button">
          <SearchRoundedIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
