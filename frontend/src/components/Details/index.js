// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import userIcon from 'src/assets/icons/account_circle.svg';
import sports from 'src/components/Card/sports';

const sport = "yoga";

const Details = ({ activity, fetchDataActivity }) => {
  useEffect(() => {
    fetchDataActivity();
  }, []);

  return (
    <main
      className="activity"
      style={{
        backgroundImage: `url(${sports[sport]})`,
      }}
    >
      {activity.id && (
        <>
          <section className="activity__header">
            <h1 className="activity__title">{activity.title}</h1>
            <p className="activity__timeplace">
              Le {activity.date} à {activity.time} à{' '}
              {activity.activity_place.city}
            </p>
            <p className="activity__duration">Durée : {activity.duration}</p>
            <button type="button" className="activity__join">
              Rejoindre
            </button>
          </section>
          <section className="activity__details">
            <div className="activity__description">
              <h2 className="activity__descriptionTitle">Description :</h2>
              <p>{activity.description}</p>
            </div>
            <div className="activity__creator">
              <img
                src={userIcon}
                className="activity__userIcon"
                alt="user icon"
              />
              <div className="activity__container">
                <p className="activity__pseudo">{activity.creator.pseudo}</p>
                <p className="activity__role">Créateur</p>
              </div>
            </div>
            <div className="activity__participants">
              <img
                src={userIcon}
                className="activity__participantsIcon"
                alt="participants icon"
              />
              <div className="activity__container">
                <p className="activity__participantsNumber">
                  {activity.participant_count} participant(s)
                </p>
                <p className="activity__minParticipants">
                  Participants minimum : {activity.min_participant}
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

Details.propTypes = {
  activity: PropTypes.object.isRequired,
  fetchDataActivity: PropTypes.func.isRequired,
};

export default Details;
