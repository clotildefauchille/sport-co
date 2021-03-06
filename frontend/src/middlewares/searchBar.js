import axios from "axios";
import {
  FETCH_PLACES_AUTOCOMPLETION,
  FETCH_ONE_PLACES_AUTOCOMPLETION,
  fetchActivitiesByLocalisation,
  saveAutocompletionList,
  saveValidLocalisation,
  clearListAutocompleteData,
} from 'src/actions/searchBar';

// verif à stocker ailleur :
const apiKey = `82a0b22e81932aad65c97e8bcc2f192a`;

const searchBar = (store) => (next) => (action) => {
    switch (action.type) {
      
        case FETCH_PLACES_AUTOCOMPLETION:
            const inputValue = store.getState().searchBar.inputValue;
            console.log('FETCH', inputValue );

            axios
            .get(
              `http://api.positionstack.com/v1/forward?access_key=${apiKey}&country=FR&query=${inputValue}`,
            )
            .then((response) => {
              const localisations = response.data.data;

              if(localisations.length > 0) {

                const formatedData = [];
                localisations.forEach((element,index) => {
                  // garde que les résultats avec un name et non de type "venue" (nom de lieu)
                  if (element.type !== 'venue' && element.name) {
                    formatedData.push({
                      id: index,
                      name: element.name,
                      city: element.locality,
                      reg: element.region,
                      lat: element.latitude,
                      lng: element.longitude,
                    });
                  }
                });
                store.dispatch(saveAutocompletionList(formatedData));

              } else {
                // Prevoir info pour UX
                store.dispatch(clearListAutocompleteData());
              }
            })
            .catch((error) => {
              console.log('error', error);
            });
        break;


        case FETCH_ONE_PLACES_AUTOCOMPLETION:
            const inputValue2 = store.getState().searchBar.inputValue;

            console.log('FETCH fetchOnePlacesAutoCompletion ', inputValue2 );

            axios
            .get(
              `http://api.positionstack.com/v1/forward?access_key=${apiKey}&country=FR&limit=1&query=${inputValue2}`,
            )
            .then((response) => {
              const localisation = response.data.data[0];

              // /!\ verif si vide no result -> ALERT ? ...
              if(localisation) {
                const validLocalisation = {
                  id: 0,
                  name: localisation.name,
                  city: localisation.locality,
                  reg: localisation.region,
                  lat: localisation.latitude,
                  lng: localisation.longitude,
                };
                store.dispatch(saveValidLocalisation(validLocalisation));
                store.dispatch(fetchActivitiesByLocalisation());
              }

            })
            .catch((error) => {
              console.log('error', error);
            });
        break;

    default:
        next(action);
    } 
};

export default searchBar;
