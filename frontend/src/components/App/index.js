// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Accueil from 'src/components/Accueil';
import './styles.css';

// == Composant
const App = () => (
  <Switch>
    <Route path="/" exact>
      <Accueil />
    </Route>
  </Switch>
);

// == Export
export default App;
