// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Messages from 'src/containers/Messages';

// == Import
import './style.scss';

const Details = ({ activity, fetchDataActivity }) => {

  useEffect(() => {
    fetchDataActivity();
  }, []);

  console.log('activity.id -----> ', activity.id );

  return (
    <main className="activity">
      {activity.id && (
        <>
        <section className="activity__header">
          <h1 className="activity__title">{activity.title}</h1>
          <p className="activity__timeplace">Le {activity.date} à {activity.time} à {activity.activity_place.city}</p>
          <p className="activity__duration">Durée : {activity.duration}</p>
          <button className="activity__join">Rejoindre</button>
        </section>
        <section className="activity__details">
          <p className="activity__description">{activity.description}</p>
          <div className="activity__creator">
            <img className="activity__userIcon" />
            <div className="activity__container">
              <p className="activity__pseudo">{activity.creator.pseudo}</p>
              <p className="activity__role">Créateur</p>
          </div>  
          </div>
          <div className="activity__participants">
            <img className="activity__participantsIcon" /> 
            <div className="activity__container">
              <p className="activity__participantsNumber">{activity.participant_count} participant(s)</p>
              <p className="activity__minParticipants">Participants minimum : {activity.min_participant}</p>
            </div>
          </div>
        </section>
        <Messages activityId={activity.id} />
        </>
      )}
    </main>
  )
};

Details.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Details;