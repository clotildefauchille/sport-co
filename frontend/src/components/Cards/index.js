// == Import npm
import React from 'react';

// == Import
import './style.scss';

// images sport
import pin from 'src/assets/pin.svg';
import clock from 'src/assets/clock.svg';

import sports from './sports';

// == Composant
const Cards = () => (
  <article className="card">
    <a href="#" className="card__link">
      <img src={sports.golf} alt="" className="card__image" />
      <h2 className="card__title">Sport</h2>
      <div className="card__infos">
        <div className="card__container">
          <img src={clock} alt="" className="card__icon" />
          <p className="card__text">14:00 - lundi 1 mars</p>
        </div>
        <div className="card__container">
          <img src={pin} alt="" className="card__icon" />
          <p className="card__text">Montpellier</p>
        </div>
      </div>
      <p className="card__description">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
      </p>
    </a>
    <button className="card__join" type="button">Rejoindre</button>
  </article>
);

// == Export
export default Cards;
