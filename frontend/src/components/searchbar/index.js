// == Import npm
import React from 'react';

// == Import
import './style.scss';

import pin from 'src/assets/pin.svg';

// == Composant
const SearchBar = () => (
  <section className="searchbar">
    <div className="searchbar__container">
      <input className="searchbar__input" type="text" placeholder="Ou chercher vous une activité?" />
      <img className="searchbar__icon" src={pin} alt="map pin" />
      <button className="searchbar__button" type="button">Rechercher</button>
    </div>
    <p className="searchbar__spacer">OU</p>
    <a className="searchbar__link" href="">Créer une activité</a>
  </section>
);

// == Export
export default SearchBar;
