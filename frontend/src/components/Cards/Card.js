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
const Card = ({ card, showLoginModal }) => {
  // console.log('CARD', card);
  return (
    <article className="card">
      <a href="#" className="card__link">
        <img src={sports[card.title]} alt="" className="card__image" />
        <h2 className="card__title">{card.title}</h2>
        <div className="card__infos">
          <div className="card__container">
            <img src={clock} alt="" className="card__icon" />
            <p className="card__text">
              {card.time} - {card.date}
            </p>
          </div>
          <div className="card__container">
            <img src={pin} alt="" className="card__icon" />
            <p className="card__text">
              {card.city}
              {card.distance && (
                <>
                  <br />({parseFloat(card.distance).toFixed(1)} km)
                </>
              )}
            </p>
          </div>
        </div>
        <p className="card__description">{card.description}</p>
      </a>
      <button onClick={showLoginModal} className="card__join" type="button">
        Rejoindre
      </button>
    </article>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  showLoginModal: PropTypes.func.isRequired,
};

// == Export
export default Card;
