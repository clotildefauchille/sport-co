import axios from 'axios';
import {
  SEND_ACTIVITY_INFORMATION,
  saveCreationActivityInfo,
} from 'src/actions/creationPage';

const creationPage = (store) => (next) => (action) => {switch (action.type) {
    case SEND_ACTIVITY_INFORMATION: {
      const {creationPage, login} = store.getState();
      // console.log("titleActivity", creationPage);
      console.log('idUser', creationPage.time);
      
      axios
        .post(`${process.env.API_URL}/api/newactivity`, {
          title: creationPage.activityTitle,
          description: creationPage.description,
          date: creationPage.date,
          time: creationPage.time,
          duration: creationPage.duration,
          min_participant: creationPage.minParticipant,
          creator_id: login.user.id,
          activity_place_id: 1,
          activity_status_id: 3,
          sport_id: 1,
        })
        .then((response) => {
          store.dispatch(saveCreationActivityInfo(response.data));
          // quand on a une réponse en succès, on peut charger les favoris de l'utilisateur
          // on dispatch une action pour ça
          store.dispatch(fetchFav());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
       console.log('je veux envoyer les info en back')
    }
 default:
 next(action);
};
};

export default creationPage;
