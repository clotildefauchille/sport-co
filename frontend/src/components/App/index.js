// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Accueil from 'src/containers/Accueil';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Login from 'src/containers/Login';
import './styles.css';

// == Composant
const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Accueil />
      </Route>
      <Route path="/connexion" exact>
        <Login />
      </Route>
    </Switch>
    <Footer />
  </>
);

// == Export
export default App;
