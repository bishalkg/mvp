import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { NavBar } from '../components/NavBar.jsx';
import { MonsterList } from './MonsterList.jsx';

export const Monsters = props => {
  const [monsters, setMonsters] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
      .then(({data}) => {
        setMonsters(data.data);
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
      <div className="monsters-page-container">
        <NavBar />
        {/* <h3>Monsters View</h3> */}
        <MonsterList isFetching={isFetching} monsters={monsters}/>
      </div>

  );
};