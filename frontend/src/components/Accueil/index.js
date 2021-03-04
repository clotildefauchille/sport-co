import React, { useEffect } from 'react';
import Cards from 'src/containers/Cards';
import SearchBar from 'src/components/searchbar';

import './style.scss';

const Accueil = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="home">
      <div>
        <SearchBar />
        <Cards />
      </div>
    </main>
  );
};

export default Accueil;
