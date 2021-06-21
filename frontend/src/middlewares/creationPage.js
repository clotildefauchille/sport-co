import axios from "axios";
import {
  SEND_ACTIVITY_INFORMATION,
  //saveCreationActivityInfo,
  FETCH_SPORTS,
  saveSports,
  errorNotFoundPlace,
  activityCreated,
} from "src/actions/creationPage";

import { fetchUserActivities } from "src/actions/cards";
const apiKey = "pk.eyJ1IjoiY2xvdGlsZGVmYXVjaGlsbGUiLCJhIjoiY2ttbHNmN2NqMDkybTJxbGV1cXVtajN1ciJ9.HwrFTMH3ACUvSoQQ1NBB_g";
// const apiKey = '82a0b22e81932aad65c97e8bcc2f192a';

const creationPage = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_ACTIVITY_INFORMATION:
      {
        // console.log('sendActivityInformation')
        const { creationPage, login } = store.getState();
        console.log("creationPage.adress", creationPage.adress)
        axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${creationPage.address} ${creationPage.city} ${creationPage.zip_code}.json?access_token=${apiKey}&autocomplete=true&country=fr&types=address%2Cpoi%2Cpostcode%2Clocality%2Cplace&limit=1`,
          )
          .then((response) => {
            console.log('response creationPage middleware', response.data.features[0]);
            const responseApiPlace = response.data.features[0];

            if (!responseApiPlace) {
              console.log("error");
              store.dispatch(
                errorNotFoundPlace(
                  "il n'existe pas de lieu à ce nom, veuillez réssayer",
                ),
              );
              return;
            }
            let name = '';
            if (responseApiPlace.matching_text) {
              name = responseApiPlace.matching_text
            } else if (responseApiPlace.text) {
              name = responseApiPlace.text
            }
            const placeObj = responseApiPlace.context.find(item => item.id.startsWith('place'));
            const regionObj = responseApiPlace.context.find(item => item.id.startsWith('region'));
            const postcodeObj = responseApiPlace.context.find(item => item.id.startsWith('postcode'));

            const place = placeObj ? placeObj.text : '';
            const region = regionObj ? regionObj.text : '';
            const postcode = postcodeObj ? postcodeObj.text : '';
            console.log('place, region, postcode', place, region, postcode);
            axios
              .post(
                `${process.env.API_URL}/api/newactivity`,
                {
                  title: creationPage.title,
                  description: creationPage.description,
                  date: creationPage.date,
                  time: creationPage.time,
                  duration: creationPage.duration,
                  min_participant: creationPage.min_participant,
                  creator_id: login.user.id,
                  place: {
                    city: place,
                    adress: creationPage.adress,
                    zip_code: postcode,
                    region,
                    latitude: responseApiPlace.geometry.coordinates[1],
                    longitude: responseApiPlace.geometry.coordinates[0],
                  },
                  activity_status_id: 3,
                  sport_id: creationPage.sport_id,
                },
                // pour set/get cookies /!\
                { withCredentials: true }
                // pour passer token de localStorage
                /*, {
                headers: {
                  //Authorization: `bearer ${state.user.token}`,
                  // recup token in localStorage
                  Authorization: `bearer ${token}`,
                }
              }*/
              )
              .then((response) => {
                store.dispatch(activityCreated());
                store.dispatch(fetchUserActivities());
              });
          })
          .catch((error) => {
            if (error.response.status === 401) {
              // store.dispatch(disconnect());
            }
            console.log(error);
          });
      }
      break;

    case FETCH_SPORTS:
      axios
        .get(`${process.env.API_URL}/api/sports`, {})
        .then((response) => {
          // console.log('fetchsport response', response.data)
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
