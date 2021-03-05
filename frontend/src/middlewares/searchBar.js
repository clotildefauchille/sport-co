import axios from "axios";
import {
  FETCH_PLACES_AUTOCOMPLETION,
  saveAutocompletionList,
} from 'src/actions/searchBar';

const searchBar = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_PLACES_AUTOCOMPLETION: {
            const inputValue = store.getState().searchBar.inputValue;

            // verif à stocker ailleur :
            const apiKey = `82a0b22e81932aad65c97e8bcc2f192a`;

            axios
            .get(
              `http://api.positionstack.com/v1/forward?access_key=${apiKey}&country=FR&query=${inputValue}`,
            )
            .then((response) => {
              const formatedData = [];
              response.data.data.forEach((element) => {
                if (element.type !== 'venue') {
                  formatedData.push({
                    name: element.name,
                    city: element.locality,
                    reg: element.region,
                    lat: element.latitude,
                    lon: element.longitude,
                  });
                }
              });
              store.dispatch(saveAutocompletionList(formatedData));
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

export default searchBar;
