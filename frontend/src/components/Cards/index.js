// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Card from 'src/containers/Card';
import MoreResults from 'src/containers/MoreResults';

import './style.scss';

// == Composant

const Cards = ({
  count,
  activities,
  userActivitiesIds,
  userActivitiesCreatorIds,
}) => {
  /*
  const cardsCreated = cards.map((oneCard) => (

    <Card key={oneCard.id} card={oneCard} />
  ));
  */
  const cardsCreated = [];

  if (activities) {
    activities.forEach((card) => {
      if (userActivitiesCreatorIds.includes(card.id)) {
        cardsCreated.push(
          <Card key={`card-${card.id}`} card={card} userCard={2} />,
        );
      } else if (userActivitiesIds.includes(card.id)) {
        cardsCreated.push(
          <Card key={`card-${card.id}`} card={card} userCard={1} />,
        );
      } else {
        cardsCreated.push(
          <Card key={`card-${card.id}`} card={card} userCard={0} />,
        );
      }
    });
  }

  return (
    <>
      <section className="container cards">{cardsCreated}</section>
      {count > cardsCreated.length ? <MoreResults /> : <></>}
    </>
  );
};

Cards.propTypes = {
  // activities: PropTypes.array.isRequired,
  count: PropTypes.number,
  userActivitiesIds: PropTypes.array.isRequired,
  userActivitiesCreatorIds: PropTypes.array.isRequired,
};

// == Export
export default Cards;
