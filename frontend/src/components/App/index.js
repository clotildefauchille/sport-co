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
import Error404 from 'src/components/Error404';
import Team from 'src/components/Team';
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
      
      <Route path="/connexion" exact>
        <Login />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/equipe">
        <Team />
      </Route>

      <Route>
        <Error404 />
      </Route>

    </Switch>
    <Footer />

    <LoginModal />
  </>
)};

// == Export
export default App;
