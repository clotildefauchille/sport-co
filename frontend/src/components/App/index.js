// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Accueil from 'src/containers/Accueil';
import Search from 'src/containers/Search';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Login from 'src/containers/Login';
import LoginModal from 'src/containers/LoginModal';
import Registration from 'src/containers/Registration';
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

      <Route path="/inscription" exact>
        <Registration />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

    </Switch>
    <Footer />

    <LoginModal />
  </>
);

// == Export
export default App;
