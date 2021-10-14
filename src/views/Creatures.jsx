import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar } from '../components/NavBar.jsx';
import { CreatureList } from './CreatureList.jsx';

export const Creatures = props => {
  const [creatures, setCreatures] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
      .then(({data}) => {
        setCreatures(data.data);
        console.log(data.data);
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="creatures-page-container">
      <NavBar />
      <CreatureList creatures={creatures.food} isFetching={isFetching} />
    </div>
  );
};