import React, { useEffect } from 'react';
import Cards from 'src/containers/Cards';
import UserCards from 'src/containers/UserCards';
import SearchBar from 'src/containers/SearchBar';

import PropTypes from 'prop-types';

import './style.scss';

const Accueil = ({
  fetchData,
  isLogged,
  user,
  userActivities,
  points,
  registredActivities,
  myCreatedActivities,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isLogged) {
      fetchData();
    }
  }, [isLogged]);

  console.log('isLogged', isLogged, user);
  const mainClassName = isLogged
    ? 'home home--img home--logged'
    : 'home home--img';

  const displayUserInfo =
    myCreatedActivities > 0 || registredActivities > 0 || points > 0
      ? true
      : false;

  return (
    <main className={mainClassName}>
      {isLogged ? (
        <div className="hero hero--logged">
          <h1 className="hero__title">
            Hello <span className="hero__title-color">{user.pseudo}</span>
          </h1>

          {displayUserInfo && (
            <>
              <div className="hero__txt-user">
                {myCreatedActivities > 0 && (
                  <>
                    Tu as crée{' '}
                    <span className="hero__txt-user--green">
                      {myCreatedActivities} activité(s)
                    </span>
                    ,{' '}
                  </>
                )}
                {registredActivities > 0 && (
                  <>
                    tu es inscrit à{' '}
                    <span className="hero__txt-user--orange">
                      {registredActivities} activité(s)
                    </span>{' '}
                    !
                  </>
                )}
                {points > 0 && (
                  <>
                    <br />
                    et gagné{' '}
                    <span className="hero__txt-user--orange">
                      {points} points
                    </span>{' '}
                    Fairplay !
                  </>
                )}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="hero">
          <h1 className="hero__title">
            <span className="hero__title-color">
              Rejoins les sportifs motivés
            </span>
            <br />
            de ton quartier
          </h1>
          <div className="hero__sub-title">
            Découvres et programmes de nouvelles activités sportives autour de
            toi, boostes ta motivation grâce au groupe et activités régulières !
          </div>
        </div>
      )}

      <SearchBar />

      {isLogged ? (
        <>
          {userActivities.length > 0 && (
            <>
              <h2 className="heading-2">Mes prochaines activités :</h2>
              <UserCards />
            </>
          )}
        </>
      ) : (
        <>
          <h2 className="heading-2">
            Explorez les dernières activités proposées :
          </h2>
          <Cards />
        </>
      )}
    </main>
  );
};

Accueil.propTypes = {
  fetchData: PropTypes.func.isRequired,
  fetchUserActivities: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  points: PropTypes.number,
  
};

Accueil.defaultProps = {
  points: 0,
  
};
export default Accueil;
