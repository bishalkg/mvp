import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {


  return (
   <nav className='nav-bar-container'>
    <ul>
      <li><Link to='/'>LandingPage</Link></li>
      <li><Link to='/Home'>Home</Link></li>
      <li><Link to='/Monsters'>Monsters</Link></li>
      <li><Link to='/Creatures'>Creatures</Link></li>
      <li><Link to='/Equipment'>Equipment</Link></li>
      <li><Link to='/Materials'>Materials</Link></li>
      <li><Link to='/Treasure'>Treasure</Link></li>
    </ul>
  </nav>
  )


};