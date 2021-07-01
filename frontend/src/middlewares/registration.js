import axios from 'axios';
import {
  FETCH_REGISTRATION_FORM,
  passwordError,
  emailError,
  pseudoError,
  cityError,
  resetErrors,
} from 'src/actions/registration';
import { saveConnexionStatut } from 'src/actions/login';

// const apiKey = 'eb10b11d9271f0d376f20456833f4f9b';

const apiKey =
  "pk.eyJ1IjoiY2xvdGlsZGVmYXVjaGlsbGUiLCJhIjoiY2ttbHNmN2NqMDkybTJxbGV1cXVtajN1ciJ9.HwrFTMH3ACUvSoQQ1NBB_g";

const registration = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REGISTRATION_FORM: {
      const formData = store.getState().registration;
      store.dispatch(resetErrors());
      
      if (formData.password !== formData.confirmPassword) {
        store.dispatch(passwordError());
        break;
      } else {
        axios
          // .get(
          //   `http://api.positionstack.com/v1/forward?access_key=${apiKey}&country=FR&query=${formData.address},${formData.postalCode},${formData.city}`,
          // )
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${formData.city}.json?access_token=${apiKey}&autocomplete=true&country=fr&types=address%2Cpoi%2Cpostcode%2Clocality%2Cplace&limit=1`
          )
          .then((response) => {
            //console.log('verif position stack REGISTRATION ', response.data);
            console.log(
              "FETCH_REGISTRATION_FORM response.data.features",
              response.data.features,
            );
            const localisations = response.data.features;
            if (localisations.length > 0) {
              const formatedLocalisations = [];
              localisations.forEach((localisation) => {
                const name = localisation.text ? localisation.text : "";

                const placeObj = localisation.context.find((item) =>
                  item.id.startsWith("place")
                );
                const regionObj = localisation.context.find((item) =>
                  item.id.startsWith("region")
                );
                const postcodeObj = localisation.context.find((item) =>
                  item.id.startsWith("postcode")
                );

                const place = placeObj ? placeObj.text : "";
                const region = regionObj ? regionObj.text : "";
                const postcode = postcodeObj ? postcodeObj.text : "";

                formatedLocalisations.push({
                  query: formData.city,
                  name,
                  city: place,
                  reg: region,
                  postcode,
                  lng: localisation.geometry.coordinates[0],
                  lat: localisation.geometry.coordinates[1],
                });

                console.log("formatedLocalisations", formatedLocalisations)
                console.log("name", formatedLocalisations[0].name)

                axios
                  .post(`${process.env.API_URL}/api/registration`, {
                    pseudo: formData.pseudo,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    place: {
                      city: formatedLocalisations[0].name,
                      number: "",
                      street: "",
                      postal_code: formatedLocalisations[0].postcode,
                      region: formatedLocalisations[0].reg,
                      latitude: formatedLocalisations[0].lat,
                      longitude: formatedLocalisations[0].lng,
                    },
                    presentation: formData.presentation,
                  })
                  .then((APIresponse) => {
                    console.log('response', APIresponse.data.user);
                    localStorage.fairplayUser = JSON.stringify({
                      firsname: APIresponse.data.user.firsname,
                      id: APIresponse.data.user.id,
                      lastname: APIresponse.data.user.lastname,
                      pseudo: APIresponse.data.user.pseudo,
                      points: APIresponse.data.user.points,
                    });
                    store.dispatch(saveConnexionStatut(APIresponse.data.user));
                  })
                  .catch((error) => {
                    //console.error('error', error.response.data);
                    if (error.response.data.error === 'mail') {
                      store.dispatch(emailError());
                    } else if (error.response.data.error === 'pseudo') {
                      store.dispatch(pseudoError());
                    }
                  });
              });
            }
            
          })
          .catch((error) => {
            store.dispatch(cityError());
            console.error('City ERROR', error);
          });

        break;
      }
    }
    default:
      next(action);
  }
};

export default registration;
