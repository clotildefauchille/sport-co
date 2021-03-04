// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Card from './Card';
import './style.scss';

// == Composant
const Cards = ({ cards }) => {
  const cardsCreated = cards.map((oneCard) => <Card key={oneCard.id} card={oneCard} />);
  return (
    <section className="cards">
      {cardsCreated}
    </section>
  );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
};

// == Export
export default Cards;