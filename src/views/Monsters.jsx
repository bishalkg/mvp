import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavBar } from '../components/NavBar.jsx';
import { InfoCard } from '../components/InfoCard.jsx';

export const Monsters = props => {
  const [monsters, setMonsters] = useState('');

  useEffect(() => {
    console.log('rendered');
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
      .then(({data}) => setMonsters(data))
      .catch((err) => console.log(err));
  }, [])
  return (
    <div className="monsters-page-container">
      <NavBar />
      <h3>Monsters View</h3>
      <InfoCard />
      <p> This will show the Monsters</p>
    </div>
  );
};