import axios from 'axios';
import { FETCH_LAST_ACTIVITIES, saveLastActivities } from 'src/actions/cards';

const lastActivities = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_LAST_ACTIVITIES: {
      axios
        .get(`${process.env.API_URL}/activities`)
        .then((response) => {
          // console.log('response', response);
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

export default lastActivities;
