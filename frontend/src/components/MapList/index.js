import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import ReactMapGL from 'react-map-gl';
import CustomMarker from './CustomMarker'; 

const MapList = ({ activities, lat, lng }) => {

  const [classNameMap, setClassNameMap] = useState('map-list')

  useEffect(() => {
    console.log(activities);
  }, [activities])

  useEffect(() => {
    setViewport({
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      zoom: 12,
    })
  }, [lat, lng])

  const [viewport, setViewport] = useState({
    latitude: parseFloat(lat),
    longitude: parseFloat(lng),
    zoom: 12,
  });

  const handleChangeMapSize = () => {
    console.log('test');
    if(classNameMap === 'map-list') {
      setClassNameMap('map-list map-list--open');
    } else {
      setClassNameMap('map-list');
    }
  }
  
  return (
    <>
      {activities && (
        <div className={classNameMap}>
          <button className="map-list__button-open" onClick={handleChangeMapSize}>Voir sur la carte</button>
          <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={(viewport) => setViewport(viewport)}
            // TOKEN à sécurisé
            mapboxApiAccessToken={'pk.eyJ1IjoiYm9yaXNjb3VkZXJjIiwiYSI6ImNrbGszY2pjODF5YTAydnByaTZveGs5azIifQ.lyPoAYY3DSqpu8D8R1ULGw'}
          >
            {activities[0] &&
              activities.map((activity, index) => {
                return(
                  <CustomMarker
                    key={`marker-${index}`}
                    index={index}
                    user={false}
                    activity={activity}
                  />
                )
              })
            }
            <CustomMarker
              key={`marker-user`}
              index={0}
              user={true}
              activity={{
                activity_place: {
                  lat: parseFloat(lat),
                  lng: parseFloat(lng),
                }
              }}
            />
          </ReactMapGL>
        </div>
      )}
    </>
  );
};

MapList.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default MapList;
