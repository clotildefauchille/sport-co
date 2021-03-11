import React, { useEffect } from 'react';
import Cards from 'src/containers/Cards';
import SearchBar from 'src/containers/SearchBar';

import PropTypes from 'prop-types';

import './style.scss';

const Accueil = ({ fetchData, isLogged }) => {
  useEffect(() => {
    fetchData();
  }, []);

  console.log('isLogged', isLogged);


  return (
    <main className="home home--img">

      {isLogged && (
        <div className="hero">
          <h1 className="hero__title"><span className="hero__title-color">Rejoins les sportifs motivés</span><br />
          de ton quartier</h1>
          <div className="hero__sub-title">Découvres et programmes de nouvelles activités sportives autour de toi,
            boostes ta motivation grâce au groupe et activités régulières !</div>
        </div>
      )}

        



        <SearchBar />
        <h2 className="heading-2">Explorez les dernières activités proposées :</h2>
        <Cards />
    </main>
  );
};

Accueil.propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Accueil;
