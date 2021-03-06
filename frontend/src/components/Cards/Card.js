// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// images sport
import pin from 'src/assets/pin.svg';
import clock from 'src/assets/clock.svg';

import sports from './sports';

// == Composant
const Card = ({ card }) => {
  console.log(card);
  return (
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

          {/* modifier api back pour renvoyer toujours même format de json
          <p className="card__text">{card.activity_place.city}</p> */}
          {card.activity_place && 
            <p className="card__text">{card.activity_place.city}</p>
          }
          {card.city && 
            <p className="card__text">{card.city}</p>
          }

        </div>
      </div>
      <p className="card__description">{card.description}</p>
    </a>
    <button className="card__join" type="button">Rejoindre</button>
  </article>
)};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

// == Export
export default Card;
