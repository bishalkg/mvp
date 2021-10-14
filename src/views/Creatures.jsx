import React from 'react';
import { NavBar } from '../components/NavBar.jsx';

export const Creatures = props => {
  return (
    <div className="creatures-page-container">
      <NavBar />
      <h3>Creature View</h3>
      <p> This will show the Creatures</p>
    </div>
  );
};