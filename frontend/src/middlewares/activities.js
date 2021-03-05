import axios from 'axios';
import { FETCH_LAST_ACTIVITIES, saveLastActivities } from 'src/actions/cards';
import { FETCH_ACTIVITIES_BY_LOCALISATION } from 'src/actions/searchBar';
const activities = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_LAST_ACTIVITIES: {
      axios
        .get(`${process.env.API_URL}/activities`)
        .then((response) => {
          console.log('response last activity', response);
          store.dispatch(saveLastActivities(response.data));
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;
    }
    case FETCH_ACTIVITIES_BY_LOCALISATION: {
      const {lat, lng}= store.getState().searchBar.autocompleteList[0];
      axios
        .get(`${process.env.API_URL}/place?lat=${lat}&lng=${lng}&page=1`)
        .then((response) => {
          console.log('response by location', response);
          store.dispatch(saveLastActivities(response.data));
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default activities;
