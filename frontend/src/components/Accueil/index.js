import React, { useEffect } from 'react';
import Cards from 'src/containers/Cards';
import SearchBar from 'src/containers/SearchBar';
import MoreResults from 'src/containers/MoreResults';

import './style.scss';

const Accueil = ({ fetchData, pageValue, paginationReset }) => {

  useEffect(() => {
    paginationReset();
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchData();
  }, [pageValue]);

  return (
    <main className="home home--img">
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
      <SearchBar />
      <h2 className="heading-2">
        Explorez les dernières activités proposées :
      </h2>
      <Cards />
    </main>
  );
};

export default Accueil;
