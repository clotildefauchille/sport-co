import axios from 'axios';
import {
  FETCH_REGISTRATION_FORM,
  passwordError,
  emailError,
  pseudoError,
  resetErrors,
} from 'src/actions/registration';

const registration = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REGISTRATION_FORM: {
      const formData = store.getState().registration;
      console.log('registration store', formData);
      store.dispatch(resetErrors());

      if (formData.password !== formData.confirmPassword) {
        store.dispatch(passwordError());
        break;
      }
      else {
        axios
          .post(`${process.env.API_URL}/api/registration`, {
            pseudo: formData.pseudo,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            firstname: formData.firstname,
            lastname: formData.lastname,
            place: {
              city: formData.city,
              number: '75',
              street: 'Rue Simone Veil',
              postal_code: '34470',
              region: 'Hérault',
              latitude: 43.574837,
              longitude: 3.936389,
            },
            presentation: formData.presentation,
          })
          .then((response) => {
            console.log('response', response.data);
          })
          .catch((error) => {
            console.log('error', error.response.data);
            if (error.response.data.error === 'mail') {
              store.dispatch(emailError());
            }
            else if (error.response.data.error === 'pseudo') {
              store.dispatch(pseudoError());
            }
          });
        break;
      }
    }
    default:
      next(action);
  }
};

export default registration;
