import React, { useEffect } from 'react';
import Cards from 'src/containers/Cards';

import './style.scss';

const Accueil = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home">
      <Cards />
    </div>
  );
};

export default Accueil;
