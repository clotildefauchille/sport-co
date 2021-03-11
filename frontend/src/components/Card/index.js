// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// images sport
import pin from 'src/assets/icons/pin.svg';
import clock from 'src/assets/icons/clock.svg';

import sports from './sports';

// == Composant
const Card = ({ card, isLogged, showLoginModal }) => {
  const urlPath = `/activity/${card.id}`;
  switch (isLogged) {
    case true:
      return (
        <article className="card">
          <Link to={urlPath} className="card__link">
            <img src={sports[card.sport.name]} alt="" className="card__image" />
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
                  {card.activity_place.city}
                  {card.activity_place.distance && (
                    <>
                      <br />(
                      {parseFloat(card.activity_place.distance).toFixed(1)} km)
                    </>
                  )}
                </p>
              </div>
            </div>
            <p className="card__description">{card.description}</p>
          </Link>
          <button className="card__join" type="button">
            Rejoindre
          </button>
        </article>
      );
    default:
      return (
        <article className="card">
          <button type="button" onClick={showLoginModal} className="card__link">
            <img src={sports[card.sport.name]} alt="" className="card__image" />
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
                  {card.activity_place.city}
                  {card.activity_place.distance && (
                    <>
                      <br />(
                      {parseFloat(card.activity_place.distance).toFixed(1)} km)
                    </>
                  )}
                </p>
              </div>
            </div>
            <p className="card__description">{card.description}</p>
          </button>
          <button
            onClick={showLoginModal}
            className="card__join"
            type="button"
          >
            Rejoindre
          </button>
        </article>
      );
  }
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  showLoginModal: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default Card;
