import React, { useEffect } from 'react';
import Cards from 'src/containers/Cards';
import UserCards from 'src/containers/UserCards';
import SearchBar from 'src/containers/SearchBar';

import PropTypes from 'prop-types';

import './style.scss';

const Accueil = ({ fetchData, fetchUserActivities, isLogged, user }) => {

  useEffect(() => {
    if(isLogged) {
      fetchUserActivities();
    } else {
      fetchData();
    }
  }, [isLogged]);

  console.log('isLogged', isLogged, user);
  const mainClassName = isLogged ? "home home--img home--logged" : "home home--img";

  return (
    <main className={mainClassName}>

      {isLogged ? (
        <div className="hero hero--logged">
          <h1 className="hero__title">Hello <span className="hero__title-color">{user.pseudo}</span></h1>

          <div className="hero__txt-user">
            Tu as participé à X activité ce mois de Mars<br />
            x point Fairplay gagné !
          </div>
        </div>
      ) : (
        <div className="hero">
          <h1 className="hero__title"><span className="hero__title-color">Rejoins les sportifs motivés</span><br />
          de ton quartier</h1>
          <div className="hero__sub-title">Découvres et programmes de nouvelles activités sportives autour de toi,
            boostes ta motivation grâce au groupe et activités régulières !</div>
        </div>
      )}

      <SearchBar />

      {isLogged ? (
        <>
          <h2 className="heading-2">Mes prochaines activités :</h2>
          <UserCards />
        </>
      ) : (
        <>
          <h2 className="heading-2">Explorez les dernières activités proposées :</h2>
          <Cards />
        </>
      )}

    </main>
  )
}

Accueil.propTypes = {
  fetchData: PropTypes.func.isRequired,
  fetchUserActivities: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default Accueil;
