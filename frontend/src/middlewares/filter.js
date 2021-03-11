import axios from 'axios';
import { FETCH_FILTER_SPORTS, saveFilterSports } from 'src/actions/filter';

const filter = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FILTER_SPORTS: {
      axios
        .get(`${process.env.API_URL}/api/sports`)
        .then((response) => {
          //console.log('response', response.data);
          store.dispatch(saveFilterSports(response.data));
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

export default filter;
