import React, { useEffect } from 'react';
import Cards from 'src/containers/Cards';
import SearchBar from 'src/containers/SearchBar';

import './style.scss';

const Accueil = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="home">
      {/* <div> */}
        <SearchBar />
        <h2 className="heading-2">Explorez les dernières activités proposées :</h2>
        <Cards />
      {/* </div> */}
    </main>
  );
};

export default Accueil;
