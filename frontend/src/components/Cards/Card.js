// == Import npm
import React from 'react';

// == Import
import './style.scss';

// images sport
import pin from 'src/assets/pin.svg';
import clock from 'src/assets/clock.svg';

import sports from './sports';

// == Composant
const Card = ({ card }) => (
  <article className="card">
    <a href="#" className="card__link">
      <img src={sports.golf} alt="" className="card__image" />
      <h2 className="card__title">{card.title}</h2>
      <div className="card__infos">
        <div className="card__container">
          <img src={clock} alt="" className="card__icon" />
          <p className="card__text">{card.time} - {card.date}</p>
        </div>
        <div className="card__container">
          <img src={pin} alt="" className="card__icon" />
          <p className="card__text">{card.activity_place.city}</p>
        </div>
      </div>
      <p className="card__description">{card.description}</p>
    </a>
    <button className="card__join" type="button">Rejoindre</button>
  </article>
);

// == Export
export default Card;
