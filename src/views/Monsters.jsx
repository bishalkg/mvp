import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { NavBar } from '../components/NavBar.jsx';
import { InfoCard } from '../components/InfoCard.jsx';
import { Loader } from '../components/Loader.jsx';

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
  const { name, common_locations, description, drops, image } = monsters;
  return (
    <>

      {isFetching ? (<div>retreiving mosters...</div>) :
      (<div className="monsters-page-container">
        <NavBar />
        <h3>Monsters View</h3>
          <InfoCard monster={monsters[0]}/>
        <p> This will show the Monsters</p>
      </div>)}

    </>

  );
};