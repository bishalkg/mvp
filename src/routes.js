import React from 'react';
import { LandingPage } from './components/LandingPage.jsx'
import { Home } from './views/Home.jsx';
import { Creatures } from './views/Creatures.jsx';
import { Equipment } from './views/Equipment.jsx';
import { Materials } from './views/Materials.jsx';
import { Monsters } from './views/Monsters.jsx';
import { Treasure } from './views/Treasure.jsx';
// import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Creatures" component={Creatures} />
        <Route exact path="/Equipment" component={Equipment} />
        <Route exact path="/Materials" component={Equipment} />
        <Route exact path="/Monsters" component={Equipment} />
        <Route exact path="/Treasure" component={Equipment} />
      </Switch>
    </div>
  );
};