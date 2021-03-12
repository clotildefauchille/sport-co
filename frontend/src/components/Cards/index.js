// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Card from 'src/containers/Card';

import './style.scss';

// == Composant
const Cards = ({ cards, userActivitiesIds, userActivitiesCreatorIds }) => {
  /*
  const cardsCreated = cards.map((oneCard) => (
    <Card key={oneCard.id} card={oneCard} />
  ));
  */
  const cardsCreated = [];
  cards.forEach(card => {
    if(userActivitiesCreatorIds.includes(card.id)) {
      cardsCreated.push(<Card key={`card-${card.id}`} card={card} userCard={2} />)
    } else if(userActivitiesIds.includes(card.id)) {
      cardsCreated.push(<Card key={`card-${card.id}`} card={card} userCard={1} />)
    } else {
      cardsCreated.push(<Card key={`card-${card.id}`} card={card} userCard={0} />)
    }
  });

  return (
    <>
    <section className="container cards">
      {cardsCreated}
    </section>
    </>
  );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  userActivitiesIds: PropTypes.array.isRequired,
  userActivitiesCreatorIds: PropTypes.array.isRequired,
};

// == Export
export default Cards;
