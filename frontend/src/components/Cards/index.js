// == Import npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import
import Card from 'src/containers/Card';
import MoreResults from 'src/containers/MoreResults';

import './style.scss';

// == Composant
const Cards = ({ count, activities }) => {
  const cardsCreated = activities.map((oneCard) => (
    <Card key={oneCard.id} card={oneCard} />
  ));
  return (
    <>
      <section className="container cards">{cardsCreated}</section>
      {count > activities.length ? <MoreResults /> : <></>}
    </>
  );
};

Cards.propTypes = {
  activities: PropTypes.array.isRequired,
  count: PropTypes.number,
};

// == Export
export default Cards;
