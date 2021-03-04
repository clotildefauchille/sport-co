// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Accueil from 'src/containers/Accueil';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './styles.css';

// == Composant
const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Accueil />
      </Route>
    </Switch>
    <Footer />
  </>
);

// == Export
export default App;
