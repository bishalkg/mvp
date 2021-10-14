import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar } from '../components/NavBar.jsx';
import { CreatureList } from './CreatureList.jsx';
import { MonsterList } from './MonsterList.jsx';
import { SearchBar } from '../components/SearchBar.jsx';

export const Creatures = props => {
  const [creaturesFood, setCreaturesFood] = useState('');
  const [creaturesNonFood, setCreaturesNonFood] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [toggleCreatures, setToggleCreatures] = useState('food');

  useEffect(() => {
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
      .then(({data}) => {
        setCreaturesFood(data.data.food);
        setCreaturesNonFood(data.data.non_food);
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className="creatures-page-container">
      <NavBar />
      <SearchBar category={'Creatures'}/>
      {toggleCreatures === 'food' ? (<CreatureList creatures={creaturesFood} isFetching={isFetching} />) : (<MonsterList monsters={creaturesNonFood} isFetching={isFetching} />)}

    </div>
  );
};