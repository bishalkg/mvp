import React from 'react';
import { NavBar } from '../components/NavBar.jsx';

export const Home = props => {
  return (
    <>
      <NavBar />
      <h3>Home View</h3>
      <p> This will be the homepage of the Compendium</p>
    </>
  );
};