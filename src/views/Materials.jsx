import React from 'react';
import { NavBar } from '../components/NavBar.jsx';
import { SearchBar } from '../components/SearchBar.jsx';

export const Materials = props => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <h3>Materials View</h3>
      <p> This will show the Materials</p>
    </div>
  );
};