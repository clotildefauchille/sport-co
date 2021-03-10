import axios from 'axios';
import {
  SEND_ACTIVITY_INFORMATION,
  FETCH_SPORTS,
  saveSports,
} from 'src/actions/creationPage';

const creationPage = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_ACTIVITY_INFORMATION:
      {
        const { creationPage, login } = store.getState();
        console.log("sport_id", creationPage.sport_id);
        // console.log('idUser', creationPage.time);

        axios
          .post(`${process.env.API_URL}/api/newactivity`, {
            title: creationPage.title,
            description: creationPage.description,
            date: creationPage.date,
            time: creationPage.time,
            duration: creationPage.duration,
            min_participant: creationPage.min_participant,
            creator_id: login.user.id,
            activity_place_id: 1,
            activity_status_id: 3,
            sport_id: creationPage.sport_id,
          })
          .then((response) => {
            // store.dispatch(saveCreationActivityInfo(response.data));
            // // quand on a une réponse en succès, on peut charger les favoris de l'utilisateur
            // // on dispatch une action pour ça
            // store.dispatch(fetchFav());
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    case FETCH_SPORTS:
      axios.get(`${process.env.API_URL}/api/sports`, {})
        .then((response) => {
        //  console.log('fetchsport response', response.data)
         store.dispatch(saveSports(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
      next(action);
  }
};

export default creationPage;
