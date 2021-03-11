import axios from 'axios';

import {
  FETCH_LAST_ACTIVITIES,
  saveActivities,
} from 'src/actions/cards';

import {
  FETCH_ACTIVITIES_BY_LOCALISATION,
  saveSearchedActivities,
} from 'src/actions/search';

import {
  FETCH_DATA_ACTTIVITY,
  saveActivity,
  JOIN_ACTIVITY,
} from 'src/actions/details';

const activities = (store) => (next) => (action) => {
  const idParams = action.id;

  const { details } = store.getState();
  const { user } = store.getState().login;
  switch (action.type) {

    case FETCH_LAST_ACTIVITIES:
      axios
        .get(`${process.env.API_URL}/api/activities`)
        .then((response) => {
          store.dispatch(saveActivities(response.data));
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;

    case FETCH_DATA_ACTTIVITY:
      axios
        .get(`${process.env.API_URL}/api/activity/${idParams}`)
        .then((response) => {
          store.dispatch(saveActivity(response.data));
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;

    case FETCH_ACTIVITIES_BY_LOCALISATION:
      console.log('action.query ----> ', action.query);
      const lat = parseFloat(action.query.lat);
      const lng = parseFloat(action.query.lng);
      if(lat && lng) {
        console.log('FETCH_ACTIVITIES_BY_LOCALISATION');
        axios
        .get(`${process.env.API_URL}/api/place?lat=${lat}&lng=${lng}&page=1`)
        .then((response) => {
          store.dispatch(saveSearchedActivities(response.data));
        })
        .catch((error) => {
          console.log('error', error);
        });
      }
      break;
    case JOIN_ACTIVITY:
      if (!user.pseudo) {
        console.error('ERROR il faut être connecté pour rejoindre une activité');
        break;
      }
      axios
        .get(`${process.env.API_URL}/api/activity/join`, {
          id: details.id,
          pseudo: user.pseudo,
        })
        .then((response) => {
          store.dispatch(saveSearchedActivities(response.data));
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;
    default:
      next(action);
  }
};

export default activities;
