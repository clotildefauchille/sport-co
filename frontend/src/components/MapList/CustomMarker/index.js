import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { Link } from 'react-router-dom';
import { Marker } from 'react-map-gl';
import sports from '../../Card/sports';

const CustomMarker = ({ marker, user }) => {
  return (
    <Marker
      longitude={parseFloat(marker.lng)}
      latitude={parseFloat(marker.lat)}>

      <div className={user ? 'marker marker--user' : 'marker'}>
       {!user && (
          <div className="marker__card">

            {marker.activities.length > 0 && (
              marker.activities.map((activity, index) => {
                return (
                  <Link to={`/activity/${activity.id}`} key={`activity-${index}`} className="marker__link">
                    <img src={sports[activity.icon]} alt="" className="marker__image" />
                    <div className="marker__title">{activity.title} {activity.icon}</div>
                    <div className="marker__date">{activity.time} - {activity.date}</div>
                  </Link>
                )
              })
            )}

          </div>
        )}
      </div>
    </Marker>
  );
};

CustomMarker.propTypes = {
  index: PropTypes.number.isRequired,
  marker: PropTypes.object.isRequired,
};

export default CustomMarker;
