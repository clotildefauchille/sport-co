// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const Details = ({ contenuFake, fetchDataActivity }) => {

  useEffect(() => {
    fetchDataActivity();
  }, []);

  console.log('contenuFake', contenuFake);

  return (
    <main className="activity">
      <section className="activity__header">
        <h1 className="activity__title">Intitulé de l'activité</h1>
        <p className="activity__timeplace">Lundi 1 mars à 18h00 à Montpellier</p>
        <p className="activity__duration">Durée: 2h</p>
        <button className="activity__join">Rejoindre</button>
      </section>
      <section className="activity__details">
        <p className="activity__description">Sinon on fait un tunnel jusqu'à notre campement. Léodagan et moi on creuse, pendant vous balancez de la caillasse dans l'autre sens pour les éloigner du chantier. On construit un barrage, après on lance de la caillasse de l'autre côté de la rivière pour faire croire aux autres qu'on a traversé dans l'autre sens, une fois qu'ils sont au milieu, on casse le barrage et on les noie.</p>
        <div className="activity__creator">
          <img className="activity__userIcon" />
          <div className="activity__container">
            <p className="activity__pseudo">Pseudo</p>
            <p className="activity__role">Créateur</p>
        </div>  
        </div>
        <div className="activity__participants">
          <img className="activity__participantsIcon" /> 
          <div className="activity__container">
            <p className="activity__participantsNumber">3 participants</p>
            <p className="activity__minParticipants">Participants minimum : 5</p>
          </div>
        </div>
      </section>
    </main>
  )
};

Details.propTypes = {
  contenuFake: PropTypes.string.isRequired,
};

export default Details;