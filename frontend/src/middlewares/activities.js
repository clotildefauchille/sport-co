import axios from 'axios';

import {
  FETCH_LAST_ACTIVITIES,
  saveActivities,
  saveAllActivities,
} from 'src/actions/cards';

import {
  FETCH_ACTIVITIES_BY_LOCALISATION,
  FETCH_ACTIVITIES_BY_LOCALISATION_AND_SPORTS,
  saveSearchedActivities,
} from 'src/actions/search';

import { FETCH_DATA_ACTTIVITY, saveActivity } from 'src/actions/details';

const activities = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_LAST_ACTIVITIES:
      const { moreResults } = store.getState();
      const page = moreResults.page;
      console.log(page);
      axios
        .get(`${process.env.API_URL}/api/activities?page=${page}`)
        .then((response) => {
          // if page > 1
          if (page > 1) {
            store.dispatch(saveAllActivities(response.data));
          } else {
            store.dispatch(saveActivities(response.data));
          }
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;

    case FETCH_DATA_ACTTIVITY:
      axios
        .get(`${process.env.API_URL}/api/activity/1`)
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
      if (lat && lng) {
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

    case FETCH_ACTIVITIES_BY_LOCALISATION_AND_SPORTS:
      console.log(
        'action.query FETCH_ACTIVITIES_BY_LOCALISATION_AND_SPORTS ----> ',
        action.query,
      );
      const lat2 = parseFloat(action.query.lat);
      const lng2 = parseFloat(action.query.lng);
      const sports = action.query.sports;

      console.log(action.query.sports);

      if (lat2 && lng2 && sports) {
        console.log('FETCH_ACTIVITIES_BY_LOCALISATION_AND_SPORTS');
        axios
          .get(
            `${process.env.API_URL}/api/activities/sports/?lat=${lat2}&lng=${lng2}&sports=${sports}&page=1`,
          )
          .then((response) => {
            console.log('ressss', response.data);
            store.dispatch(saveSearchedActivities(response.data));
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
      break;

    default:
      next(action);
  }
};

export default activities;
