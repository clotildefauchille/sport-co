import axios from 'axios';
import {
  SEND_ACTIVITY_INFORMATION,
  FETCH_SPORTS,
  saveSports,
} from 'src/actions/creationPage';

const apiKey = '82a0b22e81932aad65c97e8bcc2f192a';


const creationPage = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_ACTIVITY_INFORMATION:
      {
        // console.log('sendActivityInformation')
        const { creationPage, login } = store.getState();
        // console.log('sport_id', creationPage.sport_id);
        // console.log('idUser', login.user.id);
        // console.log('adress', creationPage.adress);
        axios
          .get(
            `http://api.positionstack.com/v1/forward?access_key=${apiKey}&country=FR&query=${creationPage.address},${creationPage.zip_code},${creationPage.city}`,
          )
          .then((response) => {
            console.log("response apiPlace", response.data);
            const responseApiPlace = response.data.data[0];
            console.log('responseapiPlace.city', responseApiPlace.locality);
            axios.post(`${process.env.API_URL}/api/newactivity`, {
              title: creationPage.title,
              description: creationPage.description,
              date: creationPage.date,
              time: creationPage.time,
              duration: creationPage.duration,
              min_participant: creationPage.min_participant,
              creator_id: login.user.id,
              place: {
                city: responseApiPlace.locality,
                number: responseApiPlace.number,
                street: responseApiPlace.street,
                postal_code: responseApiPlace.postal_code,
                region: responseApiPlace.region,
                latitude: responseApiPlace.latitude,
                longitude: responseApiPlace.longitude,
              },
              activity_status_id: 3,
              sport_id: creationPage.sport_id,
            });
          })

          .then((responseAPI) => {
            // store.dispatch(saveCreationActivityInfo(response.data));
            // // quand on a une réponse en succès, on peut charger les favoris de l'utilisateur
            // // on dispatch une action pour ça
            // store.dispatch(fetchFav());
            console.log(responseAPI.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    case FETCH_SPORTS:
      axios
        .get(`${process.env.API_URL}/api/sports`, {})
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
