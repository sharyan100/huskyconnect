import React, { useState } from 'react';

const SearchFilter = ({ onFilter }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(searchKeyword);
  };

  return (
    <form onSubmit={handleSubmit} className="filter-bar">
      <div>
        <label htmlFor="searchKeyword">Search by Keyword:</label>
        <input
          type="text"
          id="searchKeyword"
          name="searchKeyword"
          value={searchKeyword}
          onChange={handleSearchKeywordChange}
        />
        <button type="submit">Filter</button>
      </div>
    </form>
  );
};

export default SearchFilter;
