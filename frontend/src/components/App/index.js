// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Accueil from 'src/containers/Accueil';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import './styles.css';

// == Composant
const App = () => {

 return (
  <>
    <Header />
    <Switch>

      <Route path="/" exact>
        <Accueil />
      </Route>

    </Switch>
    <Footer />
  </>
)};

// == Export
export default App;
