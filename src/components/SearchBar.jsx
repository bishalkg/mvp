import React, { useState } from 'react';

export const SearchBar = ({category, filterList }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const returnQueryToList = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value, filterList(e.target.value));

  }

    return (
      <form className="search-bar">
          {/* <label htmlFor="header-search">
              <span className="visually-hidden">Search {category}</span>
          </label> */}
          <input
              value={searchQuery}
              onChange={e => returnQueryToList(e)}
              type="text"
              id="header-search"
              placeholder={`Search ${category}...`}
              name="s"
          />
          <button type="submit">Find {category}</button>
      </form>
    );
  }