// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <Switch>
    <Route path="/" exact>
      <div className="app">
        <img src={reactLogo} alt="react logo" />
        <h1>Composant : App</h1>
      </div>
    </Route>
  </Switch>
);

// == Export
export default App;
